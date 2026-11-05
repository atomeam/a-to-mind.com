# F565 WebGPU-Ready Genetic Particle Genome DOM Mind

**Slug**: `webgpu-genetic-particle-genome-dom-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of SOM topographic audio-DOM (F564), rigid DOM genome physics (F563), RD attention verse (F562), DeviceOrientation LIF spikes (F561), ESRN UI morph (F560). Explicitly leaves unsupervised topographic maps, rigid-body competitive genomes, reaction-diffusion, spiking LIF, reservoirs, associative memories (Hopfield/ESRN), attention controllers, SDF/raymarch, SPH/LBM/softbody/NCA/Ising/Physarum/Lenia, orientation RNNs/MLPs, and continuous field kernels.

**Concept**  
A population of spatial agents (particles) whose behavior genomes (small float vectors controlling cohesion, separation, alignment, speed, hue affinity) evolve via a pure genetic algorithm: tournament selection, single-point crossover, and Gaussian mutation. Fitness is spatial and causal—accumulated proximity time to the pointer, stability under DeviceOrientation tilt, and voluntary user “seal-click” on high performers. Elite genomes spawn or attract floating DOM “verse cards” that inherit parameters and morph (scale, hue, content signature) in real time. The canvas shows the living population; the DOM cards are the physical embodiment of successful lineages. WebGPU compute path reserved for parallel fitness/distance on larger populations (Canvas2D fallback always works). Full elite population seals to IndexedDB for offline restore and BroadcastChannel transfer. The Verse canvas becomes an evolutionary breeding ground where local spatial interaction writes the next generation of UI agents.

**Novelty**  
Core novel combination is a non-gradient evolutionary substrate (genetic algorithm on discrete agent genomes, not MLP/RNN/reservoir/policy gradient/Hebbian/SOM/Hopfield) whose fitness is purely spatial/causal (pointer proximity + orientation stability + explicit seal), with high-fitness genomes directly embodying as living, morphing DOM cards that compete and can be dragged to inject fitness bias. Not physics kernels, not continuous fields, not neural weight updates, not topographic maps. Previously unused: pure GA breeding loop as the primary mind of a hybrid canvas+DOM spatial system.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Population: 64–128 particles on Canvas2D (WebGPU compute stub for future). Each has genome[6]: [cohesion, separation, alignment, maxSpeed, hueBias, size].  
- Evolution: every N frames, tournament selection (k=3), crossover + mutation (rate 0.1, σ=0.05), replace worst. Elitism preserves top 4.  
- Fitness: +1 per frame near pointer (<60px), +bonus for low angular velocity under orientation, +10 on click-to-seal. Decay.  
- DOM cards: absolute cards spawned for top elites; CSS vars driven by genome; draggable to boost fitness or relocate.  
- Sensors: pointer events + DeviceOrientation (gesture-gated).  
- IndexedDB store `f565-ga-mind` for elite genomes + positions.  
- Seal button; “Evolve Step”, “Mutate Burst”, “Reset Population”.  
- BroadcastChannel `verse-ga-genome` for optional multi-tab transfer.

**Expected outcome**  
Runnable prototype: particles swarm and breed live. Top genomes materialize as floating DOM cards whose appearance and slight motion reflect their parameters. User pointer and tilt bias evolution; clicking a card seals extra fitness. Seal restores the evolved population and cards across reloads. Works offline; Canvas2D always functional.

**Mechanics**  
1. Initialize random genomes or load from IndexedDB. Spawn particles.  
2. Each frame: update particle positions with genome-modulated boid-like forces (simple local rules); accumulate fitness; paint Canvas.  
3. Periodically: sort by fitness, evolve (select/crossover/mutate), respawn or update DOM cards for top-k.  
4. Pointer move/click: record proximity, optional seal-click.  
5. Orientation: modulate fitness or add force bias.  
6. Drag DOM card: on drop, inject fitness or copy genome nearby.  
7. Seal: serialize elites + card state to IndexedDB.

**Failure modes**  
- Orientation permission denied: pointer-only fitness.  
- IndexedDB blocked: in-memory.  
- Large population: throttle evolution.  
- WebGPU unavailable: Canvas2D path is primary.  
- No gesture: sensors idle until interaction.

**Files**  
- drafts/F565-webgpu-genetic-particle-genome-dom-mind/SPEC.md  
- drafts/F565-webgpu-genetic-particle-genome-dom-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/genetic-particle-genome/` or canvas tool; test that pointer proximity measurably increases elite fitness and that sealed genomes restore the same card morphs after reload.
