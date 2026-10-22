# F-236 Scene Blocker

- **Date:** 2026-10-22 (about 1:40 AM ET)
- **Draft:** `drafts/F236-scene-blocker/index.html` (single file, no dependencies, works offline)
- **Area:** films. Continues the area rotation (comics F-233, music F-234, cards/games F-235) away from the neural/lattice/swarm cluster.

## Architecture
- `parse(text)`: line-based screenplay parser. Finds characters from dialogue tags and capitalized names before a verb, props from a 30-item dictionary, spatial relations (near, behind, front, left, right) and movement verbs. Each line becomes a beat (action, move, line, close, wide).
- `solve(scene)`: soft-constraint relaxation over a bounded stage. Relation constraints pull actors to props or each other, a separation term keeps bodies apart, wall props (window, door, shelf) pin to the back wall. Returns positions and the residual energy.
- `blockBeats`: per-beat start and end positions. A mover is relaxed toward its target while everyone else is held fixed.
- `direct(scene, frames, mode)`: generates wide, medium (8 angles), close (8 angles) and two over-the-shoulder cameras per beat, scores each with named terms (subject framed, rule of thirds, blocked view, crosses the 180-degree line, jump cut, same shot again, fits the beat, establishing shot), remembers the side of the line each pair was first shot from, and takes the best. Mode "random" is the control.
- Software perspective renderer on Canvas 2D: painter-sorted box faces, capsule actors, projected shadows, a soft pool of light on the void (no floor grid). Plan view shows the camera frustum and the line of action.
- Visible reasoning: the winning term breakdown and the top 4 candidate scores are shown for every shot.

## Outcome
Smart director: 0 off-frame, 0 blocked, 0 line crossings, 0 jump cuts over 37 beats in 4 scripts. Random control over 1,850 beats: 318 blocked, 431 line crossings, 24 jump cuts. Build takes about 2 ms. Details in the draft's SPEC.md.

## Lessons
- The 180-degree rule needs memory across beats keyed by the pair, not by the speaker, or the line flips when the other person talks.
- Over-the-shoulder shots must exempt the listener from the occlusion check, or they are never chosen.
- A grid with a `1fr` column still overflows phones when a child has a wide min-content (the storyboard strip); use `minmax(0,1fr)` and `min-width:0`.

## Not a superficial variation
No earlier Frontier entry turned text into a spatial layout, staged characters over time, or planned cameras. Closest relative is F-235's visible opponent reasoning; here the reasoning is cinematographic and changes what you see, not a board tilt. Building block for the next run: the parser plus solver can stage any text (book pages, comic panels from F-233) in 3D.
