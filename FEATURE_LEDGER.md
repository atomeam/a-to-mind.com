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

## Halt (run 169)

Queue was still empty on 2026-10-13. Run 169 did **not** invent a Used row and did **not** promote prior candidates. Family: attention/interoception (unused in the prior six runs; last six were weak-signal hypothesis ledger 163, human-machine co-agency 164, opt-in gesture or gaze as local input 165, collective-memory miss board 166, non-lexical intent capture 167, quiet-signal filter 168; prior use was run 159, slug `local-sensation-not-claim`). Candidate draft only: `local-felt-not-attest` in `drafts/169-local-felt-not-attest/`. One-line: Local felt-not-attest; a sealed local interoceptive class hashes to an attestation-refusal id; the claim or report sentence is discarded and is not in the hash; a felt mark is not an attestation and not a detection; unattested default. No hold-gate issue was opened. Live site copy was not changed. No felt card was added to a live page. No attestation seal, report claim, detection score, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 168)

Queue was still empty on 2026-10-13. Run 168 did **not** invent a Used row and did **not** promote prior candidates. Family: quiet-signal filter (unused in the prior six runs; last six were private incubation log 162, weak-signal hypothesis ledger 163, human-machine co-agency 164, opt-in gesture or gaze as local input 165, collective-memory miss board 166, non-lexical intent capture 167; prior use was run 158, slug `local-filter-not-boost`). Candidate draft only: `local-attenuate-not-detect` in `drafts/168-local-attenuate-not-detect/`. One-line: Local attenuate-not-detect; a sealed quiet-signal class hashes to a detection-refusal id; the extract or amplify sentence is discarded and is not in the hash; an attenuate mark is not a detection and not a signal extraction; unattested default. No hold-gate issue was opened. Live site copy was not changed. No attenuate card was added to a live page. No detection seal, extraction claim, amplify sentence, boost badge, SNR score, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 167)

Queue was still empty on 2026-10-13. Run 167 did **not** invent a Used row and did **not** promote prior candidates. Family: non-lexical intent capture (unused in the prior six runs; last six were sensory substitution 161, private incubation log 162, weak-signal hypothesis ledger 163, human-machine co-agency 164, opt-in gesture or gaze as local input 165, collective-memory miss board 166; prior use was run 136). Candidate draft only: `local-mark-not-intent` in `drafts/167-local-mark-not-intent/`. One-line: Local mark-not-intent; a sealed local non-lexical mark class hashes to an intent-refusal id; the intent or command sentence is discarded and is not in the hash; a mark is not an intent and not a command; unattested default. No hold-gate issue was opened. Live site copy was not changed. No mark card was added to a live page. No intent seal, command claim, detection score, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 166)

Queue was still empty on 2026-10-13. Run 166 did **not** invent a Used row and did **not** promote prior candidates. Family: collective-memory miss board (unused in the prior six runs; last six were interval timing 160, sensory substitution 161, private incubation log 162, weak-signal hypothesis ledger 163, human-machine co-agency 164, opt-in gesture or gaze as local input 165; prior use was run 141, slug `local-private-not-shared`). Candidate draft only: `local-miss-not-shared` in `drafts/166-local-miss-not-shared/`. One-line: Local miss-not-shared; a sealed local memory-miss class hashes to a shared-refusal id; the collective sentence is discarded and is not in the hash; a miss mark is not a shared memory and not a consensus; unattested default. No hold-gate issue was opened. Live site copy was not changed. No miss card was added to a live page. No shared-memory seal, consensus claim, poll, vote tally, crowd percentage, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 165)

Queue was still empty on 2026-10-12. Run 165 did **not** invent a Used row and did **not** promote prior candidates. Family: opt-in gesture or gaze as local input (unused in the prior six runs; last six were attention/interoception 159, interval timing 160, sensory substitution 161, private incubation log 162, weak-signal hypothesis ledger 163, human-machine co-agency 164; prior use was run 155). Candidate draft only: `local-gesture-not-intent` in `drafts/165-local-gesture-not-intent/`. One-line: Local gesture-not-intent; a sealed local gesture class hashes to an intent-refusal id; the command sentence is discarded and is not in the hash; a gesture mark is not an intent and not a command; unattested default. No hold-gate issue was opened. Live site copy was not changed. No gesture card was added to a live page. No intent seal, command claim, selection badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 164)

Queue was still empty on 2026-10-12. Run 164 did **not** invent a Used row and did **not** promote prior candidates. Family: human-machine co-agency (unused in the prior six runs; last six were quiet-signal filter 158, attention/interoception 159, interval timing 160, sensory substitution 161, private incubation log 162, weak-signal hypothesis ledger 163; prior use was run 154). Candidate draft only: `local-boundary-not-merge` in `drafts/164-local-boundary-not-merge/`. One-line: Local boundary-not-merge; a sealed local action-boundary class hashes to a merge-refusal id; the shared-agency or merged-intent sentence is discarded and is not in the hash; a boundary mark is not co-agency and not a merged intent; unattested default. No hold-gate issue was opened. Live site copy was not changed. No boundary card was added to a live page. No co-agency seal, merged-intent claim, control-transfer badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 163)

Queue was still empty on 2026-10-12. Run 163 did **not** invent a Used row and did **not** promote prior candidates. Family: weak-signal hypothesis ledger (unused in the prior six runs; last six were anomalous-event timeline 157, quiet-signal filter 158, attention/interoception 159, interval timing 160, sensory substitution 161, private incubation log 162; prior use was run 153). Candidate draft only: `local-signal-not-hypothesis` in `drafts/163-local-signal-not-hypothesis/`. One-line: Local signal-not-hypothesis; a sealed weak-signal class hashes to a hypothesis-refusal id; the hypothesis sentence is discarded and is not in the hash; a signal mark is not a hypothesis and not a ledger entry; unattested default. No hold-gate issue was opened. Live site copy was not changed. No signal card was added to a live page. No hypothesis seal, ledger entry, detection score, promotion badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 162)

Queue was still empty on 2026-10-12. Run 162 did **not** invent a Used row and did **not** promote prior candidates. Family: private incubation log (unused in the prior six runs; last six were correlation-not-causation sync view 156, anomalous-event timeline 157, quiet-signal filter 158, attention/interoception 159, interval timing 160, sensory substitution 161; prior use was run 152). Candidate draft only: `local-incubate-not-log` in `drafts/162-local-incubate-not-log/`. One-line: Local incubate-not-log; a sealed local incubation class hashes to a log-refusal id; the record sentence is discarded and is not in the hash; an incubation mark is not a log and not a recall; unattested default. No hold-gate issue was opened. Live site copy was not changed. No incubation card was added to a live page. No log seal, recall claim, dream-record badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 161)

Queue was still empty on 2026-10-12. Run 161 did **not** invent a Used row and did **not** promote prior candidates. Family: sensory substitution (unused in the prior six runs; last six were opt-in gesture or gaze as local input 155, correlation-not-causation sync view 156, anomalous-event timeline 157, quiet-signal filter 158, attention/interoception 159, interval timing 160; prior use was run 151). Candidate draft only: `local-map-not-sense` in `drafts/161-local-map-not-sense/`. One-line: Local map-not-sense; a sealed local sensory-channel class hashes to a replacement-refusal id; the substitution sentence is discarded and is not in the hash; a channel mark is not a sense and not a replacement; unattested default. No hold-gate issue was opened. Live site copy was not changed. No map card was added to a live page. No substitution seal, replacement claim, sense restoration badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Frontier Engine F-197 (2026-10-21)

**F197-local-spatial-token-mind**

Novel combination: Canvas2D causal energy deposit field driven by pointer trajectories. Local Web Worker runs a tiny sequence model over recent trajectory features (speed, turn rate, local energy) and emits discrete intent tokens (expand / focus / scatter / memory) via soft scores. Tokens materialize as draggable DOM elements the user can rearrange and drop onto the field; drop applies a local modulation and serves as embodied reinforcement. Model confidence and entropy continuously morph page chrome (hue, blur, contrast). Seal persists partial field state to localStorage.

Not a variation of F-020 (FSM agents), F-021 (orientation density), F-190/F-196 (continuous residual/attention fields), or F-195 (GPU swarm attention): the mind produces discrete, physically rearrangable tokens that become the teaching interface for the spatial substrate.

Architecture: single index.html; main-thread diffusion + ImageData; blob Worker for token scores; CSS var morph; localStorage seal.

Expected outcome: Interactive spatial field that generates living intent tokens from gesture history. User can drag and drop tokens to sculpt the field dynamics in real time. Runnable offline.

Mechanics: 800 ms thought cycle; auto-spawn tokens; drop → effect + feedback; chrome tracks conf/entropy.

Failure modes: Worker/CSP block → static tokens; low motion → low-entropy output; small viewports crowd tokens.

Building blocks: Local sequence-to-token mind, embodied token rearrangement as spatial teaching signal, uncertainty-driven chrome morph. Next: weight updates from drop locations, WebGPU field, or WebXR token rays.

V01D landing: spatial stage skill (void-live-deploy/skills/); testable via token-drop → field delta and conf→CSS mapping.
