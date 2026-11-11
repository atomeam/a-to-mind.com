# F669 Motion wallpaper maker

Plain name: Motion wallpaper maker

Job: Tilt your phone or drag on the screen to paint energy into a live wave field; a tiny local causal model steers the evolution; freeze a frame and download it as a PNG wallpaper (or copy the seed and params for later replay).

Input: DeviceOrientationEvent (alpha/beta/gamma) or pointer drag as causal sequential input; optional seed and parameter sliders.

Keeps: Download current frame as PNG; copy seed + params as text; last state restored from localStorage (`verse-f669-wallpaper`); share link carries seed via URL hash.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no motion-driven generative wallpaper exporter with local causal model and wave kernel.

## Novelty
Leaves the dominant recent cluster of spatial layout planners (F663–F667 room/kanban/dependency/seating/chore) and orientation-driven generative palettes/L-systems (F664, F668, F662). Core novel combination is a previously under-used continuous wave-evolution kernel (WebGPU compute preferred, Canvas2D fallback) whose parameters are modulated in real time by a pure-JS Elman-style causal MLP taking sequential orientation/pointer history, with the sole purpose of producing freeze-and-export PNG wallpapers. Not a spatial planner, not an eyedropper palette, not L-system, not a particle/swarm/mind demo.

## Implementation notes
- Single-file index.html, offline after load.
- Tiny MLP (~20–30 weights) with recurrent hidden state; inputs are recent orientation deltas or pointer velocity; outputs modulate wave speed, damping, and injection gain.
- Wave kernel: discrete 2D wave equation on a grid (WebGPU storage buffer path sketched; Canvas2D ImageData path as reliable fallback).
- User can freeze, download via canvas.toBlob, reset, or load prior seed.
- Persistent last params + seed in localStorage; URL hash for shareable seed.

## Failure modes
- DeviceOrientation requires secure context and permission on some browsers; falls back to pointer.
- WebGPU unavailable on some devices → Canvas2D path.
- High-res export may be memory-heavy on very old phones; default 1024×1024 is safe.

## Files
drafts/F669-motion-wave-wallpaper-maker/SPEC.md
drafts/F669-motion-wave-wallpaper-maker/index.html
