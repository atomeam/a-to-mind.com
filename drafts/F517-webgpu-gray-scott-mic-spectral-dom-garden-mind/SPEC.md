# F517-webgpu-gray-scott-mic-spectral-dom-garden-mind

**Ledger ID**: F-517  
**Slug**: webgpu-gray-scott-mic-spectral-dom-garden-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of WebMIDI RNN spatial scores (F516), MLP-auction DOM (F515), acoustic-swarm consonance (F514), MLP-voter (F513), entangled-pair portals (F512), quantum-walk observers (F510), Lorentz magnetic WebXR (F511), spectral resonance (F508), SPH hand-gaze RNN (F509). Explicitly leaves NCA/Lenia, particle force MLPs, fluid advection (stable fluids/SPH/LBM), spectral wavefields, quantum amplitudes, magnetic forces, entanglement, voter models, MIDI improvisation, phase oscillators, softbody/tensegrity, and pure DOM card embodiment. Introduces Gray-Scott reaction-diffusion as the primary mind substrate (previously unused), real-time microphone spectral bands as causal modulators of feed/kill/diffusion parameters, local evolutionary strategy over those parameters, hybrid high-V-spot-to-DOM organism garden embodiment, and sealed genome.

**Concept**  
A Gray-Scott reaction-diffusion system evolves on a Canvas2D lattice (WebGPU compute path reserved as next kernel for the Laplacian). Microphone FFT bins (low/mid/high energy) continuously bias the global feed rate \(F\), kill rate \(k\), and diffusion coefficients. A local Web Worker maintains a tiny evolutionary strategy (population of genomes) that proposes parameter sets; fitness is a combination of field entropy, number of stable spots, and user interactions (clicks inject U, drags reseed). Detected local maxima of the V-species spawn floating DOM “organism” cards whose CSS position tracks the spot, scale tracks concentration, hue tracks local F/k bias, and which can be dragged to relocate and reseed the lattice. Best genome seals to IndexedDB. Fully self-contained single file, progressive enhancement (mic optional; pointer fallback), offline after first load.

**Why novel**  
Grep of drafts before this run: Gray-Scott / gray-scott / greyscott = 0. Prior RD systems were classic activator-inhibitor or Lenia/NCA; this is the first Gray-Scott primary substrate whose parameters are live-modulated by microphone spectral energy rather than residual predictors or pointer history alone. Spot-to-DOM embodiment with drag-reseed is new for this kernel.

**Architecture**  
- `index.html`: single-file prototype.  
  - Canvas2D Gray-Scott update (explicit Euler, 128×128 or adaptive).  
  - Web Audio AnalyserNode → spectral bands → parameter modulation.  
  - Web Worker evolutionary strategy (genomes = [F, k, Du, Dv] offsets).  
  - DOM organism cards (absolute, draggable) spawned from V-maxima.  
  - IndexedDB seal/restore of best genome + optional field hash.  
  - Pointer clicks inject chemical; drag-end reseeds.

**Expected outcome**  
Interactive living garden: field patterns emerge and shift with ambient sound or voice; spots grow into draggable organism cards; evolutionary pressure improves complexity over time; seal/restore works; runnable offline; graceful without mic.

**Mechanics**  
- Mic energy bands bias F/k/diffusion each frame.  
- Worker proposes genome; main thread evaluates fitness (entropy + spots + clicks).  
- Local V maxima above threshold → spawn or update DOM card.  
- Drag card → map drop position back to grid and inject V.  
- Seal button writes genome to IndexedDB.

**Failure modes**  
- No mic / permission denied → static or pointer-driven parameters; still fully interactive.  
- Low-end devices → reduce grid resolution automatically.  
- IndexedDB blocked → seal shows unattested toast.  
- Web Audio blocked until user gesture.

**Void is now Verse everywhere.**  
This prototype expands the Verse canvas with a microphone-modulated Gray-Scott garden mind whose organisms are physical DOM objects.
