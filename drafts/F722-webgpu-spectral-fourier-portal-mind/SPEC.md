# F722-webgpu-spectral-fourier-portal-mind

**Ledger ID**: F-722  
**Slug**: webgpu-spectral-fourier-portal-mind  
**Date**: 2026-11-12  
**Status**: frontier prototype  

Plain name: Spectral Fourier Portal Mind

Job: Tilt or move your pointer; the page extracts dominant frequencies from the motion signal, drives a living wave field, and floating portals ride the waves. Drag portals to inject spectral impulses. Seal the best spectrum.

**Concept**
A novel hybrid spatial interface for The Verse canvas: DeviceOrientation (or pointer velocity proxy) is sampled as a continuous time-series. A pure-JS sliding DFT extracts the top spectral coefficients (amplitude + phase). These modulate the source strength and damping of a 2D discrete wave-equation lattice advanced on the main thread (Canvas2D visualization; WebGPU compute path sketched for future). Living DOM portals are absolute-positioned and physically displaced / scaled / rotated by local wave height and gradient. Dragging a portal injects a localized phase impulse into the spectral buffer. High local energy under a portal provides a soft reward that biases frequency emphasis. Seal persists the spectral snapshot + portal layout to IndexedDB; BroadcastChannel enables multi-tab transfer. Fully offline single-file.

This combination—causal sensor time-series → local Fourier analysis → wave-field embodiment of DOM portals with spectral injection—has not appeared in prior F- drafts. Leaves MLPs, decision trees, SDFs, particle systems, Kalman/Bayesian filters, spatial audio, and WebXR skeletal policies.

**Architecture**
- Single index.html, pure HTML/CSS/JS, no libraries.
- Signal: 64-sample sliding window of normalized orientation beta/gamma or pointer speed.
- DFT: naive complex DFT on the window (sufficient for N=64).
- Wave lattice: 48×48 float grid, simple finite-difference update with spectral-modulated source at center or pointer.
- DOM: 4–6 absolute portals (contenteditable notes), pointer-draggable.
- Visualization: Canvas2D colored by wave height.
- Persistence: IndexedDB key `verse-f722-spectral`.
- Controls: Request Orientation, Add Portal, Seal Best, Reset, Download JSON.

**Mechanics**
1. Request DeviceOrientation or fall back to pointer.
2. Each frame push sample to ring buffer, compute DFT, extract top-3 frequencies.
3. Update wave lattice (source amplitude from spectral energy, phase from dominant phase).
4. For each portal, sample local height/gradient → apply CSS transform offset/rotation.
5. On drag end, inject impulse into the signal buffer at the portal’s projected frequency.
6. Seal stores {coeffs, positions, fitness}.

**Expected outcome**
Open page. Grant orientation or move pointer. Wave field appears and portals begin to bob and drift with the spectral waves. Drag a portal to “tune” the spectrum; watch the field respond. Seal and reload preserves the preferred spectrum. Works offline, pointer-only fallback.

**Failure modes**
- No orientation: pointer velocity drives the signal.
- IndexedDB blocked: session memory only.
- High CPU: reduce lattice size or skip DFT every other frame.

**Files**
- drafts/F722-webgpu-spectral-fourier-portal-mind/SPEC.md
- drafts/F722-webgpu-spectral-fourier-portal-mind/index.html

Void is now Verse everywhere.
