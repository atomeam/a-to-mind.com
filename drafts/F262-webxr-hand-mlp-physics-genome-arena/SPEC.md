# F262: WebXR Hand-Tracked Multi-Agent MLP Soft-Constraint Physics Arena with Sealed Genome Transfer

## Concept
Novel combination: True WebXR hand tracking (index fingertip) as causal spatial input into a multi-agent arena. Each agent is embodied as a soft particle controlled by its own local tiny MLP (6→8→2) that emits forces from relative hand position, velocity, energy and phase. Simple constraint collisions and damping create emergent competition. Selected agent's genome (MLP weights) can be sealed via SHA-256 + IndexedDB and later injected into all agents. Hybrid Canvas2D rendering with pointer fallback when XR unavailable.

This expands the Void canvas with hand-embodied local AI agents that physically interact and can transfer sealed behavioral genomes, offline-capable.

## Why this branch
Recent cluster (F254–F261) centered on DeviceOrientation + NCA/RNN portals, residual attention lattices, volumetric residuals, and orientation-causal DOM physics. This deliberately leaves that cluster by using true WebXR hand tracking as primary input, pure multi-agent local MLPs controlling physical particles (no NCA, no residual predictors, no volumetric injection, no spectral, no pointer-history fields), and sealed genome transfer across agents.

## Architecture
- Single self-contained index.html.
- Canvas2D particle arena with simple Euler physics + pairwise soft collisions.
- Per-agent TinyMLP for force generation.
- WebXR immersive-ar session requesting hand-tracking; fingertip pose roughly projected to 2D as hand position.
- Pointer move/down as complete fallback (select + target).
- Seal: serialize selected MLP, hash, store in IndexedDB.
- Load: inject last sealed weights into every agent.
- Offline after first load; no network.

## Expected outcome
Runnable prototype: agents chase and jostle around the hand/pointer target under their individual policies. Select an agent, seal its genome, load it to overwrite all policies. XR hand when supported, otherwise pointer. Interactive and offline-capable.

## Mechanics
- MLP inputs: normalized Δ to hand, velocity, energy, phase.
- Outputs: force components added to velocity.
- Soft walls and agent-agent repulsion.
- Energy slowly decays, modulated by activity.
- Click near agent to select; * marks sealed.

## Failure modes
- No WebXR or hand-tracking → pure pointer mode (still fully interactive).
- XR session fails → status reports, continues with pointer.
- IndexedDB blocked → seal/load no-ops with status message.
- Low-end device → N=12 is light.

## Building blocks for next
WebXR hand pose → 2D causal field, per-agent local MLP force controllers, sealed MLP genome persistence and broadcast injection. Next: multi-tab BroadcastChannel genome races or WebGPU compute shader physics kernel.
