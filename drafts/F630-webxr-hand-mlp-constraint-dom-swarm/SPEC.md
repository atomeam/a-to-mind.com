# F630 WebXR Hand-Tracked Constraint DOM Swarm Mind

**Ledger ID**: F-630 (frontier series)

**Slug**: webxr-hand-mlp-constraint-dom-swarm

**Date**: 2026-11-08

**Branch from**: Recent cluster of practical utility tools (bill splitters, fuel cost calculators, paint/flooring estimators, trip computers — F612–F629) and residual orientation-RNN/MLP intent fields or card weavers (F623, F618, F629-orientation). Explicitly leaves Canvas2D preview dashboards, localStorage calculators, residual predictors, orientation RNNs, attention lattices, NCA, spectral residuals, softbody, and k-means particles.

## Concept
True WebXR hand tracking (with robust pointer + DeviceOrientation fallback) provides joint positions as causal input to a local tiny MLP. The MLP outputs rest-lengths and stiffnesses for a set of virtual spring constraints connecting a swarm of absolute-positioned living DOM cards. Cards are multi-agent physical embodiments that compete via proximity fitness; on high fitness a sealed fragment of the MLP genome transfers over BroadcastChannel. State persists in IndexedDB. Fully offline single-file prototype.

## Novelty
Leaves the dominant recent practical-tool cluster and prior sensor-driven neural policies on continuum kernels. Core novel combination is real WebXR hand joints as exclusive causal input to a feed-forward MLP that directly controls constraint parameters of a multi-agent DOM swarm (hybrid physical UI embodiment), with proximity-gated sealed genome transfer over a shared BroadcastChannel + IndexedDB field in an architecture not previously built. Physics is simple Verlet spring constraints between DOM centers (not mass-spring meshes, not Coulomb, not magnetic, not SPH). Not WebGPU continuous fields, not residual predictors, not pure NCA.

## Architecture
- Single index.html.
- 8 absolute DOM cards as agents.
- Local MLP (input: 6 hand joint deltas or pointer velocity; hidden 8; output 4 constraint params).
- Constraint solver: each frame compute forces from rest-lengths set by MLP, integrate positions, update CSS transforms.
- WebXR: requestSession immersive-ar or inline with hand tracking if available; else pointer.
- Fitness: inverse average distance to hand/pointer + click rewards.
- BroadcastChannel 'f630-genome'; IndexedDB 'verse-f630'.
- Seal button persists best weights.

## Expected outcome
Runnable prototype where moving the hand (or pointer) causes DOM cards to form tensioned constellations according to MLP-controlled springs; high-proximity agents transfer sealed genomes (visible as hue shift); Seal + reload restores weights. Offline-capable. Progressive fallback if no WebXR.

## Mechanics
1. Initialize random MLP or load from IDB; spawn cards at random positions.
2. On frame: sample hand joints or pointer; run MLP; apply constraint forces; integrate; update DOM.
3. On proximity threshold, hash weight prefix, post to channel, mutate slightly.
4. Click card rewards local agent.
5. Seal persists.

## Failure modes
- No WebXR/hand tracking: full pointer + orientation fallback remains interactive.
- IndexedDB blocked: session-only.
- Low FPS: reduce agent count.

## Files
- drafts/F630-webxr-hand-mlp-constraint-dom-swarm/SPEC.md
- drafts/F630-webxr-hand-mlp-constraint-dom-swarm/index.html

## V01D landing
WebXR hand constraint DOM swarm skill under void-live-deploy/skills/webxr-hand-constraint-dom.js; test asserts pointer motion produces card displacement under constraints, proximity triggers genome post, and reload restores at least one weight.
