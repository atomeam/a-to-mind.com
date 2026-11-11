# F662 Orientation MLP Note Layout

Plain name: Note force layout

Job: Paste short notes or ideas (one per line). A tiny local MLP driven by device tilt (or pointer motion) continuously adjusts attraction and repulsion between notes based on simple word overlap, forming an interactive spatial map you can drag to pin. Download the arrangement as PNG, copy a text summary, or seal the MLP weights for later reuse or share link. Everything stays on this device.

Input: Textarea of notes (one per line); optional device orientation (beta/gamma) or pointer as causal input to the MLP; drag to reposition notes.

Keeps: Download PNG of the current layout; copy a plain-text summary of note positions and connections; seal button downloads a JSON of the current MLP weights + positions; last notes and weights restored from localStorage; share link encodes notes + sealed weights via URL hash.

Not on Verse yet: checked against llms.txt and recent drafts — no offline force-layout note map driven by a local tiny MLP with orientation causal input, drag pinning, PNG keep, and sealed weight transfer.

## Concept
A hybrid spatial interface for The Verse canvas. User notes become embodied cards. A pure-JS tiny MLP (one hidden layer, ~30 weights) takes recent DeviceOrientation deltas (or pointer velocity) plus pairwise word-overlap features and outputs continuous force modulators (attraction strength, repulsion radius). A simple force simulation updates card positions each frame. High-overlap notes cluster; tilt steers the global mood of the layout. User can drag to pin. The result is a keepable visual map of the user's own ideas.

## Novelty
Leaves the dominant recent cluster of pure form utilities and static spatial packing tools (label sheets F661, seating charts, voice notes, ASCII art, bill splitters, F653–F661) and earlier residual physics/agent minds (SPH, NCA, spectral, orientation RNN portals, sealed genome swarms). Core novel combination is a previously unused causal loop: DeviceOrientation (or pointer) → local tiny MLP → continuous force-field parameters on user-supplied note cards, with reward-free online adaptation from drag events, sealed weight download, and direct PNG keep. Not a particle swarm, not a cellular automaton, not residual predictor on motion history, not WebXR, not spectral residual, not sealed-genome competition between agents. The notes themselves are the only embodied elements.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS, no libraries, no network after load.
- Notes parsed into DOM cards, absolutely positioned.
- Simple force sim (repulsion + overlap-based attraction).
- Tiny MLP: input [orient_dx, orient_dy, avg_overlap, time_sin]; hidden 4 tanh; output 2 (attr_scale, rep_scale).
- DeviceOrientationEvent (with permission prompt) or pointer delta fallback.
- Drag on cards sets pin and provides soft adaptation signal to weights.
- localStorage key `verse-f662-note-layout`.
- Canvas export for PNG; JSON seal for weights.
- Offline-capable.

## Expected outcome
User pastes 8–12 notes about a project, tilts the phone and watches clusters form and shift, drags two key notes closer, downloads a PNG of the map, and can reload or share the sealed weights so the same layout style returns.

## Failure modes
- Orientation denied or desktop: pointer velocity drives the MLP instead.
- Too many notes: clamp to 40 and warn.
- No IndexedDB/localStorage: session only.
- Weight explosion: clamp outputs and renormalize occasionally.

## Mechanics
1. Parse notes, create cards with random initial positions.
2. On orientation/pointer: buffer deltas, run MLP forward, set global force scales.
3. Each frame: compute pairwise forces (repulsion + attr * word_overlap * mlp_scale), integrate positions, respect pins.
4. Drag updates pin and slightly nudges MLP weights toward current scales.
5. Seal downloads {weights, positions, notes}.
6. Hash share restores.

Void is now Verse everywhere.

## Files
drafts/F662-orientation-mlp-note-layout/SPEC.md
drafts/F662-orientation-mlp-note-layout/index.html
