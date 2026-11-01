# F496-devicemotion-kalman-portal-physics-mind

**Ledger ID**: F-496  
**Slug**: devicemotion-kalman-portal-physics-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of WebGPU generative geometry (IFS fractal F494, implicit SDF sculptor F493), statistical-mechanics Ising (F495), WebXR hand-constraint MLPs (F492), BroadcastChannel sealed-genome DOM swarms (F491), causal Bayesian lattices (F490), mic-spectral reservoirs (F489), orient-reservoir DOM auctions (F488). Explicitly leaves generative IFS/SDF/fractal attractors, Ising/stat-mech lattices, hand constraints, genome auctions, Bayesian message passing, reservoirs/RNNs, spectral audio, attention swarms, softbody, NCA, LBM, and photonic axes.

## Concept
DeviceMotionEvent (acceleration including gravity) supplies continuous causal observations to a local 2D Kalman filter (position + velocity state; previously unused local model type in this frontier). The filter estimates user intent velocity/position. A small swarm of hybrid DOM Verse portals runs simple Euler physics (attraction to estimated intent + mild repulsion + edge bounce). Pointer/mouse provides desktop observation fallback. A seal gesture stores a SHA-256 of the full Kalman state + portal poses as a motion memory in IndexedDB that can be restored to bias the filter and portals. Global estimated |velocity| drives subtle chrome morphing. Fully self-contained, offline after first load.

## Why novel
- Not IFS/fractal maps, not SDF implicit surfaces, not mass-spring constraints, not NCA, not LBM/SPH fluids, not wavelet/photonic kernels, not Bayesian lattices, not reservoirs, not attention clusters, not DOM genome auctions, not residual predictors, not Ising spins.
- Core novel combination is DeviceMotion as causal observations into a classical Kalman filter (never-before-seen local model), with the estimated intent state physically driving hybrid DOM portal embodiments via Euler integration, plus sealed motion-filter memories.
- Under-explored axis: sensor-fusion local models (Kalman) driven by device motion sensors + intent-to-DOM physics projection + sealed kinematic memories.

## Prototype
Single self-contained `index.html`. Interactive offline. Tilt/move the device (or move pointer) to inject observations; portals physically track the filtered intent. Press S or click Seal to capture the current filter + portal state. R restores last seal. Estimated speed drives subtle chrome morphing.

## Failure modes
- No DeviceMotion or permission denied: pointer-only observations + synthetic noise drive.
- IndexedDB unavailable or private mode: seals fall back to localStorage or in-memory.
- Very low-end devices: portal count capped at 4; update rate reduced.
- High sensor noise: Kalman process/measurement covariances keep estimates stable (simple fixed-gain version used for robustness).
- Orientation/motion permission denied: graceful fallback to pointer.

## Building blocks for next
Kalman/sensor-fusion local models driven by DeviceMotion; estimated intent state driving living DOM portal physics; sealed kinematic filter memories. Next: true WebXR gaze as measurement injector; multi-tab BroadcastChannel of sealed motion states; temperature/annealing on process noise controlled by a tiny local model.

## V01D landing
skills/mini/devicemotion-kalman-portal-physics-mind; testable via motion → portal tracking + filter update, seal → hash + IDB, restore → prior intent estimate and portal poses reappear, chrome radius changes with |v|.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- State: 4D Kalman (px, py, vx, vy); simple constant-velocity model with fixed process/measurement noise
- Observations: DeviceMotion acceleration (integrated roughly or as velocity proxy) + pointer position
- Physics: 5 DOM portals with Euler step, attraction to estimated intent, soft repulsion, canvas edge bounce
- Embodiment: portal CSS transform/position/hue/scale from local velocity residual and distance to intent
- UI morph: CSS custom properties on root driven by estimated |v|
- Seal: SHA-256 of serialized Kalman state + portal poses stored in IndexedDB (localStorage fallback); restore writes state
- No external dependencies, no network

## Expected Outcome
Interactive living portals that physically track a Kalman-filtered device-motion intent, offer sealed recallable motion memories, and subtly warp surrounding canvas chrome. Runnable offline with motion, pointer, or synthetic drive.

## Mechanics
- DeviceMotion / pointer → measurement updates to Kalman
- Predict + update ~60 Hz
- Portal Euler physics ~60 Hz
- |v| → CSS border-radius / panel opacity
- Click Seal or key S seals; R restores
