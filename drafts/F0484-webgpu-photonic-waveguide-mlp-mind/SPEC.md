# F0484 WebGPU Photonic Waveguide MLP Mind

## Concept
A 2D photonic-like waveguide is simulated on a discrete grid via the scalar wave equation (variable local speed of light set by a dielectric map). A population of tiny local MLPs (4→8→4) each controls a quadrant of the dielectric (speed) field. The pointer injects causal wave sources. Four fixed DOM receiver cards accumulate light intensity; fitness is total received energy plus coverage of the pointer. Stronger agents seal and transfer a mutated genome to weaker ones on proximity. Full state (dielectric, weights, field snapshot) seals to IndexedDB. WebGPU compute for the wave step with Canvas2D finite-difference fallback. Fully offline after load.

## Novelty
Leaves the recent cluster of wavelet-MLP DOM morphs (F0483), softbody policy meshes, speech-seeded multi-portal NCA, orientation-MLP Voronoi territories, motion-residual crystal lattices, acoustic NCA weavers, SDF recurrent reasoners, spectral cloth, Bayesian wave collapse, and Hopfield trajectory memory. Core novel combination is a WebGPU (or Canvas) photonic waveguide (variable-c wave equation) whose dielectric map is controlled by competing local MLPs, with DOM cards acting as physical light receivers that morph under received intensity and gate sealed genome transfer. Not pure NCA, not softbody, not spectral residual, not orientation field, not pointer-history force, not attention lattice.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Wave: 64×64 grid; finite-difference time-domain step (WebGPU compute or JS fallback)
- Dielectric: speed field c(x,y) set by 4 MLP agents, one per quadrant
- Policy: each MLP input = local intensity stats + pointer relative; output = 4 dielectric deltas
- Receivers: 4 DOM cards at grid corners/edges; CSS custom props (glow, scale, hue) driven by cell intensity
- Fitness: integrated intensity at receiver cells + inverse distance to pointer
- Transfer: proximity of agent “centers” seals leader genome, mutates, assigns to weak
- IndexedDB: seal/restore dielectric map, weights, field snapshot
- No external dependencies

## Expected Outcome
Move/click the pointer: waves propagate, MLPs reshape the dielectric to guide light toward receivers. Cards glow and scale with received light. Evolution improves guiding. Seal restores the living waveguide and controllers. Works offline; graceful Canvas2D path without WebGPU.

## Failure Modes
- WebGPU unavailable or compute limits (Canvas2D fallback).
- Grid too large causes jank (keep ≤64²).
- IndexedDB private mode or quota.
- Policy collapse if mutation rate is too low or fitness noisy.

## Interactivity
Move pointer (or touch) to inject sources. Cards morph under light. Click empty space to nucleate a temporary source. S to seal, R to restore. Buttons to reset field or toggle agent count.

## Building Blocks
Larger FDTD grids, WebXR hand as source injector, OPFS for full field history, multi-user waveguide fragment exchange, true 3D photonic crystal.

## V01D Landing
skills/mini/photonic-waveguide-mlp-mind; testable via pointer → card glow rise, contact → genome transfer, seal → IDB restore of dielectric + genomes.

## Files
drafts/F0484-webgpu-photonic-waveguide-mlp-mind/SPEC.md
drafts/F0484-webgpu-photonic-waveguide-mlp-mind/index.html
