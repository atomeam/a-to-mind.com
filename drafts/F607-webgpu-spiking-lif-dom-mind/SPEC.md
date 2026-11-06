# F607 WebGPU Spiking LIF DOM Mind

**Ledger ID**: F-607 (frontier series)

**Slug**: webgpu-spiking-lif-dom-mind

**Date**: 2026-11-06

## Concept
A previously unused local-AI substrate: a leaky integrate-and-fire (LIF) spiking neural network. Discrete spikes driven by causal inputs (pointer velocity history + DeviceOrientation beta/gamma) propagate through a sparse recurrent connectivity. Each neuron is embodied as a living absolute-positioned DOM card whose scale, hue, and opacity pulse on spike and whose baseline is the recent firing rate. Spike events inject energy into a WebGPU compute particle kernel (Canvas2D fallback) that visualizes propagating activity as glowing trails. Dragging a card injects an external current spike at that neuron. Global chrome (CSS variables) warps with network entropy / synchrony. Sealed genomes (weight matrix + thresholds) persist in IndexedDB under SHA-256; BroadcastChannel enables multi-tab competition where higher spike entropy + lower energy wins and transfers.

This deliberately leaves the recent cluster of continuous unsupervised maps (SOM F606), adaptive partitions (quadtree), hypervector binding, DLA, rigid-body/PBD constraints, speech-seeded jump-flood, causal Fourier, SPH/Elman, and all prior continuum/particle/NCA/attention/RNN/MLP/Hopfield/bandit substrates.

## Architecture
- Single self-contained `index.html` (no external libs, no network after load).
- SNN: N=64 LIF neurons. Membrane, threshold, leak, sparse random weights (10% density).
- Input: 4 sensory channels (vx, vy, beta, gamma) inject current into first 8 neurons.
- Embodiment: 64 DOM cards in a loose grid; position jittered, visual state from rate/spike.
- WebGPU: compute shader for optional particle advection of spike events; else pure JS + Canvas2D.
- Persistence: IndexedDB `f607-spiking-mind` stores sealed weights + hash.
- Multi-agent: BroadcastChannel `f607-genome` posts sealed map; receiver adopts if better fitness.
- Fallback: pointer-only if no orientation; Canvas2D heatmap if no WebGPU.

## Expected Outcome
User moves pointer or tilts device → input currents drive spikes → DOM cards flash and resize, activity propagates as visual trails. Dragging a card forces a spike. Seal button freezes a genome; second tab can receive better (higher entropy) maps. Page remains interactive offline. Chrome hue/saturation shifts with network synchrony.

## Mechanics / Interaction
- Move pointer or tilt → continuous current injection.
- Drag any card → force spike + current boost on that neuron.
- Click Seal → SHA-256(weights) → IndexedDB + BroadcastChannel.
- Status overlay: active neurons, mean rate, entropy, WebGPU on/off, sealed hash prefix.
- R key or button: reward (slightly lower thresholds for more activity).
- Progressive: works with pointer alone; enhances with orientation + WebGPU.

## Novelty Justification
LIF spiking networks with discrete events have never been the primary mind kernel in any prior F- draft. The combination of (1) event-driven LIF dynamics with sparse recurrence, (2) each neuron literally being a draggable living DOM element that both receives forced spikes and is driven by its own firing, (3) WebGPU-accelerated spike-particle visualization, (4) sealed genome transfer of the weight/threshold matrix under entropy fitness, and (5) DeviceOrientation + pointer trajectory as the sole causal inputs is previously unbuilt. Not a continuous rate model controlling a separate substrate; the spikes *are* the interface state.

## Files
drafts/F607-webgpu-spiking-lif-dom-mind/SPEC.md
drafts/F607-webgpu-spiking-lif-dom-mind/index.html

## Failure Modes
- No WebGPU: falls back to Canvas2D particles.
- No DeviceOrientation: pointer-only mode.
- Too many DOM nodes: stable at 64.
- IndexedDB quota: keep only latest sealed map.
- Secure context required for orientation.

## Building Blocks for Future
WebGPU compute for full LIF update kernels, STDP online learning, multi-layer spiking hierarchies, WebXR hand joints as multi-channel current injectors, or spike-driven CSS Paint Worklets.
