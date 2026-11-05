# Frontier Engine F556: WebXR Hand-Tracked Magnetic DOM Swarm with Hopfield Pose Memory

**Slug**: `webxr-hand-magnetic-dom-hopfield`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of WebGPU SDF/attention portals (F555), competitive MLP DOM agents (F554), OPFS causal audio graphs (F553), WebXR hand volumetric NCA (F552), and prior Hopfield SVG (F545). Explicitly leaves WebGPU continuous kernels, per-agent MLPs, OPFS stores, NCA volumes, and DeviceMotion SVG morphs.

## Concept
True WebXR hand tracking (with pointer + DeviceOrientation fallback) drives a local Hopfield associative memory of binary hand-pose patterns. Recalled poses modulate the magnetic poles of a swarm of absolute-positioned DOM cards that are physically attracted to or repelled by projected hand joint positions. Pinch (or double-click) on a card seals a fragment of the current Hopfield weight matrix into that card’s genome and broadcasts it. All state persists in IndexedDB. Fully offline after load, single self-contained file. No WebGPU, no particle kernels, no residual predictors.

## Novelty
Leaves the dominant recent clusters of WebGPU physics kernels coupled to MLPs, competitive independent portals, spatial-audio graphs, and volumetric hand sculpting. Core novel combination is real WebXR hand joints as the causal imprinting and magnetic source for a classical Hopfield pose memory whose recalled attractors continuously modulate living DOM card magnetic charges and positions in a hybrid 3D/2D embodiment we have not built. Genome transfer is pinch-gated and sealed. Not canvas simulations, not softbody springs, not orientation RNNs.

## Architecture
- Single `index.html`.
- Hopfield network (N=48 binary units) storing up to 6 hand-pose patterns via Hebbian weights.
- 8 absolute DOM `.card` elements with magnetic charge (positive/negative) and position.
- WebXR: on supported devices, `navigator.xr.requestSession('immersive-vr' or 'immersive-ar')` with `requiredFeatures: ['hand-tracking']`. Hand joints projected via reference space; pinch detected by joint distance.
- Fallback: pointer position acts as primary joint; DeviceOrientation tilts the magnetic field; double-click seals.
- Magnetic force: each card feels inverse-square force from active joints scaled by recalled-pose charge.
- IndexedDB `f556-hopfield-dom`.
- BroadcastChannel `f556-seal` for multi-tab genome fragments.
- Seal button forces full persist.

## Expected outcome
Runnable prototype in which moving the pointer (or real WebXR hands) imprints and recalls poses that change card magnetic behavior; cards visibly swarm toward or away from the “hand”; pinching/double-clicking a card transfers a sealed weight fragment (visible hue/scale shift); Seal + reload restores memory. Offline-capable. Clear XR enter button when available.

## Mechanics
1. Initialize random Hopfield or load from IndexedDB.
2. On frame: if XR, sample hand joints; else use pointer + orientation. Threshold pose bits, optionally imprint.
3. Recall nearest attractor; set global magnetic polarity from recall energy.
4. Integrate magnetic forces on cards; update DOM transforms.
5. On pinch/double-click over card: copy sealed weight slice to card genome, broadcast.
6. Seal persists weights + card states.

## Failure modes
- No WebXR / no hand-tracking: full pointer + orientation fallback remains interactive.
- Hopfield capacity: oldest pattern fades.
- Too many cards: fixed at 8.
- IndexedDB blocked: session memory only.

## Files
- drafts/F556-webxr-hand-magnetic-dom-hopfield/SPEC.md
- drafts/F556-webxr-hand-magnetic-dom-hopfield/index.html

## V01D landing
WebXR magnetic DOM Hopfield stage under void-live-deploy/skills/webxr-hand-magnetic-hopfield.js; test asserts pointer motion produces card displacement, double-click seals a fragment (hash changes), and reload restores at least one pattern.
