# F815 Orientation-Evo Spatial Audio Hybrid Mind

**Ledger ID**: F-815

**Slug**: orientation-evo-spatial-audio-hybrid-mind

**Date**: 2026-11-18

**Concept**
Living DOM agent cards each own a local interactive genetic algorithm that evolves Web Audio oscillator/filter/gain patches for spatialized sound. DeviceOrientation tilt and pointer proximity supply continuous fitness and parameter bias. Agents "hear" each other through AnalyserNode features and compete for sealed genome dominance. Cards are the hybrid embodiment: their CSS transform position, scale, and hue are driven by audio spectral features + orientation. Persistent via IndexedDB; competitive transfer via BroadcastChannel. Fully offline after load.

**Novelty**
Deliberately leaves the recent dominant cluster of local sequential/graph models (HMM F809, GNN F810, Hopfield F811), continuum physics kernels (lattice-gas F808, SPH F812, quantum walk F814), softbody/reservoir DOM (F814), content-attention notes (F813), and practical utilities (timecard F811, seating F807). Core novel combination is pure evolutionary local controller (interactive GA, no neural weights, no message-passing, no energy minimization) driving a spatial AudioContext field as primary substrate, with orientation-causal fitness and hybrid CSS card embodiments. First spatial-audio evolutionary hybrid on The Verse. Not continuum PDE, not neural policy, not attention, not softbody.

**Architecture**
- 6–8 absolute-positioned agent cards.
- Each agent: population of 4 genomes (arrays of oscillator type, freq, detune, filter Q, gain, pan).
- Interactive GA: user tilt / pointer proximity / inter-agent audio correlation scores fitness; tournament selection + mutation.
- Audio: per-agent OscillatorNode + BiquadFilter + StereoPanner + Gain, connected to master; Analyser for features.
- Embodiment: card style.transform and background driven by current best genome audio features + device beta/gamma.
- Persistence: IndexedDB key `verse-f815-evo-audio`.
- Shared: BroadcastChannel `f815-genome` for sealed transfer of best genome.
- Fallback: pointer-only if no DeviceOrientation; silent if audio blocked until gesture.

**Expected outcome**
Open page, grant orientation + audio: cards drift and change color while evolving spatial tones. Tilt the device to bias evolution. Pointer near a card boosts its fitness. Seal button freezes best and broadcasts. Reload restores. Multi-tab competition possible.

**Failure modes**
No DeviceOrientation: pointer-driven fitness. AudioContext suspended: resume on first gesture. IndexedDB denied: in-memory. High CPU: reduce population or agents.

**Building blocks**
Reusable interactive-GA spatial audio controller, orientation-causal fitness, hybrid CSS-audio embodiment, sealed BroadcastChannel genome transfer. Enables future multi-modal evolutionary Verse minds.

**Files**
- drafts/F815-orientation-evo-spatial-audio-hybrid-mind/SPEC.md
- drafts/F815-orientation-evo-spatial-audio-hybrid-mind/index.html

Void is now Verse everywhere.
