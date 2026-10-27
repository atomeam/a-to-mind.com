# F-237 Spoken Fluid Intent

- **Date:** 2026-10-27
- **Draft:** `drafts/F237-spoken-fluid-intent/index.html` (single file, Canvas2D particle field, works offline)
- **Area:** local speech + spatial simulation. Continues exploration of browser-native interactive minds.

## Architecture
- 2500 particles on a full-screen Canvas2D with velocity damping and boundary bounce.
- Intent parser: typed or spoken text is matched against a small local lexicon mapping words (calm, swirl, focus, scatter, chaos, etc.) to force types (attract, repel, swirl, damp, noise). Each match injects a decaying force field at a random location.
- Pointer drag injects short-lived attractors, allowing direct sculpting.
- Closed loop: every 12 s the average particle speed is measured and a reflective phrase is spoken via SpeechSynthesis (stillness / flowing / turbulence). SpeechRecognition (webkit) is used for input when available.
- Forces and particles are fully local; no network after page load. Last intent can be extended with localStorage.

## Outcome
Runnable prototype. Particles visibly respond to spoken or typed intents within one frame. Reflection loop produces coherent spoken feedback correlated with visual turbulence. Fallback for browsers without speech APIs is text input. No console errors on load.

## Lessons
- Simple keyword lexicon is sufficient for a first closed loop; richer embeddings would require a local model (Transformers.js or similar) in a follow-up.
- Canvas2D at 2500 particles stays interactive; scaling to tens of thousands needs WebGPU compute (building block noted).
- SpeechRecognition requires user gesture and HTTPS in some browsers; text path is the reliable control.

## Not a superficial variation
No earlier Frontier entry combined a live particle/fluid field with bidirectional speech (input intent + output reflection). Closest are F-227 hypervector worlds (visual uncertainty) and F-231 taste oracles (preference → geometry). Here the geometry is the medium of conversation itself.

## Building blocks for next runs
Local intent-to-force mapping, particle-state feature extraction for speech, pointer-as-sculptor. Next: move the particle update into a WebGPU compute shader for 50k+ particles, bind richer local embeddings (or a tiny on-device model) to continuous force parameters, persist fluid state as the mind's memory across reloads.
