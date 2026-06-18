#!/usr/bin/env python3
"""Merge the 4 per-course fact-checked glossaries (/tmp/gloss_out/<course>.json) into one
build/_remediation_glossary.json baked into the shared remediation Anki model. The tap-to-define
JS only highlights terms that actually appear on a given card, so a union glossary is correct for
all 4 decks. Dedupe case-insensitively (the JS lowercases keys); on conflict keep the longer def."""
import json, os
COURSES=["immuno","path","pharm","opp3"]
merged={}; lc={}; conflicts=[]; per={}
for course in COURSES:
    p=f"/tmp/gloss_out/{course}.json"
    if not os.path.exists(p): print(f"  !! missing {p}"); continue
    g=json.load(open(p,encoding="utf-8")); per[course]=len(g)
    for term,defn in g.items():
        t=(term or "").strip(); d=(defn or "").strip()
        if len(t)<3 or not d: continue                 # drop 1-2 char keys (noisy) + empty defs
        key=t.lower()
        if key in lc:
            ex=lc[key]
            if merged[ex]!=d:
                conflicts.append(t)
                if len(d)>len(merged[ex]): merged[ex]=d   # keep the fuller definition
            continue
        lc[key]=t; merged[t]=d
json.dump(merged, open("build/_remediation_glossary.json","w",encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"merged {len(merged)} terms (per course: {per}); {len(conflicts)} cross-course dup terms")
print("sample:", list(merged.items())[:3])
