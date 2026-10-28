# F291 — WebGPU Neural Foraging Genome Arena

## Concept
A multi-agent particle foraging arena where each agent carries a sealed local genome (tiny 4-float weight vector acting as a force-kernel MLP). Genomes modulate attraction strength, noise, size, and cohesion toward a pointer-controlled resource. On proximity collision, higher-fitness agents partially transfer and mutate their genome into the lower one (sealed capture). Physics runs on Canvas2D (primary, offline) with an optional WebGPU compute shader path for parallel force integration. Hybrid embodiment: floating DOM probe cards track top agents and can be dragged to inject a reward pulse or force pin. Champion genome persists to IndexedDB. Fully offline after load; progressive enhancement.

Deliberately branches away from the recent dominant cluster of WebXR hand/gaze genome arenas, reservoir/fluid/orientation morphs, self-listening spectral agents, softbody attention, residual trajectory predictors, and pure NCA (F283–F290). Core novelty is the sealed genome as an explicit neural force kernel evaluated per agent, multi-agent competitive transfer on physical contact, hybrid DOM probe reward injection, and prepared WebGPU compute kernel for the same forces.

## Architecture
- Single self-contained `index.html` (inline CSS/JS, no external deps).
- Canvas2D: 10 agents as colored particles with genome-modulated velocity integration + wall bounce.
- Genome: Float32Array[4] per agent (attract, noise, sizeBias, cohesion). Simple hash for seal id.
- Fitness: cumulative proximity to resource + longevity.
- Transfer: on dist < 24 and fitness delta > 0, lerp 0.4 of winner genome + Gaussian mutation.
- WebGPU: compute shader stub that can update a storage buffer of positions/velocities from genomes if device available (fallback silent).
- DOM: 3 probe cards absolute-positioned, show short hash + fitness; drag freezes and on release adds reward to nearest agent fitness.
- IndexedDB: seal/load champion genome + generation.
- Offline first; pointer always works.

## Expected outcome
Runnable interactive prototype. Move pointer to place resource; agents forage, compete, and transfer genomes on contact (colors/sizes shift). Drag a probe card to reward. Seal persists champion. Load restores. Offline-capable. Expands WebGPU-ready neural force kernels + sealed competitive genome transfer + hybrid DOM probe reward + IndexedDB champion building blocks.

## Mechanics
1. Resource follows pointer with slight lag.
2. Each agent evaluates force = genome[0] * dir_to_resource + noise * genome[1] + cohesion to mean.
3. Integrate velocity, damp, bounce.
4. Check pairwise proximity → transfer if higher fitness.
5. Probes lerp to top agents; drag adds fitness pulse.
6. Seal button stores hashed champion to IndexedDB.

## Failure modes
- No WebGPU → Canvas2D fully functional (primary path).
- No IndexedDB → in-memory only.
- Small screens → fewer agents, larger probes.
- No pointer → auto-orbiting resource still runs.

## Cross-reference
Avoided WebXR hand/gaze, orientation-as-primary, spectral/audio self-listening, residual morphs, fluid/reservoir, softbody physics, pure NCA, speech portals, WebRTC sharing as core. Novel combination of genome-as-neural-force-kernel + competitive contact transfer + hybrid DOM probe reward injection + WebGPU compute path + sealed IDB.

## V01D landing
Frontier spatial skill under `void-live-deploy/skills/mini/neural-foraging-genome-arena.js`; test: contact triggers genome lerp, probe-drag increases fitness, seal/load restores attract weight.
