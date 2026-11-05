# F553: OPFS Causal Graph Evolutionary Spatial Audio Mind

## Concept
A persistent local causal graph stored in the Origin Private File System (OPFS). Nodes represent sealed concepts derived from user text input or microphone amplitude. An evolutionary strategy running in a Web Worker optimizes edge weights to maximize predictive fitness on sequential user gestures and spoken energy. The graph is embodied as a force-directed collection of absolute-positioned DOM nodes; each node owns a Web Audio PannerNode whose 3D position tracks the node's screen coordinates, turning the living graph into a spatial soundscape. Dragging nodes or speaking updates the graph; high-fitness genomes are sealed back to OPFS. Fully offline after first load, single self-contained file.

## Branch
Away from all recent WebGPU particle/NCA/spectral/fluid/DEM systems (F532–F552), hand-sculpted volumes, embedding swarms, orientation RNNs, and pure canvas agents. First use of OPFS as the primary mind store combined with spatial audio embodiment of an evolutionary causal graph.

## Novelty
- OPFS-backed causal graph as the durable local mind (not IndexedDB session state).
- Evolutionary edge-weight optimization driven by sequential prediction of pointer/speech events.
- Every graph node is a physical DOM agent with a dedicated spatial audio source (PannerNode) whose location matches the visual node, creating an audible mind.
- Closed loop: user gesture or voice → graph update → fitness → genome evolution → sealed persistence → spatial audio + DOM rearrangement.

## Architecture
- Single index.html.
- OPFS directory `f553-mind/` containing `graph.json` and `genome.json`.
- Web Worker running a simple evolutionary strategy (population of edge-weight vectors, fitness = next-token prediction accuracy on recent event sequence + spatial coherence).
- Main thread: force-directed layout of DOM `.node` elements; each node creates an OscillatorNode + PannerNode routed to a shared GainNode.
- SpeechRecognition (if available) or text input injects new concept nodes; microphone amplitude (AnalyserNode) modulates global energy.
- Pointer drag repositions nodes and records events for fitness.
- Seal button writes current best genome + graph to OPFS.
- BroadcastChannel optional for multi-tab genome sharing (same-origin).

## Expected outcome
Runnable prototype in which the user can type or speak concepts that appear as draggable sound-emitting nodes; the evolutionary mind rewires edges so that related concepts cluster and their spatial audio pans accordingly; sealing persists the graph across reloads via OPFS; the soundscape changes as the graph evolves.

## Mechanics
1. On load, request OPFS, load graph/genome or initialize empty.
2. Spawn initial nodes (or restored); attach oscillators + panners.
3. Force-directed tick: attractions along high-weight edges, repulsion, damp.
4. User input (text/speech/pointer) appends events; Worker evaluates population every few seconds and returns elite genome.
5. Apply elite edge weights; nodes move; audio pans update.
6. Seal writes JSON to OPFS.

## Failure modes
- OPFS unavailable (private mode / older browser): fall back to IndexedDB with clear warning.
- No Web Audio / SpeechRecognition: silent visual graph still fully interactive.
- Too many nodes: cap at 24, auto-prune lowest fitness.
- Audio autoplay policy: require user gesture to start AudioContext.

## Files
- drafts/F553-opfs-causal-graph-evo-spatial-audio-mind/SPEC.md
- drafts/F553-opfs-causal-graph-evo-spatial-audio-mind/index.html

## V01D landing
Causal-graph spatial-audio stage under void-live-deploy/skills/opfs-causal-audio-mind.js; test asserts text input creates a node, Seal persists to OPFS, and reload restores at least the same node count with non-zero edge weights.
