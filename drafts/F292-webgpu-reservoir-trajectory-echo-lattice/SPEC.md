# F292 — WebGPU Reservoir Trajectory Echo Lattice

## Concept
A spatial lattice field that echoes the user's recent pointer trajectory through a sealed local Echo State Network (ESN / reservoir). The reservoir of 16 units processes a short history of pointer deltas; its readout modulates diffusion rates and activation seeds across the lattice. Primary simulation on Canvas2D with an optional WebGPU compute path for the diffusion step. Hybrid embodiment: floating DOM probes track high-activation cells; dragging a probe injects a perturbation into the reservoir state. Champion readout weights persist to IndexedDB. Fully offline after load; progressive enhancement.

Deliberately branches from recent genome-foraging arenas, WebXR hand/gaze, orientation-primary MLPs, spectral self-listening agents, residual predictors, pure NCA, and fluid morphs (F283–F291). Core novelty is the reservoir as a temporal echo of spatial trajectory that sculpts a living lattice, with closed-loop probe injection into the reservoir and WebGPU diffusion readiness.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- Canvas2D: 64x64 lattice rendered as colored cells; simple diffusion + activation from reservoir.
- Reservoir: 16 nodes, sparse random weights (fixed), input from last 8 pointer deltas, linear readout (4 floats) modulating seed strength and diffusion rate.
- Trajectory buffer: circular of recent (dx,dy).
- Probes: 2 DOM cards that lerp to high-energy cells; drag + release injects noise into reservoir state.
- IndexedDB: seal/load champion readout weights + generation.
- WebGPU: compute shader prepared for lattice diffusion if available (fallback silent).
- Offline first; pointer always works.

## Expected outcome
Runnable interactive prototype. Move pointer; the lattice grows echo patterns reflecting recent path curvature and speed. Probes follow hotspots. Drag-inject perturbs the echo. Seal persists readout. Load restores. Offline-capable. Expands local reservoir temporal encoding of spatial trajectories + lattice field response + hybrid DOM closed-loop + WebGPU diffusion building blocks.

## Mechanics
1. Pointer deltas buffered.
2. Each frame, reservoir step: state = tanh(W_res * state + W_in * input).
3. Readout = W_out * state modulates seed and diffusion.
4. Lattice: seed near recent pointer, diffuse, decay.
5. Probes track max cells; drag injects into reservoir.
6. Seal stores hashed readout.

## Failure modes
- No WebGPU → Canvas2D fully functional (primary).
- No IndexedDB → in-memory only.
- Small screens → smaller lattice, larger cells.
- No pointer → slow auto-orbit still echoes.

## Cross-reference
Avoided genome contact transfer, WebXR, orientation-as-primary, pure spectral audio, residual morphs, fluid physics as core, NCA, speech. Novel: reservoir echo of trajectory into lattice field + probe-to-reservoir injection + sealed readout + WebGPU diffusion path.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/reservoir-trajectory-echo-lattice.js`; test: pointer path produces lattice echo, probe-drag perturbs reservoir, seal/load restores readout.
