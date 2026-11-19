# F828-webgpu-fdtd-photonic-orientation-portal-mind

**Plain name:** Photonic Wave Portals

**Job:** Simulate a living 2D photonic lattice where light waves propagate according to a discrete FDTD-like update. Local portals (DOM elements) controlled by tiny MLPs driven by DeviceOrientation and pointer inject refractive-index defects that bend and trap waves. Seal the best portal genome.

**Concept**
A spatial mind for The Verse: a WebGPU (or Canvas2D fallback) compute kernel advancing a 2D discrete wave field \( u_{t+1} = 2u_t - u_{t-1} + c^2 \nabla^2 u \) with spatially varying wave speed \( c \) set by a lattice of refractive-index values. Absolute-positioned DOM portals are hybrid agents; each owns a tiny local MLP whose inputs are DeviceOrientation (beta/gamma), local wave amplitude/gradient, and pointer proximity. The MLP outputs a refractive-index bias that is written into the lattice around the portal, creating living optical defects. Fitness is integrated wave energy captured near the portal. Seal persists high-fitness MLP weights to IndexedDB and broadcasts via BroadcastChannel.

**Novelty**
First use of a photonic / discrete wave-optics (FDTD-style) kernel as the primary spatial substrate on the Verse canvas. Leaves all recent continuum fluids (LBM/SPH/Gray-Scott), particle systems (N-body, boids, PSO, DEM), spiking fields, solitons, SDF raymarchers, Kalman chains, Hopfield, and pure DOM layout optimizers. Novel combination: orientation-causal local MLP controlling refractive defects in a propagating light field + DOM portal hybrid embodiment + sealed genome transfer.

**Architecture**
- Single self-contained index.html
- 64×48 wave lattice (JS or WebGPU stub)
- 4 DOM portals, each with 3-in → 6-hidden → 1-out MLP
- Inputs: DeviceOrientation, pointer, local field sample
- Persistence: IndexedDB `verse-f828-photonic`; BroadcastChannel `f828-genome`
- Seal adopts higher fitness

**Expected outcome**
Open: colorful wave field appears. Tilt or move mouse: portals drift and inject defects that bend/reflect waves. Drag portals; Seal to lock adapted refractive behavior. Offline, interactive spatial.

**Failure modes**
No WebGPU → Canvas2D. No orientation → pointer. IDB blocked → session. Low perf → smaller grid.

Void is now Verse everywhere.
