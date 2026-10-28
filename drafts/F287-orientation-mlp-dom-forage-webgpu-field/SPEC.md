# F287 — Orientation MLP DOM Forage WebGPU Field

## Concept
DeviceOrientation as primary causal input biasing a shared density field (particle diffusion, WebGPU compute path prepared). Local tiny MLPs (per-agent genomes) control hybrid DOM probe cards that forage high-density regions, scoring on overlap. User-mediated sealed genome transfer occurs by dragging one DOM agent onto another: higher-score genome is partially transferred + mutated. Population persists via IndexedDB. Fully offline-capable after load; progressive WebGPU.

Deliberately branches away from the recent dominant cluster of WebGPU softbody/genome arenas, residual morphs, WebXR gaze/hand + MLP/swarm/cloth, speech-RNN portals, spectral causal fields, WebRTC shared orientation arenas, and pure residual predictors (F275–F286). Core novelty is user-initiated drag-to-merge genome transfer on orientation-driven density foraging with local MLP-controlled physical DOM embodiments.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- Canvas2D particle density field with orientation gravity bias (WebGPU compute shader stub noted for future kernel).
- 4 DOM agent cards: absolute, draggable, show seal/score; MLP (4→6→2) outputs force from local density + orient.
- Genome = weights/biases; simple hash seal.
- Merge on drop-overlap: winner transfers 70% genome to loser + mutation.
- IndexedDB: seal/load full population.
- Offline first.

## Expected outcome
Runnable interactive prototype. Enable orientation and tilt to flow density. Agents forage and score. Drag one card onto another to transfer genome (seal updates). Seal/load population. Offline-capable. Expands local-MLP physical-UI control + orientation-causal density field + user-mediated sealed genome transfer building blocks.

## Mechanics
1. Particles integrate orientation gravity + noise; density sampled by Gaussian kernels.
2. Each MLP takes (local dens, beta/90, gamma/90, bias) → force.
3. Agents integrate force + orient gravity; score += dens.
4. Drag freezes physics; on drop, if overlap, transfer genome.
5. Seal button stores genomes + seals to IDB.

## Failure modes
- Orientation permission denied or unsupported → field static, agents still forage via random/MLP.
- WebGPU unavailable → Canvas2D fully functional (primary path).
- Drag precision on small screens → larger hit area.
- IndexedDB quota → graceful fail, in-memory only.
- MLP divergence → tanh + damping keeps bounded.

## Cross-reference
Avoided residual predictors, spectral/audio, pure NCA, attention lattices, volumetric injection, pointer-history fields, softbody physics kernels, WebXR hand/gaze, speech causal, WebRTC shared. Novel combination of orientation-causal density + local MLP DOM probes + drag-merge sealed transfer.
