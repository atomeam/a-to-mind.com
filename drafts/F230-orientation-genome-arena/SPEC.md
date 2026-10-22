# F-230 Orientation Genome Arena

**Concept:** Multi-agent competition driven by DeviceOrientation as causal fitness landscape. Agents use tiny local MLPs (genomes). Winner genomes are sealed (SHA-256 + IndexedDB) and transferred via mixing. Top agents physicalize as draggable DOM bodies whose size/position/interaction feed back into fitness.

**Branch from:** attention lattices, residual predictors, volumetric injection, pure NCA, spectral/audio residuals, pointer-history fields. Prior F-229 (causal attention probes), F-227 (hypervector WFC), F-225 (acoustic lattice orbs), F-224 (thought-trace), F-208 (orientation-genome but without sealed transfer + DOM physicalization feedback loop).

**Novel combination:** Orientation-forced arena competition + sealed genome transfer + hybrid Canvas simulation + DOM embodiments controlled by local MLP.

**Expected outcome:** Tilt the device (or move mouse) to reshape the force field. Agents learn/adapt via MLP control. Drag the glowing DOM bodies to boost fitness. Seal transfers the winner into the next generation's population. Fully offline after load; persists seals in IndexedDB.

**Failure modes:** No orientation permission (mouse fallback), IndexedDB blocked (in-memory only), low-end devices (reduce agent count).

**Building blocks for next:** Sealed multi-agent genome exchange, orientation-as-physics, DOM-as-physical-body feedback. Extend with WebRTC shared fields or WebXR hands.
