// ============================================================
//  CONTENT FILE  —  Pathology — Remediation
//  Cumulative remediation exam · 22 lectures
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

const QUIZ_CONFIG = { id: "path_remediation", title: "Pathology — Remediation", emoji: "🔬" };

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
  [1, "Cell Injury I", [
    [1, "Overview", [
      ["Questions for Lecture 1 — “Cell Injury I” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [2, "Cell Injury II", [
    [1, "Overview", [
      ["Questions for Lecture 2 — “Cell Injury II” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [3, "Inflammation I", [
    [1, "Overview", [
      ["Questions for Lecture 3 — “Inflammation I” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [4, "Inflammation II", [
    [1, "Overview", [
      ["Questions for Lecture 4 — “Inflammation II” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [5, "Inflammation III", [
    [1, "Overview", [
      ["Questions for Lecture 5 — “Inflammation III” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [6, "Inflammation IV", [
    [1, "Overview", [
      ["Questions for Lecture 6 — “Inflammation IV” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [7, "Hemodynamic Disorders I", [
    [1, "Overview", [
      ["Questions for Lecture 7 — “Hemodynamic Disorders I” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [8, "Hemodynamic Disorders II", [
    [1, "Overview", [
      ["Questions for Lecture 8 — “Hemodynamic Disorders II” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [9, "Genetic Markers of Disease", [
    [1, "Overview", [
      ["Questions for Lecture 9 — “Genetic Markers of Disease” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [10, "Introduction to Molecular Diagnostics", [
    [1, "Overview", [
      ["Questions for Lecture 10 — “Introduction to Molecular Diagnostics” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [11, "Human Development", [
    [1, "Overview", [
      ["Questions for Lecture 11 — “Human Development” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [12, "Neoplasia I", [
    [1, "Overview", [
      ["Questions for Lecture 12 — “Neoplasia I” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [13, "Neoplasia II", [
    [1, "Overview", [
      ["Questions for Lecture 13 — “Neoplasia II” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [14, "Neoplasia III", [
    [1, "Overview", [
      ["Questions for Lecture 14 — “Neoplasia III” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [15, "Diseases of Immunity I", [
    [1, "Overview", [
      ["Questions for Lecture 15 — “Diseases of Immunity I” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [16, "Diseases of Immunity II", [
    [1, "Overview", [
      ["Questions for Lecture 16 — “Diseases of Immunity II” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [17, "Diseases of Immunity III", [
    [1, "Overview", [
      ["Questions for Lecture 17 — “Diseases of Immunity III” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [18, "Diseases of Immunity IV", [
    [1, "Overview", [
      ["Questions for Lecture 18 — “Diseases of Immunity IV” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [19, "Pathology of Infectious Diseases I", [
    [1, "Overview", [
      ["Questions for Lecture 19 — “Pathology of Infectious Diseases I” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [20, "Pathology of Infectious Diseases II", [
    [1, "Overview", [
      ["Questions for Lecture 20 — “Pathology of Infectious Diseases II” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [21, "Pathology of Infectious Diseases III", [
    [1, "Overview", [
      ["Questions for Lecture 21 — “Pathology of Infectious Diseases III” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]],
  [22, "Pathology of Aging", [
    [1, "Overview", [
      ["Questions for Lecture 22 — “Pathology of Aging” — are being generated from the lecture materials. You can already browse the full lecture list; real questions, notes, flashcards and slides land here soon.",
       ["Got it", "OK", "Understood", "Continue"],
       0,
       "Placeholder — real content for this lecture is on the way.",
       "basic"]
    ]]
  ]]
];
// QUIZ_END
