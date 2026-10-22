# F-239 WebGPU Gesture-Evolved Causal Swarm

## Architecture
- Single `index.html` with Canvas2D particle swarm (WebGPU availability probe; full compute kernel is the next building block).
- Pointer (or future XR hand) deposits create causal energy points.
- Web Worker runs a small genetic algorithm that evolves attract/repel/decay parameters based on clustering fitness around recent deposits.
- Evolved residual and fitness drive CSS custom properties that morph page chrome and probe scales.
- Floating DOM probes query the latest deposit and scale with fitness.
- Progressive WebXR button (session request; full hand-tracking projection left as expansion).
- Seal latest fitness/generation/params to IndexedDB.

## Expected outcome
Interactive spatial swarm that is pulled by user gestures, whose force laws evolve online via local GA so that clustering improves. Chrome and probes physically respond to the evolved mind state. Fully offline, runnable in any modern browser. XR entry when supported.

## Mechanics
1. Gesture deposits energy points.
2. Particles feel attract/repel forces from deposits (CPU sim).
3. Periodically Worker evaluates clustering fitness and evolves the force constants.
4. Best constants applied on main thread; residual → CSS morph.
5. Probes track deposits and scale with fitness.

## Failure modes
- No Worker → static parameters, still interactive.
- WebGPU unavailable → Canvas2D path (current default).
- XR unsupported → flat mode remains complete.
- Low FPS → reduce N.

## Building blocks for next
- Replace CPU step with WebGPU compute shader for the swarm.
- Full immersive XR hand tracking that injects deposits from hand poses.
- Feed rendered density back into the GA as additional sensory channel.

Not a variation of F-196 (Canvas2D residual-attention lattice), F-238 (audio fluid), or prior pure Canvas evolutionary experiments: the novelty is the closed loop of gesture-driven causal deposits whose clustering fitness directly evolves the physical force laws of a particle swarm, with progressive WebGPU/XR hooks.

Lands in V01D as a spatial evolved-swarm skill; testable by measuring fitness increase over generations under fixed gesture patterns.
