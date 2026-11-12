# F710 WebGPU Lennard-Jones Cluster Mind

## Concept
A previously unused molecular-dynamics kernel: particles interacting via the Lennard-Jones pair potential (attractive/repulsive at different ranges) on a Canvas2D substrate (WebGPU-ready architecture). Emergent dense clusters act as living portals. User pointer is a dynamic force center (attract or repel). No neural policy network. Parameters (ε, σ) form a sealable genome persisted in localStorage. Clusters are detected by spatial density and bound to floating DOM elements that display density.

## Novelty
Leaves the recent cluster of local policy MLPs/RNNs/ESNs/k-NN controlling substrates (Lenia, Physarum, Ising, lattice-gas, vortex, softbody, echo-state, SVG morphs, WebRTC portal swarms, orientation-driven agents). Core novel combination is a true pair-potential MD kernel (Lennard-Jones, not mass-spring softbody, not NCA, not lattice-gas streaming, not continuum fields) with density-derived DOM cluster portals and sealed parameter genome transfer. No DeviceOrientation primary, no residual predictor, no attention lattice, no pure neural control. Expands building blocks with molecular-dynamics forces and cluster-portal hybrid embodiment.

## Architecture
- Single self-contained index.html, fully offline after load.
- N=180 particles, O(N²) force with cutoff (fine for this size).
- Euler integration + damping + wall bounce.
- Mouse: soft attractor; mouse-down: strong repulsor.
- Spatial grid density for cluster finding; up to 6 DOM portals follow cluster centers.
- Seal/Load buttons persist {eps, sig, cut} under key `verse-f710-lj`.
- HUD shows particle count, cluster count, approximate potential energy.

## Mechanics
1. Initialize random positions/velocities.
2. Each frame: compute LJ forces between pairs within cutoff + mouse force; integrate; bounce.
3. Bin particles into grid cells, extract high-density cells, merge nearby → clusters.
4. Position DOM portals at cluster centers with opacity ~ density.
5. Seal stores current parameters; Load restores them.

## Expected outcome
Particles form transient clusters and disperse under mouse influence. Portals appear over dense regions. Seal a parameter set, reload page, Load to restore dynamics character. Fully interactive, no permissions required, works offline.

## Failure modes
- Very high N would lag (kept at 180).
- localStorage blocked: session-only.
- Extreme ε/σ values can cause numerical explosion (defaults stable).

## V01D landing
Lennard-Jones cluster skill under void-live-deploy; test asserts force step, cluster detection, portal DOM binding, and localStorage seal/load roundtrip.

Void is now Verse everywhere.
