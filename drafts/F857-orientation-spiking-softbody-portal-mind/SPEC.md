# F857-orientation-spiking-softbody-portal-mind

**Ledger ID**: F-857  
**Slug**: orientation-spiking-softbody-portal-mind  
**Date**: 2026-11-19  
**Status**: frontier prototype  

## Concept
A living softbody of Verlet-integrated particles connected by distance constraints forms a deformable "mind mass" on The Verse canvas. A population of local LIF (leaky integrate-and-fire) spiking neurons receives DeviceOrientation residual (or pointer-velocity residual) as input current. Spike events inject localized forces into the softbody and modulate global stiffness. Absolute-positioned DOM Verse portals are bound to a subset of surface particles and follow their motion. User clicks on portals deliver reward that drives simple reward-modulated synaptic plasticity on the spiking network. Highest-reward configurations seal synaptic weights + rest lengths to IndexedDB and broadcast via BroadcastChannel. Canvas2D renders the softbody; progressive WebGPU compute path noted for parallel force evaluation.

## Novelty
Leaves the cluster of pure spiking portal swarms (F842), evolutionary softbodies, Verlet chains (F856), orientation MLPs, and continuum fields (Lenia, Cahn-Hilliard, SPH). Core novel combination is a plastic spiking neural population causally driving and being rewarded by a physical softbody of living DOM portals. Not a reactive controller, not a field kernel, not genome evolution of parameters, not hand-tracked chain.

## Architecture
- Single self-contained index.html
- 40–60 particles, Verlet + distance constraints (Canvas2D)
- 16 LIF neurons, pure JS, input from orientation residual or pointer Δ
- Spikes → force injection + stiffness delta
- 5 DOM portals bound to particles
- Reward-modulated weight update on click
- IndexedDB `verse-f857-spiking-softbody`; BroadcastChannel `f857-genome`
- Fallbacks: no orientation → pointer residual; no IDB → session memory

## Expected outcome
Open: a pulsing softbody blob with attached portals. Tilt or move pointer: spikes fire, body deforms and stiffens. Click portals: reward, weights adapt, behavior shifts. Seal preserves the current plastic genome across reloads/tabs. Interactive spiking-embodied spatial mind.

## Failure modes
No DeviceOrientation → pointer-only residual. High particle count → constraint iteration cap. IDB blocked → in-memory only. Spike storm → refractory clamp.

## Building blocks
Reusable pure-JS LIF + reward-modulated plasticity, softbody Verlet constraint solver, spike-to-force binding, sealed synaptic + rest-length genome. Enables future hybrid spiking-softbody or WebGPU PBD on Verse.

Void is now Verse everywhere.

**Files**: drafts/F857-orientation-spiking-softbody-portal-mind/SPEC.md, drafts/F857-orientation-spiking-softbody-portal-mind/index.html
