# Concepts

Record durable understanding, not every definition encountered.

## YYYY-MM-DD: Concept

- **Topic:** (short tag, e.g. `closures`, `sql-joins` — reuse existing tags across files where possible)
- **Learner's explanation:**
- **Corrected understanding:**
- **Example:**
- **Related concepts:**

## 2026-10-27: Backgrounds sit behind content and are transparent by default

- **Topic:** `css-backgrounds`
- **Learner's explanation:** First tried putting the color on the `<img>` itself. Then thought an img with no color "inherits the wrapper's color." Final version: "the img is transparent so we see the gray."
- **Corrected understanding:** An element's background is painted behind its content, and it starts out transparent. On an `<img>`, the photo covers the background, so the color only shows where the photo doesn't fill the box (for example, the empty strips that `object-contain` leaves when the shapes don't match). The background color isn't inherited; a parent's color shows *through* a transparent child. To get a frame that always shows, put the color on a wrapper and add padding.
- **Example:** `<div className="bg-gray-200 p-4"><img className="w-full h-52 object-contain" /></div>`. A test with `bg-red-500` on the img showed red only around the photo.
- **Related concepts:** `object-contain` vs `object-cover`, padding vs margin, inherited vs non-inherited CSS properties
