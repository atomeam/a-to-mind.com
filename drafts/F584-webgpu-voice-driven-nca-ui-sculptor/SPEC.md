# F584 – WebGPU Voice-Driven NCA UI Sculptor

## Concept
A WebGPU compute Neural Cellular Automaton (NCA) runs as a continuous “thought field.” Microphone amplitude (or a simulated voice energy slider) injects local energy into the field. A pure-JS local agent (tiny 3-layer MLP) samples the field at a set of portal anchors, predicts a comfort residual, and emits soft repulsive forces that are written back into the NCA. The same field samples drive absolute-positioned Verse portal cards: their CSS `transform`, `border-radius`, `filter: blur`, and opacity morph every frame according to local NCA state. High-energy regions expand and round the portals; low-energy regions shrink and sharpen them. Pointer drag injects a directional bias. Full ensemble state (NCA grid snapshot, MLP weights, portal poses, energy history hash) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

Novel combination: WebGPU NCA compute + mic-driven energy injection + local MLP force feedback + live CSS morph of DOM portals. Not a particle swarm, not reaction-diffusion, not pure lattice attention.

## Architecture
- Single HTML file, no external deps.
- WebGPU compute pipeline (workgroup 8×8) updates a 128×128 float texture (R32Float) with a fixed 3×3 convolutional NCA rule whose weights are lightly perturbed by the MLP residual.
- Staging buffer + mapAsync readback every 4 frames for CPU sampling.
- Fallback Canvas2D diffusion if WebGPU unavailable.
- getUserMedia audio context for RMS energy; permission-gated; slider fallback.
- 5 absolute-positioned portal cards whose style is driven by bilinear sample of the field.
- MLP (3→8→2) pure JS, trained online with a simple residual rule (no external lib).
- IndexedDB persist on visibilitychange / beforeunload.

## Expected outcome
User speaks or moves the energy slider → NCA blooms in response → portals physically expand, round, and drift away from high-energy peaks → MLP gradually dampens extreme morphs so the layout remains usable. Dragging a portal injects a trail into the field. Reload restores last sealed state. Works offline.

## Mechanics
1. Init WebGPU device, compute shader with NCA update, render pass that draws the field as background.
2. AudioAnalyserNode or slider supplies energy → scatter into NCA grid.
3. Every frame: compute NCA, readback small samples, update portal transforms, MLP step, write forces back.
4. Pointer events on portals inject velocity bias.
5. Seal button or auto-seal writes state.

## Failure modes
- WebGPU unavailable → Canvas2D fallback, reduced resolution.
- Mic permission denied → energy slider.
- High readback cost → sample only 16 points, throttle to 15 Hz.
- MLP divergence → clamp residual, reset weights on button.
- IndexedDB quota → drop history, keep latest snapshot.

## Building blocks unlocked for next
- Shared NCA field + DOM morph coupling
- Online MLP force feedback into compute shader
- Mic-to-field injection path
