Plain name: Shared n-body mind swarm
Job: Open the page in multiple tabs; local Elman RNNs control agent velocities from peer positions shared over BroadcastChannel; a WebGPU n-body compute visualizes interaction forces; DOM cards compete, transfer sealed genomes on fitness peaks, and seal downloads the best weights + field state.
Input: Pointer drag to attract agents or inject force; click a card to reward its genome; tilt optional.
Keeps: Download JSON of best RNN weights, agent states and a low-res density snapshot; IndexedDB restores the best on reload; multi-tab live sharing.
Not on Verse yet: checked against llms.txt and recent F- (practical trackers F641–F647, continuum LBM/Gray-Scott F644/F648) — no discrete n-body + Elman + BroadcastChannel sealed genome DOM hybrid.

**Concept**
A multi-tab shared spatial field for The Verse canvas. 8–16 agent DOM cards are controlled by independent local Elman RNNs (input: relative peer positions + self velocity history; hidden 6; output: velocity delta). Positions and fitness are exchanged over BroadcastChannel. A WebGPU compute shader (Canvas2D fallback) runs a lightweight n-body force accumulation on a background particle cloud influenced by the agents. Clicking an agent rewards its current genome; when fitness exceeds threshold a sealed (hashed) genome fragment is broadcast and accepted by peers if superior. Best genome + snapshot persist in IndexedDB. Fully offline after load, progressive enhancement.

**Novelty**
Branches away from the dominant recent cluster of practical offline utilities (subscription/habit trackers, decision matrices, budget allocators F641–F647) and WebGPU continuum kernels (LBM fluid F644, Gray-Scott RD F648, wave riders F636, reservoir lattices F642). Core novel combination is discrete n-body force kernel (not LBM, not RD, not lattice-gas, not SPH), Elman RNN as the local controller (not feed-forward MLP, not evolutionary parameter vector, not reservoir readout), BroadcastChannel multi-tab shared field with fitness-gated sealed genome transfer, and living DOM cards as both controlled agents and force sources. Not residual predictors, attention lattices, pure NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles.

**Architecture**
Single self-contained index.html. Vanilla HTML/CSS/JS + optional WebGPU:
- Agents: absolute-positioned DOM cards with RNN state.
- BroadcastChannel 'f649-nbody-swarm' for position/fitness/genome.
- WebGPU compute: simple n-body density or force visualization on canvas behind the DOM.
- IndexedDB 'verse-f649' for best genome.
- Pointer events for attraction; click for reward.
- Fallback: no WebGPU → Canvas2D particles; no BroadcastChannel → single tab.

**Expected outcome**
Runnable prototype. Agents move under RNN control, respond to pointer, share across tabs, transfer genomes on clicks, Seal downloads valid JSON, reload restores best. Works offline.

**Mechanics**
1. Init agents with random or loaded RNN weights.
2. Each frame: gather peer positions from channel → RNN step → update velocity/position → post own state.
3. WebGPU/Canvas step n-body visualization.
4. On click: fitness++, maybe broadcast sealed genome.
5. Seal: serialize best weights + states to JSON download.

**Files**
drafts/F649-webrtc-elman-rnn-nbody-dom-swarm/SPEC.md
drafts/F649-webrtc-elman-rnn-nbody-dom-swarm/index.html

**V01D landing**
Shared n-body swarm skill under void-live-deploy/skills/webrtc-elman-rnn-nbody-dom-swarm.js; test asserts synthetic peer position changes agent velocity, genome post on high fitness, seal JSON contains weights key.

Void is now Verse everywhere.
