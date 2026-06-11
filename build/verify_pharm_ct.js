export const meta = { name: 'pharm-ct-verify', description: 'Verify extracted pharmacology ClaudeTest practice-exam questions', phases:[{title:'Verify'}] }
const INDIR='/tmp/pharm_ct', OUTDIR='/tmp/pharm_ct_out'
const LECS = Array.from({length:30}, (_,i)=>i+1)
log(`Verifying pharm ClaudeTest bank: ${LECS.length} lectures`)
const prompt = (n) => String.raw`You are a rigorous board-certified clinical pharmacologist fact-checking practice-exam questions for an NSU-KPCOM M1 pharmacology remediation quiz.

Read: ${INDIR}/lec_${n}.json — {lec, questions:[{lec, lo:90, stem, choices:[5 A-E], correct:<0-based>, explanation, src, qnum}]}.
These were extracted from the professor's OWN ClaudeTest practice exam (one question per page; the explanation holds the answer reasoning + per-distractor "X — wrong because ..." notes). The keyed "correct" index is AUTHORITATIVE.

For EVERY question:
1) EXTRACTION INTEGRITY (fix silently): repair any PDF-extraction artifact — a leaked "p. N" or "QUESTION N / M" or "answer below" fragment in stem/choice/explanation, a truncated choice or explanation, doubled spaces, mojibake. Keep the same 5 options, same order, same correct index.
2) MEDICAL CHECK (conservative): confirm the keyed answer is correct & uniquely best and the explanation is accurate. ONLY change "correct" if the keyed answer is clearly medically WRONG (rare); if so append " [verifier-corrected: <reason>]". Drop a question only if irreparable.

Keep lo:90 on every question. Write corrected JSON to ${OUTDIR}/lec_${n}.json — {lec:${n}, questions:[{lec,lo,stem,choices,correct,explanation}]}. Valid JSON only.
Reply one line: "lec ${n}: <N> Qs, <fixed> fixed, <changed> changed, <dropped> dropped".`
const r = await pipeline(LECS, (n)=>agent(prompt(n),{label:`ct:L${n}`,phase:'Verify',agentType:'general-purpose'}).then(s=>({lec:n,summary:s})))
log(`Done ${r.filter(Boolean).length}/${LECS.length}`)
return r.filter(Boolean)
