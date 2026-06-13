#!/usr/bin/env python3
"""Parse the 200-question OPP3 ClaudeTest practice exam (one Q per page) into per-lecture banks.
Each page: 'QUESTION N / 200' -> stem -> A.-E. -> ANSWER -> 'Answer: X — ...' -> 'From: <Lecture>'
-> explanation + per-distractor reasons -> '[<Lecture> LO a.b — topic]'."""
import fitz, re, json, os

SRC="/Users/sebastiankempa/Library/CloudStorage/GoogleDrive-skempa7@gmail.com/My Drive/claude builds/remy build/OPP3/docs/opp3 claudetest.pdf"
OUT="/tmp/opp3_ct"; os.makedirs(OUT,exist_ok=True)
FROM2NUM={
  "Entrapment Neuropathies":1,"Ribs I":2,"Ribs II":3,"Complex Regional Pain Syndrome":4,
  "Cervical Spine I — Mechanics & Functional Anatomy":5,"Cervical Spine II — Cervical Radiculopathy":6,
  "The Osteopathic Approach to Pulmonology":7,"The Osteopathic Approach to the Cardiac Patient":8,
  "Cumulative Review — OPP I / OPP II":9,
}

def parse_page(text):
    qm=re.search(r'QUESTION\s+(\d+)\s*/\s*200', text)
    if not qm: return None
    body=text[qm.end():]
    am=re.search(r'\nANSWER\s*\n', body)
    if not am: return None
    qpart=body[:am.start()]; apart=body[am.end():]
    cm=re.search(r'\n[ \t]*A\.\s', qpart)
    if not cm: return None
    stem=" ".join(qpart[:cm.start()].split())
    parts=re.split(r'\n[ \t]*([A-E])\.\s', "\n"+qpart[cm.start():].strip())
    ch={}
    for i in range(1,len(parts)-1,2): ch[parts[i]]=" ".join(parts[i+1].split())
    if not all(L in ch and ch[L] for L in "ABCDE"): return None
    lm=re.search(r'Answer:\s*([A-E])\b', apart)
    if not lm: return None
    ci="ABCDE".index(lm.group(1))
    fm=re.search(r'From:\s*([^\n]+)', apart)
    lec=FROM2NUM.get(fm.group(1).strip()) if fm else None
    # explanation = text after the From: line up to the '[ ... LO ... ]' source tag (or 'p. N')
    tail=apart[fm.end():] if fm else apart
    tail=re.split(r'\n\[[^\]]*LO[^\]]*\]|\np\.\s*\d+', tail)[0]
    lo_tag=""
    tm=re.search(r'\[[^\]]*?LO\s+([\w.]+)\s*[—–-]', apart)
    if tm: lo_tag=tm.group(1)
    expl=" ".join(tail.split())
    return {"qnum":int(qm.group(1)),"lec":lec,"stem":stem,
            "choices":[ch[L] for L in "ABCDE"],"correct":ci,"explanation":expl,"lo_tag":lo_tag}

def main():
    d=fitz.open(SRC); banks={}
    n=0; unmapped=0
    for i in range(d.page_count):
        q=parse_page(d[i].get_text())
        if not q: continue
        if not q["lec"]: unmapped+=1; continue
        banks.setdefault(q["lec"],[]).append(q); n+=1
    for L,qs in banks.items():
        json.dump({"questions":qs},open(f"{OUT}/lec_{L}.json","w"),ensure_ascii=False)
    print(f"ClaudeTest: {n} questions across {len(banks)} lectures -> {OUT}  (unmapped From: {unmapped})")
    for L in sorted(banks): print(f"  lec {L}: {len(banks[L])} Qs")

if __name__=="__main__": main()
