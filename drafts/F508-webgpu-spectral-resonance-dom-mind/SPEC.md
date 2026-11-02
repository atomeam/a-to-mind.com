# F-508 WebGPU Spectral Resonance DOM Mind

**Ledger ID**: F-508  
**Slug**: webgpu-spectral-resonance-dom-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of Kuramoto phase-DOM orchestras (F502), Lennard-Jones MLP swarms (F503), Poisson potential MLP (F504), stable fluids (F504), implicit surfaces (F505), tensegrity (F506), WebRTC auctions (F507). Explicitly leaves phase oscillators, molecular potentials, fluid advection, SDFs, softbody tensegrity, peer auctions, amplitude collapse, light/battery sensors, WFC, Ising, IFS, NCA, LBM, SPH, and all prior particle force or residual minds.

**Concept**  
A 2D acoustic wavefield (finite-difference wave equation) runs on Canvas2D (WebGPU compute path reserved as the next building block for the Laplacian kernel). Pointer taps inject localized impulses. A local Web Worker maintains a small population of spectral genomes (preferred frequency bins + spatial bias). Each genome samples a short time series of field energy, computes a lightweight DFT, and decides whether to "resonate": successful resonance embodies a floating DOM Verse card whose CSS position tracks a field hotspot, whose hue and scale track energy, and whose CSS animation-duration is locked to the detected dominant period. Global spectral entropy (spread of bin energies) morphs page chrome (hue, blur, filter). User clicks on a card reinforce its genome (positive fitness). Full state (wave snapshot hash, genomes, card poses) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

**Novelty**  
Core novel combination is a wave-equation substrate whose local spectral (frequency-domain) features are extracted by competing evolutionary genomes that physically embody and frequency-lock interactive DOM cards. Not Kuramoto phases, not particle forces, not residual reservoirs, not constraint propagation, not softbody springs, not NCA, not LBM, not amplitude collapse, not light metabolism.

**Architecture**  
- Single index.html (progressive enhancement, offline-capable)  
- Canvas2D wave grid (real/velocity buffers, finite-difference step)  
- Web Worker (blob) with pop of 6 spectral genomes, DFT fitness, mutation  
- Absolute DOM cards (4–8) driven by resonance events  
- CSS custom properties for chrome morph from spectral entropy  
- IndexedDB seal of genomes + field stats  
- Pointer primary input; optional DeviceOrientation for mild damping bias  

**Expected outcome**  
Interactive wavefield that "sings" into living frequency-locked DOM cards. User can train preferred resonances by clicking cards. Sealed minds restore across reloads. Demonstrates a frequency-domain mind on a continuous wave substrate that previous time-domain or particle experiments never combined with DOM embodiment.

**Failure modes**  
- Wave numerical instability if CFL violated (capped timestep)  
- DFT cost on main thread (moved to worker)  
- DOM thrashing if too many cards (hard cap)  
- IndexedDB quota (small state only)

**V01D landing**  
Skill under void-live-deploy/skills/spectral-resonance or a page-level effect in Verse canvas. Test: inject impulse, observe card spawn with matching period, seal and reload, verify genome restore.  
