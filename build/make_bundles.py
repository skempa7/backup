#!/usr/bin/env python3
"""Build per-lecture source bundles for the generation agents (fixed splitter)."""
import fitz, glob, re, json, os
DOCS = "/Users/sebastiankempa/Library/CloudStorage/GoogleDrive-skempa7@gmail.com/My Drive/quiz-materials/remediation/immunology/immuno kpclaude docs"
B = "/Users/sebastiankempa/remediation-quiz-app/build"
OUTDIR = "/tmp/immuno_src"
os.makedirs(OUTDIR, exist_ok=True)
TITLES = {1:"Introduction to Immunology",2:"Innate Immunity – Immediate Response",3:"Innate Immunity – Receptors & Cytokines",4:"Innate Immunity – Induced Cellular Response",5:"Lymphatic System",6:"Antigens and Antigen Receptors",7:"MHC and Antigen Presentation",8:"Genetics of Lymphocyte Antigen Receptors I",9:"Genetics of Lymphocyte Antigen Receptors II",10:"T Cell Ontogeny",11:"Activation of T Cells",12:"T Cell Function and Cell-Mediated Immunity",13:"B Cell Ontogeny and Activation",14:"B Cell–T Cell Interaction and Humoral Immunity",15:"Antibody Function",16:"Mucosal Immunity",17:"Active and Passive Immunity",18:"Antibody-Mediated Hypersensitivity",19:"Immune Complex & T Cell-Mediated Hypersensitivity",20:"Immunodeficiency Disorders & Neoplasias",21:"Immune Tolerance",22:"Transplant Immunity",23:"Autoimmune Disorders",24:"Clinical Aspects of Immunity"}

content = json.load(open(f"{B}/_immuno_content.json"))
slidetext = json.load(open(f"{B}/_immuno_slidetext.json")) if os.path.exists(f"{B}/_immuno_slidetext.json") else {}
slides = json.load(open(f"{B}/_immuno_slides.json")) if os.path.exists(f"{B}/_immuno_slides.json") else {}

# Split each doc into per-lecture raw text, anchored on TLDCLAUDE + the UPPERCASE "LECTURE N" header before it
raw = {}
for f in sorted(glob.glob(os.path.join(DOCS,"immuno *.pdf"))):
    d=fitz.open(f); full="\n".join(d[i].get_text() for i in range(d.page_count)); d.close()
    anchors=[]  # (section_start_pos, lec)
    for tm in re.finditer(r'TLDCLAUDE', full):
        tp=tm.start()
        # uppercase body header just before this TLDCLAUDE
        hm=list(re.finditer(r'LECTURE\s+(\d+)\s*[—·:–-]', full[:tp]))
        if not hm: continue
        last=hm[-1]
        anchors.append((last.start(), int(last.group(1))))
    anchors=sorted(set(anchors))
    for i,(pos,lec) in enumerate(anchors):
        end = anchors[i+1][0] if i+1 < len(anchors) else len(full)
        raw[lec] = full[pos:end].strip()

for L in range(1,25):
    hint = content.get(str(L), {})
    st = slidetext.get(str(L), [])
    sl = slides.get(str(L), {})
    bundle = {
        "lec": L, "title": TITLES[L], "prof": hint.get("prof",""),
        "rawDocText": raw.get(L, "")[:55000],
        "parsedHint": {
            "tldr": hint.get("tldr",""),
            "mustKnows": hint.get("mustKnows",[]),
            "los": [{"id":lo["id"],"statement":lo["statement"],
                     "blocks":lo.get("blocks",[])} for lo in hint.get("los",[])],
        },
        "slides": {"count": sl.get("count",0), "dir": sl.get("dir","")},
        "slideText": st,
    }
    json.dump(bundle, open(f"{OUTDIR}/lec_{L}.json","w"), ensure_ascii=False)
    print(f"  lec {L:2d}: raw={len(bundle['rawDocText']):6d}  LOhints={len(bundle['parsedHint']['los'])}  "
          f"mustK={len(bundle['parsedHint']['mustKnows'])}  slides={bundle['slides']['count']}  slideTxt={len(st)}")
print(f"\nWrote 24 bundles to {OUTDIR}")
