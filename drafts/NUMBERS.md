# Draft numbers

Every frontier draft folder is `drafts/F<number>-<slug>`, and every number belongs to exactly one draft.

## The rule for new drafts

1. Get the number with `tools/next-draft-number.sh` (the highest number in `drafts/` and `ledger/frontier/`, plus one). Never pick a number by hand and never reuse the number of the draft you build on.
2. Name the folder `F<number>-<slug>` with no dash or leading zeros in the number (`F447-...`, not `F-447` or `F0447`).
3. Run `tools/check-draft-numbers.sh` before you commit. It fails when two folders share a number.
4. Name the Verse Brain part the draft extends (see the 2026-10-29 note in FRONTIER_LEDGER.md). A draft that extends no part, or only repeats one under a new name, is not a new draft.

## Renumbered on 2026-10-29

Before this, 33 numbers were shared by 80 folders (F197 by seven, F300 by five). In each shared number the oldest draft kept it, except F-237, which stays with the draft the frontier ledger records (spoken fluid intent). The other 47 drafts moved to F400 to F446, in the order they were first committed. Old names in FEATURE_LEDGER.md, FRONTIER_LEDGER.md and in Verse's own code (atomeam/void-loop cites drafts like F-022 and F-041) are history and were not rewritten: read them through this table.

| was | now | shared the number with (kept it) | first committed |
|---|---|---|---|
| F021-spatial-field-worker | F400-spatial-field-worker | F021-webgpu-reaction-diffusion-local-mind | 2026-10-16 |
| F026-spatial-graph-mind | F401-spatial-graph-mind | F026-pointer-trajectory-lattice-mind | 2026-10-16 |
| F026-webxr-nca-mindscape | F402-webxr-nca-mindscape | F026-pointer-trajectory-lattice-mind | 2026-10-17 |
| F022-webgpu-thought-gravity | F403-webgpu-thought-gravity | F022-webgpu-fluid-mind-morph | 2026-10-17 |
| F041-resonance-seeking-agents | F404-resonance-seeking-agents | F041-local-ai-portal-lattice-mind | 2026-10-17 |
| F044-spectral-resonance-lattice | F405-spectral-resonance-lattice | F044-neural-implicit-vector-mind | 2026-10-17 |
| F043-predictive-residual-lattice | F406-predictive-residual-lattice | F043-webgpu-compute-nca-pointer-mind | 2026-10-17 |
| F048-local-causal-echo-chamber | F407-local-causal-echo-chamber | F048-resonant-spatial-audio-mind | 2026-10-18 |
| F050-webxr-evo-density-morph | F408-webxr-evo-density-morph | F050-spectral-resonance-mind | 2026-10-18 |
| F187-lattice-autopoiesis | F409-lattice-autopoiesis | F187-webgpu-spectral-fluid-orientation-evo-mind | 2026-10-20 |
| F042-predictive-temporal-echo-mind | F410-predictive-temporal-echo-mind | F042-predictive-audio-particle-mind | 2026-10-20 |
| F050-evolving-attention-lattice-mind | F411-evolving-attention-lattice-mind | F050-spectral-resonance-mind | 2026-10-21 |
| F023-webxr-lattice-mind | F412-webxr-lattice-mind | F023-webgpu-evo-lattice-mind | 2026-10-21 |
| F190-webgpu-causal-memory-field-orbs | F413-webgpu-causal-memory-field-orbs | F190-webgpu-orientation-neural-particles | 2026-10-21 |
| F196-webgpu-embedding-lattice-mind | F414-webgpu-embedding-lattice-mind | F196-deviceorientation-webgpu-springmass-hybrid | 2026-10-21 |
| F196-webxr-causal-attention-lattice | F415-webxr-causal-attention-lattice | F196-deviceorientation-webgpu-springmass-hybrid | 2026-10-21 |
| F197-webgpu-sonified-thought-field | F416-webgpu-sonified-thought-field | F197-webgpu-neural-kernel-competition-field | 2026-10-21 |
| F197-local-embedding-morph-field | F417-local-embedding-morph-field | F197-webgpu-neural-kernel-competition-field | 2026-10-21 |
| F200-webgpu-causal-fluid-mind | F418-webgpu-causal-fluid-mind | F200-webxr-hand-rnn-dom-physics | 2026-10-21 |
| F201-webgpu-embodied-rnn-morph | F419-webgpu-embodied-rnn-morph | F201-webgpu-multiagent-sealed-genome-competition | 2026-10-21 |
| F205-rd-attention-kernel | F420-rd-attention-kernel | F205-webrtc-orientation-dom-agent-competition | 2026-10-21 |
| F197-webgpu-predictive-spectral-constellation | F421-webgpu-predictive-spectral-constellation | F197-webgpu-neural-kernel-competition-field | 2026-10-21 |
| F206-webgpu-sequence-transformer-morph | F422-webgpu-sequence-transformer-morph | F206-orientation-mlp-dom-physics-competition | 2026-10-21 |
| F197-webgpu-fluid-policy-mind | F423-webgpu-fluid-policy-mind | F197-webgpu-neural-kernel-competition-field | 2026-10-21 |
| F197-local-spatial-token-mind | F424-local-spatial-token-mind | F197-webgpu-neural-kernel-competition-field | 2026-10-21 |
| F197-webgpu-acoustic-swarm-mind | F425-webgpu-acoustic-swarm-mind | F197-webgpu-neural-kernel-competition-field | 2026-10-21 |
| F225-acoustic-causal-lattice-orbs | F426-acoustic-causal-lattice-orbs | F225-surprisal-strata | 2026-10-21 |
| F232-resonant-neural-membrane | F427-resonant-neural-membrane | F232-webxr-hand-particle-genome-arena | 2026-10-22 |
| F233-webgpu-acoustic-attention-orbs | F428-webgpu-acoustic-attention-orbs | F233-panel-play | 2026-10-22 |
| F247-webgpu-causal-token-swarm-mind | F429-webgpu-causal-token-swarm-mind | F247-webxr-gaze-rnn-dom-portals | 2026-10-23 |
| F254-sealed-genome-competitive-swarm | F430-sealed-genome-competitive-swarm | F254-orientation-webgpu-sealed-physics-arena | 2026-10-24 |
| F254-webgpu-embedding-cluster-memory-palace | F431-webgpu-embedding-cluster-memory-palace | F254-orientation-webgpu-sealed-physics-arena | 2026-10-24 |
| F220-webgpu-mlp-sph-genome-competition | F432-webgpu-mlp-sph-genome-competition | F220-window-spanning-organism | 2026-10-24 |
| F254-webgpu-multiagent-genome-competition | F433-webgpu-multiagent-genome-competition | F254-orientation-webgpu-sealed-physics-arena | 2026-10-25 |
| F260-orient-attention-softbody | F434-orient-attention-softbody | F260-orientation-rnn-physical-ui-competition | 2026-10-26 |
| F261-webgpu-density-attractor-ai-audio | F435-webgpu-density-attractor-ai-audio | F261-webgpu-orientation-nca-portal-mind | 2026-10-26 |
| F270-webgpu-causal-intent-attention-cards | F436-webgpu-causal-intent-attention-cards | F270-webgpu-nca-llm-steered-morph | 2026-10-27 |
| F237-orient-webgpu-mlp-dom | F437-orient-webgpu-mlp-dom | F237-spoken-fluid-intent | 2026-10-27 |
| F285-causal-webgpu-softbody-attention-mind | F438-causal-webgpu-softbody-attention-mind | F285-webgpu-softbody-genome-arena | 2026-10-28 |
| F285-webxr-hand-genome-competition | F439-webxr-hand-genome-competition | F285-webgpu-softbody-genome-arena | 2026-10-28 |
| F286-webgpu-online-learning-spatial-agent | F440-webgpu-online-learning-spatial-agent | F286-webrtc-sealed-rnn-orientation-shared-arena | 2026-10-28 |
| F300-webgpu-interference-reservoir-morph | F441-webgpu-interference-reservoir-morph | F300-orient-causal-mlp-physical-dom-agents | 2026-10-28 |
| F-300-kuramoto-phase-lock-mind | F442-kuramoto-phase-lock-mind | F300-orient-causal-mlp-physical-dom-agents | 2026-10-28 |
| F300-webgpu-nca-spatial-memory-mind | F443-webgpu-nca-spatial-memory-mind | F300-orient-causal-mlp-physical-dom-agents | 2026-10-28 |
| F300-webgpu-causal-wave-portal-mind | F444-webgpu-causal-wave-portal-mind | F300-orient-causal-mlp-physical-dom-agents | 2026-10-28 |
| F313-webgpu-nca-spatial-memory-mind | F445-webgpu-nca-spatial-memory-mind | F313-webgpu-causal-motion-rnn-hybrid-sculpt | 2026-10-28 |
| F314-webgpu-nca-xr-residual-mind | F446-webgpu-nca-xr-residual-mind | F314-webgpu-multi-mlp-swarm-arena | 2026-10-28 |
| F200-webgpu-lbm-evolved-swimmers-mind | F447-webgpu-lbm-evolved-swimmers-mind | F200-webxr-hand-rnn-dom-physics | 2026-10-29 |
