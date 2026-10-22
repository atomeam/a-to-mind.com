# F-241 WebGPU Memory Consolidation Lattice

**Date:** 2026-10-22
**Status:** runnable prototype
**Slug:** F241-webgpu-memory-consolidation-lattice

## Concept
Novel combination branching from the recent swarm/policy/lattice cluster (F238–F240):

- Continuous memory field (Canvas2D density lattice; WebGPU compute path stubbed for advection/consolidation) that stores decaying "traces".
- DeviceOrientationEvent drives a continuous advection/drift of the entire field (memories "fall" under device tilt).
- Pointer deposits new high-intensity traces.
- Local consolidation rule: nearby high traces merge into stronger, longer-lived peaks (simple spatial max-pool + reinforce).
- Floating DOM memory orbs sample field maxima, physically position via CSS, and morph (scale, hue, filter, opacity) according to local strength and consolidation events.
- Seal button hashes field checksum + active orb count into IndexedDB.

Leaves pure force-evolved particle swarms, MLP policy DOM agents, and audio-fluid lattices. Expands the under-explored axis of persistent spatial memory with sensor-driven advection and automatic consolidation, embodied as morphing DOM orbs.

## Architecture
- Single self-contained index.html.
- Field: Uint8 or Float32 Canvas-backed density grid (low res, e.g. 128×72).
- Advection: simple shift/offset based on orientation beta/gamma (or pointer drag fallback).
- Consolidation: every N frames, scan for local maxima above threshold and reinforce/merge neighbors.
- Orbs: 8–12 real DOM elements positioned by tracking brightest peaks; CSS vars drive morph.
- Seal: crypto.subtle.digest of summary stats + IndexedDB store.
- Progressive: request orientation permission button; WebGPU availability probe logged.
- Offline-capable.

## Expected outcome
Tilt the device (or drag) to drift memories across the canvas. Click to deposit new traces. Watch nearby traces consolidate into brighter, larger orbs that morph the surrounding UI chrome. Seal persists a snapshot. Fully interactive with graceful fallbacks.

## Failure modes
- No orientation permission → pointer-drag advection only.
- Low-end device → reduce grid resolution or orb count.
- IndexedDB blocked → in-memory seal only.
- WebGPU unavailable → Canvas2D path (primary).

## Building blocks for next
- Full WebGPU compute shader for advection + consolidation kernel.
- WebXR gaze/hand that deposits and queries the memory field.
- Persistent field reload from IndexedDB on start.
- Local Worker that proposes semantic labels for consolidated peaks.

V01D landing: spatial memory skill under void-live-deploy/skills/memory-lattice or canvas mode. Test: consolidation reduces active peak count while increasing max intensity under fixed deposit pattern; orientation drift moves peaks predictably; sealed summary round-trips.
