# F627 Paint estimator

Plain name: Paint estimator

Job: Enter room dimensions, number of doors and windows, coats of paint and coverage; see how much paint to buy in litres or gallons, a live drawing of the walls with openings marked, then copy the shopping list or download it as CSV or .txt; the rooms stay on this device.

Input: Room length, width, height; door and window counts and sizes; coats; paint coverage (sq ft or m² per litre/gallon); unit toggle; optional room name; add more rooms.

Keeps: Copy the full shopping list; download CSV or .txt; last rooms and settings saved in localStorage (`verse-f627-paint`); share link carries the numbers via URL hash.

Not on Verse yet: checked against llms.txt and GAPS.md — floating pages answer simple “how much paint for a room” asks, but no offline multi-room estimator with spatial wall preview, openings, coats, coverage, and export exists.

## Architecture

Single self-contained HTML file. Pure vanilla JS + Canvas2D:

- Live calculation of wall area minus doors/windows, plus waste if desired, total paint volume.
- Canvas draws a simple unfolded or room view of walls with door/window rectangles subtracted.
- Multiple rooms as cards; each has its own canvas preview that updates as numbers change.
- Unit toggle (imperial/metric) converts consistently.
- URL hash + localStorage persistence.
- Mobile-friendly; works offline after load; no external assets or network.

## Expected outcome

A person painting one or more rooms enters the sizes once, sees the exact gallons or litres to buy and a visual of the wall area (with doors and windows), copies or downloads it for the store, and comes back because the layout and saved rooms make the estimate concrete instead of abstract math.

## Failure modes

- Zero or negative dimensions show a clear note and zero paint.
- Very large rooms scale the canvas down so the whole view is visible.
- No photo upload or complex shapes (L-rooms approximated as rectangle); note says rectangle only.
- Storage blocked: works in memory, notes that saving may not persist.

## Frontier Engine F-627

Architecture: Multi-room form + live Canvas2D spatial wall-area preview (openings marked) + unit-aware quantity engine + sealed localStorage/URL persistence.  
Expected outcome: interactive spatial estimator whose wall drawing updates with every dimension change and whose shopping list is ready to copy or download.  
Mechanics: live area/paint calculation, scaled canvas wall rendering with opening highlighting, multi-room cards, export and share.
