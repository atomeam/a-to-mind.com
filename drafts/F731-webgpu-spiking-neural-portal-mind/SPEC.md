# F731 WebGPU Spiking Neural Portal Mind

## Concept
A population of leaky integrate-and-fire (LIF) spiking neurons runs as a local embodied mind. DeviceOrientation and pointer velocity inject continuous currents. Spikes generate forces that physically move and style floating hybrid DOM portals. Multiple subnetworks compete by spike-rate fitness; high-fitness ones can propose sealed weight-matrix genome transfers over BroadcastChannel. Persistent IndexedDB. Canvas visualizes membrane potentials and spike raster. WebGPU compute path attempted for the neuron kernel (JS fallback). Pure single-file HTML, offline-capable.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum/discrete field kernels (spectral Fourier F722, quantum phase F725, pathtracer F727, discrete CA audio F728), WebXR hand springs/decision-trees (F726, F721), genetic L-systems (F724), gamepad/MLP DOM swarms (F723), gaze-Bayesian portals (F729), and prior softbody, NCA, spectral residuals, orientation RNN, k-means, pure MLPs. Core novel combination is an event-based spiking neural network (not rate-based MLP/RNN/reservoir, not Bayesian posterior, not continuum CA/spectral/pathtracer) whose spikes causally control physical DOM portal dynamics under multi-agent fitness competition with sealed synaptic genome transfer. Not field substrates, not attention lattices, not residual predictors.

## Architecture
- Single index.html, no external libs.
- Local model: LIF neurons (V += (I - V)/tau; threshold cross → spike + reset). 24 neurons, sparse random synapses.
- Causal input: DeviceOrientation beta/gamma + pointer delta mapped to input currents.
- Embodiment: 6 floating DOM portals; spike counts from neuron groups apply velocity impulses; membrane mean drives hue/scale.
- Competition: fitness = recent spike rate; best proposes transfer.
- Persistence: IndexedDB `verse-f731-snn`. BroadcastChannel `f731-genomes`.
- Visual: Canvas2D raster + potential bars (WebGPU compute optional if adapter available).

## Expected outcome
Portals drift and morph in response to tilting the device or moving the pointer. Spike raster animates. High-activity subnetworks can seal and transfer weights to another tab. Interactive offline; works with or without WebGPU/orientation permission.

## Failure modes
- No orientation: pointer-only. IndexedDB blocked: session memory. WebGPU unavailable: automatic JS path. Too many spikes: soft rate limit.

Void is now Verse everywhere.

**Files**: drafts/F731-webgpu-spiking-neural-portal-mind/SPEC.md, drafts/F731-webgpu-spiking-neural-portal-mind/index.html
