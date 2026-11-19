# F835-canvas-cnn-spatial-feature-portal-mind

**Ledger ID**: F-835  
**Slug**: canvas-cnn-spatial-feature-portal-mind  
**Date**: 2026-11-19  
**Status**: frontier prototype  

## Concept
A previously unexplored local-AI substrate for The Verse canvas: a pure-JS tiny Convolutional Neural Network that treats the live pointer-activity density map (rendered to a low-res Canvas) as an image. The CNN extracts spatial features via successive 3×3 convolutions + ReLU + pooling. Feature activations are projected into continuous control signals that physically morph a population of absolute-positioned DOM Verse portals (scale, hue, border-radius, position offset). User clicks on portals act as positive rewards that perform a simple evolutionary mutation on the convolutional kernels. The activity map and feature heat are visualized live. Seal persists the kernel weights to IndexedDB. Fully offline single-file.

## Novelty
Leaves the dominant recent cluster of continuum WebGPU kernels (LBM, SPH, Gray-Scott, wave, Poisson, radiosity, DEM granular), sequence models (transformer attention on tokens F822, Hopfield attractors F823, GNN message-passing F810, HMM, ESN/RNN/MLP residual predictors), genetic/expression-tree genomes, sealed competitive agents, speech/flowchart tools, and sensor-driven (orientation/WebXR) force fields.  
Core novel combination is convolutional feature extraction on a live spatial density image (not feed-forward on scalar history, not recurrent hidden state, not associative energy, not graph message passing) whose feature maps directly drive the physical CSS embodiment of living DOM portals, closed by click-reward kernel mutation. First use of a local CNN as the primary spatial mind.

## Architecture
- Single self-contained index.html.
- Activity canvas (low-res, ~64×64 logical): pointer moves paint decaying density.
- CNN: two conv layers (4 filters each, 3×3), ReLU, 2×2 max-pool. Pure JS convolution (no libraries).
- Feature vector (pooled) → linear projection → portal control parameters.
- 6–8 absolute DOM portals with editable content; they lerp to feature-driven poses.
- Click reward: mutate a random kernel weight by small Gaussian noise.
- IndexedDB key `verse-f835` for kernels + portal content.
- Progressive: works on desktop/mobile with pointer/touch.

## Expected outcome
Moving the pointer builds a spatial activity image; the CNN extracts features that cause the Verse portals to dance, recolor, and reconfigure in response. Clicks reinforce interesting behaviors by evolving the kernels. Reload restores the last mind. Expands the frontier into image-based local convolutional reasoning on the Verse canvas.

## Failure modes
- Very low-end device: reduce canvas resolution or filter count.
- IndexedDB blocked: session memory only.
- No pointer: static demo mode with synthetic activity.

## Building blocks
Reusable pure-JS 2D convolution + tiny CNN feature extractor on canvas activity maps. Enables future deeper local CNNs, feature-based attention, or hybrid with WebGPU compute convolution kernels on Verse.

**Void is now Verse everywhere.**
