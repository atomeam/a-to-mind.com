# F738 DeviceOrientation HMM State DOM Portals Mind

**Ledger ID**: F-738 (frontier series)  
**Slug**: deviceorientation-hmm-state-dom-portals-mind  
**Date**: 2026-11-13  
**Status**: frontier prototype  

## Concept
A novel hybrid spatial interface for The Verse canvas: a local Hidden Markov Model (HMM) whose observations are binned DeviceOrientation angles and pointer velocity history. The inferred hidden state (via forward algorithm or Viterbi) represents a "user mode" that causally controls the physical behavior of a swarm of absolute-positioned DOM portals. Different states change attraction rules, velocity noise, and visual style. Portals compete via spatial overlap; the higher-fitness portal seals and transfers a mutated copy of its HMM genome (transition matrix + emission probabilities) over BroadcastChannel and to IndexedDB. Fully offline after load, single self-contained file.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum/discrete field kernels (Gray-Scott RD F732, LBM fluid F733, attention-particle F734, spiking neural portals F731), orientation Hebbian linear associators (F737), deviceorientation kNN spatial notes (F735), expression-tree GP swarms (F712), genetic L-systems (F724), and prior residual/attention/NCA/SPH/softbody/orientation-RNN substrates.  

Core novel combination is a non-neural probabilistic state machine (HMM, never previously used in the series) whose causal input is DeviceOrientation + pointer history controlling physical living DOM agents under multi-agent fitness competition with sealed genome transfer. Not field substrates, not rate-based or spiking neural nets, not linear Hebbian, not k-NN retrieval, not genetic programming trees.

## Architecture
- Single index.html, pure HTML/CSS/JS, no libraries, no network after load.
- 6–8 absolute-positioned DOM portal cards.
- HMM: 4 hidden states (Wander, Cluster, Orbit, Freeze). Observations: discretized orientation beta/gamma (3 bins each) + pointer speed (3 bins) → 27 possible observations (simplified to 9 for compactness).
- Forward algorithm maintains belief over states; MAP state drives portal update rules.
- Fitness: click/dwell reward, decays. Overlap → genome transfer + mutation.
- Persistence: IndexedDB key `verse-f738`. BroadcastChannel `f738-genome`.
- Canvas2D overlay visualizes state probability bars and optional Viterbi path.
- Fallback: pointer velocity and mouse position substitute for orientation.

## Mechanics
1. Initialize random transition matrix (row-stochastic) and emission probs per agent.
2. Each frame: sample observation from sensors, update forward probabilities, take MAP state.
3. Apply state-dependent motion: Wander (high noise), Cluster (attract to centroid), Orbit (tangential around pointer), Freeze (low velocity).
4. User clicks a portal to reward fitness. Overlap triggers transfer of mutated matrices.
5. Seal button persists best genome. Open second tab to see migration.
6. Tilt device or move pointer to change observations and thus inferred state.

## Expected outcome
Open page, grant orientation permission (or use pointer). Watch portals change collective behavior as the HMM infers different modes from tilt/pointer. Click to reward; overlapping portals exchange genomes. Seal and reload restores the preferred state machine. Second tab receives transferred genomes. Fully interactive offline.

## Failure modes
- DeviceOrientation denied/unavailable: pointer residual only (still functional).
- IndexedDB blocked: session memory only.
- BroadcastChannel unavailable: local competition only.
- Numerical instability in forward: renormalize each step; clamp probs.

## Building blocks
Reusable pure-JS HMM forward filter, orientation-to-hidden-state causal mapping, overlap-gated sealed probabilistic-genome transfer over BroadcastChannel + IndexedDB, state-dependent hybrid DOM embodiment. Ready for richer observation features or WebXR hand as additional observation channel.

Void is now Verse everywhere.

**Files**
- drafts/F738-deviceorientation-hmm-state-dom-portals-mind/SPEC.md
- drafts/F738-deviceorientation-hmm-state-dom-portals-mind/index.html
