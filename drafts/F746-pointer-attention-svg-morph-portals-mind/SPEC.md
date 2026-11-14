# F746 Pointer-Attention SVG Morph Portals Mind

**Ledger ID**: F-746 (frontier series)

**Slug**: pointer-attention-svg-morph-portals-mind

**Date**: 2026-11-13

**Concept**
A pure-JS local multi-head attention mind over a rolling history of pointer events (position + velocity). Attention outputs continuously morph a set of living SVG path portals (cubic Bezier control points and fill hues). Portals are hybrid DOM+SVG elements that can be clicked for reward, which strengthens the attention weights via a simple local update rule. Background Canvas2D visualizes the attention matrix heat. Best weights seal to IndexedDB and transfer via BroadcastChannel. Fully offline single-file prototype.

**Architecture**
- Single self-contained index.html.
- Attention: 4 heads, history length 16, dim 8 (pos/vel features). Pure JS matrix ops, no libs.
- Embodiment: 5 absolute SVG path elements whose d-attribute and style are driven by attention readout. Pointer history feeds the keys/values.
- Reward: click on portal → positive fitness delta → local Hebbian-style weight update + mutation of weak heads.
- Persistence: IndexedDB `verse-f746-attn`. BroadcastChannel `f746-genomes`.
- Visual: Full-screen canvas for attention heat + pointer trail. Status chrome.

**Mechanics**
1. Pointer move records normalized (x,y,vx,vy) into circular buffer.
2. Each frame: compute queries from current pointer, attend over history, produce morph deltas and hue shifts.
3. Apply to SVG path controls; draw attention matrix on canvas.
4. Click portal → reward → update projection weights; if superior, propose transfer.
5. Seal button persists best. Other tabs adopt higher-fitness genomes.

**Expected outcome**
Open page, move pointer: SVG portals continuously morph in response to trajectory attention. Click promising shapes to reinforce. Seal and open second tab: better attention genome migrates, altering morph behavior. Works offline.

**Failure modes**
- No IndexedDB: in-memory only.
- No BroadcastChannel: local only.
- Low pointer activity: static morphs until movement.

**Building blocks**
Reusable pure-JS multi-head attention over spatial event histories, SVG path parametric control from attention readout, reward-gated weight transfer. Ready for WebGPU attention kernels or larger history.

Void is now Verse everywhere.
