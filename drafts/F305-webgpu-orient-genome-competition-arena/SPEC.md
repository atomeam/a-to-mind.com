# F305 — WebGPU Orient Genome Competition Arena

## Concept
Multi-agent evolutionary competition on a Canvas2D physics field (WebGPU compute upgrade path prepared) where agents have sealed genetic parameters controlling behavior. DeviceOrientation provides causal gravity/tilt bias. Winning genomes transfer via sealed IndexedDB persistence and human-mediated offspring spawn. Hybrid DOM fitness cards can be dragged to boost energy or force transfer. Fully offline, single-file, progressive enhancement.

## Branching
Deliberately leaves the recent cluster of WebGPU Hebbian/attention/interference reservoirs, decision-tree orbs, WebXR hand RNN physical sculptors, pure Lenia/NCA gait evolvers, and spectral/audio residuals. Moves onto under-explored axes: multi-agent competition with sealed genome transfer, DeviceOrientation as continuous causal physics input, hybrid DOM+canvas embodiment for fitness visualization, WebGPU-ready particle physics.

## Mechanics
- Agents: 40 particles with genome [speed, sense, aggression, turnRate, efficiency] ∈ [0,1]; move toward nearest food or repel neighbors based on aggression.
- Food: 20 orbs spawn/respawn; agents gain energy on consume, die below threshold, top fitness survive.
- Orientation: DeviceOrientation gamma/beta maps to global force bias (tilt gravity).
- Genome transfer: Click DOM card of high-fitness agent seals genome to IndexedDB; "spawn offspring" button mutates and injects new agent.
- DOM cards: Top 3 agents get absolute cards showing fitness/genome; drag injects energy boost or forces local attract.
- Persistence: IndexedDB object store for champion genomes (JSON).
- Physics: Simple Euler integration + bounds + damping; WebGPU compute shader stub prepared for larger N.

## Failure modes
- No DeviceOrientation support or permission denied → zero tilt (still fully playable with mouse).
- IndexedDB private mode/quota → in-memory only, seal toast warns.
- High agent count on low-end → FPS drop (capped at 60).
- No pointer → idle agents still evolve via food competition.

## Building blocks for next
Sealed multi-agent genome transfer, orientation-driven physics bias, hybrid fitness DOM, WebGPU particle kernel path. Next: full WebGPU compute for collision/force, WebRTC peer genome exchange, gaze as additional selective pressure.

## V01D landing
webgpu-orient-genome-arena skill; testable by orientation tilt force, seal/load genome roundtrip, offspring mutation variance, card drag energy increment.
