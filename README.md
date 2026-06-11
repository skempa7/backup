# Remediation Quiz App

A standalone study-quiz site for three cumulative **remediation** exams —
**Immunology** (24 lectures), **Pathology** (22), and **Pharmacology** (30).
Same engine and features as the GI midterm app (Learn / Practice / Master,
Fast Mode, audio, notes & highlights, embedded slides, progress tracking,
dark mode), but a **completely separate** site and repo.

Hosted free on **GitHub Pages**. The GI midterm app is untouched and unrelated.

## How it's organized

```
index.html              ← Remediation Hub homepage (lists the 3 classes)
shared/
  engine.js             ← app logic (shared by every exam — don't edit)
  styles.css            ← styling (shared by every exam — don't edit)
quizzes/
  immunology/   index.html + content.js   ← 24-lecture cumulative exam
  pathology/    index.html + content.js   ← 22-lecture cumulative exam
  pharmacology/ index.html + content.js   ← 30-lecture cumulative exam
```

**All content lives in each exam's `content.js`.** The engine and styling are
shared, so a fix applies to every exam at once, and you never edit code to
change content.

## Editing questions

Open an exam's `content.js` (e.g. `quizzes/immunology/content.js`) — on GitHub
click the file, then the pencil ✏️. Each question is:

```js
["The question stem?",
 ["option A", "option B", "option C", "option D"],
 0,                       // correctIndex: 0=A, 1=B, 2=C, 3=D
 "Explanation shown after answering.",
 "basic",                 // "basic" or "advanced"
 "imageKey"]              // OPTIONAL 6th item — only if showing a figure
```

Options are shuffled automatically. Questions nest **Lecture → Learning
Objective (LO) → Questions**. Keep the `// QUIZ_START` / `// QUIZ_END` lines.

## Status

Lecture skeletons (all 24 / 22 / 30 lectures) are in place. Real questions,
Learn-mode notes, flashcards, and embedded slides are generated
lecture-by-lecture from the course materials and replace the placeholders.

## Putting it online (GitHub Pages)

1. Create a new **public** repo (e.g. `remediation`).
2. Push this folder to it.
3. Repo **Settings → Pages → Source: `main` / `(root)` → Save**.
4. Live ~1 min later at `https://YOUR-USERNAME.github.io/remediation/`.

After that, edit `content.js` on GitHub and the live site updates within a
minute. Progress saves per-device in the browser.
