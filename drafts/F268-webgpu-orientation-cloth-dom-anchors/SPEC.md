# F268 — WebGPU Orientation Cloth with DOM Anchors

## Concept
WebGPU compute shader simulates a spring-mass cloth membrane. DeviceOrientation tilts the gravity vector, draping and waving the cloth in real time. Pointer (or touch) grabs and pulls individual particles. Selected vertices anchor floating hybrid DOM cards that move and rotate with the cloth. Particle state + current orientation bias can be sealed to IndexedDB for persistence across reloads. Fully offline, single self-contained HTML. Canvas2D CPU fallback if no WebGPU.

## Branch away from
Dominant recent cluster (F260–F267): local MLP/RNN controllers on physics arenas or fluids, WebXR hand/gaze primary, sealed genome transfer (clipboard/WebRTC), attention-as-force, NCA portals, spectral residuals, pointer-history fields. This uses pure non-neural physics kernels, DeviceOrientation as causal gravity, hybrid DOM embodiment attached to simulation vertices, and IndexedDB field persistence — no neural models, no multi-agent competition, no XR session, no spectral/audio.

## Capabilities
- Tilt device to change gravity; cloth responds physically.
- Click/drag on canvas to grab and stretch particles.
- DOM cards float at anchor points, scaled/rotated by local strain or velocity.
- Seal current cloth state (positions/velocities + gravity) to IndexedDB.
- Load sealed state on start.
- Offline after first load; no external dependencies.

## Architecture
- Main thread: WebGPU device, compute pipeline for force/integration step, render pipeline or Canvas2D draw of particles/lines.
- DeviceOrientationEvent → gravity vector uploaded each frame.
- Pointer events for interaction.
- Absolute DOM cards updated from readback positions.
- IndexedDB for sealed snapshots.

## Failure modes
- No WebGPU → automatic Canvas2D CPU spring-mass (lower particle count).
- No DeviceOrientation (desktop) → pointer drag sets temporary gravity bias or mouse-as-gravity.
- IndexedDB blocked → session-only.
- High particle count (default 16x16) may lag on weak GPUs; auto-reduce.

## Next expansion
Add multi-cloth layers, WebRTC shared field broadcast of sealed states, or true WebXR hand grab on the cloth while keeping the pure physics core.

## V01D landing
Frontier canvas page or skill under `void-live-deploy/skills/orientation-cloth-dom/`.
Test: tilt (or simulate), observe drape; grab particles; seal, reload, confirm state restores; DOM cards track anchors.
