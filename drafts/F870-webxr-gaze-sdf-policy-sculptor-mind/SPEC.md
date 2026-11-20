# F870-webxr-gaze-sdf-policy-sculptor-mind

Plain name: Gaze SDF Policy Sculptor
Job: Let a local policy agent and your gaze/pointer sculpt a living multi-sphere signed-distance field; the raymarched surface embodies the policy’s choices and provides reward when density peaks are clicked.

## Concept
A compact multi-sphere SDF lives entirely in the browser. A pure-JS local policy agent (small linear map over features: gaze ray origin/direction residual, dwell time, current SDF density sample, time) proposes small increments to sphere centers and radii each step. Direct pointer movement acts as a continuous gaze ray that samples the field; clicks inject reward when they hit high-density regions. Optional WebXR session (when available) supplies true gaze or hand ray as the primary driver. The surface is visualized by a low-resolution canvas raymarcher (marching a simple analytic multi-sphere SDF). High-reward configurations seal sphere parameters + policy weights to IndexedDB and BroadcastChannel so other tabs adopt the sealed genome. Fully offline single-file prototype.

## Novelty
Leaves the dominant recent clusters of orientation residual → ESN/RNN/attention/policy portals, WebGPU voxel density sculptors, acoustic/DEM/particle kernels, Verlet chains, and multi-agent tiles. Core novel combination is an explicit analytic multi-sphere SDF whose parameters are closed-loop controlled by a gaze-driven local policy, with a live raymarched implicit surface as both visualization and reward source. Not a voxel grid, not particle system, not DOM portal embodiment, not continuum CA.

## Architecture
- Single self-contained index.html
- SDF: 5 spheres (center + radius), analytic min-union distance
- Policy: 6-dim feature → 4 actions (dx, dy, dr, strength) via small weight matrix; updated by reward delta rule
- Visualization: Canvas2D raymarcher at ~120×68 (upscaled), 16–24 steps, simple shading
- Input: pointer as gaze ray (origin at camera, direction from screen); optional WebXR reference space for true gaze
- Reward: click near high |SDF| gradient or density peak → policy update
- Seal: IndexedDB key `verse-f870-sdf` + BroadcastChannel `f870-sdf`
- Fallbacks: no WebXR → pointer; no orientation → residual pointer velocity; no IDB → sessionStorage

## Expected outcome
Open the page: a soft glowing implicit surface appears. Move the pointer (or enter WebXR and look): the policy begins proposing sphere adjustments; the surface deforms and flows. Click high-density regions to reward the agent and watch future proposals adapt. Seal preserves the current SDF and policy; reload or open another tab to restore. Offline after first load. Interactive spatial local-AI SDF sculptor for Verse.

## Failure modes
- Very low-end device: reduce march steps or resolution.
- WebXR unavailable or permission denied: pointer ray used.
- IndexedDB blocked: session-only state.
- Raymarch singularities: clamp step size and soft-reset extreme radii.

## Building blocks
Reusable pure-JS multi-sphere SDF + gaze-driven local linear policy sculptor + canvas raymarcher embodiment + reward-gated adaptation + sealed transfer. Enables future WebGPU raymarch kernels, true WebXR hand as volumetric brush on the SDF, and multi-agent policies sharing the same implicit field.

Void is now Verse everywhere.
