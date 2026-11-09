# F644 WebGPU LBM Orientation Evo DOM Fluid

Plain name: Orientation LBM fluid buoys
Job: Grant device motion; a local evolutionary policy modulates a Lattice Boltzmann Method fluid on WebGPU (or Canvas2D fallback); DOM buoy cards ride velocity peaks, compete for fitness, and transfer sealed genomes; seal downloads the best policy and field snapshot as JSON.

## Concept
A previously unused WebGPU compute kernel implements a 2D D2Q9 Lattice Boltzmann Method (LBM) with BGK collision for incompressible fluid (density and velocity distributions on a discrete lattice, streaming + collision). DeviceOrientationEvent (beta/gamma) sets the gravity vector as the primary causal input that biases body forces in the LBM. A local evolutionary algorithm maintains a population of short genomes (relaxation time tau, gravity scale, viscosity bias, source strength). High-velocity or density cells attract absolute-positioned DOM buoy cards that track flow and display local speed. Clicking a buoy injects reward, increasing fitness of the current genome and optionally mutating neighbors. Multi-agent: high-fitness genomes trigger sealed fragment transfer over BroadcastChannel. Best genome + low-res density snapshot persist in IndexedDB. Fully offline single-file with progressive enhancement.

## Novelty
Leaves the dominant recent cluster of practical offline utilities (F634–F639, F641, F643) and the WebGPU/Canvas hybrid field + DOM riders or morphs (wave equation F636, audio spectral classifier F640, orientation reservoir + lattice-gas F642). Core novel combination is an unused LBM fluid kernel (continuous distribution functions, BGK, not discrete lattice-gas HPP, not wave PDE, not diffusion/NCA), DeviceOrientation as gravity bias into the continuum fluid, local non-neural evolutionary policy on fluid parameters, hybrid living DOM buoys as sensors/actuators, and fitness-gated sealed genome transfer. Not residual predictors, attention lattices, pure NCA, spectral audio, pointer-history fields, softbody DOM, orientation RNN, k-means particles.

## Architecture
Single self-contained index.html. Vanilla HTML/CSS/JS:
- Orientation permission + listener; pointer fallback for desktop sim.
- EA: pop of 6 genomes (4 floats); tournament + mutation every 40 frames; fitness from buoy speeds + clicks.
- LBM: 48x48 D2Q9 grid (9 velocities); JS implementation primary for reliability (WebGPU compute path sketched for density/vel buffers if available).
- 5–7 absolute DOM buoys positioned by sampling peak |velocity| bins.
- BroadcastChannel 'f644-lbm-genome'; IndexedDB 'verse-f644'.
- Seal: download JSON {genome, fitness, density_snapshot, timestamp}.

## Expected outcome
Runnable offline prototype. Tilt or move pointer to bias flow; buoys ride currents; click reinforces; high fitness shows transfer cue; Seal produces valid JSON; reload restores. Progressive Canvas2D always works.

## Mechanics
1. Load genome from IDB or random; spawn buoys.
2. Each frame: sample orientation → set gravity; select/evolve genome; step LBM (stream + collide + force); locate peaks; update buoy CSS transforms.
3. Click buoy: +reward to current, inject density source.
4. On fitness threshold, post sealed genome prefix to channel; accept if better.
5. Seal persists and downloads.

## Failure modes
- Orientation denied: pointer-driven gravity sim.
- No IndexedDB: session only.
- Low FPS: reduce grid to 32x32 or buoy count.
- LBM unstable: clamp densities, adjust tau.

## Measurement
Manual: tilt/move produces visible flow bias, buoys track, click changes behavior, seal JSON valid and reloadable, works offline after load.

## Files
drafts/F644-webgpu-lbm-orientation-evo-dom-fluid/SPEC.md
drafts/F644-webgpu-lbm-orientation-evo-dom-fluid/index.html

## V01D landing
LBM fluid buoy skill under void-live-deploy/skills/webgpu-lbm-orientation-evo-dom-fluid.js; test asserts synthetic tilt produces velocity change and buoy displacement, genome post on high fitness, seal JSON contains genome key.

## Frontier Engine F-644
Architecture: Local evolutionary policy on DeviceOrientation gravity → WebGPU/JS D2Q9 LBM fluid kernel → living DOM buoy embodiment with fitness-gated sealed genome transfer + IndexedDB.
Expected outcome: interactive spatial fluid whose parameters evolve under device tilt and whose flow carries competing DOM agents that can be sealed and shared.
Mechanics: online EA, LBM BGK kernel, DOM-field coupling, BroadcastChannel genome exchange.
