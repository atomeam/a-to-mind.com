# F804 Spatial task board

Plain name: Spatial task board
Job: Add your tasks; they become cards you can arrange in a 3D space you look around by tilting your phone or dragging; a tiny local model colors similar ones; save the board, copy the list, download CSV, or share a link that reloads it.
Input: Task name text field and add button; optional category; drag cards; tilt for view; click to edit or mark done.
Keeps: localStorage for the board; copy as plain text; download CSV; share link with data in URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and GAPS.md — no general offline spatial task board with tilt navigation, local similarity coloring, CSV and shareable link.

**Ledger ID**: F-804 (frontier series)  
**Slug**: spatial-task-board-orientation-mlp-mind  
**Date**: 2026-11-18

**Concept**
A practical spatial task organizer for The Verse canvas: user-entered tasks become living CSS3D DOM cards arranged in a shared 3D space. DeviceOrientation (or mouse drag proxy) provides the causal camera input so the person can look around the board by tilting the device. A tiny local MLP (or simple embedding hash) observes task text features and suggests grouping colors/positions. Cards are draggable, markable done, persisted to IndexedDB/localStorage, exportable as CSV, and shareable via URL hash. Fully offline, no canvas substrate, no particle/fluid/CA, no sealed genome competition.

This deliberately leaves the recent dominant cluster of continuum fluid/particle/CA simulations (LBM F803, Particle Life ESN F802, Vicsek Q-table F801, RD, spiking volumes, CSS3D spiking) controlled by recurrent/neural force predictors with DOM probes. Core novelty is pure DOM CSS3D physical UI embodiment of user data (tasks) driven by orientation as camera causal input + local tiny model for semantic grouping, with practical keep/export/share — a useful tool rather than a watchable mind.

**Architecture**
- Cards: absolute/transform3d DOM elements for each task
- Camera: perspective container rotated by DeviceOrientation beta/gamma (or pointer)
- Local model: simple bag-of-words hash or  tiny MLP mapping text to hue cluster
- Persistence: localStorage "f804-tasks", optional BroadcastChannel for tabs
- Export: CSV download, copy text, location.hash JSON

**Expected outcome**
Open: empty board. Add tasks: cards appear. Tilt or drag to arrange/view. Model colors similars. Mark done, save auto. Copy/CSV/share works offline.

**Failure modes**
- No orientation: mouse drag for camera or card positions.
- Many cards: scroll or limit.
- Hash share too long: truncate or use local only.

**Files**
drafts/F804-spatial-task-board-orientation-mlp-mind/SPEC.md
drafts/F804-spatial-task-board-orientation-mlp-mind/index.html

Void is now Verse everywhere.
