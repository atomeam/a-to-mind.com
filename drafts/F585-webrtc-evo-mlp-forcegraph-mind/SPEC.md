# F585 – WebRTC Sealed-Genome Competitive MLP Force-Graph Mind

## Concept
Multiple local agents, each a tiny pure-JS 2-layer MLP, compete to control a spatial force-directed graph of Verse thought-nodes (absolute-positioned DOM cards). Each agent’s genome (MLP weights) is sealed with a simple hash and stored in IndexedDB. Agents deposit “influence” forces based on their MLP output given local node features + DeviceOrientation as a global environmental bias (tilt = gravity vector). Fitness is measured by spatial clustering quality and edge coherence. When a peer connects via WebRTC data channel, higher-fitness sealed genomes are transferred and adopted (with light mutation). Pointer drag repositions nodes and injects local reward. Fully self-contained single-file HTML, offline-capable; WebRTC is optional progressive enhancement with manual SDP signaling for true p2p.

Novel combination: WebRTC data-channel sealed genome transfer (not BroadcastChannel) in a competitive evolutionary MLP setting + DeviceOrientation as causal gravity input to never-before force-directed living DOM graph embodiment. Branches away from the recent WebGPU/NCA/spectral/reservoir/hand/SDF/DOM-morph cluster.

## Architecture
- Single index.html, no external dependencies.
- 6–8 living DOM nodes (divs) with labels, force-directed layout updated each frame (attraction to preferred neighbors, repulsion, orientation gravity).
- 4 competing agents: each owns a subset of nodes or influences globally; MLP (4→6→2) maps [local density, orientation x/y, node id bias] → force delta.
- Online weight update on fitness residual (simple delta rule).
- IndexedDB store “verse-f585” for sealed genomes + layout snapshot.
- WebRTC: RTCPeerConnection + data channel “genome”; manual offer/answer textarea for signaling (no server).
- Canvas overlay for edges and force vectors.
- Fallback: no WebRTC → local multi-agent only; no orientation → pointer tilt simulation.

## Expected outcome
Tilt device or drag nodes → agents push/pull the graph into coherent clusters; higher-fitness agent’s genome can be sent to a peer tab/device via WebRTC and adopted, visibly changing layout dynamics. Seal button persists; reload restores. Interactive spatial embodiment of competitive local minds.

## Mechanics
1. Init nodes in random positions, random MLP genomes.
2. rAF loop: sample orientation → update each agent MLP → compute forces → integrate positions → draw edges.
3. Pointer drag on node: temporary pin + reward to nearest agent.
4. Every 5s compute fitness (mean inverse distance to cluster centers), seal best, offer via data channel if connected.
5. On receive genome: if higher fitness hash, adopt + mutate 5%.

## Failure modes
- No DeviceOrientation: simulate with mouse position as tilt.
- WebRTC unsupported or blocked: local agents only; signaling UI disabled.
- IndexedDB quota/blocked: in-memory genomes.
- Too many nodes: cap at 8, simple O(n²) forces.
- SDP copy-paste friction: clear instructions + local demo mode.

## Building blocks unlocked for next
- WebRTC data-channel sealed genome primitive
- Competitive local MLP force controllers for DOM spatial graphs
- Orientation-as-gravity hybrid embodiment

Void is now Verse everywhere.
