# F472-webrtc-idb-shared-occupancy-navigators

## Concept
Shared Occupancy Navigators Mind: A persistent spatial occupancy grid (Canvas2D, 32x32 cells) that agents explore and mark. Each of 4 local navigators is driven by a tiny pure-JS MLP (3-4-2) taking normalized position + DeviceOrientation tilt bias + optional user pointer attraction as input, outputting velocity. Navigators mark cells they traverse (occupancy +=1, capped). The entire grid + navigator states seal to IndexedDB for living restore. Multi-tab "peers" share delta marks via BroadcastChannel (WebRTC datachannel architecture prepared; no signaling server). User pointer clicks attract nearest navigator or inject a mark. CSS chrome morphs with total occupancy entropy. Fully offline after load; progressive enhancement.

## Novelty
Leaves the recent dominant cluster of WebGPU Hebbian/attention/Bayesian/causal/particle fields, competitive MLP genome-transfer on contact/collision, and WebXR hand/gaze spatial agents (F464–F471). Not a variation of prior pointer-history, orientation-RNN, softbody DOM, NCA, spectral, or residual predictors. Core novel combination is a sealed persistent shared occupancy field (IndexedDB + BroadcastChannel multi-tab deltas) navigated by independent local tiny MLPs under continuous orientation + pointer causal input. No genome transfer, no attention mechanism, no particle kernels, no WebGPU compute, no WebXR. Pure shared-memory navigation architecture.

## Architecture
- Single index.html (no external deps, progressive enhancement, offline-capable)
- Occupancy grid: Float32Array 32x32, rendered as heat on Canvas2D
- Navigators: 4 agents, each MLP weights (Float32Array), position/velocity
- MLP: pure-JS forward (tanh), fixed weights or lightly adapted on high occupancy (optional residual)
- Input: [nx, ny, tiltX, tiltY, pointerAttract]
- Output: [vx, vy]
- Marking: on cell cross, occupancy[cell] = min(1, occ + 0.15)
- IndexedDB: seal/restore grid + navigators + metrics
- BroadcastChannel: postMessage of cell deltas for multi-tab shared field
- Optional DeviceOrientationEvent for tilt bias (permission)
- CSS custom properties from occupancy entropy for chrome morph
- Pointer: click to set attractor or force mark

## Expected Outcome
Interactive spatial canvas where local navigators autonomously explore and mark a shared occupancy field. Device tilt biases their drift. Pointer attracts or marks. Open multiple tabs to see live shared marking via BroadcastChannel. Seal restores the living field and agents. Fully offline; graceful without orientation or multi-tab.

## Failure Modes
No DeviceOrientation (bias=0, still pointer-interactive), IndexedDB private-mode quota (no persist), BroadcastChannel unsupported (single-tab only), low-end device (reduce grid or navigators).

## Building Blocks
True WebRTC datachannel with manual or STUN signaling for cross-device shared field, WebGPU compute for larger grids + parallel navigators, local fine-tune of MLP on occupancy residual, sealed genome of navigator weights across peers.

## V01D Landing
skills/mini/shared-occupancy-navigators; testable via tilt/pointer → navigator move + mark, multi-tab delta sync, seal→IDB restore of grid+agents.

## Files
drafts/F472-webrtc-idb-shared-occupancy-navigators/SPEC.md
drafts/F472-webrtc-idb-shared-occupancy-navigators/index.html
