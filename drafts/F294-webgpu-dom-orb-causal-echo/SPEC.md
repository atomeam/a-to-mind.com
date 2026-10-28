# F294 — WebGPU DOM Orb Causal Echo Field

## Concept
A causal pointer-trajectory residual predictor (tiny online-learning MLP in main thread) generates a decaying residual hotspot. A Canvas2D particle field (WebGPU compute path prepared via uniform injection) is attracted to the residual and to five floating DOM orbs. Orbs bidirectionally couple: they attract particles, sample local density to update residual, and morph color/label/glow. Dragging an orb injects a strong force pulse into the field and increments fitness. Seal persists weights + orb states to IndexedDB. Fully offline after load; progressive enhancement (pointer always works; WebGPU future-ready).

Novel combination relative to recent cluster (F281–F293): closed bidirectional DOM-orb ↔ particle-density loop driven by causal trajectory residual, rather than orientation-primary, genome arenas, spectral self-listening, reservoir, softbody, or pure WebXR hand/gaze. Orbs are both visualizers and physical participants.

## Architecture
- Single self-contained `index.html` (inline CSS/JS).
- Trajectory ring buffer + 4-input online MLP residual predictor.
- ~180 particles with attraction to residual hotspot and orbs, mild mutual repulsion.
- 5 absolute DOM orbs: lerp velocity toward residual, density-modulated residual, morph via hue/alpha/text.
- IndexedDB seal/load of champion weights, bias, fitness, orb positions.
- Offline first; no permissions required.

## Expected outcome
Runnable interactive prototype. Move pointer: trail appears, residual hotspot forms, particles swarm, orbs drift and change appearance. Drag an orb: field responds, fitness rises. Seal/load restores dynamics. Expands causal trajectory residual + bidirectional DOM-particle coupling + morphing physical UI orbs + sealed online predictor building blocks.

## Mechanics
1. Pointer events accumulate trail; MLP updates on dx/dy/speed/curvature vs observed residual proxy.
2. Residual hotspot decays; particles integrate attractions.
3. Orbs sample nearby particle density, update residual, receive weak force from hotspot, morph CSS.
4. Drag freezes orb and injects high-strength residual at its position.
5. Seal stores state; load restores.

## Failure modes
- No IndexedDB → in-memory only.
- Small screens → fewer orbs, larger hit areas.
- No pointer → static field (keyboard not primary).
- WebGPU unavailable → Canvas2D fully functional (primary path).

## Cross-reference
Avoided dominant recent patterns: WebXR hand/gaze genome arenas, orientation as primary causal input, reservoir/fluid morphs, softbody/cloth, pure NCA, speech portals, spectral self-listening loops, residual trajectory morphs as core. Novel: bidirectional physical coupling between DOM orbs and particle density field steered by causal pointer residual predictor.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/dom-orb-causal-echo.js`; test: pointer residual produces non-zero MLP update, particle density raises orb residual, drag injects force, seal/load restores weights and positions.
