# F499-webgpu-battery-metabolism-particle-mind

**Ledger ID**: F-499  
**Slug**: webgpu-battery-metabolism-particle-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of WebGPU WFC/MLP living grids (F498), Echo State living DOM (F497), DeviceMotion Kalman portals (F496), Ising orient domains (F495), IFS fractal policies (F494), implicit SDF sculptors (F493). Explicitly leaves constraint propagation, residual reservoirs, sensor-fusion physics, spin systems, fractals, and SDFs. Introduces previously unused Battery Status API as metabolic driver.

## Concept
A local metabolic mind reads the device Battery Status API (level, charging, dischargingTime) as an energy substrate. A WebGPU compute shader (Canvas2D particle fallback) maintains a field of energy quanta whose emission, decay, and velocity are modulated by battery state and a short causal history of user activity (pointer moves, clicks). Nearby particles physically displace absolute-positioned Verse cards via soft repulsion forces. A tiny local online policy (simple proportional controller + small MLP residual) tunes emission/decay rates to keep a target vitality (entropy × battery residual), sealing the current particle ensemble, card positions, and policy weights to IndexedDB as a recallable metabolic snapshot. Fully self-contained, offline after first load.

## Why novel
- Battery Status API has never appeared in any prior Frontier Engine draft (zero mentions of battery, getBattery, or dischargingTime).
- Not a pure reaction-diffusion lattice, not NCA, not residual predictor on pointer, not genome swarm, not Bayesian lattice, not WFC constraint collapse.
- Core novel combination is device metabolic state (battery) as the sole external energy input to a particle quanta field that exerts real physical forces on living DOM cards, closed-loop tuned by a local vitality policy, with sealed recall.
- Under-explored axis: hardware resource state as mind substrate rather than pure user gesture or synthetic noise.

## Prototype
Single self-contained `index.html`. Interactive offline. Move pointer or click to inject activity energy. Battery level (or simulated fallback) scales particle count and speed. Cards drift and are pushed by particles. Press S or click Seal to capture the mind state. R restores last seal. Vitality meter reflects the policy.

## Failure modes
- No Battery API: falls back to a simulated metabolic oscillator (slow sine) plus pointer energy; still fully interactive.
- No WebGPU: Canvas2D particle system (fully functional).
- IndexedDB unavailable: seals fall back to localStorage or in-memory.
- Low battery or permission denial: reduced particle count; policy targets lower vitality.
- Card overlap: soft collision + bounds clamping.

## Building blocks for next
Battery-as-metabolism particle fields with physical DOM displacement; sealed metabolic snapshots; local vitality policies. Next: multi-device BroadcastChannel of partial energy fields; WebXR gaze as activity injector; OPFS persistence of long metabolic histories.

## V01D landing
skills/mini/webgpu-battery-metabolism-particle-mind; testable via battery level → particle density, pointer → activity boost, seal → hash + IDB, restore → prior ensemble reappears, vitality → policy adjustment.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- State: particle array (pos, vel, energy), card positions/velocities, policy weights
- Inputs: navigator.getBattery() level/charging + pointer activity residual → policy
- Kernel: particle integration + soft repulsion forces on cards (WebGPU compute or JS)
- Embodiment: absolute DOM cards whose transforms are driven by particle forces; Canvas overlay for quanta
- UI morph: root CSS vars (hue, saturation) driven by vitality / battery
- Seal: SHA-256 of serialized ensemble + policy stored in IndexedDB (localStorage fallback)
- No external dependencies, no network

## Expected Outcome
Interactive living Verse cards that are physically pushed and rearranged by a battery-driven energy particle field, with a local policy maintaining vitality and sealed recallable metabolic states. Runnable offline with or without real battery data.

## Mechanics
- Battery + activity → policy emission/decay
- Particle update ~60 Hz
- Soft forces displace cards
- Vitality score → CSS morph + policy error
- Click Seal or key S seals; R restores
