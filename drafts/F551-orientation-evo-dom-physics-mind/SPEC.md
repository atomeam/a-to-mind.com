# F551: Orientation-Evo DOM Physics Mind

## Concept
DeviceOrientationEvent provides continuous causal input to a local population of tiny genomes (physics parameter sets). A simple (1+1)-ES mutates and selects parameters that control spring stiffness, damping, and attractor strengths of competing physical UI elements (real DOM divs under Euler integration). Fitness rewards how stably the cards track and "respond" to device tilt without oscillation, plus pointer engagement. Winner seals its genome (SHA-256) into IndexedDB and offers it via BroadcastChannel. Hybrid embodiment is the DOM cards themselves. Fully offline, single self-contained file, no WebGPU, no canvas particles, no NCA/spectral/residual predictors.

## Branch
Away from the dominant recent cluster of WebGPU kernels (spectral-NCA, embedding swarms, self-vision particles, SDF, SPH, Lenia) + local MLP/RNN policies + sensor-driven residual or predictive models + canvas/DOM hybrids (F543–F550). Explicitly leaves all compute shaders, neural forward passes, residual error predictors, pure NCA, spectral residuals, pointer-history force fields, softbody meshes, orientation RNNs, attention lattices, and k-means particles.

## Novelty
- DeviceOrientation as direct causal driver of an evolutionary strategy (not a trained MLP/RNN) that adapts physical parameters of living DOM elements.
- True hybrid embodiment: the "agents" are CSS-positioned HTML cards with JS physics, not canvas sprites or WebGPU buffers.
- Sealed genome transfer via BroadcastChannel + IndexedDB persistence for multi-tab competition.
- Offline-capable after first load; graceful fallback to pointer when orientation is unavailable.

## Failure modes
- DeviceOrientation requires secure context + permission on some browsers; falls back to pointer-as-tilt proxy.
- Too-aggressive mutation can destabilize cards; fitness decays on high velocity.
- BroadcastChannel limited to same-origin tabs.

## Files
- drafts/F551-orientation-evo-dom-physics-mind/SPEC.md
- drafts/F551-orientation-evo-dom-physics-mind/index.html

## Integration
Lands as Verse canvas prototype expanding building blocks for evolutionary local models controlling physical UI and sealed multi-tab genome transfer. Test: tilt device (or move pointer) and observe cards adapting spring parameters; seal button persists winner; open second tab to receive genome.
