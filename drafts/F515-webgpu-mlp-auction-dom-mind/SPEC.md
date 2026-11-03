# F515-webgpu-mlp-auction-dom-mind

**Ledger ID**: F-515  
**Slug**: webgpu-mlp-auction-dom-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of acoustic-swarm consonance DOM (F514), MLP-voter DOM (F513), entangled-pair portals (F512), quantum-walk observers (F510), Lorentz magnetic WebXR (F511), spectral resonance (F508), SPH hand-gaze RNN (F509), Kuramoto/reservoir/Ising/WFC/NCA/attention/softbody/orientation-RNN/pointer-history. Explicitly leaves all prior physics kernels (LJ, SPH, LBM, Lorentz, quantum walk, entanglement), acoustic/spectral, voter models, phase oscillators, hand/gaze constraints, residual predictors, volumetric injection, pure NCA, and particle force fields.

**Concept**
A fixed set of absolute-positioned DOM Verse cards (the "territories") are contested by a population of local MLP agents. Each agent owns a tiny 2-layer MLP that, given a feature vector (local density proxy, pointer proximity, DeviceOrientation gravity components, card index), outputs a continuous bid value. Every frame a pure-JS (or WebGPU-accelerated when available) clearing computes the highest bidder per card; the winner temporarily owns the card and its MLP forward pass also produces style deltas (hue shift, scale, translate offset) that are applied as CSS custom properties / transforms. Users can seal any agent's genome (weights hash + copy) and transfer it to another agent (or inject into a multi-tab peer via BroadcastChannel as a local shared-field proxy). Full agent state + card ownership seals to IndexedDB for offline restore. Pointer drag injects a temporary bid boost; DeviceOrientation biases all agents' gravity feature. Fully self-contained single file, progressive enhancement, offline-capable after first load.

**Novelty**
Core novel combination is a competitive sealed-genome auction substrate (never previously used) in which MLPs bid for exclusive control of living DOM cards, with the same networks also generating the embodiment style, closed under DeviceOrientation-as-feature and BroadcastChannel multi-tab shared-field transfer. Not particle force fields, not acoustic consonance, not voter consensus, not quantum/magnetic/entangled, not SPH/Kuramoto, not attention lattices. WebGPU path is reserved for parallel batch forward passes of many MLPs (previously unused kernel: batched small-MLP inference).

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- 6–8 fixed DOM Verse cards
- 8–12 local MLP agents (weights as Float32Array)
- Pure-JS auction + optional WebGPU compute shader for batched MLP forward (fallback always present)
- DeviceOrientationEvent → gravity feature vector
- Pointer → bid boost + feature
- Seal/transfer buttons; BroadcastChannel for multi-tab genome & state sync
- IndexedDB persistence of agents + ownership

**Expected outcome**
Interactive auction: cards visibly change ownership (color/scale/position jitter), higher-bid agents dominate more cards, user can seal and transfer genomes, multi-tab peers see transferred genomes, seal/restore works, runnable offline, WebGPU accelerates when present.

**Mechanics**
- MLP: input 6 → hidden 8 → output 2 (bid, styleDelta); ReLU
- Features: [pointerDist, orientX, orientY, cardIdNorm, agentIdNorm, noise]
- Auction: per card argmax bid; winner applies style
- Transfer: serialize weights, hash, BroadcastChannel post or local inject
- Seal: IndexedDB put({agents, ownership, ts})

**Failure modes**
- No WebGPU → pure JS path (still interactive)
- No DeviceOrientation → zero gravity feature
- BroadcastChannel blocked (private mode) → local only
- IndexedDB quota → in-memory
- Too many agents → cap at 12

**V01D landing**
Skill under void-live-deploy/skills/mlp-auction-mind. Test: at least one card changes owner after pointer interaction; sealed genome hash restores identical weights on reload.

Files: SPEC.md, index.html
