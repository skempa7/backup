#!/usr/bin/env python3
"""Extract Preclaude questions + answer keys from KPClaude Delta docs.
Each question self-tags its lecture via 'LO <lec>.<num>'. Outputs a flat question bank."""
import fitz, glob, re, json, os, sys

def doc_text(path):
    d=fitz.open(path); t="\n".join(d[i].get_text() for i in range(d.page_count)); d.close(); return t

def parse_questions(qtext):
    """Return {qnum: {lo_lec, lo_num, stem, choices[5]}}"""
    out={}
    # split into per-question blocks at 'Q<n>' on its own line
    blocks=re.split(r'\n(?=Q\d+\s*\nLO\s+\d+\.\d+)', qtext)
    for b in blocks:
        m=re.match(r'\s*Q(\d+)\s*\nLO\s+(\d+)\.(\d+)\s*\n(.*)$', b, re.S)
        if not m: continue
        qnum=int(m.group(1)); lec=int(m.group(2)); lon=int(m.group(3)); rest=m.group(4)
        # split stem vs choices at first '\nA. '
        cm=re.search(r'\n[ \t]*A\.\s', rest)
        if not cm: continue
        stem=" ".join(rest[:cm.start()].split())
        choices_txt=rest[cm.start():]
        # split choices on line-leading A.-E.
        parts=re.split(r'\n[ \t]*([A-E])\.\s', "\n"+choices_txt.strip())
        # parts = ['', 'A', textA, 'B', textB, ...]
        ch={}
        for i in range(1,len(parts)-1,2):
            letter=parts[i]; txt=" ".join(parts[i+1].split())
            # stop a choice's text if a stray next-question header leaked in
            txt=re.split(r'\s*Q\d+\s+LO\s+\d+\.\d+', txt)[0].strip()
            ch[letter]=txt
        if all(L in ch and ch[L] for L in "ABCDE"):
            out[qnum]={"lec":lec,"lon":lon,"choices":[ch[L] for L in "ABCDE"],"stem":stem}
    return out

def parse_answers(atext):
    """Return {qnum: {letter, reasoning, distractors{}}}"""
    out={}
    blocks=re.split(r'\n(?=Q\d+\s*\n[A-E]\s*\n)', atext)
    for b in blocks:
        m=re.match(r'\s*Q(\d+)\s*\n([A-E])\s*\n(.*)$', b, re.S)
        if not m: continue
        qnum=int(m.group(1)); letter=m.group(2); rest=m.group(3)
        # distractor lines look like 'B: ...' ; reasoning is everything before the first distractor line
        dm=re.search(r'\n[ \t]*[A-E]:\s', "\n"+rest)
        if dm:
            reasoning=" ".join(rest[:dm.start()].split())
            dtxt=rest[dm.start():]
        else:
            reasoning=" ".join(rest.split()); dtxt=""
        dist={}
        for dl in re.finditer(r'([A-E]):\s*(.*?)(?=\n[ \t]*[A-E]:\s|\Z)', dtxt, re.S):
            dist[dl.group(1)]=" ".join(dl.group(2).split())
        out[qnum]={"letter":letter,"reasoning":reasoning,"distractors":dist}
    return out

def parse_course(docs):
    bank=[]
    for path in docs:
        full=doc_text(path)
        qpos=[m.start() for m in re.finditer(r'PRECLAUDE[\s—–\-]*\(?\s*20\s*QUESTIONS\)?', full)]
        apos=[m.start() for m in re.finditer(r'PRECLAUDE[\s—–\-]*ANSWER KEY', full)]
        # pair each questions-section with the next answer-key section
        for i,qs in enumerate(qpos):
            ak=min([a for a in apos if a>qs], default=len(full))
            qend=ak
            aend=min([q for q in qpos if q>ak]+[len(full)])
            qs_text=full[qs:qend]; ak_text=full[ak:aend]
            Q=parse_questions(qs_text); A=parse_answers(ak_text)
            for qnum,q in Q.items():
                a=A.get(qnum)
                if not a: continue
                ci="ABCDE".index(a["letter"])
                expl=a["reasoning"]
                ds=a["distractors"]
                if ds:
                    expl += "  " + "  ".join(f"({L}) {ds[L]}" for L in "ABCDE" if L in ds)
                bank.append({"lec":q["lec"],"lo":q["lon"],"stem":q["stem"],
                             "choices":q["choices"],"correct":ci,"explanation":expl,
                             "src":os.path.basename(path),"qnum":qnum})
    return bank

if __name__=="__main__":
    course=sys.argv[1]; out=sys.argv[2]; docs=sorted(glob.glob(sys.argv[3]))
    print("docs:", [os.path.basename(d) for d in docs])
    bank=parse_course(docs)
    json.dump(bank, open(out,"w"), ensure_ascii=False)
    bylec={}
    for q in bank: bylec.setdefault(q["lec"],0); bylec[q["lec"]]+=1
    print(f"\n{course}: {len(bank)} Preclaude questions parsed")
    for L in sorted(bylec): print(f"  lec {L:2d}: {bylec[L]} Qs")
    # sample
    if bank:
        q=bank[0]
        print(f"\n--- sample (lec {q['lec']} LO {q['lo']}) ---\n{q['stem']}")
        for i,o in enumerate(q['choices']): print(f"  {'>>' if i==q['correct'] else '  '} {chr(65+i)}. {o}")
        print("expl:", q['explanation'][:240])
