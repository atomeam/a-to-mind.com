# F701 Orientation MLP DOM Mosaic Sealed Swarm

## Concept
A living mosaic of absolute-positioned DOM tiles that are the agents themselves. Each tile hosts a tiny pure-JS MLP whose causal inputs are DeviceOrientation (beta/gamma) plus local neighbor density residual. MLP outputs continuous velocity bias and hue/scale modulation. Agents compete by user attention (click/hover rewards) and proximity; higher-fitness tiles seal and transfer a mutated fragment of their weights to adjacent lower-fitness tiles. Best genomes persist in IndexedDB and can migrate via BroadcastChannel. Fully offline single-file prototype. No canvas, no WebGPU continuum, no particle lattice.

This deliberately leaves the dominant recent cluster of WebGPU continuum/field kernels (Poisson, wave-equation, sandpile, LBM, raymarch SDF, DEM, boids, semantic forces) + local MLP/RNN controllers + DOM portals. Core novel combination is pure hybrid physical UI embodiment (DOM mosaic tiles as sole agents and visual substrate) under residual-causal local MLPs with adjacency-gated sealed genome transfer. Not a field kernel, not particle physics, not residual predictor on a continuum, not softbody springs, not attention lattices.

## Architecture
- Single index.html, self-contained, offline after load.
- 6x6 grid of absolute DOM tiles, each with independent 5-8-3 MLP (oriX, oriY, densResidual, timePhase, selfX → vx, vy, hue).
- Pointer residual optional for density.
- Fitness: click rewards + hover time + stability.
- On adjacency + higher fitness: transfer 25% weights with mutation.
- IndexedDB key `verse-f701`; BroadcastChannel `f701-genome`.
- Seal button persists best. Click tile to reward. Drag temporarily.

## Mechanics
1. Initialize random MLP weights per tile.
2. Loop: sample orientation → compute local density residual → MLP forward → update position/style.
3. User click/hover boosts fitness, may trigger transfer.
4. Seal: serialize all genomes + positions to IndexedDB.
5. Restore on load.

## Failure modes
- Orientation denied/unsupported: pointer residual only, still interactive.
- IndexedDB blocked/private: session memory only.
- High tile count: kept to 36 for performance.

Void is now Verse everywhere.

**Files**: drafts/F701-orientation-mlp-dom-mosaic-sealed-swarm/SPEC.md, drafts/F701-orientation-mlp-dom-mosaic-sealed-swarm/index.html
