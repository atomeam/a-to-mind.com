# F466 — WebGPU Bayesian Wave Collapse Mind

**Slug:** F466-webgpu-bayesian-wave-collapse-mind

**Extends Verse Brain:** imagination rollouts / self region — probabilistic belief update (Bayesian particle filter over intent) as the reasoning substrate that drives spatial wave dynamics and collapses high-uncertainty regions into tangible evidence tokens.

## Architecture

- Canvas2D discrete 2D wave lattice (N≈64, WebGPU compute path prepared via note) whose driving sources are biased by a local Bayesian particle-filter mind (32 particles) tracking pointer trajectory features (position, velocity, local density).
- Posterior entropy / uncertainty peaks trigger collapse events: high-energy lattice sites attenuate and spawn hybrid DOM evidence orbs carrying residual belief.
- User can drag orbs to inject observations (reweight particles, update prior). DeviceOrientation supplies continuous tilt gravity bias to the wave.
- Champion posterior (particle set + weights) sealed to IndexedDB. Offline, progressive (orientation optional, IDB optional).
- UI chrome (hue, scale) morphs with global posterior entropy.

## Expected outcome

Interactive spatial wave field whose interference patterns are steered by an evolving local Bayesian intent belief. Pointer motion updates the particle filter; high uncertainty collapses waves into draggable orbs that correct the mind. Seal/load restores the belief state. Fully self-contained runnable prototype.

## Mechanics

- Feature buffer → particle filter predict/update (simple Gaussian likelihood on position/velocity).
- Wave step: Laplacian + damping + source injection proportional to particle mean and variance.
- Entropy threshold → spawn orb + local attenuation.
- Drag on orb → importance reweighting / resample.
- IndexedDB put/get of serialized particles + weights.

## Failure modes

High N or particle count drops FPS (capped). IndexedDB denied → in-memory only. No orientation → zero tilt. No pointer → idle diffusion driven by residual variance.

## Builds on

Prior wave-interference and local-mind experiments by introducing a Bayesian particle-filter reasoning substrate (distinct from residual predictors, reservoirs, MLPs, decision trees, k-means, attention, genomes, or expression trees) with explicit uncertainty-driven collapse into bidirectional evidence orbs.

## Next building block

Full WebGPU wave + particle-filter kernel; Web Audio sonification of entropy; WebXR hand observations; shared sealed beliefs via WebRTC.
