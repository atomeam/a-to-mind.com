# F-242 Acoustic Orientation Crystal Mind

**Date:** 2026-10-22  
**Status:** runnable prototype  
**Slug:** F242-acoustic-orientation-crystal-mind

## Concept
Novel combination branching from the recent memory-lattice / neural-DOM / fluid / swarm cluster (F238–F241):

- Continuous acoustic-energy density field (Canvas2D, WebGPU compute path noted) driven by real-time microphone spectral energy (AnalyserNode bins) rather than pointer deposits alone.
- DeviceOrientationEvent continuously advects / "blows" the entire field like wind, so sound memories drift under physical tilt.
- Local consolidation rule turns persistent high-density regions into discrete "crystals" — real DOM elements that physically embody the memory, can be dragged, and whose CSS morph (scale, hue, blur, border) tracks remaining energy.
- Each crystal also modulates a simple Web Audio oscillator / filter bank so the mind is audible; dragging a crystal changes its pitch contribution.
- Seal hashes active crystal signatures + field checksum into IndexedDB (OPFS expansion noted).

Leaves pure pointer-deposit lattices, MLP policy arenas, and visual-only consolidation. Expands the under-explored axis of continuous sensory (acoustic + orientation) ingestion that crystallizes into interactive, sonified DOM embodiments with sealed local persistence.

## Architecture
- Single self-contained index.html.
- Field: low-res Float32 density grid rendered to Canvas2D (128×72).
- Mic: getUserMedia → AnalyserNode → average energy of mid bands injected as soft deposits at a virtual "ear" point that also drifts with orientation.
- Advection: orientation beta/gamma offsets the field each frame (pointer-drag fallback).
- Consolidation: every N frames local maxima above threshold spawn or reinforce a DOM crystal; crystals slowly decay energy back into field or dissipate.
- Crystals: 0–16 real `<div class="crystal">` elements; CSS variables drive morph; pointer events allow drag (which also injects residual energy).
- Audio: one OscillatorNode + BiquadFilter per active crystal, gain scaled by energy; master volume controlled.
- Seal: crypto.subtle.digest of summary + IndexedDB store under key "F242-seal".
- Progressive: permission buttons for mic + orientation; WebGPU availability logged; fully offline after first load.

## Expected outcome
Grant mic + tilt the device (or drag). Speak or make sound near the mic; energy appears and drifts under orientation. Watch persistent peaks crystallize into draggable, morphing DOM orbs that also sing. Seal persists a snapshot. Fully interactive with graceful fallbacks (no mic → pointer deposits only; no orientation → static field).

## Failure modes
- Mic permission denied → pointer-only deposits.
- Orientation denied → no advection (or pointer-drag).
- IndexedDB blocked → in-memory seal only.
- Autoplay policy → audio starts only after user gesture.
- Low-end device → reduce grid / crystal count.

## Building blocks for next
- Full WebGPU compute for spectral deposit + advection + consolidation kernel.
- WebXR hand/gaze that "speaks" into the field or grabs crystals.
- OPFS persistence of full field + crystal genomes that reload on start.
- Local Worker that assigns symbolic labels to crystals from residual spectral signature.

V01D landing: sensory-memory skill under void-live-deploy/skills/acoustic-crystal or canvas mode. Test: spectral energy raises field density; orientation drifts peaks predictably; crystal count stabilizes under constant sound; sealed summary round-trips.
