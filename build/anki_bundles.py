#!/usr/bin/env python3
"""Build per-lecture Anki card-source bundles from parsed ClaudeCore + slide text."""
import json, os
COURSES={"immuno":"immunology","path":"pathology","pharm":"pharmacology"}
TITLES=json.load(open("build/_anki_titles.json")) if os.path.exists("build/_anki_titles.json") else {}
def titles_for(course):
    # pull lecture titles from the assembled content.js QUIZ (authoritative)
    import re
    js=open(f"quizzes/{COURSES[course]}/content.js",encoding="utf-8").read()
    m=re.search(r'const QUIZ = (\[.*\]);\s*\n// QUIZ_END', js, re.S)
    quiz=json.loads(m.group(1))
    return {str(L[0]):L[1] for L in quiz}
for course,qd in COURSES.items():
    content=json.load(open(f"build/_{course}_content.json"))
    slidetext=json.load(open(f"build/_{course}_slidetext.json"))
    slides=json.load(open(f"build/_{course}_slides.json"))
    titles=titles_for(course)
    outdir=f"/tmp/anki_src/{course}"; os.makedirs(outdir,exist_ok=True)
    for L,c in content.items():
        cqs=[]; reclaude=[]; callouts=[]; prose=[]
        for lo in c.get("los",[]):
            lid=lo["id"]
            for b in lo.get("blocks",[]):
                t=b.get("t"); x=(b.get("x") or "").strip()
                if not x: continue
                if t=="cq": cqs.append({"lo":lid,"text":x})
                elif t=="q": reclaude.append({"lo":lid,"q":x})
                elif t in ("key","pearl","trap","confusion","cue"): callouts.append({"lo":lid,"t":t,"x":x})
                elif t=="p": prose.append({"lo":lid,"x":x})
        sl=slides.get(str(L),{})
        bundle={
            "course":course,"lec":int(L),"title":titles.get(str(L),f"Lecture {L}"),
            "prof":c.get("prof",""),"tldr":c.get("tldr",""),
            "mustKnows":c.get("mustKnows",[]),
            "cqs":cqs,"reclaude":reclaude,"callouts":callouts,
            "prose":prose,
            "slideDir":sl.get("dir",""),"slideCount":sl.get("count",0),
            "slideTexts":slidetext.get(str(L),[]),
        }
        json.dump(bundle,open(f"{outdir}/lec_{L}.json","w"),ensure_ascii=False)
    print(f"{course}: wrote {len(content)} bundles  (mustKnows+CQ+ReClaude spine)")
