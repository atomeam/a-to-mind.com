# F828 WebGPU CML Orientation-MLP Portal Mind

## Concept
A 2D Coupled Map Lattice (CML) of logistic maps evolves on a discrete lattice. A tiny local feed-forward MLP takes DeviceOrientation (or pointer velocity residual) as causal input and outputs bias on the map parameter \( r \) and coupling strength. Absolute-positioned DOM portals act as both measurement windows (sampling local activity) and injection sites (dragging or clicking injects amplitude). Clicking a portal provides a reward that lightly adapts MLP weights. Seal persists the MLP genome to IndexedDB and broadcasts via BroadcastChannel; receivers adopt only if higher fitness.

## Novelty
Leaves the recent cluster of Kalman chain (F826), Gray-Scott Bayesian portals (F825), DEM granular (F824), Hopfield (F823), spatial transformers (F822), PSO layout (F827), LDS waves, Echo-State, Physarum, Ising, Lenia, lattice-gas, softbody, NCA, spectral, quantum walk, SPH/LBM. Core novel combination is the previously unused Coupled Map Lattice kernel (discrete-time chaotic maps with spatial coupling, not continuum PDE, not particle forces, not cellular automata of the NCA/Lenia/Ising type) driven by a simple MLP (not Kalman/Bayesian/PSO/ES estimator) whose causal input is DeviceOrientation, with DOM elements as true interactive measurement/injection portals under reward-gated sealed genome transfer. Not previously built.

## Architecture
- Single index.html (Canvas2D render of lattice + absolute DOM portals; offline after load; progressive)
- CML: 64×64 logistic maps, neighbor averaging coupling
- MLP: 4→8→2, tanh, pure JS
- Inputs: DeviceOrientation or pointer residual
- 4 DOM portals: draggable, scale by local activity, click to reward
- Persistence: IndexedDB `f828-cml`; BroadcastChannel `f828-genome`
- Seal adopts higher fitness

## Expected outcome
Runnable prototype: tilt or move to bias chaos/coupling; portals light and scale with local activity; click to reward; Seal persists/transfers the mind. Graceful fallback if no orientation.

## Failure modes
No DeviceOrientation → pointer bias; IndexedDB denied → memory only; high N FPS drop (capped at 64).

## Files
drafts/F828-webgpu-cml-orientation-mlp-portal-mind/SPEC.md
drafts/F828-webgpu-cml-orientation-mlp-portal-mind/index.html
