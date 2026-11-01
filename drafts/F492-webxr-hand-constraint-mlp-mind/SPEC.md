# F492-webxr-hand-constraint-mlp-mind

**Ledger ID**: F-492  
**Slug**: webxr-hand-constraint-mlp-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of orientation/reservoir RNN DOM physical auctions (F486/F488), attention-cluster DOM (F487), mic-spectral reservoir CSS3D (F489), causal Bayesian lattice (F490), persistent BroadcastChannel sealed-genome DOM swarm (F491). Explicitly leaves lattice/attention/spectral/orientation/DOM-auction/genome-swarm axes.

## Concept
True WebXR hand-tracking (immersive-ar preferred; pointer/mouse fallback) injects multi-joint forces into a local mass-spring constraint network of particles. Each particle hosts a tiny local MLP that modulates its rest-length and stiffness from recent hand-proximity history. Particles form a living Verse cloth/mesh whose topology and physical parameters adapt. A sustained pinch (or double-click) seals the full configuration (positions + MLP weights) as a SHA-256 fold memory to IndexedDB; sealed folds can be restored or transferred to a secondary “shadow” cloth. Fully self-contained, offline after first load.

## Why novel
- Not a pure lattice, NCA, spectral residual, pointer-history field, softbody DOM, orientation RNN, k-means particles, attention cluster, Bayesian lattice, or BroadcastChannel genome auction.
- Core novel combination is WebXR hand joints as causal force injectors into a constraint-based mass-spring solver whose rest parameters are controlled by per-particle local MLPs, with sealed fold-memory transfer.
- Under-explored axis: true hand-driven novel physics (constraint network) + local tiny models controlling physical constants.

## Prototype
Single self-contained `index.html`. Interactive offline. Enter XR for hand control or use pointer. Particles and springs respond; MLPs tint and stiffen under prolonged hand contact. Seal/restore fold memories.

## Failure modes
- No WebXR or hand-tracking support (pointer fallback always works).
- XR permission denied or no AR hardware.
- IndexedDB private mode or quota silently fails seal.
- Too many particles/constraints on low-end devices (capped at ~50).
- Constraint solver is simple Jacobi; can explode if dt large (fixed timestep used).

## Building blocks for next
WebXR hand → force injection into constraint solvers; per-particle MLP controlling physical parameters; sealed fold memories of hybrid physics+model state.

## V01D landing
skills/mini/webxr-hand-constraint-mlp-mind; testable via hand-proximity → stiffness change, pinch → seal hash, restore → prior config.
