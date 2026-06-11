// ============================================================
//  CONTENT FILE  —  Immunology — Remediation
//  Cumulative remediation exam · 24 lectures
//
//  This is the ONLY file edited to change this quiz's content.
//  The shared engine + styling come from ../../shared/.
//
//  Structure:  Lecture -> Learning Objective (LO) -> Questions
//  Question = [ "stem", ["A","B","C","D"], correctIndex,
//               "explanation", "basic"|"advanced", "imageKey"(optional) ]
//
//  STATUS: lecture skeleton in place. Real questions, Learn-mode notes,
//  flashcards, and embedded slides are being generated lecture-by-lecture
//  from the course materials and will replace the placeholders below.
// ============================================================

const QUIZ_CONFIG = { id: "immuno_remediation", title: "Immunology — Remediation", emoji: "🦠" };

// Figure / pathology images (filled in as questions that need them are added)
const IMAGES = {};

// "Teach Me This" long-form explanations, keyed "lecture_LO" (filled in later)
const LO_ANSWERS = {};

// Optional rich-content maps — populated per lecture as content is built.
// Defined empty up front so the engine never hits an undefined reference.
const SLIDES = {};
const SLIDE_JUMPS = {};
const SLIDE_EMBED = {};
const FLASHCARDS = {};
const LECTURE_CONTENT = {};
const LECTURE_REFERENCES = {};

// QUIZ_START
const QUIZ = [
  [1, "Introduction to Immunology", [
    [1, "Overview", [
      ["Questions for Lecture 1 — “Introduction to Immunology” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [2, "Innate Immunity – Immediate Response", [
    [1, "Overview", [
      ["Questions for Lecture 2 — “Innate Immunity – Immediate Response” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [3, "Innate Immunity – Receptors & Cytokines", [
    [1, "Overview", [
      ["Questions for Lecture 3 — “Innate Immunity – Receptors & Cytokines” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [4, "Innate Immunity – Induced Cellular Response", [
    [1, "Overview", [
      ["Questions for Lecture 4 — “Innate Immunity – Induced Cellular Response” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [5, "Lymphatic System", [
    [1, "Overview", [
      ["Questions for Lecture 5 — “Lymphatic System” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [6, "Antigens and Antigen Receptors", [
    [1, "Overview", [
      ["Questions for Lecture 6 — “Antigens and Antigen Receptors” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [7, "MHC and Antigen Presentation", [
    [1, "Overview", [
      ["Questions for Lecture 7 — “MHC and Antigen Presentation” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [8, "Genetics of Lymphocyte Antigen Receptors I", [
    [1, "Overview", [
      ["Questions for Lecture 8 — “Genetics of Lymphocyte Antigen Receptors I” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [9, "Genetics of Lymphocyte Antigen Receptors II", [
    [1, "Overview", [
      ["Questions for Lecture 9 — “Genetics of Lymphocyte Antigen Receptors II” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [10, "T Cell Ontogeny", [
    [1, "Overview", [
      ["Questions for Lecture 10 — “T Cell Ontogeny” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [11, "Activation of T Cells", [
    [1, "Overview", [
      ["Questions for Lecture 11 — “Activation of T Cells” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [12, "T Cell Function and Cell-Mediated Immunity", [
    [1, "Overview", [
      ["Questions for Lecture 12 — “T Cell Function and Cell-Mediated Immunity” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [13, "B Cell Ontogeny and Activation", [
    [1, "Overview", [
      ["Questions for Lecture 13 — “B Cell Ontogeny and Activation” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [14, "B Cell–T Cell Interaction and Humoral Immunity", [
    [1, "Overview", [
      ["Questions for Lecture 14 — “B Cell–T Cell Interaction and Humoral Immunity” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [15, "Antibody Function", [
    [1, "Overview", [
      ["Questions for Lecture 15 — “Antibody Function” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [16, "Mucosal Immunity", [
    [1, "Overview", [
      ["Questions for Lecture 16 — “Mucosal Immunity” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [17, "Active and Passive Immunity", [
    [1, "Overview", [
      ["Questions for Lecture 17 — “Active and Passive Immunity” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [18, "Antibody-Mediated Hypersensitivity", [
    [1, "Overview", [
      ["Questions for Lecture 18 — “Antibody-Mediated Hypersensitivity” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [19, "Immune Complex & T Cell-Mediated Hypersensitivity", [
    [1, "Overview", [
      ["Questions for Lecture 19 — “Immune Complex & T Cell-Mediated Hypersensitivity” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [20, "Immunodeficiency Disorders & Neoplasias", [
    [1, "Overview", [
      ["Questions for Lecture 20 — “Immunodeficiency Disorders & Neoplasias” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [21, "Immune Tolerance", [
    [1, "Overview", [
      ["Questions for Lecture 21 — “Immune Tolerance” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [22, "Transplant Immunity", [
    [1, "Overview", [
      ["Questions for Lecture 22 — “Transplant Immunity” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [23, "Autoimmune Disorders", [
    [1, "Overview", [
      ["Questions for Lecture 23 — “Autoimmune Disorders” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [24, "Clinical Aspects of Immunity", [
    [1, "Overview", [
      ["Questions for Lecture 24 — “Clinical Aspects of Immunity” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]]
];
// QUIZ_END
