# F501-pressure-tilt-mlp-card-sculptor

**Ledger ID**: F-501  
**Slug**: pressure-tilt-mlp-card-sculptor  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of WebGPU/Canvas generative & dynamical field kernels (implicit SDF F493, IFS fractal F494, Ising orient F495, DeviceMotion Kalman portals F496, Echo State living DOM F497, WFC/MLP living grids F498, battery-metabolism particles F499, amplitude-collapse portals F500). Explicitly leaves continuous field kernels, residual predictors, pure NCA, spectral/audio residuals, pointer-history force fields, softbody DOM meshes, orientation RNNs/reservoirs, attention lattices, and k-means particles.

## Concept
PointerEvent.pressure, tiltX, tiltY (stylus or simulated) and DeviceOrientation (beta/gamma) are continuous causal inputs to a small population of local tiny MLPs (pure JS, 4→6→4). Each MLP outputs spring-target offsets and stiffness for a swarm of hybrid DOM Verse cards. Cards run simple Euler physics with mutual soft collisions and edge bounce, so the page layout becomes a living sculptable skin. Fitness rewards spatial diversity (entropy of card positions) plus engagement dwell (time a card remains near its target under user pressure). A small “gene token” DOM element can be dragged (DataTransfer) onto another agent core or card to trigger sealed genome transfer: the fitter agent’s weights are mutated and assigned. Full state (weights, card poses, fitness) seals to IndexedDB for offline restore. Canvas background renders a pressure/orientation heat field. Desktop fallback synthesizes pressure from pointer speed and tilt from position. Fully self-contained, offline after first load.

## Novelty
Leaves the dominant recent cluster of WebGPU/Canvas continuous field kernels and portal morphs. Core novel combination is PointerEvent pressure+tilt (previously unused causal axis) driving competing local MLPs that physically embody and sculpt real DOM cards, with sealed genome transfer via the DataTransfer drag-and-drop API. Not field kernels, not residual predictors, not pure NCA, not spectral residuals, not softbody mass-spring meshes, not orientation RNNs, not attention lattices, not pointer-history force fields.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Local MLPs in main thread (tiny, no external libs)
- DOM cards as physical embodiments (CSS transforms)
- Canvas2D pressure heatmap
- IndexedDB seal/restore
- DataTransfer for genome tokens

## Building block
Future experiments can feed sealed pressure-sculpted poses as initial conditions, add true WebGPU particle compute for the cards, or multi-tab BroadcastChannel genome auctions.

## V01D landing
Spatial stage skill under void-live-deploy/skills/pressure-sculptor-mind.js; test asserts pressure → card transform mapping and seal hash integrity.

## Files
drafts/F501-pressure-tilt-mlp-card-sculptor/SPEC.md
drafts/F501-pressure-tilt-mlp-card-sculptor/index.html
