# F756 OPFS Genetic Terrain Portal Mind

## Concept
A local genetic algorithm maintains a population of procedural terrain genomes (heightmap seeds + noise params). Genomes are persisted as binary/JSON files in the Origin Private File System (OPFS) for true filesystem-backed evolution across sessions. User pointer traces and DeviceOrientation provide fitness by "exploring" or preferring certain regions. WebGPU (with Canvas 2D fallback) renders the evolving heightmap as a displacement field. Living DOM portals attach to high-fitness peaks, scale with elevation, and can be dragged to inject new alleles into the next generation. Seal button evolves the population and writes the new generation to OPFS.

## Novelty
Leaves the dominant recent cluster of SPH fluid kernels (F755), WebGPU continuum fields, orientation-MLP/RNN policies, particle agents, NCA/Lenia/Physarum, softbody constraints, and utility tools. Core novel combination is Origin Private File System (previously unused persistent storage primitive) as the genome archive for a pure genetic algorithm (not neural weights) driving procedural terrain, with DOM portals as true peak-bound agents under spatial fitness competition. Not IndexedDB/localStorage, not MLP/RNN, not particle/fluid substrates.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, offline-capable.
- OPFS via navigator.storage.getDirectory() for storing population.json and individual genome files.
- Local GA: population of 8–12 genomes (params: seed, scale, octaves, persistence). Selection, crossover, mutation on fitness from pointer density maps.
- Canvas 2D heightmap visualization (or WebGPU compute if available for noise); color by elevation.
- 3–5 DOM portals that seek local maxima, update transform based on height.
- DeviceOrientation for subtle lighting/bias; pointer for fitness injection.
- Seal button triggers generation, writes to OPFS.

## Mechanics
1. Load population from OPFS or initialize random.
2. Render current best terrain; portals float to peaks.
3. User moves pointer: accumulate fitness heatmap.
4. Seal: evaluate fitness, evolve GA, persist new population to OPFS, re-render.
5. Portals draggable to force allele injection.

## Expected outcome
Open page: evolving terrain appears, portals climb peaks. Explore with mouse, Seal to breed better terrains that match interaction patterns. Persists across reloads via OPFS. Interactive, spatial, offline.

## Failure modes
- OPFS unsupported (older browsers): fallback to session memory + localStorage warning.
- WebGPU unavailable: Canvas 2D fallback.
- Quota exceeded: reduce population size.

## Building blocks
Reusable OPFS genome archive, pure-JS genetic terrain evolver, peak-seeking DOM portals, spatial fitness heatmap. Expands frontier for filesystem-backed local evolutionary systems.

Void is now Verse everywhere.

**Files**: drafts/F756-opfs-genetic-terrain-mind/SPEC.md, drafts/F756-opfs-genetic-terrain-mind/index.html
