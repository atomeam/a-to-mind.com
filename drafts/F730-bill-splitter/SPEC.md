# F730 Bill splitter

Plain name: Bill splitter

Job: Add the people, the items each ordered (or shared), the tax and the tip; get each person's fair total to copy or download.

Input: Names of people; items with price and which people share it; tax percent; tip percent.

Keeps: The current bill is saved on the device. Copy a plain-text summary of who owes what, or download a CSV.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt (tip-splitter bot exists for simple cases, no full itemized multi-person bill tool page) and docs/GAPS.md in atomeam/void-loop (not listed).

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- localStorage persists the people, items, tax, tip for the next visit.
- Real-time recalculation of subtotal, tax, tip, and per-person shares (shared items split equally among selected people).
- Visual bar chart of each person's share for quick glance.
- Copy button for text summary; download CSV of the breakdown.

## Expected outcome
A practical offline tool a group can use at a table to split an itemized bill fairly, with persistence and easy export.

## Mechanics
User adds people and items, assigns shares, sets rates; totals update live; visual bars scale to the largest share; save/load via localStorage; export via clipboard or Blob download.

## Failure modes
localStorage full or denied → in-memory only (still works for the session); very large item lists may slow DOM updates (capped practically by UI).

## Builds on
Follows the 2026-11-06 rule that every draft is a tool a person comes back for, not another spatial mind. Extends the practical calculators already on Verse (loan, tip bots) into a full itemized bill splitter with persistence and visual summary.
