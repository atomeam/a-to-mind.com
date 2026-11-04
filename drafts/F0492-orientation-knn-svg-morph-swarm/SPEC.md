# F0492 Orientation k-NN SVG Morph Swarm

## Concept
A living SVG path (closed polygonal "body") is the hybrid embodied form on the Verse canvas. Multiple local agents each maintain an instance-based k-NN store of (DeviceOrientation features → vertex offset vectors). Current tilt (or pointer proxy) queries each agent's nearest examples; proposals are blended by fitness-weighted competition to deform the shared path in real time. High-fitness example sets ("genomes") seal to IndexedDB and transfer via BroadcastChannel (multi-tab shared field). Click rewards the dominant agent; seal exchanges the winning store. Offline-capable single file.

## Novelty
Leaves the recent cluster of Physarum trail agents (F0490), Ising/Metropolis spin domains (F0489), lattice-gas obstacle fluids (F0488), Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs, softbody policy meshes, speech-seeded NCA, and prior orientation RNN / pointer-history / residual / attention / volumetric / pure NCA / neural-policy substrates. Core novel combination is a non-neural instance-based local model (k-NN example store, not MLP/RNN/reservoir/policy network) whose causal input is DeviceOrientation, controlling generative SVG geometry (not canvas kernel, not DOM cards as primary agents, not softbody springs) under multi-agent fitness competition, with sealed example-set genome transfer over IndexedDB + BroadcastChannel shared field in an architecture not previously built. Not substrate simulations, not neural weights, not spectral residuals.

## Architecture
- Single index.html (progressive enhancement, offline after load)
- SVG <path> or <polygon> with ~24 vertices, updated each frame via d attribute
- 4 agents, each with example array: {ori: [beta, gamma], verts: Float32Array of offsets}
- Query: k=3 nearest by Euclidean on orientation, average verts
- Blend: fitness-weighted sum of agent proposals + base shape
- Fitness: +1 on explicit reward click for that agent; decays slowly; Seal when best high
- Shared field: BroadcastChannel 'f0492-genome'; IndexedDB store under `f0492-knn-svg`
- Pointer fallback: map clientX/Y to fake beta/gamma if no orientation
- Chrome: status, agent fitness bars, Seal / Reward / Reset buttons

## Expected outcome
Runnable prototype: tilt (or move pointer) morphs the SVG body via competing k-NN agents; reward boosts one; Seal persists and transfers the winning example set across tabs; higher fitness adopted with slight mutation of examples. Works offline; graceful without sensors.

## Mechanics
1. Init base circle verts, random example stores per agent, random fitness.
2. Listen DeviceOrientation / pointer / BroadcastChannel / buttons.
3. Each frame: query each agent, blend proposals, update path d, render fitness.
4. Reward click increments selected/dominant agent fitness.
5. Seal: store best examples + fitness, broadcast; incoming replaces if higher (mutate).

## Files
drafts/F0492-orientation-knn-svg-morph-swarm/SPEC.md
drafts/F0492-orientation-knn-svg-morph-swarm/index.html

## V01D landing
Instance-based orientation morph under void-live-deploy/skills/orientation-knn-svg-morph.js; test asserts orientation vector → k-NN query → vertex offset change and BroadcastChannel example adoption.
