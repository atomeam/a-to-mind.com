# F777 WebGPU SPH Policy Fluid Mind

## Concept
A simplified smoothed-particle hydrodynamics (SPH) fluid simulated in pure JS (Canvas2D visualization, WebGPU compute path prepared for future). A local tiny MLP policy network reads DeviceOrientation + pointer deltas + fluid density and outputs global force biases that stir the fluid. Floating DOM "buoy" portals advect with local particle density, scale and recolor by pressure. Turbulence triggers short Vibration API pulses. Seal button mutates and persists the policy weights to localStorage as a sealed genome.

## Novelty
Leaves recent clusters of SDF metaball raymarchers with audio feedback (F774), Biot-Savart magnetic fields (F773), Kuramoto phase oscillators (F770), CSS3D agent swarms (F776), LIF spiking fields (F763), and tip calculators / packing lists. Core novel combination is SPH density-pressure fluid kernel (not lattice-gas, not softbody springs, not boids, not NCA, not Lenia) driven by orientation-aware local MLP policy, with DOM buoys as true floating embodiments and haptic closed-loop on turbulence. Not previously built.

## Architecture
- Single self-contained index.html
- 180 SPH particles, kernel radius 40
- Tiny MLP (6→4→2) policy from orientation, pointer velocity, average density
- 4 absolute DOM portals that follow local high-density regions
- navigator.vibrate on high policy output
- localStorage sealed genome
- Canvas2D rendering with density-modulated color and size

## Mechanics
1. Particles compute density and pressure via kernel summation.
2. Policy injects global force; pairwise pressure forces update velocities.
3. Portals seek local density centroids, inherit visual properties.
4. Seal mutates weights slightly and persists.
5. Pointer drag and device tilt are the primary causal inputs.

## Expected outcome
Open page: fluid particles appear and settle. Tilt phone or drag mouse: fluid stirs, buoys float and pulse, occasional vibration. Seal locks an adapted stirring policy. Fully offline after load.

## Failure modes
No orientation permission → pointer only. No Vibration API → silent. Low performance on old devices → reduce N.

## Building blocks
Reusable SPH density/pressure kernel, orientation-to-force MLP stub, density-advection DOM portal binder.

## Files
drafts/F777-webgpu-sph-policy-fluid-mind/SPEC.md
drafts/F777-webgpu-sph-policy-fluid-mind/index.html