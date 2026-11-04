# Frontier Engine F-544: WebGPU SDF Evolutionary DOM Coverage Mind

## Concept
A WebGPU raymarched signed-distance-field (SDF) surface whose shape parameters are evolved in real time by a local genetic algorithm. Fitness is measured by the fraction of live DOM Verse cards covered by the projected surface (screen-space occlusion sampling). User pointer/touch carves the SDF in real time (additive/subtractive spheres). Web Audio oscillators sonify fitness and mutation rate. Sealed high-fitness genomes persist to IndexedDB and broadcast across tabs. Branches away from the recent discrete particle / SPH / lattice-gas / RNN-orientation / attention-vortex cluster into continuous implicit surfaces steered by evolutionary search fitnessed directly against living DOM layout.

## Novelty
- First WebGPU raymarched SDF on the Verse canvas whose parameters are under local evolutionary control.
- Fitness is purely geometric DOM coverage (no orientation, no SPH density, no residual walks).
- Real-time user carving of the implicit surface coexists with the evolutionary search.
- Audio feedback loop closes the mind without external models.

## Architecture
- Single index.html, offline after load.
- WebGPU: full-screen raymarch of a compound SDF (several ellipsoids + carved spheres). Parameters (centers, radii, strengths) encoded as genome.
- GA: population of 8 genomes; tournament selection; mutation; fitness = average coverage of 5 absolute DOM cards sampled via 8x8 grid reads (or approximate projection).
- Pointer: injects temporary carve spheres that decay; also biases mutation direction.
- Web Audio: fitness maps to oscillator frequency; mutation to noise burst.
- IndexedDB `f544-sdf-genome`; BroadcastChannel `f544-genome` with simple hash check.
- Fallback: Canvas2D metaballs if WebGPU unavailable.

## Expected outcome
Runnable prototype in which the surface grows, shrinks, and migrates to cover the DOM cards; user can carve holes or protrusions that the GA then tries to restore or exploit; Seal freezes a high-coverage genome for other tabs.

## Mechanics
1. Initialize random genome population; load best from IndexedDB.
2. Each frame: raymarch current best genome + active carves; sample coverage; evolve (select/mutate/crossover every N frames); update audio.
3. Pointer events add decaying carve spheres.
4. Seal button writes best genome + fitness + hash.
5. On BroadcastChannel receive: adopt if hash matches and fitness higher.

## Failure modes
- WebGPU unavailable: Canvas2D fallback.
- Coverage sampling expensive: low-res grid + every-other-frame.
- Genome explosion: clamp parameters.
- Audio context suspended: resume on first gesture.

## Files
- drafts/F544-webgpu-sdf-evo-dom-coverage-mind/SPEC.md
- drafts/F544-webgpu-sdf-evo-dom-coverage-mind/index.html

## V01D landing
SDF evolutionary coverage stage under void-live-deploy/skills/webgpu-sdf-evo-coverage.js; test asserts pointer carve changes surface and BroadcastChannel adopts higher-fitness genome.
