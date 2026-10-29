# F317 — WebXR Hand Reaction-Diffusion DOM Field

**Ledger ID**: F-317 (frontier series)

## Concept
A persistent spatial reaction-diffusion (Gray-Scott) field visualized on canvas. True WebXR hand tracking (or pointer/DeviceOrientation fallback) acts as multi-point catalyst injectors that seed feed/kill perturbations. High-concentration peaks dynamically spawn and position floating hybrid DOM "cells" that fission or merge based on local density. Parameter sets (feed, kill, diffusion rates) can be sealed to IndexedDB with a short hash and transferred via clipboard or simple WebRTC datachannel for multi-tab/peer competition of growth patterns. Fully offline single-file.

## Novel combination / Branching
Deliberately leaves the recent dominant cluster of local neural models (MLP/RNN genomes driving swarms, orbs, or sculptors), spectral evolutionary oscillator fields, attention-wave sonifiers, pure NCA spatial memory, WebGPU multi-MLP compute kernels, and sealed neural genome arenas (F309–F316).

Moves onto:
- **True WebXR hand tracking** as primary multi-point causal injectors into an emergent chemistry substrate
- **Non-neural reaction-diffusion** (Gray-Scott) as the core spatial field (not particles, NCA cells, spectral oscillators, or neural force drivers)
- Hybrid DOM+canvas embodiment: RD canvas + absolute DOM cells that physically track and respond to concentration peaks
- Persistent IndexedDB field snapshots + sealed rate parameters
- Optional WebRTC sealed parameter transfer for multi-peer growth competition
- DeviceOrientation as global flow bias only

Not a variation of F316 (hand sealed neural genomes), F315 (spectral evo), F314 (multi-MLP swarm), F311 (orientation MLP), F309 (gaze RNN), or prior NCA/particle drafts.

## Architecture
- Single `index.html`.
- Gray-Scott RD on 64×64 grid, CPU Euler (Canvas2D render); inject catalyst at hand/pointer projections.
- Up to 8 floating DOM cells spawned at local maxima; positions lerp toward peaks; fission when concentration exceeds threshold.
- Seal: SHA-256 prefix of {feed, kill, Du, Dv} → IndexedDB; export JSON.
- WebRTC: copy-paste signaling for datachannel sealed param inject (replaces local rates or spawns competing overlay).
- WebXR: immersive-vr + hand-tracking; project index-finger tips; pointer/orient fallback.
- Fully offline; graceful degradation.

## Expected outcome
Field develops characteristic RD patterns (spots, stripes, waves) steered by hand catalysts. DOM cells track and multiply around active regions. User can seal best parameter sets and transfer them. Runnable offline; WebXR preferred when available.

## Failure modes
- No WebXR / no hand-tracking → pointer + orientation still fully interactive.
- IndexedDB blocked → in-memory seals + clipboard.
- Orientation permission denied → pointer-only inject.
- Low performance → reduce grid to 48×48 or cell count.

## Building blocks for next
WebXR hand multi-point injection into non-neural emergent spatial substrate + hybrid DOM cell fission + sealed parameter round-trip. Next: GPU-accelerated RD via WebGPU compute, full hand mesh visualization, multi-user WebRTC shared live field state.

## V01D landing
Skill under `void-live-deploy/skills/mini/webxr-hand-rd-dom-field/`; testable by hand/pointer seeding visible pattern growth, cell spawn/fission on peaks, seal/load param identity, JSON/WebRTC inject altering field behavior.
