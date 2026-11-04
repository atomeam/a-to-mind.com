# F0486 Spectral Vortex Policy Mind

## Concept
Microphone (or synthetic oscillator fallback) spectral features (centroid, flux, energy) drive a local tiny policy MLP whose outputs set parameters of a WebGPU compute 2D vortex/curl field (Canvas2D Euler particle fallback). Living DOM portals are spawned and bound to detected vortex cores; their CSS transforms, hue, and glow track local vorticity and energy. High sustained vorticity seals the current policy genome and transfers a mutated copy to a weaker portal on proximity. Full state (particles/velocities, MLP weights, portal bindings) seals to IndexedDB. Fully offline after load.

## Novelty
Leaves the recent cluster of WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi, motion-residual crystals, acoustic NCA weavers, and SDF recurrent reasoners. Core novel combination is spectral audio features driving an evolving local policy MLP that controls a previously unused 2D vortex/curl lattice kernel, with vorticity-gated sealed genome transfer onto living vortex-bound DOM portals. Not Kuramoto phases, not softbody springs, not wavelet, not photonic, not NCA, not residual predictor, not pure attention.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Input: Web Audio AnalyserNode (mic or oscillator) → spectral centroid, flux, energy as MLP input
- Policy: 3-layer tiny MLP (pure JS, 8-12-4); outputs vortex strength, decay, injection rate
- Field: 64×64 velocity/curl lattice; WebGPU compute step or JS Euler particles
- Portals: up to 6 DOM cards; bind to high-curl cores; scale/hue/glow from local vorticity
- Transfer: when local |curl| > threshold and portals near, seal leader weights, mutate, assign to weak
- IndexedDB: seal/restore field state, MLP weights, portal params
- CSS custom properties from global energy for chrome morph
- No external dependencies

## Expected Outcome
Speak or play sound: spectral features evolve the policy; vortices form and portals lock to them, morphing with strength. Clicks reward a portal (update weights). Seal restores living field + policy. Works offline; graceful Canvas2D path without WebGPU or mic permission.

## Failure Modes
- Mic permission denied → synthetic oscillator.
- WebGPU unavailable (Canvas2D particle fallback).
- Large lattice causes jank (keep ≤64²).
- IndexedDB private mode or quota.
- Audio context suspended until user gesture.

## Interactivity
Allow mic or use synthetic tone. Portals morph with vortex strength. Click a portal to reward and evolve policy. S to seal, R to restore. Buttons to reset field or toggle injection.

## Building Blocks
Larger WebGPU Navier-Stokes, multi-band spectral reservoirs, WebXR hand as additional force injectors, OPFS full trajectory history.

## V01D Landing
skills/mini/spectral-vortex-policy-mind; testable via spectral features → vorticity rise + portal morph, reward → weight update, seal → IDB restore of field + MLP.

## Files
drafts/F0486-spectral-vortex-policy-mind/SPEC.md
drafts/F0486-spectral-vortex-policy-mind/index.html
