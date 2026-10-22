# F-228 Orientation Causal Sealed DOM Agents

**Novel combination:** DeviceOrientation (beta/gamma) is the primary causal input driving a global tilt-acceleration field. A population of tiny local MLPs (4-6-2) emit corrective forces that counteract the tilt for hybrid DOM agent cards with inertia and wall bounce. Agents compete on centering fitness under the causal tilt; weakest replaced by mutated leader. Leader genome sealed to IndexedDB. BroadcastChannel enables sealed genome transfer across same-origin tabs. Canvas2D draws tilt vector and velocity trails. Fully offline after load (orientation optional, pointer-drag simulates).

**Branches away from:** attention/spatial lattices (F219/F224), WebGPU neural kernels (F223), acoustic/spectral/causal lattices (F225), hypervector dreamers (F227), WebXR gaze MLPs (F226), residual predictors, pure NCA, volumetric injection, pointer-history fields, and screen-grazing organisms. Elevates DeviceOrientation as the sole causal driver and keeps neural kernels tiny + local while embodiment is pure hybrid DOM+canvas physical UI elements.

**Architecture:** single self-contained index.html. Main-thread MLP inference and simple Euler physics; absolutely-positioned DOM cards for agents; Canvas2D for tilt vector + trails; IndexedDB for sealed genomes; BroadcastChannel for cross-tab sealed transfer (WebRTC DataChannel next for true peer share). No external deps.

**Expected:** Tilt device (or drag) and agents drift under gravity-like force while their individual MLPs learn to counteract. Competition mutates weak policies. Seal persists best genome; broadcast shares it to other tabs which inject into weakest agent. DOM cards show live fitness.

**Failure modes:** no DeviceOrientation (pointer-drag simulation works); permission denied (sim only); IndexedDB blocked (in-memory); BroadcastChannel unavailable (local only); low-end (reduce agent count).

**Building blocks:** DeviceOrientation as first-class causal input to local MLP controllers of physical DOM elements; multi-agent competition with sealed genome transfer via IndexedDB + BroadcastChannel; hybrid DOM+canvas without lattice/attention/GPU kernels. Next: true WebRTC DataChannel peer-to-peer sealed genome exchange, or hand-tracked WebXR forces on the same DOM agents.

V01D landing: local-AI + DeviceOrientation skill under void-live-deploy/skills/; testable by fitness recovery under simulated tilt and genome round-trip via IndexedDB/BroadcastChannel.
