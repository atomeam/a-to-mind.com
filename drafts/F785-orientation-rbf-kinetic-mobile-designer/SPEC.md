# F785 Kinetic Mobile Designer
Plain name: Kinetic Mobile Designer
Job: Design a hanging kinetic mobile sculpture by choosing the number of arms and colors, then use your device tilt or pointer to live-sculpt the positions and angles; get back a downloadable CSS snippet, PNG snapshot, or sealed design for next time.
Input: Number of arms (slider), color palette choices, DeviceOrientation tilt or pointer drag to adjust node positions and rotations in real time.
Keeps: Download CSS code, download PNG of the current design, copy the CSS, seal design to device storage for reload.
Not on Verse yet: Checked against recent tools; no kinetic mobile designer or orientation-sculpted CSS hierarchy exists.

## Concept
A useful design tool for The Verse: a hierarchical CSS 3D kinetic mobile (nested absolute divs with transform-style: preserve-3d) whose node positions, rotations, and lengths are controlled by a tiny local Radial Basis Function (RBF) network. Causal inputs are DeviceOrientation (beta/gamma) and pointer velocity. The RBF (centers and weights adapted online from user drags) predicts smooth control signals. Multi-arm competition for visual balance (measured by click "approval"). Sealed RBF hyperparameters + design state via localStorage. Branches away from recent continuum PDE/kernel cluster (SPH/LBM/SDF/NeuralODE/Voronoi) and direct policy/Bayesian DOM morphs by using RBF kernel regression as the local model on a pure CSS hierarchy embodiment with design-tool output.

## Architecture
- Single self-contained index.html
- 3-7 nested CSS arms forming a mobile
- Tiny RBF: 4 centers in (beta, gamma, px, py) space, Gaussian kernels, online weight update on drag
- Live sculpt via tilt or pointer
- Download PNG (canvas capture), CSS snippet, localStorage seal
- Offline after load, phone-friendly

## Mechanics
1. User sets arm count and colors.
2. Orientation/pointer update RBF inputs → outputs arm angles/offsets.
3. Drag a node adapts RBF weights toward that configuration.
4. Seal or download keeps the work.
5. Fallback to pointer-only if no orientation.

Void is now Verse everywhere.
