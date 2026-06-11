export const meta = { name: 'q-verify', description: 'Medically verify extracted Preclaude questions', phases:[{title:'Verify'}] }
const A = args || {}
const INDIR = A.indir, OUTDIR = A.outdir, SPEC = A.specialty || 'physician', COURSE = A.course || 'course'
const LECS = (A.lecs && A.lecs.length) ? A.lecs : []
log(`Verifying ${COURSE}: lectures ${LECS.join(', ')}`)
const prompt = (n) => String.raw`You are a rigorous board-certified ${SPEC} fact-checking exam questions for an NSU-KPCOM M1 ${COURSE} remediation quiz.

Read: ${INDIR}/lec_${n}.json  — it holds {lec, questions:[{lec, lo, stem, choices:[5 strings A-E in order], correct:<0-based index>, explanation, src, qnum}, ...]}.
These were extracted from the professor's OWN answer-keyed study docs (the explanation carries the professor's reasoning + why each distractor is wrong). The keyed "correct" index is AUTHORITATIVE — do not "improve" a defensible answer.

For EVERY question:
1) EXTRACTION INTEGRITY (fix silently): repair PDF-extraction artifacts — a truncated or stem-echoed explanation, a leaked "p. N LECTURE..." / "Q# LO x.y" fragment inside a choice or explanation, a giant study-doc dump appended to an explanation (common in the LAST question of a lecture — truncate it back to the real per-option reasoning), doubled spaces, mojibake/null-byte sequences (restore to '-', e.g. the dosage suffixes -oma/-sarcoma). Keep the SAME 5 options, same order, same correct index.
2) MEDICAL CHECK (conservative): confirm the keyed correct answer is medically correct and the single best option and the explanation is accurate. ONLY change the "correct" index if the keyed answer is clearly, unambiguously medically WRONG (rare). If you change it, append " [verifier-corrected: <one-line reason>]" to that explanation. Drop a question only if it is irreparable or untestable.

Write the corrected object to: ${OUTDIR}/lec_${n}.json — same shape {lec:${n}, questions:[{lec,lo,stem,choices,correct,explanation}]}. Valid JSON only, no markdown.
Then reply one line: "lec ${n}: <N> Qs, <fixed> integrity-fixed, <changed> answers-changed, <dropped> dropped".`
const r = await pipeline(LECS, (n)=>agent(prompt(n),{label:`v:L${n}`,phase:'Verify',agentType:'general-purpose'}).then(s=>({lec:n,summary:s})))
log(`Done ${r.filter(Boolean).length}/${LECS.length}`)
return r.filter(Boolean)
