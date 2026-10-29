# F322-verse-self-mutating-shader-mind

## Concept
Void is now Verse. Novel combination never built: the mind *is* the rendering code. A local evolutionary agent treats a small WebGPU fragment-shader source (or Canvas2D expression fallback) as its genome. It mutates numeric constants and simple arithmetic expressions, recompiles/re-evaluates, and scores the resulting field by color entropy, spatial variance, and pointer/orientation response. High-fitness genomes spawn floating DOM "verse fragments" that display a truncated hash of the shader and can be sealed into IndexedDB. The page chrome (hue, scale, blur) is driven by the live shader's own metrics. Emergent: the interface rewrites its own visual laws in real time.

Not a variation of prior physics, NCA, softbody, fluid, spectral, or particle minds. Here the evolutionary unit is the shader source itself.

## Architecture
Single self-contained `index.html`.
- Primary path: WebGPU fragment shader with a handful of mutable uniforms/constants.
- Fallback: Canvas2D pixel loop driven by a mutated JS expression string.
- Blob Worker: evolutionary strategy (population of 8 shader genomes), mutation of constants, fitness from main-thread metrics.
- DOM: up to 6 floating verse-fragment cards positioned by high-activity regions of the field; click to seal genome.
- IndexedDB seal of shader string + metrics hash.
- DeviceOrientation + pointer as continuous fitness bias.
- CSS custom properties updated from field statistics.

## Expected outcome
The canvas visually "thinks" by rewriting its own shader; verse fragments appear and can be sealed as persistent minds. Page morphs with the current best genome. Runnable offline; WebGPU when available, Canvas otherwise.

## Mechanics
- Genome: shader source template with 6–8 mutable float constants.
- Mutation: Gaussian noise on constants + occasional expression swap.
- Fitness: entropy + |response to pointer velocity| + orientation alignment.
- Fragments: spawn every few seconds at high-variance cells.
- Seal: SHA-256 of genome string.

## Failure modes
No WebGPU → Canvas expression fallback (implemented). CSP blocks Worker → static random genome. Orientation denied → pointer only. IDB blocked → clipboard export of genome.

## Building blocks
Full genetic programming of WGSL, multi-pass compute shaders that rewrite themselves, WebXR shader injection, sealed genome breeding across sessions, residual prediction of shader output for faster fitness.

## Lands in V01D
Skill `void-live-deploy/skills/mini/self-mutating-shader-mind.js`; testable by mutation→visual change, fitness→fragment spawn, seal/load genome identity.
