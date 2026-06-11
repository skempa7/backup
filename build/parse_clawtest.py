#!/usr/bin/env python3
"""Parse ClawTest/ClaudeTest one-Q-per-page practice exams. Each Q self-tags lecture via 'From: Lecture N'."""
import fitz, glob, re, json, os, sys
def parse(path):
    d=fitz.open(path); full="\n".join(d[i].get_text() for i in range(d.page_count)); d.close()
    out=[]
    # split into per-question chunks at 'QUESTION N / M'
    chunks=re.split(r'\nQUESTION\s+\d+\s*/\s*\d+', "\n"+full)
    for ch in chunks:
        # need an Answer line and choices
        am=re.search(r'\nAnswer:\s*([A-E])\b', ch)
        if not am: continue
        # stem = from start (after 'answer below'/'p. N') to first 'A.'
        body=ch
        body=re.sub(r'^\s*(answer below.*?\n|p\.\s*\d+\s*\n)+','',body,flags=re.I|re.M)
        cm=re.search(r'\n\s*A\.\s', body)
        if not cm: continue
        stem=" ".join(body[:cm.start()].split())
        # choices A-E: text between choice markers, up to 'Answer:'
        choice_zone=body[cm.start():am.start()] if am.start()>cm.start() else body[cm.start():]
        parts=re.split(r'\n\s*([A-E])\.\s', "\n"+choice_zone.strip())
        ch_map={}
        for i in range(1,len(parts)-1,2):
            ch_map[parts[i]]=" ".join(parts[i+1].split())
        if not all(L in ch_map and ch_map[L] for L in "ABCDE"): continue
        correct="ABCDE".index(am.group(1))
        # lecture from 'From: Lecture N'
        lm=re.search(r'From:\s*Lecture\s+(\d+)', ch)
        if not lm: continue
        lec=int(lm.group(1))
        # explanation = after the 'From:' line to next 'QUESTION' (reasoning + distractors)
        after=ch[lm.end():]
        after=re.sub(r'^[^\n]*\n','',after,count=1)  # drop rest of the From line (the title)
        expl=" ".join(after.split())
        # trim trailing page artifacts
        expl=re.split(r'\bp\.\s*\d+\b', expl)[0].strip()
        out.append({"lec":lec,"stem":stem,"choices":[ch_map[L] for L in "ABCDE"],
                    "correct":correct,"explanation":expl,"src":os.path.basename(path)})
    return out
if __name__=="__main__":
    out=sys.argv[1]; bank=[]
    for f in sorted(glob.glob(sys.argv[2])):
        b=parse(f); bank.extend(b); print(f"  {os.path.basename(f)}: {len(b)} questions")
    json.dump(bank,open(out,"w"),ensure_ascii=False)
    bylec={}
    for q in bank: bylec[q["lec"]]=bylec.get(q["lec"],0)+1
    print(f"\nTOTAL ClawTest: {len(bank)} questions across lectures {sorted(bylec)}")
