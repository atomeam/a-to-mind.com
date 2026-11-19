# F830 Coulomb DOM MLP Swarm Mind

**Ledger ID**: F-830

## Concept
Multi-agent competition where the agents *are* living DOM elements under local MLP control. Each agent is a charged particle in a pure Coulomb (electrostatic) force field simulated in the main thread. A tiny feed-forward MLP (genome) takes causal spatial inputs (relative pointer position + DeviceOrientation if available) and outputs the agent's charge and local force scale. Agents compete for fitness (proximity to a dynamic attractor + cohesion); high-fitness genomes are sealed and transferred over BroadcastChannel + IndexedDB. DOM elements are the physical bodies themselves — draggable, colored by charge, scaled by fitness.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum/particle kernels (wave-equation F829, CML F828, Gray-Scott F825, DEM F824, Kalman chain F826, PSO F827, Hopfield, LDS, Echo-State, Physarum, Ising, Lenia, lattice-gas, softbody meshes, NCA, spectral residuals). Core novel combination is pure electrostatic Coulomb forces between multi-agent living DOM elements (not continuum PDE, not contact DEM, not mass-spring, not particle canvas swarm) controlled by local MLPs whose causal input is pointer/orientation residual, with sealed genome transfer on fitness competition. Hybrid embodiment of physical UI elements as the agents. Not previously built.

## Architecture
- Single index.html (offline after load, progressive)
- Agents: 8 absolute-positioned DOM divs as charged bodies
- Physics: pairwise Coulomb forces + damping + wall bounds (main-thread Verlet-like)
- MLP: 4-8-2 tiny net per agent (input: dx, dy, orientX, orientY; output: charge, scale)
- Fitness: inverse distance to pointer attractor + mild cohesion bonus
- Reward: click nearest agent to boost its fitness and slightly reinforce weights
- Seal: IndexedDB `f830-coulomb-mlp` + BroadcastChannel `f830-genome` (adopt higher fitness)
- Visual: hue by charge sign, size by fitness, trail optional via canvas

## Expected outcome
Runnable prototype: agents repel/attract based on learned charges, chase or avoid pointer, evolve via clicks and seal transfers. Interactive, spatial, local-AI controlled physical UI.

## Failure modes
No orientation → pointer only; IndexedDB denied → memory; too many agents → FPS drop (capped at 8); no clicks → static charges.

## Files
drafts/F830-coulomb-dom-mlp-swarm/SPEC.md
drafts/F830-coulomb-dom-mlp-swarm/index.html
