#!/usr/bin/env python3
"""Assemble quizzes/opp3/content.js from:
  - deterministic Preclaude + ClaudeTest questions (/tmp/opp3, /tmp/opp3_ct)  [extracted verbatim]
  - per-lecture agent output (/tmp/opp3_out/lec_<L>.json): lecture_content + tested  [structured/verified]
  - rendered slides (build/_opp3_slides.json)
Optional /tmp/opp3_out/_apply_fixes.json = [{lec,bank,qnum,correct_index}] applies confirmed answer-key fixes."""
import json, os, re, collections, html

REPO="/Users/sebastiankempa/remediation-quiz-app"
OUT=f"{REPO}/quizzes/opp3/content.js"
NLEC=9
TITLES={1:"Entrapment Neuropathies",2:"Ribs I",3:"Ribs II",4:"Complex Regional Pain Syndrome",
        5:"Cervical Spine I — Mechanics & Functional Anatomy",6:"Cervical Spine II — Cervical Radiculopathy",
        7:"The Osteopathic Approach to Pulmonology",8:"The Osteopathic Approach to the Cardiac Patient",
        9:"Cumulative Review — OPP I / OPP II"}

slides=json.load(open(f"{REPO}/build/_opp3_slides.json"))
fixes={}
if os.path.exists("/tmp/opp3_out/_apply_fixes.json"):
    for f in json.load(open("/tmp/opp3_out/_apply_fixes.json")):
        fixes[(f["lec"],f["bank"],f["qnum"])]=f["correct_index"]

def norm(s): return re.sub(r'[^a-z0-9]','',str(s).lower())[:120]
CALLOUT_LABEL={"key":"Key","pearl":"Clinical pearl","trap":"Trap","confusion":"Confusion","cue":"Cue"}
def lo_answer_html(blocks):
    parts=[]
    for b in blocks:
        t=b.get("t","p"); x=html.escape(b.get("x","")).strip()
        if not x: continue
        if t in CALLOUT_LABEL: parts.append(f"<p><strong>{CALLOUT_LABEL[t]}:</strong> {x}</p>")
        elif t=="q": parts.append(f"<p><em>{x}</em></p>")
        else: parts.append(f"<p>{x}</p>")
    return "".join(parts)

def load_out(L):
    p=f"/tmp/opp3_out/lec_{L}.json"
    return json.load(open(p)) if os.path.exists(p) else {"lecture_content":{},"tested":[]}

QUIZ=[]; LECTURE_CONTENT={}; LO_ANSWERS={}; TESTED={}
SLIDES={k:v for k,v in slides.items()}
real_q=0
for L in range(1,NLEC+1):
    out=load_out(L); lc=out.get("lecture_content") or {}
    los_meta=lc.get("los",[])
    stmt_by_id={str(lo["id"]):lo["statement"] for lo in los_meta}
    order=[str(lo["id"]) for lo in los_meta]

    pre=json.load(open(f"/tmp/opp3/lec_{L}.json"))["preclaude"]
    for q in pre:
        if (L,"preclaude",q["qnum"]) in fixes: q["correct"]=fixes[(L,"preclaude",q["qnum"])]
    bylo=collections.OrderedDict()
    for q in pre: bylo.setdefault(str(q["lo"]),[]).append(q)

    lo_entries=[]
    seen_lo=set()
    def emit_lo(lo_id):
        lqs=bylo.get(lo_id)
        if not lqs: return
        arr=[]
        for q in sorted(lqs,key=lambda q:q["qnum"]):
            opts=q["choices"]; ci=int(q["correct"])
            if not (isinstance(opts,list) and len(opts) in (4,5) and 0<=ci<len(opts)): continue
            arr.append([q["stem"],opts,ci,q.get("explanation",""),"basic"]);
        if arr:
            stmt=stmt_by_id.get(lo_id) or f"Learning Objective {lo_id}"
            lo_entries.append([lo_id,stmt,arr]); seen_lo.add(lo_id)
    for lo_id in order: emit_lo(lo_id)
    for lo_id in bylo:                       # any preclaude LO not in lecture_content order
        if lo_id not in seen_lo: emit_lo(lo_id)
    real_q+=sum(len(e[2]) for e in lo_entries)

    # ClaudeTest practice bank -> trailing pseudo-LO 90, deduped vs preclaude stems
    seen_stems={norm(q["stem"]) for q in pre}
    ct_arr=[]
    ctp=f"/tmp/opp3_ct/lec_{L}.json"
    if os.path.exists(ctp):
        for q in json.load(open(ctp))["questions"]:
            if (L,"clawtest",q["qnum"]) in fixes: q["correct"]=fixes[(L,"clawtest",q["qnum"])]
            opts=q["choices"]; ci=int(q["correct"])
            if not (isinstance(opts,list) and len(opts) in (4,5) and 0<=ci<len(opts)): continue
            if norm(q["stem"]) in seen_stems: continue
            seen_stems.add(norm(q["stem"]))
            ct_arr.append([q["stem"],opts,ci,q.get("explanation",""),"basic"])
    if ct_arr:
        lo_entries.append(["90","Practice Exam — ClaudeTest",ct_arr]); real_q+=len(ct_arr)

    if not lo_entries:
        lo_entries=[["1","Overview",[["Questions for this lecture are being added.",["Got it","OK","Understood","Continue"],0,"Placeholder.","basic"]]]]
    QUIZ.append([L,TITLES[L],lo_entries])

    # LECTURE_CONTENT + LO_ANSWERS
    if los_meta:
        LECTURE_CONTENT[str(L)]={"prof":lc.get("prof",""),"tldr":lc.get("tldr",""),
            "mustKnows":lc.get("mustKnows",[]),
            "los":[{"id":str(lo["id"]),"statement":lo["statement"],
                    "blocks":[{"t":b.get("t","p"),"x":b.get("x","")} for b in lo.get("blocks",[])]}
                   for lo in los_meta]}
        for lo in los_meta:
            ans=lo_answer_html(lo.get("blocks",[]))
            if ans: LO_ANSWERS[f"{L}_{lo['id']}"]={"answer":ans,"why":""}

    # TESTED (TQ map) — exam-tested topics per LO
    t={}
    for ent in out.get("tested",[]):
        lo=str(ent.get("lo","")); topics=ent.get("topics") or []
        if not lo or not topics: continue
        t.setdefault(lo,[])
        for tp in topics:
            e={"t":tp,"e":"Final"}
            if e not in t[lo]: t[lo].append(e)
    if t: TESTED[str(L)]=t

def js(name,obj): return f"const {name} = "+json.dumps(obj,ensure_ascii=False,indent=1)+";\n"
P=[]
P.append("// ============================================================\n//  OPP III — Remediation · written cumulative final · 9 lectures (COM 5125)\n//  Questions extracted from the KPClaude Preclaude + ClaudeTest banks (answer keys\n//  medically verified). Learn content, TQ flags + slides from the same docs.\n// ============================================================\n\n")
P.append('const QUIZ_CONFIG = { id: "opp3_remediation", title: "OPP III — Remediation", emoji: "\U0001F9B4" };\n')
P.append("\n// Exam-tested objectives (green TQ) — from the docs' embedded TQ flags + 'OPP III major TQs'. lec -> LO -> [{t:topic,e:Final}]\n")
P.append(js("TESTED",TESTED)); P.append("\n")
P.append("const IMAGES = {};\n\n")
P.append(js("SLIDES",SLIDES))
P.append("const SLIDE_JUMPS = {};\nconst SLIDE_EMBED = {};\n")
P.append("const FLASHCARDS = {};\nconst LECTURE_REFERENCES = {};\n\n")
P.append(js("LECTURE_CONTENT",LECTURE_CONTENT)); P.append("\n")
P.append(js("LO_ANSWERS",LO_ANSWERS)); P.append("\n// QUIZ_START\n")
P.append(js("QUIZ",QUIZ)); P.append("// QUIZ_END\n")
open(OUT,"w",encoding="utf-8").write("".join(P))
# side outputs for the Anki pipeline
json.dump(LECTURE_CONTENT,open(f"{REPO}/build/_opp3_content.json","w"),ensure_ascii=False,indent=1)
json.dump(TESTED,open(f"{REPO}/build/_opp3_tested.json","w"),ensure_ascii=False,indent=1)
nq=sum(len(lo[2]) for Lq in QUIZ for lo in Lq[2])
print(f"Assembled OPP3 content.js  ->  {OUT}")
print(f"  questions: {nq} | LECTURE_CONTENT: {len(LECTURE_CONTENT)} | LO_ANSWERS: {len(LO_ANSWERS)} | TESTED lecs: {len(TESTED)} | slide decks: {len(SLIDES)}")
for Lq in QUIZ:
    ttot=sum(len(v) for v in TESTED.get(str(Lq[0]),{}).values())
    print(f"   lec {Lq[0]}: {sum(len(lo[2]) for lo in Lq[2])} Qs across {len(Lq[2])} LO-groups | TQ topics: {ttot}")
