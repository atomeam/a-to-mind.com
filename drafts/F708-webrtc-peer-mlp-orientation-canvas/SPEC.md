# F708-webrtc-peer-mlp-orientation-canvas

**Plain name:** Peer competitive orientation canvas mind  
**Job:** Tilt your device or move the pointer. Local tiny MLPs steer floating agents on a shared canvas. Connect a second tab or device via WebRTC (manual offer/answer) to compete and seal the better genome across peers. Click agents to reward. Download or seal the winning mind.

**Concept**  
Novel combination never previously attempted: multi-agent competition on Canvas2D where each agent is steered by a pure local tiny MLP (genome = weights). Causal inputs are DeviceOrientation (beta/gamma residual) plus local neighbor vectors. Fitness accumulates from user click-rewards and spatial coherence. Sealed genome transfer happens over a true WebRTC DataChannel (manual SDP offer/answer for zero-server signaling), not BroadcastChannel or IndexedDB alone. Peers adopt the higher-fitness genome with light mutation.  

This deliberately leaves the recent cluster of continuum WebGPU kernels, gaze/hand policy rigid DOM, Markov-gesture SDF, pointer-RNN CSS-grid reflow, spring-lattice contact transfer, genetic spatial synths, and semantic n-gram clusterers. Core novelty is peer-to-peer sealed MLP genome competition with orientation as primary causal driver on a pure canvas substrate. Not a field continuum, not DOM mosaic, not WebXR primary, not residual predictor.

**Architecture**  
- Single self-contained index.html, offline after load (WebRTC uses public STUN, manual signaling).  
- 6 agents on Canvas2D; simple Euler integration.  
- Per-agent MLP: input 6 (oriX, oriY, neighDx, neighDy, selfVx, selfVy), hidden 4, output 2 (ax, ay). Weights ~40 floats.  
- DeviceOrientationEvent for tilt; pointer as fallback residual.  
- WebRTC: RTCPeerConnection + DataChannel; user copies local offer, pastes remote answer (or vice versa).  
- Fitness: click reward + low velocity residual.  
- Persistence: localStorage `verse-f708-genome`.  
- Controls: Generate Offer, Paste Answer, Seal, Reset, Reward mode.

**Mechanics**  
1. Init random MLP weights; place agents.  
2. Frame: sample orientation → MLP forward → apply accel + damping → draw.  
3. Click nearest agent to reward its fitness.  
4. On DataChannel open: send current best genome + fitness; on receive, if better, adopt with mutation.  
5. Seal button persists best weights.

**Expected outcome**  
Open the page. Agents drift according to tilt or pointer. Click to reward. Generate offer, open second window, paste to connect. Better genome jumps across. Fully interactive; works without orientation (pointer). Offline-capable once loaded.

**Failure modes**  
- Orientation permission denied: pointer residual only.  
- WebRTC blocked or no STUN: local-only mode still fully usable.  
- localStorage disabled: session memory.  
- High latency on DataChannel: genomes transfer eventually.

**V01D landing**  
WebRTC peer MLP canvas skill under `void-live-deploy/skills/webrtc-peer-mlp-canvas.js`; test asserts orientation sample → MLP step → canvas draw and DataChannel genome adoption.

**Files**  
- drafts/F708-webrtc-peer-mlp-orientation-canvas/SPEC.md  
- drafts/F708-webrtc-peer-mlp-orientation-canvas/index.html  

Void is now Verse everywhere.  
