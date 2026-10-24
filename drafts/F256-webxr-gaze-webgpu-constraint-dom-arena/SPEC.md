# F256-webxr-gaze-webgpu-constraint-dom-arena

## Concept
Novel combination that deliberately leaves the recent causal-RNN-sealed-peer / orientation-WebGPU-sealed-physics / WebXR-hand-MLP / NCA-spatial-audio / residual-density / embedding-cluster cluster (F247–F255):

- True WebXR gaze (viewer pose ray + optional hit-test) as primary causal input. Pointer and DeviceOrientation act as full fallbacks.
- Local tiny MLPs evaluated in WebGPU compute shaders output constraint targets and stiffness values.
- WebGPU compute also integrates a multi-agent spring-constraint physics kernel (distance constraints + damping) that drives hybrid DOM embodiments.
- Agents (DOM cards) compete for gaze-dwell energy; champion MLP genome is sealed (SHA-256) to IndexedDB and broadcast via BroadcastChannel for multi-tab transfer.
- Leaves pure RNN hidden-state controllers, residual predictors, volumetric NCA, spectral/audio residuals, pointer-history fields, and orientation-primary physics. Expands true WebXR gaze + WebGPU neural+constraint kernels + hybrid DOM physical UI + sealed multi-agent competition.

## Architecture
Single self-contained `index.html`.

- Main thread: XR session / gaze sampling, DOM positioning from readback, IndexedDB seal, BroadcastChannel, UI controls.
- WebGPU device: compute shaders for batched MLP forward and constraint physics step. CPU fallback for both when WebGPU unavailable.
- 5 agents. Genome: MLP (gaze features → 6 hidden → 3 outputs: targetX, targetY, stiffness).
- Offline-capable after load.

## Expected outcome
Enter XR or use pointer/tilt. Gaze (or proxy) drives constraint targets; DOM cards spring under GPU (or CPU) physics and compete for dwell. Seal champion; open another tab to receive genome. Interactive with graceful degradation.

## Mechanics
1. Gaze ray → relative features + agent state → MLP.
2. MLP outputs set spring targets and stiffness.
3. Physics: Verlet/constraint integration with inter-agent distance soft constraints.
4. Dwell when gaze near agent center → fitness++.
5. Every 6s: sort fitness, seal top genome + hash to IndexedDB, BroadcastChannel post, mutate into bottom agents.
6. Canvas overlay visualizes gaze ray and constraint lines.

## Failure modes
- No WebXR → pointer + orientation complete.
- No WebGPU → pure JS MLP + physics.
- Orientation denied → zero tilt bias.
- IndexedDB/BroadcastChannel blocked → in-memory single-tab.
- Low performance → reduce agents.

## Building blocks for next
WebGPU constraint solvers driven by local models, true XR gaze binding to physical DOM, sealed genome multi-tab transfer primitives. Next: full joint hand tracking into constraint graphs, or WebRTC real peer sealed exchange.

## V01D landing
Spatial gaze-webgpu-constraint skill under void-live-deploy/skills/; testable via gaze→constraint response, sealed hash round-trip, fitness rise under fixed gaze pattern.
