# F836 WebXR Hand Verlet DOM Cloth Mind

**Ledger ID**: F-836 (frontier series)  
**Slug**: webxr-hand-verlet-dom-cloth-mind  
**Date**: 2026-11-19  
**Status**: frontier prototype  

## Concept
A hybrid physical UI mind for The Verse canvas: a deformable cloth of living DOM nodes connected by distance constraints, integrated with Verlet (position-based) dynamics. True WebXR hand joints (with pointer + DeviceOrientation fallback) act as graspable attractors that can pin or pull nodes. A tiny local causal MLP observes local deformation energy and global hand proximity, outputting dynamic stiffness and damping modulation so the cloth "learns" how to respond. Clicking a node rewards the MLP (small weight mutation). Sealed genome (MLP weights) persists to IndexedDB and can transfer via BroadcastChannel to other tabs. Not a free particle swarm; the embodiment *is* the constrained cloth surface of Verse portals.

## Novelty
Leaves the dominant recent cluster of pure local-model-to-CSS-portal morphing (CNN density features F835, Q-table tilt layouts F834, online-MLP note placement F832, mic-NCA F833), k-means clustering tools (F831), continuum/particle force fields (Coulomb F830, SPH, LBM, Gray-Scott, DEM), residual/attention predictors, pure NCA, spectral residuals, and softbody spring chains from much earlier drafts. Core novel combination is Verlet-constrained DOM cloth as primary embodiment, true WebXR hand (or orientation) as direct physical causal grasp, and local MLP as adaptive material controller rather than position predictor. First WebXR-hand-driven deformable DOM cloth mind on Verse.

## Architecture
- Single self-contained index.html (offline-capable).
- 6×6 grid of absolute-positioned DOM nodes (divs with contenteditable thought labels).
- Verlet integration: positions + previous positions, constraint relaxation for structural + shear springs.
- WebXR: requestSession('immersive-vr' or 'inline'), hand joints as attractors; fallback to pointer + DeviceOrientationEvent for gravity/bias.
- Local MLP: 4 inputs (mean strain, hand dist, orientation gamma, time phase) → 2 outputs (stiffness scale, damping). Pure JS, ~20 weights.
- Reward: click node → mutate MLP weights toward observed stability.
- Persistence: IndexedDB key `verse-f836` for MLP + node contents; BroadcastChannel `f836-genome` for sealed transfer.
- Visual: nodes color by local strain, canvas optional for debug field.

## Expected outcome
Open page, see cloth of portals. Move pointer or tilt device (or enter WebXR) to grab and drape the cloth. Clicks make the material "learn" better response. Reload or other tab can adopt the sealed mind. Interactive spatial hybrid embodiment.

## Failure modes
- No WebXR: falls back cleanly to pointer/orientation.
- IndexedDB denied: in-memory only.
- Too many constraints: reduce grid or relaxation iterations.
- Mobile: touch works as pointer.

## Building blocks
Reusable pure-JS Verlet cloth on DOM nodes + adaptive MLP material controller. Enables future hybrid rigid/soft WebXR embodiments or WebGPU-accelerated constraint solvers on Verse.

**Void is now Verse everywhere.**
