export const meta = {
  name: 'opp3-build',
  description: 'OPP3: verify answer keys + structure ClaudeCore into LECTURE_CONTENT + build TQ map, per lecture',
  phases: [{ title: 'Structure & verify' }, { title: 'Re-check key changes' }],
}

const LECS = [1,2,3,4,5,6,7,8,9]

const PHASE1_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['lec','n_los','n_tested_los','key_fixes','wrote','note'],
  properties: {
    lec: { type: 'integer' },
    n_los: { type: 'integer' },
    n_tested_los: { type: 'integer' },
    key_fixes: { type: 'array', items: { type: 'object', additionalProperties: false,
      required: ['bank','qnum','current_key','correct_key','reason'],
      properties: {
        bank: { type: 'string', enum: ['preclaude','clawtest'] },
        qnum: { type: 'integer' },
        current_key: { type: 'string' },
        correct_key: { type: 'string' },
        reason: { type: 'string' },
      } } },
    wrote: { type: 'boolean' },
    note: { type: 'string' },
  },
}

const VERIFY_SCHEMA = {
  type: 'object', additionalProperties: false, required: ['verdicts'],
  properties: { verdicts: { type: 'array', items: { type: 'object', additionalProperties: false,
    required: ['qnum','bank','original_key_correct','agreed_key','reason'],
    properties: {
      qnum: { type: 'integer' }, bank: { type: 'string' },
      original_key_correct: { type: 'boolean' }, agreed_key: { type: 'string' }, reason: { type: 'string' },
    } } } },
}

const prompt = (L) => String.raw`You are an expert osteopathic-medicine (OMM/OPP) educator and editor preparing study material for an NSU-KPCOM M1 student's OPP III written remediation exam (COM 5125). Work ONE lecture.

INPUT: read /tmp/opp3_wf/lec_${L}.json. Fields:
- preclaude[]  : {qnum, lo, stem, choices[5 A-E], current_key, explanation}  — the 20 Preclaude MCQs, already extracted verbatim from the KPClaude doc.
- clawtest[]   : {qnum, lo_tag, stem, choices[5], current_key, explanation}  — extra ClaudeTest practice-exam MCQs for this lecture.
- core_text    : raw text of this lecture's CLAUDECORE section (LO-by-LO body, with 'CQ ...' assertion lines, 'TQ ...' exam-tested flags, callouts, and 'ReClaude Q:' lines).
- quickies_text: raw text of the Claude Quickies (TLDCLAUDE one-liner + MUST CLAUDES numbered list).
- tq_flags[]   : the 'TQ ...' exam-tested flags pulled from core_text (high-yield, some carry provenance like 'prior-student circled').
- cq_lines[], reclaude[], tested_pre{lo:[qnums]}, major_tq_text (a prior-student high-yield outline for this lecture; may be empty).

DO THREE THINGS:

(1) VERIFY ANSWER KEYS — medical correctness is paramount. For EVERY preclaude and clawtest question, decide if current_key is the single best answer given the stem + 5 choices, judged on real OMM/clinical-anatomy fact (DiGiovanna / Foundations of Osteopathic Medicine level). These keys are almost always right — only report a fix when you are HIGHLY CONFIDENT the current_key is medically WRONG (not merely when you'd phrase it differently). Do NOT rewrite stems or choices. Output each genuine error in key_fixes as {bank, qnum, current_key, correct_key, reason}. Empty array if all correct (the common case).

(2) STRUCTURE THE LECTURE into LECTURE_CONTENT, faithfully from core_text + quickies_text (do NOT invent facts; preserve the doc's wording and the professor's emphasis/acronyms):
   - prof: the lecturer's name if present (e.g. "Dr. Eldemire"), else "".
   - tldr: the TLDCLAUDE one-liner (the lecture's thesis).
   - mustKnows: the MUST CLAUDES as an array of strings (drop the numbering).
   - los: one entry per learning objective in core_text, IN ORDER. Each = {id, statement, blocks[]}.
       * id: EXACTLY as the 'LO <id>' header reads and as the preclaude 'lo' fields use it ("1", "1.1" for Ribs I, "CU.1" for Cumulative). The question lo / lo_tag values must line up with these ids.
       * statement: the LO's objective sentence.
       * blocks: ordered content, each {t, x}. t ∈ "p" (teaching prose paragraph), "cq" (a 'CQ ...' recall assertion — strip the leading 'CQ '), "q" (a 'ReClaude Q:' question — strip the prefix), "key"|"pearl"|"trap"|"confusion"|"cue" (a labeled callout). Merge wrapped lines into clean sentences. Fold the two-column callout boxes into readable "p" blocks. Keep every teaching paragraph and every CQ. Do NOT include the 'TQ ...' flag lines, 'How tested:', or 'Tested in Preclaude:' lines as blocks (those drive the TQ map below, not the body).

(3) BUILD THE TQ MAP — the exam-tested emphasis. From tq_flags + tested_pre + major_tq_text, produce tested[]: one entry per LO that has exam-tested material = {lo, topics[]}. Each topic = a SHORT noun-phrase naming the specific tested fact (e.g. "Carpal tunnel spares thenar sensation", "Flick sign most specific for carpal tunnel"), drawn from the TQ flags / prior-student high-yield markers for that LO. lo must match an LO id above. Only include genuinely flagged/high-yield facts — this is the heavy-emphasis layer, so be thorough but grounded in the TQ signals provided.

WRITE your full result as JSON to /tmp/opp3_out/lec_${L}.json with EXACTLY this shape (valid JSON, no markdown):
{"lecture_content": {"prof":"","tldr":"","mustKnows":["..."],"los":[{"id":"1","statement":"...","blocks":[{"t":"p","x":"..."},{"t":"cq","x":"..."}]}]},
 "tested": [{"lo":"1","topics":["...","..."]}],
 "key_fixes": [{"bank":"preclaude","qnum":3,"current_key":"B","correct_key":"D","reason":"..."}]}

Create the /tmp/opp3_out directory first if needed. Then RETURN the summary object (lec, n_los, n_tested_los, key_fixes [same as written], wrote:true, note).`

phase('Structure & verify')
const results = await pipeline(
  LECS,
  (L) => agent(prompt(L), { label: `lec ${L}`, phase: 'Structure & verify', schema: PHASE1_SCHEMA, agentType: 'general-purpose' }),
  // Phase 2: independently re-check any proposed key changes for this lecture
  (r, L) => {
    if (!r || !r.key_fixes || r.key_fixes.length === 0) return r
    const fixes = r.key_fixes
    return agent(
      String.raw`You are an independent OMM/OPP medical fact-checker. Another reviewer proposed changing answer keys for OPP III lecture ${L}. The original questions are in /tmp/opp3_wf/lec_${L}.json (preclaude[] and clawtest[], each with qnum, stem, choices, current_key).

For EACH proposed change below, independently determine the correct answer from the stem + choices on real OMM/clinical fact, WITHOUT deferring to either party. Decide whether the ORIGINAL current_key was actually correct.

Proposed changes: ${JSON.stringify(fixes)}

Return verdicts[]: for each, {qnum, bank, original_key_correct (true if the doc's original current_key is the right answer), agreed_key (the letter YOU believe is correct), reason}.`,
      { label: `recheck ${L}`, phase: 'Re-check key changes', schema: VERIFY_SCHEMA, agentType: 'general-purpose' }
    ).then(v => ({ ...r, recheck: v.verdicts }))
  }
)

const ok = results.filter(Boolean)
log(`Phase 1 done: ${ok.length}/9 lectures`)
const allFixes = ok.flatMap(r => (r.key_fixes||[]).map(f => ({lec:r.lec, ...f, recheck:(r.recheck||[]).find(v=>v.qnum===f.qnum&&v.bank===f.bank)})))
log(`Proposed key fixes: ${allFixes.length}`)
return {
  lectures: ok.map(r => ({ lec:r.lec, n_los:r.n_los, n_tested_los:r.n_tested_los, n_fixes:(r.key_fixes||[]).length })),
  fixes: allFixes,
}
