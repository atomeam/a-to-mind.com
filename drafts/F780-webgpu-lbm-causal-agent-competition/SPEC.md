# F-780 WebGPU Lattice Boltzmann Causal Agent Competition

**Novel combination:** First Lattice Boltzmann Method (LBM) fluid kernel in WebGPU compute shaders. A tiny local online-learning linear model (not MLP/RNN) takes DeviceMotion acceleration + pointer velocity as causal inputs to modulate body force and relaxation time in the LBM. Multiple competitive agents ride the resulting velocity field; fitness is energy harvested from fluid shear. When an agent collides with a weaker one, it seals and transfers a mutated copy of its genome (the force-modulation weights) via IndexedDB. Hybrid embodiment: WebGPU density/velocity visualization + floating DOM agent markers that can be dragged to inject momentum.

**Branches away from:** recent echo-state SDF portals (F779), SPH policy fluids (F777), Biot-Savart orientation MLPs (F773), WebXR/orientation CSS3D swarms (F776), genome broadcast competitions (F778), pure residual predictors, attention lattices, NCA, spectral residuals, softbody DOM, pointer-history fields.

**Architecture:** single index.html; WebGPU compute for LBM collide/stream steps on a 128x128 grid; tiny online LMS updater on main thread for the causal force model; agents as points advected by sampled velocity; IndexedDB for sealed genomes; offline-capable; no external deps.

**Expected:** Open page → fluid swirls under gravity + sensor/pointer forces. Agents drift with the flow and compete; successful ones glow and can seal their adaptation. Drag an agent to fling it. Tilt or shake device (or move pointer) to stir the fluid and retrain the local model. Best genomes persist.

**Failure modes:** No WebGPU → canvas2D particle approximation of the same dynamics. No DeviceMotion → pointer-only force. IndexedDB blocked → in-memory only. High-res grid on weak GPUs auto-downsamples.

**Building blocks:** reusable LBM compute kernel (collide + stream), causal LMS force modulator, agent-on-fluid competition with sealed genome transfer, hybrid WebGPU + DOM embodiment.

**Files**
- drafts/F780-webgpu-lbm-causal-agent-competition/SPEC.md
- drafts/F780-webgpu-lbm-causal-agent-competition/index.html
