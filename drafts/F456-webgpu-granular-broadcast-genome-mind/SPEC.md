# F456-webgpu-granular-broadcast-genome-mind

## Concept
Novel combination never built before: Canvas2D granular discrete-element particle simulation (collision resolve with restitution/friction) whose per-particle genes (restitution, friction, hue) undergo sealed transfer on collision from higher-fitness (settled/low-energy) to lower. Multi-tab shared field via BroadcastChannel for cross-window genome injection. DeviceOrientation provides causal tilt gravity. Floating DOM probe cards sample regional fitness and seal successful gene clusters to IndexedDB. Pointer overrides gravity. Progressive note for WebGPU compute kernel (spatial hash + parallel resolve). Offline-capable single file.

Branches away from recent dominant cluster (WebGPU NCA / spatial lattices, orientation-MLP/RNN, residual predictors, WebXR hand verlet/Ising, L-system, HDC palace, semantic point agents, Hebbian theft in single-tab): core is granular collision physics + multi-tab BroadcastChannel sealed genome transfer + IndexedDB probes, not NCA, not residual, not pure orientation RNN, not softbody DOM, not attention.

## Architecture
- Single index.html
- ~180 particles with genes
- Collision detection + impulse resolve + genome transfer
- BroadcastChannel for multi-tab
- DeviceOrientation + pointer gravity
- DOM probes + IndexedDB seals
- Canvas2D render (WebGPU path for denser kernels noted)

## Expected outcome
Particles settle under tilt; collisions spread better genomes; open multiple tabs to share; click probes to seal. Fully interactive, offline after load.

## Failure modes
- No DeviceOrientation support → pointer only
- Private browsing → IndexedDB/BroadcastChannel limited
- High particle count → CPU bottleneck (WebGPU next)

## Building blocks for next
True WebGPU compute granular kernel with spatial hashing, WebXR hand as force injectors into the granular field, multi-peer WebRTC instead of BroadcastChannel for sealed transfer, hybrid CSS-transform DOM bodies driven by the granular field.
