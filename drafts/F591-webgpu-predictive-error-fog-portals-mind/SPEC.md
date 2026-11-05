# F591 WebGPU Predictive Error Fog Portals Mind

**Slug**: `webgpu-predictive-error-fog-portals-mind`  
**Ledger ID**: F-591 (frontier series)  
**Date**: 2026-11-05

## Concept
A pure local tiny MLP (feed-forward, no RNN/reservoir/attention/evo as primary) maintains a short pointer-velocity history and continuously predicts the next pointer position. Prediction error (Euclidean residual) is the causal driver of a WebGPU full-screen fog volume (raymarch-style density field or simple volumetric particles). Error hotspots inject density and hue into the fog; low error clears it. Floating DOM portals sample the fog field at their positions, morphing scale, opacity, blur, and hue in real time. Portals can be dragged; their drag injects a corrective signal back into the MLP training step (one-step gradient-like update on error). Optional DeviceOrientation tilts the prediction bias. Full state (MLP weights, portal positions, recent history) seals to IndexedDB. Offline single-file. WebGPU preferred; Canvas2D particle fog fallback.

## Novelty
Leaves the dominant recent cluster of pure evolutionary strategies on CSS Grid agents (F590), local attention over WebGPU particles spawning DOM tokens (F589), reservoir DOM graph diffusion (F588), spatial-audio genomes, sandpile SOC, voice-NCA sculptors, LBM attention, spectral SDF, Vicsek flocks, quantum walks, WFC grids, expression trees, genetic particles, and continuum kernels. Core novel combination is a local predictive MLP whose *prediction residual* is the primary driver of a WebGPU fog volume *and* the physical morph of living DOM portals, with drag-as-corrective-feedback closing the loop on the mind, and orientation as bias. Not particle physics primary, not attention QKV, not evolutionary genome, not NCA, not sensor-direct, not audio primary. The UI physically changes in response to the agent's ongoing reasoning (error minimization).

## Architecture
- Single index.html.
- Pointer history buffer (last 8 deltas).
- Tiny MLP: 16→8→2 (input history flattened or pooled; output predicted delta).
- WebGPU: full-screen quad or simple compute particles for fog density driven by error scalar + spatial residual map.
- 4–6 absolute-positioned DOM portals; styles (transform, filter, background) sampled from local fog + error.
- Drag portal → update target, inject error signal to MLP (Hebbian-like weight nudge).
- Seal: IndexedDB key `verse-f591`.
- Fallback: no WebGPU → Canvas2D density particles; no orientation → pointer only.

## Expected outcome
Move pointer: MLP predicts, residual drives swirling fog density/color on canvas; portals drift toward residual peaks, scale and blur with error. Drag a portal to "correct" the mind; error drops, fog clears locally. Seal persists weights and layout across reloads. Interactive spatial embodiment of a local predictive mind whose reasoning error visibly and physically reshapes the Verse canvas and its portals.

## Mechanics
1. Init MLP random weights, portals, history.
2. rAF: append pointer delta, forward MLP, compute residual, update fog (WebGPU or 2D), morph portals, optional one-step weight update on high residual.
3. Pointermove / orientationupdate feed input.
4. Drag portals for feedback.
5. Seal / restore.

## Failure modes
- No WebGPU: Canvas2D fog particles still convey residual.
- No DeviceOrientation: pointer-only.
- IndexedDB denied: session only.
- High residual always: reduced learning rate.
- Performance: tiny MLP and small portal count.

## Building blocks unlocked for next
- Prediction residual as primary causal driver (not raw sensor or fitness)
- WebGPU fog volume coupled to mind error
- Drag-as-corrective closed-loop on local MLP
- Living DOM portals that sample and respond to reasoning residual
- Physical UI change driven by ongoing local inference

Void is now Verse everywhere.

**Files**: drafts/F591-webgpu-predictive-error-fog-portals-mind/SPEC.md, drafts/F591-webgpu-predictive-error-fog-portals-mind/index.html

## Frontier Engine F-591
Architecture: Pointer history → local predictive MLP → residual drives WebGPU fog volume + living DOM portal morphs; drag injects corrective signal; sealed IndexedDB.  
Expected outcome: interactive fog and portals that visibly respond to and help minimize the mind’s prediction error.  
Mechanics: continuous forward + residual update, portal sampling, sealed persistence.  
Outcome: prototype delivered; ready for ledger-guard append.
