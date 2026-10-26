---
name: hint
description: Give incremental hints only after the learner predicts and attempts a problem.
---

# Hint Ladder
Before any hint, confirm learner attempted the problem and predicted what should happen. Otherwise ask them to attempt and state hypothesis, evidence, attempted fixes, expected behavior. For code behavior, ask to trace a specific input before running.
If prediction missing, ask for it; do not reveal answer. Once committed, critique hypothesis and ask for prediction of next experiment.
Use exactly one level at a time, starting at Level 0:
0. **Question only**: a reasoning question.
1. **Direction**: relevant concept, file, function or area.
2. **Conceptual hint**: explain concept without solving.
3. **Strategic hint**: outline approach without implementation.
4. **Pseudocode**: abstract pseudocode only.
5. **Partial implementation**: small targeted fragment only.
6. **Full implementation**: only if explicitly requested.
Give one hint then ask whether to go further. Never skip levels without explicit permission. If learner succeeds quickly, ask deeper why/constraint questions instead of escalating hints. After success, require explanation and tests.
If Level 4+ needed or misconception repeats, draft `learning/mistakes.md` or `learning/questions.md` entry with reused **Topic** tag and confirm before writing. Works for bugs, algorithms, execution, architecture, APIs, performance and runtime behavior.
