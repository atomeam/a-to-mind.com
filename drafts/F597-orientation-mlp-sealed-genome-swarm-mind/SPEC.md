# F597-orientation-mlp-sealed-genome-swarm-mind

**Concept**
A spatial multi-agent mind for The Verse canvas: 16–32 competitive local tiny MLPs (2-hidden-layer, ~40 weights each) control particle agents on a Canvas2D field. DeviceOrientationEvent (alpha/beta/gamma) is the sole causal environmental input—an orientation vector that acts as a dynamic fitness gradient and external force. Agents accumulate energy by aligning with or resisting the orientation field. On close proximity, the higher-energy agent may donate a sealed partial genome (weight subset) to the lower; the transfer is attested by a local SHA-256 seal of the donor weights at the moment of user confirmation (click on the pair). No external models, no network required. State (genomes + energy) seals to IndexedDB.

**Novelty / Branch**
Leaves the dominant recent cluster of WebGPU continuum/SDF/particle/fog/warp/electrostatic/bandit kernels and DOM/SVG embodiments (F589–F596). Core novel combination is DeviceOrientation as the exclusive causal driver of fitness and force for a sealed multi-agent genome transfer swarm of tiny local MLPs. Not attention lattices, not residual predictors, not NCA, not spectral residuals, not pointer-history fields, not softbody DOM, not orientation-RNN ribbons, not k-means. The mind is a competitive population whose evolutionary transfer is user-sealed and whose environment is the device's physical orientation.

**Architecture**
- Single self-contained index.html, offline after load.
- Canvas2D full-screen particle field.
- 24 agents, each with position, velocity, energy, and a Float32Array genome (MLP weights).
- Tiny forward pass (3 inputs: local density proxy, energy, orientation-alignment → 2 outputs: accel x/y).
- DeviceOrientationEvent listener (with permission request on first interaction); mouse-drag fallback simulates orientation vector.
- Collision/proximity detection; on user click near a pair, seal transfer of top-k weights + hash receipt displayed.
- IndexedDB key `verse-f597` for genomes + energies.
- Progressive: if orientation unavailable, mouse vector is the environment.

**Building blocks for next**
Sealed partial-genome transfer as a user-attested primitive; orientation-as-environment for local models; competitive energy-based selection without external fitness function.

**Failure modes**
Orientation permission denied → mouse fallback. IndexedDB private mode → session only. Extreme angles clamped. No WebGPU (Canvas2D primary). Transfer only on explicit seal click.

**Files**: drafts/F597-orientation-mlp-sealed-genome-swarm-mind/SPEC.md, drafts/F597-orientation-mlp-sealed-genome-swarm-mind/index.html
