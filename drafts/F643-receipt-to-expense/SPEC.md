# F643 Receipt to expense list

Plain name: Receipt to expense list
Job: Type or paste receipt items with amounts, assign categories, see running totals by category and overall, then download a clean CSV or copy the summary.
Input: Paste block of lines (item, amount, optional category) or add items one-by-one; category dropdown or new category field; optional date and merchant.
Keeps: Download CSV of all items + category totals; copy plain-text summary; last receipt saved in localStorage (`verse-f643-receipt`); share link carries the items via URL hash.
Not on Verse yet: checked against llms.txt and GAPS.md — no offline receipt parser / expense categorizer that turns pasted lines into categorized totals and CSV.

## Concept
A practical offline tool that turns a messy receipt (typed or pasted lines) into a categorized expense list with live totals. Add or paste items, tag categories (food, transport, office, etc.), see breakdown, then keep the result as CSV or text. Works on phone, nothing sent anywhere, honest arithmetic only.

## Novelty
Leaves the recent cluster of subscription trackers (F641), orientation/reservoir experiments (F642), and earlier practical utilities (time cards, estimators, meme makers). First dedicated receipt-to-expense converter with paste parsing, free-form categories, live category totals, and dual CSV + text keep. Useful tool per the 2026-11-06 brief. Not a field, lattice, swarm, or neural mind.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS:

- Large paste textarea + "Parse lines" button (expects "description amount [category]" or just "description amount").
- Add-item form (description, amount, category select + new category input).
- Editable table of items (description, amount, category, delete).
- Live summary: grand total + per-category subtotals.
- localStorage key `verse-f643-receipt`.
- CSV download (items + summary section).
- Copy summary button.
- URL hash for shareable snapshot (base64 JSON of items).
- Mobile-friendly, offline after load, no external deps.

## Expected outcome
Runnable prototype: paste or add several items, categories update totals, edit/delete, reload keeps data, download CSV opens correctly in a spreadsheet, copy works, share link restores. Honest empty state. Phone usable.

## Mechanics
1. Load from localStorage or URL hash on start.
2. Parse lines: split on whitespace, last token that looks like a number is the amount; optional trailing word is category; rest is description.
3. Totals recompute on every change: sum amounts, group by category.
4. Export CSV: headers (date, merchant, description, amount, category) + rows + blank + category totals.
5. Persist after every mutation; update hash optionally.
6. Categories remembered and offered in the dropdown.

## Failure modes
- Unparseable lines: skipped with a small note.
- Negative or zero amounts: allowed but flagged visually.
- Empty list: show helpful empty message; exports produce minimal files.
- Very long paste: handled in one pass.

## Measurement
Manual: paste 8 mixed lines, assign categories, verify totals, download CSV, reload persists, share link restores, works offline and on narrow viewport.
