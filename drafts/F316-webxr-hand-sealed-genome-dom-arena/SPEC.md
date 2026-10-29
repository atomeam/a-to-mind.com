# F316 — WebXR Hand-Sealed Genome DOM Arena

**Ledger ID**: F-316 (frontier series)

## Concept
A multi-agent competition arena where six local rule-based agents (simple parameter genomes: attract, repel, speed, wander, cohesion) compete for food resources on a hybrid canvas + floating DOM card field. Primary causal input is true WebXR hand tracking (index-finger tip / wrist joint projected into the arena); pointer and DeviceOrientation serve as offline fallbacks. The highest-fitness genome can be sealed to IndexedDB + localStorage with a short SHA-256 prefix and exported as JSON for offline sealed transfer / injection into the weakest agent. Pure single-file, offline-capable, no external dependencies.

## Novel combination / Branching
Deliberately leaves the recent dominant cluster of WebGPU neural kernels (MLP/RNN/Hebbian), spectral evolutionary oscillator fields, NCA spatial memory, attention-wave sonifiers, particle-life DOM minds, and pure compute-shader swarm physics (F309–F315).

Moves onto:
- **True WebXR hand tracking** as primary multi-point causal input (Hand Input module, joint poses mapped to arena)
- Multi-agent competition with **sealed genome transfer** (IndexedDB + clipboard JSON inject)
- Hybrid DOM+canvas embodiment: agents are both simulated particles and physical floating CSS cards that respond in real time
- Persistent local storage of champion genomes
- Simple non-neural rule genomes (not MLP/RNN/spectral filters)
- DeviceOrientation as optional global bias only

Not a variation of F314 (WebGPU multi-MLP swarm), F315 (spectral evo field), F309 (WebXR gaze RNN IDB orbs), F311 (orientation MLP DOM), or prior particle/NCA drafts.

## Architecture
- Single `index.html`.
- Agents: 6 DOM cards + canvas particles; genome = 5 floats.
- Simulation: Euler integration with food attraction, inter-agent repulsion, hand cohesion, orientation bias.
- Fitness accumulates on food proximity and hand proximity; occasional tournament mutation of worst from best.
- Seal: SHA-256 prefix → IndexedDB + localStorage; export/inject JSON.
- WebXR: immersive-vr + hand-tracking; project joint positions; pointer fallback.
- Orientation: DeviceOrientationEvent with permission request.
- Fully offline; graceful degradation.

## Expected outcome
Agents form colored competitive clusters that chase food and are steered by the user’s hands (or pointer/tilt). Champion genome seals and can be transferred. DOM cards physically track simulation positions. Runnable offline; WebXR preferred when available.

## Failure modes
- No WebXR / no hand-tracking → pointer + orientation fallback; arena still competitive.
- IndexedDB blocked → localStorage + clipboard only.
- Orientation permission denied → pointer-only.
- Low performance → reduce agent count or food.

## Building blocks for next
WebXR hand joint projection into hybrid DOM/canvas arena + sealed non-neural genome transfer via IndexedDB. Next: full WebXR hand mesh visualization, multi-user WebRTC sealed genome exchange, WebGPU physics kernel driven by hand forces.

## V01D landing
Skill under `void-live-deploy/skills/mini/webxr-hand-sealed-genome-arena/`; testable by hand (or pointer) influencing agent motion, fitness rising, seal/load identity, JSON inject producing matching behavior.
