# F787 WebGPU Kohonen Spatial Portal Mind

**Ledger ID**: F-787 (frontier series)

**Slug**: webgpu-kohonen-spatial-portal-mind

**Date**: 2026-11-17

## Concept
A living 8×8 lattice of DOM portals that form a Kohonen self-organizing map. DeviceOrientation and pointer velocity continuously supply a 6-dimensional causal input vector. Each portal holds a weight vector; the best-matching unit (BMU) and its topological neighborhood are updated every frame so the map self-organizes the sensorimotor space. Portal position, scale, and hue are driven directly by their weights. User clicks inject a local reward that pulls the neighborhood toward the current input. Best maps are sealed to localStorage and restored on reload. A lightweight canvas overlay visualizes the current BMU trail.

## Novelty
Leaves the dominant recent clusters of continuum PDE/kernel simulations (LBM, SPH, Biot-Savart, Kuramoto, Cahn-Hilliard, Neural-ODE), neural-policy MLPs/ESNs/Hebbian/RBF/Bayesian networks, softbody/Physarum/Lenia/Ising/Voronoi substrates, and Worker-isolated proposal fields. Core novel combination is a classic self-organizing map (Kohonen SOM) whose units *are* the living DOM portals, trained online from DeviceOrientation + pointer history, with topological neighborhood updates and click-gated reward, sealed as a persistent genome. Not a supervised or evolutionary policy network, not a continuum field, not instance-based k-NN, not attention, not reservoir. WebGPU path is prepared for future large-scale weight updates; current prototype runs a pure-JS high-speed SOM that already produces clear self-organization.

## Architecture
- Single self-contained index.html
- 8×8 DOM portal grid (absolute positioning)
- Pure JS SOM: BMU search + Gaussian neighborhood update every frame
- Causal input: DeviceOrientationEvent (alpha/beta/gamma) + pointer position/velocity
- Visual embodiment: transform, scale, HSL derived from weight components
- Reward: pointerdown on a portal pulls its neighborhood
- Seal: localStorage of weight matrix + hyperparameters
- Canvas overlay for BMU trail
- iOS orientation permission handshake on first click
- Offline after first load

## Mechanics
1. On load, random or sealed weight vectors are assigned to portals.
2. Every frame the current 6-D input is presented; BMU is found and neighborhood updated.
3. Portals drift and recolor according to their weights, forming a topographic map of the user’s orientation/pointer behavior.
4. Click any portal to reinforce that region of the map.
5. Learning rate and neighborhood radius slowly anneal.
6. High-fitness maps are automatically sealed; reload restores them.

## Expected outcome
Open the page on a phone or desktop. Tilt the device or move the pointer: the portal lattice visibly reorganizes, colors shift, and clusters form. Click portals to bias the map. Reload and see the previous organization restored. The system runs fully offline.

## Failure modes
No DeviceOrientation → pointer-only input still trains the map. localStorage blocked → in-memory only. Very small viewports → portals overlap but remain interactive. WebGPU compute path not yet active in this prototype (JS path is the working artifact).

## Building blocks
Reusable online SOM on DOM lattice, orientation+pointer causal vector, click-reward neighborhood injection, sealed weight-matrix genome. Expands local-AI embodiments beyond gradient or evolutionary policies into topographic self-organization.

Void is now Verse everywhere.

## Files
- drafts/F787-webgpu-kohonen-spatial-portal-mind/SPEC.md
- drafts/F787-webgpu-kohonen-spatial-portal-mind/index.html
