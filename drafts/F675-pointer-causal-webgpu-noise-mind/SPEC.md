# F675 Pointer-Causal WebGPU Noise Portal Mind

## Concept
A living spatial canvas for The Verse. A tiny local MLP (pure JS) consumes a short history of pointer deltas and produces parameters for a WebGPU compute shader that generates a continuous noise/vector field. Absolute-positioned DOM portals (note cards) sample the field and are physically displaced by its flow; the user can drag them to inject corrective forces. Speaking (Web Speech API) seeds temporary attractors whose strength the MLP also modulates. Clicking “Seal” rates the current configuration, stores the MLP weights as a genome in IndexedDB, and broadcasts them via BroadcastChannel so other tabs adopt the preferred field. Layout + notes export as JSON.

## Novelty
Leaves the recent cluster of competitive text summarizers (F674), GPU bin-packers, tilt organizers, WebXR Verlet DOM, barcode inventories, wallpapers, and planners. Explicitly avoids residual predictors, pure NCA, Physarum, Lenia, softbody springs, Ising, spectral vortices, k-NN, and orientation-only MLPs. Core novel combination is pointer-history → evolving MLP → WebGPU noise-field parameters that physically drive living DOM portals, with speech-seeded attractors and rating-gated sealed genome transfer over IndexedDB + BroadcastChannel. Not a task planner, not extractive summarizer, not barcode, not pure particle life.

## Architecture
Single self-contained `index.html` (WebGPU + fallback 2D canvas).  
- Pointer move history buffer (last 32 deltas).  
- 8-input / 16-hidden / 4-output tiny MLP (noise scale, octaves proxy, attractor strength, hue shift).  
- WebGPU compute shader samples a hash-based noise and writes a velocity field texture; portals read it each frame.  
- SpeechRecognition (if available) adds attractor points.  
- IndexedDB for genome + notes; BroadcastChannel for live transfer.  
- Drag portals, add notes, seal, export JSON, clear.

## Expected outcome
Open the page, move the pointer, watch portals drift with the evolving noise field, speak a word to seed an attractor, drag a portal, seal a liked configuration, open a second tab to observe genome adoption, export JSON, reload restores.

## Mechanics
1. Init MLP weights (random or loaded).  
2. On pointermove, push delta to ring buffer.  
3. Forward MLP → shader uniforms.  
4. Compute pass updates field; JS samples field at portal positions and integrates velocity.  
5. Speech adds attractor that decays.  
6. Seal writes weights + portal states to IndexedDB and posts to channel.  
7. Export serializes current notes and positions.

## Files
drafts/F675-pointer-causal-webgpu-noise-mind/SPEC.md  
drafts/F675-pointer-causal-webgpu-noise-mind/index.html
