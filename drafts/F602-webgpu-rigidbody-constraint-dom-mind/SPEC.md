# F602 WebGPU Rigid-Body Constraint DOM Mind

**Ledger ID**: F-602 (frontier series)

**Slug**: webgpu-rigidbody-constraint-dom-mind

**Date**: 2026-11-06

## Concept
A set of living DOM cards that *are* the rigid bodies. Each card has position, velocity, angular velocity, mass, friction, and restitution. A simplified constraint-based integrator (positional correction + impulse response on AABB contacts) runs in the main thread. DeviceOrientation (pointer fallback) biases the gravity vector only. On contact, the higher-fitness body seals and transfers a hashed fragment of its physical properties (mass, friction, restitution) to the lower one via BroadcastChannel. Best properties persist in IndexedDB. Canvas2D draws contact flashes and velocity trails; WebGPU compute path for true parallel constraint solve is noted as the next building block. Fully offline single-file prototype.

## Novelty
Leaves the dominant recent cluster of sensor/speech/pointer-driven local models (MLP, RNN, bandit, decision tree, Hopfield) controlling continuum, spectral, geometric, or particle substrates with floating DOM portals and sealed neural genomes (F594–F601). Core novel combination is a previously unused primary substrate—the rigid bodies themselves embodied as DOM elements—driven by pure constraint physics (not neural policy, not continuum kernel, not SDF, not spectral), with DeviceOrientation only as gravity bias and sealed transfer of physical parameters on contact. Not neural weights, not CA/NCA/Lenia/Ising/Physarum, not softbody springs, not particle swarms, not attention or residual predictors.

## Architecture
- Single index.html, fully self-contained, offline after load.
- 6–8 absolute-positioned DOM cards as rigid bodies (width/height fixed, transform driven by simulation).
- Simple Euler + positional correction for contacts; impulse approximation for velocity.
- Gravity from DeviceOrientationEvent (beta/gamma) or pointer drag as proxy.
- Fitness = kinetic energy stability + click rewards.
- BroadcastChannel `f602-genome` for sealed property transfer (FNV-like hash of property prefix).
- IndexedDB store `verse-f602`.
- Canvas2D overlay for trails and contact flashes.
- Progressive: WebGPU constraint solver noted for future; Canvas2D + DOM primary.

## Expected outcome
User tilts device or drags; cards fall, bounce, and collide under gravity. Contacts trigger sealed property transfer (visible pulse). Seal button persists best body. Multi-tab peers can exchange genomes. Fallback works without orientation.

## Failure modes
- DeviceOrientation requires secure context + permission; pointer fallback always available.
- BroadcastChannel same-origin only.
- High body count can thrash layout; clamped to 8.
- IndexedDB private mode → session only.
- No true WebGPU constraint solver in this draft (noted).

## Building blocks for next
DOM-as-rigid-body embodiment; contact-gated sealed physical-parameter transfer; orientation-as-gravity bias; GPU constraint solvers as transferable physics primitive.
