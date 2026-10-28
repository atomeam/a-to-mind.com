# F302 — WebXR Hand RNN Physical UI Sculptors

## Concept
True WebXR hand-tracking (with pointer fallback) feeds a local tiny Elman RNN whose outputs generate spring targets for hybrid DOM sculptor cards. Multiple local RNN agents compete to claim and reposition the same physical UI cards. Winning configurations seal as genomes to IndexedDB. Hybrid embodiment: CSS-transformed DOM nodes over a Canvas2D field. Fully offline, single-file.

## Branching
Deliberately leaves the recent cluster of WebGPU lattice/reservoir/interference fields, spectral/audio residuals, attention message graphs, Hebbian kernels, decision-tree orbs, and pure NCA/fluid. Moves onto under-explored axes: true WebXR hand as causal input, local tiny RNN controlling physical UI elements, multi-agent competition with sealed genome persistence via IndexedDB, hybrid DOM+canvas.

## Mechanics
- TinyRNN: 6-in / 8-hidden / 2-out, tanh, random init, serializable.
- Cards: absolute-positioned DOM nodes with spring-damper physics driven by RNN targets; pointer drag override.
- Hand input: relative position + relative-to-card + time + compete flag (XR joint extraction stubbed for progressive enhancement).
- Competition: agents bias other cards; proximity claims score for human; seal writes genome.
- Persistence: IndexedDB object store for serialized RNN.

## Failure modes
- WebXR hand-tracking requires compatible headset + secure context; falls back cleanly to pointer.
- IndexedDB quota or private mode → seal fails silently, in-memory only.
- High card count or low FPS → spring overshoot (capped).
- No XR button press → pointer-only mode still fully interactive.

## Building blocks for next
WebXR hand joint feature detection + RNN force output, hybrid DOM spring cards, IndexedDB genome seal, multi-agent claim scoring. Next: full XR joint array input, WebGPU particle backing, WebRTC genome exchange, gaze as additional channel.

## V01D landing
webxr-hand-rnn-sculptor skill; testable by pointer→card spring, seal/load roundtrip, competition score increment.
