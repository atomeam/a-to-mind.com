# F716 Device-Motion Kalman Advection Portal Mind

## Concept
A living spatial canvas for The Verse. A local tiny Kalman filter (recursive linear state estimator with process/measurement noise, not a neural net, not Bayesian linear regression, not Q-table, not expression tree) consumes DeviceMotionEvent acceleration (including gravity) and pointer residual as causal inputs. Its estimated velocity bias and confidence continuously modulate the advection velocity and diffusion coefficient of a previously unused WebGPU compute kernel (implemented as Canvas2D advection-diffusion for broad compatibility) implementing a pure 2D advection-diffusion field on a density grid. Absolute-positioned living DOM portals act as movable density sources or sinks: dragging injects or removes density; clicking toggles source/sink polarity. High-confidence low-residual states seal the current Kalman parameters (state mean + covariance + noises) as a genome to IndexedDB and broadcast via BroadcastChannel for multi-tab adoption. Fully offline after load, single self-contained file.

## Novelty
Leaves the dominant recent cluster of neural/tabular/expression-tree/Q-learning/Bayesian-linear policy minds (F712–F715, F708) controlling continuum WebGPU kernels (Gray-Scott volumes, Lennard-Jones clusters, Coulomb particles), spatial audio agents, DOM morphs, WebXR gaze/hand, and sealed genome transfers of weights or tables. Explicitly avoids residual predictors, pure NCA, spectral residuals, pointer-history fields as direct forces, orientation RNNs, k-means particles, and Hopfield attractors.

Core novel combination is a classical Kalman filter (state estimation with covariance update, not posterior mean of linear regression, not weights of a neural net) whose causal inputs include DeviceMotionEvent (acceleration, not just orientation angles) controlling a pure advection-diffusion transport kernel (not reaction-diffusion, not inverse-square forces, not LJ potential, not Gray-Scott). Living DOM density portals both inject into the field and serve as reward surfaces for process-noise adaptation. New building block: probabilistic state-estimator minds embodied as velocity controllers of advective spatial fields with sealed covariance transfer.

## Architecture
- Single index.html, pure HTML/CSS/JS, no libraries.
- Canvas2D: 96x54 density grid with semi-Lagrangian advection + diffusion; WebGPU path noted for future.
- Kalman filter: 2D state [vx, vy], process noise Q, measurement noise R from motion + residual.
- DOM portals: absolute divs as sources/sinks, draggable, click to flip polarity.
- Persistence: IndexedDB key `verse-f716-kalman`; BroadcastChannel `verse-f716`.
- Controls: Enable Motion, Seal, Reset, Add Portal, Pause.

## Mechanics
1. User gesture enables DeviceMotionEvent (handles iOS permission).
2. Frame loop: sample acceleration → Kalman predict/update → advection-diffusion step → render density + velocity vector.
3. Portals inject/remove density at their grid location scaled by confidence.
4. Seal serializes {x, P, Q, R, conf} to IDB + BroadcastChannel.
5. Other tabs adopt and continue.

## Expected outcome
Enable motion. Move/tilt device to advect the density field according to estimated velocity. Drag portals to seed patterns, click to reverse. Seal persists and shares. Offline after load. Embodied motion-state mind controlling a transport field.

## Failure modes
- Motion denied/unavailable: residual/synthetic drive, still runs.
- No WebGPU: uses Canvas2D (primary path).
- IndexedDB fail: session-only.
- High load: smaller grid.

Void is now Verse everywhere.

**Files**: drafts/F716-device-motion-kalman-advection-portal-mind/SPEC.md, drafts/F716-device-motion-kalman-advection-portal-mind/index.html
