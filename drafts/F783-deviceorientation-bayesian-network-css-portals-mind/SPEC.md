# F783 DeviceOrientation Bayesian Network CSS Living Portals Mind

**Ledger ID**: F-783 (frontier series)

**Slug**: deviceorientation-bayesian-network-css-portals-mind

**Date**: 2026-11-17

**Branch from**: Recent dominant cluster of WebGPU continuum PDE/kernel simulations (SPH F777, LBM F780, SDF/Echo-state F779, Cahn-Hilliard, Kuramoto, Biot-Savart, wave, FFT) driven by local neural models (MLP/ESN/Hebbian) with hybrid DOM/CSS3D embodiments and sealed genome transfer, plus magnetic-string XR hands (F781) and DeviceMotion Hebbian CSS3D (F782). Explicitly leaves WebGPU compute shaders, continuum/particle/physics substrates, neural weights (MLP/RNN/reservoir/Hebbian), CSS 3D, softbody, NCA, spectral residuals, pointer-history fields, k-means, and orientation-as-direct-force.

## Concept

A pure probabilistic local model (discrete Bayesian Network with small conditional probability tables) whose causal input is DeviceOrientation (beta/gamma bins). The network maintains posterior beliefs over latent "mood" and "intent" states. Living CSS portal divs (absolute-positioned, no canvas primary) morph their size, hue, border-radius, and position based on sampled posteriors. Multi-agent competition: each portal has its own BN genome; fitness accrues from user click proximity and prediction "surprise" reduction. High-fitness agents seal and transfer mutated CPT tables over BroadcastChannel + IndexedDB. Fully offline single-file HTML. Core novel combination: non-neural Bayesian Network as the sealed mind controlling physical CSS UI elements under orientation causality and competitive transfer. Not previously built.

## Architecture

- Single index.html (self-contained, offline-capable after load).
- DeviceOrientationEvent → discretize into bins → update BN evidence → sample or MAP inference for portal parameters.
- 6–8 living DOM portals.
- Persistence: IndexedDB `verse-f783-bn`.
- Transfer: BroadcastChannel `f783-genomes`.
- Fallback: if no orientation, use pointer as proxy tilt.
- Visual: CSS transforms and custom properties only; status overlay.

## Novelty

Leaves the recent cluster listed above. First use of a discrete Bayesian Network (CPTs, not weights) as the local AI substrate for spatial Verse interaction. Hybrid embodiment is pure CSS living portals (not particles on a field, not softbody vertices). Sealed genome is the probability tables themselves.

## Files

drafts/F783-deviceorientation-bayesian-network-css-portals-mind/SPEC.md
drafts/F783-deviceorientation-bayesian-network-css-portals-mind/index.html

## Failure modes

No DeviceOrientation (desktop) → pointer proxy. IndexedDB blocked → memory only. Too many bins → slower inference (capped). No clicks → weak fitness signal.
