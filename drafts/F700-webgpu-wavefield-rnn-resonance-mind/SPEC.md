# F700 — WebGPU Wavefield RNN Resonance Mind

## Concept
A previously unexplored combination: a real-time 2D wave equation (damped) solved primarily via WebGPU compute shaders (with Canvas2D iterative fallback), continuously driven by a local Elman-style recurrent neural network that maintains an autonomous “thought” state. User pointer velocity, DeviceOrientation, or WebXR hand tracking injects into the RNN hidden state. The RNN outputs source positions, frequencies, and amplitudes for the wave field. Energy peaks cause absolute DOM “resonance portals” to translate, scale, and update their content with a projection of the current hidden activations (simple generative phrases). The full lattice + RNN weights/state can be sealed into IndexedDB. Offline after load. Spatial + local-AI for the Verse canvas.

## Architecture
- Single self-contained `index.html` (no external deps).
- WebGPU device + compute pipeline for wave update (ping-pong storage textures); fallback to Canvas2D pixel or grid iteration if WebGPU unavailable.
- Tiny RNN (input dim ~6, hidden 16–24, output ~6) implemented in plain JS (weights small random or seeded; can be evolved lightly).
- 3–5 absolute-positioned DOM portals whose `transform` is set from peak locations found by scanning the field.
- Portal inner text generated from hidden state via a simple lookup/projection (or Markov-like).
- WebXR session requested for immersive-ar if available; hand joints mapped to injection points.
- Seal button → IndexedDB `verse-f700`. Reload restores field seed + RNN state.
- Pointer + orientation always work as fallback.

## Expected outcome
Open the page: a fluid-like wave field animates, modulated by an internal recurrent mind. Moving the pointer or tilting the device (or entering XR and moving hands) perturbs the mind, which in turn changes wave sources; portals float to bright peaks and display evolving “thought” fragments. Seal persists the mind across reloads.

## Mechanics
1. Initialize grid (e.g. 256×256 or 128×128), two storage buffers for height/velocity.
2. RNN step every frame: hidden = tanh(W_hh * hidden + W_xh * input + bias); outputs drive source params.
3. User input vector: [ptrVelX, ptrVelY, oriX, oriY, pinch/strength, timePhase].
4. Compute shader (or CPU) updates wave equation; find local maxima for portal positions.
5. Project hidden → short phrase for each portal.
6. On seal: serialize grid summary (or seed + params), RNN weights/state → IndexedDB.

## Failure modes
- No WebGPU: Canvas2D fully functional (slower grid).
- No WebXR/orientation: pointer only.
- IndexedDB blocked: session memory only.
- High resolution: auto-downscale for performance.

## Building blocks
Reusable WebGPU wave solver + local RNN driver + peak-driven DOM physical UI. Enables future “mind fields” that grow more complex agents.

Void is now Verse everywhere.
