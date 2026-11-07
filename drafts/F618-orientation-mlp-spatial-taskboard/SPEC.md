# F618 Spatial task board

Plain name: Spatial task board

Job: Add tasks as floating cards on a 2D canvas. Tilt your device (DeviceOrientation) to steer a local tiny MLP that applies forces to arrange or cluster the cards. Pin cards by tapping. Export the arrangement and model weights as JSON; reload keeps your board in IndexedDB.

Input: Text field to add tasks; device tilt (alpha/beta/gamma); tap to pin/unpin; buttons to reset model, export, clear.

Keeps: Arrangement + model weights persist in IndexedDB (`verse-f618-board`); download JSON of current board + genome; copy summary text.

Not on Verse yet: checked against llms.txt (no spatial task board or orientation-driven MLP layout) and GAPS.md (no match).

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Cards are absolutely positioned DOM elements with simple Verlet integration.
- Tiny MLP (input 3 orientation + 2 card pos → 2 force outputs), 1 hidden layer, weights in Float32Array.
- DeviceOrientationEvent feeds inputs; requestAnimationFrame loop updates physics.
- IndexedDB for persistence of tasks, positions, pins, and MLP weights.
- Offline-capable.

## Expected outcome
User adds several tasks, tilts phone, watches cards respond to the learned/force field driven by orientation via MLP, pins favorites, reloads and state remains, downloads JSON for transfer. Honest: local only, no cloud sync, model is tiny and exploratory not highly trained.

## Mechanics
- Add task creates card with random start pos.
- MLP forward: orientation normalized → hidden ReLU → force deltas.
- Physics: velocity += force * dt, position += velocity, damping, bounds wrap or bounce.
- Tap toggles pin (pinned ignore forces).
- Export serializes {tasks, weights, pins}.
- Load on start from IDB.

## Novelty / Frontier note
Branches away from the recent practical calculator/scaler cluster (F612–F617). Combines DeviceOrientation as causal input to a never-before-seen local MLP that controls physical DOM card elements in a hybrid spatial embodiment. Not a lattice, residual, NCA, spectral, or pure softbody. Sealed genome (weights) transferable via JSON. New building block for orientation-driven local models on UI.

## Failure modes
- No DeviceOrientation support / permission denied: falls back to pointer/mouse as proxy input.
- IDB quota: in-memory only, note shown.
- Too many cards: performance degrades gracefully (cap at 40).
- Orientation absolute vs relative: uses relative deltas.

## Building blocks
Reusable tiny MLP + orientation-to-force pipeline and IDB spatial persistence for future hybrid local-AI UI tools.

**Files**: drafts/F618-orientation-mlp-spatial-taskboard/SPEC.md, drafts/F618-orientation-mlp-spatial-taskboard/index.html
