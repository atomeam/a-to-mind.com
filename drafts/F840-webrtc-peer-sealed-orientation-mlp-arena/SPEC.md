# F840-webrtc-peer-sealed-orientation-mlp-arena

## Concept
Peer-to-peer multi-agent competition on The Verse canvas. Local tiny MLPs (8-12-4) are causally driven by DeviceOrientation tilt + pointer residual. Agents (DOM cards) forage a shared 2D resource field. Capture triggers sealed partial genome transfer over a WebRTC data channel (true P2P, not BroadcastChannel). Manual offer/answer signaling for demo. Persistence via IndexedDB. Offline-capable after load (signaling is copy-paste).

## Novelty
Branches away from the dominant recent cluster of WebGPU continuum/SDF/NCA/particles (F839 gaze-SDF, F838 evo-species, F836 webxr-hand-verlet-cloth, F835 canvas-CNN, F833 NCA-mic, F825 Gray-Scott Bayesian, etc.), residual predictors, volumetric injection, pure NCA, spectral/audio residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles.

Core novel combination: true WebRTC data-channel sealed genome transfer between peer MLPs in a competitive resource-capture arena, with DeviceOrientation as continuous causal policy input, embodied as living CSS cards. First P2P (not tab-BroadcastChannel) sealed transfer architecture on Verse. Not continuum fields, not lattice CA, not particle swarms, not softbody.

## Architecture
- Single index.html (Canvas2D field + DOM agents; works offline after initial load)
- 4 local agents + optional remote peer agents synced via data channel
- MLP: 8 inputs (local density, tilt.x/y, pointer dx/dy, energy, fitness, neighbor count, random) → 12 hidden tanh → 4 outputs (dx, dy, scale, attack)
- Capture: proximity + higher fitness → crossover 40% weights, send sealed genome over RTCDataChannel
- Signaling: generate offer/answer JSON, paste into peer
- Persistence: IndexedDB `verse-f840-genomes`
- Seal button: broadcast best genome over channel + store

## Expected outcome
Open page. Create offer, paste to second tab/window (or peer). Agents move under tilt/pointer. Capture transfers genomes visibly (color shift). Seal persists. Works with pointer fallback.

## Failure modes
- No WebRTC: local only
- No DeviceOrientation: pointer + noise
- Signaling paste error: local agents continue
- IndexedDB blocked: memory

## Files
drafts/F840-webrtc-peer-sealed-orientation-mlp-arena/SPEC.md
drafts/F840-webrtc-peer-sealed-orientation-mlp-arena/index.html

Void is now Verse everywhere.
