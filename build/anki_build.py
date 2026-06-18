#!/usr/bin/env python3
"""Assemble a claudderall .apkg for one course from per-lecture generated notes
(/tmp/anki_gen/<course>/lec_N.json) + rendered lecture slides. Styling per the Anki spec."""
import json, os, sys, hashlib, glob, shutil, re
import genanki

COURSES={"immuno":("immunology","Immuno"),"path":("pathology","Path"),"pharm":("pharmacology","Pharm"),"opp3":("opp3","OPP3")}
def det_id(s): return int(hashlib.md5(s.encode()).hexdigest()[:8],16) | 0x40000000

# Card design + tap-to-define are inherited from the shared anki SKILL engine (the same engine that
# built the GI 31-34 deck), so these decks MATCH that design exactly. We keep the OLD model IDs +
# field schema below so a re-import RESTYLES existing cards in place (same model id) and preserves
# scheduling — only the look/behavior changes, not the note identity.
_SKILL_ENGINE = "/Users/sebastiankempa/Library/CloudStorage/GoogleDrive-skempa7@gmail.com/My Drive/.claude/skills/anki/engine"
sys.path.insert(0, _SKILL_ENGINE)
import config as _C, engine as _E   # noqa: E402  — skill design constants + model_css() + tap-to-define JS

# The skill's full card CSS (font/colors/halo/explanation/hook/Learn-more/tap-to-define) + a tiny
# corner "TQ" badge for exam-tested cards (replaces the old full "Tested on…" line).
_TQX_CSS = """
.card { position: relative; }
.tqx { position:absolute; top:5px; right:7px; font-size:0.40em; font-weight:800; letter-spacing:0.05em;
  color:#7EE2A4; background:rgba(20,61,34,0.88); border:1px solid #2E9D57; border-radius:5px;
  padding:1px 5px 2px; line-height:1.3; text-shadow:none; }
"""
MODEL_CSS = _E.model_css() + "\n" + _TQX_CSS
_TQX    = '{{#TQ}}<div class="tqx">TQ</div>{{/TQ}}'   # minimal marker; the field still holds the topics (searchable in Anki) but they are NOT shown
_SLIDES = '{{#Image}}<div class="slides">{{Image}}</div>{{/Image}}'
_EXPL   = '{{#Explanation}}<div class="explanation">{{Explanation}}</div>{{/Explanation}}'
_HOOK   = '{{#Hook}}<div class="hook">\U0001F4A1 {{Hook}}</div>{{/Hook}}'
_LEARN  = '{{#LearnMore}}<div class="learnmore"><details><summary>Learn more</summary>{{LearnMore}}</details></div>{{/LearnMore}}'

def build_models(glossary=None):
    """Build the two models with the skill design + (optional) baked-in tap-to-define glossary."""
    gloss = _E._gloss_block(glossary)
    cloze = genanki.Model(det_id("claudderall-cloze-v1"), "Claudderall Cloze",
        fields=[{"name":n} for n in ("Text","Image","Explanation","Hook","LearnMore","TQ")],
        templates=[{"name":"Cloze","qfmt":_TQX+"{{cloze:Text}}",
                    "afmt":_TQX+"{{cloze:Text}}\n"+_SLIDES+"\n"+_EXPL+"\n"+_HOOK+"\n"+_LEARN+gloss}],
        css=MODEL_CSS, model_type=genanki.Model.CLOZE)
    basic = genanki.Model(det_id("claudderall-basic-v1"), "Claudderall Basic",
        fields=[{"name":n} for n in ("Front","Back","Image","Explanation","Hook","LearnMore","TQ")],
        templates=[{"name":"Card","qfmt":_TQX+"{{Front}}",
                    "afmt":'{{FrontSide}}\n<hr id="answer">\n<div class="answer">{{Back}}</div>\n'+_SLIDES+"\n"+_EXPL+"\n"+_HOOK+"\n"+_LEARN+gloss}],
        css=MODEL_CSS)
    return cloze, basic

def main():
    course=sys.argv[1]; qd,abbrev=COURSES[course]
    # merged tap-to-define glossary (one for all remediation decks; the JS only highlights terms that
    # actually appear on a card). Absent → decks still build, just without the tap-to-define layer.
    GLOSS_PATH="build/_remediation_glossary.json"
    glossary=json.load(open(GLOSS_PATH,encoding="utf-8")) if os.path.exists(GLOSS_PATH) else None
    CLOZE_MODEL,BASIC_MODEL=build_models(glossary)
    bundles={int(re.search(r'lec_(\d+)',p).group(1)):json.load(open(p)) for p in glob.glob(f"/tmp/anki_src/{course}/lec_*.json")}
    lecs=sorted(bundles); rng=f"{lecs[0]}-{lecs[-1]}"
    deck_root=f"claudderall::{abbrev} lec {rng}"
    media_dir=f"/tmp/anki_media/{course}"; shutil.rmtree(media_dir,ignore_errors=True); os.makedirs(media_dir)
    media=set(); decks=[]; n_notes=n_cards=n_cloze=n_basic=n_img=n_two=n_free=0; n_tq=0; per_lec={}
    # exam-tested (TQ) map for this course: str(lec) -> str(lo) -> [(topic, exam)]
    TQ={}
    if course=="opp3" and os.path.exists("build/_opp3_tested.json"):
        # OPP3 TESTED comes from the assembled content.js map (string LO ids like '1.1' / 'CU.1')
        for lec,los in json.load(open("build/_opp3_tested.json")).items():
            for lo,ents in los.items():
                for e in ents:
                    TQ.setdefault(str(lec),{}).setdefault(str(lo),[]).append((e["t"],e["e"]))
    elif os.path.exists("build/_tq_data.json"):
        for lec,items in json.load(open("build/_tq_data.json")).get(course,{}).items():
            for it in items:
                for obj in it["objs"]:
                    mm=re.match(r'\d+',obj)
                    if mm: TQ.setdefault(str(int(lec)),{}).setdefault(str(int(mm.group(0))),[]).append((it["topic"].title(),it["exam"]))
    def tq_for(L,lo):
        d=TQ.get(str(L),{}).get(str(lo)) if lo is not None else None
        if not d: return None
        ents=d; exams=sorted(set(e for _,e in ents)); topics=sorted(set(t for t,_ in ents))
        return ("Tested on the "+" & ".join(exams)+" — "+" · ".join(topics), exams)
    def slide_img(L,idx):
        b=bundles[L]; d=b["slideDir"]; cnt=b["slideCount"]
        if not idx or idx<1 or idx>cnt: return None
        src=f"quizzes/{qd}/slides/{d}/{idx:02d}.jpg"
        if not os.path.exists(src): return None
        fn=f"{course}_L{L}_s{idx:02d}.jpg"
        if fn not in media: shutil.copyfile(src,f"{media_dir}/{fn}"); media.add(fn)
        return fn
    for L in lecs:
        b=bundles[L]; gen=f"/tmp/anki_gen/{course}/lec_{L}.json"
        if not os.path.exists(gen): continue
        notes=json.load(open(gen)).get("notes",[])
        deck=genanki.Deck(det_id(f"{course}-lec-{L}"), f"{deck_root}::lec {L} — {b['title']}")
        ccount=0; built=[]   # (is_tq, note) so tested cards can be added first
        for i,nt in enumerate(notes):
            imgs=[]
            for idx in (nt.get("slides") or [])[:2]:
                fn=slide_img(L,idx)
                if fn: imgs.append(f'<img src="{fn}">')
            if imgs: n_img+=1
            if len(imgs)==2: n_two+=1
            if not imgs: n_free+=1
            img_html="".join(imgs); expl=(nt.get("explanation") or "").strip()
            hook=(nt.get("hook") or "").strip(); more=(nt.get("learn_more") or "").strip()
            lo=nt.get("lo"); sec=nt.get("section",""); tags=[f"Lec{L}"]
            if lo and sec in ("cq","reclaude"): tags.append(f"Lec{L}::LO{L}.{lo}")
            elif sec: tags.append(f"Lec{L}::{sec}")
            tqinfo=tq_for(L,lo); tqv=""
            if tqinfo:
                tqv=tqinfo[0]; tags+=["TQ"]+[f"TQ::{e}" for e in tqinfo[1]]; n_tq+=1
            guid=genanki.guid_for(f"{course}-{L}-{i}")
            if nt.get("type")=="basic":
                note=genanki.Note(model=BASIC_MODEL,guid=guid,
                    fields=[nt.get("front",""),nt.get("back",""),img_html,expl,hook,more,tqv],tags=tags)
                n_basic+=1; ccount+=1; n_cards+=1
            else:
                txt=nt.get("text","")
                note=genanki.Note(model=CLOZE_MODEL,guid=guid,fields=[txt,img_html,expl,hook,more,tqv],tags=tags)
                ncl=len(set(re.findall(r'{{c(\d+)::',txt))) or 1
                n_cloze+=ncl; ccount+=ncl; n_cards+=ncl
            built.append((bool(tqinfo),note)); n_notes+=1
        for _,note in sorted(built, key=lambda x: 0 if x[0] else 1):  # tested-first
            deck.add_note(note)
        per_lec[L]=(len(notes),ccount,len(b["cqs"]),len(b["mustKnows"])); decks.append(deck)
    out=f"/Users/sebastiankempa/remediation-quiz-app/dist/claudderall {abbrev} lec {rng}.apkg"
    os.makedirs(os.path.dirname(out),exist_ok=True)
    pkg=genanki.Package(decks); pkg.media_files=[f"{media_dir}/{m}" for m in media]; pkg.write_to_file(out)
    print(f"=== {abbrev}: {out}")
    print(f"  lectures {len(decks)} | notes {n_notes} | cards {n_cards} (cloze {n_cloze}/basic {n_basic}) | TQ-tagged notes {n_tq}")
    print(f"  images: {n_img} w/slide, {n_two} w/two, {n_free} image-free | media {len(media)} | tap-to-define terms: {len(glossary) if glossary else 0} | {os.path.getsize(out)/1e6:.1f} MB")
    for L in lecs:
        if L in per_lec: nn,cc,cq,mk=per_lec[L]; print(f"   lec {L:2d}: {nn} notes {cc} cards (CQ {cq}, MUST {mk})")
if __name__=="__main__": main()
