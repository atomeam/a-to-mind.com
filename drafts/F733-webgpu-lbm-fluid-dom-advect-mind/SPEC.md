# F733 WebGPU Lattice Boltzmann Fluid DOM Advect Mind

## Concept
A 2D Lattice Boltzmann Method (D2Q9) fluid simulation whose macroscopic velocity field physically advects living DOM portals. Pointer drags inject momentum; DeviceOrientation provides a gravity bias. Portals are hybrid embodiments that both ride the continuum and rewrite it. Sealed genomes (portal positions + biases) persist in localStorage and transfer via BroadcastChannel.

## Novelty
Leaves the recent cluster of WebGPU continuum/discrete field kernels (Gray-Scott RD F732, spiking neural portals F731, discrete CA audio F728, quantum phase F725, pathtracer F727), WebXR hand/gaze (F726/F729), and prior Lenia/NCA/SPH/lattice-gas/softbody/attention/residual substrates.

Core novel combination is the Lattice Boltzmann Method (BGK collision on discrete velocity distributions, previously unused) as the embodied continuum, with DOM portals under pure advection + injection, sealed genome transfer over BroadcastChannel, and DeviceOrientation as global force bias. Not reaction-diffusion, not discrete CA rules, not particle SPH, not neural spiking, not path-traced spheres.

## Architecture
- Single self-contained index.html.
- D2Q9 LBM grid (128×96): 9 distributions, BGK collision, simple bounce-back boundaries, JS implementation (WebGPU path reserved for future kernel port).
- 2+ floating DOM portals: advected by local (ux,uy), styled by velocity, drag to inject momentum.
- DeviceOrientation: mild additive force to ux.
- Persistence: localStorage `verse-f733-lbm`. BroadcastChannel `f733-genome`.
- Visual: Canvas2D colormap of speed + density.

## Expected outcome
Open the page. Fluid velocity field appears and evolves. Portals drift with the flow and change color/rotation. Drag a portal to inject momentum and watch the fluid respond. Tilt device for gravity bias. Seal and reload or open second tab to transfer genome. Works fully offline.

## Failure modes
- No DeviceOrientation: silent skip.
- BroadcastChannel unavailable: localStorage only.
- Performance on low-end: reduce grid or step rate (current is interactive).

## Building blocks
Reusable JS LBM kernel, DOM advection from macroscopic fields, momentum injection, sealed portal genome transfer.

Void is now Verse everywhere.
