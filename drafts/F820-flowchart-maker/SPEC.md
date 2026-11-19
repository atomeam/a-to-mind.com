# F820 Flowchart maker

Plain name: Flowchart maker
Job: Add boxes for process steps, type their labels, drag them around a board, connect them with arrows, then download the diagram as a PNG or export the structure as JSON to keep or share.
Input: text labels for boxes; pointer or touch drag to position; click two boxes to connect.
Keeps: download PNG of the diagram; export/import JSON; last diagram saved on the device in localStorage.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and recent drafts — no offline drag-and-drop flowchart or process diagram tool with PNG export and JSON persistence.

**Concept**
A practical interactive diagram tool for The Verse canvas. Users create labeled boxes that they can freely arrange in 2D space, draw directed connections between them, and export a clean visual or the data. Useful for process maps, decision trees, simple org charts or workflows that a person returns to and keeps.

**Novelty**
Leaves the recent cluster of form calculators, spatial meal/habit/budget boards, and physics-based experiments. Core is pure DOM + SVG spatial interaction with live connection rendering, touch support, and dual export (visual PNG + structured JSON). Not a simulation, not an agent, not a field.

**Architecture**
- Single index.html.
- Absolute-positioned box divs on a relative board.
- SVG overlay for arrows (path with marker).
- Pointer/touch events for drag.
- localStorage key `verse-f820-flowchart`.
- Export: serialize boxes + edges to JSON; render current layout to canvas for PNG download.

**Expected outcome**
Open page, add several boxes, label them, drag into place, connect, download PNG or JSON, reload restores. Works offline on phone and desktop.

**Failure modes**
- No localStorage: works in memory only.
- Very many boxes: still usable; no hard limit in prototype.
- Touch on older browsers: falls back to pointer.

**Files**
drafts/F820-flowchart-maker/SPEC.md
drafts/F820-flowchart-maker/index.html
