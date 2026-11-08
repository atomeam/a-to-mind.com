# F626 Flooring and tile estimator

Plain name: Flooring and tile estimator

Job: Enter one or more room sizes, the size of the tile or plank, a waste percentage and how many tiles come in a box; get the total area, tiles to buy after waste, boxes needed, a per-room breakdown, then copy the shopping list or download it as CSV.

Input: Room list (name, length, width, units), tile dimensions and units, waste percent, tiles per box.

Keeps: Copy the full list as text; download CSV; last session saved in localStorage; share link that restores the numbers.

Not on Verse yet: checked against llms.txt and GAPS.md — stage cards can answer a single-room tile count, but there is no dedicated offline multi-room flooring estimator with waste, box rounding, per-room breakdown, CSV export and device save.

## Architecture

Single self-contained HTML file. Pure vanilla JS:

- Live recalculation on every change.
- Units: feet/metres for rooms, inches/centimetres for tiles; all converted internally to metres then to square metres, then tiles.
- Waste applied to total tile count; boxes rounded up.
- localStorage persistence of the whole project.
- URL hash for sharing the current numbers.
- Mobile-friendly stacked form; works offline after load; no external assets or network.

## Expected outcome

A person measuring a hallway and two bedrooms pastes the dimensions, picks 12×24 inch tiles at 10 % waste and 8 per box, and immediately sees “buy 14 boxes”. They copy the list into a note or download the CSV for the supplier. They come back because the last project is still there when they open the page again.

## Failure modes

- Zero or negative dimensions are ignored and flagged.
- Extremely large numbers are capped to avoid nonsense.
- Unit conversion is exact for the stated units; no custom unit.
- No price calculation (prices change); no installation advice.

## Frontier Engine F-626

Architecture: Multi-room geometric estimator with unit conversion, waste multiplier, ceiling to whole boxes, sealed local persistence and shareable hash.  
Expected outcome: a reusable home-improvement shopping list generator that a person keeps open while measuring rooms.  
Mechanics: live area summation, tile count with waste, box rounding, text/CSV export, localStorage + hash seal.
