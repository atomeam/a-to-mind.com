# Frontier Engine F549: Broadcast RNN Shared Causal Lattice Mind

**Slug**: `broadcast-rnn-shared-causal-lattice-mind`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of WebGPU semantic embedding particle swarms (F548), orientation-MLP Reynolds boid DOM genome transfer (F547), DeviceMotion Hopfield SVG morph competitive agents (F545), WebGPU SDF evolutionary DOM coverage (F544), orientation-RNN sealed DOM agents (F543), wave-interference phase DOM, self-attention vortices, SPH, self-vision particles. Explicitly leaves particle swarms, boid rule weights, Hopfield associative recall, SVG path morphs, continuous field kernels (SDF/SPH/waves/attention), residual oracles, pure NCA, softbody DOM, orientation/device-motion as direct MLP/RNN policy input, and proximity-gated weight-fragment transfer.

## Concept
A persistent 32×32 causal lattice field (activation + phase) stored in IndexedDB and synchronized across same-origin tabs via BroadcastChannel. Each tab runs an independent local Elman-style RNN that observes only a local neighborhood of the shared lattice (never raw sensor streams) and outputs a sparse “emission” (position + strength) that is injected into the lattice. DeviceOrientation / DeviceMotion (or pointer-velocity proxy) injects exogenous causal events into the lattice at a sensor-derived location; the RNN learns to anticipate and amplify coherent patterns. Sealed genome transfer occurs by broadcasting a hashed RNN weight snapshot; receiving tabs can adopt it only if the hash matches and fitness improves. Fully offline single-file prototype after first load.

## Novelty
Leaves the dominant recent clusters of GPU particle forces, discrete-agent boids under sensor-driven MLP, associative Hopfield controlling generative SVG, and evolutionary policies sampling living DOM cards. Core novel combination is a multi-tab shared persistent lattice field (BroadcastChannel + IndexedDB) whose evolution is modulated by a local RNN that sees only the field (not sensors), with sensors as exogenous injectors and sealed weight transfer via broadcast hash rather than physical collision. Not substrate particle simulations, not direct sensor-to-policy, not proximity genome exchange.

## Architecture
- Single index.html, offline after load.
- 32×32 Float32 lattice (activation, phase) in a canvas visualization (heat + flow arrows).
- Local Elman RNN: input 9 (3×3 neighborhood) → hidden 16 → output 3 (emit x, y, strength).
- Sensors: DeviceOrientationEvent / DeviceMotionEvent inject Gaussian events; pointer move injects at cursor.
- BroadcastChannel `f549-lattice`: periodic lattice delta + optional sealed weight package.
- IndexedDB `f549-shared-lattice` + `f549-rnn-weights`: restore on load; Seal button persists current best.
- 4–6 absolute DOM “observer cards” that display local lattice stats and can be dragged to set preferred observation windows (affects RNN input sampling).
- Fallback: no WebGPU; pure JS + Canvas2D. No WebXR required.

## Expected outcome
Runnable prototype in which tilting/moving the device or pointer injects visible events into the lattice; the RNN begins emitting reinforcing patterns that propagate and stabilize across tabs (open two tabs to see sync); Seal stores the lattice + weights; receiving a sealed broadcast from another tab can improve local fitness. Works offline on desktop (pointer) and mobile (orientation).

## Mechanics
1. Initialize random lattice + RNN (or load from IndexedDB); open BroadcastChannel.
2. Each frame: sample sensor or pointer → inject event → RNN forward on neighborhood → emit if strength > threshold → diffuse/decay lattice → render canvas → update observer cards → broadcast delta every ~200 ms.
3. On receiving sealed package: verify hash, compare fitness, optionally adopt.
4. Seal button: serialize lattice + weights + hash to IndexedDB and broadcast.
5. On load: restore if present; request orientation permission on first interaction.

## Failure modes
- BroadcastChannel / IndexedDB unavailable: single-tab session-only memory remains interactive.
- DeviceOrientation permission denied or desktop: pointer-velocity proxy injection path.
- RNN outputs extreme: clamp emit strength and positions.
- Lattice blow-up: hard clamp activations to [-1,1], exponential decay.
- Cross-tab desync: last-write-wins with timestamp; visual indicator of peer count.

## Files
- drafts/F549-broadcast-rnn-shared-causal-lattice-mind/SPEC.md
- drafts/F549-broadcast-rnn-shared-causal-lattice-mind/index.html

## V01D landing
Shared causal lattice stage under void-live-deploy/skills/broadcast-rnn-lattice.js; test asserts pointer injection → lattice activation change, BroadcastChannel message received in second context, and Seal restores state after reload.
