#!/usr/bin/env python3
"""Extract OPP3 (COM 5125) content from the 3 KPClaude docs into per-lecture bundles.
Docs use named lectures + per-lecture LO numbering (Q<n> / LO <num>) and bare 'ANSWER KEY'.
Output: /tmp/opp3/lec_<L>.json  (questions, answer keys, raw ClaudeCore/Quickies/Concludes,
TQ flags, CQ lines, ReClaude Qs, tested-in-preclaude maps)."""
import fitz, re, json, os

BASE="/Users/sebastiankempa/Library/CloudStorage/GoogleDrive-skempa7@gmail.com/My Drive/claude builds/remy build/OPP3/docs"
OUT="/tmp/opp3"; os.makedirs(OUT,exist_ok=True)

# named lecture (as it appears in the doc section headers) -> my syllabus-order lecture number
NAME2NUM={
  "ENTRAPMENT NEUROPATHIES":1, "RIBS I":2, "RIBS II":3, "COMPLEX REGIONAL PAIN SYNDROME":4,
  "CERVICAL SPINE I":5, "CERVICAL SPINE II":6, "PULMONOLOGY":7, "CARDIAC":8, "LECTURE C":9,
}
TITLES={1:"Entrapment Neuropathies",2:"Ribs I",3:"Ribs II",4:"Complex Regional Pain Syndrome",
        5:"Cervical Spine I — Mechanics & Functional Anatomy",6:"Cervical Spine II — Cervical Radiculopathy",
        7:"The Osteopathic Approach to Pulmonology",8:"The Osteopathic Approach to the Cardiac Patient",
        9:"Cumulative Review — OPP I / OPP II"}
DOCS=["opp3 written part 2.pdf","opp3 written part 1.pdf","opp3 cumulative.pdf"]

def doc_text(p):
    d=fitz.open(p); t="\n".join(d[i].get_text() for i in range(d.page_count)); d.close(); return t

def parse_questions(qtext):
    """OPP3 Preclaude: 'Q<n>\\nLO <id>\\n<stem>\\nA. ...E. ...'  (LO id is a per-lecture string:
    '1' / '1.1' (Ribs I) / 'CU.1' (Cumulative))."""
    out={}
    blocks=re.split(r'\n(?=Q\d+\s*\nLO\s+[\w.]+\s*\n)', qtext)
    for b in blocks:
        m=re.match(r'\s*Q(\d+)\s*\nLO\s+([\w.]+)\s*\n(.*)$', b, re.S)
        if not m: continue
        qnum=int(m.group(1)); lon=m.group(2).strip(); rest=m.group(3)
        cm=re.search(r'\n[ \t]*A\.\s', rest)
        if not cm: continue
        stem=" ".join(rest[:cm.start()].split())
        parts=re.split(r'\n[ \t]*([A-E])\.\s', "\n"+rest[cm.start():].strip())
        ch={}
        for i in range(1,len(parts)-1,2):
            txt=" ".join(parts[i+1].split())
            txt=re.split(r'\s*Q\d+\s+LO\s+[\w.]+', txt)[0].strip()
            ch[parts[i]]=txt
        if all(L in ch and ch[L] for L in "ABCDE"):
            out[qnum]={"lo":lon,"choices":[ch[L] for L in "ABCDE"],"stem":stem}
    return out

def parse_answers(atext):
    out={}
    blocks=re.split(r'\n(?=Q\d+\s*\n[A-E]\s*\n)', atext)
    for b in blocks:
        m=re.match(r'\s*Q(\d+)\s*\n([A-E])\s*\n(.*)$', b, re.S)
        if not m: continue
        qnum=int(m.group(1)); letter=m.group(2); rest=m.group(3)
        dm=re.search(r'\n[ \t]*[A-E]:\s', "\n"+rest)
        reasoning=" ".join((rest[:dm.start()] if dm else rest).split())
        dtxt=rest[dm.start():] if dm else ""
        dist={}
        for dl in re.finditer(r'([A-E]):\s*(.*?)(?=\n[ \t]*[A-E]:\s|\Z)', dtxt, re.S):
            dist[dl.group(1)]=" ".join(dl.group(2).split())
        out[qnum]={"letter":letter,"reasoning":reasoning,"distractors":dist}
    return out

def find_markers(full):
    """Return ordered list of (pos, kind, name). kinds: quickies, preclaude, answerkey, core, concludes."""
    M=[]
    for m in re.finditer(r'^CLAUDE QUICKIES\s*$', full, re.M):
        M.append((m.start(),"quickies",None))
    for m in re.finditer(r'^(.+?)\s+[—–-]\s+PRECLAUDE\s+[—–-]\s+20 QUESTIONS\s*$', full, re.M):
        M.append((m.start(),"preclaude",m.group(1).strip().upper()))
    for m in re.finditer(r'PRECLAUDE\s*[—–-]?\s*ANSWER KEY', full):  # header: '<NAME> — PRECLAUDE ANSWER KEY'
        ls=full.rfind("\n",0,m.start())+1                            # back up to start of the header line
        M.append((ls,"answerkey",None))
    for m in re.finditer(r'^(.+?)\s+[—–-]\s+CLAUDECORE\s*$', full, re.M):
        M.append((m.start(),"core",m.group(1).strip().upper()))
    for m in re.finditer(r'^(.+?)\s+[—–-]\s+CLAUDE CONCLUDES\s*$', full, re.M):
        M.append((m.start(),"concludes",m.group(1).strip().upper()))
    M.sort()
    return M

def extract_flags(core_text):
    tq=[]; cq=[]; reclaude=[]; tested_pre={}
    for ln in core_text.split("\n"):
        s=ln.strip()
        if s.startswith("TQ "): tq.append(s[3:].strip())
        elif s.startswith("CQ "): cq.append(s[3:].strip())
    # ReClaude Q (may wrap lines) + 'Tested in Preclaude: Q..' — pull via regex on joined text
    for m in re.finditer(r'ReClaude Q:\s*(.+?)(?:\n[A-Z]{4,}|\nTQ |\nCQ |\nReClaude|\Z)', core_text, re.S):
        reclaude.append(" ".join(m.group(1).split()))
    for m in re.finditer(r'Tested in Preclaude:\s*([Q0-9,\s]+)', core_text):
        qs=[int(x) for x in re.findall(r'Q(\d+)', m.group(1))]
        # attach to nearest preceding 'LO <n>'
        pre=core_text[:m.start()]
        lm=list(re.finditer(r'\nLO\s+([\w.]+)\s*\n', pre))
        if lm: tested_pre.setdefault(lm[-1].group(1),[]).extend(qs)
    return tq,cq,reclaude,tested_pre

def main():
    lectures={}
    for fn in DOCS:
        full=doc_text(os.path.join(BASE,fn))
        M=find_markers(full)
        pre=[i for i,(p,k,n) in enumerate(M) if k=="preclaude"]
        for pi in pre:
            pos,_,name=M[pi]; num=NAME2NUM.get(name)
            if not num:
                print(f"  !! unmapped lecture name: {name!r} in {fn}"); continue
            # bounded regions using the ordered markers after this preclaude
            def next_pos(kind, after):
                for p,k,n in M:
                    if p>after and k==kind: return p
                return len(full)
            ak=next_pos("answerkey",pos); core=next_pos("core",ak); concl=next_pos("concludes",core)
            nxt_quick=next_pos("quickies",concl)
            # quickies = the quickies marker immediately before this preclaude
            qk=[p for p,k,n in M if k=="quickies" and p<pos]
            qk=qk[-1] if qk else pos
            q_text=full[pos:ak]; ak_text=full[ak:core]; core_text=full[core:concl]
            quick_text=full[qk:pos]; concl_text=full[concl:nxt_quick]
            Q=parse_questions(q_text); A=parse_answers(ak_text)
            qs=[]
            for qnum,q in sorted(Q.items()):
                a=A.get(qnum)
                if not a: continue
                ci="ABCDE".index(a["letter"]); expl=a["reasoning"]
                ds=a["distractors"]
                if ds: expl+="  "+"  ".join(f"({L}) {ds[L]}" for L in "ABCDE" if L in ds)
                qs.append({"qnum":qnum,"lo":q["lo"],"stem":q["stem"],"choices":q["choices"],
                           "correct":ci,"explanation":expl})
            tq,cq,reclaude,tested_pre=extract_flags(core_text)
            lectures[num]={"lec":num,"title":TITLES[num],"name":name,"src":fn,
                "preclaude":qs,"core_text":core_text.strip(),"quickies_text":quick_text.strip(),
                "concludes_text":concl_text.strip(),"tq_flags":tq,"cq_lines":cq,
                "reclaude":reclaude,"tested_pre":{k:sorted(set(v)) for k,v in tested_pre.items()}}
    for L in sorted(lectures):
        json.dump(lectures[L],open(f"{OUT}/lec_{L}.json","w"),ensure_ascii=False)
    print(f"Parsed {len(lectures)} lectures -> {OUT}")
    for L in sorted(lectures):
        c=lectures[L]
        print(f"  lec {L} {c['title'][:34]:34s} Pre={len(c['preclaude']):2d}  TQflags={len(c['tq_flags']):2d}  CQ={len(c['cq_lines']):2d}  ReClaude={len(c['reclaude']):2d}  core={len(c['core_text'])}c")
    miss=[L for L in range(1,10) if L not in lectures]
    if miss: print("  MISSING lectures:",miss)

if __name__=="__main__": main()
