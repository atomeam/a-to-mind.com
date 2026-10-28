# F282 — Speech-Driven Causal RNN WebGPU Portal Mind

## Concept
Continuous local speech recognition (Web Speech API) as primary causal input. Recognized words are embedded to a compact vector and fed, together with pointer velocity residual, into a Web Worker tiny Elman-style RNN. The RNN hidden state modulates forces, hue, and spawn rate of a particle field (Canvas2D primary; WebGPU compute path prepared). Field energy and residual spawn bidirectional DOM concept portals that display recent utterances; dragging a portal injects a localized force impulse back into the field and seals the current genome (RNN weights + hidden + last phrase) to IndexedDB. Optional Web Audio tone modulated by residual. Branches away from F281 WebXR hand neural cloth, F280 spectral causal portals, F279 orientation-RNN physical UI arena, F275–F278 residual/acoustic/spectral/sealed-genome clusters by making local speech the direct causal driver of a predictive RNN that co-evolves a spatial field and embodied language portals.

## Architecture
- Single self-contained `index.html` (offline after first load, no external deps).
- Main thread: SpeechRecognition continuous, Canvas2D particle sim (~120 particles, Verlet-ish), portal lifecycle, Web Audio, IndexedDB seal, WebGPU feature detection + stub.
- Worker: compact Elman RNN (hidden dim 8, input dim 6: 4 speech bins + 2 pointer residual). Updates hidden, returns force bias + portal target params.
- DOM portals: absolutely positioned cards showing last words, draggable, CSS 3D mild morph from residual.
- Speech embeddings: simple keyword bins (action/object/spatial/other) + length, hashed fallback.

## Expected outcome
Runnable interactive prototype. Speak (or click for demo words) to steer the particle field and spawn concept portals. Drag portals to reshape the field and seal the mind state. Offline-capable. Expands local speech causal stream + Worker RNN predictor + hybrid field/portal embodiment building blocks.

## Mechanics
1. User clicks "Start Listening" (required for mic permission).
2. Words map to embedding; residual from pointer/last position.
3. Worker steps RNN, posts bias.
4. Particles integrate with bias + portal attractions.
5. High local energy or residual spawns/updates portal with phrase.
6. Drag-end injects impulse + seals genome hash to IndexedDB.
7. Mild Web Audio feedback.

## Failure modes
- No SpeechRecognition or permission denied → demo word buttons + pointer-only residual (still fully interactive).
- No Worker → main-thread RNN stub.
- No IndexedDB → in-memory seal log.
- No WebGPU → Canvas2D only (intended primary path for reliability).
- Continuous speech may produce interim results; final results preferred.

## Building blocks
Local speech causal input, Worker Elman RNN residual, particle field modulated by hidden state, bidirectional language portals, sealed genome. Next: full WebGPU compute kernel for particle+RNN residual; WebRTC shared sealed mind transfer; gaze as additional residual.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/speech-rnn-portal.js`; test: speech phrase changes field center-of-mass, drag-portal injects measurable impulse, seal/load restores RNN hidden.
