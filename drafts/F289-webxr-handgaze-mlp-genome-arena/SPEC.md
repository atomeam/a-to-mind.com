# F289 — WebXR Hand-Gaze MLP Genome Arena

## Concept
True WebXR hand tracking and gaze direction are the primary causal inputs to a local tiny MLP (multi-layer perceptron, 4-8-4, running on main thread or Worker). The MLP outputs per-agent acceleration biases for a multi-agent particle competition arena simulated with Canvas2D (WebGPU compute shader path prepared for future particle physics kernel). Agents carry sealed genomes (weight vectors). Gaze selects a target agent; hand pinch/grab near an agent "seals and transfers" its genome to the winner on proximity collision, with fitness based on survival and capture count. Champion genome persists to IndexedDB and reloads on next session as the seed population. Hybrid embodiment: particles on canvas + DOM status cards that follow selected agents. Fully offline after load; progressive enhancement (pointer fallback if no XR).

Deliberately branches away from the recent dominant cluster of residual predictors, fluid/reservoir morphs, orientation-primary causal inputs, softbody/cloth physics, spectral/audio, pure NCA, and pointer-history fields (F281–F288). Core novelty is WebXR hand+gaze as sealed causal control of MLP-driven multi-agent genome competition with explicit transfer-on-grab and IDB champion persistence.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- Canvas2D arena: 12 agents as particles with position, velocity, genome-modulated color/size.
- Tiny MLP: inputs [gaze_x, gaze_y, hand_pinch, agent_local_energy]; outputs [ax, ay, capture_bias, seal_intent].
- Genome: 8 float weights per agent, mutated on transfer, fitness = captures + longevity.
- WebXR: immersive-ar or inline session; hand pose + gaze ray for selection/grab.
- IndexedDB: seal/load champion genome + generation count.
- DOM: status panel, seal/load buttons, agent info cards that track selected particle.
- Offline first; pointer + keyboard as XR fallback.

## Expected outcome
Runnable interactive prototype. Enter XR (or use pointer) to gaze-select and hand-grab agents; watch MLP-driven motion and genome transfers on capture. Seal persists the current champion. Load restores and seeds next population. Offline-capable. Expands true WebXR hand/gaze causal control + sealed genome multi-agent competition + tiny MLP physical policy + IDB persistence building blocks.

## Mechanics
1. XR session (or fallback) supplies gaze ray and hand pinch strength each frame.
2. MLP evaluates for selected or all agents → acceleration.
3. Physics step: integrate velocity, bounce, proximity check → transfer genome on grab+near.
4. Fitness updates; best genome eligible for seal.
5. Seal button stores champion to IndexedDB; load seeds agents from it.

## Failure modes
- No WebXR → pointer gaze simulation + click-to-grab.
- No IndexedDB → in-memory only.
- No Worker → main-thread MLP.
- Small screens / no canvas → degraded status only.
- XR permission denied → explicit fallback message.

## Cross-reference
Avoided residual morphs, fluid fields, orientation-as-primary, softbody, spectral, NCA, speech portals, WebRTC sharing as core. Novel combination of true WebXR hand+gaze causal + local MLP policy + multi-agent sealed genome transfer arena + IndexedDB champion persistence + hybrid canvas+DOM.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/webxr-handgaze-genome-arena.js`; test: gaze/hand produces non-zero MLP output, grab+proximity transfers genome (weights change), seal/load restores champion fitness.
