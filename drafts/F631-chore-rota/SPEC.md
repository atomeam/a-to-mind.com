# F631 Chore rota

Plain name: Chore rota
Job: Enter the people in the house and the chores that need doing, get a fair weekly rota that rotates so everyone shares the load, then print it or download a PNG to stick on the fridge.
Input: List of names, list of chores, optional number of weeks to show and start week number.
Keeps: Download the rota as a PNG image; print the page; last lists saved on the device in localStorage.
Not on Verse yet: checked against llms.txt and GAPS.md — no offline fair rotating chore rota with visual weekly grid and PNG export.

## Concept
A practical household chore rota generator. Add people and chores. Instantly see a multi-week rotating schedule where assignments cycle fairly. Visual weekly grids you can read at a glance. Everything stays on the device. No accounts, works offline.

## Novelty
Leaves the recent cluster of pure numeric calculators and estimators (time card, fuel cost, paint/flooring volume, GPA, recipe scaler) and earlier spatial/particle "minds". Core combination is a real recurring job (making a fair chore list people actually use) with an interactive editable grid, automatic fair rotation, and direct PNG download for printing. Not a particle field, not a neural mind, not a demo lattice. Deliberately useful per the 2026-11-06 brief.

## Architecture
Single self-contained HTML file. Pure vanilla JS + CSS:

- Dynamic lists: add/remove people and chores with text inputs.
- Rotation: for each week, cycle the starting assignee so chores rotate evenly across people.
- Visual: CSS grid of weeks × chores, each cell shows the assigned person. Color-coded by person.
- Controls: weeks to generate (default 4), optional start offset.
- Persistence: localStorage under `verse-f631-chore-rota`.
- Export: render the grid to a canvas and download as PNG.
- Print stylesheet so the page prints cleanly without UI chrome.
- Mobile-friendly, works offline after load, no external assets or network.

## Expected outcome
Runnable prototype: add names and chores, see the rotating weekly grid update live, change number of weeks, download PNG or print, reload and lists are still there. Honest empty states when no people or chores.

## Mechanics
1. Initialize from localStorage or empty lists.
2. On add/remove/edit: update arrays, recompute assignments with modular rotation, redraw the grid.
3. Assignment: for week w, chore c, person index = (w + c) % numPeople (or offset).
4. PNG: create offscreen canvas, draw title + table text, toBlob or toDataURL, trigger download.
5. Auto-save on change to localStorage.

## Files
drafts/F631-chore-rota/SPEC.md
drafts/F631-chore-rota/index.html

## V01D landing
Household chore rota card under void-live-deploy skills or tools; test asserts people + chores → balanced rotation over weeks, PNG download button present.
