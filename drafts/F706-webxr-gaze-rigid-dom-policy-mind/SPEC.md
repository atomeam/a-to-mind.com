# F706-webxr-gaze-rigid-dom-policy-mind

**Ledger ID**: F-706  
**Date**: 2026-11-12  
**Status**: frontier prototype  

## Concept
Novel hybrid spatial mind: a local tiny MLP policy network (2-layer, ~20 params) continuously maps WebXR gaze direction (or pointer-as-gaze fallback) plus agent state vector into force commands for a swarm of DOM-embodied agents. Agents are CSS 3D transformed cards simulated as rigid-ish bodies with pairwise spring forces, damping, and boundary repulsion. Fitness is accumulated from gaze dwell time + stability residual. Best policy genome seals to IndexedDB and broadcasts via BroadcastChannel for multi-tab competitive adoption.  

Deliberately leaves the recent cluster of continuum WebGPU kernels (Poisson, wave, SDF raymarch, Markov-gesture volumes), residual orientation/MLP/RNN field controllers, pure DOM mosaics, genetic spatial synths, and hand-spring lattices. Core novel combination is gaze-causal local policy driving hybrid DOM rigid-body physics with sealed competitive genome transfer. Not a field continuum, not NCA, not particle k-means, not orientation primary.

## Architecture
- Single index.html, fully self-contained, offline.
- 5–8 DOM cards (absolute, CSS perspective scene).
- Physics: JS Euler integration, Hooke springs between neighbors, velocity damping, wall repulsion.
- Policy: MLP (input: gazeDir[2] + agentPos[2] + vel[2]; hidden 4; output force[2]). Weights are the genome.
- Gaze: navigator.xr if available (session + gaze ray), else mouse position normalized as gaze proxy.
- Fitness: dwell time on agent (ray or proximity) + low energy.
- Persistence: IndexedDB `verse-f706-policy`; BroadcastChannel `f706-genome`.
- Controls: Seal best, Reset, Reward (click).

## Mechanics
1. Init random policy weights, random agent positions.
2. Loop: sample gaze → policy forward → apply forces + springs → integrate → update CSS transforms.
3. Accumulate fitness; on seal or generation, broadcast genome; adopt higher-fitness incoming.
4. Click rewards nearest agent’s policy contribution.

## Expected outcome
Open, tilt/move gaze (or mouse). Cards float and chase/avoid under the living policy. Seal transfers the policy mind across tabs. Works without WebXR (pointer fallback). Fully interactive offline.

## Failure modes
- No WebXR: falls back to pointer gracefully.
- IndexedDB blocked: session-only.
- High agent count: physics stays stable via damping.

## V01D landing
Gaze-policy DOM rigid mind under void-live-deploy/skills/gaze-rigid-dom-policy.js; test asserts gaze vector → policy force → DOM transform update and BroadcastChannel genome adoption.
