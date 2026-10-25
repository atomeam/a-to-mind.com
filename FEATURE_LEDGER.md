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
| skip-link-landmarks-reduced-motion | 2026-09-28 | 002 | specified | Skip pack + named landmarks + opt-in motion; attested structure, hold-gate only |
| sitemap-robots-organization-jsonld | 2026-09-28 | 003 | specified | Attested robots + sitemap + lean Organization/WebSite JSON-LD; no invented address |
| native-dialog-seal-gate | 2026-09-28 | 004 | specified | Native `<dialog>` hold-gate; closedby none on writes; hashed grant; focus on Hold |
| copy-clipboard-with-attested-toast | 2026-09-29 | 005 | specified | Allowlisted writeText + SHA-256 receipt toast; no clipboard read; hold-gate only |
| hashed-public-changelog | 2026-09-29 | 006 | specified | Sealed Keep-a-Changelog page; per-entry SHA-256; no Unreleased; no CTA; hold-gate only |
| attested-status-page | 2026-09-29 | 007 | specified | Hashed status snapshot; unattested default; no auto-green; no subscribe; hold-gate only |
| gated-command-palette | 2026-09-29 | 008 | specified | Attested Cmd/Ctrl+K catalog; navigate/copy allowlisted; writes hold; no cmdk |
| 404-useful-not-cute | 2026-09-29 | 009 | specified | Honest HTTP 404 + attested dest catalog; no cute, no search backend; hold-gate only |
| void-monthly-email-capture | 2026-09-29 | 010 | specified | Double-opt-in notes list; no popup; hold until confirm; hashed purpose; hold-gate only |
| theme-prefers-color-scheme-toggle | 2026-09-29 | 011 | specified | System-default scheme; 3-state radios; hashed contract; no cookie; hold-gate only |
| bento-capability-grid | 2026-09-30 | 012 | specified | Attested 6-tile CSS Grid; span from catalog; no motion theater; hold-gate only |
| variable-font-kinetic-headline | 2026-09-30 | 013 | specified | Opt-in one-shot wght/opsz settle; one text node; no GSAP; hold-gate only |
| view-transitions-api | 2026-09-30 | 014 | specified | Opt-in same-doc pane fade; no MPA auto; allowlisted name; hold-gate only |
| popover-api-nav-menus | 2026-09-30 | 015 | specified | Click-only `popover=auto` dest list; hashed hrefs; no hover/ARIA menu; hold-gate only |
| web-share-and-copy-run-link | 2026-09-30 | 016 | specified | Attested run URL only; canShare exact payload; copy ≠ share; no social row; hold-gate only |
| interactive-budget-estimator | 2026-09-30 | 017 | specified | Attested $49 rate card; token cap ≠ price; checkout holds; hold-gate only |
| live-readonly-run-preview | 2026-09-30 | 018 | specified | Local attested event replay; no SSE/WS; steer holds; hold-gate only |
| glassbox-view-source-page | 2026-09-30 | 019 | specified | First-party hashed source catalog; no proxy; bytes default unattested; hold-gate only |
| answer-ready-modular-blocks | 2026-09-30 | 020 | specified | Six hashed self-contained blocks; no chatbot; no FAQPage emit; hold-gate only |
| pwa-install-and-offline-ledger | 2026-09-30 | 021 | specified | Allowlisted SW + honest install; offline ledger not a run promise; hold-gate only |
| voice-query-to-plan | 2026-09-30 | 022 | specified | Gesture listen; catalog plan; transcript is data; run holds; no TTS |
| agentic-personalization-with-hold-gate | 2026-09-30 | 023 | specified | Zero-party facets only; infer deny; persist/apply hold; hold-gate only |
| functional-3d-run-graph | 2026-09-30 | 024 | specified | CSS-3D attested run graph; 2D default; no WebGL/Three; rewire holds |
| carbon-weight-badge | 2026-09-30 | 025 | specified | Sealed SWDMv4 page-weight badge; unattested default; no third-party widget; hold-gate only |
| wcag-3-continuous-audit-badge | 2026-09-30 | 026 | specified | Sealed WCAG 2.2 AA snapshot badge; WCAG 3 claim denied; no overlay; hold-gate only |

## Queue (easiest / most common first — do not skip ahead unless a used item is blocked)

_(empty from run 162 to run 170. Filled 2026-10-15 on the owner's instruction "V01D should absorb and connect everything": each slug below is a piece of V01D from the owner's other repos or V01D's own asks; source in the row.)_

| slug | source | one-line |
|---|---|---|
| linked-notes-backlinks | the-void (`src/lib/wiki.ts`, `mind.ts`) | Notes with [[links]], backlinks, a daily note and open tasks gathered from every page; lands as a V01D skill |
| what-am-i-missing-over-notes | the-void (`src/lib/deepen.ts`) | One observation, one missing link, one next action over your notes, through V01D's own answer path |
| build-loop-guard | ALPHA (`archive/aether/ALPHA_HARDENING.md`, `packages/alpha-core/src/curator.ts`) | V01D's build loop never re-proposes a failed job, caps churn on one file, catches a revert of a revert |
| verifiable-growth-ledger | glassbox (`in-flight/schema.json`) + this ledger's hashed-public-changelog | A hash per growth line and a root hash, an Atom feed and a "today" view for V01D's growth ledger |
| approval-gate-as-tests | HomeBase- (`src/alpha/curator.ts` and its tests) | No repeats, a rollback, the owner's co-sign above low risk, cooldown, as tested functions behind V01D's approve card |
| health-history-incidents | HomeBase- (`server.js`) | Repeated-failure detection, incidents that open and resolve themselves tagged with the deploy, for V01D's owner page |
| deploy-workflow-skill | auto-deploy-action (`index.ts`) | "make me a deploy workflow for netlify" as a V01D card, plus fix pages for GitHub Actions errors |
| review-bench-from-real-bugs | auto-deploy-action (`action.yml`, `index.ts`) | The action's real bugs as cases V01D's code reviewer must catch |
| realtime-room-engine | one of the owner's private repos (engine only; no game data) | A fixed-tick room-to-room engine with an input queue and collision, for V01D's first real-time game world |
| sprite-sheet-from-words | one of the owner's private repos (an MIT-licensed tool; licence kept) | Sprite sheets for V01D's figures and games from a description |
| repo-classifier-into-ouroboros | one of the owner's private repos | The file classifier and dry-run migration plans folded into V01D's Ouroboros tools |
| velocity-on-growth-card | V01D's own ask (3 times) | A velocity line on V01D's "change day over day" card: is skill-gaining speeding up or stalling |

## Halt (run 170)

Queue was still empty on 2026-10-13. Run 170 did **not** invent a Used row and did **not** promote prior candidates. Family: interval timing. Candidate draft only: `local-gap-not-duration` in `drafts/170-local-gap-not-duration/`. One-line: Local gap-not-duration; a sealed local gap class hashes to a duration-refusal id; the measurement or clock sentence is discarded and is not in the hash; a gap mark is not a duration and not a clock reading; unattested default. Live site copy was not changed. (Restored 2026-10-15: commit f280ded had blanked this file.)

## Frontier Engine F-258 (2026-10-25)

**F258-webgpu-volumetric-residual-attention-palace**

Novel combination: WebGPU 32³ volumetric residual field (compute diffusion of residual + embedding) modulated by a local Web Worker evolutionary attention policy (hill-climb MLP) that consumes device orientation tilt, pointer trajectory, and current residual to minimize prediction error. Floating DOM memory portals query residual peaks, receive 3D CSS transforms/scale/hue from attention weights and residual, and on drag consolidate a sealed genome fragment (residual snapshot + policy) into IndexedDB while injecting a persistent radial residual wave. Page chrome morphs via CSS custom properties from residual entropy. Progressive WebXR entry.

Not a superficial variation of F-253 (NCA spatial audio UI), F-250 (intent-flow hypothesis), F-248 (2D residual density portals), or F-257 (spatial attention morph UI): the substrate is a true 3D volumetric residual attention lattice whose policy is evolved online against multi-modal residual prediction, and embodiment is active sealed-genome consolidating portals rather than passive orbs or fixed NCA.

Architecture: single index.html; WebGPU compute + render; blob Worker residual policy; CSS 3D portal morph; IndexedDB seal; DeviceOrientation + pointer; optional XR.

Expected outcome: Interactive volumetric mind space that clusters residual under tilt and gesture. Portals drift to peaks, morph in 3D, and sealing persists attractors. Chrome warps with residual. Runnable offline. XR when supported.

Mechanics: WebGPU 6-neighbor residual diffusion under attention bias; worker fitness on residual error; portals lerp + CSS from residual/attention; drag seals + injects wave; CSS maps residual/entropy.

Failure modes: no WebGPU (status + extendable 2D), no Worker (static), orientation denied (tilt=0), IndexedDB blocked (in-memory), XR unsupported (flat complete).

Building blocks: WebGPU raymarch volume, residual transformer Worker, multi-portal consensus seals, XR hand deposit. Next: multi-agent volumetric residual minds sharing sealed genomes.

V01D landing: spatial volumetric-attention-palace skill; testable via residual→portal scale stability, drag→IndexedDB seal + visible wave, entropy→chrome morph.
