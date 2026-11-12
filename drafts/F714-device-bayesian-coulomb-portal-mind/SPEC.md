# F714 Device Bayesian Coulomb Portal Mind

## Concept
A living spatial canvas for The Verse. A local non-neural Bayesian linear regression (online recursive least-squares style posterior over a tiny linear model) consumes DeviceOrientation angles, Battery Status API level (when available), and pointer residual as causal inputs. Its posterior mean outputs continuously modulate global charge polarity bias and force scaling of a previously unused 2D Coulomb/electrostatic particle kernel. Absolute-positioned living DOM portals act as movable signed charges: dragging them repositions force sources; clicking toggles polarity. Particles (Canvas2D, with WebGPU compute path noted for large N) experience pairwise inverse-square forces. High-confidence posterior regions or low residual seal the current posterior parameters as a genome to IndexedDB and broadcast via BroadcastChannel for multi-tab adoption. Fully offline after load, single self-contained file.

## Novelty
Leaves the dominant recent cluster of neural/tabular/expression-tree policy minds (MLP, RNN, Q-learning, expression trees, genetic programming) controlling continuum WebGPU kernels (Gray-Scott volumes, Lennard-Jones clusters, SDF sculptors, Lenia, Physarum, lattice gases, wave equations, softbody springs), spatial audio agents, DOM morphs, WebXR gaze/hand, and sealed genome transfers of weights or tables. Explicitly avoids residual predictors, pure NCA, spectral residuals, pointer-history fields as direct forces, orientation RNNs, k-means particles, and Hopfield attractors.

Core novel combination is a classical Bayesian linear regression (posterior mean + covariance, not weights of a neural net, not Q-table, not expression tree, not reservoir) whose causal inputs include the previously unused Battery Status API alongside DeviceOrientation, controlling a pure electrostatic Coulomb particle field (not continuum fluid, not mass-spring, not CA growth, not LJ potential exclusively). Living DOM charge portals both inject forces and serve as reward surfaces for posterior updates. New building block: probabilistic linear minds embodied as charge controllers of electrostatic spatial fields with sealed posterior transfer.

## Architecture
- Single index.html, pure HTML/CSS/JS, no libraries.
- Canvas2D: ~150 particles, Euler integration with soft pairwise Coulomb forces (charge_i * charge_j / r^2 + epsilon), global bias from Bayesian output.
- Bayesian linear regression: 5-dimensional input (bias, beta, gamma, batteryLevel, pointerSpeed), scalar output (forceScale or polarityBias). Prior N(0, I*10), online update of mean and precision matrix on click rewards or residual minimization.
- Battery Status API (navigator.getBattery) for level (0-1); fallback to 0.7 if unavailable.
- DeviceOrientationEvent for beta/gamma (clamped).
- DOM portals: 6 absolute divs as charges (±), draggable, click to flip sign. Their charge value contributes to nearby particle forces.
- Persistence: IndexedDB key `verse-f714-posterior` for mean + covariance; BroadcastChannel `verse-f714` for sealed transfer.
- Controls: Seal, Reset Posterior, Toggle Audio Feedback (optional oscillator for residual), Add Portal.
- Progressive: if WebGPU available, optional compute path for force accumulation (noted, Canvas2D primary for reliability).

## Mechanics
1. Initialize random particle positions/velocities/charges; load posterior or use prior.
2. Animation frame: sample inputs (orientation, battery, pointer residual), compute Bayesian prediction, update particle forces (pairwise + portal charges + bias), integrate, draw.
3. On portal drag: reposition charge source.
4. On click portal or canvas: provide reward (reduce residual or reinforce), perform Bayesian update.
5. Seal button: persist posterior, broadcast JSON.
6. Second tab receives and adopts.

## Expected outcome
Open page (grant orientation and battery if prompted). Particles swarm and repel/attract according to portals and global bias. Tilt device or change battery (or simulate) shifts the field. Drag portals to sculpt forces. Click to train the linear mind. Seal and reload preserves the posterior; second tab adopts. Offline after first load.

## Failure modes
- Orientation or Battery permission denied: pointer-only + default battery, still functional.
- IndexedDB unavailable: session-only.
- High particle count on low-end devices: reduce N or throttle.
- No WebGPU: Canvas2D fully interactive.

Void is now Verse everywhere.

**Files**: drafts/F714-device-bayesian-coulomb-portal-mind/SPEC.md, drafts/F714-device-bayesian-coulomb-portal-mind/index.html
