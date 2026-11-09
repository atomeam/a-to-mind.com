# F640 WebGPU Audio Classifier DOM Morph

Plain name: Ambient spatial morph
Job: Grant mic access; a local spectral classifier labels ambient sound (quiet / speech / music / noise); a WebGPU density field driven by frequency bands positions, scales, and recolors floating DOM cards; seal downloads a JSON snapshot of classification + field state.

## Concept
Microphone AnalyserNode feeds 128-bin spectrum into a tiny local rule-based classifier (energy ratios of low/mid/high bands + variance). Classification selects one of four physics modes for a WebGPU compute kernel that evolves a 64×64 density/velocity field (simple advection + source injection from spectrum peaks). High-density cells attract or repel absolute-positioned DOM cards whose CSS transforms track sampled field locations. User clicks a card to "reinforce" the current mode (boosts its score). Seal serializes classifier state, best mode, and a low-res field snapshot to a downloadable JSON. Fully offline single-file; Canvas2D fallback.

## Novelty
Departs from prior evolutionary wave riders (F636), orientation RNNs (F629), hand MLPs (F630), and practical utilities (F631–F639). Novel combination is real-time local audio classification (non-neural spectral rules) gating WebGPU continuum physics, hybrid living DOM embodiment driven by the field, and sealed export of the ambient state. Not pure NCA, not particle swarms, not residual predictors, not device-orientation primary.

## Architecture
- Single index.html.
- AudioContext + AnalyserNode; requestMicrophone.
- Local classifier: four classes via band energy thresholds and spectral flux.
- WebGPU: storage buffers for density; compute shader injects spectrum-derived sources and steps a damped diffusion.
- 6–8 DOM cards positioned by reading back or sampling peak locations (or via uniform array if no readback).
- Seal: JSON download with timestamp, class, mode scores, seed params.
- IndexedDB optional for last seal; Canvas2D JS diffusion fallback.

## Expected outcome
Runnable prototype where speaking, playing music, or silence morphs the floating cards via the field; classification badge updates live; Seal produces a downloadable JSON that could seed a replay. Progressive enhancement.

## Mechanics
1. User clicks Start Mic; permission granted; analyser runs.
2. Each frame: getByteFrequencyData; compute bands; classify; select mode params; dispatch WebGPU step; update card transforms from field peaks or simulated.
3. Click card: increment mode fitness.
4. Seal: generate JSON, trigger download.

## Failure modes
- No mic permission: show demo mode with synthetic spectrum.
- No WebGPU: Canvas2D diffusion remains interactive.
- High latency: reduce grid or analyser fftSize.

## Files
drafts/F640-webgpu-audio-classifier-dom-morph/SPEC.md
drafts/F640-webgpu-audio-classifier-dom-morph/index.html

## V01D landing
Ambient morph skill under void-live-deploy/skills/webgpu-audio-classifier-dom-morph.js; test asserts synthetic spectrum produces classification change and card displacement, seal JSON contains class key.

## Frontier Engine F-640
Architecture: Local spectral classifier on AnalyserNode → mode selection → WebGPU density field → living DOM card morph + seal JSON export.
Expected outcome: interactive ambient spatial morph that reacts to real sound classes and exports sealed state.
Mechanics: band-energy rules, WebGPU diffusion kernel, DOM-field coupling, downloadable snapshot.
