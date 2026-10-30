# F467-webgpu-causal-echo-lattice-mind

## Concept
Causal Echo Lattice Mind: user pointer trajectories, device orientation, and optional microphone spectral energy generate delayed "echo" particles on a lattice. A local residual predictor forecasts the next pointer position; the residual error injects turbulence and attraction that warps the echoes. Spatial editable DOM tiles act as embodied seeds — dragging them injects strong echoes. Sealing captures a snapshot of residual, echoes, and tile states to IndexedDB. CSS chrome morphs with residual. Canvas2D active; WebGPU compute path noted for future advection.

## Novelty
Not a superficial variation of F466 spectral cloth (mass-spring mesh + spectral stiffness), F465 Hebbian swarm, residual density lattices, NCA, or pure predictive orbs. Core is trajectory-echo delay lines + causal residual prediction driving a morphic particle lattice that couples to spatial DOM tiles as active seeds, with sealed echo memory.

## Architecture
- Single index.html
- Canvas2D echo particles with residual-driven forces
- Main-thread linear residual predictor (Worker evolutionary upgrade noted)
- Absolute-positioned contenteditable tiles with drag seeding
- DeviceOrientation + optional AnalyserNode
- IndexedDB seals
- CSS hue/background morph

## Expected Outcome
Interactive spatial echo field that trails and anticipates user motion, responds to tilt and voice, lets tiles seed and be warped by the lattice, and restores sealed memories. Fully offline after load.

## Failure Modes
No orientation (tilt=0), mic denied (energy=0), Canvas2D only, private mode IDB limits.

## Building Blocks
True WebGPU compute echo advection, Worker residual MLP, WebXR tracked echoes, multi-tab BroadcastChannel echo sharing.

## V01D Landing
skills/mini/causal-echo-lattice; testable via residual→echo turbulence, drag→seed injection, seal→IDB restore.
