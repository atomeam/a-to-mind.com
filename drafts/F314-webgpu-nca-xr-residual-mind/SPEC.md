# F-314 WebGPU NCA XR Residual Mind

**Ledger ID:** F-314 (frontier series)

## Concept
Novel combination of WebGPU-targeted Neural Cellular Automata (NCA) substrate whose local reaction is parameterized by a small evolved MLP (weights adapted by local Web Worker genetic algorithm). Residual error of a causal linear predictor of pointer/orientation velocity injects energy and modulates diffusion rates. Field energy and residual drive CSS chrome morph (hue, saturation, background). Floating DOM probes spawn at interaction sites, can be dragged to seed energy, and embody local deposits. Optional WebXR path noted for spatial projection of the grid texture. Seal persists best MLP weights + metrics to IndexedDB.

Not a superficial variation of F-313 (simple bias hill-climb NCA without residual predictor or MLP reaction kernel), F-312 (attention-wave sonifier), F-043/F-049 (velocity residual on RD or swarm without NCA/MLP), or prior agent/attention minds.

## Architecture
- Single self-contained `index.html`
- Canvas2D progressive fallback for the 128×128 float grid NCA step and upsample render (WebGPU compute path documented for future)
- Blob Web Worker maintains population of 8 MLP weight vectors, evaluates fitness on energy/residual/diversity, returns best ~1–2 Hz
- Pointer history → residual; residual + energy → field injection and CSS morph
- DOM probes as spatial participants
- IndexedDB seal of genome

## Expected outcome
Interactive spatial NCA field that grows under gesture and residual prediction error, warps page chrome, and offers draggable probes as embodied feedback. Sealed genomes form local memory of successful reaction kernels. Runnable offline with graceful fallbacks.

## Mechanics
- 128×128 grid, neighbor diffusion + MLP reaction (bias, neigh, self, energy-scale)
- Residual from pointer velocity delta vs predicted
- Probes spawn on interaction, drag injects
- Fitness rewards moderate energy + low residual
- Seal stores weights + stats

## Failure modes
- No Worker (CSP) → static weights
- No IndexedDB → status only
- Low-end: drop resolution or frame rate
- Orientation requires permission / HTTPS

## Building blocks
True WebGPU compute NCA with MLP kernel in shader, WebXR plane/volume projection of grid texture with controller residual, multi-layer residual state, sealed pattern replay as seed texture, spatial audio from field bands.

## Lands in V01D
As spatial NCA residual skill (`skills/mini/nca-residual-mind.js`); testable via residual→energy injection and seal of MLP weights.
