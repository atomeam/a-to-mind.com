# F683 Inertial Particle Filter Spatial Mind

## Concept
A browser-native Bayesian particle filter that performs local inertial navigation and map building. DeviceMotionEvent (accelerometer + gyroscope) drives dead-reckoning updates on hundreds of pose particles. The user places spatial landmarks by clicking; proximity observations reweight the particle cloud. The estimated pose and trajectory are visualized on a free Canvas. Sealed maps persist in IndexedDB. Optional WebGPU path accumulates particle density for smoother rendering when available.

## Novelty
Leaves the recent cluster of multi-agent collision genomes (F681), causal-graph PageRank portals (F682), spatial-audio particles (F680), WebGPU fluids/NCA/percolation, barcode inventory, and planner boards. Core novel combination is a previously unused particle-filter localizer (Monte-Carlo localization) whose causal input is full DeviceMotion (not just orientation or pointer residual), building an explicit spatial landmark map that the filter localizes against, with Canvas/WebGPU visualization of the uncertainty cloud. Not MLP genomes, not CA substrates, not DOM constraint solvers, not pure planners.

## Architecture
- Single self-contained index.html, offline after load.
- N=256 particles: {x, y, theta, w}.
- Motion integration: approximate linear acceleration (high-pass gravity) + rotationRate.alpha/beta/gamma → update pose with process noise.
- Landmarks: array of {id, x, y, name}; click places one at current mean pose or canvas coords.
- Observation step: button or automatic when near → likelihood ~ exp(-dist^2 / sigma) , normalize weights, resample if N_eff low.
- Render: Canvas 2D draws particles (alpha by weight), mean pose arrow, trajectory polyline, landmarks.
- Seal: IndexedDB key `verse-f683-map` stores landmarks + last mean pose + trajectory.
- Controls: Enable Motion (permission), Place Landmark, Observe, Seal Map, Reset.
- Fallbacks: no motion → pointer-drag to simulate velocity; no IndexedDB → session only.

## Expected outcome
Grant motion permission, tilt/move device or drag; particle cloud spreads then collapses near landmarks when observing; seal and reload restores the map.

## Failure modes
- Motion permission denied or unsupported: pointer simulation only.
- iOS requires user gesture for DeviceMotion.
- High noise on cheap sensors: cloud stays diffuse.
- IndexedDB quota or blocked: in-memory only.

Void is now Verse everywhere.

## Files
drafts/F683-inertial-particle-filter-spatial-mind/SPEC.md
drafts/F683-inertial-particle-filter-spatial-mind/index.html
