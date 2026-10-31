# F0482 WebGPU Softbody Policy Mind

## Concept
A mass-spring softbody mesh is simulated in a WebGPU compute pass (Canvas2D fallback). A tiny local policy MLP (4→8→4) outputs muscle forces applied to selected control points. The policy evolves under a fitness that rewards the softbody’s center-of-mass tracking or orbiting the user’s pointer. Living DOM facet cards are bound to mesh vertices and CSS-transformed with the deformation, so the UI itself becomes the softbody’s skin. Global chrome morphs with total spring energy and policy fitness. Full state (mesh, genomes, facets) seals to IndexedDB for offline restore. Pointer is the sole primary causal target.

## Novelty
Leaves the recent clusters of speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi territories (F480), motion-residual crystal lattices (F479), speech-vector spatial recall, WebXR gaze Hebbian portals, mic-spectral policy morphs, acoustic NCA weavers, and SDF recurrent reasoners. Core novel combination is a deformable mass-spring softbody as the embodied substrate of a local evolving policy MLP, with real DOM elements physically riding mesh vertices so the page’s layout yields to the agent’s learned control. Not particles, not NCA, not Voronoi ownership, not crystal CA, not residual predictors on motion, not pure attention fields.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Softbody: 8×6 grid of points, nearest-neighbor + diagonal springs; WebGPU compute shader preferred, Canvas2D Verlet fallback
- Policy: population of 6 tiny MLPs; fitness = inverse distance of COM to pointer (or orbit radius error); mutation every ~2 s
- Facets: 5 DOM cards bound to fixed vertex indices; position/rotation/scale from vertex delta
- IndexedDB: seal/restore mesh positions, rest lengths, policy weights, facet bindings
- CSS custom properties from spring energy / fitness for chrome morph
- No external dependencies

## Expected Outcome
Move the pointer: the softbody’s policy learns to drive the mesh toward (or circle) it; facet cards stretch and migrate with the skin. Evolution improves tracking. Seal restores the living softbody and its controller. Works offline; graceful Canvas2D path without WebGPU.

## Failure Modes
- WebGPU unavailable or compute limits (Canvas2D Verlet fallback).
- Too many springs (>200) or high stiffness causes instability or jank.
- IndexedDB private mode or quota.
- Policy collapse if mutation rate is too low.

## Interactivity
Move pointer (or touch) as the target. Softbody and its DOM skin respond. Click empty canvas to reset rest pose. S to seal, R to restore. Buttons to add/remove population members or toggle orbit vs chase mode.

## Building Blocks
Larger WebGPU softbody with collision against page elements, WebXR hand as force input, multi-agent softbody competition, OPFS for full trajectory history.

## V01D Landing
skills/mini/softbody-policy-mind; testable via pointer → tracking fitness rise + facet deformation, seal → IDB restore of mesh + genomes.

## Files
drafts/F0482-webgpu-softbody-policy-mind/SPEC.md
drafts/F0482-webgpu-softbody-policy-mind/index.html
