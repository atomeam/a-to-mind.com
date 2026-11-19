# F858-webrtc-mlp-competitive-dom-auction-mind

**Ledger ID**: F-858  
**Slug**: webrtc-mlp-competitive-dom-auction-mind  
**Date**: 2026-11-19  
**Branch from**: Recent dominant cluster of continuum phase fields (Cahn-Hilliard F852), continuous CA (Lenia F853), L-systems (F850), classical boids under MLP control (F855), CSS3D DeviceMotion MLP cards (F854), self-attention portal fields (F851), WebXR hand Verlet portal chains (F856), orientation-spiking softbody portals (F857), and earlier particle/continuum/softbody/attention/orientation-RNN hybrids.  

**Concept**  
Multi-agent competition on The Verse canvas: 4 independent local tiny MLPs (one per agent) each control a living absolute-positioned DOM portal. Agents compete in a sealed genome auction. Pointer dwell time and click reward form fitness. Highest-fitness genome is sealed to IndexedDB and transferred via WebRTC data channels (with BroadcastChannel signaling/fallback) so peer tabs/devices adopt the superior sealed weights. DeviceOrientation residual provides a shared causal bias to all agents' exploration velocity. No continuum field, no softbody constraints, no particle swarm kernel, no attention scores as forces.  

**Novelty**  
Deliberately leaves the recent cluster of physics/continuum/softbody/WebXR-constraint/attention-portal/Lenia/Cahn-Hilliard/L-system/boids minds. Core novel combination is previously under-explored multi-agent sealed genome transfer performed as a live auction over WebRTC data channels (not simple BroadcastChannel broadcast of a single genome), with pure DOM portals as the sole embodiment controlled by competing local MLPs. Orientation as shared causal bias, not primary controller.  

**Architecture**  
- Single self-contained index.html (offline after load, progressive)  
- 4 DOM portals (absolute cards)  
- Tiny MLP per agent: 4-6-2 (inputs: dxPtr, dyPtr, orientX, orientY; outputs: vx, vy)  
- Fitness: dwell time + click reward  
- Auction: when fitness exceeds threshold, seal weights; offer over WebRTC DC or BC; peers adopt if higher  
- Signaling: BroadcastChannel for offer/answer SDP (simple multi-tab WebRTC)  
- Seal: IndexedDB `verse-f858-auction`  
- Fallbacks: no WebRTC → BC only; no orientation → pointer residual; no IDB → memory  

**Expected outcome**  
Open: four living portals drift under their MLPs. Move pointer or tilt: agents bias toward or away. Dwell or click a portal: its fitness rises, it may seal and auction its genome to other tabs. Superior genomes spread. Interactive competitive spatial mind with sealed peer transfer.  

**Failure modes**  
No WebRTC support → BC fallback. No orientation → pointer proxy. IDB blocked → session only. High latency on DC → delayed adoption.  

**Building blocks**  
Reusable tiny MLP, WebRTC data-channel sealed auction, pure-DOM competitive portals, orientation shared bias. Enables future multi-device peer genome markets or hybrid with WebGPU.  

Void is now Verse everywhere.  
