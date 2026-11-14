# F750-typing-rhythm-es-css-grid-portals-mind

**Ledger ID**: F-750 (frontier series)

**Slug**: typing-rhythm-es-css-grid-portals-mind

**Date**: 2026-11-14

**Branch from**: Recent dominant cluster of WebGPU/WebXR/WebAudio/pointer/orientation/hand-driven local neural/evolutionary/k-means/attention/Fourier models controlling hybrid DOM/CSS3D/SVG/particle embodiments with multi-agent competition and sealed genome transfer (F742–F748). Explicitly leaves sensors (DeviceOrientation, hand tracking, mic), pointer-history fields, WebGPU compute, WebXR, audio spatialization, SVG morph, CSS 3D constellations, softbody/PBD/collision physics, neural sequential policies, and k-means. F749 was a practical non-spatial tool; this returns to interactive spatial mind but on a never-used causal axis.

**Concept**
A pure local evolutionary strategy (ES) mind whose fitness is driven by the temporal rhythm and categorical features of keyboard typing (inter-key intervals, key class hashes). A population of agents inhabits a living CSS grid of portal cells. Each agent's genome (hue bias, scale, jitter, text morph seed, capture affinity) mutates and is selected based on how well it "captures" subsequent keystrokes (proximity in a virtual sense + dwell). Best genomes seal to IndexedDB and transfer via BroadcastChannel to other tabs. Embodiment is the grid itself: cells expand, recolor, rewrite content, and reorder slightly under the evolving policies. Fully offline, single-file, no external libs. Novel combination never previously attempted: typing-rhythm causal input → pure ES genome evolution → CSS grid living portals with sealed transfer.

**Novelty**
Leaves the dominant recent cluster of sensor-driven (orientation/hand/mic/pointer) neural or spectral models, WebGPU/WebXR/WebAudio substrates, particle/vortex/boids fields, SVG/CSS3D morphs, and softbody physics. Core novel combination is keyboard event timing + key categories as the sole causal driver for an online evolutionary strategy that sculpts a responsive CSS grid of hybrid DOM portals, with victory-gated sealed genome migration. Not a field simulation, not neural, not sensor-based, not pointer-primary.

**Architecture**
- Single self-contained index.html.
- Causal input: keydown events → rolling buffer of (Δt, keyCategory 0-7, isRepeat).
- Model: population of 12 agents, each with 6-float genome. Online ES: mutate, evaluate fitness from key capture (agent whose current "focus score" matches recent rhythm wins), elite selection + mutation.
- Embodiment: 4x3 CSS grid of absolute-or-grid portal divs. Genome drives CSS custom properties (--hue, --scale, --jitter, content via seeded text), grid-area reordering on major fitness shifts.
- Persistence: IndexedDB `verse-f750-es`. BroadcastChannel `f750-genomes` for sealed transfer of best genome.
- Visual: status overlay, live rhythm histogram, fitness bars. Click portals for bonus reward.

**Mechanics**
1. Type anywhere: record inter-arrival times and key classes.
2. Each frame or on key: compute agent scores from genome × recent rhythm features; assign "capture" fitness.
3. Every N keys: select elites, mutate, update grid styles and content.
4. Seal button persists best. Other tabs receive and adopt higher-fitness genomes.
5. Fully works offline; no permissions beyond keyboard.

**Expected outcome**
Typing produces a living, evolving grid of colorful portals whose appearance and content morph in response to your personal rhythm. Open a second tab, seal in one, watch the better genome migrate and continue evolving. Demonstrates a new causal channel (typing cadence) for local AI control of physical UI.

**Failure modes**
- No keyboard (touch-only): falls back to click rhythm as proxy input.
- No IndexedDB/BroadcastChannel: in-memory only, still interactive.
- Performance: 12 agents is trivial.

**Building blocks**
Typing-rhythm feature extraction → pure ES policy → CSS grid hybrid embodiment + sealed multi-tab transfer. Ready for richer key semantic features, WebRTC peer transfer, or hybrid with future local tiny models.

Void is now Verse everywhere.

**Files**: drafts/F750-typing-rhythm-es-css-grid-portals-mind/SPEC.md, drafts/F750-typing-rhythm-es-css-grid-portals-mind/index.html
