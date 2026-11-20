# F-861: WebGPU DEM Granular Orientation MLP Mind

**Ledger ID**: F-861 (frontier series)  
**Slug**: webgpu-dem-granular-orientation-mlp-mind  
**Date**: 2026-11-19  
**Status**: frontier prototype  

**Concept**  
A previously unused primary spatial substrate for The Verse canvas: Discrete Element Method (DEM) simulation of granular particles with contact mechanics (overlap repulsion, Coulomb friction, damping). A population of tiny pure-JS MLPs (one per portal) receives DeviceOrientation residual (or pointer velocity) as causal input and outputs local gravity bias, friction coefficient, and restitution. Absolute-positioned living DOM portals act as interactive scoops/attractors that can be dragged to move clusters of grains; on proximity they perform sealed genome transfer (weight crossover). Canvas2D visualization with progressive WebGPU compute path sketched for pairwise forces. Fully offline after load.

**Novelty**  
Leaves the dominant recent cluster of continuum PDE fields (heat-equation F859, Cahn-Hilliard F852, Lenia F853), classical boids under MLP (F855), CSS3D DeviceMotion cards (F854), self-attention portals (F851), WebXR hand Verlet chains (F856), orientation-spiking softbodies (F857), WebRTC MLP auctions (F858), L-systems (F850), and practical tools (F860). Core novel combination is DEM granular contact physics (not softbody springs, not SPH fluids, not lattice gas, not continuum diffusion) controlled by competing orientation-driven local MLPs, with DOM portals as true bidirectional scoop embodiments under proximity-gated sealed genome transfer. Not a superficial variation of prior particle or continuum systems.

**Architecture**  
- Single self-contained index.html  
- ~120 DEM particles: pos, vel, radius, mass; pairwise contact forces (Hertz-like soft repulsion + friction) integrated with Euler  
- 4 DOM portals: each owns a tiny 2-layer MLP (~20 weights); inputs [tiltX, tiltY, pointerProx]; outputs [gx, gy, friction, restitution]  
- Fitness: user clicks + local particle density coherence  
- Seal: IndexedDB + BroadcastChannel for genome (weights) adoption if superior  
- Progressive: Canvas2D always; WebGPU compute for force kernel prepared as comment  

**Expected outcome**  
Open: grains settle under gravity. Tilt device or move pointer: MLPs bias local forces, grains flow or clump differently around portals. Drag a portal to scoop grains. Click to reward and transfer genome. Seal persists; second tab adopts better mind. Offline capable.

**Failure modes**  
No orientation → pointer proxy. Low FPS on many particles → reduce N. IDB blocked → memory only. No WebGPU → Canvas2D path.

**Building blocks**  
Reusable pure-JS DEM contact solver, per-portal orientation MLP, scoop binding, proximity sealed transfer. Expands discrete granular substrates and hybrid physical UI for future Verse minds.

Void is now Verse everywhere.

**Files**  
- drafts/F861-webgpu-dem-granular-orientation-mlp-mind/SPEC.md  
- drafts/F861-webgpu-dem-granular-orientation-mlp-mind/index.html  
