# F520-webgpu-ca-rule-policy-dom-mind

**Ledger ID**: F-520  
**Slug**: webgpu-ca-rule-policy-dom-mind  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of vector-field policy-gradient DOM (F519), ambient-light metabolic swarm (F501), Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485). Explicitly leaves policy-gradient on continuous fields, metabolic particle swarms, Lenia multi-kernel growth, vortex/curl lattices, Kuramoto phase oscillators, softbody mass-spring, discrete NCA with fixed kernels, wavelet morphs, photonic waveguides, and pure attention or residual predictors.

## Concept
A WebGPU compute (Canvas2D fallback) multi-state cellular automaton lattice whose transition rules are not fixed but continuously mutated by a population of local pure-JS policy MLPs. Each policy observes local CA activity statistics (entropy, activity density, pointer proximity) and outputs rule-bit flips or parameter deltas. A sparse lattice of absolute-positioned Verse portal cards samples nearby CA states and is physically displaced and scaled by local activity gradients; users drag cards to inject state flips that rewrite the field. On high-fitness or manual seal the best evolved rule genome + field hash is written to IndexedDB. Fully self-contained, offline after first load, progressive enhancement.

## Novelty
Core novel combination is online policy-driven mutation of the CA transition rules themselves (previously unused as the primary learning substrate) coupled to a living DOM card lattice that both reads and rewrites the discrete field. Not continuous vector advection, not particle forces, not growth kernels, not oscillator phases, not mass-spring, not NCA with static rules.

## Architecture
- Single `index.html`.
- WebGPU compute shader (or Canvas2D loop) for CA update on a coarse grid.
- Tiny MLPs (3→6→4) on main thread that mutate a shared rule table every N steps via REINFORCE-style or simple reward-modulated updates.
- Absolute DOM cards whose transform/scale/hue derive from bilinear-sampled CA activity; drag maps to grid cells and flips states.
- IndexedDB seal of rule genome + metrics.
- Pointer injects temporary catalyst; optional DeviceOrientation bias.

## Expected outcome
Interactive CA mind: rules evolve to produce interesting patterns, portals rearrange according to activity, drag feedback seeds new states, seal/restore works, runnable offline, graceful fallback.

## Mechanics
- CA: 4-state discrete lattice, rules as lookup or parameterized (survival/birth ranges mutated).
- Policy: MLP maps [local entropy, mean activity, pointer dist] → mutation vector.
- Reward: pattern entropy + portal spatial coverage + user interaction count.
- Cards: position += activity gradient * scale; color from state majority.
- Seal: SHA-256 of serialized rules + weights + recent field hash.

## Failure modes
- WebGPU unavailable → Canvas2D.
- High grid → drop resolution.
- Too many cards → cap at 9.
- IndexedDB blocked → unattested toast.
- Rule collapse → periodic diversity injection.

## Void is now Verse everywhere.
This prototype expands the Verse canvas with a rule-evolving CA mind whose living portals are physical DOM objects that both ride and rewrite the discrete field.

## Files
drafts/F520-webgpu-ca-rule-policy-dom-mind/SPEC.md  
drafts/F520-webgpu-ca-rule-policy-dom-mind/index.html

## V01D landing
Spatial stage skill under void-live-deploy/skills/ca-rule-policy-dom-mind.js; test asserts CA step → card transform sample, policy mutation → rule change, drag → state injection, seal hash integrity.
