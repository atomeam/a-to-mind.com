# F519-webgpu-vectorfield-policy-dom-mind

**Ledger ID**: F-519  
**Slug**: webgpu-vectorfield-policy-dom-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of wave-membrane RNN pin DOM (F518), Gray-Scott mic-spectral garden (F517), WebMIDI RNN spatial score (F516), MLP-auction DOM (F515). Explicitly leaves evolutionary vector fields (F033), reaction-diffusion, particle force MLPs, fluid advection (stable fluids/SPH/LBM), spectral wavefields, quantum amplitudes, softbody/tensegrity, and pure DOM card embodiment without continuous field substrate. Introduces online policy-gradient (REINFORCE-style) control of sparse force-injection points into a continuous vector field as the primary mind substrate (previously unused for policy gradient), with absolute DOM portal cards that are physically advected by the field and can be dragged to rewrite local field bias, sealing the best policy genome.

**Concept**  
A coarse-to-fine vector field (Canvas2D primary; WebGPU compute path reserved for the advection kernel) is continuously driven by a small population of local policy-gradient agents. Each agent is a tiny MLP (4→8→2) that observes local field energy residual + pointer proximity and outputs a force-injection delta. Online REINFORCE updates (advantage from field entropy + DOM coverage reward) adapt the policies. A set of absolute-positioned Verse portal cards are advected by bilinear-sampled field velocity plus spring constraints; users can drag cards, which inject opposing forces back into the field. On high-fitness threshold or manual seal the best policy genome + field hash is written to IndexedDB. Fully self-contained single file, progressive enhancement (pointer always works), offline after first load.

**Why novel**  
Grep of drafts before this run: policy-gradient / REINFORCE / online-policy = 0 as primary learning method. Prior vector fields (F033) used evolutionary genomes; this is the first explicit continuous vector-field mind whose sparse actuators are live policy-gradient agents, with physical DOM portals that both ride and rewrite the field.

**Architecture**  
- `index.html`: single-file prototype.  
  - Canvas2D vector-field grid (32×18 or adaptive) with bilinear advection of DOM portals.  
  - Main-thread or Worker tiny MLPs (4→8→2) with REINFORCE updates every ~30 frames.  
  - Absolute DOM portal cards (draggable) whose transform is set from field sample; drag injects force.  
  - IndexedDB seal/restore of best policy weights + field snapshot hash.  
  - Pointer injects temporary attractor; optional DeviceOrientation global bias.  
  - WebGPU noted as next for larger grids / compute kernel.

**Expected outcome**  
Interactive vector-field mind: portals flow with emergent currents, policies adapt to maximize coverage and entropy, drag feedback rewrites local bias, seal/restore works, runnable offline, graceful on low-end devices.

**Mechanics**  
- Field: discrete velocity grid, diffusion + decay + agent injections.  
- Policy: MLP maps [local |v|, residual, pointer dist, orient] → (fx, fy).  
- Reward: field entropy + mean portal travel + user drag events.  
- REINFORCE: advantage = reward - baseline, weight update on log-prob gradient (simplified Gaussian policy).  
- Drag on portal → map to grid cell, add impulse.  
- Seal button writes weights + metrics hash to IndexedDB.  
- Chrome: canvas overlay or filter from mean |v|.

**Failure modes**  
- High resolution → CPU bound; auto-drop grid.  
- Too many portals → lag; cap at 8.  
- IndexedDB blocked → seal shows unattested toast.  
- Policy collapse → periodic reset of baseline.  
- Numerical blow-up if force scale too high (clamped).

**Void is now Verse everywhere.**  
This prototype expands the Verse canvas with a vector-field policy-gradient mind whose living portals are physical DOM objects that both ride and rewrite the continuous flow.

**Files**  
drafts/F519-webgpu-vectorfield-policy-dom-mind/SPEC.md  
drafts/F519-webgpu-vectorfield-policy-dom-mind/index.html

**V01D landing**  
Spatial stage skill under void-live-deploy/skills/vectorfield-policy-dom-mind.js; test asserts field update → portal advection sample, policy output → force injection, drag → local bias, seal hash integrity.
