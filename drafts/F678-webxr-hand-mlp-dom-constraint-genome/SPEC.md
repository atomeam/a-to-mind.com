# F678 WebXR Hand Causal MLP DOM Constraint Genome

**Ledger ID**: F-678 (frontier series)

**Slug**: webxr-hand-mlp-dom-constraint-genome

**Date**: 2026-11-11

**Plain name**: Hand-driven living constraint cards

**Job**: Wave your hand or pointer to influence a swarm of physical DOM cards connected by springs; a tiny local MLP adapts the stiffness from your motion; colliding cards exchange genomes; seal the best to the device.

## Concept
True hybrid embodiment for The Verse canvas: absolute-positioned DOM cards act as physical nodes in a constraint graph. A local pure-JS tiny MLP takes causal input from pointer/hand proximity, velocity, and optional DeviceOrientation, and outputs per-constraint stiffness and rest-length bias. Simple Verlet integration updates card positions each frame; visual lines connect them. Overlap (collision) triggers sealed genome transfer of MLP weights if the other has higher fitness (click rewards + low energy). Best genomes persist in IndexedDB and migrate via BroadcastChannel. Pointer fallback always; WebXR hand session attempted if available. Fully offline single-file.

## Novelty
Leaves the dominant recent cluster of continuum WebGPU kernels (Gray-Scott RD F677, LBM fluid notes F676, pointer noise fields F675, bin-packers F673) and practical spatial planners with local models. Core novel combination is WebXR/pointer hand as causal input to a local MLP that directly modulates physical constraint parameters on living DOM nodes themselves (hybrid physical UI), with collision-gated sealed genome transfer. Not a canvas continuum field, not particle lattice, not NCA/Lenia/Ising/Physarum, not residual predictor, not spectral, not softbody mesh on GPU. The mind lives in the constraint graph of the page’s own elements.

## Architecture
- Single index.html, self-contained, offline after load.
- 6–8 absolute DOM cards (Verse portals) with positions, velocities.
- Constraints: random or chain connections; Verlet + spring forces whose k and rest are modulated by MLP output.
- MLP: 4-8-2 (inputs: handDist, handVel, tiltX, tiltY, localEnergy → stiffness, restBias). Population of one shared or per-card.
- Fitness: inverse spring energy + click count.
- Collision: bounding box overlap → compare fitness → transfer weights with mutation if higher.
- IndexedDB key `verse-f678`; BroadcastChannel `f678-genome`.
- Controls: Seal, Reset, Request XR/Orientation.
- Fallback: pointer motion if no XR or orientation.

## Expected outcome
Open page, move pointer or enter XR and wave hand; cards jiggle and settle under adaptive springs; drag a card, watch neighbors respond; click for reward; overlapping cards may adopt better genomes; seal persists; second tab adopts via channel; reload restores.

## Failure modes
- No WebXR/hand support: pointer proxy fully interactive.
- Orientation denied: pointer only.
- IndexedDB private mode: session memory.
- Too many constraints slow: limited to ~8 cards.

Void is now Verse everywhere.

**Files**
- drafts/F678-webxr-hand-mlp-dom-constraint-genome/SPEC.md
- drafts/F678-webxr-hand-mlp-dom-constraint-genome/index.html

**V01D landing**
Hand-driven DOM constraint skill under void-live-deploy/skills/webxr-hand-mlp-constraint.js; test asserts pointer changes stiffness, cards move under constraints, seal persists weights, collision can transfer genome.
