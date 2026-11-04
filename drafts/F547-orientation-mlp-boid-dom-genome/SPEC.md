# Frontier Engine F547: Orientation-MLP Boid DOM Genome Mind

**Slug**: `orientation-mlp-boid-dom-genome`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of self-vision particles (F546), DeviceMotion-Hopfield SVG competitive (F545), WebGPU SDF evolutionary DOM coverage (F544), wave interference phase-DOM (F542), self-attention vortex (F540), SPH buoyant (F539). Explicitly leaves continuous field kernels (particles/SPH/SDF/waves/attention/vortex), associative Hopfield memories, residual predictors, pure NCA, softbody, orientation RNN, and sensor-driven policy on implicit surfaces or spectral residuals.

## Concept
A swarm of living DOM Verse cards that behave as Reynolds boids (cohesion / separation / alignment). A shared local tiny pure-JS MLP takes DeviceOrientation history (or pointer-velocity proxy) as causal input and outputs the three rule weights plus attractor strength. Cards compete by proximity: the higher-fitness agent seals and transfers a hashed fragment of the current MLP weights to the lower one. Best weights persist in IndexedDB. Fully offline single-file prototype. No continuous physics kernels, no neural cellular automata, no SVG path morphs.

## Novelty
Leaves the dominant recent clusters of WebGPU continuous physics (SDF raymarch, wave interference, SPH, self-vision particles, attention vortices) coupled to evolutionary/MLP/RNN/Hopfield policies that drive particles or sample living DOM. Core novel combination is classic discrete-agent Reynolds boids (not field kernels) embodied as physical DOM cards under local feed-forward MLP control whose causal input is DeviceOrientation, with proximity-gated sealed genome (weight-fragment) transfer. Not substrate simulations, not associative pattern recall, not residual walks, not pointer-history force fields.

## Architecture
- Single index.html, offline after load.
- 8–12 absolute-positioned .verse-card DOM elements as boids (position/velocity in JS).
- MLP: 12→8→4 (orientation history + pointer delta → cohesion, separation, alignment, attractor).
- DeviceOrientationEvent (with permission prompt); fallback synthetic from pointer motion.
- Pointer: sets temporary attractor; cards chase it according to MLP output.
- Competition: on distance < 80px, higher fitness (alignment coherence + speed) transfers sealed weight slice + hash; visual pulse on transfer.
- IndexedDB `f547-boid-mlp`; Seal button stores weights + fitness.
- BroadcastChannel optional for multi-tab genome share (simple).
- Fallback: no WebGPU required; pure DOM+JS always works.

## Expected outcome
Runnable prototype in which tilting the device (or moving the pointer) changes flock behavior (tight clusters vs loose wandering); cards chase the pointer; colliding cards exchange sealed genomes and morph their motion; Seal restores the learned weights across reloads. Works offline on desktop (pointer proxy) and mobile (orientation).

## Mechanics
1. Initialize random MLP weights (or load from IndexedDB); spawn cards with random pos/vel.
2. Each frame: sample orientation/pointer → MLP forward → update boid forces → integrate positions → check proximity for transfer → update DOM transforms.
3. Orientation / pointer events buffer history.
4. Seal button: serialize weights + hash to IndexedDB.
5. On load: restore if present.

## Failure modes
- DeviceOrientation permission denied or desktop: pointer-velocity proxy path remains fully interactive.
- MLP outputs extreme: clamp weights to [0.1, 2.0].
- Cards escape viewport: wrap or soft bounds.
- IndexedDB quota / unavailable: session-only memory.
- Too many cards on low-end: reduce count.

## Files
- drafts/F547-orientation-mlp-boid-dom-genome/SPEC.md
- drafts/F547-orientation-mlp-boid-dom-genome/index.html

## V01D landing
Boid DOM genome stage under void-live-deploy/skills/orientation-mlp-boid-dom.js; test asserts orientation or pointer change → flock weight shift and proximity transfer updates peer MLP.
