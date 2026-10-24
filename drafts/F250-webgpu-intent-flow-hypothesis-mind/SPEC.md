# F-250 · WebGPU Intent-Flow Hypothesis Mind

## Concept
Novel combination branching from residual-density portals (F-248), recurrent constraint arena (F-249), acoustic softbody, and causal token swarms:

- Continuous coarse intent-flow velocity field (Canvas2D advection-diffusion of a velocity grid; WebGPU compute path detected and stubbed) whose source terms are the output of a local Web Worker evolutionary residual agent.
- Agent predicts a 2D intent vector from device orientation tilt, microphone spectral energy, and a compact pointer-velocity residual; residual error modulates flow viscosity and page chrome.
- Floating DOM hypothesis orbs act as passive tracers advected by local flow velocity; they morph (scale, hue, backdrop, CSS rotate) from local |intent| and residual. Explicit drag/click selects an orb, seals a short hypothesis fragment (intent sample + residual) to IndexedDB, and injects a temporary radial source that biases future flow.
- Progressive WebXR entry for spatial viewing of the flow. Generative Web Audio oscillators driven by flow divergence and residual.
- Not a superficial variation: substrate is a dynamic velocity flow sourced by an intent predictor (not a residual density lattice or fixed springs); embodiment is passive tracers that become active only on deliberate selection/seal (not autonomous recurrent agents or consolidating portals); mind is an intent-vector residual minimizer rather than a policy or lattice-entropy predictor.

## Architecture
Single self-contained `index.html`. Main thread runs simple fluid step (velocity advection + diffusion + source injection) + Canvas2D visualization of flow arrows or particles. Blob Worker runs residual MLP + hill-climb. CSS variables + orb 3D transforms. AudioContext after user gesture. IndexedDB for sealed hypotheses. DeviceOrientation and optional getUserMedia. Optional WebXR session.

## Expected outcome
Tilt device or move pointer; ambient sound modulates intent. Flow appears and orbs drift with the current. Dragging an orb selects it (gold ring), seals a fragment, and creates a visible injection wave that redirects nearby flow. Page hue and tones pulse with residual and divergence. Fully interactive offline after load; degrades gracefully.

## Mechanics
- Velocity grid 32×18 (coarse); simple semi-Lagrangian advection + diffusion; sources from agent intent vector at pointer and orb positions.
- Worker: residual MLP (inputs: tiltX/Y, spectralEnergy, pointerResidualX/Y, prevIntent) → predicted intent; fitness = -|residual|; hill-climb mutate.
- Orbs: lerp position toward flow velocity * dt; CSS scale/hue/rotate from |v| and residual.
- Selection: on pointerup over orb, write {intent, residual, ts} to IndexedDB, inject source, mark selected.
- Chrome: --hue and --blur from residual; audio from divergence.

## Failure modes
- No Worker → static flow.
- Mic denied → spectral=0.
- No orientation → tilt=0.
- Canvas2D only (WebGPU optional).
- XR unsupported → pointer complete.
- Audio blocked until gesture.
- IndexedDB blocked → in-memory seals only.

## Building blocks
Pure WebGPU fluid compute (velocity + density in one dispatch), true residual transformer in worker, multi-orb consensus selection, XR hand selection of hypotheses, shared flow across peers.

## V01D landing
Spatial intent-flow-hypothesis skill under void-live-deploy/skills/; testable via residual→flow stability, drag→IndexedDB seal + visible injection, and orb advection matching local velocity samples.
