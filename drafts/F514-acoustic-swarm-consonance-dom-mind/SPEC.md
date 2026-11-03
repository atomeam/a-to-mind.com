# F514-acoustic-swarm-consonance-dom-mind

**Ledger ID**: F-514  
**Slug**: acoustic-swarm-consonance-dom-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of MLP-voter DOM (F513), entangled-pair portals (F512), quantum-walk observers (F510), Lorentz magnetic WebXR (F511), spectral resonance (F508), SPH hand-gaze (F509), tensegrity RNN (F506), memory-palace evolutionary (F511), implicit surfaces (F505). Explicitly leaves quantum amplitudes, magnetic forces, entanglement, spectral residuals, SPH/fluid kernels, orientation RNNs, WebXR constraints, WebRTC, NCA, attention lattices, and softbody.

**Concept**
A Canvas2D particle swarm (simple boids: separation/alignment/cohesion + pointer attraction) runs in the main thread. Each agent carries a frequency. On demand, a limited set of Web Audio OscillatorNodes + GainNodes synthesize pure tones from active agents (or cluster centroids). Local spatial clustering is measured each frame; consonance is scored by how closely pairwise frequency ratios match simple just intervals (1:1, 3:2, 4:3, 5:4, 5:3, 2:1). A pure-JS evolutionary step (mutation + selection) periodically mutates agent frequencies and a few steering weights toward higher local consonance. High-consonance clusters morph nearby absolute-positioned DOM Verse cards: scale, hue rotation, opacity, and a short harmonic label derived from the cluster centroid. Pointer (mouse/touch) attracts agents and can inject a seed frequency on click. A Seal button persists lattice-equivalent state (agent array, genomes, card poses) to IndexedDB for offline restore. Fully self-contained single file, progressive enhancement, works without WebGPU.

**Novelty**
Core novel combination is an acoustic swarm substrate (Web Audio pure tones + spatial clustering) whose emergent consonance is the fitness signal for local evolution, with hybrid embodiment onto living DOM cards. Never previously used: sound as the co-evolving field, interval-ratio fitness, or audio-driven DOM morphs. Not a visual RD/NCA field, not quantum, not magnetic, not spectral residual, not MLP voter, not entangled portals.

**Architecture**
- Single index.html (progressive enhancement, offline-capable after first load)
- Canvas2D visualization of agents + trails
- Web Audio API (AudioContext, OscillatorNode, GainNode) limited to ~16 active voices
- Pure-JS agents + simple evolutionary mutation every ~2 s
- Absolute DOM cards (4–6) whose CSS is sampled from nearby cluster stats
- IndexedDB seal/restore
- Pointer + optional click seed as causal input

**Expected outcome**
Interactive acoustic swarm: agents form visible clusters, audible chords emerge when clustered, cards physically morph (size/color/label) in response to local harmony, seal/restore works, runnable offline.

**Mechanics**
- Agents: {x, y, vx, vy, freq, fitness}
- Consonance: min distance of log-ratio to log of simple intervals
- Evolution: sort by local fitness, mutate top half into bottom half + noise
- DOM: each card samples nearest cluster; applies transform/filter/opacity; text = nearest interval name
- Seal: JSON.stringify agents + cards → IndexedDB

**Failure modes**
- Web Audio blocked or suspended → visual-only mode (still evolves)
- Too many oscillators → voice limiting + gain ramp
- IndexedDB quota or private mode → in-memory only
- No pointer events → autonomous swarm continues

**V01D landing**
Skill under void-live-deploy/skills/acoustic-swarm-mind. Test: cluster agents produce audible chord and morph at least one card; seal hash restores positions.

Files: SPEC.md, index.html
