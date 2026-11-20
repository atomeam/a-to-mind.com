# F867 Spatial Seating Chart Optimizer
Plain name: Seating chart
Job: Paste a list of guests, set table sizes and optional keep-together or keep-apart pairs, then drag guests onto tables or press Auto-seat to run a local optimizer; download a PNG of the chart or copy a CSV of the assignments.
Input: textarea for names, number inputs for tables and seats-per-table, textareas or fields for constraint pairs
Keeps: PNG download of the canvas chart, copy-to-clipboard CSV, work saved in localStorage for next visit
Not on Verse yet: checked against https://a-to-mind.com/llms.txt (no seating chart tool) and docs/GAPS.md in atomeam/void-loop (seating not listed as verified; chore chart and time sheet open but this is distinct)

## Concept
A practical event seating tool on the Verse canvas. Users supply their own guest list and soft constraints. Guests appear as draggable cards that can be dropped onto circular table representations drawn on a canvas. An "Auto-seat" button runs a short local simulated-annealing / evolutionary assignment pass that scores constraint satisfaction and seat balance, then snaps the cards into the optimized layout. The spatial arrangement is the interface; the local search is the intelligence. Fully offline, single file, phone-friendly with touch drag.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum fields, orientation-MLP portals, sealed genome transfers, acoustic/heat equations, and pure demo swarms. Core novel combination for Verse is a constraint-aware spatial drag interface whose layout can be rewritten by a pure-JS local optimizer (simulated annealing over assignment permutations), producing a keepable chart. Not a physics field, not a "mind", not sealed genomes. A tool a person returns to for a real party or meeting.

## Architecture
- Single self-contained index.html
- Canvas for tables (circles with seat positions)
- Absolute-positioned DOM guest cards with pointer/touch drag and drop onto tables
- Constraint parser: lines like "Alice+Bob" for together, "Alice-Carol" for apart
- Local optimizer: random initial assignment, then SA with swap moves, energy = violated constraints + imbalance
- Export: canvas.toDataURL PNG, or CSV of table,seat,guest
- Persistence: localStorage key `verse-f867-seating`

## Expected outcome
User pastes 8-20 names, sets 2 tables of 4-6, adds 1-2 constraints, hits Auto-seat: cards fly to good seats respecting constraints. Drag to fine-tune. Download PNG or copy CSV. Reload page: data restored. Works offline, on phone.

## Mechanics
1. Parse input on change or button.
2. Draw tables on canvas, compute seat anchor points.
3. Render guest cards at current positions (or unassigned pool).
4. Drag: pointer events move card; on drop, snap to nearest free seat or unassign.
5. Auto-seat: run 200-500 SA steps, update positions, animate cards.
6. Export buttons generate PNG/CSV from current state.
7. Save on any change.

## Failure modes
No canvas support (rare) → text table fallback. Touch drag conflicts → pointer events only. Optimizer slow on >40 guests → cap or reduce steps. localStorage full → session only.

## Building blocks
Reusable drag-to-canvas seating, pure-JS constraint SA optimizer, canvas chart export. Enables future variants (classroom seating, airplane, with more constraints or WebGPU for larger n).

Void is now Verse everywhere.
