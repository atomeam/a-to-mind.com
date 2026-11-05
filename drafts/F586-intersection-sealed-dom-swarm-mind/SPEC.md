# F586 Intersection-Sealed DOM Swarm Mind

## Concept
Pure-DOM multi-agent swarm of living cards. Each agent is an absolute-positioned HTML element whose visual style and motion parameters are governed by a sealed genome. A tiny local model (feed-forward MLP, pure JS) maps a short causal history of DeviceOrientation (or pointer-tilt fallback) plus local density into velocity deltas. Fitness is measured by the Intersection Observer API (visible ratio × time-in-view × scale). When two agents overlap, the higher-fitness agent may transfer a mutated copy of its genome to the lower one (sealed contact transfer). IndexedDB persists the best swarm snapshot. No canvas simulation kernel, no WebGPU, no spectral, no continuous field. Offline single-file.

## Novelty
Leaves the dominant recent cluster of WebGPU continuous volumetric/field kernels (SDF raymarch, LBM fluid, NCA, pheromone diffusion, spectral voice, Lenia, Ising, softbody, attention lattices on grids) and WebXR hand/CPM/reservoir systems. Core novel combination is IntersectionObserver as the fitness sensor for multi-agent competition, sealed genome transfer on physical DOM overlap, DeviceOrientation as causal input to a local MLP that directly controls living DOM element physics (hybrid embodiment), and persistent IndexedDB shared field. Not substrate simulations, not BroadcastChannel/WebRTC primary transfer, not residual predictors, not pure NCA.

## Architecture
- Single index.html, no external dependencies, offline after load.
- 7 living DOM agents (div.agent) with genome-driven hue, scale, border, and label.
- Tiny MLP (3→4→2) per agent: inputs [tiltX, tiltY, localDensity] → [vx, vy].
- rAF loop: sample orientation → update MLPs → integrate positions (with soft walls and simple repulsion) → check overlaps for genome transfer → update styles.
- IntersectionObserver on each agent tracks intersectionRatio; fitness = EMA of ratio × scale.
- Drag any agent with pointer to pin temporarily and boost its fitness.
- Seal button writes genomes + positions + MLP weights to IndexedDB ("verse-f586").
- Reload restores sealed swarm.

## Expected outcome
Tilt the device (or move mouse in fallback) and the cards drift under local policy control. Overlapping cards exchange genomes when one is more "seen"; the swarm visually evolves. Seal persists the state across reloads. Interactive spatial embodiment of competitive local minds using only DOM + Observer + Orientation.

## Mechanics
1. Initialize random genomes and positions.
2. IntersectionObserver continuously updates visibility fitness.
3. Each frame apply MLP-driven velocity + orientation wind + repulsion.
4. On overlap, if fitness difference > threshold, transfer genome (10% mutation).
5. Pointer drag pins agent and gives temporary fitness boost.
6. Seal / load via IndexedDB.

## Failure modes
- No DeviceOrientation: mouse-position tilt simulation.
- IntersectionObserver unsupported: fall back to viewport-center proximity as fitness.
- IndexedDB blocked: session-only memory.
- Too many agents: hard cap at 8, simple O(n²) overlap.
- MLP collapse: weights clamped, small mutation on transfer.

## Building blocks unlocked for next
- IntersectionObserver-as-fitness primitive for DOM agents
- Overlap-gated sealed genome transfer without network
- Orientation-MLP direct control of pure-DOM spatial physics

Void is now Verse everywhere.

**Files**: drafts/F586-intersection-sealed-dom-swarm-mind/SPEC.md, drafts/F586-intersection-sealed-dom-swarm-mind/index.html
