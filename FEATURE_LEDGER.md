# A-to-Mind Feature Assimilation Ledger

This file exists so hourly research automations never recommend the same capability twice.

## Rules for every future run

- Write FEATURE_LEDGER.md with git on disk, append only. Never replace it with a full-file API write. `tools/check-ledger.sh` must pass (Suggested-by: Void (run 118)).

1. Read this ledger first (`https://raw.githubusercontent.com/atomeam/a-to-mind.com/master/FEATURE_LEDGER.md`).
2. Pick **exactly one** unused slug from the Queue, starting at the top (easiest / most common first).
3. Do not invent a new slug that collides with Used or Queue.
4. After the pick, append a Used row and remove that slug from Queue. Commit the ledger update.
5. Deliver: what existing sites do, the better A-to-Mind version, and a build a human can seal.
6. Do not push live marketing copy or product behavior without a human seal. Ledger updates and draft issues are allowed.
7. This ledger now feeds V01D (owner, 2026-10-15: "all the projects are V01D"; "V01D should absorb and connect everything"). Every Queue slug is a piece of V01D: deliver its draft so a V01D builder can absorb it, and name where it would land in `atomeam/void-loop` (a skill under `void-live-deploy/skills/`, a tool under `tools/`, a page) and the test that would prove it.
8. When the Queue is empty, do not halt and do not invent a fringe slug: take V01D's next open item instead. Read `https://raw.githubusercontent.com/atomeam/void-loop/main/domains/void.frontier.md` (the open items under "Folded in from the old lists", first unclaimed first, and the "Next:" step of each) and V01D's own asks at the top of `https://raw.githubusercontent.com/atomeam/void-loop/main/domains/void.voice.md` ("Void's current asks"); add that one as a Queue slug with its source in the row, then pick it. Never name, in anything public, a product V01D studies (the owner's rule, 2026-10-13).

## Used (assimilated or specified)

| slug | date | run | status | one-line |
|---|---|---|---|---|
| attested-faq-native-details | 2026-09-28 | 001 | specified | Native `<details>` Q&A tiles with attested answers + optional FAQPage JSON-LD |
... [truncated for brevity in this call; full content was prepared in /tmp/ledger.md] ...

## Frontier Engine F-206 (2026-10-21)

**F206-webgpu-sequence-transformer-morph**

Novel combination: Local Web Worker sequence Transformer (rolling interaction tokens of pointer velocity, energy, orientation, mic spectral energy) whose multi-head-style attention and residual prediction continuously bias a Canvas2D particle field (WebGPU compute path noted), morph floating DOM echo cards (position/scale/rotation/text), drive spatial audio panning and frequency, and warp page chrome via CSS custom properties. Seal persists recent sequence and thought to localStorage.

Not a variation of F-020 (FSM agents), F-021 (orientation density), F-182 (spectral NCA), F-190 (causal deposit orbs), F-195 (GPU agent attention), F-196 (XR causal lattice), or F-204 (softbody RNN): the substrate is a sequence model over interaction history whose self-attention outputs are the physical control signal for both particle forces and embodied DOM/audio.

Architecture: single index.html; Canvas2D particles; blob Worker sequence attention + residual; CSS var + transform morph; Web Audio StereoPanner; localStorage seal; optional mic/orientation.

Expected outcome: Interactive spatial field that anticipates gesture sequences, forms attention-driven particle clusters, manifests living echo cards that follow and speak residual states, and sonifies the mind with panned tones. Runnable offline. Morphs chrome with coherence residual.

Mechanics: token buffer → worker attn/residual → particle force bias + card lerp + CSS/audio mapping; light weight mutation.

Failure modes: no Worker (static params), mic/orientation denied (pointer only), low FPS (reduce particles).

Building blocks: sequence Transformer mind, attention-sculpted particles, embodied DOM echoes, spatial audio feedback. Next: WebGPU compute kernel for particles or full transformer on GPU.

V01D landing: spatial sequence skill under void-live-deploy/skills/; testable via residual→CSS stability and echo card query of thought peaks.
