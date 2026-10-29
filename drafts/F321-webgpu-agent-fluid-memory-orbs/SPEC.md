# F321-webgpu-agent-fluid-memory-orbs

## Concept
Novel combination for The Void canvas: A local population of tiny policy agents (evolved MLP outputs as force vectors) inject into a GPU-accelerated 2D fluid-like velocity field (WebGPU compute advection + density when available; Canvas2D Euler fallback). Particle density and vorticity drive the spawn and morph of floating DOM "memory orbs". Orbs can be sealed (SHA-256 of local density snapshot + genome) into IndexedDB as persistent spatial memories. DeviceOrientation steers global flow bias; pointer injects energy. The UI chrome morphs via CSS custom properties driven by global entropy and mean vorticity. Emergent: agents learn to sustain swirling structures that "capture" and stabilize memory orbs.

Not a superficial variation of F-020 agents, F-021 density/morph, F036/F320 NCA/softbody, F312 sonifier, F318 kmeans, or pure spectral/attention fields. Here the mind is agent-driven fluid forces producing persistent spatial memory objects.

## Architecture
Single self-contained `index.html`.
- Main: particle system (200–400 particles), velocity field grid (64×36), Canvas2D render (WebGPU compute noted + partial path for density).
- Blob Worker: evolutionary strategy on 6-agent genomes (tiny MLP: local density/vorticity/orient → force), fitness = sustained density variance + orb lifetime.
- DOM: up to 8 floating orbs positioned by density peaks; click to seal/load.
- IndexedDB for sealed orbs (position, snapshot hash, genome).
- Orientation + pointer as continuous input.
- Graceful: no Worker → random forces; no WebGPU → Canvas; no IDB → in-memory; audio optional drone from vorticity.

## Expected outcome
Interactive fluid field where tilting or pointing causes agents to shape currents; density peaks birth orbs that float and morph (scale, hue, blur) with local activity. Sealing captures a "memory" that can be reloaded as seed. Page chrome warps with field complexity. Runnable offline, progressive enhancement.

## Mechanics
- Particles: position, velocity; advected by bilinear-sampled field + agent forces.
- Field: simple Jacobi pressure-like relaxation + diffusion.
- Agents: 6 genomes, MLP 5→4→2; evolve every 2s.
- Orbs: spawn at high-density cells, follow peak, CSS transform from local metrics.
- Seal: crypto.subtle SHA-256 of {density slice, weights, timestamp}.
- Morph: --field-entropy, --mean-vorticity → filter/hue/scale on body.

## Failure modes
CSP blocks Worker → fixed policies; WebGPU unsupported → Canvas (implemented); orientation denied → pointer/keyboard; IDB blocked → clipboard export; low FPS → fewer particles.

## Building blocks
Full WebGPU fluid (stable fluids solver in compute), multi-resolution density, WebXR orb placement in 3D space, sealed orb breeding across sessions, residual prediction of field for agent reward.

## Lands in V01D
Skill `void-live-deploy/skills/mini/agent-fluid-memory-orbs.js`; testable by orientation→force, density→orb spawn, seal/load identity, morph from metrics.
