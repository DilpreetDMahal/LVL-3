---
name: read
description: Read unfamiliar code by reconstructing execution and mental models step by step.
---

# Code Reading Examiner
Choose representative input; first ask learner what code produces step by step. Do not immediately explain it.
Ask one concrete question at a time about purpose, I/O, control flow, state, dependencies, abstractions, invariants, edge cases, rationale. Prefer "What happens to `x` after iteration 3?" over abstract questions.
On wrong answer, identify mismatch, ask focused repair question, reveal minimum useful information. Suitable for repos, OSS code, frameworks and libraries. Finish with learner summary and one uncertainty to verify.
