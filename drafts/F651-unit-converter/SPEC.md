# F651 Unit converter

Plain name: Unit converter
Job: Pick a category (length, weight, volume, temperature, area, speed, time, data), enter a number in one unit, and see it converted live into all the others; copy the results or download a CSV of the current conversion, with last used category saved on the device.
Input: Category selector, a number box, and the source unit dropdown; results update as you type.
Keeps: Copy button for a plain-text summary of all conversions; download CSV of the unit pairs; last category and value saved in localStorage (`verse-f651-unit`); share link carries the category and value via URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no general offline multi-category unit converter with live all-to-all results, CSV export and device save.

## Novelty
Leaves the recent dominant cluster of visual makers (meme, QR, contrast checker), trackers (habit, subscription, receipt), and spatial diagram tools (flowchart). Core novel combination is a previously unused pure-JS conversion matrix embodied as a live multi-result table with category tabs, copy/CSV keep, and hash persistence. Not a particle field, lattice, swarm, or neural mind; a tool that produces keepable conversion results from the person's own number.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Hard-coded conversion factors relative to a base unit per category.
- Live calculation on input.
- localStorage restore.
- URL hash for share.
- Mobile-friendly, works offline after load.

## Failure modes
- Invalid number: show "enter a number".
- Extreme values: scientific notation or note if too large/small.
- Storage unavailable: works in-memory.

## Files
drafts/F651-unit-converter/SPEC.md
drafts/F651-unit-converter/index.html
