# F759 Device motion trajectory logger

Plain name: Device motion trajectory logger
Job: Tap Start, then move or tilt your phone (or move the mouse on desktop). The page records DeviceMotion and DeviceOrientation samples, draws a live 3D trajectory path of the motion (WebGPU preferred, Canvas2D fallback), lets you mark named segments, and gives back a downloadable CSV of the raw samples or a sealed JSON snapshot. Everything stays on this device; nothing leaves the browser.

Input: Start/stop recording, optional segment labels, mouse fallback for desktop testing.
Keeps: CSV download of timestamped ax/ay/az, alpha/beta/gamma, etc.; JSON seal of the path; last session restored from localStorage.

Not on Verse yet: checked against existing tools and recent frontier drafts (F748–F758: debt planner, chore rota, SSH keygen, encryptor, business card, camera palette, SPH buoyancy mind, OPFS terrain, sleep calculator, optical-flow boids). No dedicated offline motion/orientation trajectory logger with live spatial path visualization and export.

## Novelty
Leaves the dominant recent cluster of pure utility calculators (sleep, debt, chores, keys, cards) and residual spatial/neural/particle minds (optical-flow boids, SPH, terrain genetics, typing-rhythm grids, etc.). Core novel combination is previously unused primary use of the DeviceMotion/DeviceOrientation sensor suite as a returnable measurement and capture tool, with a live spatial trajectory embodiment (WebGPU line strip or projected Canvas path) and exportable sealed samples. Not decorative particle fields, lattices, swarms, orbs, or "minds". New building block for Verse is a reusable local sensor trajectory recorder + visualizer that other tools can later embed for gesture or calibration capture.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Sensor: DeviceMotionEvent + DeviceOrientationEvent (requestPermission on iOS). Mouse velocity as desktop surrogate.
- Buffer: ring of samples {t, ax, ay, az, alpha, beta, gamma, mx, my}.
- Visualization: WebGPU render pipeline for 3D line strip of integrated velocity/position estimate (or raw accel); Canvas2D orthographic projection fallback.
- Persistence: localStorage for last path; download CSV / JSON.
- UI: Start/Stop, Mark Segment, Download CSV, Download Seal, clear status.

## Mechanics
1. User taps Start → request sensor permissions → begin sampling at ~60 Hz.
2. Integrate rough position from accel (high-pass filtered) or plot raw orientation sphere.
3. Each frame, update GPU buffer or canvas path.
4. Mark inserts a labeled event in the sample stream.
5. Stop → enable downloads. Seal stores full buffer.
6. Reload restores last seal if present.

## Expected outcome
Open on a phone: grant motion access, move the device in a figure-eight or walk a short path, watch the live 3D trail grow, mark a point, stop, download the CSV. On desktop the mouse draws a 2D surrogate path. Offline, private, immediately useful for sensor debugging or simple motion capture.

## Failure modes
- Sensors denied or unavailable: clear message + mouse fallback still functional.
- No WebGPU: automatic Canvas2D path (still spatial).
- localStorage blocked: session-only, downloads still work.
- High sample rate on low-end: downsample automatically.

## Building blocks
Reusable DeviceMotion/Orientation sampler + CSV exporter, WebGPU line-strip trajectory renderer (or Canvas fallback), sealed sample buffer. Ready for later WebXR spatial anchoring or OPFS large recordings.

V01D landing: tools/device-motion-logger; test asserts permission → samples accumulate → CSV contains expected columns and non-empty rows.

Void is now Verse everywhere.

**Files**: drafts/F759-webgpu-device-motion-trajectory-logger/SPEC.md, drafts/F759-webgpu-device-motion-trajectory-logger/index.html
