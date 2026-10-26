# F265 — WebGPU Intent RNN Fluid Memory Orbs

**Slug:** F265-webgpu-intent-rnn-fluid-memory-orbs

**Concept:** A WebGPU compute-driven particle fluid whose force field is modulated by an intent vector emitted by a tiny local RNN (Worker). The RNN is trained online on recent pointer trajectories + device orientation. Dense particle clusters spawn floating DOM memory orbs that display local density/velocity and can be dragged to seal the current intent + local stats into IndexedDB. Sealed intents bias future RNN predictions. Optional mic spectral energy seeds particle injections.

**Novel combination:** RNN intent prediction from spatial sensors → WebGPU particle fluid forces → emergent density → hybrid DOM memory orbs for consolidation → IDB-sealed causal memory that feeds back into the predictor. Avoids pure NCA lattices, attention maps, softbody springs, and always-on residual predictors of prior F- work.

**Architecture:**
- Main thread: Canvas WebGPU particle sim (compute shader for forces + integration), DOM overlay for orbs, AudioContext for optional spectral seeding, DeviceOrientation / pointer events.
- Worker: Tiny RNN (or MLP residual) for intent prediction; hill-climb or simple online update on gesture deltas.
- Persistence: IndexedDB for sealed intent vectors + weights.
- UI morph: CSS variables driven by average density / intent magnitude.

**Expected outcome:** Fluid particles respond to predicted intent and actual gestures. Orbs appear in hotspots and can be sealed. Sealed memories subtly bias the fluid over time. Works offline after first load.

**Failure modes:** WebGPU not available → fallback Canvas2D. RNN too small → weak prediction. High particle count → performance drop.

**Builds on:** F-020 WebGPU agents, F-259 orientation physics, F-264 WebRTC arena, by adding predictive intent feedback loop and consolidating density orbs.
