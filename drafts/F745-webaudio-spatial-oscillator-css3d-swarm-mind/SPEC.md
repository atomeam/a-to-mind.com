# F745-webaudio-spatial-oscillator-css3d-swarm-mind

**Ledger ID**: F-745 (frontier series)

**Slug**: `webaudio-spatial-oscillator-css3d-swarm-mind`

**Date**: 2026-11-13

**Concept**
A novel sonic spatial mind for The Verse canvas: a swarm of 10 absolute-positioned DOM agent cards living in a CSS 3D perspective volume. Each card owns a Web Audio OscillatorNode + PannerNode whose 3D position is kept in sync with the card's CSS transform. Frequencies and coupling strengths form a local evolutionary genome. Agents continuously attempt to phase-lock with spatial neighbors (distance-weighted Kuramoto-style coupling computed in pure JS). Pointer proximity injects a reference tone that boosts local fitness. High-fitness genomes are sealed to IndexedDB and transferred via BroadcastChannel. The canvas chrome hue-shifts with global lock order parameter. Completely offline after load; no external models.

**Architecture**
- Single self-contained `index.html`.
- Audio: AudioContext with 10 OscillatorNodes (sine/triangle) + individual PannerNodes (HRTF) + master Gain + AnalyserNode for optional viz.
- Spatial: CSS `perspective` container; cards use `transform: translate3d(...)` driven by simple Verlet-like integration of spring + coupling forces.
- Local AI: each agent holds genome `{baseFreq, coupling, hue}`; evolutionary strategy: periodic mutation of weak agents toward best, fitness = time-integrated proximity to pointer + lock coherence.
- Persistence: IndexedDB key `verse-f745-osc`; BroadcastChannel `f745-genomes`.
- Fallback: if Web Audio blocked, still runs visual swarm with silent "oscillators".

**Mechanics**
1. User gesture starts AudioContext.
2. Agents initialize at random 3D positions and random genomes.
3. Each frame: compute spatial distances → coupling forces on phase and position; integrate; update CSS transforms and Panner positions; advance oscillator frequencies toward locked targets.
4. Pointer down/move near an agent injects energy and increases its fitness.
5. Seal button stores best genome + positions. Other tabs receive and adopt higher-fitness genomes.
6. Global order parameter (mean pairwise phase coherence) modulates page filter/hue.

**Expected outcome**
Open page, click "Start Audio". Cards float in 3D space emitting tones that lock into chords when close. Move pointer to attract and train agents. Seal a pleasant swarm and open second tab: better genome migrates, altering the sonic landscape. Works offline; graceful silent mode.

**Failure modes**
- No AudioContext (autoplay policy): visual-only mode.
- No IndexedDB: in-memory.
- No BroadcastChannel: local only.
- Low-end: reduce agent count to 6.

**Building blocks**
Reusable Web Audio + CSS 3D synchronized spatial oscillators, distance-weighted phase coupling, evolutionary genome sealing. Ready for AudioWorklet kernels, WebXR listener, or multi-species timbres.

Void is now Verse everywhere.
