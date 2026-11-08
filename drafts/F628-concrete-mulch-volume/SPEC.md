# F628 Concrete and mulch volume

Plain name: Concrete and mulch volume

Job: Enter the sizes of a slab, footing, column or mulch bed; see the cubic metres or yards and how many bags to buy, with a live drawing of the shape, then copy the shopping list or download it as CSV or .txt; the items stay on this device.

Input: Shape (slab, footing trench, cylinder/column, rectangular bed, circular bed); length/width/thickness or diameter/height/depth; waste percent; bag size and type (concrete 60 lb / 80 lb or mulch 2 / 3 cu ft); unit toggle (imperial/metric); optional name; add more items.

Keeps: Copy the full shopping list; download CSV or .txt; last items and settings saved in localStorage (`verse-f628-volume`); share link carries the numbers via URL hash.

Not on Verse yet: checked against llms.txt and GAPS.md — floating pages can answer a single “volume of a 10x10x4 slab” ask, but no offline multi-shape estimator with bag counts, waste, spatial preview of each pour or bed, and export exists.

## Architecture

Single self-contained HTML file. Pure vanilla JS + Canvas2D:

- Live volume calculation for each shape (slab = L×W×T, footing = L×W×D, cylinder = π r² h, bed = area × depth).
- Waste multiplier applied; bags = ceil(volume / bag yield), with honest yield notes (e.g. 60 lb bag ≈ 0.45 cu ft).
- Canvas draws a simple scaled top or side view of the shape with dimensions labelled.
- Multiple items as cards; each has its own canvas that updates as numbers change.
- Unit toggle converts consistently (ft/in ↔ m/cm; cu ft/yd³ ↔ m³).
- URL hash + localStorage persistence.
- Mobile-friendly; works offline after load; no external assets or network.

## Expected outcome

A person ordering concrete or mulch enters the sizes once, sees the exact cubic volume and bags to buy plus a visual of each shape, copies or downloads the list for the store, and comes back because the saved items and drawings make the estimate concrete instead of abstract math.

## Failure modes

- Zero or negative dimensions show a clear note and zero volume/bags.
- Very large shapes scale the canvas down so the whole view is visible.
- Only rectangular and circular forms (no complex L-shapes or slopes); note says so.
- Storage blocked: works in memory, notes that saving may not persist.
- Bag yields are approximate industry averages; the page states the assumption.

## Frontier Engine F-628

Architecture: Multi-shape form + live Canvas2D spatial preview (scaled top/side view with labels) + unit-aware volume/bag engine + sealed localStorage/URL persistence.  
Expected outcome: interactive spatial estimator whose shape drawings update with every dimension change and whose shopping list (volume + bags) is ready to copy or download.  
Mechanics: live volume/bag calculation with waste, scaled canvas shape rendering, multi-item cards, export and share.
