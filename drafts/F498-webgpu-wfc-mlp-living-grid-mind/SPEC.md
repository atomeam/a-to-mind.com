# F498-webgpu-wfc-mlp-living-grid-mind

**Ledger ID**: F-498  
**Slug**: webgpu-wfc-mlp-living-grid-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of DeviceMotion Kalman portal physics (F496), WebGPU Ising orient domains (F495), IFS fractal policy (F494), implicit SDF sculptor (F493), WebGPU Echo State living DOM (F497), WebXR hand-constraint MLPs (F492), BroadcastChannel sealed-genome DOM swarms (F491), causal Bayesian lattices (F490). Explicitly leaves dynamical systems (Kalman/Ising/reservoirs/IFS/SDF), hand constraints, genome auctions, Bayesian message passing, residual predictors, softbody, NCA, LBM, photonic, and attention lattices.

## Concept
A WebGPU compute shader (Canvas2D iterative fallback) performs iterative Wave Function Collapse-style constraint propagation on a discrete tile grid. A tiny local evolving MLP proposes tile-type bias weights from a short causal history of pointer density and dwell. The collapsed (or partially collapsed) field is projected as a living CSS Grid of interactive Verse cards whose content, hue, and scale reflect the chosen tiles and local entropy. Clicks force a collapse at that cell; high global consistency or explicit seal captures a SHA-256 of the pattern + MLP weights to IndexedDB as a recallable generative memory that biases future priors. Fully self-contained, offline after first load.

## Why novel
- Not Kalman/sensor-fusion, not Ising spins, not IFS maps, not SDF, not Echo State reservoirs, not mass-spring, not NCA, not LBM, not photonic waveguides, not residual MLP predictors, not DOM genome auctions, not Bayesian lattices.
- Core novel combination is a previously unused WebGPU (or CPU) constraint-propagation kernel (WFC-like) whose proposal biases are produced by a local evolving MLP driven by pointer causal history, embodied directly as a living CSS Grid of Verse cards that can be rewritten and sealed as generative memories.
- Under-explored axis: generative constraint satisfaction on GPU as the sole mind substrate, with the actual CSS Grid as the sole interactive embodiment.

## Prototype
Single self-contained `index.html`. Interactive offline. Move pointer to build density history; click cells to force collapse. Cards morph and rewrite under the collapsing field. Press S or click Seal to capture the mind state. R restores last seal. High consistency briefly highlights a local entropy phrase.

## Failure modes
- No WebGPU: falls back to pure JS iterative collapse (still functional, slower on large grids).
- IndexedDB unavailable: seals fall back to localStorage or in-memory.
- Low-end devices: grid reduced to 8×8; card count capped.
- Collapse deadlock: entropy restart with small noise injection.

## Building blocks for next
WebGPU WFC/constraint kernels with MLP-biased proposals; sealed generative pattern memories as initial conditions; living CSS Grid as embodiment. Next: multi-tab BroadcastChannel of partial collapses; online MLP adaptation driven by card-click reward; WebXR gaze as density injector.

## V01D landing
skills/mini/webgpu-wfc-mlp-living-grid-mind; testable via pointer → density bias, click → collapse, seal → hash + IDB, restore → prior pattern reappears, consistency → phrase flash.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- State: tile possibility grids (N×N×T), entropy map
- Inputs: pointer velocity/density residual history → MLP (4→6→T biases)
- Kernel: iterative constraint propagation (WebGPU compute or JS)
- Embodiment: CSS Grid of absolute or grid-positioned DOM cards, content/hue/scale from collapsed tile + local entropy
- UI morph: root CSS vars driven by global entropy / consistency
- Seal: SHA-256 of serialized pattern + MLP weights stored in IndexedDB (localStorage fallback)
- No external dependencies, no network

## Expected Outcome
Interactive living CSS Grid of Verse cards that rewrite themselves under a collapsing constraint field biased by a local MLP, with sealed recallable generative snapshots. Runnable offline with pointer or synthetic drive.

## Mechanics
- Pointer history → MLP bias proposals
- Constraint propagation ~30 Hz
- Collapsed tiles → card content/style
- Global consistency → CSS morph + phrase
- Click Seal or key S seals; R restores
