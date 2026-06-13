export const meta = { name:'anki-cards', description:'Generate Anki notes per lecture from the KPClaude card sources', phases:[{title:'Cards'}] }
const COURSE = "pharm";            // immuno | path | pharm  (edit per course)
const NLEC = { immuno:24, path:22, pharm:30 }[COURSE];
const LECS = Array.from({length:NLEC},(_,i)=>i+1);
log(`Generating Anki cards for ${COURSE}: ${NLEC} lectures`);

const prompt = (n) => String.raw`You are an expert medical educator building Anki flashcards for an NSU-KPCOM M1 student, following a strict spec. Build the cards for ONE lecture.

Read the source bundle: /tmp/anki_src/${COURSE}/lec_${n}.json
Fields: title, prof, tldr, mustKnows[] (MUST CLAUDES), cqs[{lo,text}] (CQ recall lines), reclaude[{lo,q}], callouts[{lo,t,x}] (key/pearl/trap/confusion/cue), prose[{lo,x}], slideTexts[] (text of each lecture slide, index 0 = slide 1), slideCount.

THE SPINE — build cards from CQs and MUST CLAUDES (cover EVERY one):
- Each CQ -> at least ONE card. Each MUST CLAUDE -> at least one card. If a CQ and a MUST CLAUDE state the same fact, card it ONCE (dedupe).
- DO NOT copy the source line verbatim. Reshape each into a stripped-down, ATOMIC card: same fact, much simpler surface. Split a multi-part CQ into separate clozes or separate notes rather than one dense card.
- CLOZE-DOMINANT: default every note to cloze. Use a basic (Q->A) note only when the item genuinely reads better as a question/answer (or when cloze would leave the answer cued by visible context).
- Blank the genuinely load-bearing term; the visible text must NOT give the blank away (no synonym/definition/logical cue left visible). If it would, rephrase, blank more (a second SAME-number blank {{c1::X}}…{{c1::Y}} hides two together on one card), or make it basic.
- CAP: at most two cloze NUMBERS per note (c1, c2 only) => max 2 cards/note. Same-number extra blanks are free (don't add cards). If a fact needs more, make a SECOND note.
- HIGHEST-YIELD topics get 2-3 notes from DIFFERENT ANGLES (mechanism / clinical hook / discriminator / number) — pick these from MUST CLAUDES and heavily-emphasized facts only. Ordinary topics = one note. Never pad low-yield into extra notes.
- Front short & direct; back = bare answer, NOT an explanation. Multi-part answers: put parts on their own lines with <br> (e.g. "Sympathetic: …<br>Parasympathetic: …"), never one run-on line.
- Lean toward the professor's/slide wording and acronym conventions.

SECONDARY — reclaude[] as BASIC notes: add one ONLY if it tests a distinct fact no CQ/MUST CLAUDE already covered. Reshape to a clean front/back.

PER NOTE also produce:
- "slides": pick the BEST slide for the card's fact — return its 1-BASED index (slideTexts[0] = slide 1). Choose by which slide's text most directly depicts the fact. Default ONE slide; return TWO only if a second genuinely adds. Return [] ONLY if every slide would assert something FALSE about the fact (rare). A loosely-relevant-but-accurate slide always beats none.
- "explanation": ONE short line — the WHY or key discriminator (NOT a recap of the answer). "" if the answer is self-explanatory.
- "hook": ONE-line memory aid ONLY if a genuinely good one exists (established mnemonic, etymology, analogy). "" otherwise — never force one.
- "learn_more": a 2-5 sentence teaching treatment of the concept, condensed from THIS lecture's prose/callouts (ground it in the bundle; don't invent). Enough that reading it alone teaches the topic.
- "lo": the LO id for cq/reclaude cards (from the source item), else null. "section": "cq" | "quickies" (MUST CLAUDE) | "reclaude".

Write JSON to /tmp/anki_gen/${COURSE}/lec_${n}.json with EXACTLY:
{"notes":[ {"type":"cloze","text":"… {{c1::blank}} …","explanation":"","hook":"","learn_more":"","slides":[7],"lo":3,"section":"cq"},
           {"type":"basic","front":"…","back":"…","explanation":"","hook":"","learn_more":"","slides":[12],"lo":null,"section":"quickies"} ] }
(cloze notes use "text"; basic notes use "front"+"back". HTML allowed in fields: <br>, <b>. Valid JSON only, no markdown.)

Then reply ONE line: "lec ${n}: <#notes> notes (<#cloze>cz/<#basic>ba), <#withSlide> slides, covered <#cq> CQ + <#must> MUST".`;

const r = await pipeline(LECS, (n)=>agent(prompt(n),{label:`cards:L${n}`,phase:'Cards',agentType:'general-purpose'}).then(s=>({lec:n,s})));
log(`Done ${r.filter(Boolean).length}/${NLEC}`); return r.filter(Boolean);
