# F686-webgpu-sdf-raymarch-mlp-art

Plain name: Living 3D Form Sculptor

Job: Tilt your device or move the pointer to drive a local tiny neural net that morphs a 3D form (spheres and a torus rendered by WebGPU raymarching). Click to reward the current shape and gently evolve the model. Download a PNG screenshot or the sealed parameters JSON. Everything stays on this device; last session restores.

**Concept**
A novel browser-native 3D generative art tool for The Verse canvas. A WebGPU fragment shader raymarches a simple signed-distance field composed of soft-union spheres and a torus. The SDF parameters (positions, radii, mix factor) are the continuous outputs of a pure-JS tiny MLP (one hidden layer). The MLP takes recent DeviceOrientation deltas and pointer residual (actual velocity minus a simple linear predictor) as causal input. Clicking the canvas provides a soft positive reward that slightly mutates the weights toward the current outputs. Manual seal persists the genome and current parameters to IndexedDB and offers a downloadable JSON. A screenshot of the live canvas can be downloaded as PNG. Fully self-contained, offline after first load.

**Novelty**
Leaves the dominant recent cluster of continuum reaction-diffusion / fluid / n-body / percolation / spectral / LBM / spatial-audio particle kernels, CSS Anchor tethered agents, multi-agent collision genomes, causal PageRank portals, and practical form utilities (seating, notes, voice, ASCII). Core novel combination is WebGPU SDF raymarching (previously unused primary rendering substrate) driven by an orientation + pointer-residual MLP that sculpts implicit 3D forms, with click-reward evolutionary update and direct PNG / JSON keep. Not particle swarms, not DOM portals, not residual field controllers, not WebXR hand primary, not CA.

**Architecture**
- Single index.html, vanilla JS + WebGPU (Canvas2D fallback message if unsupported).
- MLP: 6 inputs (orient dx/dy, pointer residual x/y, |residual|, time sin) → 8 hidden tanh → 8 outputs (mapped to sphere centers/radii, torus radius, soft-mix).
- Raymarcher: classic sphere + torus SDFs with soft min, simple lighting, rendered to canvas via WebGPU compute/render or fragment.
- Interaction: DeviceOrientation (permissioned) or pointer velocity residual; click rewards and adapts weights.
- Seal: IndexedDB key `verse-f686-sdf-art` stores {weights, params, timestamp}; download JSON and canvas.toBlob PNG.
- Offline, no external deps. Works on desktop with pointer; phone with tilt.

**Expected outcome**
Open page (grant orientation if prompted). Move or tilt; the 3D form morphs smoothly. Click several times to favor shapes you like. Download PNG of a favorite frame or seal the JSON to reload the same “style” later. Useful as a private generative art sketch tool.

**Failure modes**
- No WebGPU: clear message, still shows 2D parameter visualization.
- Orientation denied: pointer residual only.
- IndexedDB blocked: session memory only, downloads still work.
- Performance: limited ray steps; graceful on mobile.

**Mechanics**
1. Init MLP random weights or load sealed.
2. Each frame: sample orientation/pointer residual → MLP forward → map to SDF params → update uniform buffer → render.
3. Click: fitness bump + small weight mutation toward current outputs.
4. Seal button: save to IndexedDB + trigger JSON download.
5. Screenshot button: canvas.toBlob → download PNG.

**V01D landing**
Living 3D form sculptor skill under void-live-deploy/skills/webgpu-sdf-raymarch-mlp-art.js; test asserts MLP outputs change SDF params on residual input, canvas renders, seal/restore roundtrips weights, PNG download is image/png.

Void is now Verse everywhere.
