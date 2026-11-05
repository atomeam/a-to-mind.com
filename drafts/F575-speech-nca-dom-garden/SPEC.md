# F575 — Speech-Seeded NCA Living DOM Garden

**Ledger ID**: F-575 (frontier series)

## Concept
Continuous Web Speech recognition supplies word tokens and energy that seed and bias a local cellular automaton (Gray-Scott reaction-diffusion style). The lattice runs in a WebGPU compute shader when available, otherwise Canvas2D. Emergent high-density regions host living DOM plant cards whose scale, rotation, hue, and displayed token are driven by the field under them. Dragging a card injects an energy pulse back into the lattice. A tiny local MLP maps recent speech features + DeviceOrientation tilt into feed/kill parameter offsets. Best lattice seeds and MLP weights seal to IndexedDB.

## Novelty
Leaves the recent dominant cluster of WebGPU continuum/particle physics (SPH, Lorentz magnetic, sandpile SOC, lattice-gas, vector fields), sealed-genome CSS-grid or orb arenas, spectral residual / hopfield memory, orientation-MLP/RNN DOM sculptors, WebXR hand/gaze constraints, and prior pure NCA or speech-fluid variants (F562, F569). Core novel combination is speech-token energy as the causal driver of an embodied NCA substrate whose structures physically become the living DOM organisms the user can manipulate and that feed back into the field. Not a particle swarm, not a residual predictor, not a sealed genome competition arena.

## Architecture
- Main thread: Web Speech continuous recognition → last token + volume proxy
- NCA lattice: 128×128 Gray-Scott (feed/kill modulated by MLP); WebGPU storage buffers + compute when supported, Canvas2D fallback
- DOM plants: absolute-positioned cards that sample lattice density/activity; CSS transform + content driven by field
- Tiny MLP: 4→6→2 (speech energy, token hash, tilt beta/gamma) → feed/kill bias; simple reward on card drag or speech match
- Persistence: IndexedDB seal of current seed + MLP weights
- Progressive: mouse-simulated tilt and typed seed if no speech/orientation

## Expected outcome
Speak or type a word → lattice blooms around the token energy; plant cards emerge, drift, and grow with the field. Drag a plant to inject energy and reshape the garden. Tilt device (or mouse) steers the MLP bias. Reload restores last sealed garden. Interactive, offline-capable, hybrid spatial UI.

## Mechanics
See index.html. Speech or keypress seeds the lattice; animation loop steps NCA and repositions plants; drag handlers write pulses; Seal button persists.

## Failure modes
No WebGPU → Canvas2D path (still interactive). No SpeechRecognition → typed input + mouse. No IndexedDB → session only. High grid or many plants can drop FPS (capped).

## Builds on
Nothing recent; branches away from F562–F574 physics kernels, genome arenas, spectral memory, and pure orientation controllers.

## Next building block
True WebGPU multi-channel NCA with learned kernels; phoneme-level features; multi-tab BroadcastChannel garden sharing.
