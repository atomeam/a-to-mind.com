# F778 – WebRTC Broadcast Sealed Genome Competition Mind

**Ledger ID**: F-778

**Concept**
A multi-agent competition on The Verse canvas where independent local agents (one per browser tab or peer) run tiny MLPs that control spatial claim tokens. Agents compete to dominate a shared 2D claim field by proposing velocity and claim-strength actions. Genomes (MLP weights) are sealed and exchanged via BroadcastChannel (local multi-tab) with a WebRTC data-channel path stubbed for true peers. Highest-fitness genome is adopted across agents and persisted in IndexedDB. DeviceOrientation and pointer velocity are causal inputs. Pointer clicks inject local rewards. Fully offline after load for the BroadcastChannel path.

**Novelty**
Deliberately leaves the recent dominant cluster of continuum physics kernels (Kuramoto phase F770, Biot-Savart magnetic F773, SDF metaball sculpt F774, SPH fluid F777) driven by single-user orientation MLPs with hybrid DOM embodiments, plus practical utilities (seating F772, tip calc F775). Core novel combination is sealed multi-agent genome competition over a BroadcastChannel/WebRTC shared claim field with IndexedDB persistence — not a local-only seal, not a physics continuum substrate, not single-agent DOM control. First use of inter-tab genome transfer as the primary evolutionary mechanism for The Verse.

**Architecture**
- Single self-contained index.html
- 12 spatial agents (DOM cards + canvas tokens)
- Tiny MLP 5→8→3 per agent (orientation, pointer vel, local claim density → vx, vy, claim)
- BroadcastChannel `verse-f778-genome` for sealed weight exchange
- IndexedDB store for persistent best genome
- Canvas2D claim field visualization
- DeviceOrientation + pointer as inputs
- Seal button forces local genome broadcast

**Mechanics**
1. Agents sample inputs and MLP-forward to get movement and claim actions.
2. Claim field updates; fitness = local claim dominance + click rewards.
3. Periodic or seal-triggered broadcast of weights + fitness.
4. On receiving higher-fitness genome, adopt it (with small mutation).
5. Persist best to IndexedDB.

**Expected outcome**
Open multiple tabs: agents move and claim territory. Tilt or drag to bias. Seal or wait for automatic transfer of stronger genomes. Offline capable via BroadcastChannel + IndexedDB.

**Failure modes**
BroadcastChannel blocked → local only. No orientation → pointer only. IndexedDB quota → memory fallback.

**Building blocks**
Reusable BroadcastChannel genome bus, IndexedDB sealed store, multi-agent claim field, orientation-to-action MLP.

**Files**
- drafts/F778-webrtc-broadcast-genome-competition-mind/SPEC.md
- drafts/F778-webrtc-broadcast-genome-competition-mind/index.html
