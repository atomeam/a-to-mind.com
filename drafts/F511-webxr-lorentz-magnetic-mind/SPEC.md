# F511-webxr-lorentz-magnetic-mind

**Ledger ID**: F-511  
**Slug**: webxr-lorentz-magnetic-mind  
**Date**: 2026-11-02  
**Branch from**: Recent dominant cluster of WebGPU continuum/particle physics (SPH density-pressure F509, quantum-walk observer F510, spectral resonance F508, fluids/Poisson/Lennard-Jones MLP DOM F504/F503, implicit surfaces F505, tensegrity F506, WebRTC RNN auction F507). Explicitly leaves SPH kernels, quantum walks, spectral wavefields, fluid advection, Poisson potentials, softbody constraints, phase oscillators, and pure particle-force MLPs. Introduces Lorentz magnetic force (v × B) as the primary mind substrate (previously unused), true WebXR hand/gaze (or pointer+orientation fallback) as causal setter of the magnetic field dipole, local tiny causal RNN modulating B-strength and charge injection, hybrid high-energy cluster-to-DOM flux-card embodiment, and sealed genome.

**Concept**  
A population of charged particles evolves under the Lorentz force F = q (v × B) on Canvas2D (WebGPU compute path reserved for the force kernel). The magnetic field B is a dipole whose position and orientation are driven in real time by WebXR hand joint / gaze ray (pointer + DeviceOrientation fallback). A tiny local causal RNN takes recent hand/pointer residual history and local particle kinetic energy as input and outputs modulation of |B| and charge-sign bias. High local energy density triggers spontaneous embodiment as floating hybrid DOM "flux cards" whose CSS hue/scale is driven by local |v| and RNN hidden state. User can drag cards to re-inject momentum or flip charge. Two competing local agents each own a sealed genome (RNN weights + rest B params). Fitness rewards stable interesting cyclotronic orbits + user engagement. Winner seals and can BroadcastChannel-transfer the genome. Full state persists in IndexedDB. Fully self-contained, offline after first load.

**Why novel**  
Grep of drafts before this run: Lorentz 0, magnetic force 0, cyclotron 0, v × B 0. Prior particle systems were SPH density/pressure, Lennard-Jones, stable fluids advection, or simple boids. This is the first Lorentz-magnetic mind on the Verse canvas, combining true spatial input (WebXR hand/gaze) as the causal source of the field itself with local RNN parameter control and hybrid DOM embodiment.

**Architecture**  
- `index.html`: single-file prototype.  
  - Canvas2D renders particles colored by charge and speed.  
  - Simple 6→8→3 residual RNN in pure JS for B-modulation.  
  - DOM flux cards absolute-positioned, draggable.  
  - IndexedDB for seal/restore of genomes and snapshot.  
  - WebXR immersive-ar preferred for hand tracking; graceful fallback.  
  - Pointer events and DeviceOrientation set B dipole.

**Expected outcome**  
Interactive magnetic particle field where hand/gaze/tilt steers the field lines, particles cyclotron-orbit, high-energy clusters birth DOM cards you can drag, seal/transfer genomes. Runnable offline.

**Mechanics**  
- Euler/Verlet integration of charged particles under Lorentz + mild electric damping.  
- B dipole from hand/pointer position, strength from RNN.  
- Policy samples kinetic energy, modulates.  
- Spawn card on local KE > threshold.  
- Drag card → inject velocity or charge.  
- Seal button persists weights + poses.

**Failure modes**  
- No WebXR/hand support → pointer + orientation fallback always works.  
- High particle count → frame drops; capped at ~120.  
- Numerical instability under strong B → clamped |v|, damping.  
- IndexedDB unavailable → in-memory only.

**V01D landing**  
Skill under void-live-deploy/skills/webxr-lorentz-rnn-mind or Verse canvas spatial effect. Test: hand proximity or tilt steers B, particles orbit, cluster spawns flux card, seal/restore genome.

Files: SPEC.md, index.html
