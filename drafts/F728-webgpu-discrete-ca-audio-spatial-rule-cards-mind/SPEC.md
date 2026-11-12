# F728-webgpu-discrete-ca-audio-spatial-rule-cards-mind

**Ledger ID**: F-728 (frontier series)  
**Slug**: webgpu-discrete-ca-audio-spatial-rule-cards-mind  
**Date**: 2026-11-12  
**Status**: frontier prototype  

## Concept
Novel combination never previously attempted on The Verse canvas: a discrete cellular automaton (multi-rule Life-like or custom birth/survival) computed on WebGPU compute (Canvas2D ImageData fallback) whose local rule parameters can be painted in spatial regions by dragging absolute-positioned DOM “rule cards”. Emergent global density, entropy, and activity statistics continuously modulate a pure Web Audio synthesizer (FM + filtered noise + simple sequencer from CA activity). User clicks reinforce preferred rule cards. Best rule sets + positions seal to IndexedDB and transfer via BroadcastChannel. Pointer residual or DeviceOrientation as optional global bias. Fully offline after load.

This leaves the recent cluster of continuum WebGPU kernels (path-tracer spheres, quantum-phase, Gaussian splats, Gray-Scott volume, Lennard-Jones, photonic waveguide), particle/MLP/RNN/decision-tree policies on orientation/hand/gamepad/speech, softbody/spring systems, and pure DOM portals. Core novelty is discrete CA substrate + spatial DOM rule painting + closed-loop audio embodiment + sealed rule genome.

## Architecture
- Single self-contained `index.html`, pure HTML/CSS/JS, no libraries.
- CA: 128×128 binary or multi-state grid.
- WebGPU: compute shader for parallel neighbor-count + rule application (fallback: JS loop + putImageData).
- DOM cards: 4–6 absolute-positioned rule cards (contenteditable labels + number inputs for B/S thresholds or custom rule bits). Drag to define circular influence regions that override local rules.
- Audio: AudioContext + OscillatorNode + BiquadFilter + Gain; parameters mapped from density, entropy, and per-card activity. Optional short sequence from recent birth events.
- Persistence: IndexedDB `verse-f728-rules`. BroadcastChannel `f728-genome`.
- Controls: Play/Pause CA, Seal Best, Download JSON, Share Link, Reset, Add Rule Card.

## Mechanics
1. Initialize random or glider seed CA; default Life rules (B3/S23).
2. User drags rule cards; their position defines a radius where local birth/survival thresholds differ.
3. Each step: count neighbors (WebGPU or JS), apply spatially varying rules, update grid, render as color field.
4. Compute stats → modulate audio pitch, filter cutoff, amplitude, and a simple rhythmic pulse.
5. Click a card or the field to reward that rule set (fitness++).
6. Seal serializes cards + global rule + fitness to IndexedDB; BroadcastChannel shares lower-entropy or higher-fitness genomes.

## Expected outcome
Open the page. Start the CA: patterns emerge and the synthesizer sings in response to density and activity. Drag rule cards across the field to create spatial “biomes” with different behaviors. Audio morphs as the ecology changes. Seal and open a second tab to transfer preferred rules. Works offline; Canvas2D path if no WebGPU.

## Failure modes
- No WebGPU: automatic Canvas2D fallback with note.
- AudioContext suspended until user gesture: button to resume.
- IndexedDB unavailable: in-memory only + JSON download.
- Too many cards: soft cap at 8.

## Building blocks for next experiments
Reusable WebGPU discrete CA kernel with spatially varying rule uniforms, DOM-to-GPU region painting, CA-stat → Web Audio parameter mapping, sealed rule genome transfer.

Void is now Verse everywhere.

**Files**
- drafts/F728-webgpu-discrete-ca-audio-spatial-rule-cards-mind/SPEC.md
- drafts/F728-webgpu-discrete-ca-audio-spatial-rule-cards-mind/index.html
