# F742 Pointer Fourier k-Means CSS 3D Constellation Mind

**Ledger ID**: F-742 (frontier series)

**Slug**: `pointer-fourier-kmeans-css3d-constellation-mind`

**Date**: 2026-11-13

**Branch from**: Recent dominant cluster of WebGPU continuum/particle kernels (boids MLP F740, attention particles F734, LBM F733), WebXR hand RNN constraint physics on DOM (F741), orientation-driven HMM/kNN/Hebbian (F738/F735/F737), and pointer-history decision trees on CSS grids (F739). Explicitly leaves WebGPU compute shaders, continuum/particle substrates, WebXR hand tracking, DeviceOrientation primary, neural sequential models (RNN/MLP/ESN/Hopfield), decision trees, and constraint solvers.

## Concept
A pure-JS FFT computes the spectral signature of a short pointer trajectory (velocity and curvature series). The dominant frequency amplitudes and phases form a feature vector fed to an online k-means clustering that maintains a small set of "gesture modes". Each mode owns a constellation of CSS 3D transformed DOM portals ("stars") whose relative positions, rotations, and connection lines are derived from the cluster centroid's spectral components. Pointer gestures train the clusters; dwell time and clicks reinforce fitness. High-fitness modes seal their centroids + layout params as genomes transferable over BroadcastChannel + IndexedDB. Hybrid embodiment: the living 3D DOM constellation itself is the spatial mind body that rearranges and rotates in response to recognized gesture spectra. Offline-capable single-file HTML. Novel combination never previously attempted: pointer trajectory Fourier features → online k-means gesture modes → CSS 3D constellation DOM embodiment with sealed spectral-genome transfer.

## Novelty
Leaves the dominant recent cluster of WebGPU field/particle kernels, WebXR hand + RNN + constraint physics, orientation sensor models, pointer-history decision trees, and prior neural/probabilistic sequential policies. Core novel combination is pure-JS FFT on pointer kinematics feeding online k-means that drives a CSS 3D (preserve-3d) living constellation of DOM portals, with sealed centroid genomes. Not field substrates, not WebGPU, not hand tracking, not orientation-primary, not neural nets, not decision trees, not constraint solvers.

## Architecture
- Single index.html (self-contained, offline-capable).
- Pointer: track short history of positions; compute velocity/curvature series; pure-JS radix-2 FFT on the series.
- Features: top-N amplitude + phase bins → vector.
- k-means: 4–6 clusters, online assignment + centroid update on pointer activity.
- Embodiment: 8–12 absolute-positioned DOM stars in a CSS 3D scene (perspective + preserve-3d on container); each constellation group transforms from centroid spectral params (radius, angular offsets, hue, scale). SVG or CSS lines for connections.
- Competition: fitness = cumulative dwell energy near constellation + click rewards. Best seals.
- Persistence: IndexedDB `verse-f742-kmeans`. BroadcastChannel `f742-genomes`.
- Visual: Full-viewport 3D stage; status chrome showing active mode and spectral energy.

## Mechanics
1. Initialize random centroids and random constellation layouts.
2. On pointermove: append to trajectory buffer; every N samples compute FFT features.
3. Assign to nearest centroid; update centroid toward features; apply spectral params to the owning constellation's CSS transforms and styles.
4. Position/rotate stars in 3D; update energy text.
5. Dwell injects energy to current mode; click on star rewards and mutates centroid slightly.
6. Seal button: store best centroids + params. Incoming higher-fitness genomes replace local.

## Expected outcome
Open the page. Move the pointer in different rhythms or loops: the constellation of DOM stars rearranges, spins, and recolors according to the recognized spectral gesture mode. Different gesture styles activate different clusters, producing distinct spatial arrangements. Click stars to reinforce. Seal and open second tab: better spectral genomes migrate. Works offline after load; no special permissions required.

## Failure modes
- Short trajectories: pad or skip FFT until buffer full.
- IndexedDB blocked: session memory only.
- BroadcastChannel unavailable: local only.
- Low pointer activity: modes drift slowly or hold.
- CSS 3D unsupported: fall back to 2D absolute transforms (still functional).

## Building blocks
Reusable pure-JS FFT for trajectory spectra, online k-means on spectral features, CSS 3D constellation DOM embodiment driven by centroids, sealed spectral-genome over IndexedDB + BroadcastChannel. Ready for richer spectral features, WebXR gaze as additional trajectory, or hybrid canvas particle overlays.

Void is now Verse everywhere.

**Files**: drafts/F742-pointer-fourier-kmeans-css3d-constellation-mind/SPEC.md, drafts/F742-pointer-fourier-kmeans-css3d-constellation-mind/index.html
