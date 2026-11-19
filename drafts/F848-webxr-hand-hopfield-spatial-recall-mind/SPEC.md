# F848 WebXR Hand-Driven Hopfield Spatial Recall Mind

## Concept
A local Hopfield associative memory network whose input pattern is formed from WebXR hand joint positions (or pointer + DeviceOrientation fallback). The user can "store" a hand pose by clicking, writing a bipolar pattern into the Hopfield weight matrix. At runtime the network performs asynchronous energy minimization, recalling the nearest stored attractor. The recalled binary pattern morphs a grid of living DOM portals (position, scale, hue) into the remembered configuration. High-energy or high-match genomes seal to IndexedDB and broadcast over BroadcastChannel for sealed transfer across tabs/peers. Offline-capable single file.

## Novelty
Leaves the dominant recent cluster of spatial portal minds (SOM, MCTS, spiking, diffusion, SPH, Verlet chains, N-body, Physarum, Lenia, softbody, NCA, spectral vortex, lattice-gas, Ising, Vicsek flocks). Core novel combination is WebXR hand tracking as causal input to a previously unused local Hopfield network (energy-based associative recall, not feed-forward MLP, not reservoir, not k-NN, not policy network) that controls hybrid DOM embodiment via attractor morphing. Not particle simulation, not continuum kernel, not force-based physics. Sealed weight-matrix genome transfer in a new architecture.

## Architecture
- Single self-contained index.html
- WebXR hand tracking (optional, progressive)
- Fallback: pointer + DeviceOrientation for  pattern bits
- Hopfield: 16-bit patterns, Hebbian storage, async updates
- DOM: 16 portal tiles in a 4x4 grid whose transforms are driven by the current state bits
- Seal: IndexedDB `f848-hopfield` + BroadcastChannel `f848-genome`
- Reward/store: click stores current pose pattern

## Expected outcome
Move hand or tilt/pointer: DOM grid continuously morphs toward nearest stored pose. Click to store a new attractor. Sealed genomes transfer and compete by match quality. Interactive spatial local-AI capability turning hand pose into living associative recall.

## Mechanics
1. Initialize random or empty Hopfield weights.
2. Sample hand joints / pointer/orientation into bipolar pattern.
3. Perform a few Hopfield updates (energy descent).
4. Map state bits to DOM portal transforms and colors.
5. On click: Hebbian store of current pattern.
6. Periodic seal / adopt higher-match genomes.

## Failure modes
No WebXR → pointer/orientation fallback. No DeviceOrientation → pointer-only. IndexedDB blocked → memory-only. Too many stored patterns → capacity limit, prune lowest energy.

## Building blocks
Pure-JS Hopfield network, WebXR hand pattern embedding, DOM-attractor hybrid embodiment, sealed weight-matrix transfer. Expands energy-based local models and XR causal inputs for future Verse.

## Files
drafts/F848-webxr-hand-hopfield-spatial-recall-mind/SPEC.md
drafts/F848-webxr-hand-hopfield-spatial-recall-mind/index.html
