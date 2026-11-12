# F707-pointer-rnn-css-grid-reflow-mind

**Plain name:** Pointer-driven living CSS grid mind  
**Job:** Move the pointer across the page. A local recurrent network watches the gesture history and continuously reflows a CSS grid of editable notes in response. Edit the cells, seal the weights, download the current mind state.  

**Concept**  
Novel combination never previously attempted: a pure-local Elman-style recurrent net (implemented in a Web Worker) whose hidden state is decoded directly into CSS `grid-template-columns`, `grid-gap`, and custom properties that physically reflow and recolor a living grid of contenteditable DOM cells. Pointer velocity history is the causal sequential input. Cell text length and edit events provide a mild feedback bias. The layout itself is the embodied spatial mind—no absolute-positioned agents, no particle fields, no canvas lattices, no WebGPU kernels as primary substrate.  

This deliberately leaves the recent cluster of WebGPU continuum solvers, gaze/hand policy rigid bodies, semantic n-gram clusterers, spring lattices, and CA-driven grids. Core novelty is the RNN reasoning directly authoring the CSS grid template of real editable content.  

**Architecture**  
- Single self-contained `index.html` (offline, no external deps).  
- 6 contenteditable grid cells seeded with short notes.  
- Web Worker (blob) runs the Elman RNN: input dim 4 (dx, dy, speed, bias), hidden 8, output 5 (three column fracs + gap + hue).  
- Main thread samples pointer, posts to worker ~30 Hz, receives outputs, applies to grid styles and CSS vars.  
- localStorage key `verse-f707-rnn-weights` for seal/restore.  
- Download button exports weights + current cell texts as JSON.  

**Mechanics**  
1. Pointermove accumulates recent deltas.  
2. Worker steps RNN, returns normalized outputs.  
3. Grid columns set to `minmax(0, Xfr)` values; gap and hue updated.  
4. Optional: text length of cells averaged as extra input bias.  
5. Seal button persists weights; reload restores.  

**Expected outcome**  
Moving the pointer causes the grid of notes to breathe, stretch, and recolor in a causal, history-dependent way. Editing notes feels like feeding the mind. Fully interactive offline. Layout remains usable.  

**Failure modes**  
- Worker blocked by CSP: falls back to main-thread RNN.  
- localStorage disabled: session-only.  
- Very narrow viewports: grid collapses gracefully to single column.  

**V01D landing**  
Pointer-RNN CSS-grid reflow skill under `void-live-deploy/skills/pointer-rnn-grid-reflow.js`; test asserts pointer delta sequence → worker step → grid-template-columns mutation and localStorage round-trip.  

**Files**  
- drafts/F707-pointer-rnn-css-grid-reflow-mind/SPEC.md  
- drafts/F707-pointer-rnn-css-grid-reflow-mind/index.html  

Void is now Verse everywhere.  
