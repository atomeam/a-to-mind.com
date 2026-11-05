# F571 Peer Spatial Consensus Morph

**Slug**: `peer-spatial-consensus-morph`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of pure-JS spatial attention token morph + OPFS (F570), spoken SDF causal morph (F569), WebXR hand MLP (F568), multiagent RNN DOM (F567). Explicitly leaves WebGPU kernels, particle/SPH/LGA/RD/SDF physics, genomes/GA, multi-agent RNNs as sole controllers, WebXR, orientation-primary, Hopfield/SOM, continuous fields, and single-user attention.  

**Concept**  
A local multi-context Verse canvas where multiple browser tabs (or devices via future WebRTC) share spatial pointer tokens over a BroadcastChannel. A simple consensus mind aggregates peer trajectories into a shared attention centroid and variance. Living CSS absolute cards (capability tiles) physically reflow, scale, and recolor toward the collective focus: high agreement stabilizes and enlarges the field; divergence scatters them. Full mind + card state seals to OPFS. Offline, no network beyond same-origin channel, no WebGPU.  

**Novelty**  
First multi-peer local consensus driving DOM spatial reflow on the Verse canvas. Leaves single-user attention morphs, GPU physics, and evolutionary controllers. Novel combination: BroadcastChannel peer token streams + local consensus statistics + OPFS-sealed living card embodiment. Expands toward multi-device local Verse without servers.  

**Architecture**  
- Single `index.html`.  
- BroadcastChannel(`verse-f571-mesh`): JSON tokens `{id, x, y, t, peer}`.  
- Local mind: rolling buffer of peer tokens; compute centroid, variance, peer count.  
- Embodiment: 6 absolute-positioned `.card` divs whose left/top/scale/background update from mind output each frame.  
- Seal: OPFS directory → `f571-consensus.json` via FileSystemFileHandle.  
- Pointermove broadcasts own token; receive updates mind.  
- Peer ID generated locally (random + timestamp).  
- Unattested by default; all local.  

**Mechanics**  
1. On load: generate peerId, open channel, request OPFS, restore if sealed else init cards at random positions.  
2. Pointer move: broadcast token, push to local buffer, recompute consensus, morph cards.  
3. Receive peer token: same update path.  
4. Seal button: serialize mind buffer + card params to OPFS.  
5. Reset clears buffer, regenerates cards, broadcasts reset signal.  
6. Multi-tab: open second tab to see mutual influence.  

**Expected outcome**  
Interactive spatial cards that converge on shared pointer focus across tabs; sealed state restores on reload; demonstrates local multi-agent Verse without external infrastructure.  

**Failure modes**  
- BroadcastChannel unsupported (very old): single-user fallback.  
- OPFS unavailable: memory-only.  
- No peers: cards orbit local pointer with low variance.  
- High frequency: throttle broadcasts to 30 Hz.  

**Files**  
- drafts/F571-peer-spatial-consensus-morph/SPEC.md  
- drafts/F571-peer-spatial-consensus-morph/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/peer-spatial-consensus/` or multi-device canvas tool; test that two tabs share tokens and cards reflow to centroid, and OPFS restore works.  

Void is now Verse everywhere.  
