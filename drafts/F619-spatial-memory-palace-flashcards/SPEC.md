# F619 Spatial Memory Palace Flashcards

Plain name: Memory palace flashcards

Job: Paste front/back card pairs, drag them onto a 2D spatial palace canvas so position aids recall, then study with local SM-2 spaced repetition; the due cards float in their palace places. Save the whole palace on this device, export CSV or JSON, optional speech of the front.

Input: Textarea of "front, back" lines (or one-at-a-time add); drag to place/reposition cards on the canvas; during study, rate again/hard/good/easy; optional speech button.

Keeps: Full palace (cards, positions, SM-2 state) in IndexedDB (`verse-f619-palace`); download JSON of everything or CSV of cards; copy summary; speechSynthesis reads fronts.

Not on Verse yet: checked against llms.txt (no flashcards, memory palace, or spatial SR) and GAPS.md (no match).

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Cards are absolutely positioned DOM elements on a large scrollable/pannable canvas.
- SM-2 algorithm runs entirely locally; next due date stored per card.
- IndexedDB persists cards, (x,y), ease, interval, reps, due.
- Study mode filters to due cards, shows front, reveal, rate → updates SM-2 and repositions lightly.
- Offline-capable; works on phone (touch drag).

## Expected outcome
User pastes or adds 10–20 cards, drags them into clusters or "rooms" on the canvas for a memory palace, studies the due ones (spatial layout visible), rates them, reloads and everything remains, exports for backup. Honest: positions are for the user; no claimed memory-score; SM-2 is standard.

## Mechanics
- Parse paste of lines "front, back" (comma or tab).
- Drag: pointer events move card; snap optional.
- SM-2: ease starts 2.5, interval 1 day, quality 0–5 maps to again/hard/good/easy.
- Due = now >= due timestamp.
- Speech: speechSynthesis.speak(front) if available.
- Export JSON includes positions + scheduler state; CSV is cards only.

## Novelty / Frontier note
First spatial memory-palace embodiment in the Verse series. Combines user-placed DOM spatial layout (new building block) with local SM-2 scheduler and device persistence. Not a particle field, lattice, swarm, or orientation-MLP (avoids F618). Progressive useful tool that expands future spatial-recall experiments.

## Failure modes
- No IndexedDB: in-memory only, warning shown.
- Speech unavailable: button hidden.
- Overlapping cards: user can drag; no auto-collision.
- Invalid paste lines skipped.

## Building blocks
Reusable spatial-card canvas + local SM-2 scheduler for future palace, mind-map, or recall tools.

**Files**: drafts/F619-spatial-memory-palace-flashcards/SPEC.md, drafts/F619-spatial-memory-palace-flashcards/index.html
