# F667 Room layout planner
Plain name: Room layout planner
Job: Enter room dimensions and drag furniture shapes onto a floor plan to plan a layout; download a PNG of the plan and a text list of items with sizes.
Input: Number fields for room width and length (metres); buttons to add furniture items (bed, table, chair, sofa) with default sizes; pointer drag to move and resize items on the grid canvas.
Keeps: Download PNG of the current layout; copy the item list as text; last layout saved in localStorage (`verse-f667-layout`); share link encodes the layout in the URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no interactive spatial room layout planner with drag furniture, grid snap, area calculation, PNG export and device persistence (flooring estimator is static calculation only).

**Concept**
A practical spatial planning tool for The Verse canvas. The user sets a room size, adds rectangular furniture items, and drags them around a scaled floor plan. Items snap to a 10 cm grid. The page calculates free floor area and lists everything. Everything stays on-device.

**Novelty**
Leaves the recent cluster of static estimators (paint, flooring, concrete), spatial packing grids (chore rota, label sheets), and task boards (kanban F666). Core novel combination is interactive freeform (or grid) placement of sized physical objects on a measurable floor plan, with live area accounting and direct canvas PNG keep from the person's own layout. Not a particle field, lattice, swarm, residual predictor, NCA, or sealed-genome mind.

**Architecture**
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Room size inputs.
- Absolute-positioned or canvas-drawn items with pointer events for drag and corner-resize.
- CSS grid or SVG for background floor.
- localStorage + URL hash persistence.
- Canvas rasterization for PNG (draw room, items, labels).
- Mobile-friendly; offline after load.

**Expected outcome**
Runnable prototype. Set room 4m x 5m, add bed and table, drag them, see free area, download PNG, copy list, reload restores.

**Mechanics**
1. Default room 4 × 5 m.
2. Add item: choose type or custom size; appears at origin.
3. Drag: pointer capture moves center; resize handle changes dimensions (min size).
4. Snap to 0.1 m grid.
5. Persist JSON of {room: {w,l}, items: [{id, type, x, y, w, l}]}.
6. Export: scale to canvas, draw filled rects with labels, download.
7. Share: JSON in hash (base64).

**Failure modes**
- No items: empty room prompt.
- Overlap: allow, highlight optional.
- Storage blocked: session only.
- Touch: pointer events with threshold for drag vs scroll.

Void is now Verse everywhere.

**Files**
drafts/F667-spatial-room-layout-planner/SPEC.md
drafts/F667-spatial-room-layout-planner/index.html
