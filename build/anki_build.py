#!/usr/bin/env python3
"""Assemble a claudderall .apkg for one course from per-lecture generated notes
(/tmp/anki_gen/<course>/lec_N.json) + rendered lecture slides. Styling per the Anki spec."""
import json, os, sys, hashlib, glob, shutil, re
import genanki

COURSES={"immuno":("immunology","Immuno"),"path":("pathology","Path"),"pharm":("pharmacology","Pharm")}
def det_id(s): return int(hashlib.md5(s.encode()).hexdigest()[:8],16) | 0x40000000

CSS = """
.card{font-family:-apple-system,BlinkMacSystemFont,system-ui,sans-serif;font-size:22px;color:#fff;
 text-align:center;text-shadow:0 0 4px rgba(0,0,0,.9);background:transparent;line-height:1.45;}
hr{border:none;border-top:1px solid rgba(255,255,255,.18);margin:16px auto;width:66%;}
.answer{color:#8ab4f8;font-weight:600;}
.cloze{color:#8ab4f8;font-weight:bold;}
img{display:block;margin:24px auto 0;max-width:90%;max-height:48vh;height:auto;border-radius:10px;
 box-shadow:0 4px 16px rgba(0,0,0,.5);}
.expl{color:#9fb6cc;font-size:.7em;margin:18px auto 0;max-width:80%;background:rgba(0,0,0,.5);
 padding:6px 12px;border-radius:8px;display:inline-block;text-shadow:0 0 4px rgba(0,0,0,.9);}
.hook{color:#d8c08f;font-size:.7em;margin:12px auto 0;display:inline-block;background:rgba(0,0,0,.5);
 padding:5px 11px;border-radius:8px;text-shadow:0 0 4px rgba(0,0,0,.9);}
details.more{margin:16px auto 0;max-width:84%;text-align:left;background:rgba(0,0,0,.5);
 padding:2px 14px;border-radius:8px;text-shadow:0 0 4px rgba(0,0,0,.9);}
details.more summary{color:#9fb6cc;font-size:.68em;cursor:pointer;padding:7px 0;list-style:none;}
details.more summary::-webkit-details-marker{display:none;}
details.more .body{color:#dbe6f2;font-size:.74em;line-height:1.5;padding:2px 0 10px;}
"""
BACK_TAIL = """
{{#Image}}<hr>{{Image}}{{/Image}}
{{#Explanation}}<div class="expl">{{Explanation}}</div>{{/Explanation}}
{{#Hook}}<div class="hook">\U0001F4A1 {{Hook}}</div>{{/Hook}}
{{#LearnMore}}<details class="more"><summary>Learn more</summary><div class="body">{{LearnMore}}</div></details>{{/LearnMore}}
"""
CLOZE_MODEL = genanki.Model(det_id("claudderall-cloze-v1"),"Claudderall Cloze",
    fields=[{"name":"Text"},{"name":"Image"},{"name":"Explanation"},{"name":"Hook"},{"name":"LearnMore"}],
    templates=[{"name":"Cloze","qfmt":"{{cloze:Text}}","afmt":"{{cloze:Text}}"+BACK_TAIL}],
    css=CSS, model_type=genanki.Model.CLOZE)
BASIC_MODEL = genanki.Model(det_id("claudderall-basic-v1"),"Claudderall Basic",
    fields=[{"name":"Front"},{"name":"Back"},{"name":"Image"},{"name":"Explanation"},{"name":"Hook"},{"name":"LearnMore"}],
    templates=[{"name":"Card","qfmt":"{{Front}}","afmt":'{{Front}}<hr><div class="answer">{{Back}}</div>'+BACK_TAIL}],
    css=CSS)

def main():
    course=sys.argv[1]; qd,abbrev=COURSES[course]
    bundles={int(re.search(r'lec_(\d+)',p).group(1)):json.load(open(p)) for p in glob.glob(f"/tmp/anki_src/{course}/lec_*.json")}
    lecs=sorted(bundles); rng=f"{lecs[0]}-{lecs[-1]}"
    deck_root=f"claudderall::{abbrev} lec {rng}"
    media_dir=f"/tmp/anki_media/{course}"; shutil.rmtree(media_dir,ignore_errors=True); os.makedirs(media_dir)
    media=set(); decks=[]; n_notes=n_cards=n_cloze=n_basic=n_img=n_two=n_free=0; per_lec={}
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
        ccount=0
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
            guid=genanki.guid_for(f"{course}-{L}-{i}")
            if nt.get("type")=="basic":
                note=genanki.Note(model=BASIC_MODEL,guid=guid,
                    fields=[nt.get("front",""),nt.get("back",""),img_html,expl,hook,more],tags=tags)
                n_basic+=1; ccount+=1; n_cards+=1
            else:
                txt=nt.get("text","")
                note=genanki.Note(model=CLOZE_MODEL,guid=guid,fields=[txt,img_html,expl,hook,more],tags=tags)
                ncl=len(set(re.findall(r'{{c(\d+)::',txt))) or 1
                n_cloze+=ncl; ccount+=ncl; n_cards+=ncl
            deck.add_note(note); n_notes+=1
        per_lec[L]=(len(notes),ccount,len(b["cqs"]),len(b["mustKnows"])); decks.append(deck)
    out=f"/Users/sebastiankempa/remediation-quiz-app/dist/claudderall {abbrev} lec {rng}.apkg"
    os.makedirs(os.path.dirname(out),exist_ok=True)
    pkg=genanki.Package(decks); pkg.media_files=[f"{media_dir}/{m}" for m in media]; pkg.write_to_file(out)
    print(f"=== {abbrev}: {out}")
    print(f"  lectures {len(decks)} | notes {n_notes} | cards {n_cards} (cloze {n_cloze}/basic {n_basic})")
    print(f"  images: {n_img} w/slide, {n_two} w/two, {n_free} image-free | media {len(media)} | {os.path.getsize(out)/1e6:.1f} MB")
    for L in lecs:
        if L in per_lec: nn,cc,cq,mk=per_lec[L]; print(f"   lec {L:2d}: {nn} notes {cc} cards (CQ {cq}, MUST {mk})")
if __name__=="__main__": main()
