# F501-ambient-light-metabolic-swarm-mind

**Ledger ID**: F-501  
**Slug**: ambient-light-metabolic-swarm-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of battery-metabolism particles (F499), amplitude-collapse portals (F500), softbody policy meshes (F0482), wavelet-MLP DOM morphs (F0483). Explicitly leaves Battery Status, complex-amplitude collapse, mass-spring softbodies, discrete wavelet kernels, speech-seeded NCA, orientation Voronoi, and all prior particle/NCA/attention lattices.

## Concept
Device AmbientLightSensor (or simulated illuminance) supplies a continuous environmental energy flux to a Canvas2D particle swarm (WebGPU compute path reserved as next building block). Each particle carries a tiny pure-JS MLP (3→4→2) that maps its local energy residual, recent light delta, and proximity to DOM portals into velocity and metabolic emission. Particles exert soft repulsive forces on absolute-positioned Verse portal cards, physically rearranging the page layout according to the swarm's energy distribution. High ambient light accelerates metabolism, expands portals, and raises emission; low light induces clustering, shrinkage, and dormancy. On AABB contact the higher-fitness agent seals and transfers a mutated genome. Full state (particle ensemble, genomes, portal poses, light history hash) seals to IndexedDB for offline restore. Fully self-contained, offline after first load. Pointer injects local "shade" or energy boost; DeviceOrientation provides secondary bias.

## Novelty
Core novel combination is the Ambient Light Sensor API (never previously used in any Frontier Engine draft) as the sole external metabolic driver of a competing local-MLP particle swarm that exerts real physical forces on living DOM portals, closed-loop tuned by energy-distribution fitness, with sealed light-adapted genomes. Not battery discharge curves, not pointer-velocity residuals, not spectral audio, not complex wavefunction collapse, not constraint propagation, not softbody springs, not NCA, not LBM, not photonic waveguides.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Canvas2D particle swarm with per-agent energy and MLP policy
- AmbientLightSensor for illuminance (fallback: time-based or manual slider simulation)
- DOM portals (divs) whose transform, scale, opacity, and hue are driven by nearby particle energy
- Soft force integration so portals physically yield to swarm pressure
- IndexedDB seal of genomes + particle moments + light hash
- Controls: nucleate, seal, restore, clear, light override

## Expected outcome
Interactive metabolic field responsive to real ambient light. Darken the room and watch portals contract and particles cluster; brighten and observe expansion, higher activity, and genome competition. Pointer shades or boosts local regions. Sealed states restore previous light-adapted minds. Chrome (background glow, border) reacts to global illuminance and energy entropy. Runnable in any modern browser with no external dependencies; sensor permission requested on user gesture.

## Mechanics
- Particle update: energy += illuminance * absorption - decay; MLP outputs dx, dy from [energy, lightDelta, nearestPortalDist]
- Force: portals receive inverse-square repulsion proportional to particle energy within radius
- Fitness: mean energy + portal spatial spread - clustering penalty
- Genome transfer on overlap when fitness gap > threshold
- Seal: SHA-256 of serialized energy moments + weights + recent illuminance

## Failure modes
- AmbientLightSensor unavailable or permission denied → simulated illuminance slider
- High particle count → CPU bound; cap at 120, drop rate
- Too many portals → DOM thrash; cap at 8
- WebGPU path not implemented in prototype (Canvas only)

## Files
drafts/F501-ambient-light-metabolic-swarm-mind/SPEC.md
drafts/F501-ambient-light-metabolic-swarm-mind/index.html

## V01D landing
Spatial stage skill under void-live-deploy/skills/ambient-light-swarm-mind.js; test asserts illuminance delta → particle energy change and portal transform, plus seal hash integrity.
