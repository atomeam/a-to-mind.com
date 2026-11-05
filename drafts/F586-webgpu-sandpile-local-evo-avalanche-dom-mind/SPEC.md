# F586-webgpu-sandpile-local-evo-avalanche-dom-mind

**Slug**: `webgpu-sandpile-local-evo-avalanche-dom-mind`  
**Ledger ID**: F-586 (frontier series)  
**Date**: 2026-11-05

## Concept
A discrete Bak-Tang-Wiesenfeld sandpile model (self-organized criticality) runs on a spatial lattice. Grains are injected at causal sites driven by pointer and DeviceMotion. When a cell exceeds a threshold it topples, redistributing grains and triggering avalanches. A local evolutionary agent (simple GA in a Worker or main-thread) evolves injection bias, topple threshold, and directional preference under a fitness that rewards avalanche diversity and responsiveness. Avalanche events spawn or morph living DOM “cascade cards” whose position, scale, hue, and opacity are driven by local avalanche magnitude and residual height. Dragging a card stabilizes a region or injects extra grains. Full state (grid snapshot hash, evolved parameters, card poses) seals to IndexedDB for offline restore. Canvas2D implementation with WebGPU compute path as the natural next building block. Fully self-contained, offline after first load.

## Novelty
Leaves the dominant recent cluster of WebGPU LBM/NCA/spectral/SDF/Vicsek/attention/pheromone/forcegraph/voice-morph minds (F580–F585), lattice-gas obstacle fluids, Ising domains, Physarum trails, amplitude-collapse, and residual predictors. Core novel combination is a previously unused sandpile SOC kernel (discrete toppling avalanches, not continuous fluid, not cellular automata growth, not particle flocking, not spin systems) driven by a local evolutionary agent whose causal inputs are pointer + DeviceMotion, with avalanche events physically embodying and morphing interactive DOM cascade cards. Not force-directed graphs, not softbody springs, not WebXR hand/gaze, not multi-tab genome transfer as primary mechanism.

## Architecture
- Single `index.html`.
- Sandpile: 80×50 integer grid; inject at pointer or motion-biased sites; topple when height ≥ threshold (evolved, default 4); redistribute 1 grain to 4 neighbors (or directional bias).
- Local evo agent: population of 8 parameter sets {threshold, injectRate, biasX, biasY}; fitness = avalanche size entropy + spatial coverage; hill-climb or tournament every few seconds.
- DOM cascade cards: 6 absolute-positioned elements spawned/updated on large avalanches; CSS transforms driven by local residual and magnitude.
- Pointer drag injects grains or pins a card; DeviceMotion (if available) tilts injection bias.
- IndexedDB seal of best genome + grid hash + card states.
- Canvas2D rendering of height field (color map) + optional particle overlay for falling grains.
- WebGPU compute noted for larger grids / faster toppling.

## Expected outcome
Interactive living sandpile. Pointer and device motion cause cascades that spawn morphing DOM cards representing thought avalanches. Evolved parameters adapt to keep the system critical. Seal restores a previous critical mind. Chrome (background hue, glow) reacts to global avalanche energy. Runnable offline in any modern browser.

## Mechanics
1. Initialize grid to near-critical random heights.
2. Each frame: inject grains at causal locations, perform parallel topple passes, detect avalanches, update DOM cards, evolve parameters occasionally, render.
3. Drag card → stabilize local region or add grains.
4. Seal button or auto on low residual → IndexedDB.
5. BroadcastChannel optional for multi-tab observation (not primary).

## Files
- drafts/F586-webgpu-sandpile-local-evo-avalanche-dom-mind/SPEC.md
- drafts/F586-webgpu-sandpile-local-evo-avalanche-dom-mind/index.html

## V01D landing
Spatial SOC skill under void-live-deploy/skills/; testable via injection→avalanche size distribution, drag→card morph, seal→restore fidelity.

Void is now Verse everywhere.
