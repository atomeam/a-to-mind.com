# F516-webmidi-local-rnn-spatial-score-mind

**Ledger ID**: F-516  
**Slug**: webmidi-local-rnn-spatial-score-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of WebGPU NCA, particle spatial audio, MLP auctions, quantum walks, WebXR hands (F505–F515). Explicitly leaves NCA lattices, particle genomes, auction bidding, quantum amplitudes, Lorentz fields, and pure DOM card embodiment. Introduces Web MIDI API as the primary input substrate (previously unused), a local pure-JS RNN as the improvising mind, a spatial score canvas where notes are positioned in a navigable 2D field that feeds back into the RNN, and sealed motif cards.

**Concept**  
A local recurrent neural network (tiny pure-JS RNN with residual update) improvises MIDI note sequences in response to live Web MIDI input or user clicks on a spatial canvas. Incoming notes (or synthetic if no device) are injected into the RNN; the network’s next-note prediction is rendered as a new point in a 2D spatial score (spiral or force-relaxed layout). The canvas itself is interactive: clicking places a note that updates both the sequence and the RNN hidden state. Clusters of related notes spawn floating, draggable DOM “motif” cards whose position and style reflect the local density and pitch range. Dragging a motif card re-injects its notes into the score at the new location, feeding the RNN. All notes play through Web Audio oscillators with simple spatial panning derived from canvas X position. Full state (RNN weights, hidden state, note sequence, motif poses) seals to IndexedDB for offline restore. Fully self-contained single file, progressive enhancement (MIDI optional), offline-capable after first load.

**Why novel**  
Grep of drafts before this run: webmidi 0, Web MIDI 0, midi access 0. Prior spatial audio was emitter-driven from particles or NCA; this is the first MIDI-native improvising mind whose score geometry is both the visualization and the editable memory substrate. The RNN is local, the geometry feeds back, and motifs are physical DOM objects that rewrite the score.

**Architecture**  
- `index.html`: single-file prototype.  
  - Web MIDI API for input (graceful fallback to click-only).  
  - Pure-JS RNN (input dim 1 + bias, hidden 12, residual, tanh) for next-note prediction.  
  - Canvas2D spatial score: notes as colored circles connected by age-fading lines; layout is a growing spiral with slight repulsion.  
  - Web Audio oscillators + StereoPannerNode driven by note X-coordinate.  
  - DOM motif cards absolute-positioned, draggable; drag end re-seeds notes.  
  - IndexedDB for seal/restore of weights, sequence, motifs.  
  - Pointer events on canvas inject notes.

**Expected outcome**  
Interactive spatial score: notes appear and sound as the RNN improvises or user clicks; MIDI devices (if present) drive the system; motif cards spawn and can be dragged to rewrite the score; seal/restore works; runnable offline; progressive enhancement when MIDI or Web Audio is limited.

**Mechanics**  
- MIDI note-on → inject pitch into RNN → predict next → place at spiral angle → play + pan.  
- Click on canvas → same inject path.  
- Density threshold → spawn motif card with summary pitch range.  
- Drag motif → translate associated notes → re-inject average pitch to RNN.  
- Seal button writes full genome + geometry to IndexedDB.

**Failure modes**  
- No MIDI device: falls back to click injection and auto-improvise loop.  
- Web Audio blocked: visual score still updates.  
- Large sequences: cull old notes beyond 200 to keep canvas responsive.  
- IndexedDB unavailable: seal shows unattested toast.

**Void is now Verse everywhere.**  
This prototype expands the Verse canvas with a MIDI-native, locally improvising, spatially editable score mind.
