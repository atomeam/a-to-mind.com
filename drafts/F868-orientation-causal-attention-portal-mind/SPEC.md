# F868 — Orientation Causal Attention Portal Mind

## Concept
Living CSS portals on The Verse canvas are driven by a tiny local causal attention mechanism. A sliding window of recent DeviceOrientation (β, γ) and pointer residual velocity forms a sequence of sensor tokens. A single-head attention (Q/K/V linear maps, dim 8) pools the sequence into a control vector that is mapped to per-portal forces and hues. Portals integrate the forces with soft walls and mild repulsion. Clicking a portal injects a positive reward that performs a simple online delta-rule update on the Q/K/V weights toward the current configuration. Seal writes the adapted weights to IndexedDB and broadcasts via BroadcastChannel so other tabs can adopt the controller. A faint canvas trail visualizes the attention-weighted history. Fully offline after load; progressive enhancement (pointer residual if orientation unavailable).

## Novelty
Leaves the dominant recent clusters of continuum fields (NCA, Gray-Scott, heat, Cahn-Hilliard, LBM), particle/physics kernels (SPH, Verlet, DEM, Vicsek, boids), generative grammars (L-systems), spatial self-attention fields (F851), echo-state/reservoir readouts (F863/F865), multi-agent genome tiles, and evolutionary MLPs. Core novel combination is causal (temporal) attention over a sensor history stream as the local mind, reward-adapted by direct portal interaction, spatially embodied as orientation-biased living portals with sealed transfer. Not a fixed reservoir, not spatial lattice attention, not continuum, not multi-agent genomes.

## Architecture
- Single self-contained index.html
- Sequence buffer: last T=12 samples of (β/90, γ/90, vx, vy) + bias
- Attention: 1 head, d=8; Q, K, V are small matrices (updated by delta rule)
- Pooled output → linear map to [fx, fy, hue] per portal (6 portals)
- Physics: Euler integration + soft boundary + pairwise repulsion
- Reward: click → Q/K/V += lr * outer(state, error) (delta rule on pooled target)
- Seal: IndexedDB key `verse-f868-attn` + BroadcastChannel `f868-attn`
- Visualization: canvas trail of attention-weighted history points
- Fallbacks: no DeviceOrientation → pointer velocity as tilt proxy; no IDB → sessionStorage

## Expected outcome
Open the page: portals drift under the influence of the causal attention controller. Tilt the device (or move the pointer): the sensor sequence shifts, attention re-weights, and portals respond with new forces and colors. Click a portal to reward the current configuration; the Q/K/V maps adapt. Seal preserves the adapted weights; open a second tab to receive them. Offline after load. Interactive spatial local causal-attention mind for Verse.

## Failure modes
- DeviceOrientation permission denied or unavailable → pointer residual.
- Low-end device → reduce T or portal count.
- IndexedDB quota or blocked → no persistence across reloads.
- Attention collapse (all mass on one token) → occasional diversity noise on weights.

## Building blocks
Reusable pure-JS causal attention over sensor streams + orientation/pointer drive + reward-gated weight adaptation + CSS physical portal embodiment + sealed BroadcastChannel transfer. Enables future multi-head or WebGPU-accelerated attention kernels on Verse.

Void is now Verse everywhere.
