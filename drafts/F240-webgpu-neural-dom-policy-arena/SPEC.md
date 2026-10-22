# F-240 WebGPU Neural Policy DOM Arena

**Date:** 2026-10-22
**Status:** runnable prototype
**Slug:** F240-webgpu-neural-dom-policy-arena

## Concept
Novel combination deliberately branching from the recent particle-swarm / fluid-lattice / residual-attention / gesture-evolved field cluster (F232–F239):

- Hybrid DOM embodiments: floating agent cards with physical inertia, bounce, and CSS transform positioning (not canvas particles).
- Local tiny MLP policies (2-layer, genome-encoded weights) that output acceleration; evaluated in batch by WebGPU compute shader when available (CPU fallback).
- Multi-agent competition: agents accumulate fitness by proximity to energy deposits placed by pointer (or future XR gaze/hand).
- Sealed genome transfer: periodically the lowest-fitness agents receive a mutated copy of the current champion genome; champion + fitness sealed to IndexedDB (SHA-256 hash of weights).
- DeviceOrientation as causal gravity/tilt input that biases all policies and physics.
- Progressive WebXR session button (full gaze/hand projection left as expansion hook).

Leaves pure field lattices, spectral/audio residuals, pointer-history deposits into particles, and pure NCA. Expands the under-explored axis of local neural kernels controlling physical UI elements + sealed competitive transfer.

## Architecture
- Single self-contained index.html.
- Agents are real DOM elements (div.agent) whose left/top are driven by physics step.
- Genome: Float32Array of MLP weights (input 4 → hidden 6 → output 2).
- Physics: simple Euler integration + boundary bounce + orientation-derived gravity.
- WebGPU path: compute shader evaluates all agents' MLPs in one dispatch (weights + state buffers); results read back for velocity update.
- Fallback: pure JS MLP eval.
- Energy deposits: click places a temporary attractor point; fitness += 1/dist when close.
- Seal button: crypto.subtle.digest of champion weights + store in IndexedDB.
- Offline-capable after first load.

## Expected outcome
Tilt the device or click to place energy. Agent cards accelerate according to their learned policies, compete, and evolve via sealed transfer. Champion genome persists. Page chrome (border, filter) responds to average fitness. Fully interactive in any modern browser; WebGPU accelerates the neural step when supported.

## Failure modes
- No WebGPU → CPU MLP path (still interactive, slower for many agents).
- Orientation permission denied → zero gravity, still works.
- IndexedDB blocked → in-memory only.
- XR unsupported → flat mode complete.
- Low FPS → reduce agent count via slider.

## Building blocks for next
- Full WebXR hand/gaze ray that places deposits and injects as additional policy input.
- WebRTC shared sealed genome field across peers.
- Persistent IndexedDB population that survives reloads and can be exported.
- Larger neural kernels or RNN state in the compute shader.

V01D landing: skill under void-live-deploy/skills/neural-dom-arena or canvas mode. Test: fitness of champion rises under fixed deposit pattern; sealed genome round-trips via IndexedDB; WebGPU path produces identical outputs to CPU within float tolerance.