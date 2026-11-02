# F-506: Tilt-Gaze Causal RNN Orchestrating Sealed Multi-Agent Tensegrity Lattice

## Concept
A purely Canvas-based (no WebGPU) living tensegrity structure: nodes connected by tension cables and compression struts whose equilibrium is continuously solved by a local causal RNN. The RNN takes DeviceOrientation (tilt as causal "wind"/gravity bias) and pointer/gaze proxy history as inputs, predicting force adjustments that stabilize or reshape the lattice. Two (or more) competing local agents each own a sealed genome (spring params, rest lengths, RNN weights) stored in IndexedDB. Agents compete via a stability/energy metric; the winner’s genome can be BroadcastChannel-transferred to other tabs as a sealed hash+payload, enabling multi-tab multi-agent competition without a server. Hybrid embodiment: tilt and pointer causally drive the physics UI elements (nodes are interactive DOM-overlaid or pure canvas handles).

## Why novel (branch from recent cluster)
Recent dominant cluster (F498–F505): WebGPU compute kernels + local MLP controlling living DOM swarms, particles, metabolic systems, fluids, implicit surfaces, Lennard-Jones, Kuramoto, Poisson, etc.  
This leaves that cluster entirely: no WebGPU, no MLP (uses simple causal RNN), introduces tensegrity constraint solving (unused physics kernel), sealed genome transfer via BroadcastChannel (new architecture), DeviceOrientation as primary causal input to the recurrent model, persistent IndexedDB genomes, multi-agent local competition. Avoids attention lattices, residual predictors, NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN (this is tilt-to-force causal, not pure orientation), k-means particles.

## Interactive capabilities
- Pointer/touch: drag nodes, seed forces.
- DeviceOrientation: tilt biases gravity/wind forces that the RNN must counteract or amplify.
- Agents: switch or compete; genomes evolve locally under selection for low energy + pointer engagement.
- Persistence: genomes survive reload via IndexedDB.
- Multi-tab: open second tab to receive/compete sealed genomes over BroadcastChannel.
- Offline: fully self-contained, no network required.

## Failure modes
- DeviceOrientation permission denied → falls back to pointer-only + simulated tilt.
- BroadcastChannel unavailable → single-tab competition only.
- High node count → frame drops; capped at ~40 nodes.
- RNN divergence → clamped weights + energy damping.

## V01D landing
Skill under void-live-deploy/skills/tensegrity-rnn-mind or page for Verse canvas hybrid spatial. Test: stability metric decreases under tilt while genomes transfer intact between tabs.
