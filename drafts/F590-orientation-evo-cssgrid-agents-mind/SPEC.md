# F590 Orientation Evolutionary CSS Grid Agents Mind

**Slug**: `orientation-evo-cssgrid-agents-mind`  
**Ledger ID**: F-590 (frontier series)  
**Date**: 2026-11-05

## Concept
DeviceOrientation (or pointer-velocity proxy) is the sole causal input to a pure local evolutionary strategy (not MLP, RNN, reservoir, attention, Q-table, or k-NN). A population of tiny parameter genomes controls the living layout of CSS Grid agents (absolute-positioned capability cards whose grid-column, grid-row, order, flex-grow, scale, and hue are driven by genome values). Agents compete by coverage and user-click rewards measured via bounding-box overlap and IntersectionObserver-style sampling. Higher-fitness genomes seal (hashed) and transfer via BroadcastChannel + IndexedDB. Orientation tilt biases mutation direction and fitness landscape. Fully pure-JS/CSS, no WebGPU, no particle/fluid/CA kernels, offline single-file.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum/particle/kernel simulations (LBM attention portals F581, spectral voice SDF F582, sandpile SOC F586, voice-NCA UI sculptors F584, reservoir DOM graph diffusion F588, attention-token particles F589, spatial-audio genomes, force-graph MLPs, Vicsek flocks). Core novel combination is DeviceOrientation as causal input to a never-before-used local evolutionary strategy (parameter mutation + tournament selection, not neural weights) that directly controls CSS Grid living agents as the hybrid embodiment, with sealed genome transfer over BroadcastChannel/IndexedDB in an architecture free of any compute-shader substrate. Not continuum fields, not particles, not NCA, not attention primary, not reservoir, not WebGPU.

## Architecture
- Single index.html.
- 6–8 living DOM cards in a CSS Grid container.
- Genome: 8–12 float parameters per agent (scale, hue, grid span, order bias, attractor strength).
- Evo: population of 4 genomes; mutate on timer or orientation change; fitness = click count + coverage of viewport + orientation-aligned "energy".
- Orientation: DeviceOrientationEvent → tilt vector biases mutation and slight force on agents.
- Seal: SHA-like hash of genome + fitness → IndexedDB `verse-f590`; BroadcastChannel `f590-genome` for peer adopt if higher fitness.
- Fallback: pointer motion if no orientation; works offline.

## Expected outcome
Tilt device or move pointer: agents reflow, recolor, and re-scale under evolving genomes; click an agent to reward it and trigger transfer; Seal persists best across reloads/tabs. Interactive spatial CSS Grid mind controlled by local evo strategy.

## Mechanics
1. Init random genomes and agents.
2. rAF: sample orientation, mutate/select, apply params to CSS styles, update fitness.
3. Click: reward + possible transfer.
4. Seal/restore.

## Failure modes
- No DeviceOrientation: pointer proxy.
- IndexedDB denied: in-memory only.
- BroadcastChannel unavailable: local only.
- Low performance: reduced population.

## Building blocks unlocked for next
- Pure evolutionary strategy (no neural) as primary local model
- Direct CSS Grid parameter control as embodiment
- Orientation-biased mutation landscape
- Sealed genome transfer without substrate simulation

Void is now Verse everywhere.

**Files**: drafts/F590-orientation-evo-cssgrid-agents-mind/SPEC.md, drafts/F590-orientation-evo-cssgrid-agents-mind/index.html

## Frontier Engine F-590
Architecture: DeviceOrientation → local evolutionary strategy → CSS Grid living agents + sealed BroadcastChannel/IndexedDB genome transfer.  
Expected outcome: interactive reflowing grid of agents under orientation-driven evolution.  
Mechanics: tilt-biased mutation, click-reward fitness, sealed persistence.  
Outcome: prototype delivered; ready for ledger-guard append.
