import fitz, glob, os, json
SRC="/Users/sebastiankempa/Library/CloudStorage/GoogleDrive-skempa7@gmail.com/My Drive/quiz-materials/remediation/pharmocology/pharm lecture slides"
OUT="/Users/sebastiankempa/remediation-quiz-app/quizzes/pharmacology/slides"
MAN="/Users/sebastiankempa/remediation-quiz-app/build/_pharm_slides.json"; TXT="/Users/sebastiankempa/remediation-quiz-app/build/_pharm_slidetext.json"
WIDTH,Q=900,62
MAP=[("Fundamentals of Pharmacology Lec 1","1",[1]),("Lec 2 Dose-Response","2",[2]),("Lec 3 Dose-Response","3",[3]),
("Lec 4. Kinetics","4",[4]),("Kinetics of Drug Absorption and Elimination Lec 5","5",[5]),("Bioavailability Bioequivalence Lec 6","6",[6]),
("Lec 7 Recent Advances","7",[7]),("Lec 8 Autonomic Pharmacology I","8",[8]),("Lec 9 Autonomic Pharmacology II","9",[9]),
("Lec 10 Cholinergic Agonists I","10",[10]),("Cholinergic Agonists II Full","11",[11]),("Cholinergic Antagonists I Full","12",[12]),
("Cholinergic Antagonists II Full","13",[13]),("Lec 14. Adrenergic Agonists I","14",[14]),("Adrenergic Agonists II Full","15",[15]),
("Adrenergic Antagonists I Full","16",[16]),("Adrenergic Antagonists II Lec 17","17",[17]),("Lec 18 Anti-infective","18",[18]),
("Lec 19. Cell Wall Synthesis Inhibitors I","19",[19]),("Cell Wall Synthesis Inhibitors II - Dr. Panavelil","20",[20]),
("Lec 21 and 22. Tetracyclines","21-22",[21,22]),("Cell Wall Synthesis Inhibitors III Lec 23","23",[23]),
("Lec 24 Antifungals","24",[24]),("Lec 25 Anthelminths","25",[25]),("Lec 26 Chloramphenicol","26",[26]),
("Antifolate Agents Full","27",[27]),("Lec 28. Fluroquinolones","28",[28]),("Lec 29 Antivirals","29",[29]),
("Antimycobacterial Agents Lec 30","30",[30])]
files=glob.glob(os.path.join(SRC,"*.pdf")); used=set()
def find(sub):
    for f in sorted(files):
        if f in used: continue
        if sub.lower() in os.path.basename(f).lower(): used.add(f); return f
    return None
os.makedirs(OUT,exist_ok=True); man={};txt={};tot=0;mb=0;miss=[]
for sub,key,lecs in MAP:
    f=find(sub)
    if not f: miss.append((key,sub)); print("NO FILE:",sub); continue
    d=fitz.open(f); n=d.page_count; od=os.path.join(OUT,key); os.makedirs(od,exist_ok=True); ts=[]
    for i in range(n):
        pg=d[i]; ts.append(" ".join(pg.get_text().split()))
        pix=pg.get_pixmap(matrix=fitz.Matrix(WIDTH/pg.rect.width,WIDTH/pg.rect.width)); p=os.path.join(od,f"{i+1:02d}.jpg"); pix.save(p,jpg_quality=Q); mb+=os.path.getsize(p)
    d.close(); tot+=n
    for L in lecs: man[L]={"dir":key,"count":n}; txt[L]=ts
    print(f"  {n:>3} -> slides/{key}/  lecs {lecs}  [{os.path.basename(f)[:32]}]")
json.dump({str(k):v for k,v in sorted(man.items())},open(MAN,"w"),indent=1)
json.dump({str(k):v for k,v in sorted(txt.items())},open(TXT,"w"),ensure_ascii=False)
print(f"\nDONE {tot} slides {mb/1e6:.1f}MB. missing decks:",miss or "none")
print("lectures without slides:",[L for L in range(1,31) if L not in man] or "none")
