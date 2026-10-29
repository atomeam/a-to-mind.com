# F459 — WebGPU SPH MLP Agent Mind

## Concept
Novel combination that deliberately branches away from the recent WebXR-hand-PBD / spectral-audio-feedback / granular-broadcast-genome / L-system / expression-tree / orient-MLP-canvas / Hebbian-theft / semantic-point / NCA / Ising cluster.

A local tiny MLP (6→12→3) takes DeviceOrientation tilt + pointer velocity residuals + mean particle density as causal inputs and outputs adaptive SPH parameters (viscosity, pressure stiffness, kernel radius scale). These modulate a Smoothed Particle Hydrodynamics (SPH) fluid simulation of ~120 agents. On proximity events, higher-fitness (lower kinetic energy) agents seal-transfer a subset of their effective parameters to neighbors. Weights and a short state snapshot can be sealed to a local hash id stored in IndexedDB. WebXR hand-tracking attempted as high-fidelity input (pointer + orientation fallback). Offline-capable single-file prototype. Canvas2D fallback with progressive WebGPU compute note.

## Why novel
- SPH density-estimation + pressure-kernel forces driven by a live MLP compliance controller has not appeared in prior F- drafts (LBM, PBD, granular collision, and pure particle fields are distinct).
- MLP is a causal parameter modulator, not a direct policy, residual predictor, or genome evolver.
- Hybrid embodiment: orientation/pointer/XR → MLP → SPH kernel params → multi-agent competition with sealed proximity transfer.
- Persistent IndexedDB seal of the controller + field snapshot in a new architecture.

## Prior cluster branched from
Dominant recent cluster (F450–F458): WebXR hand PBD constraints + MLP, spectral feedback swarms with audio closed-loop, granular collision + BroadcastChannel genome transfer, semantic point agents, device-orient Hebbian theft, L-systems, expression trees, orient-MLP canvas persistence, HDC palaces, Ising+MLP, NCA residuals.

## Interaction
- Pointer moves an attractor / injects velocity and updates input features.
- DeviceOrientation provides continuous tilt gravity bias.
- “Try WebXR Hand” attempts immersive session with hand joints as multi-attractor (graceful fallback).
- Seal MLP + Field produces a local hash id of weights + a compact particle summary.
- Reset reinitializes particles and optionally reloads last seal.
- Agents visually encode fitness/energy; proximity flashes indicate transfer events.

## Files
- index.html — single self-contained runnable prototype

## Failure modes
- WebGPU unavailable or compute path not implemented → Canvas2D SPH runs (still interactive).
- WebXR hand-tracking requires headset + support; most users use pointer + orientation proxy.
- MLP is randomly initialized (untrained); parameter outputs stay in stable ranges via tanh.
- IndexedDB quota or private mode → seal falls back to localStorage or fails silently.
- High particle count on low-end CPU → auto-reduce or drop frames (noted for future WebGPU kernel).

## Building blocks for next
True WebGPU compute SPH kernel with spatial hash + parallel density/pressure, multi-peer WebRTC sealed parameter transfer, on-device fine-tuning of the MLP from user-held “good” states, hybrid DOM physical cards driven by regional SPH density.
