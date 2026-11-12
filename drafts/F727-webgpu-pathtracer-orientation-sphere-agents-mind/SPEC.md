# F727 WebGPU Pathtracer Orientation Sphere Agents Mind

Plain name: WebGPU path-tracer orientation sphere agents

**Ledger ID**: F-727 (frontier series)

**Slug**: webgpu-pathtracer-orientation-sphere-agents-mind

**Date**: 2026-11-12

**Branch from**: Recent cluster of WebGPU continuum/particle/SDF/Gaussian/quantum-phase kernels with MLP/RNN/genome controllers and floating DOM portals (F690–F725). Explicitly leaves all previous fluid, NCA, spectral, particle flocking, Gaussian splat, quantum walk, LBM, and pure DOM systems.

**Concept**
Novel combination never previously attempted: a progressive Monte-Carlo path tracer (primary rays + one bounce approximation) implemented in WebGPU fragment/compute that renders a small population of living reflective spheres. Each sphere is an agent whose 3D position and radius are driven by a tiny local MLP that takes DeviceOrientationEvent history (alpha/beta/gamma deltas) plus a local energy state as input. The rendered image is the light-transport embodiment of the multi-agent mind. Absolute-positioned DOM portals are projected onto the screen positions of the spheres and display a short label derived from the agent’s current fitness / energy. Pointer attractor and optional seal of genomes via IndexedDB + BroadcastChannel.

**Mechanics**
1. Initialize 8–12 spheres with random positions inside a unit cube and random MLP weights (~12–16 weights each).
2. On DeviceOrientation: accumulate short history of orientation deltas; feed each agent’s MLP; MLP outputs a small velocity / force vector and a radius delta.
3. Integrate positions with simple damping and bounds; update energy from motion + interaction.
4. Each frame: dispatch WebGPU ray-sphere intersection kernel (or fragment) that traces primary rays and a simple reflection, accumulates color based on sphere albedo and a sky gradient; present to canvas.
5. Project sphere centers to screen space; lerp DOM portal positions and update their text/scale from energy.
6. Pointer: nearest-sphere attraction.
7. Seal: serialize best MLP weights + positions to IndexedDB; BroadcastChannel for multi-tab adoption.

**Expected outcome**
Open the page on a device with orientation support. Tilt the device: spheres drift and resize according to their local policies, the path-traced image updates with moving reflective orbs, and DOM cards glide to the projected sphere locations showing energy labels. Click/drag attracts the nearest agent. Seal and open a second tab to transfer genomes. Works offline. Canvas2D projected spheres fallback if WebGPU unavailable.

**Failure modes**
- No WebGPU: automatic Canvas2D 3D projection of colored circles.
- No DeviceOrientation: pointer velocity history as surrogate input.
- High-DPI / low-end: reduce sphere count or ray samples.
- IndexedDB blocked: session memory only.

**Files**
- drafts/F727-webgpu-pathtracer-orientation-sphere-agents-mind/SPEC.md
- drafts/F727-webgpu-pathtracer-orientation-sphere-agents-mind/index.html

Void is now Verse everywhere.
