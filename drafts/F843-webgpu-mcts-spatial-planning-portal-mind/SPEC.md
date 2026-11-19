# F843-webgpu-mcts-spatial-planning-portal-mind

## Concept
A local pure-JS Monte Carlo Tree Search (MCTS) planning agent that searches sequences of spatial moves for a swarm of absolute-positioned DOM portals on The Verse canvas. The objective is to maximize cumulative coverage of high-value regions (user clicks and dwell). WebGPU compute is used for batched parallel rollout scoring of candidate trajectories (Canvas2D fallback). The MCTS tree is visualized live as branching rays. DeviceOrientation tilts the reward landscape. Seal persists the root statistics and best trajectory to IndexedDB and broadcasts via BroadcastChannel for sealed adoption of higher-value plans.

## Novelty
Leaves the cluster of reactive controllers (MLP, spiking, GP expression trees, diffusion score nets, Q-tables, decision trees, PSO, Kalman). Core novel combination is online sequential planning via MCTS (tree search with UCB selection, expansion, simulation, backpropagation) whose selected actions physically relocate living portals, accelerated by WebGPU batched rollouts. Not a superficial variation of prior parameter-evolution or feed-forward minds.

## Architecture
- Single index.html (progressive, offline after load)
- 4 absolute DOM portals
- MCTS: depth 4, 64 iterations/frame budget, UCB, pure-JS
- WebGPU compute shader for scoring N rollouts in parallel (fallback Canvas2D/JS)
- Canvas2D overlay for tree visualization
- Reward field: click/dwell map, orientation bias
- IndexedDB `f843-mcts`; BroadcastChannel `f843-plan`
- Seal adopts higher cumulative reward plans

## Expected outcome
Portals actively plan and migrate toward user interaction hotspots. Tree rays show the mind searching. Tilt reshapes the landscape. Click to reward; Seal transfers the plan. Interactive spatial embodiment of a local planning mind.

## Failure modes
No WebGPU → pure JS rollouts (capped iterations). No DeviceOrientation → no tilt bias. IndexedDB blocked → memory-only. Heavy search → adaptive iteration budget for 60 FPS.

## Building blocks
Pure-JS MCTS planner, WebGPU batched trajectory scoring, portal-as-action embodiment, sealed plan transfer. Expands deliberative planning minds for future Verse agents.

**Files**: drafts/F843-webgpu-mcts-spatial-planning-portal-mind/SPEC.md, drafts/F843-webgpu-mcts-spatial-planning-portal-mind/index.html
