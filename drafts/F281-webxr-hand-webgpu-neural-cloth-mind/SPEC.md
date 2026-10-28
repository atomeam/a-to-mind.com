# F281 — WebXR Hand WebGPU Neural Cloth Mind

## Concept
True WebXR hand tracking as primary causal input into a particle-cloth field whose motion is modulated by a local tiny residual neural kernel (4-weight vector). The field embodies hybrid DOM anchors that can be dragged to inject secondary forces. Genome (neural weights + params) seals to IndexedDB. WebGPU path prepared for full compute shader kernel (current sim is Canvas2D for reliability). Branches away from recent spectral/causal residual predictors, acoustic residuals, predictive force injection, sealed multi-agent DOM arenas, and orientation-RNN clusters by making WebXR hand the direct causal driver of a neural-modulated soft-body-like particle field with physical DOM embodiment.

## Architecture
- Single self-contained `index.html` (offline, no deps).
- Canvas2D particle cloth (~180 particles) with Verlet-like integration.
- Tiny neural residual: weights modulate attraction based on local density + velocity + pointer/hand presence.
- WebXR immersive-ar with hand-tracking: wrist joint maps to force attractor (progressive fallback to pointer).
- Hybrid DOM anchors (draggable circles) that attract nearby particles and are visually bound to the field.
- IndexedDB seal of genome + simple hash.
- DeviceOrientation lightly biases neural weights.
- WebGPU detection + stub for future compute pipeline that would run the neural residual + integration in shader.

## Expected outcome
Runnable interactive prototype. Enter XR (or move pointer) to steer the cloth with your hand. Drag anchors to reshape the field. Seal the evolving genome. Offline-capable. Expands true WebXR hand + local neural physics kernel + hybrid DOM+canvas building blocks.

## Mechanics
1. Particles integrate with neural-modulated forces toward hand/pointer and anchors.
2. Local density estimate feeds residual.
3. Hand wrist pose (if XR) or pointer sets primary attractor.
4. Dragging DOM anchor injects persistent local force.
5. Seal writes genome + hash to IndexedDB.
6. Mild orientation bias on neural weights.

## Failure modes
- No WebXR / no hand-tracking → full pointer mode.
- No IndexedDB → in-memory only.
- No WebGPU → Canvas2D only (still fully interactive).
- High particle count on low-end → reduce N automatically if needed (not auto in this draft).

## Building blocks
WebXR hand causal force, local residual neural kernel on particle physics, hybrid DOM anchors controlling canvas field, sealed genome. Next: full WebGPU compute shader for the neural update kernel; WebRTC shared field for multi-user genome transfer; gaze as additional input.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/webxr-neural-cloth.js`; test: hand/pointer moves cloth center of mass, seal/load restores neural weights, drag-anchor changes local particle density.
