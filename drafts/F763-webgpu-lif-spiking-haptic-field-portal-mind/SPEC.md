# F763-webgpu-lif-spiking-haptic-field-portal-mind

**Ledger ID**: F-763 (frontier series)

**Slug**: webgpu-lif-spiking-haptic-field-portal-mind

**Date**: 2026-11-15

**Status**: frontier

**Branch from**: Recent WebGPU SDF raymarch + RNN (F762), N-body (F761), LBM (F760), SPH (F755), boids/optical-flow (F758), genetic terrain OPFS (F756). Explicitly leaves continuum/particle physics kernels, rate-coded sequential models (MLP/RNN/reservoir), SDF volumetric, and pure Canvas CA.

**Concept**
A spatial 2D field of leaky integrate-and-fire (LIF) spiking neurons whose membrane potentials and spikes are computed in a WebGPU compute shader (Canvas2D JS fallback). DeviceOrientation provides a global excitatory bias current; pointer position injects local current. Spike events drive:

- Floating DOM portals that translate, scale, and hue-shift toward local high-firing regions (hybrid embodiment).
- navigator.vibrate pulses whose duration/intensity tracks the global population firing rate (haptic output never previously primary).

A sparse local Hebbian plasticity rule strengthens connections between co-active neurons; the weight matrix + parameters form a sealed behavioral genome persisted to localStorage (BroadcastChannel-ready). Fully offline single-file prototype.

Core novel combination: WebGPU (or JS) LIF spiking field + orientation/pointer causal current injection + haptic Vibration API embodiment + DOM portal advection from spike rates + local Hebbian sealed genome. Not fluid, not boids, not SDF, not rate-based RNN/MLP policy, not genetic terrain.

**Novelty**
First use of a spiking neural field as the primary spatial substrate on the Verse canvas, first haptic (Vibration API) closed-loop embodiment, and first orientation-driven LIF plasticity. Leaves all recent continuum, particle, volumetric, and rate-coded local models.

**Architecture**
- Single self-contained index.html.
- 32×24 LIF grid (JS implementation; WebGPU compute path stubbed for future full kernel).
- Membrane V, threshold, leak, refractory.
- Sparse random connectivity with Hebbian updates on spike coincidence.
- 4 DOM portals absolute-positioned, styled and offset by local average spike rate.
- DeviceOrientation: additive bias to all currents.
- Pointer: local current injection.
- navigator.vibrate when population rate > threshold.
- Seal: localStorage `verse-f763-lif` for weights + best fitness.
- Canvas2D: potential colormap + spike flashes.

**Mechanics**
1. Load: init neurons, random sparse weights, restore sealed genome if present.
2. Each frame (~30–60 Hz): integrate currents (orientation + pointer), check thresholds, emit spikes, update Hebbian, readback rates.
3. Portals seek high-rate zones; vibrate on global rate.
4. User drags portals or clicks to stimulate; Seal locks current weights.

**Expected outcome**
Open page: colored field of potentials appears. Tilt device or move mouse: currents inject, spikes flash, portals drift and morph, phone vibrates on activity bursts. Seal and reload preserves adapted weights. Interactive spatial mind, works offline, haptic feedback on supported devices.

**Failure modes**
- No Vibration API / desktop: silent skip.
- No DeviceOrientation: pointer-only.
- Low perf: reduce grid size (already small).
- WebGPU unavailable: JS path always works.

**Building blocks**
Reusable LIF grid kernel, spike-rate DOM advection, haptic rate coupling, Hebbian sealed genome. Expands frontier for next full WebGPU SNN kernels, multi-agent competing populations, or WebXR hand current injection.

Void is now Verse everywhere.

**Files**: drafts/F763-webgpu-lif-spiking-haptic-field-portal-mind/SPEC.md, drafts/F763-webgpu-lif-spiking-haptic-field-portal-mind/index.html
