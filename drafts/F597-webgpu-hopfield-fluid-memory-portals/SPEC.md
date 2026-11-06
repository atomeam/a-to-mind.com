# F597 WebGPU Hopfield Fluid Memory Portals

**Ledger ID**: F-597 (frontier series)

**Slug**: webgpu-hopfield-fluid-memory-portals

**Date**: 2026-11-05

## Concept
A continuous fluid substrate (Canvas2D particle approximation of Navier-Stokes forcing; WebGPU LBM compute path noted) whose local velocity forcing is driven by a local Hopfield associative memory network running in a Web Worker. Pointer trajectories deposit binary pattern fragments into a coarse spatial memory grid. The Hopfield network stores high-energy patterns as attractors and, on partial match, recalls and injects the full pattern as fluid sources, generating living memory vortices. Floating editable DOM portals (cards) are soft-attracted to high-vorticity / high-recall regions; their scale, hue, and opacity are modulated by local memory activation strength. Page chrome (background gradient, border pulse) morphs with recall entropy and fluid energy. Weights and patterns seal to IndexedDB. Progressive enhancement: WebGPU density/velocity kernel when available; flat Canvas2D fully interactive offline.

## Novelty
Leaves the dominant recent cluster of bandit SVG path generation (F596), non-neural decision-tree clip-path swarms (F595), and prior continuum/SDF/particle/fog/warp/electrostatic/NCA/MLP/orientation kernels. Core novel combination is a Hopfield associative memory as the generative controller for fluid forcing (pattern recall → source injection), with DOM portals as spatial embodiments of recalled memories that co-evolve with the fluid field. Not multi-armed bandits, not decision trees, not residual predictors, not attention lattices, not evolutionary genomes, not soft-body springs, not orientation-bin models, not neural weight updates. The mind is an energy-based associative memory whose attractors sculpt the living fluid and the surrounding UI.

## Architecture
- Single index.html, fully self-contained, offline after load.
- Canvas2D full-screen particle field (~400 particles) with simple velocity diffusion + force injection.
- Coarse 16×12 binary pattern grid written by pointer strokes.
- Blob Worker maintains a small Hopfield network (N=32 neurons, binary, Hebbian weights) that stores and recalls patterns.
- Main thread steps particles, samples vorticity/recall for portal transforms, updates CSS custom properties.
- Draw with pointer → deposit pattern; partial strokes trigger recall injection.
- Seal (S) / restore (R) via IndexedDB key `verse-f597`.
- CSS custom properties drive chrome morph from entropy + energy.

## Building blocks for next
Hopfield attractors as transferable energy-based controllers; fluid source injection from pattern recall; DOM portals as spatial memory embodiments; vorticity-driven UI morph.

## Failure modes
Worker CSP block → static field, no recall. Extreme particle values clamped. IndexedDB may fail in private mode → session only. No WebGPU (Canvas2D primary). Pointer-only interaction; DeviceOrientation optional for gravity bias. Pattern grid limited to avoid performance collapse.

## Expected outcome
A living spatial document where drawn memories are stored, recalled as fluid vortices, and embodied by portals that physically respond, expanding the frontier of energy-based local minds controlling continuum substrates and DOM geometry.
