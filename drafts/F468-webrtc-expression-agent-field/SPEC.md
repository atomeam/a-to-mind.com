# F468-webrtc-expression-agent-field

## Concept
Sealed Local Expression-Tree Agents in a Shared WebRTC Field. Multiple independent agents each own a symbolic expression tree (arithmetic + sin/abs on DeviceOrientation tilt, position, velocity, time) that evaluates to force vectors. Agents move under these forces + tilt gravity + optional pointer attract. On collision of two sealed agents, the higher-fitness transfers its full expression tree genome. User clicks to seal an agent (IndexedDB persist of tree + hash). Optional WebRTC DataChannel (manual SDP offer/answer) shares sealed genomes across peers; received genomes inject into lowest-fitness local agent. Canvas2D rendering. Fully offline local field; WebRTC progressive.

## Novelty / Branch
Deliberately leaves the recent dominant cluster of local neural/probabilistic models (MLP, Hebbian, Bayesian particle filter, residual predictors, causal echo lattices, online-learning networks) driving particle/DOM physics with IndexedDB seals. Uses symbolic expression trees (not neural weights) + true WebRTC DataChannel sealed genome transfer (prior used BroadcastChannel or local only) + competitive multi-agent under continuous orientation causal input. Not NCA, not spectral residuals, not pointer-history fields, not softbody DOM, not k-means, not volumetric injection.

## Architecture
- Single index.html
- 12 agents with recursive expression trees
- DeviceOrientation tilt as leaf input + gravity
- Collision detection for separation + sealed tree copy
- IndexedDB seals
- RTCPeerConnection + DataChannel for cross-peer share (STUN, manual SDP)
- Canvas2D particles with fitness display
- Offline-capable local simulation

## Expected Outcome
Agents drift and evolve expression-driven behaviors under tilt. Seal by click; collisions spread superior sealed trees. Create/paste SDP to share genomes with another browser instance. Interactive via pointer even without orientation or peers. Restores seal awareness on reload.

## Failure Modes
No orientation (tilt=0, still pointer + random trees). Private mode no IDB. WebRTC needs two instances + STUN reachable + manual SDP copy; falls back to local. Deep trees can be unstable (depth capped). High agent count CPU.

## Building Blocks
WebGPU compute parallel expression eval, true WebXR hand as additional input leafs, automatic signaling, expression mutation operators, hybrid DOM embodiment of agents.

## V01D Landing
skills/mini/expression-webrtc-field; testable via seal→IDB, collision→tree copy, SDP→genome inject.
