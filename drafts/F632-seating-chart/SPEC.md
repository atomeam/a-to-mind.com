# F632 Seating chart

Plain name: Seating chart
Job: Enter guests and tables, set who must sit together or apart, drag people into seats, then download a PNG of the chart or a CSV of the assignments.
Input: Guest names, number of tables and seats per table, optional keep-together and keep-apart pairs.
Keeps: Download the seating chart as a PNG image; download assignments as CSV; last lists and positions saved on the device in localStorage.
Not on Verse yet: checked against llms.txt and GAPS.md — no offline interactive seating chart with constraints, drag-to-place, and PNG/CSV export.

## Concept
A practical event seating planner. Add guests and define tables. Mark pairs that should sit together or stay apart. See an automatic first placement that respects the rules, then drag anyone to a different seat to fine-tune. Everything stays on the device. No accounts, works offline.

## Novelty
Leaves the recent cluster of pure numeric calculators and estimators and earlier particle/neural demos. Core combination is a real recurring job (making a seating chart for a dinner or wedding) with an interactive spatial layout, simple constraint checking, drag-to-fix, and direct PNG + CSV export. Not a particle field, not a neural mind. Deliberately useful per the 2026-11-06 brief. First spatial constraint-satisfaction seating tool in the lab series.

## Architecture
Single self-contained HTML file. Pure vanilla JS + CSS:

- Dynamic lists: add/remove guests and define tables (count + seats each, or fixed round tables).
- Constraints: simple text pairs for keep-together / keep-apart.
- Spatial layout: CSS-positioned table circles with seat slots; guests as draggable chips.
- Auto-place: greedy assignment that tries to honour together/apart before free seats.
- Persistence: localStorage under `verse-f632-seating-chart`.
- Export: render the layout to a canvas and download as PNG; generate CSV of table/seat/guest.
- Print stylesheet so the page prints cleanly without UI chrome.
- Mobile-friendly (touch drag), works offline after load, no external assets or network.

## Expected outcome
Runnable prototype: add guests and tables, mark a few constraints, see an initial layout, drag chips to rearrange, download PNG or CSV, reload and everything is still there. Honest empty states and constraint warnings.

## Mechanics
1. Initialize from localStorage or empty lists.
2. On add/remove/edit: update arrays, recompute auto-placement if requested, redraw tables and chips.
3. Placement: assign constrained pairs first, then fill remaining seats; flag violations.
4. Drag: pointer/touch events move a guest chip; drop snaps to nearest free seat or table.
5. PNG: create offscreen canvas, draw tables + names, toDataURL, trigger download.
6. CSV: text of assignments, download as file.
7. Auto-save on change to localStorage.

## Files
drafts/F632-seating-chart/SPEC.md
drafts/F632-seating-chart/index.html

## V01D landing
Seating chart skill under void-live-deploy/skills or tools; test asserts guests + tables + constraints produce a valid layout, drag moves a guest, PNG/CSV buttons present.

## Frontier Engine F-632
Architecture: Interactive spatial seating layout with constraint-aware auto-placement + drag-to-fix + PNG/CSV seal.  
Expected outcome: a usable event planner whose table drawing updates with every guest or rule change and whose chart is ready to download.  
Mechanics: greedy constraint placement, pointer/touch drag snap, canvas export, localStorage persistence.
