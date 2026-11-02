# F510-webgpu-quantum-walk-observer-mind

**Ledger ID**: F-510  
**Slug**: webgpu-quantum-walk-observer-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of WebGPU spectral/phase/DOM resonance (F508), WebRTC RNN DOM auctions (F507), tilt-gaze tensegrity (F506), implicit surfaces (F505), Poisson/fluids/Lennard-Jones MLP DOM (F504/F503), SPH hand-gaze RNN (F509). Explicitly leaves spectral wavefields, phase oscillators, softbody tensegrity, SDF raymarching, particle force MLPs, fluid advection, SPH density kernels, and pure DOM card embodiment. Introduces discrete-time quantum walk as the primary mind substrate (previously unused), local classical observer policy that chooses measurement bases from pointer history, hybrid probability-density-to-DOM collapse embodiment, and sealed walker state.

**Concept**  
A 2D discrete-time quantum walk (DTQW) on a finite lattice is evolved on Canvas2D (WebGPU compute path reserved for the coin+shift kernel). The walker has a two-component coin state. A tiny local classical policy (simple residual MLP) takes recent pointer trajectory and current probability density hotspots as input and outputs preferred observation coordinates and coin-bias parameters. High local probability triggers "collapse" events that spawn floating hybrid DOM cards labeled with the measured amplitude phase. User can drag cards to re-inject the walker with a new coin state or shift the lattice. Global coherence (off-diagonal density matrix elements approximated) morphs page chrome (hue, scale). Full state (lattice amplitudes, policy weights, card poses) seals to IndexedDB. Fully self-contained, offline after first load.

**Why novel**  
Grep of drafts before this run: quantum walk 0, DTQW 0, coin operator 0. Prior amplitude-collapse (F500) was complex-amplitude portal spawning without a unitary walk evolution or local measurement policy. This is the first quantum-walk mind on the Verse canvas.

**Architecture**  
- `index.html`: single-file prototype.  
  - Canvas2D renders |ψ|² density and phase as color.  
  - Simple 4→6→2 residual policy in pure JS for observation choice.  
  - DOM cards absolute-positioned, draggable, CSS transforms driven by local phase.  
  - IndexedDB for seal/restore.  
  - Pointer events inject initial walker or bias.  

**Expected outcome**  
Interactive quantum-walk field where local AI observer steers collapses, DOM cards embody measured states, chrome responds to coherence. Runnable offline.

**Mechanics**  
- Evolve coin (Hadamard + bias) and conditional shift each step.  
- Policy samples density, chooses measure site; project and renormalize.  
- Spawn card on |ψ|² > threshold.  
- Drag card → set walker position and coin from card phase.  
- Seal button persists amplitudes + weights.  

Files: SPEC.md, index.html
