# F237 Orient-WebGPU MLP DOM Agents

**Area:** Spatial / local-AI canvas capability for The Void.

**Concept:** DeviceOrientation (or pointer drag) supplies a causal gravity vector to a WebGPU compute-shader particle field. Four hybrid DOM agent cards each hold a tiny local MLP that adds a learned force offset from orientation deltas. Agents compete by particle density near their wells. The top genome is sealed to IndexedDB and transferred (mutated) to the others.

**Branch from:** Recent interactive narrative/game tools cluster (F233 panel-play, F234 loop-grid, F235 forge-duel, F236 scene-blocker) and earlier pure attention/residual or orientation-DOM lattices. Leaves those for WebGPU compute physics + DeviceOrientation causal input + local MLP controlling particle agents + sealed IndexedDB genome transfer + hybrid DOM+canvas.

**Novel combination:** WebGPU compute particle physics kernel + DeviceOrientation as primary causal driver + per-agent tiny MLP force policies + multi-agent density scoring + IndexedDB sealed genome transfer.

**Run:** Open index.html. Works offline after load. Tilt device (request permission if prompted) or drag on canvas to set gravity. Click agent cards to select. Seal Top Genome persists and redistributes. Reset restarts particles and agents.

**Expected outcome:** Particles fall under tilt/drag gravity. Active agent MLP modulates the force. Scores rise when particles gather near wells. Seal stores genome; reload restores it into agent 0. Fully client-side.

**Failure modes:** No WebGPU (status message, no sim), orientation permission denied (drag fallback), IndexedDB blocked (in-memory seal only), low GPU (reduce N).

**Building blocks for next:** WebGPU compute particle kernel driven by DeviceOrientation, local MLP agents with sealed transfer, hybrid DOM controls. Extend with full GPU readback scoring, WebRTC shared sealed fields, or hand-tracking forces.

_Renumbered on 2026-10-29: this draft was F237-orient-webgpu-mlp-dom (F-237), a number it shared with F237-spoken-fluid-intent, which keeps F-237 because the frontier ledger records it. Its number is now F-437; see drafts/NUMBERS.md._
