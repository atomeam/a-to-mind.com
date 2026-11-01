# F493-webgpu-implicit-sculptor-mind

**Ledger ID**: F-493  
**Slug**: webgpu-implicit-sculptor-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of WebXR hand-constraint MLPs (F492), BroadcastChannel genome swarms (F491), causal Bayesian lattices (F490), mic-spectral reservoirs (F489), orientation reservoirs / DOM auctions (F486–F488), attention-cluster DOM (F487). Explicitly leaves lattice/belief, reservoir/RNN, spectral audio, hand/physics constraint, genome-auction, and attention-swarm axes.

## Concept
A local evolutionary sculptor mind (population of genomes in a Web Worker) continuously mutates and selects parameters for a parametric signed-distance field (blended spheres + boxes). Particles sample and are attracted to the zero-level set of the current SDF, producing a living implicit surface. User pointer density and dwell time provide fitness; visual diversity (particle spread + color entropy) is a secondary objective. High-fitness genomes can be sealed as SHA-256 form memories to IndexedDB and later restored to bias the population. Surrounding Verse canvas chrome (border radius, opacity of overlay panels) morphs with the mind’s diversity and fitness. Fully self-contained, offline after first load. WebGPU particle compute path is the natural next building block; prototype uses Canvas2D for universal runnability.

## Why novel
- Not a lattice of cards, not Bayesian message passing, not reservoir/Elman, not spectral bins, not WebXR hand forces into constraints, not genome auctions on DOM AABB, not self-attention particle clusters.
- Core novel combination is an evolutionary generative implicit surface (SDF parameters as genes) sampled by attracted particles, with user-interaction fitness, sealed form-memory transfer, and UI chrome that physically responds to the sculptor’s internal diversity.
- Under-explored axis: generative procedural geometry driven by local evolutionary AI + particle embodiment + sealed attractor memories.

## Prototype
Single self-contained `index.html`. Interactive offline. Move pointer to seed fitness on the surface. Particles form and morph the implicit shape. Click or press S to seal current high-fitness genome. R restores last seal. Diversity and fitness drive subtle chrome morphing.

## Failure modes
- IndexedDB unavailable or private mode: seals fail silently (in-memory only).
- Very low-end devices: particle count capped (~400); evolution step rate reduced.
- No pointer: synthetic random fitness drive keeps the mind alive.
- SDF evaluation cost: limited primitive count (≤8).

## Building blocks for next
Evolutionary genomes controlling SDF/implicit parameters; particle sampling of zero-level sets; sealed form memories of generative state; UI chrome coupled to internal mind metrics. Next: WebGPU compute for parallel SDF evaluation + particle update; WebXR raycast fitness; multi-tab BroadcastChannel of sealed forms.

## V01D landing
skills/mini/webgpu-implicit-sculptor-mind; testable via pointer → particle surface morphs, seal → hash + IDB, restore → prior form reappears, chrome radius changes with diversity.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- SDF: 4–6 blended primitives (spheres/boxes) whose positions, radii, blend weights are genes
- Particles: ~300–400 Canvas2D points attracted to SDF=0 via gradient descent steps
- Evolution: Web Worker runs simple GA (mutation + tournament selection) on genome population of 16; fitness = user density near particles + entropy of particle positions
- Embodiment: particle positions + hue from local SDF gradient / age
- UI morph: CSS custom properties on root driven by diversity/fitness
- Seal: SHA-256 of serialized genome stored in IndexedDB; restore injects it into population
- No external dependencies, no network

## Expected Outcome
Interactive living implicit surface that evolves under user attention, forms coherent shapes, offers sealed recallable forms, and subtly warps surrounding canvas chrome. Runnable offline with pointer or synthetic drive.

## Mechanics
- Pointer history (last N positions) → local fitness injection near particles
- GA step every ~500 ms in Worker
- Particle update ~30–60 Hz toward SDF zero
- Diversity metric → CSS border-radius / panel opacity
- Click or key S seals; R restores
