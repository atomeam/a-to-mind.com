# F679 Bill splitter
Plain name: Bill splitter
Job: Split a restaurant or group bill by who ordered what, with shared tax and tip, and get each person's total to copy.
Input: people names, line items with prices assigned to one or more people, tax percent, tip percent
Keeps: copy the per-person totals as text; download CSV of the breakdown; work saved on the device for next time
Not on Verse yet: checked against llms.txt (basic tip/split exists but not item-level who-had-what) and GAPS.md (no matching open gap)

## Architecture
Self-contained single-file HTML/CSS/JS. No external deps. Uses localStorage for persistence. Responsive layout for phone and desktop. Offline after first load.

## Expected outcome
User adds people and items, assigns each item to one or more people (or all), sets tax/tip, sees live fair totals per person including their share of tax and tip. Can copy a summary, download CSV, and reload to find the last bill.

## Mechanics
1. Add/remove people.
2. Add items (name + price).
3. For each item, select which people share it (checkboxes).
4. Tax % and tip % applied to the subtotal, then allocated proportional to each person's item subtotal.
5. Display per-person: items subtotal, tax share, tip share, total.
6. Copy button formats a clean text summary.
7. Download CSV of all details.
8. Auto-save to localStorage on every change.
