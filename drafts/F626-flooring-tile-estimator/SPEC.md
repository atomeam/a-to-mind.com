# F626 Flooring and tile estimator

Plain name: Flooring and tile estimator

Job: Enter one or more room sizes, tile size and waste percent; see how many tiles and boxes to buy, a live scaled drawing of the tiled floor (full tiles and cuts), then copy the shopping list or download it as CSV or .txt.

Input: Room length/width (feet or metres), tile length/width (inches or cm), tiles per box, waste percent, optional room name; add more rooms.

Keeps: Copy the full shopping list; download CSV or .txt; last rooms and settings saved in localStorage (`verse-f626-floor`); share link carries the numbers via URL hash.

Not on Verse yet: checked against llms.txt and GAPS.md — floating pages answer simple “how many tiles for a 10x12” asks, but no offline multi-room estimator with spatial layout preview, waste, boxes, and export exists.

## Architecture

Single self-contained HTML file. Pure vanilla JS + Canvas2D:

- Live calculation of area, tiles needed (ceil after waste), boxes.
- Canvas draws a scaled top-down room with a grid of tiles; full tiles solid, cut tiles outlined or hatched; room outline and dimensions labelled.
- Multiple rooms as cards; each has its own canvas preview that updates as numbers change.
- Unit toggle (imperial/metric) converts consistently.
- URL hash + localStorage persistence.
- Mobile-friendly; works offline after load; no external assets or network.

## Expected outcome

A person planning a floor (kitchen + hallway, bathroom, etc.) enters the sizes once, sees the exact shopping list and a visual that shows how the tiles will sit (including the cuts), copies or downloads it for the store or contractor, and comes back because the layout and saved rooms make the estimate concrete instead of abstract math.

## Failure modes

- Zero or negative dimensions show a clear note and zero tiles.
- Very large rooms scale the canvas down so the whole floor is visible; tiny tiles still draw as a grid within limits.
- No photo upload or complex shapes (L-rooms approximated as rectangle); note says rectangle only.
- Storage blocked: works in memory, notes that saving may not persist.

## Frontier Engine F-626

Architecture: Multi-room form + live Canvas2D spatial tile-layout preview (full vs cut tiles) + unit-aware quantity engine + sealed localStorage/URL persistence.  
Expected outcome: interactive spatial estimator whose floor drawing updates with every dimension change and whose shopping list is ready to copy or download.  
Mechanics: live area/tile/box calculation, scaled canvas grid rendering with cut highlighting, multi-room cards, export and share.
