# F297 — WebGPU Hebbian Kernel DOM Field

## Concept
A spatial association field whose weights are updated by a local Hebbian learning rule. Primary path uses a WebGPU compute shader kernel that biases particle velocities from a 16×16 weight grid; CPU mirror drives floating DOM orbs that are physically attracted to high-magnitude weight cells. Pointer drag or orb drag injects teaching signals that strengthen local associations between position and motion direction. Champion weights seal to IndexedDB. Fully offline after load; progressive enhancement (Canvas2D + CPU Hebbian always works).

Deliberately branches from the recent dominant cluster of decision-tree spatial orbs, DeviceOrientation genome arenas, residual trajectory predictors, reservoir/echo lattices, self-listening spectral agents, neural foraging genomes, and WebXR hand/gaze MLPs (F289–F296). Core novelty is the WebGPU compute kernel as the learning substrate itself (Hebbian spatial association) controlling hybrid particle + physical DOM orbs, rather than CPU MLP/reservoir/decision-tree policies or genome transfer.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- 16×16 weight grid (CPU Float32Array mirror + optional GPU storage buffer).
- WebGPU compute pipeline (workgroup 64) that samples nearest weight cell to bias particle velocity; uniform carries pointer and dimensions.
- ~120 particles (CPU always; GPU storage buffer when available).
- 6 absolute DOM orbs with simple spring-like physics attracted to high-weight cells and pointer; drag teaches.
- IndexedDB: seal/load serialized weights + generation stamp.
- Offline first; no permissions required.

## Expected outcome
Runnable interactive prototype. Drag on canvas or an orb: weight cells strengthen (visualized as cyan/magenta grid), particles bias, orbs drift toward learned regions and morph slightly with speed. Seal persists the field. Load restores associations. Offline-capable. Expands WebGPU compute neural kernels + Hebbian spatial learning + hybrid DOM physical UI controlled by the learned field + sealed persistent association building blocks.

## Mechanics
1. Pointer or orb drag samples grid cell and applies Hebbian increment modulated by motion angle, with mild neighbor decay.
2. Compute (or CPU) step biases particle velocity from local weight.
3. Orbs integrate forces from high-weight cells + pointer attraction; bounds clamp.
4. Seal writes weights array to IndexedDB; load restores and re-uploads to GPU if present.

## Failure modes
- No WebGPU or init failure → Canvas2D fully functional with CPU Hebbian (primary interactive path).
- No IndexedDB → in-memory only.
- Small screens → orbs remain usable, grid coarser visually.
- High teaching rate → weights saturate; reset available.

## Cross-reference
Avoided genome contact transfer, residual predictors, reservoir computing, spectral self-listening, NCA, WebXR hand/gaze as primary, DeviceOrientation causal, pointer-history fields as core, decision trees, and pure CPU MLP policies. Novel combination of WebGPU compute Hebbian kernel + spatial weight field + particle bias + physical DOM orb embodiment + sealed incremental association.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/webgpu-hebbian-kernel-dom-field.js`; test: drag produces non-zero weight change, orbs move toward high-weight cells, seal/load restores weights array.
