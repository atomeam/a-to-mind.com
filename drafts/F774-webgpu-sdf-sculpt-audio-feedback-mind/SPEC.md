# F774-webgpu-sdf-sculpt-audio-feedback-mind

**Ledger ID**: F-774

**Concept**: Orientation- and pointer-sculpted WebGPU SDF multi-metaball volume with local MLP controller and closed-loop AudioWorklet feedback. The surface "sings" its own tension; the song mutates the mind.

**Novelty**: First closed-loop audio-to-genome feedback on an SDF raymarcher. Prior SDFs (F762) were passive orientation portals. Prior audio (F024, F042) drove particles, not the implicit surface parameters themselves. Not NCA, not Biot-Savart, not boids.

**Architecture**:
- Single self-contained index.html
- WebGPU: fullscreen triangle + fragment raymarcher sampling a sum-of-metaballs SDF
- MLP (4-8-6): recent pointer deltas + orientation → blob centers
- Web Audio: AnalyserNode on a detuned oscillator bank modulated by average |∇SDF|
- Feedback: RMS → small Gaussian mutation on MLP weights each frame when above threshold
- Persistence: localStorage for sealed weights
- Fallback: Canvas2D metaballs

**Mechanics**:
1. Pointer / tilt moves virtual sculpting tool.
2. MLP updates blob positions every frame.
3. Raymarch renders glowing surface.
4. Audio pitch/volume tracks surface energy; energy mutates weights.
5. Seal button freezes current genome.

**Expected outcome**: A living, humming blob that deforms under your hand and device tilt, its sound feeding back into its own evolution. Offline after load.

**Failure modes**: No WebGPU → 2D fallback. No audio context → silent but visual. Orientation denied → pointer only.

**Building blocks**: Reusable SDF metaball raymarch stub, audio-RMS mutation operator, orientation-aware MLP sculptor.
