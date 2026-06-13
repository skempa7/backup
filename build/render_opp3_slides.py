import fitz, glob, os, json
SRC="/Users/sebastiankempa/Library/CloudStorage/GoogleDrive-skempa7@gmail.com/My Drive/claude builds/remy build/OPP3/lecture slides"
OUT="/Users/sebastiankempa/remediation-quiz-app/quizzes/opp3/slides"
MAN="/Users/sebastiankempa/remediation-quiz-app/build/_opp3_slides.json"
TXT="/Users/sebastiankempa/remediation-quiz-app/build/_opp3_slidetext.json"
WIDTH,Q=900,62
# (unique filename substring, lecture key)  — lec 9 (cumulative) has no slide deck
MAP=[("Entrapment","1"),("Ribs 1","2"),("Ribs II","3"),("CRPS","4"),
     ("Cervical Spine I Anatomy","5"),("Cervical Spine II","6"),("Pulmonology","7"),("Cardiovascular","8")]
files=glob.glob(os.path.join(SRC,"*.pdf")); used=set()
def find(sub):
    for f in sorted(files):
        if f in used: continue
        if sub.lower() in os.path.basename(f).lower(): used.add(f); return f
    return None
os.makedirs(OUT,exist_ok=True); man={};txt={};tot=0;mb=0;miss=[]
for sub,key in MAP:
    f=find(sub)
    if not f: miss.append(sub); print("NO FILE:",sub); continue
    d=fitz.open(f); n=d.page_count; od=os.path.join(OUT,key); os.makedirs(od,exist_ok=True); ts=[]
    for i in range(n):
        pg=d[i]; ts.append(" ".join(pg.get_text().split()))
        pix=pg.get_pixmap(matrix=fitz.Matrix(WIDTH/pg.rect.width,WIDTH/pg.rect.width))
        p=os.path.join(od,f"{i+1:02d}.jpg"); pix.save(p,jpg_quality=Q); mb+=os.path.getsize(p)
    d.close(); tot+=n; man[int(key)]={"dir":key,"count":n}; txt[key]=ts
    print(f"  {n:>3} -> slides/{key}/  [{os.path.basename(f)[:42]}]")
json.dump({str(k):v for k,v in sorted(man.items())},open(MAN,"w"),indent=1)
json.dump(txt,open(TXT,"w"),ensure_ascii=False)
print(f"\nDONE {tot} slides {mb/1e6:.1f}MB. missing:",miss or "none")
print("unused slide files:",[os.path.basename(f) for f in files if f not in used] or "none")
