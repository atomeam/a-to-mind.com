# F781 WebXR Hand Magnetic String Genome Mind

## Concept
Interactive spatial prototype for The Verse: a set of living DOM "node" agents connected by dynamic magnetic strings (CSS-transformed lines or canvas overlays). Each agent hosts a tiny local MLP whose weights are its genome. Causal input is WebXR hand pose (joint positions/distances) when available, falling back to pointer + DeviceOrientation. The MLP outputs magnetic polarity and strength that attract/repel neighboring nodes, creating emergent string networks. On string-overlap or proximity, agents perform sealed genome transfer (weight crossover + mutation) via in-memory + IndexedDB persistence, with BroadcastChannel for multi-tab. Hands can "grab" and pull nodes, injecting forces that also serve as reward signals for simple Hebbian update. Fully offline after load, single-file.

## Novelty
Leaves the dominant recent cluster of WebGPU continuous-media PDE/kernel simulations (SPH F777, LBM F780, SDF/Echo-state F779, Cahn-Hilliard, Kuramoto, Biot-Savart, wave, FFT) and prior hybrid DOM walkers (F769), softbody meshes, orientation RNNs, attention lattices, NCA, spectral residuals, pointer-history fields, k-means particles. Core novel combination is WebXR hand tracking as direct causal input to per-agent magnetic-force MLPs controlling a string/network physics substrate (not continuum PDE, not mass-spring softbody, not particle swarm alone), with DOM nodes as the physical embodiment and sealed genome transfer gated by string contact. Not Voronoi, not portal lattices, not residual predictors.

## Architecture
- Single self-contained index.html
- 12 DOM node agents (divs with absolute positioning + CSS transforms)
- Canvas overlay for drawing magnetic strings (lines with thickness by strength)
- Tiny MLP per agent (input: 6 hand/pointer relative coords + orientation, hidden 4, output 2 for force components)
- WebXR session request on button (immersive-ar or inline fallback)
- IndexedDB for sealed top genomes
- BroadcastChannel for multi-tab genome sharing
- Simple force integration + damping

## Mechanics
1. Agents integrate magnetic forces from all others + hand pulls each frame.
2. Strings drawn between pairs if force magnitude exceeds threshold.
3. Proximity + string overlap triggers genome transfer.
4. Grab with pointer or XR hand to move nodes and adapt weights.
5. Seal button persists best genomes; reload restores.

## Expected outcome
Open page: nodes drift under mutual magnetism forming string networks. Click "Enter XR" on supported device or use mouse to drag nodes. Networks evolve, genomes improve attraction toward "preferred" hand positions. Offline, interactive spatial local-AI.

## Failure modes
No WebXR: pointer + orientation fallback. No orientation permission: pointer only. IndexedDB blocked: session memory only. Too many agents: performance degrades (capped).

## Building blocks
Reusable magnetic force integrator, per-agent MLP genome, XR hand sampler, string renderer, sealed transfer gate. Expands hybrid embodiment and XR-causal local models for future Verse minds.

Void is now Verse everywhere.

**Files**: drafts/F781-webxr-hand-magnetic-string-genome-mind/SPEC.md, drafts/F781-webxr-hand-magnetic-string-genome-mind/index.html
