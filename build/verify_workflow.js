export const meta = {
  name: 'path-verify',
  description: 'Medically verify extracted pathology Preclaude questions, fixing extraction artifacts',
  phases: [{ title: 'Verify' }],
}

const LECS = (Array.isArray(args) && args.length) ? args : Array.from({length:22}, (_,i)=>i+1)
log(`Verifying pathology questions for lectures: ${LECS.join(', ')}`)

const prompt = (n) => String.raw`You are a rigorous board-certified pathologist fact-checking exam questions for an NSU-KPCOM M1 pathology remediation quiz.

Read the file: /tmp/path_verify/lec_${n}.json
It has {lec, questions:[{lec, lo, stem, choices:[5 strings A-E in order], correct:<0-based index>, explanation, src, qnum}, ...]}.
These questions were extracted from the professor's own answer-keyed study docs (the explanation contains the professor's reasoning + why each distractor is wrong). The keyed "correct" index reflects the professor's answer key and is AUTHORITATIVE — do not "improve" a defensible answer.

For EVERY question, do two things:
1) EXTRACTION INTEGRITY (fix silently): repair any text artifact from PDF extraction — a truncated stem or choice, a leaked "Q# LO x.y" fragment inside a choice, doubled spaces, a cut-off explanation, mojibake. Make stem and all 5 choices clean and complete. Keep the SAME 5 options and the SAME correct index unless integrity repair changes option order (it should not).
2) MEDICAL CHECK (conservative): confirm the keyed correct answer is medically correct and the single best answer, and the explanation is accurate. ONLY change the "correct" index if the keyed answer is clearly, unambiguously medically WRONG (rare — these are vetted). If you change it, append " [verifier-corrected: <one-line reason>]" to that question's explanation. If a question is irreparably broken or untestable, drop it from the output.

Write the corrected object to: /tmp/path_verify_out/lec_${n}.json
Same shape: {lec:${n}, questions:[...]} with each question keeping keys lec, lo, stem, choices, correct, explanation. Valid JSON only, no markdown.
Then reply one line: "lec ${n}: <N> questions, <fixed> integrity-fixed, <changed> answers-changed, <dropped> dropped".`

const results = await pipeline(
  LECS,
  (n) => agent(prompt(n), { label: `verify:L${n}`, phase: 'Verify', agentType: 'general-purpose' }).then(s => ({lec:n, summary:s}))
)
log(`Done: ${results.filter(Boolean).length}/${LECS.length} lectures verified.`)
return results.filter(Boolean)
