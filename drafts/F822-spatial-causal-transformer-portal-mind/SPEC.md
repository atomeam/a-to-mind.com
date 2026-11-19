# F822 Spatial Causal Transformer Portal Mind

**Plain name:** Gesture Sequence Attention Portals  
**Job:** A local pure-JS multi-head attention mechanism processes a short sequence of pointer spatial events as tokens and produces an intent focus field that physically attracts, scales, and recolors floating DOM content portals on the Verse canvas. Attention patterns are visualized live; click rewards update projection weights. Fully offline, single-file.

**Ledger ID:** F-822  
**Slug:** spatial-causal-transformer-portal-mind  
**Date:** 2026-11-18  
**Branch from:** Recent cluster of speech-driven flowcharts (F821), local HMM spatial intent (F809), k-NN SVG morph swarms, WebGPU radiosity causal MLPs, online particle MLPs, content-attention note forces, and sealed-genome competitions. Also leaves pure residual predictors, ESN reservoirs, orientation MLPs, and continuum physics substrates.

**Concept**  
Pointer move events are buffered as a fixed-length sequence of spatial tokens (normalized x, y, vx, vy, dt). A tiny local multi-head self-attention block (pure JavaScript, no libraries) computes attention over the sequence to emit a soft focus point and per-portal affinity scores. Floating absolute-positioned DOM portals (editable notes/cards) are spring-attracted toward the focus and their size/hue is modulated by affinity. A 2D canvas overlays the raw attention heat and token trajectories. User clicks on a portal act as a positive reward that performs a simple Hebbian update on the query/key projections, reinforcing the current spatial pattern. Weights and portal content persist in IndexedDB. Pointer and touch always available; no external AI or network required.

**Novelty**  
Leaves the dominant recent cluster of continuous kinematic/sensor inputs driving local MLPs/RNNs/ESNs that modulate physics fields, SVG filters, radiosity, particles, softbodies, or flowchart boxes. Core novel combination is an explicit causal sequence model using multi-head self-attention (not residual, not Hopfield, not k-NN, not HMM, not full RNN) whose tokens are raw spatial events, directly controlling the physical layout and appearance of living DOM portals via affinity-driven springs. Not a simulation substrate on canvas alone, not speech commands, not sealed genomes as primary mechanic, not pure manual drag.

**Architecture**  
- Single index.html (progressive enhancement).  
- Event buffer: ring of last 12–16 pointer samples.  
- Attention: 2–4 heads, d_model=8, simple scaled dot-product, softmax, output projection → focus (x,y) + 4 portal affinities.  
- Portals: 4 absolute divs with contenteditable, spring physics toward focus, CSS transform/scale/filter by affinity.  
- Visualization: <canvas> drawing token path + attention-weighted heat.  
- Update: on portal click, positive reward nudges Q/K weights toward current token embeddings.  
- Persistence: IndexedDB "f822-transformer" for weights + portal HTML/positions.  
- Seal button freezes weights.  

**Expected outcome**  
Open the page. Move the pointer in deliberate patterns (circles, sweeps, clusters). Portals drift toward the inferred focus and grow when affinity is high. Click a portal to reinforce; patterns stabilize. Reload restores layout and weights. Works on desktop and mobile (touch as pointer).

**Failure modes**  
- No pointer events: static portals, message shown.  
- IndexedDB blocked: session-only.  
- Very rapid motion: buffer saturates gracefully.  
- Low-end device: attention computed every 2–3 frames.

**Building blocks**  
Reusable pure-JS multi-head attention on spatial event sequences for future causal sequence minds on Verse. Affinity-spring DOM portal control. IndexedDB weight + content seal.

Void is now Verse everywhere.

**Files**  
drafts/F822-spatial-causal-transformer-portal-mind/SPEC.md  
drafts/F822-spatial-causal-transformer-portal-mind/index.html  
