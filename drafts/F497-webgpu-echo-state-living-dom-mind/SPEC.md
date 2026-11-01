# F497-webgpu-echo-state-living-dom-mind

**Ledger ID**: F-497  
**Slug**: webgpu-echo-state-living-dom-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of DeviceMotion Kalman portal physics (F496), WebGPU Ising orient domains (F495), IFS fractal policy (F494), implicit SDF sculptor (F493), WebXR hand-constraint MLPs (F492). Explicitly leaves Kalman filters, Ising/stat-mech, IFS/fractal attractors, SDF implicit surfaces, hand constraints, genome auctions, Bayesian lattices, residual predictors, softbody mass-spring, NCA, LBM, photonic waveguides, and attention clusters.

## Concept
A WebGPU compute shader runs a spatial Echo State Network (reservoir computing): a large grid of recurrent nodes with fixed random sparse connectivity and leaky integration. Continuous inputs (pointer velocity residual, DeviceOrientation angles, optional microphone spectral centroid) are injected into input nodes. The reservoir state vector is read out by a tiny local linear readout (trained online via ridge or simple Hebbian on seal) that produces force fields. A swarm of real DOM cards (not canvas overlays) run Verlet physics under those forces, so the page’s living elements themselves embody the reservoir dynamics. Cards also feed their local kinetic energy back as additional reservoir drive. Sealing captures a SHA-256 of the full reservoir state + readout weights into IndexedDB as a recallable mind snapshot. High-energy cards briefly surface a local state-hash phrase.

## Why novel
- Not Kalman/sensor-fusion, not Ising spins, not IFS maps, not SDF raymarch, not mass-spring, not NCA, not LBM/SPH, not photonic, not residual MLP predictors, not DOM genome auctions.
- Core novel combination is a WebGPU-resident Echo State Network (fixed random reservoir + trainable readout) whose continuous state physically drives and is driven by living DOM cards via Verlet integration, with bidirectional energy feedback and sealed reservoir memories.
- Under-explored axis: reservoir computing on GPU as the sole mind substrate, with the actual DOM as the sole embodiment and sensor array.

## Prototype
Single self-contained `index.html`. Interactive offline. Move pointer or tilt device to inject drive; optional mic permission for spectral input. Living cards float and cluster under reservoir forces. Press S or click Seal to capture the mind state. R restores last seal. High energy cards flash a short state phrase.

## Failure modes
- No WebGPU: falls back to a smaller CPU reservoir (still functional, slower).
- No DeviceOrientation or mic: pointer residual only.
- IndexedDB unavailable: seals fall back to localStorage or in-memory.
- Low-end GPU: reservoir grid reduced to 32×32; card count capped at 8.
- High leak / instability: spectral radius of reservoir kept <1 by construction.

## Building blocks for next
WebGPU Echo State Networks with living DOM bidirectional coupling; sealed reservoir state snapshots as initial conditions; energy-feedback sensors. Next: multi-tab BroadcastChannel of reservoir states; online readout adaptation driven by card-click reward; WebXR gaze as additional input nodes.

## V01D landing
skills/mini/webgpu-echo-state-living-dom-mind; testable via pointer → card motion, seal → hash + IDB, restore → prior reservoir dynamics reappear, energy → phrase flash.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- State: WebGPU reservoir buffer (N nodes, state + input injection)
- Inputs: pointer velocity residual, DeviceOrientation, optional AnalyserNode spectral features
- Readout: tiny local linear weights (updated on seal)
- Physics: 6–12 absolute-positioned DOM cards, Verlet integration under force field sampled from reservoir
- Bidirectional: card kinetic energy injected back into nearby reservoir nodes
- Embodiment: card CSS transform, scale, hue, and brief text from local energy and state hash
- UI morph: root CSS vars driven by global reservoir energy
- Seal: SHA-256 of serialized reservoir state + readout stored in IndexedDB (localStorage fallback)
- No external dependencies, no network

## Expected Outcome
Interactive living DOM cards that float, cluster, and briefly “speak” under the continuous dynamics of a WebGPU Echo State Network, with sealed recallable mind snapshots. Runnable offline with pointer, orientation, mic, or synthetic drive.

## Mechanics
- Pointer / orientation / mic → input injection into reservoir
- Reservoir leaky update ~60 Hz on GPU
- Force field sampled → Verlet step on cards
- Card energy → feedback injection
- Global energy → CSS morph
- Click Seal or key S seals; R restores
