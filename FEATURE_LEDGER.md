See local append; full file too large for this call — previous guard restores preserved. F454 entry:

## Frontier Engine F-454 (2026-10-29)

**F454-deviceorient-hebbian-genome-theft**

Novel combination: DeviceOrientation (beta/gamma tilt) as direct causal input to per-agent local Hebbian-learning networks (custom 4→2 weight matrices, not standard MLP/RNN/attention/residual). Agents embody hybrid Canvas2D Verlet-like physics + floating DOM orbs. On collision, weaker agent performs sealed genome (weight) theft from stronger, updating local hash. Pointer attractor. Persistence via localStorage. Fully offline. Explicitly branches away from recent clusters: orientation-MLP (F449/F450/F452), WebGPU NCA/residual/portal (F443–F446), WebXR hand/genome (F439/F448/F451), L-system spatial evo (F453), HDC memory palace (F450), softbody DOM, pure NCA, spectral residuals.

Architecture: single self-contained index.html; 12 agents; Hebbian update on centrality reward; DOM orbs follow with energy scale; seal on weights.

Expected outcome: Tilt device to bias agent forces; agents learn local policies and transfer genomes on contact; interactive spatial competition that persists. Runnable offline, no external deps.

Mechanics: 4 inputs (normalized pos + orient); tanh outputs as acceleration; collision genome copy 30% + energy transfer; bounce.

Failure modes: no deviceorientation permission → pointer-only mode; localStorage quota/private mode → no persist; main-thread only (ok for 12 agents).

Building block: next can lift Hebbian matrix ops to WebGPU compute shader + true WebXR hand embodiment of agents, or IndexedDB + WebRTC sealed genome share.

Lands in V01D as hybrid spatial skill (void-live-deploy/skills/mini/hebbian-orient-agents.js); testable via tilt→velocity bias and collision→weight hash change + restore.
