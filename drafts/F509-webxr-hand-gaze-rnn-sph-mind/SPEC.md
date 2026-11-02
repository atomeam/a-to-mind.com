# F-509 WebXR Hand-Gaze Causal RNN Orchestrating WebGPU SPH Particle Mind

**Ledger ID**: F-509  
**Slug**: webxr-hand-gaze-rnn-sph-mind  
**Date**: 2026-11-02  
**Branch from**: Recent dominant cluster of WebGPU spectral/phase/DOM resonance (F508), WebRTC RNN DOM auctions (F507), tilt-gaze tensegrity (F506), implicit surfaces (F505), Poisson/fluids/Lennard-Jones MLP DOM (F504/F503). Explicitly leaves spectral wavefields, phase oscillators, softbody tensegrity, SDF raymarching, particle force MLPs, fluid advection, and pure DOM card embodiment. Introduces SPH-style density/pressure particle kernel (previously unused), true WebXR hand+gaze as causal input to a local RNN that modulates the SPH parameters themselves (not direct forces), hybrid particle-to-DOM cluster embodiment, and sealed genome transfer.

**Concept**  
A population of particles evolves under a simplified Smoothed Particle Hydrodynamics (SPH) model (density estimation + pressure forces + viscosity) on Canvas2D (WebGPU compute path reserved as next kernel). A tiny local causal RNN takes WebXR hand joint positions / gaze ray (or pointer + DeviceOrientation fallback) as causal input and outputs modulation of global SPH parameters (viscosity, pressure stiffness, gravity bias). High-density clusters spontaneously embody as floating hybrid DOM "orbs" whose CSS is driven by local density and RNN state. Two competing local agents each own a sealed genome (RNN weights + SPH params). Fitness rewards stable interesting clusters + user engagement. Winner can seal and BroadcastChannel-transfer the genome. Full state persists in IndexedDB. Fully self-contained, offline after first load.

**Novelty**  
Core novel combination is WebXR hand/gaze (or orientation) as causal driver of a local RNN that controls the parameters of an SPH density-pressure particle substrate, with emergent high-density clusters embodying as interactive DOM orbs, and multi-agent sealed-genome competition. Not spectral, not phase-locked DOM, not tensegrity constraints, not implicit SDF, not direct MLP particle forces, not residual or attention lattices.

**Architecture**  
- Single index.html (progressive enhancement, offline-capable)  
- Canvas2D SPH-inspired particles (~80) with neighbor density/pressure  
- Tiny causal RNN (pure JS, 8→12→4) modulating viscosity/pressure/gravity  
- WebXR immersive-ar preferred for hand tracking + gaze; pointer + DeviceOrientation fallback  
- Absolute DOM orbs spawned from clusters  
- Multi-agent competition + sealed genome via BroadcastChannel  
- IndexedDB for genomes and snapshot  
- CSS custom properties for chrome from average density

**Expected outcome**  
Interactive living particle fluid that responds to hand/gaze/tilt by changing viscosity and pressure; clusters birth DOM orbs you can click to reinforce; seal and transfer genomes across tabs. Demonstrates causal RNN control of a continuous SPH-style mind substrate with hybrid embodiment.

**Failure modes**  
- No WebXR/hand support → pointer + orientation fallback always works  
- High particle count → frame drops; capped  
- SPH instability → clamped forces + damping  
- IndexedDB/BroadcastChannel unavailable → in-memory only  

**V01D landing**  
Skill under void-live-deploy/skills/webxr-sph-rnn-mind or Verse canvas spatial effect. Test: hand proximity or tilt modulates viscosity, cluster spawns orb, seal/restore genome, BroadcastChannel transfer.  
