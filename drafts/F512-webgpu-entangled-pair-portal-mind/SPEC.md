# F512-webgpu-entangled-pair-portal-mind

**Ledger ID**: F-512  
**Slug**: webgpu-entangled-pair-portal-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of Lorentz magnetic (F511), quantum-walk observer (F510), SPH hand-gaze (F509), spectral resonance (F508), tensegrity (F506), implicit surfaces (F505). Explicitly leaves magnetic forces, quantum walks, SPH, wavefields, softbody, SDFs, phase oscillators, particle MLPs, and prior portal morphs. Introduces simulated entangled portal pairs as the primary mind substrate (previously unused), local causal MLP choosing measurement bases from pointer residual history, hybrid wavefunction-to-DOM collapse embodiment, and sealed entanglement genome.

## Concept
A set of entangled portal pairs (DOM cards) share a simulated Bell-like state. A tiny local causal MLP (pure JS) reads recent pointer trajectory residuals and local "energy" and chooses a measurement basis for one portal. Measuring (clicking or proximity) collapses the pair, instantly morphing the partner portal's CSS (hue, scale, rotation, content density) according to the correlation, while a Canvas2D/WebGPU particle field visualizes the pre-collapse probability density. High residual fitness evolves the entanglement strength and phase. User can drag portals; proximity gates genome transfer between competing agent pairs. Full state (MLP weights, entanglement params, portal poses) seals to IndexedDB. Fully self-contained, offline after first load. Pointer is primary causal input; DeviceOrientation biases the measurement axis.

## Novelty
Leaves all prior continuum physics, particle forces, NCA, spectral, quantum walks, and pure DOM morphs. First use of simulated quantum entanglement between living DOM portals as the causal mind substrate, with local MLP basis selection and hybrid particle visualization of the shared state. Not a quantum walk, not magnetic, not fluid.

## Architecture
- Single index.html (progressive enhancement).
- Canvas2D renders entangled particle cloud (WebGPU compute reserved).
- 4→6→2 residual MLP for basis/strength.
- Absolute-positioned DOM portals, draggable, collapse on interact.
- IndexedDB seal/restore.
- Graceful fallback if no WebGPU.

## Expected outcome
Interactive entangled portals where measuring one instantly affects its pair, particles swirl according to shared amplitude, seal/restore genomes. Runnable offline.

## Mechanics
- Shared complex amplitude per pair, updated by MLP.
- Collapse: project and morph partner CSS.
- Fitness from residual + user clicks.
- Drag portals to reposition; seal button persists.

## Failure modes
- No IndexedDB → in-memory only.
- High particle count → drop rate.
- Numerical issues → clamp amplitudes.

## V01D landing
Skill under void-live-deploy/skills/entangled-portal-mind. Test: click one portal morphs partner, seal hash integrity.

Files: SPEC.md, index.html
