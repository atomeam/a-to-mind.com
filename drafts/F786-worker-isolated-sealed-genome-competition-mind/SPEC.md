# F786 Worker-Isolated Sealed Genome Competition Mind

**Ledger ID**: F-786 (frontier series)

**Slug**: worker-isolated-sealed-genome-competition-mind

**Date**: 2026-11-17

**Plain name**: Worker Minds Competition

## Concept
A previously unexplored architecture for The Verse canvas: a population of tiny local MLPs, each isolated in its own Web Worker. Workers compete to claim spatial regions of a shared Canvas2D field by proposing per-cell density and hue updates. DeviceOrientation (beta/gamma) and pointer residual are broadcast as the sole causal inputs. The main thread aggregates proposals by weighted voting. Fitness is measured by claimed area entropy plus click rewards. On significant fitness lead, a worker seals its genome (weights hash + values) and transfers a mutated copy to a weaker worker via structured postMessage. Persistence of best genomes in IndexedDB. Fully offline-capable after load. Single self-contained index.html.

This deliberately branches away from the recent dominant continuum-field cluster (LBM F780, SPH, Neural ODE CSS3D F784, Voronoi policy F780, SDF, Cahn-Hilliard) and direct main-thread DOM morphs (policy F783, RBF mobile F785, Hebbian CSS3D) by using Worker-isolated local models as the primary agents, with cross-worker sealed genome transfer as the evolutionary mechanism, and a pure proposal-aggregation spatial field rather than any PDE or particle substrate.

## Architecture
- Single index.html (all workers created via Blob URLs, no external files)
- 4–6 Web Workers, each hosting a tiny 6-8-4 MLP (~50 weights)
- Shared Canvas2D (320×240 logical) as the claim field
- Main thread: aggregates proposal buffers, renders, handles input, IndexedDB, fitness
- Causal inputs: DeviceOrientationEvent + pointer velocity, messaged to all workers each frame
- Genome transfer: postMessage of Float32Array weights + metadata when fitness delta exceeds threshold
- Seal: IndexedDB store of best genomes keyed by hash

## Mechanics
1. On load, spawn workers with random or sealed genomes.
2. Each frame: send orientation/pointer to workers → workers compute local proposals → main aggregates and paints.
3. Clicks inject reward to the worker that claimed the clicked cell.
4. Periodic fitness ranking; leader seals and mutates/transfers to lagging worker.
5. Status overlay shows active workers, fitness, seal count.
6. Fallback: if Workers blocked, run a single main-thread model.

## Expected outcome
Open the page: a living color field emerges as isolated worker minds propose and compete for territory. Tilt the device or move the pointer to bias the claims. Click regions to reward the claiming mind. Watch genomes transfer and the field reorganize. Sealed best minds persist across reloads. Offline after first load.

## Failure modes
Workers blocked → single-thread fallback. No orientation → pointer-only. IndexedDB quota → in-memory. High worker count on weak devices → reduce to 3.

## Building blocks
Reusable Worker-isolated tiny MLP, sealed genome transfer protocol across workers, proposal-aggregation spatial canvas, orientation-as-causal-broadcast. Expands multi-agent competition architectures beyond main-thread swarms.

Void is now Verse everywhere.

**Files**
- drafts/F786-worker-isolated-sealed-genome-competition-mind/SPEC.md
- drafts/F786-worker-isolated-sealed-genome-competition-mind/index.html
