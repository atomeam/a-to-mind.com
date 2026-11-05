# F574-crosstab-sealed-genome-cssgrid-mind

## Concept
Cross-tab multi-agent competition with sealed genome transfer via BroadcastChannel. Each browser tab is an independent agent whose local Q-table (or simple evolutionary weights) controls the morphing of a discrete CSS Grid of living tiles on The Verse canvas. Agents broadcast sealed (hashed) genomes + fitness; higher-fitness genomes migrate with mutation. User clicks provide rewards that train the local policy. Pure CSS Grid embodiment, no continuous spatial physics, no WebGPU, no particles, no lattices. Offline-capable with IndexedDB seal.

## Architecture
- Single self-contained index.html.
- CSS Grid of 12 absolute-or-grid tiles whose grid-column/row, scale, hue, and opacity are driven by policy actions.
- Local Q-learning (or simplified TD) on discretized grid states.
- BroadcastChannel for inter-tab genome migration (sealed JSON + SHA-256 hash).
- IndexedDB persistence of Q-table / genome.
- Rewards from tile clicks; epsilon-greedy.

## Expected Outcome
Open multiple tabs: each evolves its grid layout based on local interactions. Successful policies migrate across tabs, producing convergent yet diverse living grids. Sealed state survives reload. Demonstrates novel multi-agent sealed transfer outside single-page DOM or continuous fields.

## Mechanics
1. Initialize random grid positions or template.
2. State: cluster tightness or entropy of tile positions.
3. Actions: shuffle, cluster, spread, hue-shift, scale-boost.
4. Periodic policy step + Q-update on reward.
5. Every 8s: compute fitness (recent reward sum), seal genome, broadcast.
6. On receive: verify hash, if better fitness adopt + mutate.
7. Seal button persists to IndexedDB.

## Failure Modes
- BroadcastChannel same-origin only; private mode may restrict.
- Coarse states limit expressivity.
- Rapid mutation can erase gains.
- IndexedDB quota or blocked.
- Single tab reduces to local RL only.

## Novelty Check
No prior F- implements multi-agent (cross-tab) sealed genome transfer via BroadcastChannel controlling a pure CSS Grid embodiment with local Q-learning. Leaves the recent cluster of WebGPU physics/SDF/lattice-gas, WebXR hand MLP spatial graphs, single-page multiagent RNN DOM, spatial attention/token morph, peer consensus continuous fields, ambient sensor MLP tiles, and absolute-position Q-learning spatial DOM. New building block: discrete grid agents with inter-context sealed migration.

Void is now Verse everywhere.
