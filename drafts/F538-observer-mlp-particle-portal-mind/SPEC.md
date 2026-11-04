# F538 Observer-Driven Local MLP Particle Portal Mind

## Concept
Novel combination for The Verse canvas: IntersectionObserver + ResizeObserver supply causal spatial metrics (visibility ratios, intersection rects, content-box sizes) of a population of absolute-positioned DOM Verse portals. A pure-JS tiny MLP (4→6→3) reads a short history of those metrics plus pointer velocity and outputs per-portal attraction strength, particle emission rate, and hue bias. A Canvas2D particle system (progressive WebGPU note) is driven by the MLP outputs; particles deposit an attention density that feeds back to morph the portals (scale, opacity, border, content text). Dragging a portal or clicking it provides a sparse reward that updates MLP weights online. Seal hashes weights + observed layout into IndexedDB; BroadcastChannel shares the sealed genome across tabs for adoption if fitness higher. Fully offline after load.

## Novelty
Leaves the dominant recent cluster of sensor-driven (DeviceOrientation / DeviceMotion / microphone / WebXR hand/gaze) local models (MLP / RNN / reservoir / decision-tree) controlling continuous or discrete lattice kernels (Lenia, Ising, SIR, lattice-gas, sandpile, quantum-walk, electrostatic N-body, attention-particle, Gray-Scott, NCA) with DOM probes as passive samplers or obstacles (F520–F537). Core novel pieces: browser Observer APIs as primary causal input (previously unused as model features), local MLP that treats DOM layout visibility as the environment, particle field that is both visualization and feedback medium, and sealed multi-tab genome transfer. Not orientation tilt, not mic spectral, not WebGPU continuous PDE, not physical collision obstacles, not quantum or Ising spins.

## Architecture
- Single index.html (no external deps, progressive enhancement)
- 6–8 absolute DOM portals (div.verse-portal) with IntersectionObserver + ResizeObserver
- Tiny MLP: inputs = [avgVisibility, avgAreaNorm, pointerVx, pointerVy]; hidden 6; outputs = [attract, emit, hue]
- Canvas2D particles (200–400) attracted to high-output portals, emit from them
- Online weight update on click reward (simple Hebbian / REINFORCE-like)
- IndexedDB store `f538-observer-mlp`
- BroadcastChannel `f538-genome`

## Expected outcome
User moves pointer and scrolls / resizes so portals enter/leave view; MLP adapts emission and attraction; particles form trails toward visible portals; portals grow/hue-shift with deposited attention; click rewards reinforce the current mapping; Seal persists and other tabs can adopt. Runnable offline in any modern browser. WebGPU compute path can replace Canvas2D later for denser fields.

## Mechanics
- Observers fire on layout changes → feature vector → MLP forward → particle forces + portal CSS morph
- Pointer events update velocity history
- Click on portal: reward = 1.0, local weight nudge
- Seal button: SHA-256 of weights + fitness → store + postMessage
- Restore on load if present

## Files
drafts/F538-observer-mlp-particle-portal-mind/SPEC.md
drafts/F538-observer-mlp-particle-portal-mind/index.html

## V01D landing
Spatial observer-aware portal skill (`skills/mini/observer-mlp-portals.js`); testable via visibility→emission mapping and sealed genome restore.
