# F495-webgpu-ising-orient-domain-mind

**Ledger ID**: F-495  
**Slug**: webgpu-ising-orient-domain-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of evolutionary generative geometry (IFS fractal F494, implicit SDF sculptor F493), WebXR hand-constraint MLPs (F492), BroadcastChannel sealed-genome DOM swarms (F491), causal Bayesian lattices (F490), mic-spectral reservoirs (F489). Explicitly leaves generative IFS/SDF/fractal attractors, hand constraints, genome auctions, Bayesian message passing, reservoirs/RNNs, spectral audio, attention swarms, softbody, NCA, LBM, and photonic axes.

## Concept
A 2D Ising spin lattice (classic ferromagnetic model) evolves under a WebGPU compute shader (Canvas2D Metropolis fallback). DeviceOrientation provides a continuous external magnetic field vector (tilt magnitude + direction as H). Pointer dwell injects local temperature or field bias. Domains of aligned spins emerge; local magnetization and energy statistics drive the positions, rotations, and scales of floating DOM Verse portals that physically embody the ordered regions. A seal gesture stores a SHA-256 of the full spin configuration as a magnetic domain memory in IndexedDB that can be restored to bias the lattice. Chrome morphs with global |M| and energy. Fully self-contained, offline after first load.

## Why novel
- Not IFS/fractal maps, not SDF implicit surfaces, not mass-spring constraints, not NCA, not LBM/SPH fluids, not wavelet/photonic kernels, not Bayesian lattices, not reservoirs, not attention clusters, not DOM genome auctions, not residual predictors.
- Core novel combination is DeviceOrientation as causal external field into a classic Ising spin system (previously unused kernel), with emergent domain statistics physically controlling hybrid DOM portal embodiments, and sealed spin-configuration memories.
- Under-explored axis: statistical-mechanics lattice models driven by device spatial sensors + domain-to-DOM projection + sealed magnetic memories.

## Prototype
Single self-contained `index.html`. Interactive offline. Tilt the device (or move pointer) to bias the field; spins align into domains; portals ride high-magnetization regions. Press S or click Seal to capture the current spin config. R restores last seal. Global magnetization drives subtle chrome morphing.

## Failure modes
- No DeviceOrientation: pointer-only field injection + synthetic random field.
- IndexedDB unavailable or private mode: seals fall back to localStorage or in-memory.
- Very low-end devices: lattice capped at 48×48; update rate reduced; WebGPU path skipped.
- WebGPU unavailable or compute shader fail: pure Canvas2D Metropolis.
- Orientation permission denied: graceful fallback.

## Building blocks for next
Ising/Potts spin lattices in WebGPU compute; DeviceOrientation as continuous external field; domain statistics driving living DOM portals; sealed spin-configuration memories. Next: true WebXR gaze as field injector; multi-tab BroadcastChannel of sealed domains; temperature annealing schedule controlled by a tiny local model.

## V01D landing
skills/mini/webgpu-ising-orient-domain-mind; testable via orientation → domain formation + portal morph, seal → hash + IDB, restore → prior spin pattern reappears, chrome radius changes with |M|.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Lattice: 64×64 spins (+1/-1); Metropolis single-spin flips or parallel checkerboard
- Field: DeviceOrientation (beta/gamma → H vector); pointer adds local H or lowers T
- Domains: sampled local magnetization windows → 4–6 DOM portals
- Embodiment: portal CSS transform/position/hue from local M and energy
- UI morph: CSS custom properties on root driven by global |M| / energy
- Seal: SHA-256 of spin buffer stored in IndexedDB (localStorage fallback); restore writes spins
- WebGPU compute path when available; Canvas2D fallback always works
- No external dependencies, no network

## Expected Outcome
Interactive living Ising lattice that forms magnetic domains under device tilt or pointer, offers sealed recallable spin memories, and subtly warps surrounding canvas chrome and floating portals. Runnable offline with orientation, pointer, or synthetic drive.

## Mechanics
- Orientation events → continuous H field
- Pointer history → local bias
- Spin update ~20–40 Hz
- Domain sampling → portal positions
- Global |M| → CSS border-radius / panel opacity
- Click Seal or key S seals; R restores
