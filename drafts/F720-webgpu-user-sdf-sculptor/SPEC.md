# F720-webgpu-user-sdf-sculptor

**Ledger ID**: F-720  
**Slug**: webgpu-user-sdf-sculptor  
**Date**: 2026-11-12  
**Status**: frontier prototype  

Plain name: 3D Shape Sculptor

Job: Add spheres and boxes, set their size, color and position with form controls or by dragging their cards; see the live composed 3D scene rendered with WebGPU raymarched signed-distance fields; rotate the view by tilting the device or dragging; download the current view as a PNG or export the full scene description as JSON (also saved on the device and shareable via link).

## Concept
A constructive spatial tool for The Verse canvas: the user authors a small set of analytic SDF primitives (spheres, boxes) whose parameters live in floating DOM cards. A WebGPU raymarcher evaluates the min-union of the SDFs every frame and shades the surface with simple lighting. Device orientation or pointer drag orbits the camera. The entire scene state is serializable to JSON for download, localStorage persistence, and URL-hash sharing. No emergent simulation, no particles, no lattices.

## Novelty
Departs from prior volumetric continuum simulations (Gray-Scott, fluids), particle swarms, MLP-controlled agents, and Gaussian splats. Core is user-authored analytic SDF composition + live raymarch + bidirectional DOM parameter cards + explicit export/persistence. First frontier draft that treats the GPU as a constructive renderer for user-defined geometry rather than an evolutionary or reactive field.

## Architecture
- Single index.html, pure HTML/CSS/JS, no libraries, offline after load.
- WebGPU render pipeline: fullscreen triangle, fragment shader performs sphere/box SDF raymarch, soft shadow / ambient occlusion approximation, simple Lambert shading.
- DOM cards: one per primitive, absolute-positioned, pointer-draggable to update position; number inputs for radius/size and color picker.
- Camera: DeviceOrientationEvent (alpha/beta/gamma) or pointer-drag residual for orbit.
- Persistence: localStorage key `verse-f720-sculptor`; URL hash carries JSON (base64); download buttons for PNG (canvas toBlob) and JSON.
- Controls: Add Sphere, Add Box, Reset, Download PNG, Download JSON, Share Link.

## Mechanics
1. User adds a primitive; a card appears with default params.
2. Card drag updates the primitive's world position; inputs update radius/extent and color.
3. Each frame the raymarcher evaluates min of all SDFs, shades, and presents.
4. Orientation or drag updates the view matrix.
5. Export serializes the primitive list; PNG captures the current canvas.

## Expected outcome
Open in a WebGPU browser. Add a few shapes, drag their cards to arrange them, tilt or drag to view from different angles, then download the picture or the JSON scene. The last scene reloads from the device. Works with pointer-only.

## Failure modes
- No WebGPU: show a clear message and a static CSS 3D fallback of the cards.
- Orientation permission denied: pointer orbit works.
- Too many primitives: soft limit at 8 with a note.

## Files
drafts/F720-webgpu-user-sdf-sculptor/SPEC.md  
drafts/F720-webgpu-user-sdf-sculptor/index.html

Void is now Verse everywhere.
