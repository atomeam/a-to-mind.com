# F-764: WebGPU KdV Soliton Hand-MLP Rider Mind

**Plain name:** Soliton Wave Riders

**Job:** Turn hand or pointer gestures into living soliton waves that carry competitive DOM rider agents controlled by local tiny models. Seal the best rider’s learned weights so they persist and spread.

**Ledger ID:** F-764

**Slug:** webgpu-kdv-soliton-hand-mlp-rider-mind

**Date:** 2026-11-15

**Branch from:** Recent cluster of WebGPU continuum/particle/spiking field simulations (LBM F760, SPH buoyancy F755, optical-flow boids F758, N-body WebRTC F761, SDF gaze F762, LIF spiking haptic F763) driving hybrid DOM portals with local MLPs/RNNs, WebXR/orientation, sealed genomes. Also leaves earlier granular (F456), Ising (F495), Poisson (F504), WFC (F498).

## Concept
A true spatial mind for The Verse canvas: a 1D Korteweg–de Vries (KdV) soliton wave solver running as a previously unused WebGPU compute kernel (finite-difference update of the nonlinear dispersive PDE \( u_t + u u_x + u_{xxx} = 0 \)). WebXR hand joints (pointer fallback) inject localized soliton seeds. Living absolute-positioned DOM rider portals are hybrid-embodied agents that “surf” the wave peaks; each is steered by its own tiny local MLP whose causal inputs include wave height/slope, DeviceOrientation, and hand proximity. Multi-agent competition (fitness = time-integrated height while riding) enables sealed genome (MLP weight) transfer. Persistence via IndexedDB. Deliberately leaves all recent fluid, particle, volumetric, spiking, and lattice substrates.

## Novelty
First use of the KdV equation / soliton dynamics as the primary spatial substrate on the Verse canvas. First WebGPU compute kernel for a nonlinear dispersive PDE. First hand-injected soliton seeds driving competitive MLP-controlled DOM riders with sealed weight transfer. Not LBM, not SPH, not N-body, not SDF, not LIF, not NCA, not Ising, not Poisson, not granular DEM, not attention, not residual predictors.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, offline-capable after load.
- WebGPU compute pipeline (or pure JS fallback) for 1D KdV on 256-point periodic domain.
- WebXR: requestSession('immersive-vr' or 'inline') with hand-tracking; project wrist/index joints into wave space for seed injection. Pointer/mouse fallback.
- Local MLPs (6-4-2) per rider: inputs = [height, slope, orientBeta, orientGamma, handDist, timeOnPeak]; outputs = [xBias, gain].
- Riders: 5 absolute-positioned DOM divs whose x is advected by local wave velocity + MLP bias; y tracks wave height.
- Sealed transfer: on Seal button or when one rider’s fitness exceeds others by threshold, copy winner weights; persist best set in IndexedDB (`verse-f764-kdv`).
- DeviceOrientationEvent: additive tilt term that biases the wave or rider gain.
- Canvas2D: renders the wave profile + rider markers.

## Mechanics
1. Load: init wave buffer (small Gaussian seed), spawn 5 riders with random MLP weights, restore sealed genome if present.
2. Pointer/hand move or click: inject positive soliton seed at projected x.
3. Each frame (~60 Hz): KdV finite-difference step (or WebGPU dispatch), sample height/slope for each rider, MLP forward, update rider transform and fitness.
4. Orientation tilts global bias.
5. Seal: lock and broadcast best weights; reload restores them.

## Expected outcome
Open page: a living wave appears. Move mouse or use hands in WebXR: solitons form and propagate. Riders surf the peaks, colors shift with fitness. Tilt device modulates behavior. Seal and reload preserves the winning rider’s learned style. Interactive, offline after first load.

## Failure modes
- No WebGPU: automatic JS path (still interactive).
- No WebXR/hand tracking: pointer + orientation fallback.
- No DeviceOrientation: ignore tilt.
- Low performance: reduce resolution or timestep.
- IndexedDB blocked: in-memory only.

## Building blocks
Reusable 1D KdV WebGPU kernel, soliton-injection from tracked hands, MLP-controlled wave-riding DOM agents, sealed competitive transfer. Expands frontier for next higher-order dispersive PDEs, multi-soliton interactions, or WebRTC shared wave fields.

Void is now Verse everywhere.
