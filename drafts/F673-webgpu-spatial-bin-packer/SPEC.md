# F673 GPU Spatial Packer
Plain name: GPU Spatial Packer
Job: Enter items with names and relative sizes; a local WebGPU force simulation packs them into non-overlapping spatial bins on the canvas; drag any card to refine the layout, then download a PNG of the arrangement and a CSV of the list.
Input: Form to add items (name + size 1-10); pointer drag on cards; optional number of bins.
Keeps: Download PNG snapshot of the current spatial board; download CSV of items (name, size, bin, x, y); last packing restored from localStorage.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no WebGPU-accelerated spatial bin packer that takes user items, runs local force optimization, and exports dual PNG+CSV with persistence.

**Concept**
A practical tool for The Verse canvas that turns a list of user-supplied items into draggable spatial cards. A WebGPU compute pass (or JS fallback) runs a short force-directed packing simulation that assigns items to bins and resolves overlaps. The person can drag cards to override, then export both a visual layout and structured data.

**Novelty**
Branches away from the recent spatial-planner cluster (packing list F671, barcode inventory F670, room layout F667, kanban F666, dependency planner F665, tilt note organizer F672) and the hybrid sensor-generative cluster (eyedropper MLP, motion wallpaper, WebXR hand verlet). Explicitly leaves residual predictors, pure NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles, and continuum fields. Core novel combination is previously unused WebGPU compute shaders applied to a practical multi-bin packing force simulation on user-owned DOM cards, with dual export and localStorage persistence. Not a static drag planner, not a particle lattice, not a genome competition, not a sensor-driven mind.

**Architecture**
Single self-contained index.html, offline after load.
- Add-item form (name, size slider).
- Canvas or absolute DOM cards representing items, colored by bin.
- Feature-detect WebGPU; if present, run a simple compute shader that performs a few iterations of repulsion + bin attraction on item positions (storage buffers).
- JS fallback uses requestAnimationFrame with the same force rules.
- Cards are DOM elements positioned absolutely; simulation writes left/top.
- Drag handlers override positions and pin them.
- localStorage persists items and positions.
- Export PNG via html2canvas-style (draw cards to an offscreen canvas) or simple canvas snapshot; CSV via Blob.

**Expected outcome**
Open page, add several items of different sizes, click Pack, watch them settle into bins without heavy overlap, drag one, download PNG and CSV, reload restores the list.

**Mechanics**
1. Load items from localStorage or start empty.
2. On add: create card with random position in a bin.
3. On Pack: run 60 frames of force simulation (repulsion between cards, attraction to bin centers proportional to size).
4. WebGPU path: upload positions to storage buffer, dispatch compute, read back.
5. On drag: pin position, mark as user-adjusted.
6. On export PNG: render current card positions to a 2D canvas and download.
7. On export CSV: serialize name,size,bin,x,y.
8. Persist on change.

**Failure modes**
- No WebGPU: silent JS fallback, still functional.
- localStorage blocked: session only.
- Too many items: limit to 24 for performance.
- Drag during simulation: simulation pauses for that card.

Void is now Verse everywhere.

**Files**
drafts/F673-webgpu-spatial-bin-packer/SPEC.md
drafts/F673-webgpu-spatial-bin-packer/index.html

## V01D landing
GPU spatial packer skill under void-live-deploy/skills/webgpu-bin-packer.js; test asserts add item creates card, pack reduces average overlap, export produces CSV with at least one row and a PNG blob, reload restores items.
