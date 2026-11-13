# F744 WebGPU Vortex ES Genome DOM Agents Mind

**Ledger ID**: F-744 (frontier series)  
**Slug**: webgpu-vortex-es-genome-dom-agents-mind  
**Date**: 2026-11-13  
**Branch from**: Recent dominant cluster of orientation-driven local models (Hebbian DOM swarm F737, HMM portals F738, MLP collision agents F743), pointer-history decision trees on CSS grids (F739), WebGPU boids MLP flock (F740), WebXR hand + RNN + constraint physics (F741), and pointer Fourier k-means CSS3D constellations (F742). Explicitly leaves DeviceOrientation as primary causal input, pure MLP/RNN/Hebbian sequential policies, softbody/collision momentum exchange on DOM, pointer-history fields, k-means clustering, Fourier spectral features, and continuum/particle flock kernels (boids, attention particles, LBM).

## Concept
A novel hybrid spatial interface for The Verse canvas: a population of discrete vortex particles whose mutual induction is computed by the Biot-Savart law (WebGPU compute shader path when available, pure-JS fallback). Six of the vortices are embodied as living DOM agent cards. Each agent owns an evolutionary-strategy genome (strength multiplier, core-radius multiplier, hue bias) that mutates and is selectively transferred on fitness superiority. Fitness accrues from pointer proximity while the pointer is down (field injection/attraction). Best genome seals to IndexedDB and migrates over BroadcastChannel. Fully offline single-file HTML. Core novel combination: discrete vortex method (Biot-Savart kernel) + local ES genomes with victory-gated transfer + hybrid canvas field visualization + DOM agent embodiment, driven by pointer as causal injector. Not an orientation model, not a neural policy, not a softbody collision system.

## Novelty
Leaves the dominant recent cluster of orientation/MLP/HMM/Hebbian DOM agents, pointer spectral k-means, WebXR hand constraint RNN, and WebGPU continuum/flock kernels. First use of a discrete vortex particle method (Biot-Savart summation) as the spatial substrate for The Verse, combined with evolutionary-strategy genomes (not neural) that seal and transfer across tabs, with DOM cards as physical embodiments of selected vortices.

## Architecture
- Single index.html (self-contained, offline-capable).
- Agents: 12 vortex particles; 6 bound to absolute-positioned DOM cards.
- Kernel: pure-JS O(N²) Biot-Savart for induced velocity; coarse sampling for field visualization on Canvas2D. (WebGPU compute path stubbed for future batching.)
- Genome: {strMul, coreMul, hue} evolved by mutation + selective copy from higher-fitness agents.
- Physics: velocity damping + induction + soft walls; pointer-down acts as attractor/injector.
- Persistence: IndexedDB `verse-f744-vortex`. BroadcastChannel `f744-genomes`.
- Visual: Full-viewport canvas field lines + particle markers; DOM cards show fitness/circulation and take genome hue.
- Controls: Seal best, Reset, Reward nearest.

## Mechanics
1. Initialize random positions, circulations, cores, and genomes.
2. On animation frame: compute pairwise Biot-Savart induction; add pointer attractor if down; integrate positions.
3. Evolve: identify best, occasionally transfer genome to weak agents with mutation; apply genome multipliers.
4. Update canvas field samples and DOM card positions/styles/text.
5. Pointer proximity while down boosts fitness; Reward button boosts nearest.
6. Seal button persists current best genome. Incoming higher-fitness genomes from other tabs replace locals.

## Expected outcome
Open the page. A field of swirling vortices appears with overlaid DOM agent cards. Hold pointer down and move: the field is attracted and agents near the pointer gain fitness and may steal genomes. Cards change hue and reported circulation. Seal and open a second tab: better genomes migrate. Works offline after load; no special permissions.

## Failure modes
- No IndexedDB: session memory only.
- BroadcastChannel unavailable: local only.
- Low-end device: N auto-reducible (currently fixed at 12).
- Canvas context loss: still functional via DOM.

## Building blocks
Reusable pure-JS discrete vortex (Biot-Savart) kernel, evolutionary-strategy genome with sealed victory-gated transfer over IndexedDB + BroadcastChannel, hybrid canvas field + DOM embodiment. Ready for full WebGPU compute batching of the induction, multi-species vortices, or WebXR hand as a vortex injector.

Void is now Verse everywhere.

**Files**: drafts/F744-webgpu-vortex-es-genome-dom-agents-mind/SPEC.md, drafts/F744-webgpu-vortex-es-genome-dom-agents-mind/index.html
