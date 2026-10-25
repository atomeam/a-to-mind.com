# Frontier Experiment: Curiosity Lattice

## Concept
Novel combination of a Canvas2D spatial particle field representing concepts (WebGPU-ready architecture), a local JS curiosity agent that preferentially explores low-density regions and seeds new concept labels, and a UI chrome (background hue, particle size, status) that physically responds to a coherence metric computed from the field's spatial entropy proxy.

This expands the Void canvas with an interactive spatial "mind" that generates its own exploratory content without external models.

## Architecture
- Single self-contained HTML/JS file.
- Particle agents with position/velocity, each carrying a concept label.
- Local density bucketing each frame to compute variance → coherence.
- Mouse as attractor/repulsor; buttons for seeding and low-density exploration.
- UI morphs background and particle rendering based on coherence.

## Expected outcome
Runnable interactive prototype demonstrating emergent spatial exploration and interface response. Failure modes: too many particles → frame drop (throttled by requestAnimationFrame); no WebGPU used in this minimal version for broad compatibility.

## Mechanics
- Move mouse to influence agents.
- "Seed concept" injects a new labeled cluster at center.
- "Explore low-density" adds agents in sparse regions with derived labels.
- Coherence (clustering quality) alters ambient color and particle scale.
