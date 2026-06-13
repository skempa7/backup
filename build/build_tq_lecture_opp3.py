#!/usr/bin/env python3
"""Inject a synthetic 'Lecture TQ' (id 99) into the OPP3 content.js: aggregates every
exam-tested (TQ-flagged) LO across all 9 lectures so Quickies/Practice/Core/Master all
focus on the TQs. String-LO-id-safe (Ribs I '1.1', Cumulative 'CU.1'). Re-runnable."""
import json, re
P="quizzes/opp3/content.js"; TQID=99
def parse_global(s, name):
    m=re.search(r'const '+re.escape(name)+r'\s*=\s*', s); i=m.end(); op=s[i]; cl='}' if op=='{' else ']'
    depth=0; j=i; instr=False; esc=False
    while j<len(s):
        c=s[j]
        if instr:
            if esc: esc=False
            elif c=='\\': esc=True
            elif c=='"': instr=False
        else:
            if c=='"': instr=True
            elif c==op: depth+=1
            elif c==cl:
                depth-=1
                if depth==0: j+=1; break
        j+=1
    return (i, j, json.loads(s[i:j]))

s=open(P,encoding="utf-8").read()
iq,jq,QUIZ=parse_global(s,"QUIZ"); il,jl,LC=parse_global(s,"LECTURE_CONTENT")
ia,ja,LA=parse_global(s,"LO_ANSWERS"); it,jt,TESTED=parse_global(s,"TESTED")
# strip any prior TQ lecture so this is re-runnable
QUIZ=[L for L in QUIZ if L[0]!=TQID]; LC={k:v for k,v in LC.items() if k!=str(TQID)}
LA={k:v for k,v in LA.items() if not k.startswith(f"{TQID}_")}; TESTED={k:v for k,v in TESTED.items() if k!=str(TQID)}

title_by={str(L[0]):L[1] for L in QUIZ}
lc_by={str(k):v for k,v in LC.items()}
s_quiz=[]; s_los=[]; s_la={}; s_tested={}; musts=[]; sid=0
for L in sorted(QUIZ, key=lambda x:x[0]):           # lecture order
    lec=str(L[0])
    if lec not in TESTED: continue
    title=title_by.get(lec,f"Lecture {lec}")
    for lo_entry in L[2]:                            # QUIZ LO groups in doc order
        lo=str(lo_entry[0])
        if lo=="90" or lo not in TESTED[lec]: continue
        ents=TESTED[lec][lo]; sid+=1
        topics=" · ".join(dict.fromkeys(e["t"] for e in ents))
        stmt=f"Lec {lec} · {title} · LO {lo}"
        s_quiz.append([sid, stmt, lo_entry[2]])
        blocks=next((x.get("blocks",[]) for x in lc_by.get(lec,{}).get("los",[]) if str(x["id"])==lo), [])
        s_los.append({"id":sid,"statement":stmt,"blocks":blocks})
        t=LA.get(f"{lec}_{lo}")
        if t: s_la[f"{TQID}_{sid}"]=t
        s_tested[str(sid)]=ents
        musts.append(f"Lec {lec} ({title}) — {topics}.")
QUIZ.append([TQID, "Exam-Tested Objectives", s_quiz])
LC[str(TQID)]={"prof":"","tldr":"Every objective flagged exam-tested (TQ) across all nine OPP III lectures — the embedded high-yield flags in your KPClaude docs plus the 'major TQs' deck — gathered in one place. The must-knows below list them; Practice drills their questions; this Core explains each; Master locks them in. All written-final high-yield.","mustKnows":musts,"los":s_los}
LA.update(s_la); TESTED[str(TQID)]=s_tested
for (i,j,new) in sorted([(iq,jq,QUIZ),(il,jl,LC),(ia,ja,LA),(it,jt,TESTED)], key=lambda x:-x[0]):
    s=s[:i]+json.dumps(new,ensure_ascii=False,indent=1)+s[j:]
open(P,"w",encoding="utf-8").write(s)
print(f"OPP3: Lecture TQ injected — {sid} tested LOs, {sum(len(q[2]) for q in s_quiz)} questions, {len(musts)} must-knows")
