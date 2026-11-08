# F629 Orientation RNN WebGPU Intent Field

Plain name: Orientation intent field

Job: Tilt your phone or move the mouse; a local tiny RNN predicts your next intent from orientation and pointer history, then a WebGPU compute field (or Canvas2D fallback) of intent vectors rearranges floating note cards in space so related ones cluster near the predicted focus; drag cards to teach it, export the arrangement as JSON or share the current layout.

Input: DeviceOrientation (beta/gamma) or mouse; optional text notes on cards; drag to reposition or seed; toggle RNN learning.

Keeps: Arrangement + trained RNN weights saved in localStorage (`verse-f629-intent`); download JSON of positions + weights; share link with layout hash.

Not on Verse yet: no prior draft combines a live local RNN on device orientation/pointer residual with a WebGPU compute intent-vector field that physically moves real DOM cards.

## Architecture

Single self-contained HTML. Vanilla JS + WebGPU compute shader (Canvas2D fallback):

- Tiny RNN (2-layer, ~20 hidden) runs in main thread or Worker; trained online with residual of predicted vs actual orientation delta.
- WebGPU compute kernel advances a grid of intent vectors whose force is biased by the RNN prediction and nearby card positions.
- DOM cards are positioned by sampling the field; dragging injects force and provides training signal.
- Offline after load; no external deps.

## Expected outcome

A person places a few notes, tilts the device, and watches the field rearrange them according to a model that has learned their motion style; the layout can be saved and reloaded, turning motion into a persistent spatial memory aid.

## Failure modes

- No WebGPU: falls back to Canvas2D field update.
- Orientation permission denied: uses mouse only, notes the limitation.
- Very large number of cards: field sampling is throttled.
- Storage full: works in session, warns on save.

## Frontier Engine F-629

Architecture: Local tiny RNN on DeviceOrientation + pointer residual → WebGPU compute intent-vector field → real DOM card embodiment with drag teaching + sealed localStorage persistence.  
Expected outcome: interactive spatial note arranger whose layout evolves under a personally trained motion predictor and can be exported.  
Mechanics: online RNN training, WebGPU force field, DOM-field coupling, export/share.

**Files**: drafts/F629-orientation-rnn-webgpu-intent-field/SPEC.md, drafts/F629-orientation-rnn-webgpu-intent-field/index.html
