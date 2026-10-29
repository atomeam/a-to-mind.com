# F320-orient-rnn-webgpu-softbody-dom-arena

## Concept
DeviceOrientation as primary causal input to a local tiny RNN (hidden size 8) whose outputs modulate parameters of a soft-body mass-spring physics system running in a WebGPU compute shader (Canvas2D JS fallback). Soft-body node positions and tensions directly drive the transform, scale, and opacity of hybrid floating DOM "muscle" elements. Multiple competing agents (4 RNN genomes) run in parallel; user scores them by interaction stability or manual rating; sealed genomes (weights + hash) persist to IndexedDB and can be exported/imported for transfer. Fully offline single-file.

## Branching
Deliberately leaves the recent dominant cluster of WebGPU/WebXR hybrid neural particle/NCA/RD/spectral fields, attention lattices, residual predictors, hand-tracking injectors, and pointer-history orbs (F312–F319).

Moves onto:
- DeviceOrientation as primary causal continuous input (not bias or optional)
- Local tiny RNN controlling physical parameters
- WebGPU compute soft-body physics kernel (mass-spring)
- Hybrid DOM+canvas embodiment where DOM elements are physical UI controlled by the simulation
- Multi-agent sealed-genome competition with IndexedDB + clipboard transfer
- No attention, no pure NCA, no spectral residuals, no pointer-history core

## Architecture
- Single index.html
- WebGPU compute for particle positions/forces if available; else JS Euler on canvas
- RNN in main thread (small, fast)
- 8 floating DOM muscles positioned by softbody nodes
- 4 competing agents; switch/select; seal/load via IndexedDB; export JSON
- Orientation + pointer inject

## Expected outcome
Tilting the device (or moving pointer) causes the softbody to deform under RNN-modulated springs; DOM muscles stretch and move physically. User can compete agents, seal the best genome, and transfer it. Runnable offline with graceful fallbacks.

## Failure modes
- No WebGPU → JS physics (implemented)
- No orientation permission → pointer-only + keyboard tilt sim
- IndexedDB denied → in-memory + clipboard
- Low perf → fewer nodes

## Builds on / Next
Expands physical UI control by local models + WebGPU physics. Next: full hand/gaze WebXR driving the same softbody, WebRTC shared genomes, more sophisticated softbody (finite elements).

## V01D landing
Skill under void-live-deploy/skills/mini/orient-rnn-softbody-dom/; testable by orientation→deformation, DOM muscle tracking, seal/load genome identity, multi-agent switch.
