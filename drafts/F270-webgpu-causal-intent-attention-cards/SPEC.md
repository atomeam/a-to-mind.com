# F-270 WebGPU Causal Intent Lattice with Evolutionary Multi-Head Attention Agents and Physically Morphing Thought Cards

## Concept
A 2D causal deposit lattice (pointer trajectory + device orientation inject decaying energy that diffuses) whose local field statistics and recent history are consumed by a local Web Worker evolutionary population of tiny multi-head attention genomes. The best genome predicts residual intent vectors and produces attention weights over a small set of "thought slots". Those weights drive the 3D CSS transforms, scale, hue and filter of floating DOM thought cards arranged in a perspective scene. Residual error and attention coherence morph page chrome and drive generative Web Audio. Genomes seal to IndexedDB. Progressive WebXR stub.

## Novel combination
Causal memory substrate + evolutionary multi-head attention mind + physically rearranging 3D DOM cards.  
Not a variation of F-269 (fluid density → stats → audio genome), F-253 (NCA → spatial audio + orbs), F-195 (GPU particle attention), or prior residual predictors: the mind operates on interaction history via attention, and embodiment is dynamic 3D card layout rather than passive sampling or force physics.

## Architecture
- Single `index.html` (Canvas2D lattice + CSS 3D cards + blob Worker)
- Worker: population of 6 attention genomes (query/key/value-like vectors + residual MLP), fitness on residual prediction of next deposit direction + field entropy, returns best weights each ~800 ms
- Main: deposit injection, lattice step (diffusion + decay), card positioning from attention, CSS var morph, AudioContext after gesture, IndexedDB seal
- WebGPU compute path noted for future lattice/attention kernels
- DeviceOrientationEvent + pointer; optional XR session button

## Expected outcome
Interactive spatial canvas where your gestures and tilt deposit memory. Local attention agents evolve to better anticipate your intent, physically rearranging floating thought cards in 3D space according to their weights. Chrome and audio respond to coherence and residual. Runnable fully offline. XR when supported.

## Mechanics
1. Pointer/orientation → causal deposits on lattice
2. Lattice: diffusion + decay + residual bias from best genome
3. Worker samples recent history + field stats, runs attention forward, computes fitness, mutates
4. Best attention weights → card transforms (x/y/z/scale/hue)
5. Residual → CSS hue/blur/contrast + oscillator detune
6. Seal button writes genome to IndexedDB

## Failure modes
- No Worker → static uniform attention
- No WebGPU (Canvas2D complete)
- Orientation/mic denied → deposits from pointer only
- XR unsupported → 2D/3D CSS complete
- IndexedDB blocked → in-memory only
- Audio blocked until user gesture

## Building blocks for next
WebGPU compute attention kernels, true WebXR hand/gaze ray deposits, multi-card sealed memory transfer, residual-conditioned generative text fragments on cards.

## V01D landing
Spatial attention-card skill under void-live-deploy/skills/; test: attention weights change card layout; residual drops after evolution; seal/load roundtrip.

## Status
Prototype delivered 2026-10-27. Offline-capable, interactive. Canvas2D + Worker + Web Audio + CSS 3D; WebGPU path noted.
