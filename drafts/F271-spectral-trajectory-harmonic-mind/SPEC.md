# F-271: Spectral Trajectory Harmonic Particle Mind

## Concept
Novel combination: Spectral analysis of the live pointer (and optional orientation) trajectory drives an evolving set of harmonic oscillators hosted in a Web Worker. Power-spectrum residuals and entropy become fitness. Particles on a Canvas2D stage (WebGPU compute path noted) are born and steered by the dominant harmonic peaks projected into 2D space. Web Audio synthesizes the same harmonics with spatial panning and filtering. Global Void chrome morphs via CSS (hue, blur, chromatic offset, perspective) according to spectral entropy and harmonic fitness. Seal persists the best harmonic genome to IndexedDB.

Not a superficial variation of prior work:
- Not fluid density (F269) or NCA (F270): substrate is discrete spectral harmonics of user trajectory.
- Not attention lattices or portal graphs: the mind is a predictive harmonic model of motion, not spatial attention weights.
- Not free agents or boids: particles are direct embodiments of spectral components.
- Closes trajectory → spectrum → evolved harmonics → particles + audio + chrome morph loop.

## Architecture
Single self-contained `index.html`.
- Main thread: records pointer history, computes lightweight DFT/power spectrum of velocity series, steps particles toward harmonic targets, renders, drives CSS morph and Web Audio, sends spectrum residual to worker.
- Blob Worker: maintains a small population of harmonic genomes (freq, amp, phase triples), evaluates fitness as inverse residual + diversity, mutates, returns best.
- Fallbacks: no Worker → fixed harmonics; no AudioContext → silent; orientation ignored if denied; Canvas2D only.

## Expected outcome
Drawing with the pointer generates a living spectral signature. Harmonic particles orbit and cluster according to the evolved model of the user's motion style. Audio becomes a generative sonification of that style. Page chrome warps and colors shift with prediction confidence and entropy. Sealed genomes remember successful motion models across reloads. Fully offline, interactive.

## Mechanics
1. Keep ring buffer of last 64 pointer velocities (dx, dy).
2. Approximate power spectrum via simple DFT on the speed series.
3. Worker evolves 4–6 harmonics to match the spectrum; residual drives mutation rate.
4. Project dominant frequencies into spatial targets (angle from phase, radius from amp).
5. Particles spring toward targets; color by frequency.
6. Oscillators play the harmonics; panning from particle centroid.
7. Spectral entropy + fitness → CSS custom properties.
8. Seal: store genome + residual hash-like summary in IndexedDB.

## Failure modes
Worker blocked by CSP → static spectrum response; low-end devices drop particle count; audio requires user gesture; orientation permission required on mobile; DFT approximation may alias extreme motions.

## Building block for future
True WebGPU compute for particle integration and spectrum; WebXR head/hand trajectory as additional spectral channel; sealed genome transfer; small local Transformer over spectral tokens.

## V01D landing
Spatial spectral-mind skill (`skills/mini/spectral-trajectory-harmonic.js`); testable via velocity-series → harmonic residual and entropy → CSS morph.
