# F698 Multi-Wave Genome Competition Mind

## Concept
Four independent discrete wave-equation membranes compete for user attention on The Verse canvas. Each membrane is a living 2D elastic field whose physical parameters (wave speed, damping, injection strength, hue) form its sealed genome. The user injects energy by clicking or dragging; DeviceOrientation supplies a global tilt bias. Fitness is measured by cumulative injected energy. Periodically the fittest genome is mutated and transferred to the least-fit membrane (sealed genome transfer). The top genome can be manually sealed to IndexedDB. Canvases physically grow or shrink according to fitness, creating a hybrid spatial embodiment.

## Novelty
Leaves the dominant recent cluster of residual-MLP controllers, temporal attention over pointer history, orientation-MLP clip-path/SVG morphs, pure-DOM residual swarms, WebXR hand constraint/DEM, SDF raymarch + Kanerva, spatial packing lists, char-RNN gardens, and prior NCA / Lenia / Physarum / softbody / spectral residual / k-means particle substrates. Core novel combination is multi-agent competition among independent continuum wave-equation kernels (previously unused primary physics substrate) whose genomes are the PDE parameters themselves, with energy-gated sealed genome transfer and DeviceOrientation as a causal global force bias. Not residual predictors, not attention lattices, not pointer-history fields as primary, not softbody springs, not orientation RNN.

## Architecture
- Single index.html, vanilla JS.
- Four <canvas> elements in a responsive grid.
- Each runs its own discrete wave simulation (CPU, 48×48 for performance).
- Genome: Float32Array of 4 values.
- IndexedDB key: `f698-wave-genomes`.
- BroadcastChannel optional for future multi-tab, but sealed via IndexedDB.
- Offline-capable after load.

## Mechanics
1. Initialize four membranes with random genomes.
2. Animation loop: for each membrane, compute Laplacian, update wave (u, u_prev), apply tilt bias from DeviceOrientation, decay fitness slowly.
3. Pointer/click on canvas: inject Gaussian energy proportional to genome.injection, add to fitness.
4. Every 8 s: sort by fitness, mutate top genome (Gaussian noise), replace bottom genome, reset bottom fitness, log transfer.
5. Seal button: store all genomes + fitness to IndexedDB.
6. On load: restore if present.
7. Canvas size CSS scales with normalized fitness.

## Failure modes
- DeviceOrientation denied → zero tilt (still fully interactive).
- IndexedDB unavailable → session-only evolution.
- Very small screens → canvases stack, still usable.
- High CPU → reduce grid size automatically if frame time > 30 ms.

## Files
- index.html
- SPEC.md

Void is now Verse everywhere.
