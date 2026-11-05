# F567 Multi-Agent Local RNN DOM Competition Mind

**Slug**: `multiagent-rnn-dom-competition-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of SPH orientation genome particles (F566), genetic particle GA genomes (F565), SOM topographic audio-DOM (F564), rigid DOM competitive genomes (F563), RD attention verse (F562), DeviceOrientation LIF spikes (F561), ESRN UI morph (F560), Hopfield/FFT, adaptive quadtree. Explicitly leaves particle hydrodynamics (SPH/LBM), genetic algorithms, unsupervised topographic maps, rigid-body DOM physics, reaction-diffusion, spiking LIF, reservoirs, associative memories (Hopfield/ESRN), attention lattices/controllers, SDF/raymarch, softbody springs, pure NCA, Ising/Physarum/Lenia, orientation RNNs/MLPs as primary controllers, continuous field kernels, and pointer-history fields.

**Concept**  
A population of independent floating DOM cards, each embodying a tiny local Elman-style RNN (recurrent neural net with hidden state). Each agent's genome is its weight matrices. Inputs are causal: relative pointer position, DeviceOrientation angles, own position residual, and time. The RNN outputs velocity, scale, and hue bias that directly drive CSS transforms and appearance of its physical card. Agents compete for user attention (hover time, click seals, proximity stability). The highest-fitness agent can initiate a sealed genome transfer: its weights are hashed (SHA-256 prefix) and copied to a low-fitness peer, replacing the loser's mind while preserving a transfer receipt. State (positions, weights, hidden states, fitness) seals to IndexedDB for offline persistence and optional BroadcastChannel multi-tab sharing. The Verse canvas is a competitive spatial arena of local minds controlling living UI elements.

**Novelty**  
Leaves the dominant recent clusters of physics particle kernels, evolutionary GA breeding, topographic/associative neural maps, and continuous fields. Core novel combination is multi-agent competition among independent local tiny RNNs (not shared weights, not gradient descent, not GA) whose outputs directly actuate physical DOM elements in a hybrid embodiment, with sealed hash-verified genome transfer as the interaction primitive, DeviceOrientation as direct causal input vector to every agent (not external force), and IndexedDB-persistent competitive lineages. Previously unused: pure local recurrent minds as the primary controllers of competing spatial DOM agents with cryptographic seal on transfer.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Agents: 6–8 absolute-positioned DOM cards. Each holds weights (input-to-hidden 6x8, hidden-to-hidden 8x8, hidden-to-output 8x4), hidden state, pos, vel, fitness.  
- RNN step: tanh activations, simple Euler integration for position.  
- Fitness: +hover frames, +click, decay; top agent can "Absorb" a chosen low agent (hash check + transfer).  
- Sensors: pointer events + DeviceOrientation (gesture-gated permission).  
- IndexedDB store `f567-rnn-comp-mind` for full agent states.  
- Seal button; “Add Agent”, “Reset”, “Tilt Proxy”, “Force Transfer”.  
- BroadcastChannel `verse-rnn-genome` for optional transfer.  
- No Canvas; pure DOM + CSS. WebGPU unused (kernel not needed).

**Expected outcome**  
Runnable prototype: cards move and morph according to their private RNNs responding to pointer and tilt. Hovering boosts fitness; highest can absorb another’s mind via sealed transfer. Seal restores the competitive population and behaviors across reloads. Works offline.

**Mechanics**  
1. Initialize random weights or load from IndexedDB. Spawn DOM cards.  
2. Each frame: for each agent, form input vector, run RNN step, update hidden/pos/CSS.  
3. Track hover/click for fitness.  
4. On Absorb: compute hash of winner weights, copy to loser, log receipt.  
5. Orientation: feed alpha/beta/gamma (normalized) into every input.  
6. Seal: serialize all agents to IndexedDB.  
7. Drag optional to reposition (resets residual).

**Failure modes**  
- Orientation denied: zero sensor inputs, pointer-only.  
- IndexedDB blocked: in-memory.  
- Too many agents: cap at 8.  
- No gesture: sensors idle.  
- Hash collision (rare): transfer still proceeds with warning.

**Files**  
- drafts/F567-multiagent-rnn-dom-competition-mind/SPEC.md  
- drafts/F567-multiagent-rnn-dom-competition-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/multiagent-rnn-dom/` or canvas tool; test that DeviceOrientation changes agent velocities and that a sealed transfer produces matching weight hashes after reload.  
