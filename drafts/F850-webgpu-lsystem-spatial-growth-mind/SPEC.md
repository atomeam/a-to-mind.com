# F850-webgpu-lsystem-spatial-growth-mind

## Concept
A locally evolving Lindenmayer system (L-system) whose production rules are mutated by user clicks and biased by DeviceOrientation / pointer velocity. The current axiom is iteratively rewritten and interpreted as a spatial turtle drawing that is rendered as a living growth structure on canvas (WebGPU point cloud fallback to Canvas 2D). High-fitness rule genomes seal to IndexedDB and broadcast. Offline single-file progressive prototype for The Verse canvas.

## Novelty
Leaves the recent cluster of Hopfield recall, Vicsek flocks, SPH, Verlet, N-body, Physarum, Lenia, softbody, NCA, spectral vortex, lattice-gas, Ising, SOM, MCTS, spiking, diffusion, Q-tables, canvas CNNs, Markov chains, MLP/RNN DOM agents. Core novel combination is previously unused L-system generative grammar (parallel rewriting, not sequential Markov) whose rules evolve under spatial bias and click-reward, embodied as interactive spatial growth (not particle physics, not continuum, not associative memory). Sealed rule-genome transfer.

## Architecture
- Single self-contained index.html
- L-system: axiom + rules (string → string), iterated 4–6 times
- Turtle: angle, step; orientation bias rotates growth preference
- Render: Canvas 2D polyline (WebGPU points if available)
- Mutation: click on growth mutates a random rule (insert/delete/replace symbol)
- Seal: IndexedDB `verse-f850-lsystem` + BroadcastChannel `f850-genome`
- Fallbacks: no orientation → pointer residual; no IDB → session

## Expected outcome
Open page: a living branching structure grows. Tilt device or move pointer: growth direction biases. Click a branch: rules mutate, structure changes. Seal preserves best genome across reloads/tabs. Interactive spatial local generative mind.

## Failure modes
Very deep iteration → slow; no canvas → text only; IDB blocked → no persistence.

## Building blocks
Reusable pure-JS L-system + turtle + reward mutation + spatial bias. Enables future hybrid grammar+physics or 3D WebGPU L-system portals on Verse.

Void is now Verse everywhere.
