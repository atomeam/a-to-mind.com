# F255-causal-rnn-sealed-peer-agents

## Concept
Novel combination that deliberately leaves the recent WebGPU-physics / residual-density / causal-lattice / NCA-spatial-audio / orientation-sealed-arena / hand-MLP cluster (F247–F254):

- Local tiny RNNs (pure JS, no external libs, no WebGPU) per agent maintain causal hidden state driven by DeviceOrientation (beta/gamma) or pointer as proxy.
- Hybrid embodiment: each agent controls a DOM card (position, scale, hue via CSS) with simple spring-like physics; canvas visualizes hidden states and connections.
- Multi-agent competition: agents compete for user clicks (reward) and orientation alignment; fitness based on engagement and stability.
- Sealed genome transfer: champion RNN weights + hash sealed to IndexedDB; BroadcastChannel shares sealed genomes across tabs for peer transfer (simulated multi-user). Losers receive mutated copies.
- Persistent across sessions. Offline-capable.

Under-explored axes: local tiny RNN controlling physical UI elements, DeviceOrientation as causal input to recurrent state, sealed genome peer transfer via BroadcastChannel + IndexedDB, hybrid DOM+canvas without compute shaders.

Not a superficial variation of F254 (which used WebGPU compute for MLP+physics and orientation; this uses pure-JS RNN hidden state, BroadcastChannel peer transfer, and DOM-primary embodiment).

## Architecture
Single self-contained `index.html`.

- Main thread: orientation/pointer input, RNN forward (hidden state update), simple physics integration, DOM updates, canvas draw, IndexedDB seal/load, BroadcastChannel listen/post.
- 5 agents. Each: RNN weights (input 4 → hidden 6 → output 3), persistent hidden vector.
- Fallback: if no orientation, pointer; if no IDB/Broadcast, in-memory single tab.

## Expected outcome
Tilt device or move pointer: agents' DOM cards respond via recurrent controllers, compete for clicks. Seal champion; open another tab to receive genome transfer. Interactive, builds on prior local models and persistence.

## Mechanics
1. Input: normalized tilt or pointer delta + agent position → RNN.
2. RNN: h_t = tanh(W_hh * h_{t-1} + W_xh * x); out = W_hy * h.
3. Outputs drive force, scale, hue of DOM card.
4. Click card → reward, fitness++.
5. Every 8s: sort by fitness, seal top to IDB with hash, BroadcastChannel post, mutate into bottom agents.
6. Canvas: draw agent positions and hidden activation bars.

## Failure modes
- No DeviceOrientation → pointer fallback.
- IndexedDB/BroadcastChannel blocked → single-tab in-memory.
- Low performance → reduce agents to 3.

## Building blocks for next
RNN hidden state as causal memory, peer sealed transfer primitives, hybrid DOM controllers driven by local recurrent models. Next: true WebXR gaze into RNN, or WebRTC for real multi-user genome exchange.

## V01D landing
Local causal-RNN skill under void-live-deploy/skills/; testable via orientation→DOM response, sealed hash round-trip, BroadcastChannel transfer across tabs.
