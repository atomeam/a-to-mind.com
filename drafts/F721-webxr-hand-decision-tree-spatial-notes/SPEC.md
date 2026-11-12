# Plain name: Hand Pose Spatial Notes
# Job: Arrange floating note cards with WebXR hand poses or pointer; train simple local decision rules; seal and download your layout and mappings.

**Ledger ID**: F-721 (frontier series)
**Slug**: webxr-hand-decision-tree-spatial-notes
**Date**: 2026-11-12
**Branch from**: Recent cluster of WebGPU volumetric (SDF sculptor F720, Gaussian splats F717), spatial audio agents (Q-learning F713, panner MLP F715), device sensor portals (Bayesian Coulomb F714, Kalman advection F716), MLP DOM WebRTC swarm (F719), material estimator (F718). Explicitly leaves all WebGPU kernels, particle/continuum fields, MLP/RNN policies, spatial audio, residual predictors, NCA, and pure orientation-driven models.

**Concept**
A novel hybrid spatial interface for The Verse canvas: true WebXR hand tracking (joint positions when available) provides causal input features (pinch distance, finger extension angles, palm orientation) to a population of tiny local decision trees. Each floating DOM note card is controlled by its own decision tree that classifies the current hand pose into actions (approach, flee, stick, free). User can correct by dragging; successful corrections reinforce tree splits. Best trees seal their parameters to IndexedDB and can be transferred via BroadcastChannel. Fallback to pointer residual. Entire layout and sealed rules export as JSON or shareable hash. Offline-capable single file.

This is a previously unattempted combination: WebXR skeletal input → decision-tree policies → hybrid DOM physical embodiment with sealed parameter transfer. Not a canvas simulation, not neural weights, not audio.

**Architecture**
- Single index.html, pure HTML/CSS/JS, no libraries.
- WebXR: immersive-ar or inline session with hand-tracking (if supported); extracts wrist, thumb-tip, index-tip positions.
- Features: normalized pinch dist, index extension, palm tilt (from orientation or joint).
- Per-card decision tree: 3 binary splits on features → 4 actions.
- DOM: absolute-positioned note cards (contenteditable), pointer-draggable.
- Persistence: IndexedDB `verse-f721-notes`.
- BroadcastChannel for optional multi-tab rule share.
- Controls: Enter XR, Add Note, Seal Best, Download JSON, Share Link, Reset.

**Mechanics**
1. Request XR session or use pointer.
2. Each frame sample hand features (or pointer residual as proxy).
3. Each card's tree evaluates features → velocity update.
4. User drag overrides and can retrain a split (simple threshold adjust).
5. Seal stores tree params + positions.
6. Export JSON of notes + trees.

**Expected outcome**
Open page. Add notes. If WebXR hands available, enter session and pose hands to move cards (pinch to grab). Otherwise drag with pointer; trees still react to residual. Seal preserves preferred rules. Download or share the arrangement. Works offline.

**Failure modes**
- No WebXR/hand-tracking: full pointer fallback, still interactive.
- IndexedDB blocked: session-only.
- Permission denied: clear message.

**Files**
drafts/F721-webxr-hand-decision-tree-spatial-notes/SPEC.md
drafts/F721-webxr-hand-decision-tree-spatial-notes/index.html

Void is now Verse everywhere.
