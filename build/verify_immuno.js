export const meta = { name: 'immuno-verify', description: 'Verify extracted immunology Preclaude + ClaudeTest questions', phases:[{title:'Verify'}] }
const LECS = Array.from({length:24}, (_,i)=>i+1)
log(`Verifying immunology (Preclaude + ClaudeTest): ${LECS.length} lectures`)
const prompt = (n) => String.raw`You are a rigorous immunologist fact-checking exam questions for an NSU-KPCOM M1 immunology remediation quiz. You will verify TWO question banks for Lecture ${n}.

BANK A (Preclaude): read /tmp/immuno_pc/lec_${n}.json — {lec, questions:[{lec, lo, stem, choices:[5 A-E], correct:<0-based>, explanation, src, qnum}]}.
BANK B (ClaudeTest practice exam): read /tmp/immuno_ct/lec_${n}.json — same shape but lo:90.

Both were extracted from the professor's OWN answer-keyed study docs (the explanation carries the professor's reasoning + per-distractor "why wrong" notes). The keyed "correct" index is AUTHORITATIVE.

For EVERY question in BOTH banks:
1) EXTRACTION INTEGRITY (fix silently): repair PDF-extraction artifacts — a leaked "Answer: X — ...", "p. N", "QUESTION N / M", "LECTURE ...", or stem-echo fragment inside a choice or explanation; a giant study-doc dump appended to the LAST question's explanation (truncate to the real per-option reasoning); a truncated choice/explanation; doubled spaces; mojibake/null-bytes (restore to '-'). Keep the SAME 5 choices, same order, same correct index.
2) MEDICAL CHECK (conservative): confirm the keyed answer is correct & uniquely best and the explanation accurate. ONLY change "correct" if clearly medically WRONG (rare); if so append " [verifier-corrected: <reason>]". Drop a question only if irreparable or a duplicate.

Preserve each question's lo (Preclaude keeps its LO number; ClaudeTest keeps lo:90).
Write BANK A corrected -> /tmp/immuno_pc_out/lec_${n}.json and BANK B corrected -> /tmp/immuno_ct_out/lec_${n}.json, each {lec:${n}, questions:[{lec,lo,stem,choices,correct,explanation}]}. Valid JSON only.
Reply one line: "lec ${n}: PC <N> (<fixed>f/<changed>c/<dropped>d), CT <N> (<fixed>f/<changed>c/<dropped>d)".`
const r = await pipeline(LECS, (n)=>agent(prompt(n),{label:`iv:L${n}`,phase:'Verify',agentType:'general-purpose'}).then(s=>({lec:n,summary:s})))
log(`Done ${r.filter(Boolean).length}/${LECS.length}`)
return r.filter(Boolean)
