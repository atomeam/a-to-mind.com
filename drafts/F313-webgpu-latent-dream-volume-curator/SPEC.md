# F313 WebGPU Latent Dream Volume Curator

## Concept
Continuous 3D latent density volume (WebGPU compute + raymarch when available; Canvas2D multi-slice fallback) whose evolution is driven by a local Web Worker generative latent walker (tiny recurrent state + evolutionary mutation of walk parameters under selection for density diversity and user-seed co-location). User-typed phrases become persistent memory seeds (attractor points in the volume). A curator agent samples high-density regions, maps latent coordinates to interpretive phrases via procedural embedding arithmetic, and spawns floating DOM concept cards at projected positions. Dragging a card relocates its seed and reinforces the genome. Global density variance morphs page chrome (hue, scale, filter). Optional Web Audio from latent trajectory. Seal persists walker genome + seeds to IndexedDB.

## Novelty
Not a 2D lattice/RD/particle/boid/softbody substrate. Not residual predictor of pointer/orientation. Not attention kernel or message-passing on a graph. Not evolutionary rule for fixed field params. Mind is a generative latent walker that sculpts a volumetric dream; the curator promotes volume samples into embodied, relocatable DOM interpretations that close the loop by reseeding. Combines GPU volume, local generative AI, and physical UI cards in a new closed spatial-semantic loop.

## Architecture
- Single `index.html` (self-contained, offline after load)
- Blob Web Worker for latent walker evolution (~1 Hz)
- Canvas2D rendering of volume slices or point cloud; WebGPU path stubbed for compute density field
- Hybrid DOM cards for interpretations (draggable)
- IndexedDB for sealed genome + seeds
- Progressive: falls back if no Worker, no WebGPU, no audio

## Expected outcome
Interactive spatial dream volume that evolves new structures around user seeds, interprets them as living cards the user can rearrange, warps the surrounding page, and remembers successful genomes. Runnable in any modern browser.

## Mechanics
- Volume: 32³ density grid (or 2D slices for fallback), evolved by walker offset + noise
- Walker: 8-dim latent, recurrent step, mutated genes for step size / attract / noise
- Curator: every ~1s sample peaks, generate phrase from latent hash + seed lexicon, position card
- Drag: updates seed position, boosts fitness
- Morph: variance → CSS hue-rotate / scale / blur
- Seal: SHA-256 of genome + seeds → IndexedDB

## Failure modes
- CSP blocks blob Worker → fixed walker
- No WebGPU → Canvas2D slices
- Audio requires user gesture
- Low-end: reduce volume resolution
- IndexedDB private mode → session only

## Building blocks for future
WebGPU full raymarched volume with compute kernel, WebXR immersive view of the dream, multi-seed semantic transfer, larger on-device embedding model for phrase generation.

## V01D landing
Spatial stage skill under `void-live-deploy/skills/mini/latent-dream-volume.js`; testable via seed→density peak and drag→seed relocate + seal restore.
