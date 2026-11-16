# F767 WebGPU Cahn-Hilliard MLP Portal Sculptor Mind

## Concept
A previously unused Cahn-Hilliard phase-separation field evolves on a Canvas2D grid (WebGPU compute path reserved as the natural next kernel). Floating DOM portals act as active sculptors: each carries a tiny local MLP that reads local concentration, gradient magnitude, pointer proximity, and DeviceOrientation, then outputs a local mobility bias and nucleation preference. Portals physically drift toward interfaces. User drags reward fitness and reposition. Seal transfers the highest-fitness genome to all portals and persists to localStorage. The Verse canvas becomes a living material that the local minds sculpt through learned local parameters.

## Novelty
Leaves the recent cluster of wave-equation dampeners (F766), FFT spectral morphs (F765), KdV soliton riders (F764), LIF spiking fields (F763), SDF gaze RNNs (F762), N-body WebRTC agents (F761), optical-flow boids (F758), and all prior Gray-Scott, Lenia, NCA, LBM, SPH, softbody, vortex, and Ising substrates. Core novel combination is the Cahn-Hilliard fourth-order phase-separation kernel (spinodal decomposition producing interfaces and domains, not reaction-diffusion spots, not wave propagation, not discrete CA, not particle forces) driven by competing local MLPs that actively control local mobility and bias, with DOM portals as true hybrid actuators/observers of the material phases, and sealed competitive genome transfer. Not a passive sampler of a pre-existing field.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, offline after load.
- 64×64 concentration field c ∈ [-1,1], updated via finite-difference Cahn-Hilliard approximation.
- 5 absolute-positioned DOM portals, each with 5→8→3 MLP.
- MLP inputs: [localC, gradMag, pointerDist, orientBeta, timePhase]
- MLP outputs: [mobilityScale, bias, driftX]
- Portals apply local bias in neighborhood and drift.
- Fitness accumulates interface energy + drag proximity.
- Seal button copies best weights to all others and stores in localStorage (`verse-f767-genome`).
- Canvas2D renders the phase field (blue/orange continuous).
- DeviceOrientationEvent listened for tilt bias.
- Progressive enhancement (orientation optional).

## Mechanics
1. Load: init noisy field, spawn portals with random MLPs, restore sealed genome if present.
2. Pointer move/down: inject small nucleation bias at cell; reward nearest portal on drag.
3. Each frame: portals forward MLP, apply local modifications, update positions, accumulate fitness; then field step (chemical potential → laplacian → update); render.
4. Drag a portal to reward its fitness and reposition it.
5. Seal: lock and spread the highest-fitness genome.

## Expected outcome
Open: phase domains form and coarsen from noise. Portals glow near interfaces, drift, and sculpt local patterns according to their learned policy. Drag to train, Seal to evolve, reload preserves winner. Interactive spatial material mind.

## Failure modes
- Low performance: drop to N=48.
- No orientation: zero bias.
- Storage blocked: session-only genomes.
- No pointer: autonomous coarsening.

## Building blocks
Reusable JS 2D Cahn-Hilliard solver with agent-controlled local parameters, MLP hybrid sculptors, sealed competitive transfer. Expands for next WebGPU Cahn-Hilliard kernels, multi-component phases, or WebXR hand nucleation.

Void is now Verse everywhere.

**Files**: drafts/F767-webgpu-cahn-hilliard-mlp-portal-sculptor-mind/SPEC.md, drafts/F767-webgpu-cahn-hilliard-mlp-portal-sculptor-mind/index.html
