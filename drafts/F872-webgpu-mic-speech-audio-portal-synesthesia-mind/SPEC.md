# F872-webgpu-mic-speech-audio-portal-synesthesia-mind

**Ledger ID**: F-872  
**Slug**: webgpu-mic-speech-audio-portal-synesthesia-mind  
**Date**: 2026-11-20  
**Status**: frontier prototype  

## Concept
A closed-loop synesthetic mind on the Verse canvas. Microphone spectral features (AnalyserNode) and pointer residuals feed a local tiny policy MLP (pure JS). The policy outputs parameters that drive a WebGPU compute/render pipeline producing a living density/color field (Canvas2D fallback). Simultaneously, SpeechRecognition (or typed text) materializes absolute-positioned DOM portals containing user phrases. Those portals act as both visual agents (positioned and styled by the field + policy) and audio sources: each portal owns an OscillatorNode + PannerNode in a Web Audio graph whose frequency, gain, and spatial position are modulated by the local field sample and phrase length/hash. User clicks portals to inject reward that updates the MLP; dragging portals seeds the field. Best genome seals to IndexedDB. Fully offline after load, progressive enhancement.

## Novelty
Leaves the dominant clusters of pure WebGPU field kernels, sensor-driven MLP/RNN/reservoir DOM morphs, Houdini paint policies (F871), semantic force notes, and sealed genomes on particles/cards. Core novel combination is live mic spectrum + speech/text materialization → local policy → WebGPU visual field **and** closed-loop Web Audio spatial synthesis whose sources *are* the living DOM portals. Not continuum physics alone, not paint worklets, not orientation-only, not fixed-rule CA.

## Architecture
- Single self-contained index.html
- Inputs: getUserMedia AnalyserNode (FFT bins → spectral centroid, energy, flux); pointer; optional SpeechRecognition or contenteditable drop
- Policy: 6-dim features → 5 outputs (field scale, hue shift, audio base freq, gain, portal drift) via small weight matrix + online reward delta
- Visual: WebGPU if available (compute density, render to canvas); else Canvas2D particle/density overlay
- Portals: absolute DOM cards; text content; click = reward; drag = position override + field injection
- Audio: AudioContext with per-portal Oscillator + Panner (HRTF); parameters updated from policy + field sample under portal
- Seal: IndexedDB `verse-f872-synesthesia` stores {mlpWeights, portalStates}; BroadcastChannel for multi-tab
- Fallbacks: no WebGPU → Canvas2D; no mic → synthetic spectrum; no speech → typed only; no IDB → memory

## Expected outcome
Grant mic + speech: speak or type phrases → portals appear and drift while emitting spatial tones whose pitch/timbre track the visual field. Move pointer or speak louder: field and audio respond. Click portals to reward → policy adapts (e.g. prefers certain hues/freqs). Seal and reload: mind resumes. Interactive spatial local-AI whose visual, auditory, and semantic layers co-evolve.

## Failure modes
- Mic/speech permission denied → synthetic + typed mode.
- WebGPU unavailable → Canvas2D still drives visuals and audio.
- AudioContext suspended until user gesture → first click resumes.
- Too many portals → limit ~8; oldest fade.

## Building blocks
Reusable pure-JS policy + WebGPU/Canvas density field + Web Audio spatial portal sources + speech materialization. Enables future multi-modal sealed minds or cross-tab synesthetic collaboration on Verse.

Void is now Verse everywhere.
