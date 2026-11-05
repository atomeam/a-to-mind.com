# F562 Speech-Seeded WebGPU Fluid Word Tokens with Predictive Local Attention Lattice

**Slug**: `speech-fluid-word-token-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of DeviceOrientation LIF spike audio (F561), WebGPU ESRN UI morph (F560), FFT Hopfield spatial memory (F559), WebXR hand/gaze systems, intersection-evo particles. Explicitly leaves spiking neural networks, rate-based reservoirs/ESRN, associative Hopfield recall, spectral FFT embeddings, WebXR controllers, IntersectionObserver attention, NCA, softbody, and pure orientation-driven kernels.

## Concept
A spatial canvas where continuous speech (Web Speech API) or typed input seeds physical floating DOM word tokens. A WebGPU compute fluid simulation (or Canvas2D particle advection fallback) advects the tokens as if they were buoyant in a living medium. A local pure-JS tiny attention lattice (causal self-attention over recent token embeddings) predicts the next likely word; when the user’s next utterance matches the prediction, the lattice receives a reward update and the successful genome can be sealed. Tokens are draggable and inject local force into the fluid. Fully offline after load, single self-contained file.

## Novelty
Leaves the dominant recent clusters of sensor-driven (orientation/WebXR/mic-spectral) continuous or discrete neural fields controlling particles/DOM without linguistic seeding, and pure visualization lattices. Core novel combination is live speech recognition as the primary causal seed that materializes living word-DOM tokens, which are then physically coupled to a fluid advection field, while a local attention predictor closes a reward loop on predictive accuracy and seals the resulting weights. Not spike sonification, not Hopfield pattern storage, not residual predictors on motion, not pure NCA or ESRN morph.

## Architecture
- Single `index.html`. Progressive: WebGPU fluid if available, else Canvas2D particle field.
- Speech: `webkitSpeechRecognition` / `SpeechRecognition` continuous mode (or text input fallback). Each final result spawns a token DOM element with the word.
- Tokens: absolute-positioned, draggable; their screen positions are sampled each frame as force injectors into the fluid.
- Fluid: simple WebGPU compute particles or 2D advection; tokens ride velocity field.
- Local mind: tiny causal attention over last N token embeddings (hash or simple one-hot-ish vectors of common words); predicts next; on match, Hebbian/reward weight update.
- Seal: IndexedDB store `f562-speech-fluid-mind` for attention weights + recent tokens. BroadcastChannel for optional multi-tab genome share.
- Controls: Start/Stop listen, Seal, Reset, Clear tokens, Mute (no audio required).

## Expected outcome
Runnable prototype in which speaking (or typing) words creates floating tokens that drift with a visible fluid field. The local predictor highlights likely next words; matching speech reinforces the model. Seal restores weights across reloads. Works with or without WebGPU and without microphone (typed fallback).

## Mechanics
1. Initialize fluid particles / field and empty token list; load sealed weights from IndexedDB if present.
2. On speech result or Enter in text box: spawn token at random or pointer location; feed embedding to attention lattice.
3. Each frame: advance fluid, advect token positions by sampled velocity, render field, update token styles (position, slight scale by local density).
4. Predict next token; display top prediction. On subsequent match, reward weights.
5. Seal button serializes weights and token history.
6. Drag tokens to inject persistent forces.

## Failure modes
- No SpeechRecognition support: text-input only.
- Microphone permission denied: text fallback.
- No WebGPU: Canvas2D particle advection.
- IndexedDB unavailable: in-memory only.
- Too many tokens: auto-fade oldest beyond cap.

## Files
- drafts/F562-speech-fluid-word-token-mind/SPEC.md
- drafts/F562-speech-fluid-word-token-mind/index.html

## V01D landing
Skill under `void-live-deploy/skills/speech-fluid-tokens/` or spatial canvas tool; test that a spoken word appears as a DOM token and that a matching prediction updates the sealed weight hash.
