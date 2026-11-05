# F579 WebXR Hand CPM Sealed Cell Mind

**Slug**: `webxr-hand-cpm-sealed-cell-mind`  
**Date**: 2026-11-05  
**Ledger ID**: F-579

## Concept
A simplified Cellular Potts Model (CPM) lattice runs on Canvas2D (WebGPU compute optional stub). Multiple competing cell agents each carry a sealed genome of preferred volume, adhesion energy, and motility bias. WebXR hand tracking (or pointer fallback) injects energy pulses and "grasps" boundary sites to force genome transfer between contacting cells. High-fitness cells (volume near target + low energy) spawn living DOM portal cards that display their genome signature and can be dragged to seed new regions. IndexedDB seals the best genome + lattice snapshot. Fully offline single-file.

## Novelty
Leaves the dominant recent cluster of ambient-sensor / orientation MLP / speech-driven continuous kernels (SDF raymarch, wave equation, NCA/Gray-Scott, CSS-Paint Worklet chrome, CSS-grid living layouts) and prior softbody, residual, attention, particle, spectral systems. Core novel combination is true WebXR hand (or pointer proxy) as causal input to a previously unused Cellular Potts Model kernel (Metropolis energy minimization of multi-cell volume + adhesion, not discrete CA rules, not continuum fluids, not MLP parametrization of fields), with multi-agent sealed genome transfer on physical boundary contact and DOM portal embodiment of winning cells. Not orientation RNN, not k-means particles, not pure NCA.

## Architecture
- Single index.html (progressive enhancement, offline after load)
- CPM grid: 80×60 sites, cell IDs 1..N, background 0
- Energy: volume penalty + adhesion (different for same/different type)
- Genome per cell: {targetVol, adhesion, motility}
- Update: random site flips accepted by Metropolis with temperature
- Hand/pointer: inject energy (force flip bias) or grasp to copy genome across boundary
- DOM portals: absolute cards at cell centroids for top cells
- IndexedDB store `f579-cpm-cell-mind` for best genome + grid
- WebXR: requestSession with hand-tracking if available; fallback mouse
- Chrome: status, fitness, Seal / Reset / Inject buttons

## Expected outcome
Runnable prototype: cells grow and compete visibly on canvas; pointer (or XR hand) injects energy or forces genome transfer on grasp; winning cells spawn draggable DOM portals showing genome; Seal restores best across reloads. Works offline; graceful if no WebXR.

## Mechanics
1. Init N cells with random genomes, seed lattice.
2. Each frame: several Metropolis steps, update volumes, paint canvas, position portals.
3. Pointer/hand: inject or grasp-transfer.
4. Seal: serialize best genome + grid to IndexedDB.
5. Drag portal: optional reseed.

## Files
drafts/F579-webxr-hand-cpm-sealed-cell-mind/SPEC.md
drafts/F579-webxr-hand-cpm-sealed-cell-mind/index.html

## V01D landing
WebXR-hand CPM sealed-cell skill under void-live-deploy/skills/hand-cpm-cell-mind.js; test asserts hand/pointer inject changes lattice energy and that sealed genome restores the same cell layout after reload.

## Frontier Engine F-579
Architecture: WebXR hand (pointer fallback) → simplified CPM Metropolis lattice → multi-cell sealed genome competition + contact transfer → Canvas visualization + DOM portal embodiment + IndexedDB seal.  
Expected outcome: interactive spatial field of competing biological-style cells whose genomes transfer under hand grasp and embody as living portals.  
Mechanics: energy-minimizing cell growth, grasp-gated genome transfer, portal spawning, sealed persistence.  
Outcome: prototype delivered; ready for ledger-guard append.
