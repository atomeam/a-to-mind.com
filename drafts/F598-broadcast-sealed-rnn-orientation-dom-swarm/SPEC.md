# F598: Broadcast Sealed RNN Orientation DOM Swarm

## Concept
Pure browser-native multi-agent swarm of physical DOM elements. Each agent is a living HTML card whose position, scale, and hue are driven by a tiny local Elman RNN. DeviceOrientation (and pointer as fallback) provides causal input to the RNN. Agents compete for a shared spatial resource; when two agents collide, the higher-fitness agent seals and transfers a copy of its genome (RNN weights) to the loser via BroadcastChannel, enabling multi-tab / multi-window shared evolution without WebGPU, WebXR, or server. Persistence via IndexedDB for the local best genome.

## Branching
Deliberately leaves the recent WebGPU physics/memory + orientation/MLP/genome/DOM cluster (F590–F597: SPH, Hopfield fluid, predictive fog, implicit SDF, bandit SVG, decision-tree clippath, etc.). No compute shaders, no volumetric, no NCA, no spectral residuals. New combination: sealed genome transfer over BroadcastChannel + DeviceOrientation→Elman RNN→physical DOM agents with collision-based competition.

## Capabilities
- Offline-first single-file HTML
- DeviceOrientationEvent as primary causal input (alpha/beta/gamma → RNN)
- Tiny Elman RNN (hidden size 8) per agent, online weight update via simple Hebbian/local fitness
- BroadcastChannel for sealed genome packets (JSON + hash)
- Collision detection between DOM agents triggers transfer if fitness delta > threshold
- IndexedDB stores personal best genome
- Interactive: tilt device or drag, spawn agents, observe evolution across tabs

## Failure modes
- DeviceOrientation requires secure context + permission on some browsers
- BroadcastChannel only same-origin
- High agent count may thrash layout
- Genome transfer can collapse diversity if not seeded randomly

## Next building blocks
Sealed multi-tab fields, orientation-driven local RNNs controlling real DOM physics hybrids.
