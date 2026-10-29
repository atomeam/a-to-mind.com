# F430-sealed-genome-competitive-swarm

## Concept
Novel combination: A multi-agent competitive swarm on a shared canvas where each agent is a local tiny decision kernel (weight vector acting as MLP-like force generator). Agents compete for energy resources (pointer-injected and ambient). On collision the higher-fitness agent seals its genome (simple hash of weights + fitness) and transfers a copy to the loser; the loser incorporates it with mutation. Top sealed genomes persist across sessions via IndexedDB. Hybrid: canvas simulation + DOM status tiles that reflect global fitness and sealed count. Pointer and optional DeviceOrientation bias the field.

Deliberately leaves the recent cluster of lattice/field substrates (attention lattices, multi-channel RD, NCA, spectral resonance, vector fields, pure evolving probes) by focusing on discrete multi-agent competition with explicit sealed genome transfer as the core mechanic.

Under-explored axes: multi-agent competition with sealed genome transfer, local tiny models controlling agent behavior, persistent IndexedDB for genomes, hybrid DOM+canvas.

## Architecture
Single self-contained index.html.
- Canvas2D simulation loop (requestAnimationFrame).
- Agents: 24 particles with pos, vel, energy, weights[6].
- Decision: simple weighted sum of features (pointer dx/dy, nearest, energy) → force.
- Collision: if dist < threshold and energies differ, winner seals (hash) and transfers weights (blend + noise) to loser; energy transfer.
- IndexedDB: stores array of top sealed genomes on seal events; loads best on start as initial population bias.
- DOM: status panel showing average fitness, sealed count, current best hash snippet; buttons for inject energy, reset, clear IDB.
- Fallbacks: no IDB → memory only; no orientation → pointer only; graceful if canvas fails.

## Expected outcome
Interactive swarm where agents learn (via transfer + mutation) to chase the pointer or cluster efficiently. Sealed genomes accumulate and bias future runs. DOM tiles update live. Runnable offline.

## Mechanics
- Hold/move pointer to attract agents (energy source).
- Watch collisions cause genome transfers (color flash on transfer).
- Click canvas to inject energy burst.
- Sealed count increases; reload preserves top genomes.
- Failure modes: low agent count on small screens; IDB quota; no transfer if energies equal.

## Building block for future
WebGPU compute for larger swarms and true neural kernels; WebXR hand-tracked agents; WebRTC shared sealed fields across peers.

## V01D landing
Spatial competition skill; testable via genome transfer hash integrity and fitness persistence.

_Renumbered on 2026-10-29: this draft was F254-sealed-genome-competitive-swarm (F-254), a number it shared with F254-orientation-webgpu-sealed-physics-arena. Its number is now F-430; see drafts/NUMBERS.md._
