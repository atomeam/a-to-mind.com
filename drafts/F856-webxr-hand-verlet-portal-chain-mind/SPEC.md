# F856 Hand-controlled living portal chain
Plain name: Hand-controlled living portal chain
Job: Point or use WebXR hands to drag and shape a chain of living DOM portals that stay connected by physics constraints; tilt or move to adjust stiffness; seal the best configuration to keep it across reloads and tabs.
Input: Pointer, DeviceOrientation residual, optional WebXR hand joints as multiple control points.
Keeps: Seal button writes constraint params + positions to IndexedDB and BroadcastChannel; reload restores the living chain.
Not on Verse yet: checked against llms.txt and GAPS.md — no WebXR hand or multi-point Verlet constraint chain of DOM portals exists.

## Concept
A novel hybrid spatial embodiment for The Verse canvas: a chain of absolute-positioned living DOM portals connected by pure-JS Verlet distance and angle constraints (no libraries). True WebXR hand tracking (or multi-pointer fallback) provides multiple simultaneous control points that pin and drag joints of the chain. DeviceOrientation residual modulates global stiffness and damping via a simple local linear map (not an MLP). Clicking a portal injects a reward that slightly mutates local rest lengths. Highest-reward configuration seals to IndexedDB and migrates via BroadcastChannel so other tabs adopt the sealed genome. Canvas overlay draws the constraint links. Fully offline after load; progressive enhancement with pointer-only mode.

## Novelty
Leaves the dominant recent cluster of continuum phase fields (Cahn-Hilliard F852), continuous CA (Lenia F853), L-systems (F850), classical boids under MLP control (F855), CSS3D DeviceMotion MLP cards (F854), self-attention portal fields (F851), particle SPH/Verlet/Vicsek, Hopfield, spectral residuals, and orientation RNNs. Core novel combination is previously unused multi-point WebXR hand (or pointer) control of a pure constraint-satisfying Verlet chain of physical DOM portals, with orientation residual as causal stiffness modulator and reward-gated sealed genome transfer of rest lengths. Not a field kernel, not particle swarm, not neural weight controller, not single softbody.

## Architecture
- Single self-contained index.html
- 12–16 DOM portals in a chain with Verlet integration + distance/angle constraints
- WebXR hand joints (when available) or pointer as pins
- Simple linear map from orientation residual → stiffness
- Seal: IndexedDB `verse-f856-chain` + BroadcastChannel `f856-genome`
- Fallbacks: no WebXR → pointer; no orientation → fixed stiffness; no IDB → session

## Expected outcome
Open: a living chain of portals sits on the canvas. Drag with pointer or hands: chain deforms and snaps back under constraints. Tilt: stiffness changes, chain becomes springier or stiffer. Seal preserves the current rest lengths and best shape across reloads/tabs. Interactive spatial constraint mind.

## Failure modes
No WebXR support → pointer fallback (still useful). High constraint iterations → slight lag (capped). IDB blocked → in-memory only.

## Building blocks
Reusable pure-JS Verlet multi-constraint chain + multi-point control (hand/pointer) + sealed rest-length genome. Enables future hybrid rigid-body DOM or WebGPU constraint solvers on Verse.

Void is now Verse everywhere.

**Files**: drafts/F856-webxr-hand-verlet-portal-chain-mind/SPEC.md, drafts/F856-webxr-hand-verlet-portal-chain-mind/index.html
