# F719 WebRTC Sealed Orientation-MLP DOM Swarm

**Ledger ID**: F-719 (frontier series)

**Slug**: webrtc-orientation-mlp-dom-swarm

**Date**: 2026-11-12

**Branch from**: Recent dominant cluster of WebGPU continuum/particle kernels (SDF raymarch, DEM granular, boids, semantic forces, sandpile, Gray-Scott, percolation) combined with local MLP/RNN/genome controllers and floating DOM portals (F690–F718). Explicitly leaves all WebGPU compute shaders, continuum fields, particle systems, NCA, spectral residuals, softbody meshes, residual predictors, attention lattices, and pointer-history fields.

## Concept
Pure browser-native multi-agent swarm of living DOM cards. Each agent is an absolute-positioned HTML element whose position, velocity, scale, and hue are driven by a tiny local feed-forward MLP. DeviceOrientation (beta/gamma tilt) provides continuous causal input to every MLP. Agents compete spatially; on overlap the higher-fitness agent seals its genome (MLP weights hashed) and transfers a mutated copy to the lower-fitness agent via BroadcastChannel (multi-tab) or optional WebRTC data channel. Best genomes persist in IndexedDB. Fully offline-capable after load, single self-contained index.html, progressive (pointer drag as orientation fallback).

This is a novel hybrid embodiment: the physical UI elements *are* the agents under local model control, with sealed genome transfer over a shared field architecture not previously combined this way. Not a canvas kernel, not residual, not WebGPU.

## Architecture
- Single index.html (CSS + JS inline).
- Population of 12–16 DOM cards.
- MLP: 4 inputs (beta, gamma, local density, time) → 6 outputs (vx, vy, scale, hue, omega, attraction).
- Simple Euler physics + collision detection for fitness and transfer.
- BroadcastChannel 'f719-genome' for sealed transfer.
- IndexedDB key `verse-f719`.
- Click to reward local agent; tilt device to drive all minds.
- Offline, no external deps.

## Novelty
Leaves the WebGPU continuum/particle + local-neural-policy cluster. Core novel combination is DeviceOrientation as causal input to feed-forward MLPs controlling pure physical DOM agents under multi-agent sealed genome transfer via BroadcastChannel/WebRTC shared field. Not substrate simulations, not neural weights on particles, not spectral residuals.