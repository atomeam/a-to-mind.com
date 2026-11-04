# F542 WebGPU Wave Interference Phase DOM Mind

## Concept
Novel combination for The Verse canvas: A spatial field of circular wave interference whose sources are absolute-positioned DOM Verse resonators (cards). Each resonator carries frequency, phase offset, and amplitude. The continuous wave field (analytical superposition or discrete update) is computed on a grid (WebGPU compute preferred, Canvas2D fallback) and sampled at each resonator’s location to drive its visual morph (hue-rotate from local phase, scale and opacity from local amplitude). The pointer acts as a transient high-amplitude source. Dragging a resonator relocates its source; clicking cycles frequency. A lightweight evolutionary step (optional Worker) mutates source parameters toward higher field entropy or interaction duration. Seal persists the source genome (frequencies, phases, positions) to IndexedDB with a simple hash. Fully offline. Falls back gracefully if WebGPU is unavailable.

## Novelty
Leaves the dominant recent clusters of SPH fluids, particle vortices with attention, lattice-gas/Ising/NCA, residual quantum walks, orientation-MLPs, WebXR tendrils, observer portals, and pure audio resonators. Combines continuous wave interference physics + DOM cards as active oscillating sources + bidirectional phase/amplitude feedback to CSS morphs + pointer as dynamic source. No prior draft uses interference superposition as the primary spatial medium coupling to DOM phase.

## Architecture
- Single `index.html` (self-contained, no external deps).
- 6–8 DOM resonators (absolute, draggable).
- Wave field: 128×72 or similar grid; either WebGPU storage buffer + compute shader for discrete wave equation, or analytical sum in JS for reliability.
- Sampling: for each card, bilinear sample of phase and amplitude → CSS `filter: hue-rotate()`, `transform: scale()`, opacity.
- Pointer: additional source with decaying amplitude.
- Evolution: simple mutation of frequencies every few seconds biased by recent interaction count or field variance.
- IndexedDB store `f542-wave-genome`.
- Seal button writes current sources + hash.

## Expected outcome
Runnable prototype in which dragging and tuning DOM resonators creates visible interference patterns on the canvas; cards morph in color and size according to the local wave phase and amplitude; pointer ripples propagate; Seal persists the configuration. Works offline; Canvas2D path always available.

## Mechanics
1. Initialize random source parameters; load from IndexedDB if present.
2. Each frame: update time, compute wave field (superposition or step), render to canvas, sample at card centers, apply CSS morphs.
3. Pointer move injects transient source.
4. Drag updates source position; click advances frequency.
5. Optional: mutate sources toward higher entropy.
6. Seal persists genome.

## Files
- drafts/F542-webgpu-wave-interference-phase-dom-mind/SPEC.md
- drafts/F542-webgpu-wave-interference-phase-dom-mind/index.html

## V01D landing
Wave interference phase stage under `void-live-deploy/skills/webgpu-wave-interference-phase.js`; test asserts source drag → field update → card hue/scale change and IndexedDB roundtrip.
