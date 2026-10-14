# Feature Ledger – a-to-mind.com / The Void

Permanent concept memory for frontier experiments.

## 020-webgpu-void-agents (2026-10-14)
- **Concept**: WebGPU/Canvas2D emergent particle agents with local finite-state reasoning that morphs the surrounding UI chrome (border, glow, status) according to global entropy and consensus.
- **Architecture**: Single self-contained HTML. Agents update via simple boid-like forces + state machine driven by mouse proximity and neighbor counts. Stats (avg speed, cluster ratio) compute a "mood" that sets CSS variables on the root, changing border hue/intensity and status text.
- **Expected outcome**: Interactive living spatial field on the Void canvas. Runnable without external deps. Demonstrates novel combo of GPU-style sim + local agent decision + UI that physically responds to the system's internal state.
- **Failure modes**: No WebGPU (uses 2D fallback). High counts throttled by naive neighbor search. Documented for next experiments to add proper compute shaders or spatial partitioning.
- **Builds on**: Prior drafts focused on static tiles, dialogs, and attested UI. This introduces dynamic spatial simulation as a canvas primitive.

Previous drafts (002–019) covered accessibility, SEO, dialogs, clipboard, changelog, status, command palette, 404, email capture, theme, bento, kinetic type, view transitions, popover, share, estimator, preview, glassbox source.
