# F485 — WebGPU Lattice Boltzmann fluid with closed-loop Web Audio feedback and local MLP agents

## Concept
A discrete 2D Lattice Boltzmann Method (LBM) fluid simulation runs on a WebGPU compute grid (with Canvas2D finite-difference fallback). A small population of tiny local MLPs each controls a force-injection and boundary-porosity patch. Selected probe cells drive a bank of Web Audio oscillators (frequency and gain). An AnalyserNode’s live FFT bins are concatenated into the MLP inputs, closing a physical → sonic → policy feedback loop. Agents compete on a fitness that rewards both fluid energy at probes and spectral richness of the resulting soundscape. On proximity contact the stronger agent seals and transfers a mutated genome to the weaker agent. DOM facet cards morph (scale, hue, blur, glow) from local density and audio energy. Full state (LBM moments, weights, audio param snapshot) seals to IndexedDB for offline restore. Pointer/touch is the primary causal input (add obstacles or sources). Fully offline after first load.

## Novelty
Leaves the recent cluster of photonic-waveguide MLP minds (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi territories, and all prior fluid or spectral work. Core novel combination is a WebGPU (or Canvas) Lattice Boltzmann fluid whose force/boundary fields are controlled by competing local MLPs that receive closed-loop feedback from a live Web Audio oscillator bank driven by the fluid itself. Not pure NCA, not softbody mass-spring, not photonic wave equation, not spectral residual without fluid, not orientation wind, not pointer-history force.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- LBM: 48×48 grid; D2Q9 Lattice Boltzmann step (WebGPU compute or JS fallback)
- Policy: population of 4 tiny MLPs (8→6→4); inputs = local density/velocity stats + 4 FFT bins; outputs = force vector + porosity delta
- Audio: 4 oscillators + AnalyserNode; probe cells map to frequency/gain
- Facets: 4 DOM cards; CSS custom properties driven by probe density and audio energy
- Fitness: integrated kinetic energy at probes + spectral centroid richness
- Transfer: proximity of agent centers seals leader genome, mutates, assigns to weak agent
- IndexedDB: seal/restore moments, weights, audio snapshot
- No external dependencies

## Expected Outcome
Move/click the pointer: fluid evolves, MLPs reshape forces and boundaries to enrich the soundscape. Cards glow and scale with density and audio energy. Evolution improves guiding and spectral variety. Seal restores the living fluid, controllers, and audio parameters. Works offline; graceful Canvas2D path without WebGPU. Audio context resumes on first gesture.

## Failure Modes
- WebGPU unavailable or compute limits (Canvas2D fallback).
- AudioContext suspended until user gesture (standard autoplay policy).
- Grid too large causes jank (keep ≤48²).
- IndexedDB private mode or quota.
- Policy collapse if mutation rate is too low or fitness noisy.
- AnalyserNode zero-data on some browsers until audio is playing.

## Interactivity
Move pointer (or touch) to inject sources or drag obstacles. Cards morph under fluid and sound. Click empty space to nucleate a temporary source. S to seal, R to restore. Buttons to reset field or toggle agent count. Audio starts on first interaction.

## Building Blocks
Larger LBM grids, WebXR hand as force injector, OPFS for full moment history, multi-user fluid fragment exchange, true 3D LBM, AudioWorklet for custom synthesis.

## V01D Landing
skills/mini/lbm-audio-feedback-mind; testable via pointer → card glow + audible pitch rise, contact → genome transfer, seal → IDB restore of moments + genomes.

## Files
drafts/F485-webgpu-lbm-audio-feedback-mind/SPEC.md
drafts/F485-webgpu-lbm-audio-feedback-mind/index.html
