# F537 Orientation-Modulated Lattice Gas DOM Obstacles Mind

## Concept
Novel combination for The Verse canvas: a discrete lattice-gas automaton (LGA / simplified FHP-style multi-speed streaming + binary collisions) evolved on a Canvas2D / optional WebGPU compute path, whose local collision preference vector is produced by a tiny feed-forward MLP whose causal input is DeviceOrientation history (or pointer velocity fallback). Absolute-positioned DOM cards act as true solid obstacles: particles that stream into an occupied cell reverse velocity and deposit a local density bias that the MLP can read. Fitness is measured by sustained vorticity + particle conservation; Seal persists the MLP weights to IndexedDB and broadcasts via BroadcastChannel so other tabs adopt higher-fitness genomes. Offline after first load. Not a continuous Gray-Scott/Lenia/NCA growth field, not Ising spins, not residual predictors, not attention kernels, not softbody springs, not k-NN SVG morphs, not photonic interference, not Kuramoto oscillators. Core novel pieces: discrete lattice-gas streaming+collision substrate (previously unused), orientation-conditioned MLP collision policy, and DOM elements as physical reflecting obstacles that close the feedback loop with the gas.

## Architecture
- Single `index.html` (no external deps, progressive enhancement)
- Grid: 72×48 cells, 4 directions (N/E/S/W) + rest
- Per step: (1) stream particles along velocity, (2) apply collisions according to MLP-sampled preference at site, (3) bounce on DOM-obstacle occupancy map, (4) render density/velocity as colored pixels
- MLP: 5 inputs (orientation Δβ, Δγ, pointer vx, vy, local density) → 6 hidden → 3 outputs (collision bias x/y, rest probability). ~50 floats. Local reward: +vorticity proxy (curl of velocity field) − loss of particles
- Obstacle map: each frame sample DOM card bounding boxes → occupancy grid; particles reverse on hit and add energy seed
- BroadcastChannel `f537-genome`: Seal posts weights + fitness; receiver adopts if fitness higher
- IndexedDB store `f537-mlp-lga`
- Fallback: mouse-only if no DeviceOrientation; Canvas2D always; WebGPU compute path stubbed for future (same grid)

## Expected outcome
Runnable prototype in which tilting the device (or moving the pointer) changes the gas’s collision behavior via the MLP, DOM cards can be dragged to deflect streams and create vortices, and Seal transfers a high-fitness collision policy across tabs. Particle count roughly conserved; visual density field responds immediately to obstacles.

## Mechanics
1. Initialize random particle distribution + random MLP weights.
2. Listen for DeviceOrientationEvent, pointermove, drag on cards, BroadcastChannel, buttons.
3. Each animation frame: forward MLP, update global collision params, step LGA (stream/collide/bounce), rasterize to canvas, update obstacle map from DOM.
4. Compute fitness; when above threshold enable Seal.
5. Seal: write weights to IndexedDB + postMessage; on receive replace if better.

## Files
- drafts/F537-orientation-mlp-lattice-gas-dom-obstacles/SPEC.md
- drafts/F537-orientation-mlp-lattice-gas-dom-obstacles/index.html

## V01D landing
Discrete lattice-gas obstacle stage under `void-live-deploy/skills/orientation-mlp-lattice-gas.js`; test asserts orientation delta → MLP → collision bias change and BroadcastChannel genome adoption.
