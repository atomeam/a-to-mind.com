# Frontier Engine F557: IntersectionObserver Evolutionary Particle Attention Mind

**Slug**: `intersection-evo-particle-attention-mind`  
**Ledger ID**: F-557  
**Date**: 2026-11-04  

**Branch from**: Recent cluster of WebGPU particle/SDF/NCA + MLP/RNN + sensor (orientation/mic/WebXR hand/gaze) + DOM portal/competitive genome transfer systems (F543–F556). Explicitly leaves compute shaders, neural forward passes, residual predictors, spectral residuals, pointer-history force fields, softbody, WebXR input, DeviceMotion/Orientation as primary causal, and proximity-gated transfers.

## Concept
A set of living DOM Verse cards whose screen-space visibility is continuously measured by native IntersectionObserver (threshold steps). Visibility scores become a causal "attention field". A Canvas2D particle swarm is attracted to high-attention cards; particle density and velocity statistics drive a local Web Worker genetic algorithm that evolves attractor strength, hue bias, and emission rate to maximize cumulative attention (dwell proxy). Evolved parameters morph card CSS (scale, filter, background) and sonify via Web Audio oscillators. Dragging a card updates its observation root and injects a temporary particle burst. Seal persists the best genome + attention history hash to IndexedDB. Fully offline single-file prototype. No WebGPU required (Canvas2D primary); progressive.

## Novelty
Leaves the dominant recent clusters of GPU-resident kernels (particles, SPH, SDF, NCA, waves, LBM) coupled to local MLP/RNN/Hopfield policies driven by external sensors or pointer residual, with DOM as secondary sampling portals or physical agents. Core novel combination is browser-native IntersectionObserver as the primary causal attention signal (not pointer, not device orientation, not microphone, not WebXR gaze), feeding a particle resonance system whose evolutionary fitness is defined by the same observer scores, closing a visibility-driven co-evolution loop between DOM layout and simulated agents. Not sensor fusion, not self-vision retina, not competitive collision genomes.

## Architecture
- Single `index.html`, offline after load.
- 6–8 absolute-positioned DOM Verse cards with unique data-ids; IntersectionObserver with multiple thresholds (0, 0.25, 0.5, 0.75, 1).
- Canvas2D full-window particle system (~800 particles): attraction forces toward weighted card centers, damping, hue from local density.
- Web Worker: GA (population 6, tournament, mutation) on 4 parameters (attract strength, particle hue offset, emission rate, decay). Fitness = sum of recent intersection ratios * particle density under card.
- CSS morph: cards scale/filter/hue based on local particle density + observer ratio.
- Web Audio: oscillator frequency mapped to average attention.
- IndexedDB `f557-attention-genome`; Seal button stores weights + simple hash of attention vector.
- Fallback: synthetic attention from pointer proximity if observer unavailable.

## Expected outcome
Runnable prototype in which scrolling or resizing changes card visibilities, particles swarm toward more visible cards, the GA slowly optimizes swarm parameters for higher total attention, cards visually "breathe" with density, and Seal restores the evolved behavior across reloads. Works offline; graceful if Worker or Audio fails.

## Mechanics
1. Initialize random genome; load from IndexedDB if present. Spawn particles and cards.
2. IntersectionObserver callbacks update per-card attention scores.
3. Each frame: update particles toward attention-weighted targets; sample density; post to Worker.
4. Worker evolves genome; posts back best parameters periodically.
5. Apply CSS morphs and audio gain/freq from attention + density.
6. Drag cards: update position, re-observe, inject particle burst.
7. Seal: serialize genome + attention hash to IndexedDB.

## Failure modes
- IntersectionObserver unavailable (very old browsers): pointer-proximity fallback.
- Worker blocked: main-thread simple hill-climb.
- Audio context suspended: silent, visual only.
- IndexedDB quota: in-memory only.
- Too many particles: cap at 600, reduce on low FPS.

## Files
- drafts/F557-intersection-evo-particle-attention-mind/SPEC.md
- drafts/F557-intersection-evo-particle-attention-mind/index.html

## V01D landing
Intersection-driven evolutionary particle attention stage under `void-live-deploy/skills/intersection-evo-attention.js`; test asserts observer ratio change → particle target shift → card CSS morph and IndexedDB roundtrip.
