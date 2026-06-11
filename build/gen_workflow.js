export const meta = {
  name: 'immuno-content-gen',
  description: 'Generate + medically verify quiz content for immunology lectures',
  phases: [
    { title: 'Generate', detail: 'one agent per lecture, grounded in source bundle' },
    { title: 'Verify', detail: 'medical fact-check + fix every question' },
  ],
}

// Which lectures to build — passed in via args (array of numbers). Default: all 24.
const LECS = (Array.isArray(args) && args.length) ? args : Array.from({length:24}, (_,i)=>i+1)
log(`Building immunology content for lectures: ${LECS.join(', ')}`)

const SHAPE = String.raw`
Write a single JSON object to the output file with EXACTLY this shape (no markdown, no commentary — just valid JSON):
{
  "lec": <number>,
  "title": "<lecture title>",
  "prof": "<professor name or ''>",
  "tldr": "<=2 sentence high-yield summary of the whole lecture",
  "mustKnows": ["<5-8 highest-yield one-line facts>", ...],
  "los": [
    {
      "id": <LO number, integer>,
      "statement": "<the official LO statement>",
      "learn": [
        {"t":"p","x":"<substantive teaching paragraph, faithful to the source doc>"},
        {"t":"key","x":"<a key fact>"},
        {"t":"pearl","x":"<a clinical pearl>"},
        {"t":"trap","x":"<a common student trap / point of confusion>"}
      ],
      "questions": [
        {"stem":"<single-best-answer question>","options":["<A>","<B>","<C>","<D>"],"correct":<0-3>,"explanation":"<why the correct option is right AND why each other option is wrong>","level":"basic"},
        ... 4 to 6 questions for THIS lo, a mix of "basic" (recall/concept) and "advanced" (clinical vignette / application)
      ],
      "teach": {"answer":"<thorough 'Teach Me This' explanation of this LO. HTML allowed: <strong>, <em>, and lists written as \n- item, paragraphs separated by \n\n>","why":"<1-3 sentences on why this matters clinically / on the exam>"},
      "flashcards": [ {"front":"<active-recall question>","back":"<concise answer>"}, ... 4 to 6 cards for this LO ]
    }
    ... one object per Learning Objective
  ],
  "reference": null
}
For "reference": ONLY for lectures with high-yield tabular content (cytokines, CD markers, immunoglobulin classes, complement pathways, hypersensitivity types, TLRs, interleukins, etc.) produce an HTML string:
"<div class=\"ref-card\"><div class=\"ref-card-header\"><span class=\"ref-card-pill\">Reference Table</span><h3>Title</h3><p class=\"ref-card-sub\">Quick reference for Lecture N.</p></div><div class=\"ref-table-wrap\"><table class=\"ref-table\"><thead><tr><th>..</th>..</tr></thead><tbody><tr><td>..</td>..</tr>..</tbody></table></div></div>"
Otherwise set "reference": null.`

const genPrompt = (n) => String.raw`You are an expert medical immunologist and a professional USMLE/COMLEX item-writer creating a high-quality study tool for NSU-KPCOM M1 students preparing for a CUMULATIVE immunology remediation exam.

Read the source bundle for this lecture:
  /tmp/immuno_src/lec_${n}.json
It contains:
  - rawDocText: the full "KPCLAUDE" study document section for this lecture (the primary source — it embeds the official Learning Objectives as "LO ${n}.x", plus CLAUDEKEY/PEARL/TRAP callouts and clinical questions).
  - parsedHint: distilled tldr, mustKnows, and LO statements/blocks already extracted from that doc.
  - slideText: the text of every lecture slide, in order (what was actually presented).

Using ONLY the immunology in that bundle (do not invent facts or drift to outside topics), generate comprehensive, accurate study content for EVERY Learning Objective in this lecture.

Requirements:
- Cover every LO the lecture has (use the "LO ${n}.x" statements found in rawDocText / parsedHint; if a statement is missing, derive a faithful one from the source).
- Questions: single-best-answer, exactly 4 options, exactly one unambiguously-best answer, plausible distractors. Mix "basic" and "advanced" (advanced = clinical vignette / application). Explanations must address every option. 4-6 questions per LO.
- Learn blocks: faithful, substantive teaching notes drawn from the source doc's prose and callouts.
- Flashcards + Teach: accurate, high-yield, exam-oriented.
- MEDICAL ACCURACY IS PARAMOUNT — a wrong keyed answer actively harms the student.

${SHAPE.replace(/<number>/, String(n)).replace(/Lecture N/g, 'Lecture '+n).replace(/lec_<number>/, 'lec_'+n)}

Write the JSON to: /tmp/immuno_gen/lec_${n}.json
After writing, reply with one line: "lec ${n}: <#LOs> LOs, <#questions> questions, <#flashcards> cards, reference=<yes|no>".`

const verifyPrompt = (n) => String.raw`You are a rigorous, skeptical medical fact-checker for an immunology exam study tool. Your job is to make every question medically correct and unambiguous.

Read BOTH:
  - /tmp/immuno_gen/lec_${n}.json   (the generated content to check)
  - /tmp/immuno_src/lec_${n}.json   (the authoritative source bundle)

For EVERY question in the generated file:
  1. Independently work out the correct answer from the source + established immunology — do not trust the existing "correct" index.
  2. Confirm the keyed correct option is right AND is the single best answer (no second option is also correct/defensible).
  3. Confirm each distractor is clearly wrong; confirm the explanation is factually accurate and addresses the options.
  4. FIX problems in place: correct a wrong "correct" index, reword an ambiguous stem/option, fix a factual error in stem/options/explanation. If a question is irreparable or tests a fact not supported by the source, REMOVE it.
Also sanity-check tldr, mustKnows, every LO's learn blocks, teach answer, and flashcards for factual errors; fix them. Keep the SAME JSON shape and the same LO coverage.

Overwrite /tmp/immuno_gen/lec_${n}.json with the corrected JSON (valid JSON only, no markdown).
Then reply with one line: "lec ${n} verified: <total questions> Qs, <#fixed> fixed, <#removed> removed".`

// Pipeline: each lecture flows generate -> verify independently (no barrier).
const results = await pipeline(
  LECS,
  (n) => agent(genPrompt(n), { label: `gen:L${n}`, phase: 'Generate', agentType: 'general-purpose' }),
  (genSummary, n) => agent(verifyPrompt(n), { label: `verify:L${n}`, phase: 'Verify', agentType: 'general-purpose' })
    .then(v => ({ lec: n, gen: genSummary, verify: v })),
)

const ok = results.filter(Boolean)
log(`Done. ${ok.length}/${LECS.length} lectures completed.`)
return ok
