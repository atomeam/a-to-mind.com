# F451 · WebXR Hand-Driven Ising Field with Local MLP

## Concept
True WebXR hand-joint positions (or pointer fallback) serve as causal input to a tiny online-learning MLP. The MLP outputs a modulation of the inverse-temperature β of a classical Ising spin lattice updated by a WebGPU compute shader (Glauber dynamics). The lattice magnetization provides a simple training signal back to the MLP. Lattice spins and MLP weights persist in IndexedDB.

## Branch
Deliberately leaves the recent cluster of NCA spatial-memory minds, XR residual/NCA, LBM/PBF softbody, orientation-MLP-DOM sealed orbs, and sealed-genome competition. Uses a previously unused statistical-mechanics Ising kernel + WebXR hand → local MLP hybrid embodiment.

## Interaction
- Pointer move sets virtual hand position (fallback).
- “Enter WebXR” requests immersive-vr with hand-tracking; wrist pose updates handPos.
- β and magnetization shown live.
- Reset spins / Save State (IndexedDB).

## Failure modes
- No WebGPU: status message, no field.
- No WebXR or hand-tracking: falls back to pointer; XR session may not composite canvas into XR layer (prototype limitation).
- Readback of spins for magnetization is approximate (CPU copy not fully synced in this build).
- Online learning is a simple heuristic, not a converged optimizer.

## Building blocks added
WebGPU Ising compute + display pipeline, local MLP with online update from magnetization, IndexedDB persistence of both field and model, WebXR hand as causal driver.
