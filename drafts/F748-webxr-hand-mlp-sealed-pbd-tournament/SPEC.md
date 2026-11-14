# F-748: WebXR Hand MLP Sealed PBD Tournament

**Concept**
True WebXR hand-tracking (with mouse fallback) drives a local tiny MLP that predicts per-agent constraint stiffness and mutation bias for a Position-Based Dynamics (PBD) multi-agent tournament. Agents are clusters of points with distance constraints solved in pure JS (WebGPU path sketched). High-fitness genomes (MLP weights + stiffness) are sealed only on explicit "pinch" gesture or button, stored in IndexedDB, and transferred via BroadcastChannel to competing tabs. Unlike prior DOM-constraint, particle-flock, or orientation-RNN work: the embodiment is XR-spatial PBD with gesture-sealed transfer, and the local model is causal on hand pose rather than pointer/orientation history.

**Architecture**
- Single self-contained index.html.
- Input: WebXR hand-tracking (if supported) or mouse as proxy hand.
- Local AI: 2-layer MLP (hand features → 4 outputs: stiffness, damping, mutation, fitness bias). Pure JS.
- Physics: 3 agents × 6 points each, PBD distance constraints, simple integration.
- Persistence: IndexedDB `verse-f748-genomes`.
- Transfer: BroadcastChannel `f748-sealed`.
- Offline: fully after load.

**Mechanics**
1. Start XR or use mouse.
2. Hand/mouse position modulates MLP inputs.
3. Each frame: MLP predicts params, apply to agents, solve PBD constraints, score fitness (stability + proximity to hand).
4. Pinch or Seal button: if superior, seal genome and broadcast.
5. Other tabs adopt and compete.

**Expected outcome**
Interactive spatial tournament of soft clusters controlled by hand-driven local model; sealed genomes migrate across tabs. Works offline; XR enhances when available.

**Failure modes**
- No WebXR: mouse fallback.
- No IndexedDB/BroadcastChannel: in-memory.
- Low frame rate: reduce agent count.

**Building blocks**
Hand-pose → MLP → PBD parameter control; gesture-gated sealed genome transfer. Extensible to WebGPU PBD kernels and full WebRTC.
