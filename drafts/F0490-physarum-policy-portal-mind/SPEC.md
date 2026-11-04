# F0490 Physarum Policy Portal Mind

## Concept
A continuous agent-based Physarum (slime mold) simulation on a 2D trail field (Canvas2D, with optional WebGPU path for diffusion). A local tiny MLP (pure JS) takes short history of DeviceOrientation deltas + pointer velocity as causal input and outputs adaptive sensor angle, turn strength, and deposit rate that control the agents' chemotactic behavior. Living DOM portals act as nutrient sources: they inject persistent attractant patches under their position, visually scale/hue according to local trail density, and can be dragged to relocate food. High global trail coherence morphs page chrome. Seal stores MLP weights + density hash in IndexedDB; BroadcastChannel enables multi-tab genome transfer when mean trail is higher. The Verse canvas gains a novel continuous trail-following agent substrate controlled by orientation-causal policy, with real DOM as measurable nutrient portals.

## Novelty
Leaves the recent cluster of Ising/Metropolis spin domains (F0489), lattice-gas obstacle fluids (F0488), Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi, motion-residual crystals, acoustic NCA, and SDF recurrent reasoners. Core novel combination is a previously unused Physarum/slime-mold agent kernel (discrete agents sensing/depositing continuous trails with chemotaxis, not discrete spins, not continuous growth kernels like Lenia, not lattice-gas streaming, not vortex curl, not mass-spring, not NCA, not Ising) driven by a local feed-forward MLP whose causal input is DeviceOrientation history, with DOM elements as true nutrient portals that inject attractant and sample density. Not particle collisions alone, not attention matrices, not residual predictors.

## Architecture
- ~4000 agents (pos, angle) on a trail Float32Array (grid). Each step: sense trail at ±sensorAngle, turn toward higher, move, deposit.
- MLP: 6-dim input (3 ori deltas + 2 pointer vel + 1 mean trail) → 8 hidden → 3 outputs (sensorAngle scale, turnStrength, depositRate). Weights ~60 floats, local reward on higher mean trail / coherence.
- DOM portals (absolute, draggable) inject attractant under them, scale by local density, hue by density.
- BroadcastChannel 'f0490-genome': Seal posts weights + meanTrail; receive adopts if higher.
- IndexedDB persists under `f0490-physarum-policy`.
- Offline-capable; mouse fallback.

## Expected outcome
Runnable single-file prototype showing Physarum agents growing trails under orientation-driven MLP control, living DOM nutrient portals that inject and morph, multi-tab genome competition. Seal persists.

## Mechanics
1. Init random agents + random MLP + trail.
2. Listen DeviceOrientation / pointer / BroadcastChannel / drag.
3. Each frame: MLP forward, step agents (sense/turn/move/deposit), diffuse/decay trail, render, update portals from local density.
4. High meanTrail enables Seal; Seal stores + broadcasts.
5. Incoming genome replaces if better.

## Files
drafts/F0490-physarum-policy-portal-mind/SPEC.md
drafts/F0490-physarum-policy-portal-mind/index.html

## V01D landing
Physarum trail agent stage under void-live-deploy/skills/physarum-policy.js; test asserts orientation delta → MLP → sensorAngle change and BroadcastChannel genome adoption.
