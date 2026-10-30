# F466-webgpu-spectral-cloth-dom-weaver

## Concept
Novel combination for The Verse canvas: a real-time mass-spring cloth simulation whose spring stiffness and damping are driven by live microphone spectral energy and centroid residual. DOM “Verse tiles” (editable notes) are physically woven into the cloth mesh—they follow sampled points, can be dragged to pull the fabric, and pinned. Residual prediction error of the spectral centroid injects turbulence. Sealed snapshots (positions + tile text + spectral signature) persist to IndexedDB and can be replayed as living memory.

This is not a superficial variation of prior NCA/MLP residual minds, granular collision genome transfer, Hebbian particle swarms, attention-wave sonifiers, or simple RD fields. Core mechanic is a continuous deformable mesh (cloth) that couples acoustic spectrum → mechanical properties → spatial DOM layout, with embodied drag/pin interaction and sealed cloth-memory replay.

## Architecture
- Single `index.html` (no build step, no external deps).
- Canvas2D mass-spring integrator (22×14 grid, structural + shear springs).
- Web Audio AnalyserNode for FFT; spectral centroid + simple one-step residual.
- DOM tiles absolutely positioned and scaled/rotated by local cloth point + global energy.
- Pointer drag on tiles applies local force; click toggles pin.
- IndexedDB object store for seals (points + tile contents + metrics).
- Progressive: mic optional (pointer + residual still work); WebGPU compute path noted for next iteration (storage-buffer integration + texture sampling).

## Expected outcome
Interactive spatial cloth that stiffens and flutters with voice or ambient sound, warps a set of editable Verse notes across the page, and lets the user physically pull or pin the fabric. Sealing captures a momentary woven state that can be restored. Fully runnable offline after first load.

## Failure modes
- No mic permission → pointer-only force + synthetic residual.
- Low-end devices: reduce COLS/ROWS if frame drops.
- Private browsing may limit IndexedDB.
- No WebGPU in this prototype (Canvas2D active); shader path is future building block.

## Building blocks unlocked
True WebGPU compute cloth kernel, WebXR hand-tracked pin/pull, multi-tab BroadcastChannel of sealed cloth states, hybrid CSS-transform soft-body DOM driven by the same mesh, local small MLP that learns spectral→stiffness mapping.

## V01D landing
Spatial acoustic-cloth skill under `skills/mini/spectral-cloth-weaver`. Test: energy→CSS hue/scale change, drag→cloth displacement, seal→IndexedDB round-trip, mic residual→turbulence visible in particle motion.
