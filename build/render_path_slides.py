#!/usr/bin/env python3
import fitz, glob, os, re, json, urllib.parse
SRC="/Users/sebastiankempa/Library/CloudStorage/GoogleDrive-skempa7@gmail.com/My Drive/quiz-materials/remediation/pathology/path lecture slides"
OUT="/Users/sebastiankempa/remediation-quiz-app/quizzes/pathology/slides"
MAN="/Users/sebastiankempa/remediation-quiz-app/build/_path_slides.json"
TXT="/Users/sebastiankempa/remediation-quiz-app/build/_path_slidetext.json"
WIDTH,Q=900,62
def lecs_from(fn):
    name=urllib.parse.unquote(os.path.basename(fn)).replace("+"," ")
    m=re.match(r'\s*Lec\.?\s*([0-9].*?)[\.—]',name)  # up to first period
    if not m: return None
    head=m.group(1)
    nums=[int(x) for x in re.findall(r'\d+',head)]
    if not nums: return None
    if re.search(r'[-–]',head) and len(nums)>=2:   # range
        return list(range(min(nums),max(nums)+1))
    return nums  # 'and' or single
os.makedirs(OUT,exist_ok=True)
man={};txt={};tot=0;mb=0;missing=[]
files=[f for f in sorted(glob.glob(os.path.join(SRC,"*.pdf"))) if "syll" not in f.lower()]
for f in files:
    lecs=lecs_from(f)
    if not lecs: print("SKIP (no lec#):",os.path.basename(f)[:40]); continue
    key="-".join(str(l) for l in [lecs[0]] if len(lecs)==1) or f"{lecs[0]}-{lecs[-1]}"
    d=fitz.open(f); n=d.page_count; outdir=os.path.join(OUT,key); os.makedirs(outdir,exist_ok=True); texts=[]
    for i in range(n):
        pg=d[i]; texts.append(" ".join(pg.get_text().split()))
        pix=pg.get_pixmap(matrix=fitz.Matrix(WIDTH/pg.rect.width,WIDTH/pg.rect.width))
        p=os.path.join(outdir,f"{i+1:02d}.jpg"); pix.save(p,jpg_quality=Q); mb+=os.path.getsize(p)
    d.close(); tot+=n
    for L in lecs: man[L]={"dir":key,"count":n}; txt[L]=texts
    print(f"  {n:>3} -> slides/{key}/  lecs {lecs}  [{os.path.basename(f)[:34]}]")
json.dump({str(k):v for k,v in sorted(man.items())},open(MAN,"w"),indent=1)
json.dump({str(k):v for k,v in sorted(txt.items())},open(TXT,"w"),ensure_ascii=False)
print(f"\nDONE {tot} slides {mb/1e6:.1f}MB. lectures: {sorted(man)}")
print("missing:",[L for L in range(1,23) if L not in man] or "none")
