# F666 Spatial kanban board
Plain name: Spatial kanban board
Job: Type tasks into columns (To Do, Doing, Done or custom); drag cards between columns and reorder them; the page keeps the board on the device and gives back a downloadable PNG of the board plus a copyable list.
Input: Text fields to add cards and columns; pointer drag on the cards.
Keeps: Download PNG of the current board; copy the tasks as plain text or Markdown; last board saved in localStorage (`verse-f666-kanban`); share link encodes the board in the URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no offline kanban / task board with drag columns, PNG export and device persistence (flowchart is freeform boxes, dependency planner is a timeline).

**Concept**
A practical spatial task board for The Verse canvas. User creates columns and adds cards with titles (optional notes). Cards can be dragged between columns or reordered inside a column. The layout is pure CSS grid / flex with pointer events. Export draws the board to a canvas for PNG. Everything stays on-device.

**Novelty**
Leaves the recent cluster of spatial packing grids (chore rota F663, label sheets F661), timeline bars (dependency planner F665), seating charts and form utilities. Core novel combination is interactive multi-column card drag with local reorder, live column counts, and direct canvas PNG keep from the person's own task list. Not a particle field, lattice, swarm, residual predictor, NCA, spectral residual, or sealed-genome mind.

**Architecture**
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Dynamic columns and cards.
- HTML5 drag-and-drop or pointer events for moving cards.
- localStorage + URL hash persistence.
- Canvas rasterization for PNG (draw text and boxes).
- Mobile-friendly; offline after load.

**Expected outcome**
Runnable prototype. Add 3 columns, 6 cards, drag a card from To Do to Doing, download PNG, copy the list, reload restores the board.

**Mechanics**
1. Default columns: To Do, Doing, Done.
2. Add card: text input + button per column or global.
3. Drag card: dataTransfer or pointer capture; drop reorders or moves column.
4. Persist JSON of {columns: [{name, cards: [{id, text}]}]}.
5. Export: measure layout, draw to offscreen canvas, download.
6. Share: JSON in hash (compressed or base64).

**Failure modes**
- No cards: empty board prompt.
- Too many: soft limit 100 cards.
- Storage blocked: session only.
- Touch: use pointer events with threshold.

Void is now Verse everywhere.

**Files**
drafts/F666-spatial-kanban-board/SPEC.md
drafts/F666-spatial-kanban-board/index.html
