#!/usr/bin/env python3
"""Inject a synthetic 'Lecture TQ' (id 99) into immuno+pharm content.js: aggregates every
exam-tested LO across the course so Quickies/Practice/Core/Master all focus on the TQs."""
import json, re, sys
COURSES={"immuno":"immunology","pharm":"pharmacology"}
TQID=99
def parse_global(s, name):
    m=re.search(r'const '+re.escape(name)+r'\s*=\s*', s)
    if not m: return None
    i=m.end(); op=s[i]; cl='}' if op=='{' else ']'
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
def smart(t):
    ACR={"SLE","XLA","HIV","BPH","UTI","MRSA","HLA","MHC","NK","TLR","GPCR","CYP","ITP","QT","DNA","RNA","TCR","BCR","ADCC","MAC","PNH","HLH","TNF","AID","BTK","CD40","NOTCH1","TH2","TH17","R0","DIC","HIT","CRISPR","ALS","CAR","COPD","ATP","CD","FISH","IgE","IgG","IgA","IgM"}
    out=[]
    for w in t.split():
        u=w.upper().strip("()-,.")
        out.append(w if (re.search(r'\d',w) or (w.isupper() and len(w)<=4) or u in ACR) else w[:1].upper()+w[1:].lower())
    return " ".join(out)

for course,qd in COURSES.items():
    p=f"quizzes/{qd}/content.js"; s=open(p,encoding="utf-8").read()
    iq,jq,QUIZ=parse_global(s,"QUIZ"); il,jl,LC=parse_global(s,"LECTURE_CONTENT")
    ia,ja,LA=parse_global(s,"LO_ANSWERS"); it,jt,TESTED=parse_global(s,"TESTED")
    # strip any prior TQ lecture (id 99) so this is re-runnable
    QUIZ=[L for L in QUIZ if L[0]!=TQID]; LC={k:v for k,v in LC.items() if k!=str(TQID)}
    LA={k:v for k,v in LA.items() if not k.startswith(f"{TQID}_")}; TESTED={k:v for k,v in TESTED.items() if k!=str(TQID)}
    quiz_by={L[0]:{lo[0]:lo for lo in L[2]} for L in QUIZ}
    lc_by={int(k):v for k,v in LC.items()}
    s_quiz=[]; s_los=[]; s_la={}; s_tested={}; musts=[]; sid=0
    for lec in sorted(TESTED, key=int):
        for lo in sorted(TESTED[lec], key=int):
            ents=TESTED[lec][lo]; sid+=1
            topics=" · ".join(dict.fromkeys(e["t"] for e in ents))
            exams=" & ".join(dict.fromkeys(e["e"] for e in ents))
            stmt=f"Lec {lec} · {topics}"
            srcq=quiz_by.get(int(lec),{}).get(int(lo))
            s_quiz.append([sid, stmt, srcq[2] if srcq else
                [["(No practice question captured for this objective — see the Core tab.)",["OK","Got it","Understood","Continue"],0,"","basic"]]])
            blocks=next((L.get("blocks",[]) for L in lc_by.get(int(lec),{}).get("los",[]) if L["id"]==int(lo)), [])
            s_los.append({"id":sid,"statement":stmt,"blocks":blocks})
            t=LA.get(f"{lec}_{lo}")
            if t: s_la[f"{TQID}_{sid}"]=t
            s_tested[str(sid)]=ents
            musts.append(f"Lec {lec} — {topics}. ({exams})")
    QUIZ.append([TQID, "Exam-Tested Objectives", s_quiz])
    LC[str(TQID)]={"prof":"","tldr":"Every objective your professors tested on the Winter 2026 Midterm + Final, gathered in one place. The must-knows below list them; Practice drills their questions; this Core explains each; Master locks them in. Each is cumulative-exam high-yield.","mustKnows":musts,"los":s_los}
    LA.update(s_la); TESTED[str(TQID)]=s_tested
    # re-emit (replace each global value, last position first to keep indices valid)
    for (i,j,new) in sorted([(iq,jq,QUIZ),(il,jl,LC),(ia,ja,LA),(it,jt,TESTED)], key=lambda x:-x[0]):
        s=s[:i]+json.dumps(new,ensure_ascii=False,indent=1)+s[j:]
    open(p,"w",encoding="utf-8").write(s)
    print(f"{course}: Lecture TQ injected — {sid} tested LOs, {sum(len(q[2]) for q in s_quiz)} questions, {len(musts)} must-knows")
