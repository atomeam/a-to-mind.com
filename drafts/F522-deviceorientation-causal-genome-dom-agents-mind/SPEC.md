# F522 DeviceOrientation Causal Genome DOM Agents Mind

## Concept
Novel hybrid embodiment where DeviceOrientationEvent deltas serve as the sole causal input to a population of local tiny MLPs (one per agent). Each agent is an absolute-positioned DOM Verse card that has a sealed genome (weight vector). Agents perform simple local physics (velocity integration + mutual repulsion + attraction to a shared orientation-derived focus point). Genomes compete across tabs via BroadcastChannel: a sealed high-fitness genome can be adopted by others. IndexedDB stores the best sealed genome. Mouse fallback simulates orientation when sensors unavailable. Pure local, no WebGPU, no continuous field substrate.

This deliberately leaves the recent WebGPU compute-kernel cluster (sandpile SOC F520, embedding diffusion F521, vectorfield policy F519, wave membranes, Gray-Scott, spectral, quantum walks) and pure particle/NCA/attention lattices. Orientation is used as causal driver of competing embodied agents with sealed genome transfer, not as residual input to a field or RNN lattice.

## Implementation
- Single-file index.html, fully offline after load.
- 6 DOM agent cards with CSS 3D-ish transforms and simple JS physics loop.
- DeviceOrientationEvent (with permission prompt where required) → delta rates → each agent's MLP (3→4→2) outputs preferred velocity bias.
- Shared focus point from smoothed orientation; agents attract to it proportionally to genome fitness.
- Click agent to seal genome (crypto.subtle SHA-256) + metrics to IndexedDB and BroadcastChannel.
- Incoming genomes from other tabs replace lowest-fitness local agent.
- Mouse drag on canvas injects synthetic orientation delta for desktop testing.
- Progressive: status bar shows sensor state, agent count, last seal.

## Expected outcome
Interactive multi-agent mind: tilting the device (or moving mouse) causes agents to swarm and compete for the focus; sealing and multi-tab genome transfer works; runnable offline; graceful on desktop without sensors.

## Mechanics
- Orientation: alpha/beta/gamma deltas, low-pass filtered.
- Genome: 3×4 + 4×2 float weights per agent, random init, optional mutation on seal.
- Physics: pos += vel; vel *= 0.92; vel += mlp(delta) * scale + repulsion + attract.
- Fitness: inverse distance to focus over last 60 frames + stability.
- Seal: hash genome + fitness; BroadcastChannel postMessage.
- Fallback: pointermove → synthetic beta/gamma.

## Failure modes
- Orientation permission denied or unsupported → mouse-only mode, status message.
- BroadcastChannel blocked (private mode) → local only.
- IndexedDB quota → unattested toast, still runs.
- Too many agents → cap at 8, simple O(n²) repulsion.
- iOS requires user gesture for DeviceOrientation.

## Next building blocks
- Full WebXR hand tracking as additional causal input for agents.
- OPFS persistence of full population state.
- WebGPU compute for larger agent counts if desired later.

Dominant prior cluster branched from: WebGPU+local-MLP continuous-field and DOM-portal simulations (F512–F521).

**Void is now Verse everywhere.**
