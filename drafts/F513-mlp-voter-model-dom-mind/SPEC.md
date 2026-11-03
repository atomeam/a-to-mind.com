# F513-mlp-voter-model-dom-mind

**Ledger ID**: F-513  
**Slug**: mlp-voter-model-dom-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of WebGPU quantum-walk observers (F510), Lorentz magnetic WebXR (F511), entangled-pair portals (F512), spectral resonance DOM (F508), hand-gaze RNN SPH (F509), tensegrity RNN (F506), memory-palace evolutionary (F511), implicit surfaces (F505). Explicitly leaves quantum amplitudes, magnetic forces, entanglement, spectral residuals, SPH/fluid kernels, orientation RNNs, WebXR hand constraints, WebRTC auctions, and prior NCA/attention/softbody clusters.

**Concept**
A 2D lattice runs the voter model (stochastic opinion dynamics: each site adopts a random neighbor's state with probability p) as a WebGPU compute kernel (or pure-JS fallback). A population of local tiny MLPs (pure JS, 6→8→3) act as seeding agents: they observe pointer position, local majority, and DeviceOrientation tilt, then choose lattice coordinates to inject a preferred opinion. Agents compete for domain control; fitness is the size of the contiguous region matching their seeded opinion. On spatial proximity of their influence centers the stronger agent seals a mutated genome (weights) and transfers it to the weaker. Successful large domains morph hybrid DOM Verse cards (CSS transform, hue, opacity driven by domain stats). Full state (lattice snapshot hash, genomes, card poses) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

**Novelty**
Core novel combination is the voter-model consensus substrate (never previously used) whose stochastic updates are steered by competing pure-JS MLPs that physically embody and morph interactive DOM cards, with sealed genome transfer on domain contact. Not quantum walk, not Lorentz/magnetic, not entangled pairs, not spectral, not SPH, not RNN orientation, not NCA, not attention lattice, not softbody.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- WebGPU compute path for voter kernel (JS lattice fallback)
- Pure-JS MLPs as agents
- Canvas visualization of lattice + absolute DOM cards
- IndexedDB persistence
- Pointer + DeviceOrientation causal inputs

**Failure modes**
- WebGPU unavailable → JS fallback
- DeviceOrientation denied → pointer-only
- IndexedDB quota → in-memory only
