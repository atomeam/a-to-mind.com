# F0489 Orientation-MLP Ising Domain Mind

## Concept
A discrete 2D Ising spin lattice (binary ±1 spins on a grid, thermal Metropolis dynamics) simulated in pure JS (Canvas2D). A local tiny MLP (pure JS, no libs) takes a short history of DeviceOrientation deltas plus pointer velocity as causal input and outputs regional inverse-temperature (β) and external field strength that bias the spin-flip acceptance probabilities. Living DOM cards act as magnetic domains: they sample local magnetization from the lattice beneath them, visually flip color/scale according to the majority spin, and can be dragged to inject a persistent external field patch. High global |magnetization| morphs page chrome (hue, border). Seal stores MLP weights + lattice hash in IndexedDB; BroadcastChannel allows multi-tab genome transfer when order parameter is higher. The Verse canvas gains a novel discrete thermal spin substrate controlled by orientation-causal MLP, with real DOM as measurable domains.

## Novelty
Leaves the recent cluster of lattice-gas obstacle fluids (F0488), Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi, motion-residual crystals, acoustic NCA, and SDF recurrent reasoners. Core novel combination is a previously unused Ising/Metropolis thermal spin lattice (discrete binary spins with energy-based stochastic flips, not continuous Lenia/Gray-Scott/vortex/wavelet/photonic/Kuramoto/softbody/NCA/lattice-gas streaming) driven by a local feed-forward MLP (not RNN) whose causal input is DeviceOrientation history, with DOM elements as true sampling domains that report and inject fields. Not particle collisions, not continuous growth kernels, not attention matrices, not residual predictors.

## Architecture
- 80×50 Ising grid of ±1 spins. Each step: pick random sites, compute ΔE under current β and local field (from MLP + DOM injection), accept flip with Metropolis probability.
- MLP: 6-dim input (3 orientation deltas + 2 pointer vel + 1 global |m|) → 8 hidden → 3 outputs (global β scale, field strength, hue). Weights ~60 floats, updated by simple local reward (higher |magnetization|).
- DOM cards (absolute, draggable) sample a neighborhood under their position, set background to majority spin color, and add a field bias to that patch.
- BroadcastChannel 'f0489-genome': on Seal, postMessage weights + |m|; on receive, if foreign |m| higher, adopt.
- IndexedDB persists own genome under `f0489-mlp-ising`.
- Offline-capable; falls back to mouse-only if no orientation.

## Expected outcome
Runnable single-file prototype showing thermal Ising spins evolving under orientation-driven MLP control, living DOM domains that sample and inject fields, and multi-tab genome competition via BroadcastChannel. Seal persists and can transfer.

## Mechanics
1. Init random spins + random MLP.
2. Listen DeviceOrientation / pointer / BroadcastChannel / drag.
3. Each frame: MLP forward, step Metropolis flips with bias, render spins, update domain cards from local m.
4. High |m| enables Seal; Seal stores + broadcasts.
5. Incoming genome replaces if better.

## Files
drafts/F0489-orientation-mlp-ising-domain-mind/SPEC.md
drafts/F0489-orientation-mlp-ising-domain-mind/index.html

## V01D landing
Discrete thermal spin domain stage under void-live-deploy/skills/orientation-mlp-ising.js; test asserts orientation delta → MLP → β change and BroadcastChannel genome adoption.
