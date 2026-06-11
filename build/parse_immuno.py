#!/usr/bin/env python3
"""Immuno adaptation of the GI KPCLAUDE layout-aware parser -> _immuno_content.json (LECTURE_CONTENT)."""
import fitz, glob, re, json, os
SRC = "/Users/sebastiankempa/Library/CloudStorage/GoogleDrive-skempa7@gmail.com/My Drive/quiz-materials/remediation/immunology/immuno kpclaude docs"
OUT = "/Users/sebastiankempa/remediation-quiz-app/build/_immuno_content.json"
NLEC = 24
MARKER_TYPE = {"CLAUDEKEY":"key","CLAUDE PEARL":"pearl","CLAUDE PEARLS":"pearl",
  "CLAUDE TRAP":"trap","CLAUDE TRAPS":"trap","CLAUDE CONFUSIONS":"confusion",
  "CLAUDE CONFUSION":"confusion","CLAUDE CUE":"cue","CLAUDE CUES":"cue"}
NOISE_EXACT = {"CLAUDECORE","CLAUDE QUICKIES","CLAUDE CLOSERS","TIER CIRCLE LEGEND",
  "COGNITIVE LEVEL LEGEND","LEARNING OBJECTIVES","CLAUDE CONCLUDES","PRECLAUDE",
  "CLAUDECORE — LEARNING OBJECTIVES"}
NOISE_PREFIX = ("p. ","How tested:","Tested in Preclaude:","●","KPCLAUDE DOCS")
WIDE = 330
def overlap(a0,a1,b0,b1): return a0 < b1 and b0 < a1
def get_blocks(path):
    d=fitz.open(path); out=[]; full=[]
    for pi in range(d.page_count):
        pg=d[pi]; full.append(pg.get_text())
        for b in pg.get_text("blocks", sort=True):
            x0,y0,x1,y1,txt,bno,btype=b
            t=" ".join(txt.split())
            if t: out.append({"t":t,"x0":x0,"x1":x1,"gy":pi*100000+y0,"w":x1-x0})
    d.close(); return out, "\n".join(full)
def title_lecs(window):
    # immuno docs have clean "Lecture N ·" / "LECTURE N" headers
    ms=list(re.finditer(r'(?:LECTURE|Lecture)\s+(\d+)\s*[·:–—-]', window))
    if ms: return [int(ms[-1].group(1))]
    return []
def is_noise(t):
    if t in NOISE_EXACT: return True
    if any(t.startswith(p) for p in NOISE_PREFIX): return True
    if t.startswith("LECTURE ") and ("CLAUDE" in t or "PRECLAUDE" in t): return True
    if re.match(r'^●+$', t): return True
    return False
def is_slide_noise(t):
    tl=t.lower()
    if "title slide" in tl or tl.startswith("lecture title"): return True
    segs=[s.strip() for s in re.split(r'\.\s+', t.rstrip('.')) if s.strip()]
    if not segs: return False
    allshort=all(len(s.split())<=6 for s in segs)
    if allshort and len(segs)>=2: return True
    if allshort and len(t)<45 and ':' not in t and '→' not in t: return True
    return False
def classify_lo_blocks(blocks):
    headers=[b for b in blocks if b["t"] in MARKER_TYPE]
    out=[]
    for b in blocks:
        t=b["t"]
        if t in MARKER_TYPE: continue
        if is_noise(t): continue
        if re.match(r'^LO\s+\w+\.\d+$', t): continue
        if t.startswith("CQ "):
            out.append({"t":"cq","x":t[3:].strip()}); continue
        if is_slide_noise(t): continue
        m=re.match(r'^ReClaude Q(?:uestion)?\s*:\s*(.+)$', t)
        if m:
            out.append({"t":"q","x":m.group(1).strip()}); continue
        if b["w"] < WIDE:
            cand=[h for h in headers if h["gy"] < b["gy"] and overlap(h["x0"],h["x1"],b["x0"],b["x1"])]
            if cand:
                h=max(cand, key=lambda h:h["gy"])
                out.append({"t":MARKER_TYPE[h["t"]],"x":t}); continue
        out.append({"t":"p","x":t})
    merged=[]
    for b in out:
        if merged and merged[-1]["t"]==b["t"] and b["t"] in ("key","pearl","trap","confusion","cue"):
            merged[-1]["x"] += " " + b["x"]
        else:
            merged.append(dict(b))
    return [b for b in merged if len(b["x"])>3]
def parse_core(blocks):
    idx_core=[i for i,b in enumerate(blocks) if "CLAUDECORE" in b["t"]]
    idx_concl=[i for i,b in enumerate(blocks) if "CLAUDE CONCLUDES" in b["t"]]
    core={}
    for ci in idx_core:
        end=min([j for j in idx_concl if j>ci] + [len(blocks)])
        region=blocks[ci+1:end]
        los=[]
        for k,b in enumerate(region):
            m=re.match(r'^(.+?)\s*LO\s+(\w+)\.(\d+)\s*$', b["t"])
            if m and m.group(1).strip(): los.append((k, m.group(1).strip(), m.group(2), int(m.group(3))))
        if not los:
            for k,b in enumerate(region):
                m=re.match(r'^[\s●○•◐◑▪·\-–—]*LO\s+(\w+)\.(\d+)\s+(.{6,})$', b["t"])
                if m: los.append((k, m.group(3).strip(), m.group(1), int(m.group(2))))
        for li,(k,stmt,pfx,num) in enumerate(los):
            kstart=k+1
            kend=los[li+1][0] if li+1<len(los) else len(region)
            content=region[kstart:kend]
            blk=classify_lo_blocks(content)
            targets=[int(pfx)] if pfx.isdigit() else []
            for lec in targets:
                core.setdefault(lec,{})[num]={"statement":stmt,"blocks":blk}
    return core
def parse_quickies(fulltext):
    quick={}
    for tm in re.finditer(r'TLDCLAUDE', fulltext):
        pos=tm.start(); window=fulltext[max(0,pos-500):pos]
        lecs=title_lecs(window)
        if not lecs: continue
        qm=re.search(r'TLDCLAUDE\s*(.*?)\s*MUST CLAUDES\s*(.*?)(?:LECTURE\s|Lecture\s|PRECLAUDE|CLAUDECORE|\Z)', fulltext[pos:pos+6000], re.S)
        if not qm: continue
        tldr=" ".join(qm.group(1).split())
        musts=[]
        for it in re.split(r'\n?\s*(?=\d{1,2}\.\s)', qm.group(2)):
            it=re.sub(r'^\d{1,2}\.\s*',''," ".join(it.split()))
            if len(it)>15: musts.append(it)
        pm=re.search(r'(Dr\.?\s+[A-Z]\.?\s*[A-Z][a-zA-Z\-]+(?:\s+[A-Z][a-zA-Z\-]+)?)', window+fulltext[pos:pos+200])
        prof=pm.group(1) if pm else ""
        for L in lecs: quick.setdefault(L,{"tldr":tldr,"musts":musts,"prof":prof})
    return quick
def main():
    core={}; quick={}
    files=sorted(glob.glob(os.path.join(SRC,"immuno *.pdf")))
    print("Parsing docs:", [os.path.basename(f) for f in files])
    for f in files:
        blocks, fulltext = get_blocks(f)
        c=parse_core(blocks)
        for lec,v in c.items(): core.setdefault(lec,{}).update(v)
        for lec,v in parse_quickies(fulltext).items(): quick.setdefault(lec,v)
    LC={}
    for L in range(1,NLEC+1):
        q=quick.get(L) or {}
        c=core.get(L) or {}
        los=[{"id":k,"statement":v["statement"],"blocks":v["blocks"]} for k,v in sorted(c.items())]
        if q or los:
            LC[L]={"prof":q.get("prof",""),"tldr":q.get("tldr",""),"mustKnows":q.get("musts",[]),"los":los}
    json.dump(LC, open(OUT,"w"), ensure_ascii=False, indent=1)
    print(f"\nParsed {len(LC)} lectures -> {OUT}")
    for L in range(1,NLEC+1):
        if L in LC:
            c=LC[L]; nlo=len(c["los"]); nblk=sum(len(lo['blocks']) for lo in c['los'])
            print(f"  Lec {L:2d}: {nlo} LOs, {nblk} blocks, {len(c['mustKnows'])} must-knows, tldr={'Y' if c['tldr'] else 'n'}")
        else:
            print(f"  Lec {L:2d}: *** MISSING ***")
main()
