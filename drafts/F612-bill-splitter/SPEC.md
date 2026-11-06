# F612 Bill splitter
Plain name: Bill splitter
Job: Split a group bill by who ordered what items, add shared tax and tip, and get clear per-person totals you can copy or save.
Input: Item names and prices, who ate each item, tax rate, tip percent, and the list of people.
Keeps: Copy the full breakdown as text; the current bill is saved on the device for next time; optional CSV download.
Not on Verse yet: checked against llms.txt and GAPS.md — no bill splitter tool exists.

## What existing sites do
Most tip calculators only split the total equally. Apps like Splitwise need accounts and servers. Simple calculators ignore per-item assignment.

## Better Verse version
Offline, private, single page. Assign specific items to specific people (or multiple). Tax and tip are shared by subtotal proportion or equally (toggle). Clear running totals. Persist in localStorage. Copy-ready summary. Works on phone.

## Architecture
- Single index.html (HTML/CSS/JS).
- localStorage for persistence (key: verse-bill-splitter-v1).
- No network after load.
- Mobile-first responsive layout.
- Accessible form controls.

## Failure modes
- Floating-point rounding: totals are rounded to cents at the end; residual cents assigned to the largest share.
- Empty people or items: clear empty state.
- Invalid numbers: ignored or zeroed with visual cue.
