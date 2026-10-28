# F053 — WebGPU Softbody Attention Portals

**Frontier series**: F-053 (after F052 spatial-causal-portal-lattice; not a variation of F-020 discrete agents, F-021 orientation+density+morph, F-284 trajectory residual, or prior softbody/attention clusters).

## Concept
A deformable softbody of particles simulated in a WebGPU compute shader. A local causal attention mind (tiny MLP in main thread or Worker) reads a short history of spatial inputs (pointer delta + DeviceOrientation) and produces attention weights over particle clusters. Attention biases spring rest lengths and force fields. Floating DOM portals sample the softbody (density, mean velocity, attention score) and can be dragged to inject corrective impulses. High residual / high attention warps chrome and portal transforms. Seal stores model weights + portal positions in IndexedDB.

## Novel combination
WebGPU compute softbody physics + local causal attention mind over spatial gesture history + hybrid DOM portals that both observe and act back on the GPU field. Not pure residual prediction, not evolutionary genomes, not acoustic, not NCA lattice, not gaze swarm.

## Architecture
- Single HTML file, offline-capable.
- WebGPU: compute pipeline updates positions/velocities with springs + attention bias; render pipeline draws points or simple quads.
- Fallback: Canvas2D particle step if WebGPU unavailable.
- Local mind: 8-hidden MLP, trained lightly online with residual loss on next-input prediction; outputs 4 cluster biases.
- Portals: 3–5 absolute-positioned DOM cards, pointer events for drag, sample nearest particles via CPU readback (sparse) or approximate.
- Seal: button writes {weights, portals, timestamp} to IndexedDB; load restores.

## Expected outcome
Interactive spatial softbody that "attends" to user motion, deforms, and hosts draggable observation portals that close the loop. Runnable in modern Chromium with WebGPU; degrades gracefully.

## Mechanics
- 256–512 particles, 3–4 springs each (or global rest).
- Attention: softmax over 4 cluster centroids computed from particle positions.
- Mind step ~10 Hz; physics 60 Hz.
- CSS morph: --attention-hue, --portal-scale driven by mind output.

## Failure modes
- No WebGPU → Canvas2D only, still interactive.
- No orientation → pointer only.
- Sparse readback may lag; portals use approximate sampling.
- CSP / storage restrictions ignore seal.

## V01D landing
Skill under `void-live-deploy/skills/mini/softbody-attention-portals.js`. Test: spatial input → attention bias changes particle clustering; portal drag → measurable force impulse; seal/load restores weights.

## Building blocks for next
WebGPU softbody + attention bias kernel; hybrid portal sampling/injection; causal spatial mind. Next: multi-body interaction, WebXR hand as additional portal, full compute attention.
