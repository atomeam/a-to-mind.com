# F740-webgpu-boids-mlp-policy-flock-dom-mind

**Ledger ID**: F-740  
**Slug**: webgpu-boids-mlp-policy-flock-dom-mind  
**Date**: 2026-11-13  
**Status**: frontier prototype  

## Concept
A novel hybrid spatial interface for The Verse canvas: a population of 192 boids (flocking agents) simulated with classic Reynolds rules (separation, alignment, cohesion) whose behavioral parameters are continuously adapted by a local pure-JS tiny MLP policy.  

The MLP observes global/local flock statistics (density, average speed, alignment coherence, pointer proximity as predator/attractor, DeviceOrientation tilt) and outputs deltas to sep/ali/coh weights and maxSpeed.  

A sparse set of absolute-positioned DOM Verse portals ride selected boids (or cluster centroids), inheriting velocity-derived rotation, density-derived scale/hue, and acting as physical embodiments. Pointer drag injects predator force; clicks reward the current policy (fitness boost). Best genomes seal to IndexedDB and transfer via BroadcastChannel.  

Canvas2D visualizes the flock; WebGPU compute path is sketched for future (JS fallback always works). Fully offline, no external models.

## Novelty
Leaves the recent cluster of continuum reaction-diffusion/spectral/quantum/pathtracer fields (F732, F725, F722, F727), discrete CA/audio, spiking LIF neurons (F731), CSS Grid decision-tree reflow (F739), WebXR hand springs, genetic L-systems, gaze-Bayesian, pointer-history trees, and prior particle/MLP/RNN/reservoir/NCA substrates.  

Core novel combination is an emergent multi-agent flocking substrate (boids) whose rule parameters are causally controlled by a local MLP policy, with hybrid DOM portals as living flock members that both visualize and can be rewarded. Not a fixed-rule particle system, not a field PDE, not a neural weight genome on individual agents, but policy-modulated collective behavior with sealed behavioral genome transfer.

## Architecture
- Single index.html (self-contained).
- Boids: Float32Arrays for pos/vel (192 agents). Classic forces + boundary wrap or soft walls.
- Policy MLP: 6→8→4 (ReLU), inputs [avgDensity, avgSpeed, alignment, pointerDistNorm, tiltX, tiltY], outputs [dSep, dAli, dCoh, dMaxSpeed]. Online mutation or simple delta-rule on click reward.
- Embodiment: 12 DOM portals positioned at every Nth boid or k-means-ish clusters; CSS transform/rotation/scale/hue from local vel and density.
- Persistence: IndexedDB `verse-f740-boids`. BroadcastChannel `f740-genomes`.
- Visual: Full-screen Canvas2D for boid dots + trails optional. Status chrome.
- Optional: WebGPU compute for force accumulation if adapter present (fallback transparent).

## Mechanics
1. Initialize random boids + random MLP weights.
2. Each frame: compute neighborhood forces with current params, integrate, update stats, run MLP, apply param deltas (clamped).
3. Position/style DOM portals from selected boids.
4. Pointer as predator (repel) or toggle attractor. Click near portal → reward → reinforce/mutate weights toward current params.
5. Seal button: store weights + current params + fitness. Incoming higher-fitness genomes replace.
6. Orientation permission optional for tilt input.

## Expected outcome
Open the page: a flock of dots swarms and forms clusters. DOM cards glide with the flock, rotating with direction. Move pointer to scatter or attract the flock; the MLP adapts parameters so the flock responds more coherently over time. Click to train. Seal and open second tab: better policy migrates. Works on desktop (pointer) and mobile (orientation). Offline.

## Failure modes
- No WebGPU: JS path (already primary).
- No orientation: pointer-only inputs.
- IndexedDB blocked: session memory only.
- High agent count on low-end: auto-reduce to 64.
- BroadcastChannel unavailable: local only.

## Building blocks
Reusable pure-JS boids kernel with parameter vector, tiny MLP policy head on collective stats, hybrid DOM-as-flock-member embodiment, sealed behavioral genome over IndexedDB + BroadcastChannel. Ready for full WebGPU compute, WebXR hand as predator, or multi-species flocks.

Void is now Verse everywhere.
