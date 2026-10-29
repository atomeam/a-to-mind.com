# F455 WebGPU Semantic Point Agent Morph

## Concept
Novel combination never built before: a spatial semantic point cloud (user-deposited concepts via simple hash embedding) explored by a local physics agent whose genes control attraction. The agent's position and internal curiosity (velocity entropy proxy) physically morph hybrid DOM concept cards (scale, opacity, border) and global page chrome (hue, contrast). Sealed genomes + points in localStorage. Canvas2D for immediate runnability; WebGPU compute+render path noted for dense clouds.

## Architecture
- Single index.html
- Hash embedding → 2D positions
- Agent: attractor dynamics with gene vector [strength, damp, noise]
- Cards: absolute positioned DOM elements updated by proximity
- Chrome morph: CSS filter on body driven by curiosity
- Seal/Load: localStorage

## Expected outcome
Type concepts; they appear as points. Agent wanders and clusters toward them. Nearby cards grow and highlight. Page hue shifts with agent activity. Seal preserves the mind. Fully offline, no external deps.

## Mechanics
- Deposit on Enter
- Agent step ~60 Hz
- Card morph continuous
- Curiosity low-pass of speed

## Failure modes
- No localStorage → seal fails silently
- Very many points → slow (WebGPU future)
- Small screens → cards overlap (still functional)

## Building blocks for next
True WebGPU point instancing + compute clustering, on-device transformer embedding instead of hash, WebXR projection of the cloud, residual prediction of next deposit.

Lands in V01D as spatial semantic-agent skill.
