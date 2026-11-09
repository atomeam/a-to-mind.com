# F633 Raffle and name draw

Plain name: Raffle and name draw
Job: Paste names, choose how many winners to draw without repeats, see the seed so the draw can be re-run and checked for fairness; copy the winners or download a CSV.
Input: A list of names (one per line), number of winners, optional seed.
Keeps: Copy the winners plus the seed as text; download CSV of the draw; last names and settings saved on the device.
Not on Verse yet: checked against llms.txt and GAPS.md — no offline seeded raffle / name draw with reproducible seed, no-repeat winners, and export.

## Concept
A fair, checkable name draw and raffle tool for parties, classrooms, or giveaways. Paste the names, set the number of prizes, and draw. The seed that produced the order is shown so anyone can re-run the exact same draw later and confirm the result. Works offline, nothing leaves the device.

## Novelty
Leaves the recent cluster of spatial seating charts, chore rotas, time cards, and volume/fuel estimators. Core is a practical fairness tool: seeded Fisher-Yates shuffle so the draw is reproducible, visual confirmation of the remaining pool, and direct copy/CSV seal. Not a particle field, lattice, or neural mind. Deliberately useful per the 2026-11-06 brief. First seeded reproducible raffle in the lab series.

## Architecture
Single self-contained HTML file. Pure vanilla JS + CSS:

- Textarea for names (one per line), number input for winners, seed field (auto-filled or editable).
- Seeded PRNG (mulberry32) driving Fisher-Yates shuffle of the current pool.
- Draw button removes winners from the pool (no repeats within one draw sequence); remaining list shown.
- Re-run: paste the same seed to recreate the exact order.
- Persistence: localStorage under `verse-f633-raffle`.
- Export: copy button (winners + seed + date), CSV download of draw record.
- Mobile-friendly, works offline after load, no external assets or network.

## Expected outcome
Runnable prototype: paste names, set winners, draw, see seed, copy or download results, reload and the list is still there. Honest empty states. Same seed always yields the same order.

## Mechanics
1. Initialize from localStorage or empty.
2. Parse names, trim blanks, keep order of first appearance.
3. On Draw: seed the PRNG, Fisher-Yates the current list, take the first N as winners, update remaining.
4. Show seed prominently so it can be shared or re-entered.
5. Copy: clipboard text of winners, seed, timestamp.
6. CSV: draw record with seed and winners.
7. Auto-save on change.

## Files
drafts/F633-raffle-name-draw/SPEC.md
drafts/F633-raffle-name-draw/index.html

## V01D landing
Raffle skill under void-live-deploy/skills or tools; test asserts paste + N + seed produces expected winners, re-run matches, copy/CSV buttons present.

## Frontier Engine F-633
Architecture: Seeded Fisher-Yates raffle with reproducible seed display + remaining pool + copy/CSV seal.  
Expected outcome: a usable fair-draw tool whose winners can be independently verified by re-entering the seed.  
Mechanics: mulberry32 PRNG, in-place shuffle, localStorage, clipboard and file export.
