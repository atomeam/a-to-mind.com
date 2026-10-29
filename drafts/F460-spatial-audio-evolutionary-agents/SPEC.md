# F460 — Spatial Audio Evolutionary Agents

## Concept
Novel combination: Canvas2D multi-agent spatial field with per-agent Web Audio oscillators spatialized via HRTF PannerNodes (position mapped from canvas coordinates). Local genomes (frequency, detune, gain, hue) undergo proximity-based sealed transfer from higher-fitness (low kinetic energy) agents to lower-fitness neighbors. DeviceOrientation supplies continuous tilt gravity; pointer injects attractors and resumes audio context. Floating DOM probe cards sample regional agent density and mean frequency, morphing content live. Sealed gene subsets persist to IndexedDB. Offline-capable single file. Progressive WebGPU compute noted for denser spatial hash.

Branches away from recent dominant cluster (WebGPU SPH/MLP agents, spectral closed-loop feedback swarms, granular BroadcastChannel genome transfer, WebXR hand PBD constraints, L-systems, expression trees, orient-MLP canvas, Hebbian theft, semantic points, NCA/Ising): core is true 3D spatial audio panning driven by agent positions + evolutionary harmonic genome transfer under spatial fitness, not spectral force feedback, not multi-tab broadcast, not fluid kernels, not residual predictors.

## Why novel
- Spatial audio (PannerNode HRTF) embodiment of evolutionary agents has not appeared; prior audio was spectral feedback into forces (F457) without positional spatialization.
- Genome transfer is purely local proximity + fitness, sealed to IndexedDB, without BroadcastChannel or WebRTC.
- Hybrid: orientation/pointer → physics → spatialized evolving soundscape → regional DOM probes.
- Persistent local seal of sound genomes in a new architecture.

## Interaction
- Pointer moves attractor (down) or just samples; resumes AudioContext.
- DeviceOrientation tilts gravity continuously.
- Drag probe cards to sample different spatial regions (Hz + count).
- Seal Genome stores compact gene snapshot under local hash-like id.
- Reset reinitializes positions and frequencies.

## Files
- index.html — single self-contained runnable prototype

## Expected outcome
Agents drift and cluster under tilt; frequencies converge locally via transfer; spatialized tones emerge that pan as agents move; probes report regional averages. Fully interactive, offline after load. Works in modern browsers with Web Audio.

## Failure modes
- Autoplay policy → click canvas to resume context; visual continues.
- No DeviceOrientation → pointer provides force override.
- Private mode / IndexedDB quota → seal fails silently (visual still works).
- High N on low-end → reduce count (noted for WebGPU spatial hash next).

## Building blocks for next
True WebGPU compute kernel for agent physics + spatial hash, WebXR hand joints as multi-attractor spatial injectors, multi-peer WebRTC sealed genome transfer, on-device fine-tuning of per-cluster frequency maps from user-held “pleasant” states, hybrid CSS-transform DOM resonators driven by regional density.
