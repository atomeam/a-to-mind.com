# Frontier Engine F548: WebGPU Semantic Embedding Swarm Mind

**Slug**: `webgpu-semantic-embedding-swarm-mind`  
**Date**: 2026-11-04  
**Branch from**: Recent orientation-MLP boid DOM (F547), self-vision particles (F546), DeviceMotion-Hopfield SVG (F545). Explicitly leaves Reynolds boids, continuous field kernels (SDF/SPH/waves/attention), associative memories, residual oracles, pure NCA, and sensor-driven policies on implicit surfaces.

## Concept
A WebGPU-accelerated particle swarm in which every particle carries a low-dimensional embedding vector. Forces are computed from cosine similarity under a small evolved kernel matrix (local Web Worker genetic algorithm). Emerging high-similarity clusters act as semantic attractors that physically pull labeled DOM cards toward them. Pointer motion injects new particles whose embeddings are derived from a simple velocity hash. The evolved kernel is sealable to IndexedDB. Fully offline single-file prototype.

## Novelty
Leaves the dominant recent clusters of boid rule weights under MLP control and continuous physics kernels coupled to evolutionary policies. Core novel combination is GPU particle forces driven by evolved embedding similarity (not cohesion/separation/alignment or field diffusion), with living DOM cards as semantic participants attracted to cluster centroids. Not substrate simulations, not associative pattern recall, not residual walks, not pointer-history force fields of prior F- drafts.

## Architecture
- Single index.html, offline after load.
- WebGPU compute path for particle update (fallback Canvas2D/JS integration if no WebGPU).
- 200–400 particles, each with 4-dim embedding (random init, pointer-injected via simple hash).
- Kernel: 4×4 matrix evolved by Worker GA (population 16, fitness = cluster count × mean intra-cluster similarity + pointer engagement).
- 6–8 absolute DOM cards with fixed seed labels; each frame sample nearest cluster centroid and lerp card position.
- Pointer: inject particle at location with embedding from velocity hash; temporary attractor bias.
- IndexedDB `f548-embed-kernel`; Seal button stores matrix + fitness.
- Visual: canvas for particles colored by dominant embedding component; cards morph opacity by cluster strength.

## Expected outcome
Runnable prototype in which particles form visible semantic clusters under the evolved similarity kernel; labeled cards migrate toward matching clusters; injecting via pointer creates new clusters that cards respond to; Seal restores the learned kernel across reloads. Works with or without WebGPU.

## Mechanics
1. Initialize random embeddings and kernel (or load from IndexedDB); spawn particles and cards.
2. Each frame: GPU/JS compute similarity forces using current kernel → integrate positions → identify clusters (simple grid binning) → attract cards to centroids → render.
3. Pointer move injects particle; GA step every ~2 s in Worker.
4. Seal button: serialize kernel + hash to IndexedDB.
5. On load: restore if present.

## Failure modes
- No WebGPU: automatic Canvas2D fallback remains fully interactive.
- Extreme forces: clamp velocities and kernel values to [-1,1].
- Cards escape viewport: soft bounds or wrap.
- IndexedDB quota / unavailable: session-only memory.
- Too many particles on low-end: reduce count.

## Files
- drafts/F548-webgpu-semantic-embedding-swarm-mind/SPEC.md
- drafts/F548-webgpu-semantic-embedding-swarm-mind/index.html

## V01D landing
Semantic embedding swarm stage under void-live-deploy/skills/webgpu-semantic-swarm.js; test asserts pointer injection → new cluster forms and at least one DOM card translates toward it within 2 s.
