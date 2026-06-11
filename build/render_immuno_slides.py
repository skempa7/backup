#!/usr/bin/env python3
"""Render immuno lecture decks -> JPEGs + SLIDES manifest + per-lecture slide text."""
import fitz, glob, os, re, json
SRC = "/Users/sebastiankempa/Library/CloudStorage/GoogleDrive-skempa7@gmail.com/My Drive/quiz-materials/remediation/immunology/immuno lecture slides"
OUT = "/Users/sebastiankempa/remediation-quiz-app/quizzes/immunology/slides"
MANIFEST = "/Users/sebastiankempa/remediation-quiz-app/build/_immuno_slides.json"
SLIDETEXT = "/Users/sebastiankempa/remediation-quiz-app/build/_immuno_slidetext.json"
WIDTH, Q = 900, 62
# (distinctive substring in filename, dir-key, [lecture numbers])
MAP = [
 ("Immunology Intro Lec 1", "1", [1]),
 ("Innate Immunity I Full", "2", [2]),
 ("Receptors and Cytokines Full", "3", [3]),
 ("Innate Immunity III", "4", [4]),
 ("Lymphatic System Lec 5", "5", [5]),
 ("Lec 6 Antigens", "6", [6]),
 ("MHC and Antigen Presentation Lec 7", "7", [7]),
 ("Genetics of Lymphocyte Antigen Receptors I II Lec 8 9", "8-9", [8,9]),
 ("T Cell Ontogeny Full", "10", [10]),
 ("Lec 11 T Cell Activation", "11", [11]),
 ("T Cell Function Immunity Full", "12", [12]),
 ("B Cell Ontogeny Activation Full", "13", [13]),
 ("Lec 14 B Cell T Cell", "14", [14]),
 ("Antibody Function Lec 15", "15", [15]),
 ("Mucosal Immunity Lec 16", "16", [16]),
 ("Active and Passive Immunity Lec 17", "17", [17]),
 ("Lec 18 Antibody-Mediated", "18", [18]),
 ("Lec 19 Immune Complex", "19", [19]),
 ("Immunodeficiency Disorders Neoplasias Lec 20", "20", [20]),
 ("Immune Tolerance Lec 21", "21", [21]),
 ("Transplant Immunity Lec 22", "22", [22]),
 ("Lec 23 Autoimmune", "23", [23]),
 ("Clinical Aspects of Immunity Lec 24", "24", [24]),
]
os.makedirs(OUT, exist_ok=True)
files = glob.glob(os.path.join(SRC, "*.pdf"))
def find_file(sub):
    for f in files:
        if sub.lower() in os.path.basename(f).lower(): return f
    return None
manifest={}; slidetext={}; total_bytes=0; total=0; missing=[]
for sub, key, lecs in MAP:
    f=find_file(sub)
    if not f:
        missing.append((key,lecs,sub)); print("NO FILE for", sub); continue
    d=fitz.open(f); n=d.page_count
    outdir=os.path.join(OUT,key); os.makedirs(outdir, exist_ok=True)
    texts=[]
    for i in range(n):
        pg=d[i]; texts.append(" ".join(pg.get_text().split()))
        zoom=WIDTH/pg.rect.width
        pix=pg.get_pixmap(matrix=fitz.Matrix(zoom,zoom))
        p=os.path.join(outdir,f"{i+1:02d}.jpg"); pix.save(p, jpg_quality=Q)
        total_bytes+=os.path.getsize(p)
    d.close(); total+=n
    for L in lecs:
        manifest[L]={"dir":key,"count":n}
        slidetext[L]=texts
    print(f"  rendered {n:>3} -> slides/{key}/  (lectures {lecs})  [{os.path.basename(f)[:40]}]")
json.dump({str(k):v for k,v in sorted(manifest.items())}, open(MANIFEST,"w"), indent=1)
json.dump({str(k):v for k,v in sorted(slidetext.items())}, open(SLIDETEXT,"w"), ensure_ascii=False)
print(f"\nDONE: {total} slides across {len(set(m['dir'] for m in manifest.values()))} decks, {total_bytes/1e6:.1f} MB")
print("Lectures with slides:", sorted(manifest.keys()))
print("Missing decks:", missing or "none")
