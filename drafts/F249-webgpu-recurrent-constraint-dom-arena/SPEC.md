# F-249 · WebGPU Recurrent Constraint DOM Arena

## Concept
Novel combination deliberately branching from the recent residual density / causal lattice / acoustic softbody / token-swarm / WebXR residual-portal cluster (F241–F248):

- Multi-agent competition where discrete DOM agent cards are controlled by local tiny recurrent policies (RNN with hidden state) that output forces.
- Soft mutual constraint springs between nearby agents, solved in the main physics step (WebGPU compute path detected and stubbed for expansion; full CPU path is complete).
- DeviceOrientation supplies the primary continuous causal input (gravity/wind bias); pointer only places discrete energy attractors (no trajectory embedding or residual field).
- Evolutionary sealed genome transfer: every few seconds the champion genome is mutated into the lower half of the population; champion is hashed (SHA-256) and sealed to IndexedDB.
- Hybrid embodiment: real DOM cards for agents + Canvas2D trails/force visualization; page chrome (border, hue) driven by average fitness.
- Leaves residual embeddings, density lattices, spectral/audio residuals, pure NCA, pointer-history fields, and volumetric injection. Expands the under-explored axis of local recurrent neural kernels controlling physical UI elements under orientation gravity with soft inter-agent constraints and persistent sealed population transfer.

## Architecture
Single self-contained `index.html`. Main thread runs Euler integration + RNN forward passes + soft springs for ~10 agents. Canvas2D fades trails. IndexedDB stores sealed champion genomes. Orientation permission button. Click places temporary energy sources that agents compete for (fitness += proximity). Progressive WebGPU detection only (kernel expansion hook). Offline after first load.

## Expected outcome
Tilt the device (or leave zero). Click to drop energy orbs. Agent cards accelerate according to their recurrent policies, feel mutual soft repulsion, bounce at edges, and evolve as low-fitness agents receive mutated champion genomes. Champion glows gold. Seal button persists the current champion. Page border intensity tracks average fitness. Fully interactive with graceful degradation.

## Mechanics
- Genome: Float32Array packing RNN weights (input 7 → hidden 8 → output 2) + biases; simple residual recurrence on hidden state.
- Inputs: [tiltX, tiltY, nearestEnergy unit vector, nearestAgent unit vector, speed].
- Forces: policy output + orientation gravity + soft springs (k when d < 120).
- Evolution: sort by fitness every 6 s; mutate champion into bottom 50 %.
- Seal: SHA-256 of genome array → IndexedDB object store `pop`.

## Failure modes
- No orientation permission → zero tilt, still fully interactive via energy placement and evolution.
- IndexedDB blocked → in-memory only.
- No WebGPU → CPU path (already the primary).
- Low performance → reduce N (hard-coded 10).
- Pointer drag on agents allows manual reposition.

## Building blocks
Full WebGPU compute shader that evaluates all RNNs + constraint forces in one dispatch with readback; multi-step unrolls; OPFS persistence of entire population; WebXR hand that can grab and force-mutate an agent; peer sealed transfer of population diversity metric.

## V01D landing
Spatial recurrent-constraint-arena skill under `void-live-deploy/skills/`; testable via fitness of champion rising under fixed energy pattern, sealed hash round-trip, and orientation gravity visibly biasing all agents.
