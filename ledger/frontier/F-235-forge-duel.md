# F-235 Forge Duel

- **Date:** 2026-10-22 (about 12:45 AM ET)
- **Draft:** `drafts/F235-forge-duel/index.html` (single file, no dependencies, works offline)
- **Area:** cards and games. Deliberately outside the neural/lattice/swarm/field family of F-207 to F-232, following the comics (F-233) and music (F-234) rotation.

## Architecture
- `forge(text,title)`: FNV-1a hash plus word features. Type from keyword and punctuation scores (ties broken by hash), cost `round((words-2)/3.5)` clamped 1–6, rarity from word variety, longest word and length, power `2×cost` adjusted by type, rarity and a hash jitter. Same text always yields the same card, so a share link only needs the text.
- Pure, JSON-cloneable game state (`newState`, `play`, `endTurn`, `result`) so the AI can copy it freely.
- `think(state,side)`: candidate plans sampled from the hand, each scored by determinized rollouts (the unseen opponent hand and deck are reshuffled before each simulation) under a time budget. Returns the best plan, its win rate, and per-lane win rates.
- The per-lane win rates drive the lanes' 3D tilt, a bar and a sentence, so the opponent's reasoning is visible on the board.
- Binder, stats and game in localStorage under `f235.*`; undo is a per-turn snapshot stack.

## Outcome
See `drafts/F235-forge-duel/SPEC.md` for full numbers. In short: seat fairness 205/190/5 over 400 random games after fixes; Monte-Carlo Verse beat a random-greedy player 92-28 at 5 ms and 98-21-1 at about 13 ms over 120 games each; full click-through game with undo and reload passes with no console errors.

## Lessons
- Short texts look highly varied, so word variety alone makes everything Rare. Weigh length in.
- Whoever resolves second in a lane with Strike/Spark has a real edge; alternate the lead each turn.
- Separate flavor pools for each side made decks unequal. Draw both decks from one shared pool.

## Not a superficial variation
No earlier Frontier entry built a card game, a binder or text-to-card forging. Closest prior idea is F-231's visible-uncertainty material; here the uncertainty comes from a game-tree search and shapes a playable board.
