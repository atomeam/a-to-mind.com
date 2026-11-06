# F055 WebGPU-Ready Hopfield Spatial Completion Field

## Concept
A spatial canvas where the user draws partial binary patterns that a local Hopfield associative memory completes via energy descent. The completed attractor drives a particle field and morphs floating DOM portals that act as pattern reinforcers. Weights and stored patterns seal to IndexedDB. Optional WebGPU path for parallel spin updates when available.

Novel combination of energy-based associative memory (Hopfield, not MLP/k-NN/RNN/NCA/Ising-Metropolis/Physarum) on spatial gesture grids, with residual-driven portal morphing and sealed weight matrices. Leaves the recent cluster of policy MLPs, evolutionary agents, softbody, Lenia, vortex, wavelet, orientation controllers, and trajectory embeddings. Core is attractor completion of incomplete spatial drawings that reify as living UI elements.

## Architecture
- Single self-contained `index.html` (offline-capable).
- 32×32 binary Hopfield (1024 spins, ±1). Pure JS energy and asynchronous updates; WebGPU compute noted/fallback for batch flips if `navigator.gpu` present.
- Canvas2D: draw mode (pointer paints +1), recall visualization (state + energy heat), particle overlay attracted to high-consensus regions.
- 3 floating DOM portals: show nearest-pattern Hamming distance, residual; drag to inject partial pattern seeds; click to reinforce current attractor into memory.
- Seal button: stores {weights, patterns, timestamp} to IndexedDB under `f055-hopfield`.
- Status chrome: memory count, energy, residual, Seal / Store / Recall / Clear buttons.
- Pointer primary; DeviceOrientation optional bias on temperature (cooling rate).

## Expected outcome
Runnable prototype: draw a partial shape, hit Recall to watch the Hopfield complete it into a stored attractor; portals drift toward completion sites and report novelty; Seal persists the weight matrix across reloads. Works in modern browsers offline; graceful without WebGPU or sensors.

## Mechanics
1. Init random small weights or zero; empty pattern store (max 8 patterns).
2. Draw: pointer events set spins in local window to +1, update canvas.
3. Store: Hebbian outer-product update of weights from current pattern (clipped).
4. Recall: asynchronous random-order spin flips that lower energy until stable or 500 steps; temperature anneals.
5. Portals: positioned by centroid of active spins; text from residual = 1 - max overlap.
6. Morph: CSS vars `--completion-hue`, `--residual-scale` from energy drop and residual.
7. Seal/Load: IndexedDB get/put of weights + patterns.

## Failure modes
- No IndexedDB → no seal (in-memory only).
- Low-end device → reduce grid to 16×16 or fewer updates.
- WebGPU unavailable → pure JS path (default).
- No pointer → static demo pattern.

## V01D landing
Skill under `void-live-deploy/skills/mini/hopfield-spatial-completion.js`. Test: partial grid → energy descent → completed pattern changes portal positions; residual → CSS var; seal/load restores weights.

## Building blocks for next
Hopfield weight matrices on spatial grids, energy-descent visualization, attractor-bound DOM portals. Next: WebGPU parallel Glauber dynamics, multi-layer or modern Hopfield, WebXR hand-drawn patterns.

## Files
drafts/F055-webgpu-hopfield-spatial-completion/SPEC.md
drafts/F055-webgpu-hopfield-spatial-completion/index.html
