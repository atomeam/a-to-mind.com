# F681: Multi-Agent Collision Genome Particle Mind

**Ledger ID**: F-681  
**Slug**: multiagent-collision-genome-particle-mind  
**Date**: 2026-11-11  

## Concept
A competitive multi-agent local-AI embodiment for The Verse canvas. Several independent tiny MLPs (pure JS, 4-6-2) each control a colored particle swarm on a Canvas2D. Causal inputs are recent pointer residual (actual vs simple predictor) and DeviceOrientation tilt. Outputs bias force and speed for that agent's particles. When particles of different agents collide, the higher-fitness agent seals and absorbs the loser's genome weights (simple average with noise). User clicks a particle to reward its agent (fitness++). Best genome persists to IndexedDB and broadcasts via BroadcastChannel so other tabs adopt the winner. No continuum field kernel, no WebGPU compute, no single global MLP. Pure agent competition + sealed transfer via physical collision.

## Novelty
Leaves the dominant recent cluster of continuum WebGPU kernels (LBM F676, Gray-Scott F677, percolation F678, noise F675, spatial-audio particles F680) and residual-MLP field controllers, softbody DOM constraints, and practical utilities. Core novel combination is multi-agent local MLPs whose genomes transfer only on particle-particle collision events, with DeviceOrientation + pointer residual as causal inputs to agent-specific force biases, living on a shared Canvas. Not a single field, not NCA, not spectral, not packing, not summarizer.

## Architecture
- Single self-contained index.html, offline after load.
- Canvas 2D particles: ~150 total, partitioned among 4 agents (colors).
- Each agent: MLP weights (random init or loaded), fitness, color.
- Update: pointer residual + orientation → MLP → force bias applied to agent's particles.
- Collision: if dist < threshold and different agents, winner (higher fitness or random if equal) copies/averages genome, loser mutates.
- Reward: click near particle → that agent fitness +=1.
- Seal: button saves best agent genome + stats to IndexedDB key `verse-f681`, BroadcastChannel posts it.
- Controls: Request Orientation, Seal Best, Reset Agents, Add Agent.
- Fallback: pointer only; orientation optional.

## Expected outcome
Open, move pointer or tilt; particles of different colors interact; collisions cause genome shifts visible as behavior changes; click to favor one; Seal persists and other tabs can receive; reload restores best.

## Failure modes
- Orientation denied: pointer residual only.
- IndexedDB blocked: session memory only.
- Too many particles: capped at 200.
- BroadcastChannel same-origin only.

Void is now Verse everywhere.
