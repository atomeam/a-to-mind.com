# F-220 WebGPU MLP SPH Genome Competition

**Novel combination:** WebGPU compute shader runs a simple SPH-like particle fluid (density + pressure forces on ~1024 particles). 6 agents each own a tiny local MLP (4 inputs → 3 hidden → 2 outputs: force scale + viscosity bias) whose genome is the weight vector. Inputs are DeviceOrientation (beta/gamma as gravity tilt), local density, and agent id bias. Agents compete on average particle cohesion around their "home" cluster. Weakest genome is mutated from the leader every 8 seconds. Leader can seal genome to IndexedDB; sealed genomes broadcast via BroadcastChannel for cross-tab injection. Hybrid embodiment: WebGPU/canvas particle field + absolutely positioned DOM agent badges that track their cluster centroids and glow by fitness.

**Branches away from:** the recent cluster of spatial attention lattices (F219), residual oracles (F216), orientation RNN softbody DOM competitions (F218), acoustic/spectral foragers and swarms (F214, F217), neural-kernel DOM chains (F213), and earlier residual/attention/pointer-history fields. Explicitly avoids attention mechanisms, residual predictors, pure NCA, spectral/audio residuals, and pointer-history embeddings. Moves to WebGPU compute physics kernel driven by local tiny MLP genomes under DeviceOrientation causal input, with multi-agent sealed-genome competition and hybrid canvas+DOM.

**Architecture:** single self-contained index.html; WebGPU compute for particle update (Canvas2D fallback if no WebGPU); main-thread tiny MLPs; DeviceOrientation + pointer drag as external forces; IndexedDB seal; BroadcastChannel; CSS DOM badges. Fully offline after first load; no external dependencies. Progressive enhancement: works without WebGPU or orientation.

**Expected:** Living particle fluid that responds to device tilt (gravity) or mouse drag. Colored particle clusters form around agents; DOM badges float at cluster centers and rank by cohesion. Competition evolves genomes; seal persists best across reloads and shares to other tabs.

**Failure modes:** no WebGPU (Canvas2D Verlet fallback); orientation denied (mouse drag simulates tilt); IndexedDB blocked (in-memory only); BroadcastChannel unavailable (local only); high particle count on low-end (auto-reduce to 512).

**Building blocks:** WebGPU compute SPH-style kernel as physical substrate; local MLP genomes controlling force/viscosity under orientation; multi-agent sealed genome competition + BroadcastChannel transfer; hybrid canvas+DOM cluster badges. Next: true WebXR hand forces into the SPH kernel, or WebRTC DataChannel for cross-device genome sharing.

V01D landing: spatial multi-agent physics skill under void-live-deploy/skills/; testable by cohesion score under simulated orientation and genome round-trip via IndexedDB.

_Renumbered on 2026-10-29: this draft was F220-webgpu-mlp-sph-genome-competition (F-220), a number it shared with F220-window-spanning-organism. Its number is now F-432; see drafts/NUMBERS.md._
