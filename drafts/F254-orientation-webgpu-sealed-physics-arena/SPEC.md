# F-254 · Orientation-Driven WebGPU Sealed Physics Arena

## Concept
Novel combination deliberately branching from the recent residual-density / causal-lattice / intent-flow / recurrent-constraint / acoustic-softbody / MLP-particle / WebXR-hand / NCA-spatial-audio cluster (F244–F253):

- DeviceOrientation (beta/gamma) as primary causal input (pointer as desktop proxy) to per-agent local tiny MLPs.
- MLPs output force biases and stiffness for a multi-agent competition arena.
- WebGPU compute shaders run the neural forward passes and a simple particle-physics kernel for inter-agent forces (repulsion + attraction to energy wells).
- Hybrid embodiment: DOM cards positioned by the physics simulation results, plus Canvas2D/WebGPU visualization of the force field.
- Sealed genome transfer: champion MLP weights + hash sealed to IndexedDB; weaker agents receive mutated sealed copies. Optional BroadcastChannel for multi-tab.
- Leaves residual predictors, volumetric NCA injection, pure spectral/audio residuals, pointer-history fields, and pure WebXR-hand spring limbs. Expands DeviceOrientation as causal input, WebGPU compute for neural+physics kernels, multi-agent sealed genome competition, and hybrid DOM+compute embodiment.

## Architecture
Single self-contained `index.html`. Main thread handles orientation, DOM positioning, IndexedDB, and UI. WebGPU device runs compute shaders for MLP inference (batched) and physics integration. Fallback to pure JS if no WebGPU. Fully offline after load.

## Expected outcome
Grant orientation (or move pointer). Agents (DOM cards) accelerate under MLP-predicted forces biased by tilt, compete for drifting energy wells, repel each other. Fitness from energy capture + stability. Every few seconds champion genome mutates into losers. Seal persists champion. Interactive, graceful degradation.

## Mechanics
- Genome: Float32Array MLP (4 inputs: tiltX/Y, relX, relY → 8 hidden → 2 force outputs).
- Compute: WGSL shaders for batched MLP and Euler integration of positions/velocities with inter-agent repulsion.
- Agents: 4–6 DOM cards; positions updated from GPU readback or CPU fallback.
- Evolution: sort by fitness; seal champion hash to IndexedDB; mutate sigma into bottom agents.
- Energy wells: 2 drifting attractors on canvas.

## Failure modes
- No WebGPU → JS physics + MLP.
- Orientation denied → pointer proxy.
- IndexedDB blocked → in-memory.
- Low FPS → fewer agents.

## Building blocks
Full WebGPU neural compute kernels, WebRTC sealed genome peer transfer, true XR gaze bias, OPFS population persistence, hybrid DOM driven entirely by GPU physics.

## V01D landing
Spatial orientation-webgpu-sealed-physics skill under void-live-deploy/skills/; testable via tilt→agent force, sealed hash round-trip, fitness rising under fixed tilt pattern.
