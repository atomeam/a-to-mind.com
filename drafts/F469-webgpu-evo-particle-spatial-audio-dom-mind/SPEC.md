# F469-webgpu-evo-particle-spatial-audio-dom-mind

## Concept
WebGPU Evo-Particle Spatial Audio DOM-Pusher Mind: GPU compute particles (WebGPU storage buffers + compute shader for integration) each carry a short genome of force parameters (attraction, noise amplitude, color bias, audio pitch). A local genetic algorithm (main-thread tournament selection, crossover, mutation) evolves the population every N frames; fitness is proximity to pointer or to "liked" sealed zones plus survival (not dragged away). Particles act as spatial audio emitters via Web Audio PannerNodes (positioned in 3D from 2D particle coords, frequency from genome + velocity). Absolute-positioned contenteditable Verse tiles are physically pushed when particles enter proximity (CSS transform/position updated from collision impulses). Tile text length modulates local particle birth rate. Optional DeviceOrientation tilts gravity. Sealing captures best genomes, current particle snapshot, tile texts, and residual metrics to IndexedDB for living restore. CSS chrome (hue, scale, background) morphs with average fitness and total energy. Canvas2D fallback if WebGPU unavailable.

## Novelty
Not a superficial variation of F468 Hebbian resonance cavity (wave equation + Hebbian bias), F468 WebRTC expression trees, F467 causal-echo-lattice (delay lines + residual), F466 spectral cloth, F465 Hebbian-mic-swarm, residual density lattices, NCA, or pure predictive orbs. Core novel combination is GPU-computed particle genomes evolved by local GA, each particle a spatial audio emitter (PannerNode), and particles physically push spatial DOM Verse tiles while tiles influence birth rates, with sealed living genome+field memory. True WebGPU compute path primary; spatial audio + DOM physics coupling previously unattempted together.

## Architecture
- Single index.html (no external deps)
- WebGPU: compute shader updates particle pos/vel from genome params + gravity/tilt + pointer attract; render as instanced points or fallback Canvas2D
- Local GA: population of ~64 particles, genome float[6], tournament selection every 120 frames, fitness from pointer proximity + click-likes
- Web Audio: AudioContext + one Oscillator + PannerNode per active emitter (pooled, limited to 16 simultaneous)
- Absolute contenteditable tiles (4) with drag; proximity impulse updates their left/top
- DeviceOrientationEvent for gravity tilt
- IndexedDB seals (genomes, snapshot, tiles)
- CSS custom properties driven by fitness/energy for chrome morph
- Offline after load; WebGPU progressive enhancement

## Expected Outcome
Interactive spatial particle field that evolves preferred force behaviors under pointer and tilt; particles emit localized tones that pan with position; editable tiles are pushed around by particle swarms and influence local density; sealing restores a living evolved field. Fully offline after load. Runnable in supporting browsers; graceful Canvas2D fallback.

## Failure Modes
No WebGPU (Canvas2D sim), orientation denied (tilt=0), AudioContext suspended until gesture, private mode IndexedDB quota, high particle count GPU/CPU bound, browser autoplay policy blocks audio until interaction.

## Building Blocks
Worker-based GA population, multi-channel spatial audio convolution, WebXR hand as additional attractors, BroadcastChannel multi-tab genome sharing, local embedding of tile text modulating genome fitness.

## V01D Landing
skills/mini/webgpu-evo-particle-spatial-audio-dom; testable via genome mutation→behavior change, particle proximity→tile push + audio pan, seal→IDB restore of genomes+tiles.

## Files
drafts/F469-webgpu-evo-particle-spatial-audio-dom-mind/SPEC.md
drafts/F469-webgpu-evo-particle-spatial-audio-dom-mind/index.html
