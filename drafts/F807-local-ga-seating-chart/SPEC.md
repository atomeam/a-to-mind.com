# F807 Seating chart
Plain name: Seating chart
Job: Enter guest names, number of tables, and keep-together or keep-apart pairs; the page runs a local genetic algorithm to propose a balanced arrangement, lets you drag guests between tables to adjust, then download CSV, copy the list, or reload the saved plan from the device.
Input: Text area for names (one per line), number inputs for tables and seats-per-table, text areas for keep-together and keep-apart pairs (one pair per line, names separated by comma).
Keeps: Download CSV, copy to clipboard, automatic IndexedDB save/restore of names, constraints, and final assignment.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt (no seating chart) and typical GAPS; no prior F- draft implements interactive GA seating with drag export.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Parser: line-split names; pairs as "A, B".
- Local GA: population of assignments (array of table IDs per guest), fitness = satisfied constraints + table balance penalty + soft capacity, tournament selection, crossover, mutation; 30–50 generations on button or auto.
- Display: CSS grid of table cards; guests as draggable DOM chips (HTML5 drag-and-drop).
- Export: CSV of table,guest; clipboard; IDB key "seating-v1".
- Phone-friendly, offline, reduced-motion respected.

## Expected outcome
User pastes 8–20 guests + a few constraints, clicks "Arrange", sees a usable starting layout in <1s, drags 2–3 guests, downloads CSV for printing or sharing. Plan reloads on next visit.

## Mechanics
1. Parse input → guest list + constraint edges.
2. Initialize random population.
3. Evolve until generations complete or user stops.
4. Render tables; support drag-drop reassignment (updates assignment, re-scores live).
5. Seal/export on demand; restore on load.

Void is now Verse everywhere.
