# F561 DeviceOrientation LIF Spike Audio Mind

**Slug**: `deviceorientation-lif-spike-audio-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of WebGPU ESRN UI morph (F560), FFT Hopfield spatial memory (F559), WebXR hand/gaze Hopfield/electrostatic, attention SDF portals, competitive genomes, intersection evo particles. Explicitly leaves associative memories (Hopfield/ESRN), spectral embeddings, particle swarms, SDF/portals, WebXR controllers, IntersectionObserver attention, NCA, and DOM morph via continuous rate-based states.

**Concept**  
A full-canvas spatial visualization of a 2D grid of Leaky Integrate-and-Fire (LIF) spiking neurons. DeviceOrientation (beta/gamma tilt) injects biased input current into the grid edges and modulates leak rates, causing propagating waves of discrete spikes. Each spike lights a cell on Canvas2D and triggers a short, spatially panned WebAudio oscillator burst whose frequency maps to grid position. The mind “hears” its own spikes as an emergent soundscape. Seal persists membrane potentials and a compact spike-count summary to IndexedDB. Fully offline single-file prototype. Mouse fallback simulates orientation. No WebGPU, no rate-based reservoirs, no Hopfield recall, no FFT, no DOM agents as primary, no evolutionary GA.

**Novelty**  
Leaves the dominant recent clusters of continuous rate-based neural fields (ESRN, Hopfield, attention) driving particles/DOM/portals, WebXR sensor controllers, spectral memory, and competitive genomes. Core novel combination is a discrete-event Spiking Neural Network (LIF) whose dynamics are causally driven by DeviceOrientation tilt, with spike events simultaneously rendered visually and sonified via per-cell WebAudio nodes for a hybrid visual-auditory spatial mind. Not pattern storage, not residual predictors, not softbody DOM, not k-means particles.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- LIF grid: 32×24 neurons. Membrane potential V, leak τ, threshold θ, reset. Neighbor excitatory coupling for propagation.  
- Input: DeviceOrientation beta/gamma (or mouse) biases edge currents and global leak.  
- Visualization: Canvas2D, cells flash on spike (decay).  
- Audio: WebAudioContext; on spike, play short sine (freq = 200 + y*20, pan = (x-16)/16, gain decay). Limited concurrent voices.  
- IndexedDB store `f561-lif-mind` for V grid and total spike count.  
- Seal button; “Reset”, “Pulse” (inject center current), “Mute”.  
- Fallback: mouse-driven orientation always works; audio optional (graceful mute).

**Expected outcome**  
Runnable prototype in which tilting the device (or moving mouse) causes waves of spikes to propagate across the grid, flashing visually and producing a shifting spatial soundscape of short tones. Seal restores potentials across reloads. Works offline; pure Canvas2D + WebAudio path.

**Mechanics**  
1. Initialize random V near rest; load from IndexedDB if present. Setup AudioContext on first gesture.  
2. On deviceorientation or mousemove: compute bias currents from beta/gamma.  
3. Each frame (~60Hz): update all LIF (integrate, leak, threshold check, spike, reset, propagate to neighbors).  
4. Render flashing grid; on spikes schedule audio bursts.  
5. Seal: serialize V and counters to IndexedDB.  
6. Visual feedback: live spike rate, orientation values.

**Failure modes**  
- No DeviceOrientation permission or sensor: mouse fallback.  
- AudioContext blocked: visual-only.  
- IndexedDB quota or blocked: in-memory only.  
- High spike rate: throttle audio voices.  
- Low FPS: reduce grid size dynamically.

**Files**  
- drafts/F561-deviceorientation-lif-spike-audio-mind/SPEC.md  
- drafts/F561-deviceorientation-lif-spike-audio-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/spiking-mind/` or canvas tool; test that orientation change increases spike rate and triggers measurable audio scheduling events.
