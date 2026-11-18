# F809 Local HMM Spatial Intent DOM Mind

**Ledger ID**: F-809 (frontier series)  
**Slug**: local-hmm-spatial-intent-dom-mind  
**Date**: 2026-11-18  
**Plain name**: HMM Intent Field  

## Concept
A previously unused primary substrate for The Verse canvas: a local Hidden Markov Model (HMM) whose latent intent states (explore / focus / cluster / disperse) are inferred from sequential causal observations (pointer velocity history + optional DeviceOrientation tilt). The decoded state drives a continuous attractor field that repositions, scales, and recolors a swarm of absolute-positioned living DOM thought-cards. Clicking a card injects a positive reward that performs a simple Baum-Welch-style local update biased toward the current observation, reinforcing preferred intents. A Canvas2D background visualizes the posterior state probabilities as a living color field. Seal button hashes the transition/emission parameters and stores them in IndexedDB; BroadcastChannel `f809-genome` allows higher-fitness parameter sets to migrate across tabs. Fully self-contained single-file HTML, offline after first load, pointer-only fallback.

## Novelty
Leaves the recent cluster of lattice-gas orientation MLP (F808), local GA seating (F807), WebXR hand gravity MLP (F806), WebAudio waveguide wavefield (F805), spatial task board MLP (F804), LBM fluid recurrent (F803), DeviceMotion ESN particle-life (F802), Vicsek Q-table notes (F801), battery-Kalman gravity (F800). Core novel combination is a discrete-state probabilistic sequential model (HMM, not MLP/RNN/ESN/Q-table/decision-tree/GA) as the primary mind, whose latent intents physically rearrange living DOM cards via an attractor field, with reward-gated local parameter updates and sealed genome transfer. Not continuum physics kernels, not particle swarms under forces, not residual predictors, not spectral or audio primary, not WebXR hand/gaze.

## Architecture
- Single index.html, pure HTML/CSS/JS, no libraries.
- Observations: 4-bin quantized pointer speed + direction + optional tilt magnitude.
- HMM: 4 states, 4 observation symbols; transition matrix A (4x4), emission matrix B (4x4); online local updates on reward (increase probability of current path).
- Cards: 8–12 absolute DOM divs with CSS transforms driven by state-specific attractors (centers, spreads).
- Visualization: Canvas2D fills with blended state colors weighted by current posterior.
- Persistence: IndexedDB key `verse-f809-hmm`.
- Shared: BroadcastChannel `f809-genome`.

## Expected outcome
User moves pointer or tilts; cards fluidly reconfigure according to inferred intent (spreading on high velocity, clustering on low). Clicking reinforces the mode. Seal saves and can migrate the mind. Background color field shows the living posterior. Offline, responsive, pointer always works.

## Mechanics
1. Initialize random A/B matrices (row-stochastic).
2. On each frame: quantize observation o_t, run forward algorithm for posterior, update card positions toward state-specific targets with damping.
3. On card click: local multiplicative update to A and B favoring the recent path, normalize.
4. On seal or high fitness: broadcast hashed parameters; accept if better.
5. Restore on load from IndexedDB.

## Failure modes
- No orientation: pointer only.
- IndexedDB private mode: session only.
- Too many cards: clamp to 12.
- Numerical underflow in forward: log-space or normalize frequently.

Void is now Verse everywhere.

**Files**: drafts/F809-local-hmm-spatial-intent-dom-mind/SPEC.md, drafts/F809-local-hmm-spatial-intent-dom-mind/index.html
