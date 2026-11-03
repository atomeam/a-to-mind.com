# F518-webgpu-wave-membrane-rnn-pin-dom-mind

**Ledger ID**: F-518  
**Slug**: webgpu-wave-membrane-rnn-pin-dom-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of Gray-Scott mic-spectral garden (F517), WebMIDI RNN spatial score (F516), MLP-auction DOM (F515), acoustic-swarm consonance (F514), MLP-voter (F513), entangled-pair portals (F512), quantum-walk observers (F510), Lorentz magnetic WebXR (F511). Explicitly leaves reaction-diffusion (Gray-Scott/Lenia/NCA), particle force MLPs, fluid advection (stable fluids/SPH/LBM), spectral wavefields as primary, quantum amplitudes, magnetic forces, entanglement, voter models, MIDI improvisation as primary, phase oscillators, softbody/tensegrity, and pure DOM card embodiment. Introduces finite-difference 2D wave equation on a membrane as the primary mind substrate (previously unused), local causal RNN that modulates a spatially varying damping field from pointer residual history and local amplitude energy, hybrid high-crest-to-DOM pin/resonator embodiment with drag-to-pin, and sealed genome.

**Concept**  
A 2D wave equation (finite-difference, Canvas2D primary; WebGPU compute path reserved for the Laplacian/update kernel) evolves on a membrane. Pointer clicks/drags strike the surface, injecting velocity. A local Web Worker maintains a tiny residual RNN (or evolutionary genomes of damping offsets) whose input is recent pointer velocity residual + mean kinetic energy; output modulates a low-resolution damping map that damps or sustains waves. Local amplitude maxima above threshold spawn floating DOM “resonance pin” cards whose CSS position tracks the crest, scale tracks |u|, hue tracks local damping; cards can be dragged and dropped to place persistent pins (Dirichlet zero-boundary points that reflect). Best damping genome seals to IndexedDB. Optional Web Audio oscillator bank driven by local peak frequencies. Fully self-contained single file, progressive enhancement (pointer always works), offline after first load.

**Why novel**  
Grep of drafts before this run: wave-equation / membrane / finite-difference-wave / 2d-wave = 0 as primary substrate. Prior wave-like systems were spectral resonance fields, acoustic particle swarms, or Kuramoto phase; this is the first explicit 2D wave-membrane mind whose damping is live-controlled by a local RNN, with physical DOM pins that alter boundary conditions.

**Architecture**  
- `index.html`: single-file prototype.  
  - Canvas2D finite-difference wave update (64×64 or adaptive, two previous frames).  
  - Web Worker residual RNN (4→6→2) or simple evolutionary strategy over damping genomes.  
  - DOM resonance-pin cards (absolute, draggable) spawned from |u| maxima; drop places pin.  
  - IndexedDB seal/restore of best genome + optional field hash.  
  - Pointer strike injection; optional Web Audio tone from energy.  
  - WebGPU noted as next for larger grids / compute kernel.

**Expected outcome**  
Interactive membrane mind: waves propagate, reflect off pins, sustain or decay under RNN control; pins are physical DOM objects you can place; evolutionary/RNN pressure favors interesting standing patterns; seal/restore works; runnable offline; graceful on low-end devices.

**Mechanics**  
- Wave: u_tt = c² ∇²u - damping·u_t; explicit Euler, c≈0.5, dt=1.  
- RNN input: pointer residual (dx,dy), mean |u|, max |u|; output global + local damping bias.  
- Local |u| maxima → spawn/update DOM pin card.  
- Drag-end on card → map to grid, set pin (u=0 permanently).  
- Seal button writes genome to IndexedDB.  
- Chrome morph: canvas filter or overlay hue from mean energy.

**Failure modes**  
- High resolution → CPU bound; auto-drop to 48×48.  
- Too many pins → over-constrain; cap at 12.  
- IndexedDB blocked → seal shows unattested toast.  
- Web Audio blocked until user gesture.  
- Numerical instability if c too high (clamped).

**Void is now Verse everywhere.**  
This prototype expands the Verse canvas with a wave-membrane RNN pin mind whose resonators are physical DOM objects that rewrite the boundary conditions.

**Files**  
drafts/F518-webgpu-wave-membrane-rnn-pin-dom-mind/SPEC.md  
drafts/F518-webgpu-wave-membrane-rnn-pin-dom-mind/index.html

**V01D landing**  
Spatial stage skill under void-live-deploy/skills/wave-membrane-rnn-pin-dom-mind.js; test asserts wave update → amplitude sample, RNN output → damping modulation, pin drop → boundary zero, seal hash integrity.
