# F464 Competitive Local MLP DOM Genome Transfer

**Slug:** F464-competitive-local-mlp-dom-genome-transfer

**Architecture:** Hybrid floating DOM cards as independent agents, each owning a tiny local MLP (4→6→2) that maps DeviceOrientation tilt + normalized position to velocity. Simple Verlet-like integration under orientation gravity bias. On proximity collision, the higher-fitness agent transfers a fraction of its weight genome to the lower. Fitness accumulates from low-speed stability + center proximity + optional pointer reward. Top genome seals to IndexedDB; BroadcastChannel shares it across tabs for injection into lowest. Single self-contained offline-capable index.html. Progressive: orientation permission optional, IndexedDB/BroadcastChannel optional.

Branches away from the recent dominant cluster of WebGPU particle/SPH/PBD/spectral kernels, WebXR hand/gaze MLP physics, Hopfield trajectory associative fields, granular gene transfer, and spatial-audio evolutionary agents.

**Expected outcome:** Agents drift and compete under device tilt. Higher-fitness agents spread their MLP weights on contact. Click an agent to reward it. Seal persists the current top across reloads. Open multiple tabs and Broadcast to share genomes. Fully interactive via pointer even without orientation.

**Mechanics:** Per-agent MLP forward pass each frame; position/velocity update with damping and tilt bias; pairwise distance check for transfer + separation; fitness EMA; IndexedDB put/get of serialized weights; BroadcastChannel postMessage of top genome.

**Failure modes:** No DeviceOrientation → zero tilt bias, still pointer-interactive; private mode → no persist or cross-tab; high N on low-end → reduce to 8; transfer rate too high → homogenization (currently 0.15).

**Builds on:** Prior sealed local minds and hybrid DOM by introducing competitive multi-agent independent MLPs with on-collision genome transfer under continuous orientation input (distinct from shared MLP, evolutionary population genomes, or particle kernels).

**Next building block:** True WebRTC datachannel sealed genome exchange under hold-gate; WebGPU compute for parallel agent MLPs; CSS 3D transform physics; local RNN sequence on orientation history.
