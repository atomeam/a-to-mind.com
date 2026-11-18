# F801 Vicsek Flocking Q-Table Spatial Notes Mind

## Concept
A local tabular Q-learning agent (discrete state-action value table, not neural policy, not Kalman filter, not Hebbian, not reservoir, not lookup pure) receives a discretized observation of the current flock's global alignment score. It selects actions that modulate Vicsek model parameters (noise amplitude and interaction radius). The Vicsek simulation is a canonical alignment-only flocking model: each particle updates its heading to the average heading of neighbors within radius plus isotropic noise. Living DOM notes are bound to emergent high-density cluster centroids (simple spatial binning); clicking a note injects a positive reward that updates the Q-table for the preceding state-action pair via standard Q-learning. Sealed Q-table (and fitness) persists to IndexedDB and transfers across tabs via BroadcastChannel under fitness-gated adoption.

## Novelty
Leaves the recent cluster of battery-Kalman gravity particles (F800), WebGPU raymarched spiking volumes (F799), CSS3D spiking (F798), lookup-table CSS growth (F797), decision-tree kinematic CSS3D (F796), CSS3D battery RNN (F795), attention-field portals (F794), living DOM RNN (F793), and prior NCA / Lenia / softbody / residual / orientation-MLP / Physarum / Ising / lattice-gas / spectral / echo-state substrates. Core novel combination is the Vicsek alignment-flocking kernel (pure neighbor-average heading + noise, not full boids forces, not mutual gravity, not continuum RD/Lenia, not discrete CA/Potts, not particles under neural force fields) controlled by a pure tabular Q-learning mind whose causal input is the flock's own alignment statistic, with DOM notes as density-bound reward portals under sealed Q-table transfer. Not previously built.

## Architecture
- Single index.html (Canvas2D progressive; no external deps)
- Vicsek: 180 particles, periodic boundaries, neighbor radius and noise controlled by Q-agent
- Q-table: 5 alignment bins × 4 actions (noise+/-, radius+/-); ε-greedy
- Observation: global mean cosine of heading differences (alignment ∈ [0,1]), discretized
- 5 absolute-positioned DOM notes track top density bins; display current alignment and action
- Persistence: IndexedDB key `f801-qtable`; BroadcastChannel `f801-genome`
- Reward: click note → Q-update (α=0.2, γ=0.9) on last (s,a)
- Seal: stores table + fitness, broadcasts; adopt if higher fitness

## Expected outcome
Runnable offline prototype. Particles form swirling flocks whose coherence is steered by the Q-agent; notes float over dense regions. Clicking notes adapts the policy toward higher engagement. Seal shares the learned table across tabs. Graceful without any sensors (self-driven by flock statistics).

## Mechanics
1. Initialize random particle headings/positions, zero Q-table, ε=0.3.
2. Listen for BroadcastChannel, note clicks, Seal button.
3. Each frame: compute alignment, select action via ε-greedy, update Vicsek parameters, advance particles, bin densities, position notes, render.
4. On note click: perform Q-learning update for previous transition, increment fitness.
5. Seal: write Q-table + fitness to IndexedDB + postMessage; on receive, adopt if better fitness.

## Files
drafts/F801-vicsek-qtable-spatial-notes/SPEC.md
drafts/F801-vicsek-qtable-spatial-notes/index.html

## V01D landing
Vicsek Q-table spatial notes controller under void-live-deploy/skills/vicsek-qtable-notes-mind.js; test asserts alignment observation → Q-action → parameter change and BroadcastChannel table adoption.

Void is now Verse everywhere.
