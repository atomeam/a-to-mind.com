# F260: Orientation RNN Physical UI Competition

## Concept
Local tiny RNNs (pure JS) control hybrid DOM physical UI elements (spring-like movable cards) in a competitive arena. DeviceOrientation (or pointer fallback) injects causal forces and state into each RNN. Agents compete for user clicks/rewards. Highest-fitness genome is sealed (SHA-256 hash of weights) to IndexedDB and broadcast via BroadcastChannel for peer transfer across tabs. Canvas visualizes positions and hidden activations. Simple Web Audio tones on reward (no spectral analysis). No WebGPU, no residual predictors, no attention lattices, no volumetric fields, no NCA, no pointer-history fields.

## Why this branch
Last 8 drafts (F252–F259) clustered on WebGPU attention/residual/volumetric/NCA lattices, orientation-driven MLP softbody physics, WebXR hand/gaze arenas, and sealed genome competitions with compute shaders. This deliberately leaves that cluster for:
- Pure-JS local RNN controlling physical DOM UI elements (under-explored axis)
- DeviceOrientation as direct causal input to recurrent state
- Multi-agent competition with sealed genome transfer via BroadcastChannel + IndexedDB
- Hybrid DOM+canvas embodiment without neural kernels or volumetric injection
- Minimal audio as reward feedback only

## Interaction
- Request orientation permission (iOS) or use pointer/drag.
- Tilt device or move pointer: agents' cards respond via RNN forces.
- Click a card to reward (increases fitness, plays tone).
- Automatic every 6s or manual Seal: champion genome hashed, saved to IndexedDB, posted to BroadcastChannel; losers mutated.
- Load Sealed injects into lowest-fitness agent.
- Offline-capable after first load. Open multiple tabs to observe transfer.

## Architecture
Single self-contained index.html.
- RNN: 6→8→4 (tanh), persistent hidden state.
- Physics: velocity integration + damping + boundary, orientation bias.
- DOM cards: absolute positioned, draggable, CSS hue from RNN.
- Canvas: fade trails + hidden-state bars.
- Persistence: IndexedDB champion; BroadcastChannel peer.

## Failure modes
- No DeviceOrientation / permission denied → pointer fallback.
- IndexedDB or BroadcastChannel blocked → in-memory only.
- AudioContext suspended → resumes on first user gesture.
- High agent count → reduce to 3 if laggy.

## Building blocks for next
RNN-driven physical DOM controllers, sealed peer genome transfer primitives, orientation-causal recurrent inputs. Next: true WebRTC data channels for cross-device sealed transfer, or WebXR hand proximity as reward signal into the same RNN controllers.
