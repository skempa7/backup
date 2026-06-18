export const meta = {
  name: 'remediation-glossaries',
  description: 'Build fact-checked tap-to-define glossaries for the 4 remediation decks (mine+define, then adversarial fact-check)',
  phases: [{ title: 'Define' }, { title: 'Fact-check' }],
}

const COURSES = [
  { id: 'immuno', label: 'Immunology' },
  { id: 'path',   label: 'Pathology' },
  { id: 'pharm',  label: 'Pharmacology' },
  { id: 'opp3',   label: 'OPP III (osteopathic principles / MSK / clinical OMM)' },
]

const DEFINE_SCHEMA = { type:'object', additionalProperties:false, required:['course','n_terms','note'],
  properties:{ course:{type:'string'}, n_terms:{type:'integer'}, note:{type:'string'} } }
const CHECK_SCHEMA = { type:'object', additionalProperties:false, required:['course','n_terms','n_corrected','n_removed'],
  properties:{ course:{type:'string'}, n_terms:{type:'integer'}, n_corrected:{type:'integer'}, n_removed:{type:'integer'},
    sample_corrections:{type:'array', items:{type:'object', additionalProperties:false, required:['term','was','now'],
      properties:{ term:{type:'string'}, was:{type:'string'}, now:{type:'string'} } } } } }

const definePrompt = (c) => String.raw`You are a medical educator building a tap-to-define GLOSSARY for a ${c.label} Anki deck (NSU-KPCOM M1 student).

Read /tmp/gloss_in/${c.id}.json — fields: cards[] (every card's text) and cloze_answers[] (the distinct clozed answers, i.e. the load-bearing terms). Produce a {term: definition} JSON glossary of the key medical terms a student reviewing THESE cards would tap to define.

TERM SELECTION — be thorough but not noisy:
- Include: every acronym/abbreviation that appears; key disease / organism / drug / drug-class / receptor / structure / sign / syndrome / mechanism names that show up as clozed answers or prominent nouns. For ${c.label}, lean into that domain's vocabulary.
- Exclude: trivial English words, bare numbers, and over-generic words that need no definition.
- Keys: use the SINGULAR base form (the runtime auto-matches plurals/possessives). Avoid 1–2-letter keys. Prefer single words or short phrases that appear as ONE contiguous run on a card (a phrase broken by a cloze blank won't match, so don't key those).

DEFINITIONS — accuracy-critical:
- 1–2 sentences, concise and exam-relevant. Lead with what it IS, then the key discriminator / clinical hook.
- Emphasize the single load-bearing distinction in CAPS, sparingly (e.g. "SECRETED", "OUTER membrane", "IRREVERSIBLE").
- PLAIN TEXT only (no HTML/markdown). Ground each definition in how this course frames the term so it never contradicts the cards.
- Aim for genuinely thorough coverage of the useful terms (a big course is typically ~120–200 terms).

Write the glossary as valid JSON (a flat {term:def} object) to /tmp/gloss_out/${c.id}.draft.json. Then return {course:"${c.id}", n_terms, note}.`

const checkPrompt = (c) => String.raw`You are an INDEPENDENT medical fact-checker doing an ADVERSARIAL review of a tap-to-define glossary for a ${c.label} deck. On a comparable deck this pass corrected ~30% of entries — assume errors are present and hunt them.

Read the draft /tmp/gloss_out/${c.id}.draft.json ({term:def}) and the source cards /tmp/gloss_in/${c.id}.json.

For EVERY entry, independently verify the definition on real medical fact (board/DiGiovanna/Foundations level) — is it correct, precise, and not misleading?
- FIX any that are wrong, imprecise, outdated, or that contradict standard fact or the course's framing. Keep the concise 1–2 sentence style and the CAPS-emphasis convention.
- REMOVE entries that are junk (not a real/lookup-worthy term, or a key broken across a cloze, or un-fixable).
- You MAY add an obviously-missing key term, but correctness of the existing set is the priority.

Write the corrected {term:def} JSON to /tmp/gloss_out/${c.id}.json. Return {course:"${c.id}", n_terms, n_corrected, n_removed, sample_corrections (up to 6 {term,was,now})}.`

phase('Define')
const results = await pipeline(
  COURSES,
  (c) => agent(definePrompt(c), { label:`define:${c.id}`, phase:'Define', schema:DEFINE_SCHEMA, agentType:'general-purpose' }).then(r => ({c, r})),
  ({c}) => agent(checkPrompt(c), { label:`check:${c.id}`, phase:'Fact-check', schema:CHECK_SCHEMA, agentType:'general-purpose' })
)
const ok = results.filter(Boolean)
log(`Glossaries done: ${ok.length}/4 courses`)
return ok
