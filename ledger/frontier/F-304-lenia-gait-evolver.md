# F-304 Lenia Gait Evolver (2026-10-28)

Draft: `drafts/F304-lenia-gait-evolver/` (`index.html`, `core.js`, `test.js`, `test-result.json`, `smoke.png`).

## Concept (novel combination)
A continuous artificial-life creature (Lenia) runs on the GPU as a WebGL2 float-texture stencil, while an on-device evolution strategy in a Web Worker breeds its physics in the background and hot-swaps the best genome into the live world. The creature is steerable: its sensing kernel is displaced by a learned "shift" gene, which breaks symmetry and makes a gait; at runtime the displacement vector is rotated toward food the visitor drops, so evolution discovers locomotion and the page turns it into steering. The control panel physically bends with the creature: its corner radii come from the kernel's shell weights, its glow leans with the steering direction, and the whole panel skews with the size of each optimiser step.

First Lenia, first evolution-strategy optimiser and first "evolve a gait, then steer it by rotating the kernel" mechanic in the ledger (grep for Lenia, evolution strategy and tensegrity returned nothing; earlier reaction-diffusion and NCA entries are discrete or hand-tuned and are not optimised live).

## Architecture
- `core.js` (shared by page, Worker and Node): 6-gene genome in [0,1] mapped to mu, sigma, dt, two extra kernel shell weights and kernel shift; sparse-offset torus convolution; torus-aware centre of mass; fitness = survive as a compact body (mass stays 0.15x to 2.5x, penalised above 1.6x growth and for smearing over >25% of the world) plus 2x distance travelled along the steer axis per kernel radius; antithetic rank-shaped OpenAI-style ES.
- Page: 160x160 R32F ping-pong textures, kernel uploaded as a small R32F texture, fragment-shader Lenia step (2 steps per frame), readback every 6 frames for centre of mass, food and steering; CPU canvas fallback when WebGL2 float render targets are missing. Worker runs ES at 40x40/R6/70 steps and posts best genomes. Best genome saved to localStorage and shareable as `#g=` URL hash.

## Measured outcome
- Headless Node (8 generations x 12, equal 96-eval budget for random search, 3 unseen seeds): ES mean unseen fitness 8.69 (runs 10.19, 7.19) vs random search 6.12 (13.15, -0.91). ES is more reliable; one lucky random draw still beat it, so the win is on average, not every time.
- Steering transfer (best ES genome on a 96 grid at R10, kernel rotated to +y): travelled 61.8 cells toward the target, but crossed the 2.5x mass blow-up bound by 120 steps.
- Headless Chrome (SwiftShader WebGL2): engine WebGL2, 23 generations in about 29 s, 6 live genome swaps, ate the dropped food once, creature stayed a coherent ring; 3 automatic respawns from blow-ups. No page errors.

## Failure modes / lessons
- Gait direction sign: displacing sensing toward +x makes the body drift toward -x, so the kernel shift is negated in `kernel()`. Found by a probe before the fix (the first ES run optimised for the wrong direction and learned to barely move).
- Without a growth penalty ES exploits the mass bound and evolves flooding blobs (first browser smoke run showed a world-filling striped mass). Penalty plus a live 3x seed-mass respawn guard fixed the look, but small-grid fitness still does not fully transfer to the larger live grid. Next: evaluate at live scale on the GPU (batch many genomes as tiles of one texture) so fitness and display share one physics.

## Building blocks for next experiments
GPU Lenia stepper with a kernel texture, steerable asymmetric kernels, Worker-side ES with genome hot-swap, and a UI-morph-from-genome pattern. Next number: F-305.
