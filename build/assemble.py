#!/usr/bin/env python3
"""Assemble generated per-lecture JSON (+ slides) into quizzes/immunology/content.js.
Lectures without a gen file get a clear placeholder; all 24 still get their slide deck."""
import json, glob, os, re, sys

REPO = "/Users/sebastiankempa/remediation-quiz-app"
GEN  = "/tmp/immuno_gen"
B    = f"{REPO}/build"
OUT  = f"{REPO}/quizzes/immunology/content.js"

TITLES = {1:"Introduction to Immunology",2:"Innate Immunity – Immediate Response",3:"Innate Immunity – Receptors & Cytokines",4:"Innate Immunity – Induced Cellular Response",5:"Lymphatic System",6:"Antigens and Antigen Receptors",7:"MHC and Antigen Presentation",8:"Genetics of Lymphocyte Antigen Receptors I",9:"Genetics of Lymphocyte Antigen Receptors II",10:"T Cell Ontogeny",11:"Activation of T Cells",12:"T Cell Function and Cell-Mediated Immunity",13:"B Cell Ontogeny and Activation",14:"B Cell–T Cell Interaction and Humoral Immunity",15:"Antibody Function",16:"Mucosal Immunity",17:"Active and Passive Immunity",18:"Antibody-Mediated Hypersensitivity",19:"Immune Complex & T Cell-Mediated Hypersensitivity",20:"Immunodeficiency Disorders & Neoplasias",21:"Immune Tolerance",22:"Transplant Immunity",23:"Autoimmune Disorders",24:"Clinical Aspects of Immunity"}
NLEC = 24

slides = json.load(open(f"{B}/_immuno_slides.json"))   # {"1":{"dir","count"},...}

def short_title(stmt):
    s = re.sub(r'^[\s●○•◐◑▪◦·\-–—|]+', '', str(stmt or '').strip())
    s = re.sub(r'^LO\s*[A-Za-z]*\.?\d*\s*[:.\-]?\s*', '', s, flags=re.I)
    s = re.sub(r'^(Describe|Identify|Explain|List|Define|Discuss|Outline|Understand|Recognize|Compare|Review|Apply|Analyze|Summari[sz]e|State|Interpret)\s+', '', s, flags=re.I)
    s = re.sub(r'^and\s+contrast\s+', '', s, flags=re.I)
    s = re.sub(r'^the\s+(?=[a-z])', '', s, flags=re.I)
    s = s[:1].upper() + s[1:] if s else s
    if len(s) > 72: s = re.sub(r'\s+\S*$', '', s[:70]) + '…'
    return s or "Overview"

# load generated lectures
gen = {}
for L in range(1, NLEC+1):
    p = f"{GEN}/lec_{L}.json"
    if os.path.exists(p):
        try:
            d = json.load(open(p))
            assert d.get("los"), "no los"
            gen[L] = d
        except Exception as e:
            print(f"  !! lec {L}: bad gen file ({e}) — using placeholder", file=sys.stderr)

QUIZ=[]; LECTURE_CONTENT={}; LO_ANSWERS={}; FLASHCARDS={}; LECTURE_REFERENCES={}
SLIDES={k:v for k,v in slides.items()}

real=0; placeholder=0
for L in range(1, NLEC+1):
    title = TITLES[L]
    if L in gen:
        real+=1; d=gen[L]
        # QUIZ
        lqs=[]
        for lo in d["los"]:
            qs=[]
            for q in lo.get("questions",[]):
                opts=q["options"]; ci=int(q["correct"])
                lvl = q.get("level","basic")
                if lvl not in ("basic","advanced"): lvl="basic"
                if not (isinstance(opts,list) and len(opts)==4): continue
                if not (0<=ci<=3): continue
                qs.append([q["stem"], opts, ci, q.get("explanation",""), lvl])
            if qs:
                lqs.append([lo["id"], lo["statement"], qs])
        QUIZ.append([L, title, lqs])
        # LECTURE_CONTENT
        LECTURE_CONTENT[str(L)] = {
            "prof": d.get("prof",""), "tldr": d.get("tldr",""),
            "mustKnows": d.get("mustKnows",[]),
            "los": [{"id":lo["id"],"statement":lo["statement"],
                     "blocks":[{"t":b.get("t","p"),"x":b.get("x","")} for b in lo.get("learn",[])]}
                    for lo in d["los"]],
        }
        # LO_ANSWERS
        for lo in d["los"]:
            t=lo.get("teach") or {}
            if t.get("answer"):
                LO_ANSWERS[f"{L}_{lo['id']}"]={"answer":t.get("answer",""),"why":t.get("why","")}
        # FLASHCARDS
        sections=[]; cards=[]
        for lo in d["los"]:
            sections.append({"title":short_title(lo["statement"]),"los":[lo["id"]]})
            for i,fc in enumerate(lo.get("flashcards",[])):
                if fc.get("front") and fc.get("back"):
                    cards.append({"key":f"{L}_{lo['id']}_g{i}","front":fc["front"],"back":fc["back"]})
        if cards:
            FLASHCARDS[str(L)]={"sections":sections,"cards":cards}
        # LECTURE_REFERENCES
        if d.get("reference"):
            LECTURE_REFERENCES[str(L)] = d["reference"]
    else:
        placeholder+=1
        ph=("Questions for Lecture %d — “%s” — are being generated from the lecture materials. "
            "The full slide deck for this lecture is already available above.") % (L, title.replace('"',"'"))
        QUIZ.append([L, title, [[1,"Overview",[[ph,["Got it","OK","Understood","Continue"],0,
            "Placeholder — graded question content for this lecture is on the way.","basic"]]]]])

def js(name, obj, indent=1):
    return f"const {name} = " + json.dumps(obj, ensure_ascii=False, indent=indent) + ";\n"

parts=[]
parts.append("// ============================================================\n")
parts.append("//  Immunology — Remediation · cumulative exam · 24 lectures\n")
parts.append("//  Auto-assembled from build/assemble.py. Generated content +\n")
parts.append("//  rendered slides. Edit questions here or regenerate.\n")
parts.append("// ============================================================\n\n")
parts.append('const QUIZ_CONFIG = { id: "immuno_remediation", title: "Immunology — Remediation", emoji: "🦠" };\n\n')
parts.append("const IMAGES = {};\n\n")
parts.append(js("SLIDES", SLIDES))
parts.append("const SLIDE_JUMPS = {};\n")
parts.append("const SLIDE_EMBED = {};\n\n")
parts.append(js("FLASHCARDS", FLASHCARDS))
parts.append("\n")
parts.append(js("LECTURE_CONTENT", LECTURE_CONTENT))
parts.append("\n")
parts.append(js("LECTURE_REFERENCES", LECTURE_REFERENCES))
parts.append("\n")
parts.append(js("LO_ANSWERS", LO_ANSWERS))
parts.append("\n// QUIZ_START\n")
parts.append(js("QUIZ", QUIZ, indent=1))
parts.append("// QUIZ_END\n")

open(OUT,"w",encoding="utf-8").write("".join(parts))

nq=sum(len(lo[2]) for L in QUIZ for lo in L[2])
ncards=sum(len(v["cards"]) for v in FLASHCARDS.values())
print(f"Assembled content.js: {real} real lectures, {placeholder} placeholders")
print(f"  total questions: {nq}  |  flashcards: {ncards}  |  LO_ANSWERS: {len(LO_ANSWERS)}  |  refs: {len(LECTURE_REFERENCES)}  |  slide decks: {len(SLIDES)}")
print(f"  real lectures: {sorted(gen.keys())}")
