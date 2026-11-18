# F808 Orientation MLP Lattice-Gas Portal Mind

## Concept
A novel hybrid spatial / local-AI capability for The Verse canvas: DeviceOrientation events feed a tiny local MLP whose outputs continuously modulate the collision and propagation rules of a discrete lattice-gas automaton (HPP-style or simplified FHP) running on a Canvas grid. Agents (gas particles) stream and collide according to orientation-biased rules. Living DOM portals sample local density/velocity and can be dragged to inject particle sources or sinks. High-fitness configurations (stable density patterns or high activity) trigger sealed genome (MLP weights) transfer via BroadcastChannel for multi-tab competition. Persistent in IndexedDB. Fully offline after load.

## Novelty
Leaves the recent cluster of battery-Kalman gravity portals (F800), Vicsek Q-table notes (F801), DeviceMotion ESN particle-life (F802), WebGPU LBM fluid recurrent force (F803), spatial task board orientation MLP (F804), WebAudio waveguide WebGPU wavefield (F805), WebXR hand gravity MLP (F806), and local GA seating chart (F807). Core novel combination is DeviceOrientation as causal input to a feed-forward MLP that parameters a previously under-used discrete lattice-gas kernel (not continuous LBM/SPH fluids, not particle-life, not gravity N-body, not wave equation, not softbody), with DOM portals as true interactive sources and sealed genome transfer over BroadcastChannel shared field in a multi-agent competitive architecture. Not residual predictors, not pure NCA, not spectral residuals, not orientation RNN.

## Architecture
- Lattice: 64x64 grid, particles as bitmasks or simple counts (0-4 directions), streaming + collision steps in main thread (or Worker if needed).
- MLP: 3-6-4 tiny network (alpha, beta, gamma from orientation → rule biases for collisions, injection rate, damping). Simple online update on portal interaction or density variance reward.
- Portals: 3-4 absolute DOM divs that color by local density, draggable to set injection points.
- Persistence: IndexedDB "f808-genome" for MLP weights.
- Shared: BroadcastChannel for genome broadcast on seal or high fitness.

## Expected outcome
Open: lattice quiet or slow diffusion. Tilt device to bias flow directions via MLP. Click/drag portals to inject particles; patterns emerge. Seal saves and shares best weights. Works offline, pointer always available.

## Failure modes
- No DeviceOrientation: fall back to pointer delta as proxy input.
- High CPU: reduce grid size or step rate.
- No BroadcastChannel: local only.

## Files
drafts/F808-orientation-mlp-latticegas-portal-mind/SPEC.md
drafts/F808-orientation-mlp-latticegas-portal-mind/index.html

Void is now Verse everywhere.
