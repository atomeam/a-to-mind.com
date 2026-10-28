# F278 — Sealed Genome Multi-Agent DOM Arena

## Concept
Novel combination: a competitive multi-agent particle arena (Canvas2D) where each agent carries a sealed genome (tiny float vector of behavior weights). Agents compete for a moving resource attractor; higher-fitness agents can capture and partially transfer (copy + mutate) genomes from weaker neighbors upon proximity victory. Hybrid embodiment: floating DOM cards track each agent, display genome hash / fitness, and can be dragged to inject position bias or trigger a seal. Genomes persist via IndexedDB. Fully local, offline, no external models.

Deliberately branches away from the recent residual-predictor / spectral-acoustic / predictive-force-injection / causal-attention / spatial-graph cluster (F270–F277). Core is multi-agent competition + sealed genome transfer + hybrid DOM-card control of physical agents.

## Architecture
- Single self-contained `index.html` (inline CSS/JS).
- Canvas2D simulation of ~12–20 agents + resource orb.
- Each agent: position, velocity, energy, genome (Float32Array of 6 weights: attract-strength, speed, aggression, noise, cohesion, resource-bias).
- Local decision: simple weighted sum of features (distance to resource, nearest rival, own velocity) → steering force. Genome modulates coefficients.
- Competition: when agent A is closer to resource than B and within capture radius for N frames, A copies 40% of B’s genome (lerp) and B loses energy; genome is hashed (simple djb2 or SHA-like) and sealed in memory/IDB.
- DOM cards: absolute positioned over agents; content = short hash + fitness; drag updates agent target or adds force.
- IndexedDB: seal/load population genomes on demand.
- Progressive: pointer always; optional DeviceOrientation gravity bias.

## Expected outcome
Runnable interactive prototype: move the resource with the pointer. Agents compete and evolve via genome transfer. Drag a card to bias an agent. Seal the population. Offline-capable. Expands multi-agent sealed-genome + hybrid DOM+canvas building blocks for later WebRTC shared arenas or WebGPU compute kernels.

## Mechanics
- Resource follows pointer with lag.
- Fitness = energy + time near resource.
- Transfer on capture: genome_new = 0.6 * own + 0.4 * captured (then small mutation).
- Cards: max 8 visible; position lerp; click to seal individual genome.
- Step ~30–60 Hz; collision/capture check every frame.
- Hash: simple 32-bit fold of genome bytes for display and seal id.

## Failure modes
- No IndexedDB → in-memory only.
- High agent count → reduce to 12.
- No pointer → auto-orbiting resource still runs competition.
- DOM cards clipped → still fully canvas-interactive.

## Building blocks
Sealed genome vectors, multi-agent capture-and-transfer, hybrid DOM-card embodiment that controls canvas agents, IndexedDB population seal. Next: WebGPU compute for larger swarms, WebRTC genome broadcast, true WebXR hand-as-resource.

## V01D landing
Multi-agent genome arena skill under `void-live-deploy/skills/mini/sealed-genome-arena.js`; testable via proximity capture → genome lerp and card-drag → agent force bias.
