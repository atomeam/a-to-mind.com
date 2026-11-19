Plain name: Speech-seeded generative spatial sketch mind

Job: Speak (or type) words and phrases; a local character/word Markov model generates evolving SVG path "thought streams" that grow and morph on the Verse canvas. Click a stream to reward it (boosts transition probs), tilt or move pointer to bias flow direction. Seal the model weights to localStorage, download the current SVG sketch as a file to keep.

Input: Microphone speech (Web Speech API) or text box, pointer/orientation for spatial bias.

Keeps: Download SVG, seal model to localStorage for next visit.

Not on Verse yet: checked against recent F- drafts (up to F839); no prior speech-Markov generative SVG path mind with reward-mutated transitions and spatial bias.

**Ledger ID**: F-840

**Slug**: speech-markov-svg-generative-mind

**Date**: 2026-11-19

**Status**: frontier prototype

**Concept**
A novel local-AI spatial interface for The Verse canvas: live speech (Web Speech API) or typed tokens seed a pure-JS Markov chain over character bigrams. The chain continuously emits a sequence that is mapped into control points for one or more live SVG <path> elements ("thought streams"). DeviceOrientation or pointer velocity biases the generative direction and curvature. Clicking a stream provides a positive reward that slightly mutates (strengthens) the relevant transition probabilities. The full transition table can be sealed to localStorage and restored. Fully offline after load (speech requires gesture). Progressive enhancement: typed input always works; visual streams always render.

This deliberately leaves the recent cluster of Q-tables, canvas CNNs, Verlet cloths, spatial audio evo, species particles, gaze SDF, WebGPU fields, MLP/RNN DOM agents, and pure clustering tools. Core novelty is speech-token → Markov generative grammar → live SVG path embodiment with click-reward mutation of the generative model itself, under spatial bias.

**Architecture**
- Single self-contained index.html.
- Web Speech API (webkitSpeechRecognition or SpeechRecognition) for continuous recognition; fallback to <input> for tokens.
- Pure JS Markov: Map of char/word → weighted next, updated on reward.
- SVG overlay: absolute paths that grow by appending cubic beziers derived from emitted tokens + bias vector.
- Orientation/pointer residual → additive force on path direction.
- Seal button → JSON.stringify model to localStorage.
- Download button → serialize current SVG.

**Expected outcome**
Open page, grant mic or type words: colored SVG streams begin growing and branching across the canvas. Speak "flow" or "mind": new curvature appears. Click a stream: it briefly pulses and future generations favor that style. Tilt phone: streams lean. Seal and reload: model persists. Download yields usable SVG.

**Failure modes**
- No SpeechRecognition: text input only (still fully generative).
- Mic denied: same.
- localStorage blocked: session memory.
- Very long sessions: path length capped, old segments fade.

**Building blocks**
Reusable pure-JS Markov generative model + speech token feeder + reward mutation + SVG path embodiment under orientation bias. Enables future local grammar evolution or hybrid with larger local models on Verse.

Void is now Verse everywhere.

**Files**: drafts/F840-speech-markov-svg-generative-mind/SPEC.md, drafts/F840-speech-markov-svg-generative-mind/index.html
