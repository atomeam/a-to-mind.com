# F678 — WebGPU Percolation Causal MLP Genome Mind

**Ledger ID**: F-678  
**Slug**: webgpu-percolation-causal-mlp-genome-mind  
**Date**: 2026-11-11  
**Branch from**: Recent cluster of sensor-driven continuum physics (Gray-Scott causal MLP portals F677, LBM orientation fluid notes F676, pointer noise mind F675), spatial packing/bin-packer (F673/F671), orientation note sorter (F672), WebXR hand Verlet (F671), barcode inventory (F670), and competitive local summarizer genome (F674). Explicitly leaves residual predictors, pure NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles.

## Concept
A novel hybrid spatial interface for The Verse canvas: a population of competitive local tiny MLPs (3-input, 4-hidden, 2-output) take causal inputs from DeviceOrientation (tilt) and pointer position to modulate local growth probabilities and seed strengths on a 2D percolation lattice. The lattice is stepped each frame (sites become occupied if neighbor occupied and random < p_local from nearest MLP). Clusters are detected approximately; living DOM portals (absolute cards) are attracted to the largest clusters and can be dragged to inject new seeds. User rates a preferred agent configuration, sealing its genome (weights) which is persisted in IndexedDB and transferred live via BroadcastChannel to other open tabs. Visualization is Canvas2D (WebGPU compute path stubbed for future; pure JS always interactive).

## Novelty
Branches away from continuum reaction-diffusion / lattice-Boltzmann / noise fields and pure spatial packing or text-extraction tournaments. Core novel combination is DeviceOrientation/pointer causal → evolving local MLPs → continuous modulation of a discrete percolation/cluster-growth kernel (previously unused), whose emergent clusters physically drive and are seeded by living DOM portals, with rating-gated sealed genome transfer over IndexedDB + BroadcastChannel. Not Gray-Scott, not LBM fluid, not noise continuum, not bin-packing, not summarizer.

## Architecture
Single self-contained `index.html` (offline after load).
- Canvas for percolation visualization (occupied cells colored by agent influence or density).
- Tiny MLPs: inputs [tiltX, tiltY, pointerNorm, localDens] → [pGrowth, seedBias].
- 4 competing agents; user clicks “Prefer this” to seal.
- DOM portals: 6–8 absolute cards that sample cluster activity and drift toward high-density regions; drag injects seeds.
- DeviceOrientationEvent (fallback pointer) for causal tilt.
- IndexedDB persists best genome + last seed hash; BroadcastChannel for live transfer.
- Controls: seed random, seal, reset field, request orientation, export JSON.

## Expected outcome
Open page, move pointer or tilt device, watch percolation clusters grow under MLP control, portals drift toward active clusters, drag a portal to seed a new site, seal a liked configuration, open second tab to observe genome adoption, reload restores.

## Mechanics
1. Init random or sealed MLP weights; empty or lightly seeded field.
2. Each frame: for each agent sample global tilt/pointer + local sample, forward MLP, apply local p and bias.
3. Percolation step: for each empty cell adjacent to occupied, occupy with probability from influencing MLP.
4. Approximate cluster size via flood or density; position portals toward peaks.
5. Drag injects occupied cells.
6. Seal hashes/serializes weights, stores, posts to channel.
7. Export current genomes + field stats.

## Failure modes
- No DeviceOrientation: pointer-only causal input remains fully interactive.
- IndexedDB blocked/private: session-only memory.
- BroadcastChannel unavailable: single-tab only.
- Large grid slow: auto-scale to 80×60 or less.
- No WebGPU: Canvas2D path is the primary implementation.

Void is now Verse everywhere.
