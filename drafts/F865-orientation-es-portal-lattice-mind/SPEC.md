# F865 — Orientation Echo-State Portal Lattice Mind

## Concept
Living CSS 3D portals on The Verse canvas are the physical embodiment of nodes in a local Echo State Network (reservoir computer). A fixed random recurrent reservoir is driven by continuous DeviceOrientation angles (β, γ) and residual pointer velocity. The reservoir state evolves in real time; a linear readout maps the state to per-portal forces and hues. Clicking a portal injects a positive reward that performs a simple online update on the shared readout weights toward the current configuration. Seal persists the readout matrix and best reservoir seed to IndexedDB and broadcasts via BroadcastChannel so other tabs can adopt the adapted controller. Canvas overlays faint reservoir activation trails. Fully offline after load; progressive enhancement (pointer residual if orientation unavailable).

## Novelty
Leaves the dominant recent clusters of continuum fields (NCA, Gray-Scott, LBM), particle physics (Verlet, SPH, Vicsek, boids), generative grammars (L-systems F850), self-attention portals (F851), multi-agent genome tiles (F864), evolutionary MLPs, and spectral resonators. Core novel combination is a fixed random recurrent reservoir (echo-state) whose readout is reward-adapted by user interaction, spatially embodied as orientation-biased living CSS 3D portals with sealed transfer. Not a single MLP, not a continuum, not multi-agent genomes.

## Architecture
- Single self-contained index.html
- Reservoir: N=24 nodes, sparse random W, spectral radius ~0.9, leak rate 0.3
- Input: orientation (β/90, γ/90) + pointer residual (vx, vy) + constant bias
- Readout: linear map state → [fx, fy, hue] per portal (6–8 portals)
- Physics: Euler integration of portal positions under readout forces + soft walls + weak repulsion
- Reward: click → readout += lr * state_outer * (desired - current) (simple delta rule)
- Seal: IndexedDB key `verse-f865-es` + BroadcastChannel `f865-es`
- Audio: optional soft tones from reservoir energy (one oscillator)
- Fallbacks: no DeviceOrientation → pointer velocity as tilt proxy; no IDB → sessionStorage

## Expected outcome
Open the page: portals gently drift and float in 3D space under the influence of the reservoir. Tilt the device (or move the pointer): the reservoir state shifts and portals respond with new forces and colors. Click a portal to reward the current configuration; the controller adapts. Seal preserves the adapted readout; open a second tab to receive it. Offline after load. Interactive spatial local reservoir mind for Verse.

## Failure modes
- DeviceOrientation permission denied or unavailable → pointer residual.
- AudioContext suspended until user gesture.
- IndexedDB quota or blocked → no persistence across reloads.
- Low-end device → reduce N or portal count.

## Building blocks
Reusable pure-JS Echo State Network + orientation/pointer drive + reward-gated readout adaptation + CSS 3D physical embodiment + sealed BroadcastChannel transfer. Enables future hybrid reservoir+WebGPU field or WebXR hand-as-reward on Verse.

Void is now Verse everywhere.
