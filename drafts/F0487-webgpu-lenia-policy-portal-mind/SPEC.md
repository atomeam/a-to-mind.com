# F0487 WebGPU Lenia-Policy Portal Mind

## Concept
A continuous Lenia cellular automaton (multi-kernel growth field) running primarily in a WebGPU compute shader (Canvas2D fallback). A local pure-JS policy MLP continuously reads reduced field statistics (peak count, ring coherence, total mass, growth variance) and outputs modulation parameters for Lenia kernels plus spatial control signals. Living DOM portals orbit and morph in response to emergent Lenia organisms, physically rearranging the page layout. Pointer drag or DeviceOrientation injects growth seeds. High coherence / low residual seals the combined genome (kernel radii + MLP weights) into IndexedDB. The Verse canvas gains a continuous, multi-scale, organism-forming substrate that a local mind both interprets and steers, with real DOM elements as embodied sensors/actuators.

## Novelty
Leaves the recent cluster of spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi, motion-residual crystals, acoustic NCA weavers, and SDF recurrent reasoners. Core novel combination is Lenia’s continuous, multi-kernel, ring-forming growth dynamics (not discrete NCA, not Gray-Scott RD, not vortex curl, not mass-spring, not wavelet) as the embodied substrate of an evolving local policy MLP, with DOM portals physically bound to emergent organism centroids and coherence-gated sealed genome transfer. Not particles, not attention lattices, not residual predictors on motion, not pure spectral audio.

## Architecture
- WebGPU compute pipeline (or Canvas2D) maintains a 128×128 float field and applies Lenia kernel convolutions + growth function each step.
- Main-thread MLP (2 hidden layers, ~20 weights) takes 8-dim field stats → 6 outputs (kernel radius scale, growth offset, portal attraction strength, hue shift, scale bias, residual target).
- Portals are absolute-positioned DOM divs whose transform/scale/filter are driven by nearest Lenia peak positions and MLP outputs.
- Seal button hashes and stores genome + current field downsample to IndexedDB under key `f0487-lenia-genome`.
- User seed injection via pointer or orientation events.

## Expected outcome
Runnable single-file prototype that demonstrates continuous Lenia organisms forming, a local mind steering them, and living portals physically following the organisms. Fallback works without WebGPU. Seal persists across reloads.

## Mechanics
1. Initialize random or seeded field.
2. Each frame: GPU/CPU step Lenia, reduce stats, MLP forward, update portal positions, render.
3. Pointer injects positive growth; orientation adds bias.
4. Coherence > threshold enables Seal.
5. Seal writes to IndexedDB; reload restores.

## Files
drafts/F0487-webgpu-lenia-policy-portal-mind/SPEC.md
drafts/F0487-webgpu-lenia-policy-portal-mind/index.html

## V01D landing
Spatial continuous-organism stage skill under void-live-deploy/skills/lenia-policy-portal.js; test asserts field-stat → MLP → portal transform and seal hash integrity.
