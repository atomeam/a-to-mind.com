# F743 Orientation MLP Collision DOM Agents Mind

**Ledger ID**: F-743 (frontier series)  
**Slug**: orientation-mlp-collision-dom-agents-mind  
**Date**: 2026-11-13  
**Branch from**: Recent dominant cluster of WebGPU continuum/particle kernels (boids MLP F740), WebXR hand + RNN + constraint physics (F741), pointer-trajectory Fourier k-means CSS 3D constellations (F742), orientation-driven HMM/kNN/Hebbian, and spectral residuals. Explicitly leaves WebGPU compute shaders, continuum/field substrates, WebXR hand/gaze tracking, Fourier/spectral features, k-means clustering, CSS 3D preserve-3d constellations, constraint solvers, and pure particle flocking.

## Concept
A novel hybrid spatial interface for The Verse canvas: a population of 10 living DOM agent cards, each controlled by its own tiny pure-JS local MLP policy. DeviceOrientation (or simulated tilt) plus relative neighbor statistics and pointer proximity form the causal input. The MLP outputs velocity deltas and hue. Agents move with simple Euler physics; on pairwise overlap they exchange momentum (collision response) and, if the higher-fitness agent is sufficiently superior, transfer a fraction of its genome (weights) with mutation. Fitness accumulates from dwell near pointer, clicks, and low collision energy. Best genomes seal to IndexedDB and migrate over BroadcastChannel. Fully offline single-file HTML. Core novel combination: local per-agent MLP policies driving discrete momentum-conserving DOM collisions with sealed genome transfer on victory, under DeviceOrientation causal drive. Not a field, not a continuum solver, not spectral gesture modes, not hand-tracked constraints.

## Novelty
Leaves the dominant recent cluster of WebGPU field/particle kernels, WebXR hand RNN constraint physics, pointer Fourier spectral k-means CSS3D, and prior neural sequential models on continuum substrates. First combination of per-agent local MLP policy + explicit momentum-exchange collisions on physical DOM cards + orientation-as-global-bias + sealed victory-gated genome transfer. The agents *are* the spatial mind bodies.

## Architecture
- Single index.html (self-contained, offline-capable).
- Agents: 10 absolute-positioned DOM cards. Each owns a tiny MLP (4→6→3 ReLU).
- Inputs: [orientBetaNorm, orientGammaNorm, localDensity, pointerDistNorm, ownFitnessNorm].
- Outputs: [dVx, dVy, dHue].
- Physics: Euler integration, soft walls, pairwise overlap detection → momentum exchange + conditional genome transfer (25% weights if fitness delta > threshold).
- Persistence: IndexedDB `verse-f743-agents`. BroadcastChannel `f743-genomes`.
- Visual: Full-viewport stage; cards show short status; optional Canvas2D trails.
- Controls: Seal best, Reset, Reward (click any card or background).

## Mechanics
1. Initialize random positions, velocities, and MLP weights.
2. On animation frame: sample DeviceOrientation (or keyboard arrows / pointer for sim); compute per-agent inputs; forward MLP; integrate velocity/position.
3. Resolve pairwise collisions: exchange momentum, check fitness, transfer genome if superior.
4. Update DOM styles (transform, background hue, text).
5. Pointer proximity and clicks boost fitness of nearest agent.
6. Seal button persists the current best genome set. Incoming higher-fitness genomes from other tabs replace locals.

## Expected outcome
Open the page. Tilt the device (or use arrow keys): agents accelerate and change color according to their policies. They collide, bounce with momentum exchange, and occasionally steal genome fragments from weaker neighbors. Click near an agent to reward it. Seal and open a second tab: better policies migrate. Works offline after load; no special permissions beyond orientation (optional).

## Failure modes
- No DeviceOrientation: automatic pointer-velocity or arrow-key surrogate.
- IndexedDB blocked: session memory only.
- BroadcastChannel unavailable: local only.
- Too many agents on low-end: reduce to 6.
- Orientation permission denied: seamless fallback.

## Building blocks
Reusable pure-JS per-agent MLP, discrete momentum-conserving collision response for DOM bodies, DeviceOrientation causal input with fallback, sealed victory-gated genome transfer over IndexedDB + BroadcastChannel. Ready for richer local observations, WebGPU batching, or hybrid canvas overlays.

Void is now Verse everywhere.

**Files**: drafts/F743-orientation-mlp-collision-dom-agents-mind/SPEC.md, drafts/F743-orientation-mlp-collision-dom-agents-mind/index.html
