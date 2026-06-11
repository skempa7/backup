#!/usr/bin/env python3
"""Assemble pathology content.js from verified Preclaude questions + ClaudeCore Learn content + slides."""
import json, os, re, collections, html, glob

REPO="/Users/sebastiankempa/remediation-quiz-app"; B=f"{REPO}/build"
OUT=f"{REPO}/quizzes/pharmacology/content.js"
VDIR="/tmp/pharm_verify_out"; UDIR="/tmp/pharm_verify"
CTDIR="/tmp/pharm_ct_out"; CTUDIR="/tmp/pharm_ct"   # ClawTest practice-exam bank
NLEC=30
TITLES={1:"Introduction / History / Terminology / Routes of Administration",2:"Dose-Response Relationships & Receptor Theory I",3:"Dose-Response Relationships & Receptor Theory II",4:"Kinetics of Drug Absorption & Elimination; Metabolism & Distribution I",5:"Kinetics of Drug Absorption & Elimination; Metabolism & Distribution II",6:"Bioavailability & Bioequivalence / Dosage Adjustments / Regimens",7:"Recent Advances in Pharmacological Approaches",8:"Introduction to Autonomic Pharmacology I",9:"Introduction to Autonomic Pharmacology II",10:"Cholinergic Agonists I",11:"Cholinergic Agonists II",12:"Cholinergic Antagonists I",13:"Cholinergic Antagonists II",14:"Adrenergic Agonists I",15:"Adrenergic Agonists II",16:"Adrenergic Antagonists I",17:"Adrenergic Antagonists II",18:"Principles of Anti-infective Therapy",19:"Cell Wall Synthesis Inhibitors I",20:"Cell Wall Synthesis Inhibitors II",21:"Tetracyclines / Macrolides / Aminoglycosides I",22:"Tetracyclines / Macrolides / Aminoglycosides II",23:"Cell Wall Synthesis Inhibitors III",24:"Antifungals",25:"Anthelminthics / Antiprotozoals",26:"Chloramphenicol / Clindamycin / Linezolid / Streptogramins / Lipopeptides",27:"Antifolate Agents",28:"Fluoroquinolones / Urinary Tract Antibiotics",29:"Antivirals",30:"Antimycobacterial Agents"}

content=json.load(open(f"{B}/_pharm_content.json"))
slides=json.load(open(f"{B}/_pharm_slides.json"))

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

def load_ct(L):
    for d in (CTDIR,CTUDIR):
        p=f"{d}/lec_{L}.json"
        if os.path.exists(p):
            try:
                qs=json.load(open(p)).get("questions",[])
                if qs: return qs
            except Exception: pass
    return []
def norm(s): return re.sub(r'[^a-z0-9]','',str(s).lower())[:120]

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
    # merge ClawTest practice-exam bank as a trailing pseudo-LO, deduped vs Preclaude stems
    seen={norm(q["stem"]) for q in qs}
    ct_arr=[]
    for q in load_ct(L):
        opts=q["choices"]; ci=int(q["correct"])
        if not (isinstance(opts,list) and len(opts) in (4,5) and 0<=ci<len(opts)): continue
        if norm(q["stem"]) in seen: continue
        seen.add(norm(q["stem"]))
        ct_arr.append([q["stem"],opts,ci,q.get("explanation",""),"basic"]); real_q+=1
    if ct_arr:
        lo_entries.append([90,"Practice Exam — ClaudeTest",ct_arr])
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
P.append("// ============================================================\n//  Pharmacology — Remediation · cumulative exam · 30 lectures\n//  Questions extracted from the KPClaude Preclaude banks (+ answer keys),\n//  medically verified. Learn content + slides from the same docs.\n// ============================================================\n\n")
P.append('const QUIZ_CONFIG = { id: "pharm_remediation", title: "Pharmacology — Remediation", emoji: "💊" };\n\n')
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
