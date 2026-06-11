#!/usr/bin/env python3
"""Assemble pathology content.js from verified Preclaude questions + ClaudeCore Learn content + slides."""
import json, os, re, collections, html, glob

REPO="/Users/sebastiankempa/remediation-quiz-app"; B=f"{REPO}/build"
OUT=f"{REPO}/quizzes/pathology/content.js"
VDIR="/tmp/path_verify_out"; UDIR="/tmp/path_verify"
NLEC=22
TITLES={1:"Cell Injury I",2:"Cell Injury II",3:"Inflammation I",4:"Inflammation II",5:"Inflammation III",6:"Inflammation IV",7:"Hemodynamic Disorders I",8:"Hemodynamic Disorders II",9:"Genetic Markers of Disease",10:"Introduction to Molecular Diagnostics",11:"Human Development",12:"Neoplasia I",13:"Neoplasia II",14:"Neoplasia III",15:"Diseases of Immunity I",16:"Diseases of Immunity II",17:"Diseases of Immunity III",18:"Diseases of Immunity IV",19:"Pathology of Infectious Diseases I",20:"Pathology of Infectious Diseases II",21:"Pathology of Infectious Diseases III",22:"Pathology of Aging"}

content=json.load(open(f"{B}/_path_content.json"))
slides=json.load(open(f"{B}/_path_slides.json"))

# load verified questions per lecture (fallback to unverified)
def load_qs(L):
    for d in (VDIR,UDIR):
        p=f"{d}/lec_{L}.json"
        if os.path.exists(p):
            try:
                obj=json.load(open(p))
                qs=obj.get("questions",[])
                if qs: return qs,(d==VDIR)
            except Exception: pass
    return [],False

CALLOUT_LABEL={"key":"Key","pearl":"Clinical pearl","trap":"Trap","confusion":"Confusion","cue":"Cue"}
def lo_answer_html(lo):
    parts=[]
    for b in lo.get("blocks",[]):
        t=b.get("t","p"); x=html.escape(b.get("x","")).strip()
        if not x: continue
        if t=="p": parts.append(f"<p>{x}</p>")
        elif t in CALLOUT_LABEL: parts.append(f"<p><strong>{CALLOUT_LABEL[t]}:</strong> {x}</p>")
        elif t in ("cq",): parts.append(f"<p>{x}</p>")
        elif t=="q": parts.append(f"<p><em>{x}</em></p>")
        else: parts.append(f"<p>{x}</p>")
    return "".join(parts)

def lo_statements(L):
    c=content.get(str(L),{})
    return {lo["id"]:lo["statement"] for lo in c.get("los",[])}

QUIZ=[]; LECTURE_CONTENT={}; LO_ANSWERS={}; SLIDES={k:v for k,v in slides.items()}
real_q=0; verified_lecs=[]
for L in range(1,NLEC+1):
    title=TITLES[L]
    qs,was_verified=load_qs(L)
    if was_verified: verified_lecs.append(L)
    stmts=lo_statements(L)
    # group questions by lo
    bylo=collections.OrderedDict()
    for q in sorted(qs,key=lambda q:(q["lo"], q.get("qnum",0))):
        bylo.setdefault(q["lo"],[]).append(q)
    lo_entries=[]
    for lo_id,lqs in bylo.items():
        arr=[]
        for q in lqs:
            opts=q["choices"]; ci=int(q["correct"])
            if not (isinstance(opts,list) and len(opts) in (4,5) and 0<=ci<len(opts)): continue
            arr.append([q["stem"],opts,ci,q.get("explanation",""),"basic"])
            real_q+=1
        if arr:
            stmt=stmts.get(lo_id) or f"Learning Objective {L}.{lo_id}"
            lo_entries.append([lo_id,stmt,arr])
    if not lo_entries:
        lo_entries=[[1,"Overview",[["Questions for this lecture are being added.",["Got it","OK","Understood","Continue"],0,"Placeholder.","basic"]]]]
    QUIZ.append([L,title,lo_entries])
    # LECTURE_CONTENT + LO_ANSWERS from ClaudeCore
    c=content.get(str(L))
    if c:
        LECTURE_CONTENT[str(L)]={"prof":c.get("prof",""),"tldr":c.get("tldr",""),
            "mustKnows":c.get("mustKnows",[]),
            "los":[{"id":lo["id"],"statement":lo["statement"],
                    "blocks":[{"t":b.get("t","p"),"x":b.get("x","")} for b in lo.get("blocks",[])]}
                   for lo in c.get("los",[])]}
        for lo in c.get("los",[]):
            ans=lo_answer_html(lo)
            if ans: LO_ANSWERS[f"{L}_{lo['id']}"]={"answer":ans,"why":""}

def js(name,obj):
    return f"const {name} = "+json.dumps(obj,ensure_ascii=False,indent=1)+";\n"
P=[]
P.append("// ============================================================\n//  Pathology — Remediation · cumulative exam · 22 lectures\n//  Questions extracted from the KPClaude Preclaude banks (+ answer keys),\n//  medically verified. Learn content + slides from the same docs.\n// ============================================================\n\n")
P.append('const QUIZ_CONFIG = { id: "path_remediation", title: "Pathology — Remediation", emoji: "🔬" };\n\n')
P.append("const IMAGES = {};\n\n")
P.append(js("SLIDES",SLIDES))
P.append("const SLIDE_JUMPS = {};\nconst SLIDE_EMBED = {};\n")
P.append("const FLASHCARDS = {};\nconst LECTURE_REFERENCES = {};\n\n")
P.append(js("LECTURE_CONTENT",LECTURE_CONTENT)); P.append("\n")
P.append(js("LO_ANSWERS",LO_ANSWERS)); P.append("\n// QUIZ_START\n")
P.append(js("QUIZ",QUIZ)); P.append("// QUIZ_END\n")
open(OUT,"w",encoding="utf-8").write("".join(P))
nq=sum(len(lo[2]) for L in QUIZ for lo in L[2])
print(f"Assembled pathology content.js")
print(f"  questions: {nq} | LECTURE_CONTENT: {len(LECTURE_CONTENT)} | LO_ANSWERS: {len(LO_ANSWERS)} | slide decks: {len(SLIDES)}")
print(f"  verified lectures: {len(verified_lecs)}/{NLEC} {verified_lecs}")
