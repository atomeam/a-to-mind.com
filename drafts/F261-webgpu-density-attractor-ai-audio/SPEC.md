# F261 — WebGPU Density Attractor AI + Spatial Audio

## Concept
Closed-loop spatial field: WebGPU-capable particle density driven by DeviceOrientation gravity and dynamic attractors placed/pruned by a local Worker AI. Density readback morphs CSS chrome and orbs. Attractors drive spatialized AudioContext oscillators. IndexedDB seals the current attractor+density signature.

## Branch away from
F-020 WebGPU agents, F-021 spatial orientation + worker density + morphing UI, F259 orient-causal MLP physics, F260 attention-as-force softbody, NCA/residual/volumetric lattices, pure genome competitions.

## Novelty
GPU density field (compute path noted) + Worker decision AI that actively seeds and prunes attractors in response to measured density + pointer, producing emergent clustering that directly drives both spatial audio panning/frequency and DOM morph. Not fixed physics, not attention weights as force, not residual predictor, not evolved NCA rule.

## Architecture
- Single `index.html`, offline-capable.
- Main-thread particle step (CPU reliable; WebGPU device init for future compute kernel).
- Inline Worker: density-aware attractor lifecycle (boost near activity, prune weak, opportunistic seed).
- DeviceOrientation → gravity vector.
- Click + Worker → attractor placement.
- Canvas2D render + density → CSS custom properties + orb transforms.
- AudioContext + StereoPanner + oscillators bound to attractor positions/strength.
- IndexedDB periodic seal of density + attractor snapshot.

## Expected outcome
Interactive living density field. Tilt shifts the whole cloud. Clicks and AI create persistent attractors that pull particles, raise local density, morph floating orbs and background hue, and spatialize soft tones. Sealed state survives reload. Runnable without network, sensors, or audio permission (graceful degradation).

## Mechanics
- Particles integrate orientation gravity + inverse-square attractor forces + damping + wrap.
- Density = normalized total attractor strength.
- Worker every ~10 frames: age/decay, filter, probabilistic seed near pointer when density low.
- Orbs orbit centroid with radius/scale modulated by density.
- Audio pan = attractor x normalized; freq = base + strength + density.
- Seal writes latest to IndexedDB `F261/seals`.

## Failure modes
- No DeviceOrientation (tilt = 0, pointer still works).
- No WebGPU (CPU path complete).
- Audio blocked until gesture (visual complete).
- Worker fails (static attractors from clicks only).
- IndexedDB blocked (in-memory only).

## Building blocks
Pure WebGPU compute particle kernel with density atomic readback, multi-head local decision network in Worker, shared sealed attractor genomes via WebRTC, XR hand as continuous attractor source.

## V01D landing
Spatial density-attractor skill under `void-live-deploy/skills/`. Testable by: tilt changes centroid, click increases attractor count visible on canvas, density CSS var updates, audio pan tracks attractor x, seal readable from IndexedDB.
