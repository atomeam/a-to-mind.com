# F-229 WebGPU Causal Particle Lattice with Local Attention Mind and Morphing Probe Orbs

**Novel combination:** WebGPU compute maintains a causal density/particle lattice that receives deposits from pointer, device orientation tilt, and positions of floating DOM probe orbs. A local Web Worker runs a tiny multi-head attention mind over a short history of (audio spectral energy from AnalyserNode + orientation + local residual energy). The resulting thought vector continuously morphs page chrome via CSS custom properties and drives the physical position, scale, and hue of the probe orbs. Orbs can be dragged by the user; their locations feed back as additional deposits into the GPU lattice, closing the loop. Leader thought state sealed to IndexedDB.

**Branches away from:** F-228 (orientation + tiny MLPs on pure DOM agents with competition/BroadcastChannel, no GPU lattice), F-225/F-190 (acoustic/causal lattices with orbs but no worker attention mind or closed probe feedback), F-195/F-223 (GPU attention swarms or neural kernels without audio+orientation multi-modal history attention and DOM probe embodiment), F-226 (WebXR gaze MLPs), F-021 (orientation density + morphing UI without worker attention or GPU particles).

**Architecture:** single self-contained index.html. WebGPU storage buffers + compute pipeline for lattice update (Canvas2D ImageData fallback). Blob Web Worker for attention mind. AnalyserNode after gesture for spectral features. DeviceOrientationEvent for tilt bias. Absolutely positioned DOM orbs with CSS transforms. CSS vars for chrome morph. IndexedDB for sealed thought state. No external dependencies.

**Expected outcome:** Interactive spatial lattice that remembers paths and audio energy as glowing causal traces. Local mind anticipates multi-modal input and manifests as floating, morphing probe orbs that the user can reposition. Page hue/contrast/blur warps with thought coherence. Runnable offline after load in WebGPU browsers; graceful 2D fallback.

**Mechanics:** deposits → diffusion/decay/tilt on GPU grid; sample residual + audio bins + orientation into worker history buffer; attention softmax → thought vector; map to CSS vars and orb lerp targets; orb positions written back as deposits; seal stores thought weights/history snapshot.

**Failure modes:** no WebGPU (2D fallback works), mic/orientation denied (pointer + sim continue), Worker blocked (static thought), IndexedDB unavailable (session only), low performance (reduce resolution).

**Building blocks:** closed-loop GPU spatial causal field + multi-modal (audio+orientation) local attention mind + embodied dragable DOM probes + chrome morph. Next: WebXR immersion of the lattice with hand deposits, or GPU-resident attention kernels.

V01D landing: spatial multi-modal local-AI skill under void-live-deploy/skills/; testable by residual→orb position stability and sealed state round-trip.
