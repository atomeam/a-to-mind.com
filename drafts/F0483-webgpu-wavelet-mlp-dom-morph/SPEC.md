# F0483 WebGPU Wavelet MLP DOM Morph Mind

## Concept
A short circular buffer of pointer velocity samples is fed to a WebGPU compute shader that performs a discrete Haar wavelet transform (previously unused kernel). The multi-scale residual coefficients become the sole causal input to a population of tiny local MLPs (4→6→3). Each MLP emits CSS custom-property deltas that physically deform, scale, hue-shift, and reflow a living CSS grid of DOM facet cards. Agents compete by proximity fitness (card coverage + wavelet energy match); on contact the stronger agent seals and transfers a mutated genome. Full state (wavelet buffer, genomes, card bindings) seals to IndexedDB for offline restore. Canvas2D Haar fallback when WebGPU is unavailable. Pointer is the primary causal input; works fully offline after load.

## Novelty
Leaves the recent cluster of softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi territories (F480), motion-residual crystal lattices (F479), speech-vector spatial recall, WebXR gaze Hebbian portals, mic-spectral policy morphs, acoustic NCA weavers, and SDF recurrent reasoners. Core novel combination is a WebGPU discrete wavelet kernel on pointer-velocity history driving evolving local MLPs that control living DOM grid deformation, with proximity-gated sealed genome transfer under multi-scale residual fitness. Not softbody mass-spring, not pure NCA, not Voronoi ownership, not spectral residuals, not orientation RNN, not attention lattices, not pointer-history fields as direct force.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Wavelet: 64-sample circular velocity buffer → WebGPU compute Haar DWT (or Canvas2D fallback)
- Policy: population of 5 tiny MLPs; inputs = 4 wavelet coeffs; outputs = 3 CSS deltas (scale, hue, blur)
- Facets: 6 DOM cards in CSS grid; transforms/CSS vars bound to nearest agent
- Fitness: inverse distance of card center to pointer + wavelet energy correlation
- Transfer: proximity contact seals leader genome, mutates, assigns to weak agent
- IndexedDB: seal/restore buffer, weights, bindings
- CSS custom properties from global wavelet energy for chrome morph
- No external dependencies

## Expected Outcome
Move the pointer: wavelet residuals update, MLPs deform and reflow the living card grid. Evolution improves coverage of the pointer region. Seal restores the living wavelet field and controllers. Works offline; graceful Canvas2D path without WebGPU.

## Failure Modes
- WebGPU unavailable or compute limits (Canvas2D Haar fallback).
- High agent count (>8) or long buffer causes jank.
- IndexedDB private mode or quota.
- Policy collapse if mutation rate is too low.

## Interactivity
Move pointer (or touch) as the causal signal. Cards morph and reflow under agent control. Click empty space to nucleate a new agent. S to seal, R to restore. Buttons to toggle population size or reset buffer.

## Building Blocks
Larger WebGPU wavelet banks, WebXR hand as velocity source, OPFS for full coefficient history, multi-user wavelet fragment exchange.

## V01D Landing
skills/mini/wavelet-mlp-dom-morph; testable via pointer → card deformation rise, contact → genome transfer, seal → IDB restore of buffer + genomes.

## Files
drafts/F0483-webgpu-wavelet-mlp-dom-morph/SPEC.md
drafts/F0483-webgpu-wavelet-mlp-dom-morph/index.html
