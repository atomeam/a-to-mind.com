# F-308 LBM Wing Forge (2026-10-28)

Draft: `drafts/F308-lbm-wing-forge/` (`index.html`, `core.js`, `worker.js`, `test.js`, `test-result.json`, `smoke.mjs`, `smoke.png`).

## Concept (novel combination)
A real D2Q9 lattice-Boltzmann wind tunnel runs live in the page, air flowing left to right around a parametric wing (NACA-4 style camber and thickness, angle of attack, hinged trailing flap). Visitors paint rocks into the tunnel with the pointer, and a Web Worker evolution strategy re-designs the wing to fly best around *their* rocks, measuring lift and drag by momentum exchange on the actual flow, then hot-swaps each generation's best wing into the live tunnel. The UI is driven by the air itself: the control panel tilts with measured lift, its border thickens with drag, glowing lift and drag arrows sit on the wing, and the sliders move as the Worker rewrites the genome. The field is drawn as vorticity (red/blue) with advected streak particles.

Earlier fluid entries (F022, F184, F200, F237, F269, F288) used fluids as visuals or a medium for agents; none ran a lattice-Boltzmann solver, measured aerodynamic forces, or optimised a shape against those forces (grep for lattice-Boltzmann, D2Q9, airfoil, NACA, wind tunnel found nothing).

## Architecture
- `core.js` (shared by page, Worker and Node): 120x60 D2Q9 BGK, push streaming with halfway bounce-back, equilibrium inlet, zero-gradient outlet, periodic top and bottom. Force on the wing = sum of 2 x post-collision populations x link direction over wing links only (rocks are solid but not measured). Coefficients normalised by 1/2 u0^2 chord (chord 34 cells). 5-gene genome in [0,1]. Score = CL / max(CD, 0.05) - 2 x max(0, 0.3 - CL), averaged over flow conditions. Antithetic rank-shaped ES.
- Training conditions: (u0 0.10, tau 0.60) and (0.08, 0.56). Unseen test: (0.07, 0.62), (0.09, 0.58), (0.11, 0.60), (0.06, 0.53), so different Reynolds numbers (roughly 60 to 200).
- Page: six LBM steps per frame on the main thread (about 60 fps headless), OffscreenCanvas upscaled; Worker gets the rock mask and trains against it. Genome kept in localStorage; Copy link writes `#g=`. `?gens=N` sets generations.

## Measured outcome
- Headless Node, equal 80-evaluation budgets (each evaluation = 2 flows x 1200 steps, about 0.6 s per flow): ES unseen mean 1.478 and 1.473 (two seeds) vs random search 1.404 and 1.413 vs the symmetric default -0.60. ES beat random on all 4 unseen conditions in both seeds (for example CL 1.30 / CD 0.88 vs CL 0.99 / CD 0.71 at u0 0.09).
- Sign checks: +9 degrees gives CL +0.26, -9 degrees gives -0.26 exactly mirrored, camber adds lift, symmetric 0-degree wing gives CL 0.
- Headless Chrome: 60.5 fps, painted rock (128 cells) by real pointer drag, 3 generations evolved around it, live lift went 0.00 to 0.54 with L/D 0.98, panel tilted about 5 degrees, no page errors.

## Failure modes / lessons
- First hot-swap produced NaN lift: cells uncovered by a new wing shape had zero populations (rho 0). Fix: re-seed uncovered cells as still-air equilibrium in `setObstacles`. Any shape-changing LBM needs this.
- ES solutions hug the gene bounds (15 degree angle, 25 degree flap, thinnest section). At these low Reynolds numbers a steep, thin, flapped plate is genuinely best for this score, so the ranges, not the optimiser, set the ceiling. Widening the ranges would need a stall model check, since a 120x60 periodic tunnel has real blockage (chord is 57% of height).
- Live tunnel uses one flow (u0 0.1); the Worker trains on two, so live numbers differ a little from training scores.

## Building blocks for next experiments
Reusable LBM solver with force measurement and safe obstacle swapping, user-painted environment fed into a Worker optimiser, UI tilted by a physical measurement. Next: move the solver to WebGPU compute for a 4x larger tunnel, add a stall-aware multi-angle score (a wing that also survives gusts), or let creatures from F-304 swim in this flow. Next number: F-309.
