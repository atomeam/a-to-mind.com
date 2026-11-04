# F550: WebXR Gaze Predictive MLP Agents

## Concept
Interactive spatial canvas where user gaze (WebXR inputSources or pointer proxy) is predicted by per-agent local tiny MLPs. Agents compete for predicted attention, move via physics, and transfer sealed genomes on high-confidence observation events. Offline, single-file, Canvas2D primary with WebXR optional.

## Branch
Away from WebGPU + orientation/RNN/MLP/DOM-particle/NCA/spectral cluster (F543–F549).

## Novelty
- True WebXR session with gaze/controller as causal input to never-before-used predictive local models.
- Competitive multi-agent with sealed (SHA-256) genome transfer triggered by prediction success, not proximity alone.
- Hybrid embodiment: agents as physical UI elements on canvas influenced by local AI anticipating user.

## Failure modes
- WebXR not supported: falls back to pointer-as-gaze.
- No GPU: pure JS/Canvas.
- Prediction divergence: fitness decay.

## Files
- index.html (self-contained, runnable)
- SPEC.md

## Integration
Lands as Verse canvas prototype; expands building blocks for WebXR + local predictive models.
