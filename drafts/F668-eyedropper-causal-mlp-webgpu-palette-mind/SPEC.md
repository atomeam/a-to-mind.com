# F668-eyedropper-causal-mlp-webgpu-palette-mind

**Plain name:** Color Sampler Mind

**Job:** Sample any color from the screen with the EyeDropper, feed it as sensory input to a tiny on-device MLP, and watch a particle field on the canvas evolve its palette and motion in response. Save the mind's weights.

**Novelty**
Branches away from the recent spatial physical layout cluster (room planners F667, kanban F666, dependency F665, chore rota F663, seating, meal, notes). No floor plans, no drag-to-place furniture, no grids of tasks. Core novel combination is the previously unused EyeDropper API as causal sensory input to a local MLP that drives a (WebGPU-capable) particle palette field, with IndexedDB persistence of the evolved weights. Not a residual predictor, NCA, spectral residual, pointer-history field, softbody DOM, orientation RNN, or k-means particles.

**Architecture**
Single self-contained index.html.
- EyeDropper for color sampling (fallback prompt if unsupported).
- Tiny MLP (3-8-4) in vanilla JS: RGB → [hueOffset, saturationScale, speedMul, sizeMul].
- Local learning: on each sample, a few steps of simple gradient descent toward a "harmony" target or just Hebbian update; weights evolve.
- Canvas 2D particle system (WebGPU compute path sketched for future; particles updated on CPU for broad offline support).
- IndexedDB to persist weights and last samples.
- Offline after first load.

**Expected outcome**
Open page, click Sample, pick a color from anywhere, particles shift hue/speed/size according to the MLP, sample more to train the mind, reload restores weights.

**Mechanics**
1. Init MLP with random small weights, load from IDB if present.
2. EyeDropper.open() on button; on success get sRGB hex → normalize to [0,1]^3.
3. Forward pass → modulate global particle params.
4. Optional: 5 GD steps on a dummy loss (e.g. toward complementary or stored target).
5. Particles: 150 dots, positions random walk or flow, color/size from current MLP output + noise.
6. Persist weights as Float32Array in IDB on change.
7. Display current weights norm, last color, particle count.

**Failure modes**
- EyeDropper unsupported (Safari/Firefox old): show hex input fallback.
- No WebGPU: canvas 2D fine.
- IDB blocked: session memory only.
- Too many particles: throttle to 60fps.

Void is now Verse everywhere.

**Files**
drafts/F668-eyedropper-causal-mlp-webgpu-palette-mind/SPEC.md
drafts/F668-eyedropper-causal-mlp-webgpu-palette-mind/index.html
