# F772 Seating chart
Plain name: Seating chart
Job: Enter guest names, set the number of tables, mark pairs who must sit together or apart; drag guests onto tables to arrange them, then download a PNG of the chart or a CSV of the assignments.
Input: guest names, number of tables and seats per table, keep-together and keep-apart pairs
Keeps: download PNG of the visual chart, download CSV of table assignments, save on the device for next time, shareable link that reloads the same chart
Not on Verse yet: checked against llms.txt (basic lists exist but not interactive seating with constraints, drag, and image export)

**Concept**
A practical offline tool for planning seating at dinners, weddings, or meetings. Users add guests, define tables, set social constraints, then drag guests onto table cards. The page highlights constraint violations in real time. The finished chart can be saved as a PNG image or CSV list. State persists in localStorage and can be shared via URL.

**Novelty**
Branches away from the recent cluster of WebGPU PDE/spectral simulations (KdV solitons, waves, Cahn-Hilliard, FFT, Kuramoto) with MLP-controlled portals or DOM agents, and device-orientation MLP walkers. This is a pure interactive utility tool that solves a real planning job with structured input, spatial drag interaction, constraint checking, and exportable output. No particles, lattices, swarms, portals, sealed genomes, or generative minds.

**Architecture**
- Single self-contained index.html, pure HTML/CSS/JS, fully offline after load.
- localStorage for the current arrangement and a short history.
- Drag-and-drop (pointer events for touch/mouse) of guest chips onto table containers.
- Live constraint checker that flags keep-together misses and keep-apart violations.
- Canvas rendering for PNG download of the current layout.
- CSV generation for assignments.
- URL hash for shareable encoded state.
- Responsive layout that works on phone and desktop.

**Mechanics**
1. Set number of tables and seats each.
2. Add guest names.
3. Optionally add keep-together / keep-apart pairs.
4. Drag guest chips from the pool onto tables (or back).
5. Violations light up in red.
6. Download PNG or CSV, or copy a text summary.
7. Reload restores the last saved chart.

**Expected outcome**
Open the page, add 8 guests and 2 tables, mark two pairs that should sit together, drag them into place, see the chart, and download a PNG ready to print or share.

**Failure modes**
localStorage blocked → memory only; very large guest lists may need scroll; PNG generation uses a simple canvas draw so complex CSS may not be pixel-perfect (fallback text export always works).

**Files**
- drafts/F772-seating-chart-planner/SPEC.md
- drafts/F772-seating-chart-planner/index.html
