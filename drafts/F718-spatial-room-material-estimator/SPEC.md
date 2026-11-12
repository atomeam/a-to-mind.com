# F718 Room material planner

Plain name: Room material planner

Job: Draw walls and rooms on a canvas with the pointer; the page calculates paint, flooring and other materials from the areas you create; download the plan as a PNG and the shopping list as CSV; the layout is saved on this device for next time.

Input: Pointer drawing of walls and rooms; text boxes for room names, wall height, paint coverage, tile size, waste percent.

Keeps: PNG download of the plan; CSV of the material list; layout and settings restored from localStorage.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — paint and flooring calculators exist as numeric forms, but no interactive spatial room drawer that computes materials from drawn geometry.

## Concept

A practical spatial tool for The Verse canvas: users draw wall segments and close rooms on a Canvas2D surface. Areas are computed from closed polygons. Live material estimates (paint litres/gallons, flooring boxes, drywall sheets) update as geometry changes. The plan can be exported as PNG; the list as CSV. Everything offline, no account.

Leaves the recent cluster of pure form calculators, particle/neural "minds", WebGPU fields, and seating charts. Core novel combination is interactive geometric drawing as the primary input to a material estimator, with direct visual plan + quantitative keep. Not a swarm, not a neural mind, not a reaction-diffusion field. Deliberately useful per the 2026-11-06 brief.

## Architecture

- Single index.html, pure HTML/CSS/JS, Canvas2D for drawing and export.
- Walls as line segments; rooms as closed polygons detected or manually closed.
- Area calculation via shoelace formula.
- Material formulas: paint = area * height / coverage * coats * (1+waste); flooring = area / tile_area * (1+waste); etc.
- localStorage key `verse-f718-room-planner` for vertices, settings.
- Buttons: Clear, Undo, Seal/Save, Download PNG, Download CSV.
- Progressive: works on desktop and mobile (touch drawing).

## Mechanics

1. User clicks/taps to place wall points; drag or click to extend.
2. Close a loop to form a room; area highlighted.
3. Inputs for height, coverage, waste update the live totals.
4. Download PNG of canvas; CSV of named rooms + quantities.
5. On load, restore last layout.

## Expected outcome

A person can sketch a simple floor plan in under a minute, see how much paint and flooring they need, adjust waste or height, and take away both a visual plan and a shopping list. Works offline after load. Phone-friendly.

## Failure modes

- Complex self-intersecting polygons: simple non-intersecting assumed; user can redraw.
- Very large canvases: fixed size with scroll.
- localStorage full: session-only warning.
- Touch precision: snap-to-grid optional.

Void is now Verse everywhere.

**Files**: drafts/F718-spatial-room-material-estimator/SPEC.md, drafts/F718-spatial-room-material-estimator/index.html
