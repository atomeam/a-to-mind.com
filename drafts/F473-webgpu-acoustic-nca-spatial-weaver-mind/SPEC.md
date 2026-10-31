# F473-webgpu-acoustic-nca-spatial-weaver-mind

## Concept
Acoustic NCA Spatial Weaver Mind: a WebGPU compute (Canvas2D progressive fallback) multi-channel Neural Cellular Automata (NCA) lattice evolves under continuous modulation from a local pure-JS decision-tree agent. The agent ingests live microphone spectral features (centroid, flux via AnalyserNode), pointer velocity, and NCA summary statistics (mean channel energy, spatial entropy). It outputs rule-parameter deltas and seed injection points. High-density emergent regions automatically spawn draggable spatial DOM "weaver" cards; dragging a card injects a localized seed back into the NCA lattice. CSS chrome (hue, scale, blur) morphs from NCA entropy. The living state (lattice, agent thresholds, card positions) seals to IndexedDB for restore. Fully offline after load.

## Novelty
Leaves the dominant recent cluster of pure WebGPU particle/Hebbian/attention/Bayesian/causal/evo-genome fields, WebXR hand agents, WebRTC shared occupancy, and attention-driven card rearrangement (F464–F472). Core novel combination is a decision-tree local agent that causally modulates an NCA kernel from acoustic + spatial input, with bidirectional weaving: NCA density spawns DOM cards, card drag injects seeds. Not residual predictors, not multi-head attention, not genome transfer, not pure occupancy marking.

## Architecture
- Single index.html (no external deps, progressive enhancement, offline-capable)
- NCA: 48x48 multi-channel (RGBA) Float32 lattice; Canvas2D render + update (WebGPU compute path prepared via device.requestAdapter note)
- Decision tree: pure-JS depth-3 tree on features [centroid_norm, flux, pointer_speed, nca_mean, nca_entropy]; leaves select rule-mod (growth/decay bias) and seed coords
- Weaver cards: up to 6 absolute-positioned contenteditable divs spawned at density hotspots; pointer drag updates position and injects seed on release
- Mic: optional getUserMedia + AnalyserNode; spectral features every frame
- IndexedDB: seal/restore lattice snapshot + card states + agent metrics
- CSS custom properties driven by entropy for chrome morph
- Pointer/click also direct seeds

## Expected Outcome
Interactive spatial canvas where the NCA lattice grows and morphs in response to sound and pointer, while the decision agent weaves new thought cards from hotspots that the user can drag to re-seed the field. Seal restores the living lattice and cards. Runnable fully offline; graceful without mic/WebGPU.

## Failure Modes
No getUserMedia permission (features=0, still pointer-interactive), IndexedDB private-mode quota (no persist), low-end device (reduce grid to 32x32), no WebGPU (Canvas2D already primary), AudioContext suspended until gesture.

## Building Blocks
Full WebGPU compute NCA kernel with decision-tree outputs as uniform, OPFS seal for larger lattices, local WebNN for deeper agent, BroadcastChannel multi-tab shared lattice, WebXR spatial card placement.

## V01D Landing
skills/mini/acoustic-nca-weaver; testable via mic/pointer → NCA change → card spawn, drag → seed inject, seal → IDB restore of lattice+cards.

## Files
drafts/F473-webgpu-acoustic-nca-spatial-weaver-mind/SPEC.md
drafts/F473-webgpu-acoustic-nca-spatial-weaver-mind/index.html
