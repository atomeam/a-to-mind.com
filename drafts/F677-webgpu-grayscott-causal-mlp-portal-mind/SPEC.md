# F677-webgpu-grayscott-causal-mlp-portal-mind

**Ledger ID**: F-677 (frontier series)

**Slug**: webgpu-grayscott-causal-mlp-portal-mind

**Date**: 2026-11-11

**Concept**
A living spatial chemical mind for The Verse canvas. A WebGPU compute (Canvas2D JS fallback) Gray-Scott reaction-diffusion lattice runs continuously. A small population of local pure-JS tiny MLPs observe local concentration gradients, pointer proximity, and DeviceOrientation (or pointer velocity proxy) as causal inputs and continuously modulate the local feed rate (F) and kill rate (k) injected into nearby cells. High-activity or high-concentration regions attract or spawn absolute-positioned DOM Verse portal cards that display local stats and can be dragged to inject U/V chemical seeds, closing a bidirectional physical-AI loop. User can reward/seal the current best MLP genomes (weights hashed) to IndexedDB; BroadcastChannel shares preferred genomes across tabs. Fully offline, single-file, progressive enhancement.

**Novelty**
Leaves the recent cluster of LBM fluid note organizers (F676), pointer-causal noise fields (F675), competitive summarizers, bin-packers, tilt organizers, WebXR Verlet, barcode inventories, wallpapers, and planners. Explicitly avoids residual predictors, pure NCA, Physarum, Lenia, softbody, Ising, spectral, k-NN, and orientation-only MLPs without a novel continuum chemistry kernel. Core novel combination is DeviceOrientation/pointer causal → evolving local MLPs → continuous modulation of Gray-Scott RD parameters whose emergent patterns physically drive and are seeded by living DOM portals, with rating-gated sealed genome transfer over IndexedDB + BroadcastChannel. Not a static drag planner, not a particle lattice, not continuum noise or Navier-Stokes.

**Architecture**
Single self-contained `index.html` (WebGPU preferred where available; pure JS Canvas2D Gray-Scott fallback always present).
- Canvas for RD visualization (U/V channels colored).
- Tiny MLPs (3-6-2): inputs [localU, localV, gradMag, pointerDist, tiltX, tiltY] → [dF, dk].
- Population of 4-8 portals: absolute DOM cards that sample nearby field and inject on drag.
- DeviceOrientationEvent (fallback pointer) for causal tilt.
- IndexedDB persists genomes + field hash snapshot; BroadcastChannel for live transfer.
- Controls: seed, seal, reset, request orientation, export JSON.

**Expected outcome**
Open page, move pointer or tilt device, watch reaction-diffusion patterns morph under MLP control, portals drift toward active regions, drag a portal to seed a new spot, seal a liked configuration, open second tab to observe genome adoption, reload restores.

**Mechanics**
1. Init random or sealed field + random MLP weights.
2. Each frame: sample local stats for each MLP, forward, apply delta rates to nearby cells.
3. Gray-Scott step (diffusion + reaction) on lattice.
4. Render to canvas; position portals toward high activity.
5. Drag injects chemicals.
6. Seal hashes weights, stores, posts to channel.
7. Export current state.

**Failure modes**
- No WebGPU: JS Canvas2D loop remains fully interactive (clamped grid size).
- Orientation permission denied: pointer-only causal input.
- IndexedDB blocked/private: session-only memory.
- High resolution slow: auto-scale grid.

Void is now Verse everywhere.

**Files**
- drafts/F677-webgpu-grayscott-causal-mlp-portal-mind/SPEC.md
- drafts/F677-webgpu-grayscott-causal-mlp-portal-mind/index.html

**V01D landing**
Gray-Scott causal MLP portal mind skill under void-live-deploy/skills/webgpu-grayscott-mlp.js; test asserts tilt/pointer changes local rates, portal position responds to concentration, seal persists weights, reload restores at least one genome.
