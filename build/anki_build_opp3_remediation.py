#!/usr/bin/env python3
"""Build the LEAN OPP III REMEDIATION deck (.apkg) from the real final's blueprint.

Independent of anki_build.py (which still builds the full course decks). This deck:
  - keeps ONLY cards on the learning objectives that appeared on the COM5125 written final
    (build/_opp3_blueprint.json testedLOs); drops every non-tested LO.
  - flags the objectives you MISSED with a red "✗ MISSED" corner badge + a MISSED tag, and
    orders them first in each lecture subdeck (missed → tested → done).
  - reuses the shared anki SKILL engine for the exact card design + tap-to-define glossary.
New deck name + new note guids → it imports as a SEPARATE deck; the full deck stays as backup.

Run from the repo root:  python3 build/anki_build_opp3_remediation.py
Sources: /tmp/anki_gen/opp3/lec_*.json (notes) + /tmp/anki_src/opp3/lec_*.json (slide meta)
         + quizzes/opp3/slides/<dir>/NN.jpg + build/_opp3_blueprint.json"""
import json, os, sys, hashlib, glob, shutil, re
import genanki

REPO="/Users/sebastiankempa/remediation-quiz-app"
COURSE="opp3"; ABBREV="OPP3"
def det_id(s): return int(hashlib.md5(s.encode()).hexdigest()[:8],16) | 0x40000000

# Shared anki skill engine: card CSS, model_css(), tap-to-define glossary block.
_SKILL_ENGINE="/Users/sebastiankempa/Library/CloudStorage/GoogleDrive-skempa7@gmail.com/My Drive/.claude/skills/anki/engine"
sys.path.insert(0,_SKILL_ENGINE)
import config as _C, engine as _E   # noqa: E402

# corner badges: green "TQ" for tested, red "✗ MISSED" for the ones answered wrong on the final
_BADGE_CSS="""
.card { position: relative; }
.tqx { position:absolute; top:5px; right:7px; font-size:0.40em; font-weight:800; letter-spacing:0.05em;
  color:#7EE2A4; background:rgba(20,61,34,0.88); border:1px solid #2E9D57; border-radius:5px;
  padding:1px 5px 2px; line-height:1.3; text-shadow:none; }
.mqx { position:absolute; top:5px; right:7px; font-size:0.40em; font-weight:800; letter-spacing:0.05em;
  color:#FFB4B4; background:rgba(61,20,20,0.90); border:1px solid #B04545; border-radius:5px;
  padding:1px 5px 2px; line-height:1.3; text-shadow:none; }
"""
MODEL_CSS=_E.model_css()+"\n"+_BADGE_CSS
# MISSED wins over TQ when both are set
_BADGE  ='{{#Missed}}<div class="mqx">✗ MISSED</div>{{/Missed}}{{^Missed}}{{#TQ}}<div class="tqx">TQ</div>{{/TQ}}{{/Missed}}'
_SLIDES ='{{#Image}}<div class="slides">{{Image}}</div>{{/Image}}'
_EXPL   ='{{#Explanation}}<div class="explanation">{{Explanation}}</div>{{/Explanation}}'
_HOOK   ='{{#Hook}}<div class="hook">\U0001F4A1 {{Hook}}</div>{{/Hook}}'
_LEARN  ='{{#LearnMore}}<div class="learnmore"><details><summary>Learn more</summary>{{LearnMore}}</details></div>{{/LearnMore}}'

def build_models(glossary=None):
    gloss=_E._gloss_block(glossary)
    cloze=genanki.Model(det_id("opp3rem-cloze-v1"),"OPP3 Remediation Cloze",
        fields=[{"name":n} for n in ("Text","Image","Explanation","Hook","LearnMore","TQ","Missed")],
        templates=[{"name":"Cloze","qfmt":_BADGE+"{{cloze:Text}}",
                    "afmt":_BADGE+"{{cloze:Text}}\n"+_SLIDES+"\n"+_EXPL+"\n"+_HOOK+"\n"+_LEARN+gloss}],
        css=MODEL_CSS, model_type=genanki.Model.CLOZE)
    basic=genanki.Model(det_id("opp3rem-basic-v1"),"OPP3 Remediation Basic",
        fields=[{"name":n} for n in ("Front","Back","Image","Explanation","Hook","LearnMore","TQ","Missed")],
        templates=[{"name":"Card","qfmt":_BADGE+"{{Front}}",
                    "afmt":'{{FrontSide}}\n<hr id="answer">\n<div class="answer">{{Back}}</div>\n'+_SLIDES+"\n"+_EXPL+"\n"+_HOOK+"\n"+_LEARN+gloss}],
        css=MODEL_CSS)
    return cloze,basic

def main():
    BP=json.load(open(f"{REPO}/build/_opp3_blueprint.json"))
    BP_LEC=BP["lectures"]
    def tested_los(L): return list(BP_LEC.get(str(L),{}).get("testedLOs",[]))
    def missed_los(L): return set(BP_LEC.get(str(L),{}).get("missedLOs",[]))

    GLOSS_PATH=f"{REPO}/build/_remediation_glossary.json"
    glossary=json.load(open(GLOSS_PATH,encoding="utf-8")) if os.path.exists(GLOSS_PATH) else None
    CLOZE_MODEL,BASIC_MODEL=build_models(glossary)

    bundles={int(re.search(r'lec_(\d+)',p).group(1)):json.load(open(p)) for p in glob.glob(f"/tmp/anki_src/{COURSE}/lec_*.json")}
    lecs=sorted(bundles); rng=f"{lecs[0]}-{lecs[-1]}"
    deck_root=f"claudderall::{ABBREV} Remediation lec {rng}"
    media_dir=f"/tmp/anki_media/{COURSE}_rem"; shutil.rmtree(media_dir,ignore_errors=True); os.makedirs(media_dir)
    media=set(); decks=[]
    n_notes=n_cards=n_cloze=n_basic=n_tq=n_miss=n_drop=0; per_lec={}

    def slide_img(L,idx):
        b=bundles[L]; d=b["slideDir"]; cnt=b["slideCount"]
        if not idx or idx<1 or idx>cnt: return None
        src=f"{REPO}/quizzes/{COURSE}/slides/{d}/{idx:02d}.jpg"
        if not os.path.exists(src): return None
        fn=f"{COURSE}rem_L{L}_s{idx:02d}.jpg"
        if fn not in media: shutil.copyfile(src,f"{media_dir}/{fn}"); media.add(fn)
        return fn

    for L in lecs:
        b=bundles[L]; gen=f"/tmp/anki_gen/{COURSE}/lec_{L}.json"
        if not os.path.exists(gen): continue
        notes=json.load(open(gen)).get("notes",[])
        tl=tested_los(L); ml=missed_los(L)
        deck=genanki.Deck(det_id(f"{COURSE}rem-lec-{L}"), f"{deck_root}::lec {L} — {b['title']}")
        ccount=0; kept=0; built=[]   # (rank, note): 0 = missed (first), 1 = tested
        for i,nt in enumerate(notes):
            lo=nt.get("lo"); lo_s=str(lo) if lo is not None else None
            # LEAN: keep only tested objectives (lo-less general cards are kept)
            if lo_s is not None and lo_s not in tl:
                n_drop+=1; continue
            is_missed = lo_s in ml
            imgs=[]
            for idx in (nt.get("slides") or [])[:2]:
                fn=slide_img(L,idx)
                if fn: imgs.append(f'<img src="{fn}">')
            img_html="".join(imgs); expl=(nt.get("explanation") or "").strip()
            hook=(nt.get("hook") or "").strip(); more=(nt.get("learn_more") or "").strip()
            sec=nt.get("section",""); tags=[f"Lec{L}"]
            if lo_s and sec in ("cq","reclaude"): tags.append(f"Lec{L}::LO{L}.{lo_s}")
            elif sec: tags.append(f"Lec{L}::{sec}")
            tqv="Tested on the Final"; tags+=["TQ","TQ::Final"]; n_tq+=1
            missv=""
            if is_missed:
                missv="Missed on the Final"; tags+=["MISSED","MISSED::Final"]; n_miss+=1
            guid=genanki.guid_for(f"{COURSE}rem-{L}-{i}")
            if nt.get("type")=="basic":
                note=genanki.Note(model=BASIC_MODEL,guid=guid,
                    fields=[nt.get("front",""),nt.get("back",""),img_html,expl,hook,more,tqv,missv],tags=tags)
                n_basic+=1; ccount+=1; n_cards+=1
            else:
                txt=nt.get("text","")
                note=genanki.Note(model=CLOZE_MODEL,guid=guid,fields=[txt,img_html,expl,hook,more,tqv,missv],tags=tags)
                ncl=len(set(re.findall(r'{{c(\d+)::',txt))) or 1
                n_cloze+=ncl; ccount+=ncl; n_cards+=ncl
            built.append((0 if is_missed else 1, note)); n_notes+=1; kept+=1
        for _,note in sorted(built, key=lambda x: x[0]):   # missed first, then tested
            deck.add_note(note)
        if kept: per_lec[L]=(kept,ccount,len(tl),len(ml)); decks.append(deck)

    out_dist=f"{REPO}/dist/claudderall {ABBREV} Remediation lec {rng}.apkg"
    out_drive=("/Users/sebastiankempa/Library/CloudStorage/GoogleDrive-skempa7@gmail.com/My Drive/"
               f"claude builds/remy build/OPP3/anki decks/claudderall {ABBREV} Remediation lec {rng}.apkg")
    pkg=genanki.Package(decks); pkg.media_files=[f"{media_dir}/{m}" for m in media]
    for out in (out_dist,out_drive):
        os.makedirs(os.path.dirname(out),exist_ok=True); pkg.write_to_file(out)
    print(f"=== {ABBREV} Remediation deck ===")
    print(f"  {out_dist}")
    print(f"  {out_drive}")
    print(f"  lectures {len(decks)} | notes {n_notes} | cards {n_cards} (cloze {n_cloze}/basic {n_basic})")
    print(f"  TQ-tagged {n_tq} | MISSED-tagged {n_miss} | non-tested cards dropped {n_drop}")
    print(f"  media {len(media)} | tap-to-define terms {len(glossary) if glossary else 0} | {os.path.getsize(out_dist)/1e6:.1f} MB")
    for L in lecs:
        if L in per_lec: kk,cc,tll,mll=per_lec[L]; print(f"   lec {L:2d}: {kk} notes {cc} cards (tested LOs {tll}, missed {mll})")
if __name__=="__main__": main()
