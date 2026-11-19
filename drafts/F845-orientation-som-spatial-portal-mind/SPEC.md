# F845 Orientation SOM Spatial Portal Mind

## Concept
A pure-JS Self-Organizing Map (Kohonen SOM) trained online on multi-modal causal inputs (DeviceOrientation Euler angles + normalized pointer position). The SOM lattice is embodied as a spatial grid of living DOM portals. Each node’s weight vector drives continuous morphs of its card (hue, scale, blur, border). Best-matching unit (BMU) and neighborhood activations light up in real time. User dwell, click, or drag on a portal supplies a supervised training signal that strengthens that node. Full weight matrix seals to IndexedDB and broadcasts via BroadcastChannel so other tabs adopt the learned topology. Optional Canvas2D overlay visualizes the current activation landscape.

## Novelty
Leaves the dominant recent cluster of continuum physics kernels (SPH, LBM, Gray-Scott, Cahn-Hilliard, DEM, vortex, softbody, NCA, Lenia, Ising, lattice-gas), neural policies (MLP, ESN, spiking, Hopfield, k-NN, residual, attention, transformer), and sealed-genome particle/portal competitions. Core novel combination is an unsupervised topology-preserving map (SOM) as the local mind whose causal inputs are orientation + pointer, embodied directly as a living spatial grid of DOM portals whose visual properties are the map’s weight components, with online Hebbian-style neighborhood updates and sealed weight transfer. Not a force-directed layout, not clustering of text, not particle swarms, not phase fields. First SOM mind on The Verse canvas.

## Architecture
- Single self-contained index.html (offline after load, progressive)
- Input vector (5-D): [α, β, γ, ptrX, ptrY] normalized to [-1,1] or [0,1]
- SOM: 4×4 lattice, 5-D weight vectors, Gaussian neighborhood, decaying learning rate & radius
- Online update on every orientation or pointer move (throttled)
- Click/dwell on a card forces BMU = that node and trains
- Visual: CSS custom properties or direct style from weight components; BMU gets extra glow
- Seal: IndexedDB key `f845-som-weights` + BroadcastChannel `f845-som`
- Fallback: no orientation → pointer-only; no IndexedDB → memory-only

## Expected outcome
User tilts device and moves pointer; the grid of cards continuously recolors and rescales as the map organizes. Clicking a card “teaches” that region. Other tabs receive the learned map. Interactive spatial local-AI capability that turns device pose into a living topology.

## Mechanics
1. Initialize random weights.
2. On input, find BMU (argmin Euclidean).
3. Update BMU and neighbors: w += η * h * (x - w)
4. Map weight components → HSL / scale / blur of corresponding DOM card.
5. On seal or periodic, persist and broadcast weights.
6. On receive, adopt if newer or higher activity.

## Failure modes
No DeviceOrientation → pointer-only map. No JS → static grid. High update rate → throttle to 30 Hz. IndexedDB quota → drop persistence.

## Building blocks
Pure-JS online SOM, orientation+pointer causal embedding, DOM-lattice embodiment of map weights, sealed weight transfer. Expands unsupervised spatial memory for future Verse minds.

**Files**: drafts/F845-orientation-som-spatial-portal-mind/SPEC.md, drafts/F845-orientation-som-spatial-portal-mind/index.html
