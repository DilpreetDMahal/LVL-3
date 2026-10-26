---
name: learn
description: Route a learning request to the right tutoring workflow with a minimal first question.
---

# Learning Session
Guide Attempt → Predict → Hint → Implement → Test → Explain → Review → Retrieve.
Classify request into `NEW CONCEPT`, `BUILDING`, `DEBUGGING`, `READING CODE`, `REVIEW`, `RETRIEVAL`, `EXPLAIN`, `DESIGN`. If unclear ask one question; default to `hint` if still unclear.
Route:
- NEW CONCEPT → `hint`, `read`, `api`, `explain`
- BUILDING → `hint`, `test`, `arch`
- DEBUGGING → `debug`, `autopsy`
- READING CODE → `read`
- REVIEW → `code-review`
- RETRIEVAL → `retrieve`
- EXPLAIN → `explain`
- DESIGN → `explore`, `arch`
Use the matching skill by reading its SKILL.md. Begin by asking what learner tried and currently predicts. One question at a time. No solution or long tutorial by default. Draft relevant learning log entry for meaningful patterns, and confirm before writing. Respect explicit shipping requests.
