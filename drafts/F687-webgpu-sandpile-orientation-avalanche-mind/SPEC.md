# F687 WebGPU Sandpile Orientation Avalanche Mind

## Concept
A previously unused 2D Abelian sandpile (Bak-Tang-Wiesenfeld) kernel on a discrete grid. DeviceOrientation or pointer residual injects grains of sand. Sites topple when exceeding a threshold, producing avalanches whose size, duration, and spatial pattern drive visual rendering and the physical placement/scale of living DOM portals. A tiny local evolutionary controller (or simple MLP) modulates addition rate and critical threshold from recent orientation history. Avalanche events can be sealed; full lattice + parameters persist in IndexedDB. Fully offline, single-file progressive enhancement.

## Novelty
Leaves the dominant recent cluster of continuum kernels (LBM, Gray-Scott, percolation, wave-equation membranes F686/F518, vortex, softbody, NCA, Lenia, Physarum), multi-agent particle/genome swarms, inertial filters, step counters, anchor-positioning agents, residual predictors, orientation MLPs on other substrates, spectral/audio residuals, and graph PageRank. Core novel combination is the Abelian sandpile / self-organized criticality model (discrete threshold toppling, not continuous diffusion, not particles, not springs, not oscillators) as the primary mind substrate, with DeviceOrientation as the causal grain-injection field and DOM portals that ride avalanche crests or act as manual grain sources. Not a reaction-diffusion, not a wave equation, not a fluid, not a softbody.

## Architecture
- Single index.html, vanilla JS.
- 96×96 sandpile lattice (CPU toppling loop with queue for efficiency; Canvas2D render; WebGPU context reserved for future compute path).
- Orientation (permissioned) or pointer velocity residual → mapped to grain-addition locus and rate.
- Tiny controller: 4 inputs (oriX, oriY, recent avalanche size, time) → 2 outputs (rate bias, threshold bias) with simple mutation on click-reward.
- 4–6 absolute-positioned DOM portals that translate toward high topple-count sites and scale with local height; click a portal to inject grains or reward the controller.
- Avalanche visualization: color by topple count or height; optional Web Audio short tones on large avalanches.
- Seal button → IndexedDB `verse-f687` stores {lattice, params, controller, timestamp}.
- Offline, no external deps. Pointer always works; orientation optional.

## Expected outcome
Open page (grant orientation if prompted). Tilt or move pointer; grains accumulate and spontaneously avalanche. Portals drift toward active regions and bob with local height. Click to reward or inject. Seal and reload restores the exact lattice and controller.

## Failure modes
- Orientation denied/unsupported: pointer residual only.
- IndexedDB blocked/private: session memory only.
- Large avalanches on high-res: kept modest (96²) and queue-based to stay interactive.
- WebGPU unavailable: Canvas2D fully functional.

## Mechanics
1. Init lattice to near-critical random or load sealed.
2. Each frame: sample orientation/pointer → controller forward → add grains at locus → run toppling until stable → update portal positions from activity map → render height/topples to canvas.
3. Click portal: inject grains + fitness bump + small controller mutation.
4. Seal: serialize lattice + controller to IndexedDB.

Void is now Verse everywhere.
