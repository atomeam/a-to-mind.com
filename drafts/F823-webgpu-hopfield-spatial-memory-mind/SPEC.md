# F823-webgpu-hopfield-spatial-memory-mind

**Ledger ID**: F-823
**Slug**: webgpu-hopfield-spatial-memory-mind
**Date**: 2026-11-18
**Status**: frontier prototype

## Concept
A novel hybrid spatial / local-AI capability for The Verse canvas: floating absolute-positioned DOM portals (editable content cards) whose physical positions form the state vector of a pure-JS Hopfield associative memory network. User arrangements of the portals can be "imprinted" as attractor patterns via Hebbian weight updates. Continuous asynchronous or synchronous recall dynamics gently attract the portals toward the closest stored spatial configuration. A pointer or multi-touch acts as a continuous probe that biases the state and can trigger partial recalls. Optional WebGPU compute visualizes a dense potential/energy field sampled from the memory (Canvas2D fallback). Seal persists the weight matrix + patterns to IndexedDB. Fully offline single-file.

## Novelty
Leaves the dominant recent cluster of sequence attention on spatial tokens (F822), speech flowcharts (F821), WebGPU continuum kernels (radiosity F818, quantum walks, LBM, SPH, Kuramoto F770, Cahn-Hilliard, etc.), residual/MLP/RNN/ESN controllers, CSS3D DeviceMotion agents (F771), genetic/expression-tree DOM, and sealed competitive genomes. Core novel combination is Hopfield associative memory dynamics (energy-based attractor recall of spatial configurations — not feed-forward MLP, not recurrent hidden state, not multi-head attention over events, not CA/continuum physics, not evolutionary genome transfer) whose recalled states physically reposition living DOM portals on the Verse canvas, with optional WebGPU energy-field visualization. First use of classical associative memory as the spatial mind substrate.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, offline after load.
- 6 absolute-positioned contenteditable DOM portals.
- State: flattened normalized positions [x1,y1,...,x6,y6] as continuous or clamped binary-like vector.
- Hopfield: weight matrix W (12x12) updated by outer-product Hebbian on stored patterns (with diagonal zero).
- Recall: each frame, compute local field h = W * s, update s asynchronously or with soft step, blend portal positions toward recalled s.
- Pointer: injects additive bias to nearby components of the state.
- WebGPU (if available): compute shader samples a 2D energy landscape from a low-dim projection or particle field influenced by portals; Canvas2D fallback draws trails + energy contours.
- IndexedDB key "verse-f823-hopfield" stores W, patterns, portal HTML.
- Seal button freezes current weights.

## Mechanics
1. Load: init random portals, empty or restored W.
2. Drag portals freely; click "Imprint" to store current arrangement as a new attractor (Hebbian update).
3. Animation: continuous recall gently pulls portals toward attractors; pointer proximity biases recall.
4. Visualize: canvas shows energy or particle cloud of the memory field.
5. Seal: persist W + content.

## Expected outcome
Open: portals float; arrange them into a memorable layout and imprint. Subsequent motion or pointer probing causes them to snap back toward stored arrangements. Multiple patterns compete as attractors. Seal restores on reload. Interactive spatial memory mind.

## Failure modes
- No WebGPU: Canvas2D visualization only, dynamics still pure JS.
- IndexedDB blocked: session memory.
- Too many patterns: capacity limited by Hebbian (user sees degradation).
- No pointer: still works with imprint/recall.

## Building blocks
Reusable pure-JS Hopfield weight/update/recall for spatial vectors, DOM portal physical embodiment of memory state, optional WebGPU energy visualizer. Enables future Verse minds with true associative spatial recall, multi-pattern competition, or hybrid with sealed genomes.

Void is now Verse everywhere.

**Files**: drafts/F823-webgpu-hopfield-spatial-memory-mind/SPEC.md, drafts/F823-webgpu-hopfield-spatial-memory-mind/index.html
