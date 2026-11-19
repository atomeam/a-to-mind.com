# F844-webgpu-sph-mlp-competition-mind

**Ledger ID**: F-844

**Concept**
Multi-agent competition of local tiny MLPs that control distinct "species" within a shared WebGPU Smoothed Particle Hydrodynamics (SPH) fluid simulation. Each of 4 agents owns a cohort of SPH particles. The MLP genome takes causal inputs (local density residual, relative pointer position, DeviceOrientation tilt) and outputs per-species force scale, cohesion bias, and color channel. Fitness is measured by species coherence (low internal variance) + coverage of user interaction regions. High-fitness genomes are sealed and transferred over BroadcastChannel + IndexedDB. The fluid itself is the hybrid physical embodiment; pointer injects impulse, tilt applies global gravity.

**Novelty**
Deliberately branches from the recent dominant cluster of portal-based planning/spiking/diffusion/WebXR-cloth/gaze-SDF minds (F836–F843) and earlier continuum kernels (Gray-Scott, NCA, wavefields, DEM). Core novel combination is WebGPU compute SPH (previously unused kernel in this ledger) whose collision and external forces are modulated by competing local MLPs with sealed genome transfer. Not a superficial variation of prior particle swarms, Coulomb DOM, or fluid morphs. Hybrid embodiment: the living fluid body is co-controlled by multiple sealed minds.

**Architecture**
- Single self-contained index.html (offline after load, progressive enhancement)
- WebGPU compute shaders: neighbor search (spatial hash approx via sorted grid), density/pressure, force accumulation, integration
- Fallback: Canvas2D particle approximation if no WebGPU
- 4 competing agents × ~256 particles each
- Tiny MLP per agent: 5-8-3 (inputs: densRes, dxPtr, dyPtr, orientX, orientY; outputs: forceScale, cohesion, hue)
- Physics: standard SPH pressure + viscosity + external (pointer + orientation gravity)
- Fitness: coherence (1 / variance) + dwell coverage
- Seal: IndexedDB store `f844-sph-mlp` + BroadcastChannel `f844-genome` (adopt higher fitness)
- Visual: canvas render of particles colored by species/MLP output

**Expected outcome**
User sees a living multi-species fluid. Tilt the device to apply gravity; click/drag to inject force. Agents compete; better-performing species dominate visually. Click "Seal" or automatic transfer adopts stronger genomes across tabs. Interactive spatial local-AI capability for The Verse canvas.

**Failure modes**
No WebGPU → Canvas2D fallback with reduced particles. No DeviceOrientation → no tilt gravity. IndexedDB blocked → memory-only genomes. High particle count → adaptive count for 30+ FPS.

**Building blocks**
WebGPU SPH compute kernel, multi-agent MLP competition over shared continuum field, sealed genome transfer for fluid parameters, orientation-as-causal-force. Expands hybrid continuum + competitive local models for future Verse embodiments.

**Files**: drafts/F844-webgpu-sph-mlp-competition-mind/SPEC.md, drafts/F844-webgpu-sph-mlp-competition-mind/index.html
