#!/usr/bin/env python3
"""Inject the TESTED map (from past exam answer reports) into immuno+pharm content.js.
Re-run after re-assembling content.js. Source: build/_tq_data.json."""
import json, re
tq=json.load(open("build/_tq_data.json"))
COURSES={"immuno":"immunology","pharm":"pharmacology"}
def build_tested(course):
    out={}
    for lec,items in tq[course].items():
        for it in items:
            for obj in it["objs"]:
                m=re.match(r'\d+',obj)
                if not m: continue
                lo=str(int(m.group(0)))
                out.setdefault(lec,{}).setdefault(lo,[])
                e={"t":it["topic"].title(),"e":it["exam"]}
                if e not in out[lec][lo]: out[lec][lo].append(e)
    return out
for course,qd in COURSES.items():
    tested=build_tested(course); p=f"quizzes/{qd}/content.js"; s=open(p,encoding="utf-8").read()
    s=re.sub(r'\n// Exam-tested objectives.*?\nconst TESTED = .*?;\n','\n',s,flags=re.S)  # strip old
    block=f"\n// Exam-tested objectives (from past midterm+final answer reports) — lec -> LO -> [{{t:topic,e:Midterm|Final}}]\nconst TESTED = {json.dumps(tested,ensure_ascii=False)};\n"
    s=re.sub(r'(const QUIZ_CONFIG = \{[^}]*\};\n)', lambda mm: mm.group(1)+block, s, count=1)
    open(p,"w",encoding="utf-8").write(s)
    print(f"{course}: TESTED injected ({len(tested)} lec)")
