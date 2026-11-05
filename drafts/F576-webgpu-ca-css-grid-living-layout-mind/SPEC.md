# F576 WebGPU CA CSS Grid Living Layout Mind

**Slug**: `webgpu-ca-css-grid-living-layout-mind`  
**Date**: 2026-11-05  
**Ledger ID**: F-576

## Concept
A WebGPU compute-shader discrete cellular automaton (4-state rule table, Wireworld-inspired electron/head/tail + conductor) runs on a large grid. Macroscopic statistics (activity density, entropy, cluster centroids) are sampled each frame and used to drive the CSS Grid layout of a set of absolute/floating capability cards on the Verse canvas: grid-template-columns, gap, and per-card span/transform/scale/hue. Pointer clicks and optional DeviceOrientation inject seeds or bias the field. A local genetic algorithm in a Web Worker evolves the CA transition table for sustained entropy correlated with user engagement. Sealed rules + best grid snapshot persist to IndexedDB. Fully offline single-file prototype with Canvas2D fallback if WebGPU unavailable.

## Novelty
Leaves the recent cluster of continuous-field kernels (NCA, Lenia, SPH, lattice-gas, particle swarms, SDF, wave interference, electrostatic N-body), sensor-driven MLP/RNN/reservoir/k-NN policies, OPFS causal graphs, speech-seeded gardens, peer consensus morphs, Q-learning spatial agents, and DOM-as-obstacle or portal systems (F532–F575). Core novel combination is a previously under-used discrete multi-state CA kernel whose macroscopic observables directly control the browser’s CSS Grid layout engine (not canvas particles, not absolute positioning alone, not SVG morph), with evolutionary rule search and sealed genome transfer. Not continuous PDE, not neural weights, not spectral audio, not WebXR.

## Architecture
- Single index.html (progressive enhancement, offline after load)
- WebGPU compute pipeline for CA step (or Canvas2D fallback simulation)
- CSS Grid container holding 8–12 living cards whose styles (columns, gap, transform, background) bind to CA stats via CSS variables
- Local GA in Worker or main thread: population of rule tables, fitness = entropy + click proximity bonus
- IndexedDB store `f576-ca-grid-mind` for best rules + last grid
- Pointer click: inject high-energy seed at mapped grid cell
- Optional DeviceOrientation: bias injection direction
- Chrome: status, entropy readout, Seal / Reset / Inject buttons

## Expected outcome
Runnable prototype: the CA evolves visibly (or via stats), the grid of cards continuously reflows, scales, and recolors as a living layout; clicks seed interesting patterns; Seal persists and restores the best evolved rules across reloads. Works offline; graceful Canvas2D fallback.

## Mechanics
1. Init CA grid (random or seeded), random rule population.
2. Each frame: step CA (GPU or CPU), compute density/entropy/centroids, set CSS vars, update card transforms.
3. Click maps to grid cell and injects state.
4. Periodic or button-triggered GA generation: mutate rules, evaluate fitness, keep elites.
5. Seal: store best rule table + fitness to IndexedDB; optional BroadcastChannel for multi-tab.

## Files
drafts/F576-webgpu-ca-css-grid-living-layout-mind/SPEC.md
drafts/F576-webgpu-ca-css-grid-living-layout-mind/index.html

## V01D landing
Discrete CA-driven CSS Grid layout skill under void-live-deploy/skills/webgpu-ca-css-grid-mind.js; test asserts CA density change → CSS grid-template-columns update and IndexedDB seal/restore of rule table.

## Frontier Engine F-576
Architecture: WebGPU (or Canvas2D) discrete 4-state CA kernel + macroscopic stats → CSS Grid living cards + local GA rule evolution + IndexedDB seal.  
Expected outcome: interactive spatial layout that physically responds to an evolving cellular mind.  
Mechanics: seed injection, entropy-driven reflow, sealed genome persistence.  
Outcome: prototype delivered; ready for ledger-guard append.
