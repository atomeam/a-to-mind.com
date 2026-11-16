# F771 WebCrypto-Sealed Competitive CSS3D Card Agents with DeviceMotion Causal MLP

## Concept
A novel hybrid spatial interface for The Verse canvas: floating CSS 3D transformed card agents (true physical UI embodiments) whose velocity, rotation, and attraction are controlled by local tiny MLPs. Causal inputs are recent DeviceMotionEvent acceleration/rotation-rate history plus pointer proximity. Agents compete for user attention (click rewards, proximity dwell). High-fitness agents can seal and transfer their genome: weights are signed with Web Crypto API (ECDSA), persisted in IndexedDB, and verified on transfer. No continuum field or WebGPU kernel; pure DOM/CSS3D + lightweight canvas overlay. Pointer and device motion directly bias the agents.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum PDE/field kernels (Kuramoto phase oscillators F770, Cahn-Hilliard F767, wave dampeners F766, FFT spectral F765, KdV solitons F764, LIF spiking F763, SDF F762, LBM F760, N-body F761) and pure DOM walkers with BroadcastChannel (F769). Core novel combination is CSS3D physical UI card agents controlled by local MLPs driven by DeviceMotion (acceleration, not just orientation tilt), with sealed competitive genome transfer using actual Web Crypto signatures for integrity + IndexedDB persistence. First use of signed sealed genomes and true CSS3D hybrid embodiment as primary agents without a continuum substrate.

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, fully offline-capable after load.
- 6–8 absolute/CSS3D cards, each with a 8→12→4 MLP (inputs: accelXYZ, rotRateXYZ, pointerDist, selfFitness; outputs: forceX, forceY, torque, attract).
- DeviceMotionEvent for causal history (smoothed).
- Simple 2D physics on cards (velocity integration, bounds, mild repulsion).
- Web Crypto: generate ECDSA P-256 keypair once; sign winner weights on Seal; verify on transfer.
- IndexedDB stores signed genomes.
- Canvas2D optional faint background trails.
- Pointer events attract or reward.

## Mechanics
1. Load: init cards with random MLPs, request motion permission if needed, restore best signed genome from IDB if present.
2. Animation loop: sample motion, feed MLPs, integrate physics, update CSS transforms (translate3d + rotate), accumulate fitness on pointer proximity/click.
3. Click a card: big fitness reward, flash.
4. Seal button: sign best weights with private key, store in IDB, broadcast to other agents (they verify and adopt with mutation).
5. Interactive offline: works with mouse simulating motion if no device sensors.

## Expected outcome
Open: floating 3D-tilted cards drift and spin in response to device motion or mouse. They chase pointer, compete visually (color by fitness). Seal freezes a high-fitness signed genome across agents; reloads restore it. Fully interactive.

## Failure modes
No DeviceMotion: falls back to pointer/mouse as proxy acceleration. Crypto unsupported: skip signing, still transfer raw. IDB blocked: session-only. Low-end: reduce to 4 agents.

## Building blocks
Reusable pure-JS MLP, CSS3D agent controller, WebCrypto ECDSA sealed genome, IndexedDB persistence, DeviceMotion causal input. Ready for Verse canvas as interactive spatial hybrid agents. Expandable to true WebXR hand injection or multi-tab WebRTC signed transfer.

Void is now Verse everywhere.

**Files**: drafts/F771-webcrypto-css3d-devicemotion-mlp-agents/SPEC.md, drafts/F771-webcrypto-css3d-devicemotion-mlp-agents/index.html
