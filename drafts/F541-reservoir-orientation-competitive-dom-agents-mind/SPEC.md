# F541 Reservoir Orientation Competitive DOM Agents Mind

## Concept
Novel combination for The Verse canvas: Multiple discrete competitive Verse agents embodied as absolute-positioned DOM cards, each driven by its own tiny Echo State Reservoir (liquid state machine / reservoir computing — previously unused; not MLP, not feedforward, not standard RNN unroll). DeviceOrientation deltas (or pointer velocity) plus local spatial sensors (nearby agent density, pheromone sample) are injected as causal input into the reservoir. Reservoir readouts control each agent's velocity and deposit rate onto a shared decaying Canvas2D pheromone field. Agents compete territorially: overlapping or high local density reduces fitness for the weaker reservoir; exclusive coverage + persistence is rewarded. High-fitness agents can Seal their reservoir readout weights + fitness; BroadcastChannel enables multi-tab sealed genome adoption by other agents/tabs if fitness is higher. Fully offline after load. Deliberately leaves the recent cluster of WebGPU continuous physics/CA kernels (Lenia, SPH, lattice-gas, electrostatic, quantum walk, attention vortices) + orientation-MLP DOM buoys/probes.

## Novelty
Leaves dominant recent cluster of WebGPU physics/CA + MLP steering + DOM morph/buoy. Introduces reservoir computing as the local model, spatial exclusion competition among discrete physical DOM agents (hybrid embodiment with simple collision push), and sealed genome transfer of reservoir parameters. No particle physics kernel, no attention lattice, no NCA.

## Architecture
- Single `index.html` (no external dependencies)
- Canvas2D shared pheromone field (decay + deposit)
- 6 DOM agent cards: position, velocity; simple Euler integration + pairwise soft collision repulsion
- Per-agent Echo State Reservoir: 24 reservoir nodes, sparse random weights (fixed), input weights random, trainable readout (3 outputs: vx bias, vy bias, deposit). Inputs: orient Δβ/Δγ or pointer vx/vy, local density, self fitness proxy. Reservoir state updated each frame; readout linear.
- IndexedDB `f541-reservoir`; BroadcastChannel `f541-genome` for sealed transfer (FNV-like hash of readout weights must match before adopt).
- Fitness: exclusive area proxy (low overlap density) + pheromone under self + survival time.
- Fallback: pointer-only if no DeviceOrientation; always Canvas2D.

## Expected outcome
Runnable prototype in which tilting the device (or moving pointer) causally drives reservoir dynamics that move the agents and deposit traces; agents push each other and compete for space; Seal transfers high-fitness reservoir policies across tabs. Visual feedback immediate; offline capable.

## Mechanics
1. Initialize random reservoir weights + readouts per agent; load from IndexedDB if present.
2. Listen for DeviceOrientationEvent, pointermove, BroadcastChannel, Seal button, drag on agents.
3. Each frame: inject inputs to each reservoir, update state, compute readouts → velocities, deposit pheromone, integrate positions, resolve collisions, update DOM styles, decay field, render.
4. Compute per-agent fitness; Seal writes best readout + hash + fitness.
5. On receive: verify seal hash → adopt into lowest-fitness agent if higher.

## Files
- drafts/F541-reservoir-orientation-competitive-dom-agents-mind/SPEC.md
- drafts/F541-reservoir-orientation-competitive-dom-agents-mind/index.html

## V01D landing
Reservoir competitive DOM agents stage under `void-live-deploy/skills/reservoir-orientation-competitive-dom.js`; test asserts orientation delta → reservoir state change → agent velocity shift and BroadcastChannel sealed genome adoption.
