# F-306 Slime Rail Planner (2026-10-28)

Draft: `drafts/F306-slime-rail-planner/` (`index.html`, `core.js`, `worker.js`, `test.js`, `test-result.json`, `smoke.mjs`, `smoke.png`).

## Concept (novel combination)
A Physarum (slime mould) agent swarm grows a transport network between cities the visitor places, and the page treats that living network as a real rail plan: it thresholds the trail field into track, runs graph search over it, and scores it against the shortest connecting tree (Prim MST) for coverage, track laid and detour factor. A Web Worker evolution strategy keeps rewriting the slime's physics (sensor angle, turn angle, sensor reach, trail decay, food strength, track threshold) on the visitor's own map plus a fresh random map each generation, and hot-swaps the result into the live swarm. The UI is physically driven by the network: each city is a DOM button that swells and glows with how many other cities it reaches by rail, the control panel's corners come from the genome and it skews with each learning step, and "Trace a route" rides the actual extracted track between two cities with a stated detour factor.

F-222 used physarum-style sensors as an attention budget for a screen predictor; this is the first entry that uses slime growth as a network design optimiser, extracts a graph from the trail field, benchmarks it against an MST, or evolves the slime's physics (grep for physarum, slime, MST, Steiner found only F-222).

## Architecture
- `core.js` (shared by page, Worker and Node): 6-gene genome in [0,1]; Jones-style agents (3 sensors, rotate toward the strongest, step, deposit); cities inject food each step; 3x3 blur with decay; agents respawn at cities when they leave the grid. Extraction: track = trail above k x mean (k is a gene), 8-connected BFS distances between all city pairs. Fitness = 3 x share of connected pairs - 0.08 x (track cells / MST length) - (mean detour - 1) x share connected. Antithetic rank-shaped ES (sigma 0.18, lr 0.6).
- Page: 112x112 simulation, 3000 agents, two steps per frame, drawn to a small canvas and smoothed up; the live network is re-scored every 15 frames with the exact scorer the Worker optimises (lesson from F-304: same physics and scale for fitness and display). Genome saved to localStorage; Copy link writes `#g=` genome and `&c=` cities.

## Measured outcome
- Headless Node, equal 96-evaluation budgets, fresh training maps every generation, 4 unseen 7-city maps: ES mean 1.74 (runs 1.76, 1.72) vs random search 1.63 (1.63, 1.63) vs hand default 0.86. ES won both runs, narrowly.
- Earlier attempts lost to random search: with only 2 fixed training maps ES overfit (0.04 vs 0.43 unseen), and with sigma 0.12 / lr 0.2 it moved too slowly (1.38 vs 1.63). Fresh maps per generation plus a larger step fixed both.
- Scale transfer: the best genome on a 220-grid with 12000 agents scored -0.47 / -0.30 (default -0.71 / -0.55), because sensor reach is in cells and does not scale with map size. That is why the live page runs at the training scale.
- Headless Chrome (system Chrome): 6 generations in about 25 s, 100% of city pairs linked, track 13.8 to 14.1x the MST length, route trace worked (for example 42 cells, 1.01x the straight line), click-to-add city worked, no page errors.

## Failure modes / lessons
- Mean-plus-k-standard-deviations thresholding only kept the city food blobs (disconnected networks everywhere); switching to k x mean made connection learnable.
- A hard penalty on track above 3x MST made every connected network score badly, so ES learned to stay disconnected; a gentle linear cost gave a usable tradeoff.
- Track is still thick (about 14x a one-pixel MST): the slime connects everyone but lays wide roads. Next: skeletonise the mask before scoring so cost means length, not width, and add a fault-tolerance term (cut one edge, measure lost pairs), which is what real Physarum networks are known for.

## Building blocks for next experiments
Trail-field-to-graph extraction with BFS routes, MST baseline scoring, Worker ES on fresh-per-generation tasks (an anti-overfitting pattern), DOM tokens sized by graph degree. Next number: F-307.
