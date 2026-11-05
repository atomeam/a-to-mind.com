# F583-broadcast-indexeddb-pheromone-webgpu-diffusion-mind

## Concept
Multi-agent stigmergic competition on a shared pheromone field. Local agents (simple rule-based depositors with sealed parameter genomes) respond to pointer and DeviceMotion inputs, depositing "pheromone" into a spatial field. The field is diffused and decayed via a WebGPU compute shader (or JS fallback). Field state and agent genomes are persisted in IndexedDB as sealed snapshots (with simple integrity hash). Cross-tab multi-agent competition is enabled via BroadcastChannel for delta sync of field and genome transfer. The living field drives a spatial grid of Verse DOM cards whose scale, hue, and opacity respond to local intensity — a hybrid embodiment where computational agents control physical UI layout memory across sessions.

## Branch
Deliberately leaves the recent cluster of WebGPU spectral/LBM/SDF volumetric sims, WebXR hand/reservoir/CPM, orientation/ambient MLP/RNN, attention glyphs, and pure NCA/CA layouts. Combines under-explored axes: persistent IndexedDB + BroadcastChannel shared fields in a new stigmergic architecture, multi-agent competition with sealed genome transfer, WebGPU for a diffusion kernel in this novel combo, DeviceMotion as causal input, local agents controlling physical DOM elements.

## Prior cross-reference
No superficial match to F582 (spectral voice SDF), F581 (LBM attention portal), F580 (WebXR hand reservoir Vicsek), F579s, F578 (ambient MLP SDF paint), F577/F576 (orientation MLP/RNN). Diffusion exists in early reaction-diffusion and embedding cascade, but not this multi-agent pheromone + sealed IDB/Broadcast + DOM hybrid.

## Implementation notes
- Single-file index.html, offline-capable (IDB, no network required for core).
- WebGPU compute for diffusion when available; canvas 2D fallback.
- Agents: 8 local agents with genomes {strength, decayBias, mobility}.
- Sealed: JSON.stringify(genome) + simple hash stored in IDB under "verse-pheromone-genomes".
- BroadcastChannel "verse-pheromone" for field deltas and genome offers.
- Interactive: pointer deposits, shake (DeviceMotion) boosts, buttons to spawn/evolve/seal/reset.
- Failure modes: WebGPU unavailable → JS; IDB quota → in-memory; Broadcast unsupported → local only.

## Building blocks for next
Shared sealed field + genome transfer primitives, WebGPU diffusion kernel reusable, DOM-as-sensor/actuator hybrid.
