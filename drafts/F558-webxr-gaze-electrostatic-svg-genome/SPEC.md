# Frontier Engine F558: WebXR Gaze Electrostatic SVG Genome Swarm

**Slug**: `webxr-gaze-electrostatic-svg-genome`  
**Ledger ID**: F-558  
**Date**: 2026-11-04  

**Branch from**: Recent cluster of IntersectionObserver evolutionary particle attention (F557), WebXR hand magnetic Hopfield DOM (F556), attention-map SDF portals (F555), competitive MLP portals, OPFS graphs, and prior sensor-driven particle/NCA/DOM systems. Explicitly leaves IntersectionObserver, Hopfield associative memory, WebGPU SDF/raymarch, particle swarms, continuous field kernels, and proximity or collision genome gates.

## Concept
True WebXR gaze (with robust pointer + DeviceOrientation fallback) feeds a local tiny MLP that predicts the next gaze point. A swarm of SVG circle agents carries signed charges and interacts via novel Coulomb electrostatic forces (not gravity, not magnetic inverse-square from joints, not softbody springs). Gaze acts as an external field source. When the predicted or actual gaze dwells on an agent above a threshold, that agent seals a fragment of the current MLP weights (genome) and transfers it to other agents via BroadcastChannel, mutating slightly; best persists in IndexedDB. Agents compete by dwell-time fitness. Fully offline single-file prototype. SVG primary embodiment (not Canvas2D particles or absolute DOM cards as primary agents).

## Novelty
Leaves the dominant recent clusters of observer-driven particle resonance, hand-tracked magnetic DOM + Hopfield, attention-sculpted SDF volumes, and WebGPU kernel + MLP hybrids. Core novel combination is real (or simulated) WebXR gaze as causal input to a predictive MLP whose outputs modulate an electrostatic multi-agent SVG swarm, with dwell-gated sealed genome transfer over a shared field. Physics is pure Coulomb between charged SVG agents; embodiment is vector SVG, not raster particles or DOM layout morphs. Not residual predictors on pointer history, not NCA, not spectral residuals.

## Architecture
- Single `index.html`.
- SVG full-window with 12–16 charged circle agents (radius, charge, position, velocity).
- Local tiny MLP (2-layer, ~20 weights) takes last 4 gaze deltas → predicts next delta; updates via simple reward on dwell accuracy.
- Electrostatic: each pair computes F = k * q1*q2 / r^2 * unit vector; integrate Verlet-like; boundary bounce.
- Gaze source: WebXR `viewer` reference space + gaze if available; else pointer position; DeviceOrientation tilts field slightly.
- Dwell: if gaze distance to agent < radius for >800ms, trigger seal/transfer of weight slice (simple hash check).
- IndexedDB `f558-gaze-electro`; BroadcastChannel `f558-genome`.
- Seal button forces full persist. Clear XR enter button when `navigator.xr` present.
- Fallback: always interactive with pointer.

## Expected outcome
Runnable prototype in which moving the pointer (or entering WebXR and gazing) causes charged SVG agents to repel/attract according to Coulomb law, the MLP prediction is visible as a ghost target, dwell on an agent transfers a sealed genome fragment (visible as hue or radius shift), and Seal + reload restores the best weights and agent charges. Offline-capable. Progressive if WebXR or IndexedDB blocked.

## Mechanics
1. Initialize random MLP weights or load from IndexedDB; spawn agents with random charges.
2. On frame: sample gaze (XR or pointer); run MLP prediction; apply electrostatic forces + gaze field; integrate positions; update SVG.
3. Track dwell timers; on threshold, hash weight prefix, post to BroadcastChannel, mutate local.
4. Reward MLP slightly if prediction close to actual next sample.
5. Seal persists weights + agent states.

## Failure modes
- No WebXR: full pointer fallback remains complete.
- IndexedDB quota or blocked: session-only.
- Too many agents: fixed at 14.
- Low FPS: reduce force updates.

## Files
- drafts/F558-webxr-gaze-electrostatic-svg-genome/SPEC.md
- drafts/F558-webxr-gaze-electrostatic-svg-genome/index.html

## V01D landing
WebXR gaze electrostatic SVG swarm stage under `void-live-deploy/skills/webxr-gaze-electro-svg.js`; test asserts pointer motion produces agent displacement under Coulomb, dwell triggers a genome post (BroadcastChannel message), and reload restores at least one weight.
