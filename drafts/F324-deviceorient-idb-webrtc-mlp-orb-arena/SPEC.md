# F324 — DeviceOrientation Causal MLP Genome Orb Arena

**Concept:** Multi-agent Canvas2D orbs, each driven by a tiny local MLP (genome = weight vector) that outputs force based on local state + DeviceOrientation tilt as causal gravity/input. Agents compete for randomly spawned resources; fitness = resources collected. Best genomes are sealed (SHA-like hash of weights) and persisted in IndexedDB. Optional WebRTC data channel allows sealed genome transfer between peers on connect. Fully offline-capable after first load; progressive enhancement for orientation and WebRTC.

**Novelty:** Deliberately branches from recent WebGPU/attention/wave/softbody/DOM/orientation-RNN/k-means clusters by using pure Canvas2D physics, DeviceOrientation as direct causal input to never-before-seen local MLP controllers, sealed genome competition with IndexedDB persistence + WebRTC transfer architecture that has not been tried in this form. No lattices, no residual predictors, no volumetric, no NCA, no spectral, no pointer-history fields, no softbody DOM.

**Architecture:**
- Main thread: 40 agents on Canvas2D with simple Euler physics (position, velocity, orientation-biased gravity)
- Each agent: 6-input (pos rel, vel, tilt, dist-to-resource) → 8 hidden → 2 output force MLP (weights ~100 floats, genome)
- Evolution: every 30s, cull bottom 50%, mutate top, reseed
- Seal: hash genome → IndexedDB store of top-3 sealed genomes
- WebRTC: optional peer connection via signaling stub (manual copy-paste offer/answer for demo), transfer sealed genome on datachannel

**Expected outcome:** Tilting device (or mouse-sim) steers the "gravity"; agents learn (evolve) to chase resources under that gravity. Best genomes persist across reloads. Peer can inject a foreign sealed genome that competes. Interactive, offline.

**Mechanics:** See index.html. Orientation event → tilt vector; MLP forward per agent; resource spawn/collect; periodic selection; seal button; WebRTC buttons for offer/answer.

**Failure modes:** No DeviceOrientation → mouse-simulated tilt; no IndexedDB → session only; WebRTC requires two tabs/peers and manual signaling (no server); high agent count drops FPS (capped at 40).

**Builds on:** Nothing recent; branches away from F316–F323 WebGPU/WebXR hybrid DOM arenas, attention waves, k-means particles, orientation RNN softbody.

**Next building block:** Full WebRTC mesh with auto-signaling; WebGPU compute for parallel MLP inference; gaze/hand as additional causal input.
