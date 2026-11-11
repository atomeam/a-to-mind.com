# F664 Orientation-Causal L-System SVG Genome Swarm

**Ledger ID**: F-664 (frontier series)

**Slug**: orientation-lsystem-svg-genome

**Date**: 2026-11-11

**Branch from**: Recent cluster of practical utility tools (bill splitters, unit converters, QR generators, habit trackers, meme makers, scoreboards, seating charts, chore rotas — F630–F663) and residual WebXR/MLP constraint DOM swarms or spiking LIF minds. Explicitly leaves calculators, localStorage form tools, residual predictors, orientation RNNs on continuum kernels, attention lattices, NCA, spectral residuals, softbody, particle systems, and k-means.

## Concept
DeviceOrientation (or pointer velocity) is causal input to a local tiny feed-forward MLP. The MLP outputs mutation rates and rule probabilities for a population of competing Lindenmayer systems (L-systems). Each agent is embodied as a living absolute-positioned DOM card containing a generative SVG path produced by turtle interpretation of its current string. Overlap of cards triggers sealed genome transfer (production rules + axiom) over BroadcastChannel. Best genomes persist in IndexedDB. Fully offline single-file prototype.

## Novelty
Leaves the dominant recent practical-tool cluster and prior sensor-driven neural policies on physics/CA/particle kernels. Core novel combination is DeviceOrientation as causal input to a never-before-used local MLP that parametrizes classical L-system rewriting (previously unused generative kernel in any F- draft), with true hybrid embodiment of generative SVG geometry on physical DOM cards under multi-agent proximity-gated sealed genome transfer over IndexedDB + BroadcastChannel shared field. Not continuum fields, not neural cellular automata, not particle collisions, not CSS Grid reflow, not residual predictors.

## Architecture
- Single index.html.
- 6 absolute DOM cards, each with its own L-system (axiom + 2–3 rules) and SVG.
- Local MLP (shared or per-agent; input 4: beta, gamma, vx, vy; hidden 6; output 3: mutate-prob, angle-scale, step-scale).
- Rewriting + turtle each frame or on mutation; update path d attribute.
- Fitness: path length + click rewards + proximity to pointer.
- BroadcastChannel 'f664-genome'; IndexedDB 'verse-f664'.
- Seal button persists best rules.

## Expected outcome
Runnable prototype where tilting or moving pointer mutates L-system rules via MLP, cards grow organic SVG branches, overlapping cards exchange sealed genomes (hue shifts), Seal + reload restores. Offline-capable. Progressive pointer fallback.

## Mechanics
1. Initialize random rules or load from IDB; spawn cards.
2. On frame: sample orientation/pointer; run MLP; with probability mutate a rule character; rewrite string (depth 3–4); turtle to SVG path; update DOM.
3. On card overlap, hash rule string, post to channel, adopt if better fitness.
4. Click card rewards and pins temporarily.
5. Seal persists.

## Failure modes
- No DeviceOrientation: pointer-only remains interactive.
- IndexedDB blocked: session-only.
- Long strings: cap depth and length for performance.
- SVG path too complex: simplify turtle.

## Files
- drafts/F664-orientation-lsystem-svg-genome/SPEC.md
- drafts/F664-orientation-lsystem-svg-genome/index.html

## V01D landing
Orientation L-system SVG genome skill under void-live-deploy/skills/orientation-lsystem-svg.js; test asserts tilt changes rule mutation rate, overlap posts genome, and reload restores at least one production rule.
