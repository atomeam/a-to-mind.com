# Frontier Engine F554: Competitive MLP Portal Agents with Collision-Sealed Genome Transfer

**Slug**: `competitive-mlp-portal-agents-genome`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of self-vision particles (F546), orientation-MLP boids (F547), semantic embedding swarms (F548), broadcast RNNs (F549), WebXR gaze predictive (F550), orientation evo DOM physics (F551), WebXR hand volumetric NCA (F552), OPFS causal graph spatial audio (F553). Explicitly leaves sensor-driven neural particle/DOM/NCA/graph systems, WebGPU kernels, boid flocking, self-vision retinas, volumetric sculpting, and OPFS stores.

## Concept
A population of independent floating DOM portals, each embodying its own tiny pure-JS MLP. Each MLP receives local spatial inputs (relative pointer vector, DeviceOrientation if granted, own velocity) and outputs continuous control (velocity, scale, hue). Agents move freely; on pairwise collision the higher-fitness agent seals a mutated copy of its genome into the lower-fitness agent. Fitness accumulates from sustained proximity to the live pointer. All genomes persist via IndexedDB; the current best is broadcast over BroadcastChannel for multi-tab sharing. A lightweight Canvas2D background visualizes a soft density field sampled from agent positions. Fully offline after load, single self-contained file. No WebGPU, no NCA, no flocking rules, no external audio/camera.

## Novelty
Leaves the dominant recent clusters of shared-model or flocking agents, continuous physics kernels, self-referential vision, WebXR hand/gaze sculpting, and OPFS-backed graphs. Core novel combination is per-agent local MLPs in hybrid DOM embodiment under multi-agent competition where genome transfer is strictly collision-gated and sealed (hash-attested mutation), with DeviceOrientation as optional causal input to never-before-seen independent controllers, and a shared field architecture of IndexedDB + BroadcastChannel for best-genome propagation. Not substrate simulations, not residual predictors, not attention lattices.

## Architecture
- Single `index.html`.
- 10 DOM `.agent` elements, absolute positioned, each owning a private weight vector (MLP 8→6→4).
- MLP forward pass pure JS matrix multiplies.
- Collision: distance < 48px triggers fitness-ordered genome copy + mutation + seal hash.
- IndexedDB store `f554-genomes` for all agents + best.
- BroadcastChannel `f554-best` for cross-tab best genome.
- DeviceOrientationEvent (permission on click) feeds beta/gamma into inputs.
- Canvas2D full-window density blur from agent positions.
- Seal button forces persist; pointer is the fitness attractor.

## Expected outcome
Runnable prototype in which colored portals chase the pointer under independent learned policies; collisions visibly transfer control styles (color/scale/speed changes); sealing and reloading restores genomes; opening a second tab receives the best genome via broadcast. Offline-capable.

## Mechanics
1. Initialize random genomes or load from IndexedDB.
2. On animation frame: compute inputs, forward MLP, integrate position, update fitness, check collisions, render agents + density.
3. On collision: sort by fitness, mutate and assign winner genome to loser, compute SHA-like seal.
4. Broadcast best periodically.
5. Seal persists all.
