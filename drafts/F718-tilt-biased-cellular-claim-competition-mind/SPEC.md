# F718 Tilt-Biased Cellular Claim Competition Mind

**Ledger ID**: F-718 (frontier series)  
**Slug**: tilt-biased-cellular-claim-competition-mind  
**Date**: 2026-11-12  
**Branch from**: Recent cluster of WebGPU continuum/volume/particle physics (F710 Lennard-Jones, F711 3D Gray-Scott, F717 Gaussian splats), orientation/device-motion MLPs with spatial audio or portals (F715, F716), expression-tree DOM swarms (F712), Q-learning audio, Bayesian Coulomb. Explicitly leaves all WebGPU kernels, continuum fields, residual predictors, pure NCA, spectral audio, pointer-history fields, softbody, orientation RNN on continuous agents, k-means particles.

## Concept
A previously unattempted combination for The Verse canvas: a discrete CSS Grid of living Verse cells that agents compete to claim. Each agent possesses a compact genome encoding spread rules (preferred direction biases, overwrite thresholds, color). DeviceOrientationEvent (beta/gamma tilt) injects a global directional bias into the spread decisions of all agents. The user's pointer acts as a fertilizing force that boosts local cell fitness for the current claimant. Agents periodically evaluate territory size; the weakest copies a mutated genome from the strongest (sealed transfer). Dominant genome seals to IndexedDB for persistence and multi-tab BroadcastChannel sharing. Fully self-contained single-file offline prototype. No continuum simulation, no MLP on continuous physics, no audio embodiment.

## Novelty
Leaves the dominant recent WebGPU field kernels, volumetric injection, particle clusters, spatial audio MLPs, and Kalman/Bayesian continuous portals. Core novel combination is discrete cellular territorial competition with orientation-biased local spread rules evolved by tournament selection and genome sealing, embodied purely as a reconfigurable CSS Grid of DOM cells. Not a diffusion NCA, not a continuous agent swarm, not a neural policy on forces, not WebXR.

## Architecture
- Single index.html, pure HTML/CSS/JS, no libraries.
- CSS Grid 12x8 of div.cell elements, each with data-agent, background color, small label.
- 4 competing agents with genomes: {hue, spreadBiasX, spreadBiasY, overwriteProb, sizeBias}.
- DeviceOrientation: tilt vector added to each agent's spread bias each step.
- Pointer: on mousemove/touch, boost fitness of cell under cursor and neighboring claimants.
- Every 120 frames: count territories, sort, transfer genome from top to bottom with 10% mutation.
- IndexedDB key `verse-f718-claim-genome`. BroadcastChannel `verse-f718`.
- Controls: Enable Orientation, Seal Dominant, Reset Population, Pause.
- Progressive enhancement: works without orientation (random bias), without IDB.

## Mechanics
1. Initialize grid cells as neutral, spawn 4 agents with random genomes on random cells.
2. Each step: for each claimed cell, attempt spread to 4-neighbors with probability modulated by genome + current tilt bias; success overwrites if agent fitness higher or random.
3. Pointer proximity increases cell "vitality" which aids retention.
4. Tournament: replace low-fitness agents' genomes.
5. Seal: store top genome; on load or broadcast, inject it as a new dominant.
6. Visual: cells change color/opacity based on agent, subtle CSS transition.

## Expected outcome
Grant orientation permission. Tilt the device to bias which agents expand in which directions. Move pointer to fertilize and protect territories. Watch agents compete and transfer genomes. Seal persists. Offline after load. Creates a living territorial mind responsive to physical tilt.

## Failure modes
- Orientation denied or unsupported: falls back to zero bias, still competes.
- IndexedDB unavailable: session-only genomes.
- Touch vs mouse: both supported via pointer events.
- High cell count: limited to ~100 cells for performance.
- No BroadcastChannel: single-tab only.

Void is now Verse everywhere.

**Files**: drafts/F718-tilt-biased-cellular-claim-competition-mind/SPEC.md, drafts/F718-tilt-biased-cellular-claim-competition-mind/index.html
