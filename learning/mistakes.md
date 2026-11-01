# Mistakes

Record meaningful bugs or recurring misconceptions. Preserve the original reasoning.

## YYYY-MM-DD: Short title

- **Topic:** (short tag, e.g. `closures`, `sql-joins` — reuse existing tags across files where possible)
- **Problem:**
- **Mistake:**
- **Original mental model:**
- **Correct mental model:**
- **Category:**
- **Prevention:**
- **Follow-up exercise:**

## 2026-10-27: Treating the props type as the list of attributes to pass

- **Topic:** `react-props`
- **Problem:** Ticket 1.1. ProductCard needed to accept `{ product: Product }`.
- **Mistake:** Typed the component as `(props: Product)` and passed fields one by one (`title=`, `price=`, …), which got a "missing id, description, category, stock" error.
- **Original mental model:** "We only need the specific fields we use"; read the error as "fields not used."
- **Correct mental model:** React passes props as one object, and each JSX attribute becomes one key. `{ product: Product }` means one key holding a whole Product, so you pass `product={products[0]}` and read `props.product.title`. TypeScript checks what the caller passes against the type, not what the component reads.
- **Category:** conceptual
- **Prevention:** Before writing the JSX, write out the props object's shape, e.g. `{ product: {...} }`.
- **Follow-up exercise:** Type a `UserBadge` that takes `{ user: User; size: "sm" | "lg" }`, and write the JSX that calls it.
