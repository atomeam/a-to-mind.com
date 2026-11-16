# F768 Itemized Bill Splitter
Plain name: Bill splitter
Job: Split a group bill by who ordered what items, add shared tax and tip, and get clear per-person totals you can copy or save.
Input: people names, item names and prices, who shares each item, tax percent, tip percent
Keeps: copy the full summary as text, save the bill on the device for next time, shareable link that reloads the same bill
Not on Verse yet: checked against llms.txt (simple splits exist but not itemized with assignments and local save)

## Concept
A practical offline tool for splitting restaurant or shared bills fairly. Users enter people and items, assign portions or full items to people, set tax and tip rates, and see live per-person subtotals, tax share, tip share, and totals. Results can be copied, saved locally, or shared via URL.

## Novelty
Leaves the cluster of simulation minds, particle fields, lattices, and generative "portals". This is a pure utility tool that a person returns to for a real job (splitting a bill), with structured input, fair calculations, persistent local history, and export. No fields, swarms, or sealed genomes. Builds the frontier by demonstrating useful, returnable capabilities that can later absorb spatial or AI assistance if needed (e.g., receipt photo later).

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, offline after load.
- LocalStorage for the current bill and a history of past bills.
- Live calculation: item shares → subtotals → proportional tax/tip → totals.
- Copy button for text summary.
- URL hash or query for shareable state (base64 encoded JSON).
- Responsive, mobile-friendly form and table.

## Mechanics
1. Add people and items.
2. For each item, select who pays (full or split equally among selected).
3. Enter tax % and tip % (or fixed amounts).
4. See live table of per-person breakdown.
5. Copy summary, save to history, or share link.
6. Reload restores last or shared bill.

## Expected outcome
Open the page, enter a sample bill (3 people, 5 items, 8% tax, 18% tip), assign items, see accurate totals, copy the text, refresh and see it restored. Works offline, on phone.

## Failure modes
- Storage blocked: works in session only.
- Large bills: capped at reasonable item/people counts.
- Invalid numbers: ignored or zeroed with warning.

## Building blocks
Reusable pure-JS bill allocation engine, local history store, shareable state encoding. Next could add receipt OCR or speech entry.

Void is now Verse everywhere.

**Files**: drafts/F768-itemized-bill-splitter/SPEC.md, drafts/F768-itemized-bill-splitter/index.html
