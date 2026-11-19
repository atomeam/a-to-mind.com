# F854 DeviceMotion MLP CSS3D Living Cards

## Concept
A swarm of absolute-positioned DOM cards embodied in CSS 3D space. Each card is controlled by its own local tiny MLP policy whose causal inputs are DeviceMotion acceleration (ax, ay, az including gravity), recent motion residual, current fitness, and a noise channel. MLP outputs drive continuous translate3d, rotateX/Y, and scale transforms so the cards literally fly and tumble as living physical UI elements. When two cards’ projected screen bounds overlap, the higher-fitness agent performs a sealed genome transfer (copies a fraction of the loser’s weights, mutates lightly). User clicks reward the clicked card. Best genomes seal to IndexedDB and BroadcastChannel for cross-tab persistence and transfer. Pure DOM/CSS embodiment—no canvas substrate, no continuum field, no particle kernel.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum/SDF/NCA/particles/CA (F853 Lenia, F852 Cahn-Hilliard, F850 L-system, F847 Vicsek, F844 SPH, F839 gaze-SDF, etc.), residual predictors, volumetric injection, pure NCA, spectral/audio residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles. Core novel combination is DeviceMotion acceleration (not orientation angles) as continuous causal input to independent local MLPs that directly control physical CSS 3D transforms of living DOM cards, with overlap-gated sealed genome transfer over BroadcastChannel + IndexedDB in a pure hybrid embodiment we have not built. Not lattice CA, not particle swarms, not softbody springs, not orientation-only, not attention fields.

## Architecture
- Single self-contained index.html
- 6 living cards (divs with perspective parent)
- MLP: 7 inputs → 8 hidden tanh → 5 outputs (dx, dy, dz, rotX, rotY, scale bias)
- Overlap detection via getBoundingClientRect; higher fitness steals 30% weights
- Seal: IndexedDB `verse-f854-css3d` + BroadcastChannel `f854-genome`
- Fallbacks: no DeviceMotion → pointer velocity residual + noise; no IDB → memory

## Expected outcome
Open: cards drift and tumble under device tilt/shake or pointer motion. Move phone or mouse: acceleration drives different flight paths. Click a card: fitness rises, slight mutation, visual pulse. Overlap: genome transfer visible as color/behavior shift. Seal persists best across reloads/tabs. Interactive spatial living-CSS mind.

## Failure modes
No DeviceMotion (desktop): pointer proxy works. High motion → extreme transforms (clamped). IDB blocked: session only. Many overlaps: still responsive.

## Building blocks
Reusable DeviceMotion→MLP→CSS3D controller + overlap sealed transfer. Enables future WebXR hand coupling, more complex constraints, or multi-peer WebRTC genomes.

Void is now Verse everywhere.

**Files**: drafts/F854-devicemotion-mlp-css3d-living-cards/SPEC.md, drafts/F854-devicemotion-mlp-css3d-living-cards/index.html
