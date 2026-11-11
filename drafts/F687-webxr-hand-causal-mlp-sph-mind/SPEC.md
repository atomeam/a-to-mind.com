# F687 WebXR Hand Causal MLP SPH Portal Mind

## Concept
True WebXR hand-tracking (with pointer/orientation fallback) drives competing tiny local MLPs that modulate a novel 2D SPH-inspired particle fluid (previously unused kernel in this lineage: smoothed density/pressure/viscosity forces). Living DOM portals are hybrid-embodied as floating "thought droplets" that ride particle density and can be pinched/dragged. Sealed genome transfer occurs on hand-pinch proximity or portal collision between agents. Persistent via IndexedDB. Branches cleanly from recent continuum kernels, orientation-RNN DOM, anchor-positioning, particle filters, and pure multi-agent collisions.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum solvers (wave equation F686, LBM, Gray-Scott, percolation), orientation MLP DOM riders, CSS Anchor Positioning agents, inertial filters, multiagent collision genomes, causal graphs, and residual predictors. Core novel combination is WebXR hand pose (joint velocities/pinch) as causal input to local MLPs controlling SPH parameters (viscosity, pressure bias), with DOM portals as physical riders in the fluid field and pinch-gated sealed genome transfer. Not pure NCA, not spectral residuals, not softbody springs, not k-means.

## Architecture
- Single self-contained index.html, offline after load.
- ~400 particles, simple SPH-like forces on Canvas2D (CPU for reliability; WebGPU context probed for future).
- Two competing 5-6-3 MLPs take [handVelX, handVelY, pinch, oriX, oriY] → [viscMod, pressureMod, sourceBias].
- 4 absolute DOM portals that translate with local particle density and can be dragged.
- WebXR immersive-ar/vr with hand-tracking requested if available; else pointer + DeviceOrientation.
- Pinch or click portal rewards agent (fitness++).
- Proximity of opposite portals or hand near agent source: winner seals (averages + mutates) genome into loser.
- Seal button → IndexedDB `verse-f687`. Reload restores.
- Fallback: always interactive without XR/orientation/WebGPU.

## Expected outcome
Open page, move pointer or enter XR and move hands; fluid responds with MLP-modulated viscosity/pressure; portals bob with density; pinch/click rewards and transfers genomes on proximity; seal persists.

## Failure modes
- No WebXR/hand-tracking: pointer + orientation proxy.
- Orientation denied: pointer only.
- IndexedDB private: session only.
- High particle count: capped at 400 for 60fps CPU.
- WebGPU unavailable: Canvas2D fully functional.

## Files
drafts/F687-webxr-hand-causal-mlp-sph-mind/SPEC.md
drafts/F687-webxr-hand-causal-mlp-sph-mind/index.html

Void is now Verse everywhere.
