# F705-webgpu-markov-gesture-sdf-sculptor

**Ledger ID**: F-705 (frontier series)
**Slug**: webgpu-markov-gesture-sdf-sculptor
**Date**: 2026-11-12
**Status**: frontier prototype

## Concept
A novel hybrid spatial mind for The Verse canvas: a pure local first-order Markov chain over discretized gesture tokens (8 directional + speed + pause bins derived from pointer velocity history) continuously learns transition probabilities from the user's drawing motions. The chain's current state and predicted next-token distribution parametrically deform a signed-distance field (SDF) of a living "mind volume" that is raymarched or procedurally visualized. Floating DOM thought-anchors are projected onto the evolving surface and morph their labels according to the predicted gesture. Sealed genome is the transition matrix itself, persisted in IndexedDB and transferable via BroadcastChannel. Fully self-contained, offline after first load.

This leaves the dominant recent clusters of continuum WebGPU field kernels (wave, Poisson, LBM, sandpile), orientation/DeviceMotion residual MLPs or genetic synths, pure DOM mosaic agents, WebXR hand spring lattices, semantic note clusterers, speech-RNN portals, and residual predictors. Core novel combination is discrete gesture-token Markov sequence learning driving parametric SDF volume sculpting with projected hybrid DOM anchors and sealed transition-matrix genome. Not a continuous field policy, not neural net controller, not particle swarm, not speech or orientation sensor primary.

## Architecture
- Single index.html, self-contained.
- Gesture tokenizer: velocity vector → one of ~16 tokens (8 dirs × 2 speeds + pause).
- Markov: 16×16 transition counts, smoothed probabilities; online update on each new token.
- SDF params: predicted distribution modulates radius, elongation axes, noise octaves of a procedural blob/SDF.
- Visualization: Canvas2D procedural rendering of the volume (concentric distance fields + hue from entropy); WebGPU path stubbed for future raymarch.
- 4–6 absolute DOM anchors whose position/rotation/content track surface samples and current prediction.
- Persistence: IndexedDB key `verse-f705-markov`; BroadcastChannel `f705-genome`.
- Controls: Seal, Reset, Clear history. Click/drag to gesture.

## Mechanics
1. Initialize uniform transition matrix.
2. On pointermove: compute velocity → token → update counts → normalize row → predict next distribution.
3. Each frame: map distribution to SDF deformation parameters; render volume; update DOM anchors.
4. Seal: serialize matrix + timestamp to IndexedDB + broadcast; adopt higher-fitness (lower entropy or user-rewarded) incoming.
5. Optional click rewards a token sequence for fitness.

## Expected outcome
Runnable interactive sculptor: drawing gestures train a visible Markov mind that deforms a living volume in real time; DOM anchors dance on the surface and label predictions; Seal transfers the learned gesture language across tabs. Graceful without WebGPU (Canvas2D). Works offline. Desktop pointer primary.

## Failure modes
- No pointer events: static volume.
- IndexedDB unavailable: session-only.
- High gesture rate: token smoothing prevents instability.

## V01D landing
Gesture-Markov SDF sculptor under void-live-deploy/skills/markov-sdf-sculptor.js; test asserts gesture sequence → transition update → SDF param change and BroadcastChannel adoption.

**Files**: drafts/F705-webgpu-markov-gesture-sdf-sculptor/SPEC.md, drafts/F705-webgpu-markov-gesture-sdf-sculptor/index.html
