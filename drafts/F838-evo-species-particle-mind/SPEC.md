# F838 Evolutionary Species Particle Mind

**Ledger ID**: F-838 (frontier series)  
**Slug**: evo-species-particle-mind  
**Date**: 2026-11-19  
**Status**: frontier prototype  

## Concept
A multi-agent evolutionary swarm for The Verse canvas: several competing species of particles, each with a sealed genome of behavioral parameters (attraction strength, speed, cohesion, color hue). Particles are simulated in pure JS on a Canvas2D. DeviceOrientation (or pointer velocity) acts as a global causal wind/force bias. User clicks reward the nearest species by mutating and boosting its fitness. Higher-fitness genomes are sealed and transferred via IndexedDB persistence and BroadcastChannel to other tabs, allowing competitive adoption. Not a layout tool; the embodiment is the living particle field itself.

## Novelty
Leaves the dominant recent cluster of local models (MLP, Q-table, CNN, NCA, evolutionary) controlling adaptive DOM portal/card layouts (F832–F835, F837 spatial audio listener, F836 WebXR Verlet cloth, F830 Coulomb DOM, F834 Q-table, F833 mic-NCA). Core novel combination is pure particle species as the primary agents under multi-agent sealed genome competition, with DeviceOrientation as environmental causal input, Canvas2D as the spatial substrate (not DOM cards), and reward-gated evolutionary transfer. First evolutionary species particle mind with inter-tab genome competition on Verse. Not neural control of UI elements, not cloth/softbody, not NCA, not note-organizing tool.

## Architecture
- Single self-contained index.html (offline-capable after load).
- 4–6 species, each with ~100–200 particles.
- Genome: Float32Array of 8–12 params per species (maxSpeed, attraction, repulsion, cohesion, alignment, hue, etc.).
- Simulation: simple boids-like + species-specific forces + orientation wind.
- Reward: click → identify closest particle/species → mutate genome + fitness++.
- Persistence: IndexedDB key `verse-f838-genomes`.
- Transfer: BroadcastChannel `f838-genome` for sealed transfer; adopt if higher fitness.
- UI: canvas full, overlay stats for fitnesses, seal button.

## Expected outcome
Open page. See colored particle species swirling. Tilt device or move mouse to influence wind. Click near a species to reward and evolve it. Open another tab to see genome transfer. Works offline. Graceful fallback if no orientation or IndexedDB.

## Mechanics
1. Initialize random genomes and particles.
2. Each frame: apply orientation bias, compute inter-particle forces per species rules, update positions, draw.
3. On click: find nearest species, mutate its genome slightly, increment fitness, optionally seal.
4. On seal or periodic: store to IndexedDB, postMessage to channel; on receive, if better, adopt and reseed particles.

## Files
drafts/F838-evo-species-particle-mind/SPEC.md
drafts/F838-evo-species-particle-mind/index.html

**Void is now Verse everywhere.**
