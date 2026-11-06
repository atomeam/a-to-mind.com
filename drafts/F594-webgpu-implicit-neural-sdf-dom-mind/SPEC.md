# F594: WebGPU Implicit Neural SDF DOM Mind

## Concept
A novel hybrid spatial interface for The Verse canvas: an implicit neural signed-distance field (SDF) of a "mind volume" that is raymarched in WebGPU for a live volumetric visualization, while a parallel JS evaluation of the same MLP positions and orients a lattice of DOM thought-nodes projected onto the evolving surface.

User clicks and pointer trajectories act as positive/negative spatial samples that locally evolve the MLP weights via a simple gradient-free or low-rank update, causing the implicit geometry and the attached DOM elements to morph in real time. No external models; everything is local and browser-native.

## Architecture
- **WebGPU raymarcher**: Fragment/compute hybrid or full-screen quad with a WGSL raymarcher evaluating a 2-hidden-layer MLP SDF (input: xyz, output: distance). Uniforms hold the small weight matrices (~ few hundred floats).
- **MLP SDF**: Tiny network (e.g., 3→16→16→1) with fixed random-init weights that are mutated or updated in JS based on sampled points.
- **DOM projection**: 12–20 absolutely positioned cards in a perspective scene. Each frame, evaluate SDF + gradient (or nearest surface point) in JS at candidate positions to place nodes on or near the surface, applying CSS transforms.
- **Local evolution**: Pointer clicks inject sample points (desired SDF ≈ 0 for "surface", or negative for interior). Every few seconds a small evolutionary or residual update adjusts a subset of weights to better fit recent samples. Fitness is reconstruction error on held samples.
- **Interaction**: Click to seed a thought-node or to sculpt the field; drag to paint samples. Optional keyboard to freeze or reset.

## Expected Outcome
- A living, morphing implicit volume rendered via WebGPU that responds to user sculpting.
- DOM nodes that "stick" to and drift with the evolving surface, creating a spatial mind of attached ideas.
- Fully offline, no network, no large model downloads.
- Fallback to Canvas2D distance-field approximation if WebGPU is unavailable.

## Mechanics
1. Initialize random MLP weights; upload to GPU uniform.
2. Each frame: raymarch SDF for background, JS-evaluate surface points for DOM placement.
3. On pointer events: record (position, target-distance) samples.
4. Periodically: run local weight update (mutation + selection or simple LMS-like on readout), re-upload weights.
5. Nodes display short labels; clicking one focuses it and biases nearby field.

## Failure Modes
- WebGPU unsupported: Canvas2D iso-surface or particle approx takes over.
- High raymarch cost on mobile: reduce steps or resolution; or pause raymarch when idle.
- Weight explosion: clamp weights, add decay, or periodic reset of unused dimensions.
- JS MLP eval too slow for many nodes: evaluate only every N frames or use a coarse grid.

## Novelty Check
Not a variation of prior F- drafts (gyro-audio warp, reservoir, NCA, fluid, boids, attention lattices, SPH, etc.). This is the first combination of an implicit neural SDF raymarched in WebGPU with online local weight evolution from user spatial samples and DOM nodes projected onto the resulting surface.

## Files
- index.html (self-contained runnable prototype)
- SPEC.md (this file)
