# F476-webgpu-mic-spectral-policy-morph

**Concept**  
Microphone Spectral Residual Policy Morph Mind: Local population of tiny policy MLPs (3-6-2, tanh) evolved in a Web Worker. Observations are real-time spectral features (centroid, flux, RMS) extracted from AnalyserNode on getUserMedia. Each policy outputs particle emission bias and velocity scale. Fitness is the negative one-step residual of the next spectral centroid predicted by a companion linear residual head. Best policies drive a Canvas2D / progressive WebGPU particle field whose density and hue morph spatially. Sealing stores population weights + residual stats to IndexedDB. CSS chrome morphs with spectral entropy. Fully offline after load; mic is the sole causal input.

**Novelty**  
Leaves the recent WebGPU SDF/NCA/attention/Hebbian/particle residual, WebXR hand-genome, DeviceOrientation auction, and pure lattice clusters (F464–F475). Core novel combination is live microphone spectral features as the exclusive observation and fitness signal for an evolutionary local policy swarm that morphs a spatial particle field. No hand tracking, no orientation wind, no contact genome transfer, no residual lattice injection, no NCA rule evolution, no DOM card spatial participants as primary agents.

**Architecture**  
- Single index.html (progressive enhancement)  
- Audio: getUserMedia + AnalyserNode → centroid/flux/RMS (main thread, ~30 Hz)  
- Worker: population of 12 MLPs; simple (μ,λ) evolution every 2 s; residual head  
- Particles: 400 Canvas2D points (WebGPU compute fallback path stubbed); params from best policy  
- IndexedDB seal/restore  
- CSS vars from entropy for background/chrome morph  
- No external deps; graceful without mic (synthetic noise fallback)

**Expected Outcome**  
Speak, hum, or clap: particle field densifies and shifts hue in response to spectral residual. Policies improve at predicting your sound. Seal restores a living audio-responsive swarm. Works offline; mic optional.

**Mechanics**  
- Spectral centroid residual → fitness  
- Policy output → particle speed/emission  
- Drag or click injects temporary energy bias  
- S seal, R restore  

**Files**  
drafts/F476-webgpu-mic-spectral-policy-morph/SPEC.md  
drafts/F476-webgpu-mic-spectral-policy-morph/index.html  

**V01D Landing**  
skills/mini/mic-spectral-policy; testable via mic → particle morph + residual drop, seal → IDB restore of weights.
