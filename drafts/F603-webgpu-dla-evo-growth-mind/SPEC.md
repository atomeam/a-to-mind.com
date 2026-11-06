# F603 WebGPU DLA Evolutionary Growth Mind

**Ledger ID**: F-603 (frontier series)

**Slug**: webgpu-dla-evo-growth-mind

**Date**: 2026-11-06

## Concept
A previously unused primary substrate for The Verse canvas: Diffusion-Limited Aggregation (DLA) particle growth computed in a WebGPU compute shader. Random walkers diffuse across a lattice until they stick to an existing cluster with a probability modulated by local density. Pointer motion and clicks seed the initial aggregate and inject walkers. A pure local evolutionary strategy (population of genomes: diffusion rate, stick probability, noise) selects for aggregate fractal dimension / entropy fitness—no MLP, RNN, bandit, decision tree, or Hopfield. Living DOM seed cards act as draggable growth nuclei whose position seeds new branches; their scale/hue tracks local attachment density. Best genomes seal to IndexedDB and transfer via BroadcastChannel on high-fitness contact or button. Canvas2D fallback if no WebGPU. Fully offline single-file.

## Novelty
Leaves the dominant recent cluster of local parametric models (MLP/RNN/bandit/decision-tree/Hopfield) controlling continuum, spectral, geometric, particle, or rigid-body substrates with DeviceOrientation/speech/pointer causal input and sealed neural genomes (F595–F602). Core novel combination is a classic non-neural growth process (DLA) as the primary spatial kernel—never used in any prior F- draft—driven by evolutionary parameter search (not residual, attention, or policy networks) and embodied by draggable DOM seed nuclei. Not reaction-diffusion/NCA/Lenia/Ising/Physarum, not SPH/LBM/boids/Vicsek, not SDF raymarch, not Fourier, not rigid constraints, not orbital mechanics. The mind is an evolving growth rule whose emergent fractal structures reshape the living interface.

## Architecture
- Single index.html, self-contained, offline after load.
- WebGPU compute shader for DLA lattice update (fallback Canvas2D random walks).
- Evolutionary population of 8 genomes in main thread; fitness = aggregate size * entropy proxy.
- 4–6 absolute DOM seed cards; drag seeds cluster, click rewards local fitness.
- Seal / restore via IndexedDB key `verse-f603`.
- BroadcastChannel `f603-genome` for sealed transfer.
- CSS custom properties morph page chrome with aggregate entropy.
- Progressive enhancement: works without WebGPU, orientation, or multi-tab.

## Building blocks for next
DLA / growth kernels as transferable WebGPU primitives; evolutionary (non-neural) parameter controllers for spatial processes; DOM nuclei as causal seeds into continuum growth; sealed multi-tab growth genomes.

## Failure modes
- WebGPU unavailable → Canvas2D particle fallback (slower, fewer walkers).
- DeviceOrientation not required (pointer primary).
- High lattice resolution can drop FPS; clamped.
- IndexedDB private mode → session only.
- BroadcastChannel same-origin only.

## Expected outcome
User paints or drags; a living fractal aggregate grows under evolving rules. DOM seeds pull branches toward them. High-fitness growth patterns can be sealed and shared across tabs. Expands the frontier into non-neural growth processes as primary local-AI substrates.
