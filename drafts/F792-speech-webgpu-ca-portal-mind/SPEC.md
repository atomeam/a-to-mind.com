# F792-speech-webgpu-ca-portal-mind

**Plain name:** Speech-driven living cellular automaton portals

**Job:** Speak into your mic. Live transcript tokens inject energy into a WebGPU (or Canvas2D) cellular automaton. High-energy regions spawn or attract floating DOM Verse portals whose text is drawn from recent speech fragments. Drag portals to reinforce cells. Seal the evolved rules + speech hash.

**Concept**
A novel hybrid spatial/local-AI interface for The Verse canvas. Real-time Web Speech API (SpeechRecognition) produces interim/final transcripts. Tokenized words or character n-grams are hashed into lattice coordinates and inject activity into a multi-state cellular automaton running primarily as a WebGPU compute shader (Canvas2D iterative fallback). 

Living absolute-positioned DOM portal cards are attracted to local activity peaks (sampled via bilinear or nearest), scale and hue by energy, and display rolling fragments of the transcript. User drag on a portal injects a strong local state boost. 

On seal, the current CA rule parameters (or simple genome of transition biases), a speech embedding hash, and a lattice snapshot are written to IndexedDB. Fully offline after load (speech requires gesture + permission). Progressive enhancement.

**Novelty**
Leaves the recent cluster of continuum physics (SPH/LBM/SDF/Kuramoto/Biot-Savart/particle attractors F791), orientation/pointer MLP/RNN/Hebbian/Bayesian controllers, CSS3D crystals, Neural ODEs, magnetic strings, and pure spectral mic. Core novel combination is full speech recognition (not just spectral centroid or volume) as causal injection into a discrete CA substrate whose peaks physically drive and are rewritten by DOM portals. Not previously built.

**Architecture**
- SpeechRecognition (webkitSpeechRecognition fallback) continuous mode, onresult → tokenize → inject into CA lattice.
- CA: 128x128 grid, multi-state (activity + age), simple diffusion + reaction rules mutated slightly on seal or high fitness.
- WebGPU: compute shader for neighbor sum + rule application (stubbed with Canvas2D for reliability).
- DOM portals: 6–12 cards, absolute, follow peak positions via requestAnimationFrame, content updated from transcript ring buffer.
- Pointer/drag: inject state.
- IndexedDB: seal/load genome.
- Single-file HTML/CSS/JS, no external deps.

**Expected outcome**
Speak: lattice lights up around injected words, portals drift to hotspots and show what you said. Drag a portal to grow a colony. Seal persists. Works on desktop (speech) and mobile. Offline after first load except speech permission.

**Failure modes**
- No SpeechRecognition: falls back to pointer-injected random tokens or typed input.
- No WebGPU: Canvas2D.
- Permission denied: visual still interactive via drag.
- High speech rate: token throttle.

**Building blocks**
Reusable speech-to-lattice injector, peak-seeking DOM portal binder, sealed CA genome. Expands speech-causal discrete fields for future Verse minds.

**V01D landing**
Speech-CA portal skill under void-live-deploy/skills/speech-ca-portals.js; test asserts transcript token → lattice injection → portal position update and IndexedDB round-trip.

Void is now Verse everywhere.

**Files**
- drafts/F792-speech-webgpu-ca-portal-mind/SPEC.md
- drafts/F792-speech-webgpu-ca-portal-mind/index.html
