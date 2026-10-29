# F448 — WebXR Hand Verlet Genome Portal Mind

## Last 8 F- drafts and dominant cluster
- F440-webgpu-online-learning-spatial-agent
- F441-webgpu-interference-reservoir-morph
- F442-kuramoto-phase-lock-mind
- F443-webgpu-nca-spatial-memory-mind
- F444-webgpu-causal-wave-portal-mind
- F445-webgpu-nca-spatial-memory-mind
- F446-webgpu-nca-xr-residual-mind
- F447-webgpu-lbm-evolved-swimmers-mind

**Dominant cluster:** WebGPU NCA / spatial-memory / residual / wave / LBM fluid kernels with local MLPs or evolutionary agents.

**Branched away from:** That entire cluster. This is constraint-based Verlet physics on a closed particle mesh, local genetic optimization of stiffness/rest-lengths, hybrid DOM labels as embodiments, WebXR-hand-proxy + DeviceOrientation causal forces, sealed genome via IndexedDB + BroadcastChannel transfer. No NCA, no LBM, no wave equation, no residual predictor, no attention lattice.

## Concept
A deformable circular "portal" mesh of particles held by distance constraints (Verlet integration). User hand (mouse/touch proxy; WebXR hand-joint stub ready) and optional DeviceOrientation tilt apply forces. A tiny local genetic algorithm (population of 6 genomes = rest-length scale + stiffness + damping) evolves to keep the mesh stable and circular under the applied forces. Best genome can be sealed (SHA-256 hash of weights + fitness) to IndexedDB and broadcast to other tabs so a competing agent adopts the transferred genome. Floating DOM labels track particle clusters and can be dragged to inject extra force. Fully offline single-file.

## Why novel
- Verlet constraint solver on a closed loop mesh (not particles free, not NCA, not fluid).
- Genome is mesh material parameters, not agent policy or reaction kernel.
- Hybrid embodiment: Canvas mesh + live DOM labels that participate in the force loop.
- Causal inputs: pointer velocity + orientation gravity + optional hand squeeze proxy.
- Sealed transfer via BroadcastChannel (local multi-tab competition) without WebRTC.

## Architecture
- Single `index.html`
- Canvas2D for particles + constraints
- Verlet + iterative constraint satisfaction
- Simple GA on main thread (6 individuals, fitness = inverse variance of radius + energy conservation proxy)
- IndexedDB for sealed genomes
- BroadcastChannel for inter-tab genome injection
- DeviceOrientationEvent for tilt-as-gravity
- Progressive: works with mouse only

## Failure modes
- No IndexedDB → seal status only
- No BroadcastChannel → local only
- No orientation permission → mouse forces only
- Low FPS → reduce constraint iterations

## Building blocks for next
True WebXR hand-joint forces on the mesh, WebGPU Verlet kernel, multi-user WebRTC genome broadcast, OPFS full state snapshots.

## V01D landing
spatial-verlet-portal skill under `void-live-deploy/skills/mini/webxr-hand-verlet-genome-portal.js`. Test: pointer drag deforms mesh; seal/load restores stiffness bias; orientation tilts gravity.
