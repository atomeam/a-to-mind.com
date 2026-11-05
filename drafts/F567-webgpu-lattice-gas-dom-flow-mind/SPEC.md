# F567-webgpu-lattice-gas-dom-flow-mind

**Slug**: `webgpu-lattice-gas-dom-flow-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent WebGPU FFT Hopfield (F559), speech-fluid tokens (F562), WebXR electrostatic SVG (F558). Leaves continuous particle advection, speech recognition, WebXR hand/gaze, orientation/ambient sensors, Hopfield spectral memory, and DOM portals driven by soft forces.

## Concept
A discrete Lattice Gas Automaton (LGA / FHP-style) runs on a WebGPU compute grid (Canvas2D cellular fallback). Each lattice site can host a floating "portal atom" – an absolutely positioned interactive Verse card. Pointer drag injects directed momentum into the LGA; the emergent macroscopic flow (velocity field, vorticity, density) is sampled each frame and fed to a tiny pure-JS MLP (6→8→3) that classifies the current flow regime (laminar / vortex / turbulent). The regime prediction modulates atom visual style (hue, scale, glow) and is compared against the next observed regime for Hebbian reward. Successful predictions seal a "flow crystal" (regime vector + weights snapshot) into IndexedDB. Clicking an atom absorbs the most recent crystal, permanently tinting that portal and altering its click behavior. Fully self-contained single-file offline prototype. No continuous fluids, no audio, no external sensors, no evolutionary genomes on physics.

## Novelty
Core novel combination is discrete lattice-gas cellular flow (never used in prior Frontier drafts) driving the physical arrangement and visual state of living DOM portal atoms, closed-loop classified by a local regime MLP whose sealed crystals become absorbable spatial landmarks. Not continuous particle/fluid advection, not speech tokens, not WebXR, not sensor metabolic drivers, not Hopfield/FFT spectral memory, not soft-body or constraint springs.

## Architecture
- Lattice: 64×48 FHP-like LGA with 6 directions + rest; WebGPU compute shader for collision/stream if available, else typed-array Canvas2D step.
- Portal atoms: 6–12 absolute-positioned `<div class="atom">` cards whose positions are snapped to lattice sites or advected by the local velocity vector.
- Local mind: tiny MLP trained online via Hebbian / reward on regime classification accuracy; input features = mean speed, vorticity, density variance, pointer energy, recent regime history.
- Seal: IndexedDB store `f567-lga-flow-mind` holds MLP weights + list of sealed crystals.
- Controls: Inject momentum on drag, Seal now, Reset lattice, Absorb crystal (click atom), Toggle WebGPU/Canvas.

## Expected outcome
Runnable prototype in which dragging across the canvas creates visible lattice-gas flow that pushes and recolors portal atoms. The MLP predicts the next regime; matching observations brighten a "crystal" indicator and update weights. Seal persists across reloads. Atoms absorb crystals and change appearance. Works with or without WebGPU.

## Mechanics
1. Initialize LGA grid (mostly empty + a few rest particles) and empty atom list; load sealed weights from IndexedDB if present.
2. On pointer drag: inject momentum particles in the drag direction at the lattice cell under the pointer.
3. Each frame: advance LGA (stream + collide), sample macroscopic features, step MLP, predict regime, update atom positions/styles from local velocity + regime, render lattice density as low-opacity background.
4. Compare prediction to next observed regime; on match reward weights and queue a crystal.
5. Seal button serializes weights and crystals.
6. Click atom: absorb latest crystal → permanent hue shift + "sealed" badge.

## Failure modes
- No WebGPU: automatic Canvas2D LGA fallback (still interactive).
- IndexedDB quota or blocked: session-only memory.
- Too many atoms: fixed cap of 12.
- Low FPS: reduce lattice update rate or particle count.
- Pointer outside canvas: no injection.

## Files
- drafts/F567-webgpu-lattice-gas-dom-flow-mind/SPEC.md
- drafts/F567-webgpu-lattice-gas-dom-flow-mind/index.html

## V01D landing
Skill under `void-live-deploy/skills/lga-flow-atoms/` or spatial canvas tool; test that a drag injects visible momentum, an atom displaces under the resulting flow, and a sealed crystal hash is restored on reload.
