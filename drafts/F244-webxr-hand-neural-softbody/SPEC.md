# F-244 WebXR Hand Neural Softbody

**Date:** 2026-10-23  
**Status:** runnable prototype  
**Slug:** F244-webxr-hand-neural-softbody

## Concept
Novel combination deliberately branching from the recent sealed-genome-WebRTC-DOM-arena / acoustic-orientation-crystal / memory-consolidation-lattice cluster (F241–F243):

- True WebXR hand tracking (Hand Input API) supplies palm position, linear velocity, and pinch strength as the sole primary causal input.
- A local tiny MLP (input 6 → hidden 12 → output 3) maps the hand feature vector to soft-body control signals: global spring stiffness, damping, and attractor strength.
- Soft-body is a particle-spring network whose Verlet integration can run on a WebGPU compute shader (when available) or CPU fallback.
- Hybrid embodiment: particles rendered to a 2D canvas (or XR reference space points); a small set of real DOM cards act as "memory anchors" that can be grabbed by the tracked hand (or pointer) and whose CSS transforms are softly coupled to nearby particle clusters.
- Sealed resting configuration + MLP weights persisted to IndexedDB with SHA-256 hash.
- Leaves acoustic energy fields, pure density lattices, orientation-as-wind advection, multi-peer genome arenas, and residual predictors. Expands the under-explored axis of true WebXR hand pose as direct controller of a local neural soft-body physics kernel with hybrid DOM anchors.

## Architecture
- Single self-contained index.html.
- Particles: ~120 points with local neighbor springs (grid topology).
- MLP: pure JS forward pass; weights randomly initialized and optionally mutated by user "evolve" button based on a simple coherence fitness (cluster tightness under hand motion).
- WebGPU: optional compute pass that reads particle state + control params and writes updated positions/velocities.
- WebXR: requestSession('immersive-vr') or 'immersive-ar' with requiredFeatures: ['hand-tracking']; hand joints sampled each frame.
- Fallback: pointer position + button state emulates hand; DeviceOrientation optional secondary bias.
- Anchors: 4–6 `<div class="anchor">` elements whose left/top are lerped toward particle centroids when "bound".
- Seal: crypto.subtle.digest of weights + mean particle positions → IndexedDB "F244-softbody".
- Progressive enhancement and offline after first load.

## Expected outcome
Click "Enter XR" (or use pointer). Move your hand (or cursor); the softbody deforms, stiffens or softens according to the MLP's response to hand speed/pinch, and DOM anchors drift with the clusters. Evolve button slightly mutates weights toward tighter response. Seal persists the state. Fully interactive with graceful degradation.

## Failure modes
- No WebXR / hand tracking → pointer emulation path.
- No WebGPU → CPU Verlet.
- IndexedDB blocked → in-memory only.
- Session denied → 2D canvas remains fully usable.
- Performance → reduce particle count.

## Building blocks for next
- Multi-hand two-body interaction that transfers energy between softbodies.
- WebRTC shared softbody state with sealed genome of the MLP.
- Full XR mesh rendering of the particle surface.
- OPFS persistence of full trajectory.

V01D landing: spatial softbody skill under void-live-deploy/skills/hand-neural-softbody or canvas mode. Test: hand velocity changes measured stiffness; anchors follow centroids; sealed hash round-trips; CPU and WebGPU paths produce consistent short trajectories.
