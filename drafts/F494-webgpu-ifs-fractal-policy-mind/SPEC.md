# F494-webgpu-ifs-fractal-policy-mind

**Ledger ID**: F-494  
**Slug**: webgpu-ifs-fractal-policy-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of WebGPU implicit SDF sculptors (F493), WebXR hand-constraint MLPs (F492), BroadcastChannel genome swarms (F491), causal Bayesian lattices (F490), mic-spectral reservoirs (F489). Explicitly leaves SDF/implicit surfaces, hand constraints, genome auctions, Bayesian message passing, reservoirs/RNNs, spectral audio, attention swarms, softbody, NCA, LBM, and photonic axes.

## Concept
A population of local policy genomes encodes the affine transforms of an Iterated Function System (IFS). Points are iterated through the IFS maps and rendered as a living fractal attractor on canvas (Canvas2D primary; WebGPU compute buffer as natural upgrade). Statistics of the point cloud (cluster centroids, local density, entropy) drive the positions, scales, hues, and mild physical transforms of floating DOM Verse portals. User pointer dwell and coverage provide fitness that evolves the genomes via simple mutation/selection. High-fitness or explicit seal stores a SHA-256 genome memory in IndexedDB that can be restored to bias the population. Surrounding canvas chrome morphs with attractor complexity. Fully self-contained, offline after first load.

## Why novel
- Not SDF particles, not mass-spring, not NCA, not LBM fluid, not wavelet/photonic kernels, not Bayesian lattices, not reservoirs, not attention clusters, not DOM genome auctions.
- Core novel combination is an evolutionary local policy controlling classical IFS fractal attractors, with the resulting point-cloud statistics physically embodying and morphing interactive DOM Verse portals, sealed as fractal form memories.
- Under-explored axis: generative fractal geometry driven by local evolutionary AI + point-cloud DOM projection + sealed attractor memories.

## Prototype
Single self-contained `index.html`. Interactive offline. Move pointer over the canvas to reward dense or interesting regions. Fractal points form and morph under evolving IFS maps. DOM portals ride the attractor. Press S or click Seal to capture the current best genome. R restores last seal. Complexity drives subtle chrome morphing.

## Failure modes
- IndexedDB unavailable or private mode: seals fall back to localStorage or in-memory.
- Very low-end devices: point iteration count capped (~2000–4000); evolution step rate reduced.
- No pointer: synthetic random fitness drive keeps the mind alive.
- IFS collapse to a point: mutation rate and diversity pressure prevent total collapse.

## Building blocks for next
Evolutionary genomes encoding IFS affine maps; point-cloud statistics driving living DOM portals; sealed fractal form memories. Next: true WebGPU compute for parallel IFS iteration + density histogram; WebXR controller as transform injector; multi-tab BroadcastChannel of sealed attractors.

## V01D landing
skills/mini/webgpu-ifs-fractal-policy-mind; testable via pointer → portal morph + attractor change, seal → hash + IDB, restore → prior fractal reappears, chrome radius changes with complexity.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- IFS: 3–4 affine maps per genome (a,b,c,d,e,f,p); points iterated ~1500–3000 times
- Policy: population of 8–12 genomes; simple GA (mutation + elitist selection) every ~400 ms
- Fitness: user pointer density near recent points + entropy of point cloud + coverage of canvas
- Embodiment: 4–6 DOM portals positioned at cluster centroids or high-density samples; CSS transforms (scale, rotate, hue, blur) from local stats
- UI morph: CSS custom properties on root driven by point entropy / estimated complexity
- Seal: SHA-256 of serialized best genome stored in IndexedDB (localStorage fallback); restore injects it into population
- No external dependencies, no network

## Expected Outcome
Interactive living fractal attractor that evolves under user attention, forms coherent strange attractors or fern-like forms, offers sealed recallable fractal memories, and subtly warps surrounding canvas chrome and floating portals. Runnable offline with pointer or synthetic drive.

## Mechanics
- Pointer history (last N positions) → local fitness injection near points
- GA step every ~400 ms
- Point iteration + render ~30–60 Hz
- Complexity metric → CSS border-radius / panel opacity / portal glow
- Click Seal or key S seals; R restores
