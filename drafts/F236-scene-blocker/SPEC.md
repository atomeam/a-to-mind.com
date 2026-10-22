# F-236 Scene Blocker

Write a short scene in plain text. A local, rule-based director lays out the set, blocks the actors beat by beat, chooses a camera for every beat from about 20 candidates, renders each shot in a small software 3D renderer, and explains its choice. Area: films (rotation after cards/games F-235, music F-234, comics F-233).

## Run
Open `index.html`. No dependencies, works offline. Arrow keys step shots; Play animates walks with hard cuts between shots. "Director: random" swaps in a random camera picker for comparison. "Save storyboard" downloads a PNG grid; "Copy share link" puts the script in `#s=`.

## Script format
- `SCENE:` / `INT.` / `EXT.` line sets the setting and can name props.
- `Name verb ... by/near/at/behind/in front of/left of/right of the <prop|Name>` places or moves an actor (walks, crosses, approaches and similar move).
- `Name: line` is dialogue; the partner is the most recent other speaker.
- `Close on Name` forces intent toward a close-up; `Wide ...` toward a wide.

## Measured (headless Chrome, 2026-10-22)
- 4 test scripts (kitchen, bar, dock with 3 actors, living room), 37 beats.
- Smart director: 0 off-frame subjects, 0 blocked views, 0 crossings of the 180-degree line, 0 jump cuts.
- Random director, 50 seeds per script (1,850 beats): 318 blocked views, 431 line crossings, 24 jump cuts.
- Layout solver residual 0.000 on all 4 scripts; full parse, solve, block and direct in about 2 ms.
- Empty script and no-character script show plain messages; share-link reload, storyboard PNG download and 390 px phone width (no horizontal overflow) pass; no console errors.

## Known gaps
- Parser is keyword based; pronouns ("she walks") do not resolve to a character.
- Props are boxes and actors are capsules; no facing direction, so eyelines are not checked.
- Wide cameras can sit off the plan view's edge (clamped in the plan drawing).
