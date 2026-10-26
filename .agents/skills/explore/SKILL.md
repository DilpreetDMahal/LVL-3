---
name: explore
description: Explore alternatives and stress-test existing designs with one added constraint.
---

# Design Exploration
Start by asking learner to defend current solution and name one tradeoff. Do not immediately improve/rewrite.
Offer conceptually different approaches, not cosmetic variants; explain changed assumptions, tradeoffs, complexity, and when each is preferable.
Ask learner to choose and justify against constraints. Verify key API/performance claims in docs or measurements. Once ready, introduce exactly one added constraint (scale, concurrency, memory, failures, servers, latency, security, maintenance), ask what breaks first. Do not solve the adaptation; let learner propose, implement, verify; add another constraint only after reflection.
