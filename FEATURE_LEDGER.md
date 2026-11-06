# A-to-Mind Feature Assimilation Ledger

This file exists so hourly research automations never recommend the same capability twice.

## Rules for every future run

- Write FEATURE_LEDGER.md with git on disk, append only. Never replace it with a full-file API write. `tools/check-ledger.sh` must pass (Suggested-by: Void (run 118)).
- A frontier draft needs no ledger write. Commit only `drafts/FNNN-slug/SPEC.md` and `index.html`; ledger-guard appends the `## Frontier Engine F-NNN` entry from that SPEC.md. Do not open FEATURE_LEDGER.md for a draft, and never write it with the contents API.

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

## Halt (run 160)

Queue was still empty on 2026-10-12. Run 160 did **not** invent a Used row and did **not** promote prior candidates. Family: interval timing (unused in the prior six runs; last six were human-machine co-agency 154, opt-in gesture or gaze as local input 155, correlation-not-causation sync view 156, anomalous-event timeline 157, quiet-signal filter 158, attention/interoception 159; prior use was run 150, slug `local-interval-not-measure`). Candidate draft only: `local-span-not-clock` in `drafts/160-local-span-not-clock/`. One-line: Local span-not-clock; a sealed local interval class hashes to a clock-refusal id; the measurement sentence is discarded and is not in the hash; a span mark is not a clock and not a duration measure; unattested default. No hold-gate issue was opened. Live site copy was not changed. No span card was added to a live page. No clock seal, duration number, measurement sentence, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 159)

Queue was still empty on 2026-10-12. Run 159 did **not** invent a Used row and did **not** promote prior candidates. Family: attention/interoception (unused in the prior six runs; last six were weak-signal hypothesis ledger 153, human-machine co-agency 154, opt-in gesture or gaze as local input 155, correlation-not-causation sync view 156, anomalous-event timeline 157, quiet-signal filter 158; prior use was run 149, slug `local-intero-not-claim`). Candidate draft only: `local-sensation-not-claim` in `drafts/159-local-sensation-not-claim/`. One-line: Local sensation-not-claim; a sealed local sensation class hashes to an attestation-refusal id; the report sentence is discarded and is not in the hash; a felt mark is not a claim and not a signal; unattested default. No hold-gate issue was opened. Live site copy was not changed. No sensation card was added to a live page. No report seal, claim sentence, detection score, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 158)

Queue was still empty on 2026-10-12. Run 158 did **not** invent a Used row and did **not** promote prior candidates. Family: quiet-signal filter (unused in the prior six runs; last six were private incubation log 152, weak-signal hypothesis ledger 153, human-machine co-agency 154, opt-in gesture or gaze as local input 155, correlation-not-causation sync view 156, anomalous-event timeline 157; prior use was run 135). Candidate draft only: `local-filter-not-boost` in `drafts/158-local-filter-not-boost/`. One-line: Local filter-not-boost; a sealed quiet class hashes to a boost-refusal id; the amplify sentence is discarded and is not in the hash; a filter mark is not a boost and not a detection; unattested default. No hold-gate issue was opened. Live site copy was not changed. No filter card was added to a live page. No boost badge, detection score, amplify sentence, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 157)

Queue was still empty on 2026-10-11. Run 157 did **not** invent a Used row and did **not** promote prior candidates. Family: anomalous-event timeline (unused in the prior six runs; last six were sensory substitution 151, private incubation log 152, weak-signal hypothesis ledger 153, human-machine co-agency 154, opt-in gesture or gaze as local input 155, correlation-not-causation sync view 156; prior use was run 122, slug `local-gap-not-bridge`). Candidate draft only: `local-isolated-not-sequence` in `drafts/157-local-isolated-not-sequence/`. One-line: Local isolated-not-sequence; a sealed event class hashes to a sequence-refusal id; the connecting or arc sentence is discarded and is not in the hash; an isolated mark is not a timeline and not a pattern; unattested default. No hold-gate issue was opened. Live site copy was not changed. No timeline card was added to a live page. No chronological arc, wave label, cluster badge, connecting line, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 156)

Queue was still empty on 2026-10-11. Run 156 did **not** invent a Used row and did **not** promote prior candidates. Family: correlation-not-causation sync view (unused in the prior six runs; last six were interval timing 150, sensory substitution 151, private incubation log 152, weak-signal hypothesis ledger 153, human-machine co-agency 154, opt-in gesture or gaze as local input 155; prior use was run 146, slug `local-sync-not-cause`). Candidate draft only: `local-cooccur-not-imply` in `drafts/156-local-cooccur-not-imply/`. One-line: Local cooccur-not-imply; a sealed local pair of co-occurring observations hashes to an implication-refusal id; the causal or implication sentence is discarded and is not in the hash; a co-occurrence mark is not an implication and not a cause; unattested default. No hold-gate issue was opened. Live site copy was not changed. No co-occurrence card was added to a live page. No causal inference, implication seal, shared-memory write, camera, microphone, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 155)

Queue was still empty on 2026-10-11. Run 155 did **not** invent a Used row and did **not** promote prior candidates. Family: opt-in gesture or gaze as local input (unused in the prior six runs; last six were attention/interoception 149, interval timing 150, sensory substitution 151, private incubation log 152, weak-signal hypothesis ledger 153, human-machine co-agency 154; prior use was run 145, slug `local-gaze-not-command`). Candidate draft only: `local-optin-not-record` in `drafts/155-local-optin-not-record/`. One-line: Local optin-not-record; a sealed local opt-in gesture or gaze class hashes to a recording-refusal id; the persistence sentence is discarded and is not in the hash; an opt-in mark is not a recorded track and not a remote input; unattested default. No hold-gate issue was opened. Live site copy was not changed. No opt-in card was added to a live page. No camera access, gesture tracking, recording, persistence, shared-memory write, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 154)

Queue was still empty on 2026-10-11. Run 154 did **not** invent a Used row and did **not** promote prior candidates. Family: human-machine co-agency (unused in the prior six runs; last six were non-lexical intent capture 148, attention/interoception 149, interval timing 150, sensory substitution 151, private incubation log 152, weak-signal hypothesis ledger 153; prior use was run 143, slug `local-propose-not-commit`). Candidate draft only: `local-boundary-not-merge` in `drafts/154-local-boundary-not-merge/`. One-line: Local boundary-not-merge; a sealed local human-boundary class hashes to a merge-refusal id; the co-agency merge sentence is discarded and is not in the hash; a boundary mark is not a merged action and not a shared execution; unattested default. No hold-gate issue was opened. Live site copy was not changed. No boundary card was added to a live page. No merge, shared execution, co-authored action, shared-memory write, camera, microphone, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 153)

Queue was still empty on 2026-10-11. Run 153 did **not** invent a Used row and did **not** promote prior candidates. Family: weak-signal hypothesis ledger (unused in the prior six runs; last six were quiet-signal filter 147, non-lexical intent capture 148, attention/interoception 149, interval timing 150, sensory substitution 151, private incubation log 152; prior use was run 144, slug `local-weak-not-attest`). Candidate draft only: `local-faint-not-promote` in `drafts/153-local-faint-not-promote/`. One-line: Local faint-not-promote; a sealed local weak-signal observation class hashes to a promotion-refusal id; the promotion sentence is discarded and is not in the hash; a faint mark is not a promoted signal and not an attested hypothesis; unattested default. No hold-gate issue was opened. Live site copy was not changed. No faint card was added to a live page. No promotion, attestation, shared-memory write, camera, microphone, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 152)

Queue was still empty on 2026-10-11. Run 152 did **not** invent a Used row and did **not** promote prior candidates. Family: private incubation log (unused in the prior six runs; last six were correlation-not-causation sync view 146, quiet-signal filter 147, non-lexical intent capture 148, attention/interoception 149, interval timing 150, sensory substitution 151; prior use was run 140). Candidate draft only: `local-incubate-not-attest` in `drafts/152-local-incubate-not-attest/`. One-line: Local incubate-not-attest; a sealed local incubation observation class hashes to an attestation-refusal id; the claim sentence is discarded and is not in the hash; an incubation mark is not an attested experience and not a shared log; unattested default. No hold-gate issue was opened. Live site copy was not changed. No incubation card was added to a live page. No shared log, attestation, shared-memory write, camera, microphone, EEG, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 151)

Queue was still empty on 2026-10-11. Run 151 did **not** invent a Used row and did **not** promote prior candidates. Family: sensory substitution (unused in the prior six runs; last six were opt-in gesture or gaze as local input 145, correlation-not-causation sync view 146, quiet-signal filter 147, non-lexical intent capture 148, attention/interoception 149, interval timing 150; prior use was run 139). Candidate draft only: `local-proxy-not-sense` in `drafts/151-local-proxy-not-sense/`. One-line: Local proxy-not-sense; a sealed local sensory-substitution class hashes to a native-sense-refusal id; the native-sense sentence is discarded and is not in the hash; a substitution mark is not a native sense and not an attested perception; unattested default. No hold-gate issue was opened. Live site copy was not changed. No substitution card was added to a live page. No camera, microphone, native-sense claim, attested perception, shared-memory write, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 150)

Queue was still empty on 2026-10-11. Run 150 did **not** invent a Used row and did **not** promote prior candidates. Family: interval timing (unused in the prior six runs; last six were weak-signal hypothesis ledger 144, opt-in gesture or gaze as local input 145, correlation-not-causation sync view 146, quiet-signal filter 147, non-lexical intent capture 148, attention/interoception 149; prior use was run 138). Candidate draft only: `local-interval-not-measure` in `drafts/150-local-interval-not-measure/`. One-line: Local interval-not-measure; a sealed local interval observation class hashes to a measurement-refusal id; the duration claim sentence is discarded and is not in the hash; an interval mark is not a measured clock and not an attested external time; unattested default. No hold-gate issue was opened. Live site copy was not changed. No interval card was added to a live page. No measurement seal, external clock sync, shared-memory write, camera, microphone, EEG, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 149)

Queue was still empty on 2026-10-10. Run 149 did **not** invent a Used row and did **not** promote prior candidates. Family: attention/interoception (unused in the prior six runs; last six were human-machine co-agency 143, weak-signal hypothesis ledger 144, opt-in gesture or gaze as local input 145, correlation-not-causation sync view 146, quiet-signal filter 147, non-lexical intent capture 148). Candidate draft only: `local-intero-not-claim` in `drafts/149-local-intero-not-claim/`. One-line: Local intero-not-claim; a sealed local attention or interoceptive observation class hashes to a claim-refusal id; the anomalous claim sentence is discarded and is not in the hash; an interoceptive mark is not a claim and not an attested experience; unattested default. No hold-gate issue was opened. Live site copy was not changed. No interoceptive card was added to a live page. No claim seal, attestation, shared-memory write, camera, microphone, EEG, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 148)

Queue was still empty on 2026-10-10. Run 148 did **not** invent a Used row and did **not** promote prior candidates. Family: non-lexical intent capture (unused in the prior six runs; last six were anomalous-event timeline 142, human-machine co-agency 143, weak-signal hypothesis ledger 144, opt-in gesture or gaze as local input 145, correlation-not-causation sync view 146, quiet-signal filter 147). Candidate draft only: `local-prelexical-not-capture` in `drafts/148-local-prelexical-not-capture/`. One-line: Local prelexical-not-capture; a sealed local pre-lexical intention class hashes to a capture-refusal id; the lexical sentence is discarded and is not in the hash; a prelexical mark is not a captured intent and not a token; unattested default. No hold-gate issue was opened. Live site copy was not changed. No prelexical card was added to a live page. No capture, tokenization, shared-memory write, camera, microphone, EEG, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 147)

Queue was still empty on 2026-10-10. Run 147 did **not** invent a Used row and did **not** promote prior candidates. Family: quiet-signal filter (unused in the prior six runs; last six were collective-memory miss board 141, anomalous-event timeline 142, human-machine co-agency 143, weak-signal hypothesis ledger 144, opt-in gesture or gaze as local input 145, correlation-not-causation sync view 146). Candidate draft only: `local-quiet-not-boost` in `drafts/147-local-quiet-not-boost/`. One-line: Local quiet-not-boost; a sealed local quiet-filter class on a weak observation hashes to an amplification-refusal id; the boost sentence is discarded and is not in the hash; a quiet mark is not an amplification and not a signal seal; unattested default. No hold-gate issue was opened. Live site copy was not changed. No quiet-filter card was added to a live page. No amplification, signal boost, shared-memory write, camera, microphone, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 146)

Queue was still empty on 2026-10-10. Run 146 did **not** invent a Used row and did **not** promote prior candidates. Family: correlation-not-causation sync view (unused in the prior six runs; last six were private incubation log 140, collective-memory miss board 141, anomalous-event timeline 142, human-machine co-agency 143, weak-signal hypothesis ledger 144, opt-in gesture or gaze as local input 145). Candidate draft only: `local-sync-not-cause` in `drafts/146-local-sync-not-cause/`. One-line: Local sync-not-cause; a sealed pair of co-occurring local observations hashes to a causation-refusal id; the causal inference sentence is discarded and is not in the hash; a sync mark is not a cause and not an implication; unattested default. No hold-gate issue was opened. Live site copy was not changed. No sync card was added to a live page. No causal inference, implication seal, shared-memory write, camera, microphone, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 145)

Queue was still empty on 2026-10-10. Run 145 did **not** invent a Used row and did **not** promote prior candidates. Family: opt-in gesture or gaze as local input (unused in the prior six runs; last six were sensory substitution 139, private incubation log 140, collective-memory miss board 141, anomalous-event timeline 142, human-machine co-agency 143, weak-signal hypothesis ledger 144). Candidate draft only: `local-gaze-not-command` in `drafts/145-local-gaze-not-command/`. One-line: Local gaze-not-command; an opt-in local gaze or gesture class hashes to a command-refusal id; the command sentence is discarded and is not in the hash; a gaze mark is not a command and not a remote input; unattested default. No hold-gate issue was opened. Live site copy was not changed. No gaze card was added to a live page. No camera access, gesture tracking, command dispatch, shared-memory write, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 144)

Queue was still empty on 2026-10-10. Run 144 did **not** invent a Used row and did **not** promote prior candidates. Family: weak-signal hypothesis ledger (unused in the prior six runs; last six were interval timing 138, sensory substitution 139, private incubation log 140, collective-memory miss board 141, anomalous-event timeline 142, human-machine co-agency 143). Candidate draft only: `local-weak-not-attest` in `drafts/144-local-weak-not-attest/`. One-line: Local weak-not-attest; a client-side SHA-256 of a weak-signal observation + hypothesis + unattested flag marks the item as discardable ledger data; the hash is not an attestation, not a claim seal, and not a promotion to fact; unattested default. No hold-gate issue was opened. Live site copy was not changed. No weak-signal card was added to a live page. No promotion to claim, attestation, shared-memory write, camera, microphone, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 143)

Queue was still empty on 2026-10-10. Run 143 did **not** invent a Used row and did **not** promote prior candidates. Family: human-machine co-agency (unused in the prior six runs; last six were attention/interoception 137, interval timing 138, sensory substitution 139, private incubation log 140, collective-memory miss board 141, anomalous-event timeline 142). Candidate draft only: `local-propose-not-commit` in `drafts/143-local-propose-not-commit/`. One-line: Local propose-not-commit; a sealed human proposal class hashes to a machine-execution-refusal id; the execution sentence is discarded and is not in the hash; a proposal mark is not an execution and not a co-authored action; unattested default. No hold-gate issue was opened. Live site copy was not changed. No proposal card was added to a live page. No execution, co-authored action, shared-memory write, camera, microphone, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 142)

Queue was still empty on 2026-10-10. Run 142 did **not** invent a Used row and did **not** promote prior candidates. Family: anomalous-event timeline (unused in the prior six runs). Candidate draft only: `local-stamp-not-seal` in `drafts/142-local-stamp-not-seal/`. One-line: Local stamp-not-seal; a client-side SHA-256 of a candidate event date + hypothesis + unattested flag marks the item as discardable data; the stamp is not a seal, not a shared timeline edit, and not an attestation; unattested default. No hold-gate issue was opened. Live site copy was not changed. No stamp was added to a live page. No timeline edit, canon write, shared-memory write, camera, microphone, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 141)

Queue was still empty on 2026-10-10. Run 141 did **not** invent a Used row and did **not** promote the run 027–140 candidates. Family: collective-memory miss board, reused only after the six-run cooldown (last family use was run 132, slug `local-sure-not-shift`; earlier slugs `local-echo-not-record`, `local-miss-not-flip`, `local-schema-not-miss`, `local-shared-blank`, `local-pair-recall-gap`, `local-collective-miss-board`, and `local-quorum-not-edit` are not reused). Last six families were quiet-signal filter (135), non-lexical intent capture (136), attention/interoception (137), interval timing (138), sensory substitution (139), and private incubation log (140). Candidate draft only: `local-private-not-shared` in `drafts/141-local-private-not-shared/`. One-line: Local private-not-shared; a sealed private recall class hashes to a shared-refusal id; the shared sentence is discarded and is not in the hash; a private mark is not a shared memory and not a collective edit; unattested default. No hold-gate issue was opened. Live site copy was not changed. No private card was added to a live page. No poll, vote tally, crowd percentage, confidence score, timeline edit, canon write, shared-memory write, camera, microphone, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 140)

Queue was still empty on 2026-10-09. Run 140 did **not** invent a Used row and did **not** promote the run 027–139 candidates. Family: private incubation log, reused only after the six-run cooldown (last family use was run 128, slug `local-defer-not-dream`; earlier slugs `local-shelf-not-solve`, `local-onset-not-answer`, `local-unopened-return`, `local-held-cue-stub`, `local-private-incubation-log`, and `local-blanked-prompt-card` are not reused). Last six families were anomalous-event timeline (134), quiet-signal filter (135), non-lexical intent capture (136), attention/interoception (137), interval timing (138), and sensory substitution (139). Candidate draft only: `local-return-not-match` in `drafts/140-local-return-not-match/`. One-line: Local return-not-match; a sealed return class hashes to a match-refusal id; the match sentence is discarded and is not in the hash; a return mark is not a match and not a solved incubation; unattested default. No hold-gate issue was opened. Live site copy was not changed. No return card was added to a live page. No audio cue, sleep tracker, dream-report recorder, Dormio link, countdown, bottle-drop timer, lucidity score, image field, insight badge, match score, scene replay, morning-yield badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 139)

Queue was still empty on 2026-10-09. Run 139 did **not** invent a Used row and did **not** promote the run 027–138 candidates. Family: sensory substitution, reused only after the six-run cooldown (last family use was run 127, slug `local-band-not-object`; earlier slugs `local-strip-not-sight`, `local-carrier-budget`, `local-pair-not-language`, `local-encoding-not-scene`, `local-proxy-channel-card`, and `local-cross-sense-map` are not reused). Last six families were correlation-not-causation sync view (133), anomalous-event timeline (134), quiet-signal filter (135), non-lexical intent capture (136), attention/interoception (137), and interval timing (138). Candidate draft only: `local-grain-not-picture` in `drafts/139-local-grain-not-picture/`. One-line: Local grain-not-picture; a sealed grain class hashes to a picture-refusal id; the picture sentence is discarded and is not in the hash; a grain mark is not a picture and not a recovered scene; unattested default. No hold-gate issue was opened. Live site copy was not changed. No grain card was added to a live page. No camera, getUserMedia, microphone, Web Audio, sonification playback, tongue array, electrode count, acuity score, implant-equivalence badge, functional-vision badge, picture name in the hash, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 138)

Queue was still empty on 2026-10-09. Run 138 did **not** invent a Used row and did **not** promote the run 027–137 candidates. Family: interval timing, reused only after the six-run cooldown (last family use was run 126, slug `local-lapse-not-stretch`; earlier slugs `local-gate-not-rate`, `local-mark-not-span`, `local-indifference-blank`, `local-scalar-tick-stub`, `local-two-clock-gap-card`, and `local-interval-timing-note` are not reused). Last six families were collective-memory miss board (132), correlation-not-causation sync view (133), anomalous-event timeline (134), quiet-signal filter (135), non-lexical intent capture (136), and attention/interoception (137). Candidate draft only: `local-before-not-long` in `drafts/138-local-before-not-long/`. One-line: Local before-not-long; a sealed before class hashes to a long-refusal id; the long sentence is discarded and is not in the hash; a before mark is not a long interval and not a clock reading; unattested default. No hold-gate issue was opened. Live site copy was not changed. No before card was added to a live page. No performance clock, Date duration, setTimeout measure, requestAnimationFrame span, millisecond field, Weber fraction, dilation score, chronostasis badge, missing-time claim, order-as-length badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 137)

Queue was still empty on 2026-10-09. Run 137 did **not** invent a Used row and did **not** promote the run 027–136 candidates. Family: attention/interoception, reused only after the six-run cooldown (last family use was run 125, slug `local-split-not-sense`; earlier slugs `local-confidence-not-gauge`, `local-attend-not-pulse`, `local-count-withheld`, `local-attention-schema-note`, `local-felt-locus-card`, and `local-notice-lag-bin` are not reused). Last six families were opt-in gesture or gaze as local input (131), collective-memory miss board (132), correlation-not-causation sync view (133), anomalous-event timeline (134), quiet-signal filter (135), and non-lexical intent capture (136). Candidate draft only: `local-probe-not-wander` in `drafts/137-local-probe-not-wander/`. One-line: Local probe-not-wander; a sealed probe class hashes to a wander-refusal id; the wander sentence is discarded and is not in the hash; a probe mark is not a wander score and not a mind-wandering diagnosis; unattested default. No hold-gate issue was opened. Live site copy was not changed. No probe card was added to a live page. No camera, microphone, PPG, ECG, pupil tracker, EEG, experience-sampling percent, BPM field, HRV score, arousal gauge, body-map diagnosis, wander badge, promote control, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 136)

Queue was still empty on 2026-10-09. Run 136 did **not** invent a Used row and did **not** promote the run 027–135 candidates. Family: non-lexical intent capture, reused only after the six-run cooldown (last family use was run 124, slug `local-residue-not-caption`; earlier slugs `local-trace-not-lexeme`, `local-press-not-word`, `local-gloss-withheld`, `local-empty-lexeme-slot`, and `local-nonlexical-intent-note` are not reused). Last six families were human-machine co-agency (130), opt-in gesture or gaze as local input (131), collective-memory miss board (132), correlation-not-causation sync view (133), anomalous-event timeline (134), and quiet-signal filter (135). Candidate draft only: `local-stroke-not-sentence` in `drafts/136-local-stroke-not-sentence/`. One-line: Local stroke-not-sentence; a sealed stroke class hashes to a sentence-refusal id; the sentence is discarded and is not in the hash; a stroke mark is not a sentence and not a decoded intention; unattested default. No hold-gate issue was opened. Live site copy was not changed. No stroke card was added to a live page. No microphone, camera, EEG, fMRI, implant, letter board, facilitator, inner-speech decoder, word field, password phrase, WPM score, vocabulary size, mind-read badge, caption chip, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 135)

Queue was still empty on 2026-10-09. Run 135 did **not** invent a Used row and did **not** promote the run 027–134 candidates. Family: quiet-signal filter, reused only after the six-run cooldown (last family use was run 123, slug `local-bin-not-spike`; earlier slugs `local-squelch-not-lift`, `local-hush-not-speech`, `local-closed-gate`, `local-underfloor-stub`, and `local-quiet-signal-filter` are not reused). Last six families were weak-signal hypothesis ledger (129), human-machine co-agency (130), opt-in gesture or gaze as local input (131), collective-memory miss board (132), correlation-not-causation sync view (133), and anomalous-event timeline (134). Candidate draft only: `local-rest-not-tone` in `drafts/135-local-rest-not-tone/`. One-line: Local rest-not-tone; a sealed rest class hashes to a tone-refusal id; the tone sentence is discarded and is not in the hash; a rest mark is not a tone and not a carrier lock; unattested default. No hold-gate issue was opened. Live site copy was not changed. No rest card was added to a live page. No microphone, AudioContext, FFT, frequency field, SNR number, squelch-open control, carrier-lock badge, tone badge, promote control, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 134)

Queue was still empty on 2026-10-09. Run 134 did **not** invent a Used row and did **not** promote the run 027–133 candidates. Family: anomalous-event timeline, reused only after the six-run cooldown (last family use was run 122, slug `local-gap-not-bridge`; earlier slugs `local-stamp-not-plot`, `local-cluster-not-wave`, `local-sort-not-arc`, `local-unfilled-span`, and `local-anomaly-timeline` are not reused). Last six families were private incubation log (128), weak-signal hypothesis ledger (129), human-machine co-agency (130), opt-in gesture or gaze as local input (131), collective-memory miss board (132), and correlation-not-causation sync view (133). Candidate draft only: `local-pin-not-episode` in `drafts/134-local-pin-not-episode/`. One-line: Local pin-not-episode; a sealed pin class hashes to an episode-refusal id; the episode sentence is discarded and is not in the hash; a pin mark is not an episode and not a continuous anomalous event; unattested default. No hold-gate issue was opened. Live site copy was not changed. No pin card was added to a live page. No date axis, connecting line, next/prev control, flap score, era name, sequence id, episode badge, inserted event, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 133)

Queue was still empty on 2026-10-09. Run 133 did **not** invent a Used row and did **not** promote the run 027–132 candidates. Family: correlation-not-causation sync view, reused only after the six-run cooldown (last family use was run 121, slug `local-beside-not-because`; earlier slugs `local-cooccur-not-cause`, `local-offset-not-message`, `local-residual-blank`, `local-bin-not-arrow`, and `local-sync-not-cause-view` are not reused). Last six families were sensory substitution (127), private incubation log (128), weak-signal hypothesis ledger (129), human-machine co-agency (130), opt-in gesture or gaze as local input (131), and collective-memory miss board (132). Candidate draft only: `local-window-not-wire` in `drafts/133-local-window-not-wire/`. One-line: Local window-not-wire; a sealed window class hashes to a wire-refusal id; the wire sentence is discarded and is not in the hash; a window mark is not a wire and not a directed cause; unattested default. No hold-gate issue was opened. Live site copy was not changed. No window card was added to a live page. No arrow, lag millisecond, coefficient, r-value, significance score, graph edge, synchronicity seal, directed-cause badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 132)

Queue was still empty on 2026-10-09. Run 132 did **not** invent a Used row and did **not** promote the run 027–131 candidates. Family: collective-memory miss board, reused only after the six-run cooldown (last family use was run 120, slug `local-echo-not-record`; earlier slugs `local-miss-not-flip`, `local-schema-not-miss`, `local-shared-blank`, `local-pair-recall-gap`, `local-collective-miss-board`, and `local-quorum-not-edit` are not reused). Last six families were interval timing (126), sensory substitution (127), private incubation log (128), weak-signal hypothesis ledger (129), human-machine co-agency (130), and opt-in gesture or gaze as local input (131). Candidate draft only: `local-sure-not-shift` in `drafts/132-local-sure-not-shift/`. One-line: Local sure-not-shift; a sealed sure class hashes to a shift-refusal id; the shift sentence is discarded and is not in the hash; a sure mark is not a shift of the record and not a timeline change; unattested default. No hold-gate issue was opened. Live site copy was not changed. No sure card was added to a live page. No poll, vote tally, crowd percentage, confidence score, timeline edit, canon write, shared-memory write, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 131)

Queue was still empty on 2026-10-09. Run 131 did **not** invent a Used row and did **not** promote the run 027–130 candidates. Family: opt-in gesture or gaze as local input, reused only after the six-run cooldown (last family use was run 119, slug `local-raw-not-aim`; earlier slugs `local-region-not-order`, `local-lift-not-confirm`, `local-dwell-not-select`, `local-opt-in-gaze-note`, and `local-region-token-slip` are not reused). Last six families were attention/interoception (125), interval timing (126), sensory substitution (127), private incubation log (128), weak-signal hypothesis ledger (129), and human-machine co-agency (130). Candidate draft only: `local-glance-not-grant` in `drafts/131-local-glance-not-grant/`. One-line: Local glance-not-grant; a sealed glance class hashes to a grant-refusal id; the grant sentence and any coordinate or device number are discarded and are not in the hash; a glance mark is not a grant and not a selection; unattested default. No hold-gate issue was opened. Live site copy was not changed. No glance card was added to a live page. No camera, getUserMedia, WebGazer, dwell timer, pointer lock, gaze trace, selection score, eye-tracking badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 130)

Queue was still empty on 2026-10-09. Run 130 did **not** invent a Used row and did **not** promote the run 027–129 candidates. Family: human-machine co-agency, reused only after the six-run cooldown (last family use was run 118, slug `local-offer-not-act`; earlier slugs `local-yield-not-author`, `local-gap-not-handoff`, `local-abstain-seat`, `local-single-mover-card`, and `local-co-agency-split` are not reused). Last six families were non-lexical intent capture (124), attention/interoception (125), interval timing (126), sensory substitution (127), private incubation log (128), and weak-signal hypothesis ledger (129). Candidate draft only: `local-veto-not-consent` in `drafts/130-local-veto-not-consent/`. One-line: Local veto-not-consent; a sealed veto class hashes to a consent-refusal id; the consent sentence is discarded and is not in the hash; a veto mark is not consent and not a shared go-ahead; unattested default. No hold-gate issue was opened. Live site copy was not changed. No veto card was added to a live page. No agent execute, consent checkbox, rubber-stamp accept, fused-will chip, shared-memory write, handoff badge, copilot accept, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 129)

Queue was still empty on 2026-10-08. Run 129 did **not** invent a Used row and did **not** promote the run 027–128 candidates. Family: weak-signal hypothesis ledger, reused only after the six-run cooldown (last family use was run 117, slug `local-tally-not-prior`; earlier slugs `local-repeat-not-weight`, `local-unpromoted-bin`, `local-bound-not-hit`, `local-null-first-strip`, and `local-weak-signal-ledger` are not reused). Last six families were quiet-signal filter (123), non-lexical intent capture (124), attention/interoception (125), interval timing (126), sensory substitution (127), and private incubation log (128). Candidate draft only: `local-question-not-hit` in `drafts/129-local-question-not-hit/`. One-line: Local question-not-hit; a sealed disconfirm-question class hashes to a hit-refusal id; the hit sentence is discarded and is not in the hash; a question mark is not a hit and not a detection; unattested default. No hold-gate issue was opened. Live site copy was not changed. No question card was added to a live page. No SNR number, Bayes weight, prior, tally, promote control, detection badge, confirmation score, candidate chip, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 128)

Queue was still empty on 2026-10-08. Run 128 did **not** invent a Used row and did **not** promote the run 027–127 candidates. Family: private incubation log, reused only after the six-run cooldown (last family use was run 116, slug `local-shelf-not-solve`; earlier slugs `local-onset-not-answer`, `local-unopened-return`, `local-held-cue-stub`, `local-private-incubation-log`, and `local-blanked-prompt-card` are not reused). Last six families were anomalous-event timeline (122), quiet-signal filter (123), non-lexical intent capture (124), attention/interoception (125), interval timing (126), and sensory substitution (127). Candidate draft only: `local-defer-not-dream` in `drafts/128-local-defer-not-dream/`. One-line: Local defer-not-dream; a sealed defer class hashes to a dream-refusal id; the dream sentence is discarded and is not in the hash; a defer mark is not a dream and not a hypnagogic scene; unattested default. No hold-gate issue was opened. Live site copy was not changed. No defer card was added to a live page. No audio cue, sleep tracker, dream-report recorder, Dormio link, countdown, bottle-drop timer, lucidity score, image field, insight badge, scene replay, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 127)

Queue was still empty on 2026-10-08. Run 127 did **not** invent a Used row and did **not** promote the run 027–126 candidates. Family: sensory substitution, reused only after the six-run cooldown (last family use was run 115, slug `local-strip-not-sight`; earlier slugs `local-carrier-budget`, `local-pair-not-language`, `local-encoding-not-scene`, `local-proxy-channel-card`, and `local-cross-sense-map` are not reused). Last six families were correlation-not-causation sync view (121), anomalous-event timeline (122), quiet-signal filter (123), non-lexical intent capture (124), attention/interoception (125), and interval timing (126). Candidate draft only: `local-band-not-object` in `drafts/127-local-band-not-object/`. One-line: Local band-not-object; a sealed band class hashes to an object-refusal id; the object sentence is discarded and is not in the hash; a band mark is not an object and not a recovered scene; unattested default. No hold-gate issue was opened. Live site copy was not changed. No band card was added to a live page. No camera, getUserMedia, microphone, Web Audio, sonification playback, tongue array, electrode count, acuity score, implant-equivalence badge, functional-vision badge, object name in the hash, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 126)

Queue was still empty on 2026-10-08. Run 126 did **not** invent a Used row and did **not** promote the run 027–125 candidates. Family: interval timing, reused only after the six-run cooldown (last family use was run 114, slug `local-gate-not-rate`; earlier slugs `local-mark-not-span`, `local-indifference-blank`, `local-scalar-tick-stub`, `local-two-clock-gap-card`, and `local-interval-timing-note` are not reused). Last six families were collective-memory miss board (120), correlation-not-causation sync view (121), anomalous-event timeline (122), quiet-signal filter (123), non-lexical intent capture (124), and attention/interoception (125). Candidate draft only: `local-lapse-not-stretch` in `drafts/126-local-lapse-not-stretch/`. One-line: Local lapse-not-stretch; a sealed lapse class hashes to a stretch-refusal id; the stretch sentence is discarded and is not in the hash; a lapse mark is not a stretch and not a clock reading; unattested default. No hold-gate issue was opened. Live site copy was not changed. No lapse card was added to a live page. No performance clock, Date duration, setTimeout measure, requestAnimationFrame span, saccade tracker, Weber fraction, millisecond field, dilation score, chronostasis badge, missing-time claim, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 125)

Queue was still empty on 2026-10-08. Run 125 did **not** invent a Used row and did **not** promote the run 027–124 candidates. Family: attention/interoception, reused only after the six-run cooldown (last family use was run 113, slug `local-confidence-not-gauge`; earlier slugs `local-attend-not-pulse`, `local-count-withheld`, `local-attention-schema-note`, `local-felt-locus-card`, and `local-notice-lag-bin` are not reused). Last six families were opt-in gesture or gaze as local input (119), collective-memory miss board (120), correlation-not-causation sync view (121), anomalous-event timeline (122), quiet-signal filter (123), and non-lexical intent capture (124). Candidate draft only: `local-split-not-sense` in `drafts/125-local-split-not-sense/`. One-line: Local split-not-sense; a sealed split class hashes to a sense-refusal id; the sense sentence is discarded and is not in the hash; a split mark is not a sense reading and not a body diagnosis; unattested default. No hold-gate issue was opened. Live site copy was not changed. No split card was added to a live page. No camera, microphone, PPG, ECG, Web Bluetooth, beat timer, BPM field, HRV score, accuracy badge, body-map diagnosis, organ name, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 124)

Queue was still empty on 2026-10-08. Run 124 did **not** invent a Used row and did **not** promote the run 027–123 candidates. Family: non-lexical intent capture, reused only after the six-run cooldown (last family use was run 112, slug `local-trace-not-lexeme`; earlier slugs `local-press-not-word`, `local-gloss-withheld`, `local-empty-lexeme-slot`, and `local-nonlexical-intent-note` are not reused). Last six families were human-machine co-agency (118), opt-in gesture or gaze as local input (119), collective-memory miss board (120), correlation-not-causation sync view (121), anomalous-event timeline (122), and quiet-signal filter (123). Candidate draft only: `local-residue-not-caption` in `drafts/124-local-residue-not-caption/`. One-line: Local residue-not-caption; a sealed residue class hashes to a caption-refusal id; the caption sentence is discarded and is not in the hash; a residue mark is not a caption and not a decoded intention; unattested default. No hold-gate issue was opened. Live site copy was not changed. No residue card was added to a live page. No microphone, camera, EEG, fMRI, implant, letter board, facilitator, inner-speech decoder, word field, WPM score, vocabulary size, mind-read badge, caption chip, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 123)

Queue was still empty on 2026-10-08. Run 123 did **not** invent a Used row and did **not** promote the run 027–122 candidates. Family: quiet-signal filter, reused only after the six-run cooldown (last family use was run 111, slug `local-squelch-not-lift`; earlier slugs `local-hush-not-speech`, `local-closed-gate`, `local-underfloor-stub`, and `local-quiet-signal-filter` are not reused). Last six families were weak-signal hypothesis ledger (117), human-machine co-agency (118), opt-in gesture or gaze as local input (119), collective-memory miss board (120), correlation-not-causation sync view (121), and anomalous-event timeline (122). Candidate draft only: `local-bin-not-spike` in `drafts/123-local-bin-not-spike/`. One-line: Local bin-not-spike; a sealed bin class hashes to a spike-refusal id; the spike sentence is discarded and is not in the hash; a bin mark is not a spike and not a candidate; unattested default. No hold-gate issue was opened. Live site copy was not changed. No bin card was added to a live page. No microphone, AudioContext, FFT, power ratio, 24-times-mean threshold, SNR number, spike badge, candidate chip, promote control, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 122)

Queue was still empty on 2026-10-08. Run 122 did **not** invent a Used row and did **not** promote the run 027–121 candidates. Family: anomalous-event timeline, reused only after the six-run cooldown (last family use was run 110, slug `local-stamp-not-plot`; earlier slugs `local-cluster-not-wave`, `local-sort-not-arc`, `local-unfilled-span`, and `local-anomaly-timeline` are not reused). Last six families were private incubation log (116), weak-signal hypothesis ledger (117), human-machine co-agency (118), opt-in gesture or gaze as local input (119), collective-memory miss board (120), and correlation-not-causation sync view (121). Candidate draft only: `local-gap-not-bridge` in `drafts/122-local-gap-not-bridge/`. One-line: Local gap-not-bridge; two sealed class seats and a locked empty gap seat hash to a bridge-refusal id; the bridge sentence is discarded and is not in the hash; a gap mark is not a bridge and not a missing event; unattested default. No hold-gate issue was opened. Live site copy was not changed. No gap card was added to a live page. No date axis, connecting line, span duration, flap score, era name, sequence id, next/prev link, inserted event, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 121)

Queue was still empty on 2026-10-08. Run 121 did **not** invent a Used row and did **not** promote the run 027–120 candidates. Family: correlation-not-causation sync view, reused only after the six-run cooldown (last family use was run 109, slug `local-cooccur-not-cause`; earlier slugs `local-offset-not-message`, `local-residual-blank`, `local-bin-not-arrow`, and `local-sync-not-cause-view` are not reused). Last six families were sensory substitution (115), private incubation log (116), weak-signal hypothesis ledger (117), human-machine co-agency (118), opt-in gesture or gaze as local input (119), and collective-memory miss board (120). Candidate draft only: `local-beside-not-because` in `drafts/121-local-beside-not-because/`. One-line: Local beside-not-because; two sealed class seats and an empty confound seat hash to a because-refusal id; the because sentence is discarded and is not in the hash; a beside mark is not a because and not a synchronicity; unattested default. No hold-gate issue was opened. Live site copy was not changed. No beside card was added to a live page. No arrow, coefficient, r-value, significance score, lift badge, confounder name, synchronicity seal, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 120)

Queue was still empty on 2026-10-08. Run 120 did **not** invent a Used row and did **not** promote the run 027–119 candidates. Family: collective-memory miss board, reused only after the six-run cooldown (last family use was run 108, slug `local-miss-not-flip`; earlier slugs `local-schema-not-miss`, `local-shared-blank`, `local-pair-recall-gap`, `local-collective-miss-board`, and `local-quorum-not-edit` are not reused). Last six families were interval timing (114), sensory substitution (115), private incubation log (116), weak-signal hypothesis ledger (117), human-machine co-agency (118), and opt-in gesture or gaze as local input (119). Candidate draft only: `local-echo-not-record` in `drafts/120-local-echo-not-record/`. One-line: Local echo-not-record; a sealed echo class hashes to a record-refusal id; the record sentence is discarded and is not in the hash; an echo mark is not a record and not a shared canon; unattested default. No hold-gate issue was opened. Live site copy was not changed. No echo card was added to a live page. No poll, vote tally, crowd percentage, chorus badge, canon edit, shared-memory write, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 119)

Queue was still empty on 2026-10-08. Run 119 did **not** invent a Used row and did **not** promote the run 027–118 candidates. Family: opt-in gesture or gaze as local input, reused only after the six-run cooldown (last family use was run 107, slug `local-region-not-order`; earlier slugs `local-lift-not-confirm`, `local-dwell-not-select`, `local-opt-in-gaze-note`, and `local-region-token-slip` are not reused). Last six families were attention/interoception (113), interval timing (114), sensory substitution (115), private incubation log (116), weak-signal hypothesis ledger (117), and human-machine co-agency (118). Candidate draft only: `local-raw-not-aim` in `drafts/119-local-raw-not-aim/`. One-line: Local raw-not-aim; a sealed raw class hashes to an aim-refusal id; the aim sentence and any coordinate or device number are discarded and are not in the hash; a raw mark is not an aim and not a gaze trace; unattested default. No hold-gate issue was opened. Live site copy was not changed. No raw card was added to a live page. No camera, getUserMedia, WebGazer, dwell timer, pointer lock, pointerrawupdate listener, persistentDeviceId read, aim score, gaze trace, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 118)

Queue was still empty on 2026-10-08. Run 118 did **not** invent a Used row and did **not** promote the run 027–117 candidates. Family: human-machine co-agency, reused only after the six-run cooldown (last family use was run 106, slug `local-yield-not-author`; earlier slugs `local-gap-not-handoff`, `local-abstain-seat`, `local-single-mover-card`, and `local-co-agency-split` are not reused). Last six families were non-lexical intent capture (112), attention/interoception (113), interval timing (114), sensory substitution (115), private incubation log (116), and weak-signal hypothesis ledger (117). Candidate draft only: `local-offer-not-act` in `drafts/118-local-offer-not-act/`. One-line: Local offer-not-act; a sealed offer class hashes to an act-refusal id; the act sentence is discarded and is not in the hash; an offer mark is not an act and not a shared will; unattested default. No hold-gate issue was opened. Live site copy was not changed. No offer card was added to a live page. No agent execute, shared-memory write, handoff badge, fused-will chip, act button, copilot accept, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 117)

Queue was still empty on 2026-10-08. Run 117 did **not** invent a Used row and did **not** promote the run 027–116 candidates. Family: weak-signal hypothesis ledger, reused only after the six-run cooldown (last family use was run 105, slug `local-repeat-not-weight`; earlier slugs `local-unpromoted-bin` and `local-weak-signal-ledger` are not reused). Last six families were quiet-signal filter (111), non-lexical intent capture (112), attention/interoception (113), interval timing (114), sensory substitution (115), and private incubation log (116). Candidate draft only: `local-tally-not-prior` in `drafts/117-local-tally-not-prior/`. One-line: Local tally-not-prior; a sealed tally class hashes to a prior-refusal id; the claim sentence and the mention count are discarded and are not in the hash; a tally is not a prior and not a detection; unattested default. No hold-gate issue was opened. Live site copy was not changed. No tally card was added to a live page. No prior update, Bayes weight, SNR number, detection badge, confirmation score, rank, promote control, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 116)

Queue was still empty on 2026-10-08. Run 116 did **not** invent a Used row and did **not** promote the run 027–115 candidates. Family: private incubation log, reused only after the six-run cooldown (last family use was run 104, slug `local-onset-not-answer`; earlier slugs `local-unopened-return`, `local-held-cue-stub`, `local-private-incubation-log`, and `local-blanked-prompt-card` are not reused). Last six families were anomalous-event timeline (110), quiet-signal filter (111), non-lexical intent capture (112), attention/interoception (113), interval timing (114), and sensory substitution (115). Candidate draft only: `local-shelf-not-solve` in `drafts/116-local-shelf-not-solve/`. One-line: Local shelf-not-solve; a sealed shelf class hashes to a solve-refusal id; the solve sentence is discarded and is not in the hash; a shelf mark is not a solution and not a dream report; unattested default. No hold-gate issue was opened. Live site copy was not changed. No shelf card was added to a live page. No audio cue, sleep tracker, dream-report recorder, bottle-drop timer, countdown, lucidity score, image field, insight badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 115)

Queue was still empty on 2026-10-08. Run 115 did **not** invent a Used row and did **not** promote the run 027–114 candidates. Family: sensory substitution, reused only after the six-run cooldown (last family use was run 103, slug `local-carrier-budget`; earlier slugs `local-pair-not-language`, `local-encoding-not-scene`, `local-proxy-channel-card`, and `local-cross-sense-map` are not reused). Last six families were correlation-not-causation sync view (109), anomalous-event timeline (110), quiet-signal filter (111), non-lexical intent capture (112), attention/interoception (113), and interval timing (114). Candidate draft only: `local-strip-not-sight` in `drafts/115-local-strip-not-sight/`. One-line: Local strip-not-sight; a sealed strip class hashes to a sight-refusal id; the sight sentence is discarded and is not in the hash; a strip mark is not sight and not a recovered scene; unattested default. No hold-gate issue was opened. Live site copy was not changed. No strip card was added to a live page. No camera, getUserMedia, microphone, Web Audio oscillator, sonification playback, image-to-sound map, tongue array, implant-equivalence score, functional-vision badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 114)

Queue was still empty on 2026-10-08. Run 114 did **not** invent a Used row and did **not** promote the run 027–113 candidates. Family: interval timing, reused only after the six-run cooldown (last family use was run 102, slug `local-mark-not-span`; earlier slugs `local-indifference-blank`, `local-scalar-tick-stub`, `local-two-clock-gap-card`, and `local-interval-timing-note` are not reused). Last six families were collective-memory miss board (108), correlation-not-causation sync view (109), anomalous-event timeline (110), quiet-signal filter (111), non-lexical intent capture (112), and attention/interoception (113). Candidate draft only: `local-gate-not-rate` in `drafts/114-local-gate-not-rate/`. One-line: Local gate-not-rate; a sealed gate class hashes to a rate-refusal id; the rate sentence is discarded and is not in the hash; a gate mark is not a pacemaker rate and not a duration; unattested default. No hold-gate issue was opened. Live site copy was not changed. No gate card was added to a live page. No performance.now span, Date.now trial, requestAnimationFrame clock, Web Audio clock, BPM field, dilation coefficient, missing-time badge, reproduction score, Vierordt coefficient, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 113)

Queue was still empty on 2026-10-08. Run 113 did **not** invent a Used row and did **not** promote the run 027–112 candidates. Family: attention/interoception, reused only after the six-run cooldown (last family use was run 101, slug `local-attend-not-pulse`; earlier slugs `local-count-withheld`, `local-attention-schema-note`, `local-felt-locus-card`, and `local-notice-lag-bin` are not reused). Last six families were opt-in gesture or gaze as local input (107), collective-memory miss board (108), correlation-not-causation sync view (109), anomalous-event timeline (110), quiet-signal filter (111), and non-lexical intent capture (112). Candidate draft only: `local-confidence-not-gauge` in `drafts/113-local-confidence-not-gauge/`. One-line: Local confidence-not-gauge; a sealed confidence class hashes to a gauge-refusal id; the gauge sentence is discarded and is not in the hash; a confidence mark is not a gauge and not a body map; unattested default. No hold-gate issue was opened. Live site copy was not changed. No confidence card was added to a live page. No camera, microphone, PPG, Web Bluetooth, beat timer, BPM field, HRV score, quality score, calm/stressed gauge, body-map diagnosis, accuracy badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 112)

Queue was still empty on 2026-10-08. Run 112 did **not** invent a Used row and did **not** promote the run 027–111 candidates. Family: non-lexical intent capture, reused only after the six-run cooldown (last family use was run 100, slug `local-press-not-word`; earlier slugs `local-gloss-withheld`, `local-empty-lexeme-slot`, and `local-nonlexical-intent-note` are not reused). Last six families were human-machine co-agency (106), opt-in gesture or gaze as local input (107), collective-memory miss board (108), correlation-not-causation sync view (109), anomalous-event timeline (110), and quiet-signal filter (111). Candidate draft only: `local-trace-not-lexeme` in `drafts/112-local-trace-not-lexeme/`. One-line: Local trace-not-lexeme; a sealed trace class hashes to a lexeme-refusal id; the lexeme sentence is discarded and is not in the hash; a trace is not a lexeme and not a decoded intention; unattested default. No hold-gate issue was opened. Live site copy was not changed. No trace card was added to a live page. No microphone, camera, implant, letter board, facilitator, inner-speech decoder, word field, WPM score, vocabulary size, mind-read badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 111)

Queue was still empty on 2026-10-08. Run 111 did **not** invent a Used row and did **not** promote the run 027–110 candidates. Family: quiet-signal filter, reused only after the six-run cooldown (last family use was run 099, slug `local-hush-not-speech`; earlier slugs `local-closed-gate`, `local-underfloor-stub`, and `local-quiet-signal-filter` are not reused). Last six families were weak-signal hypothesis ledger (105), human-machine co-agency (106), opt-in gesture or gaze as local input (107), collective-memory miss board (108), correlation-not-causation sync view (109), and anomalous-event timeline (110). Candidate draft only: `local-squelch-not-lift` in `drafts/111-local-squelch-not-lift/`. One-line: Local squelch-not-lift; a sealed squelch class hashes to a lift-refusal id; the lift sentence is discarded and is not in the hash; a squelch mark is not a lift and not a recovered channel; unattested default. No hold-gate issue was opened. Live site copy was not changed. No squelch card was added to a live page. No microphone, AudioContext, FFT, SNR number, open-gate control, lift badge, recovered-channel chip, notch control, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 110)

Queue was still empty on 2026-10-08. Run 110 did **not** invent a Used row and did **not** promote the run 027–109 candidates. Family: anomalous-event timeline, reused only after the six-run cooldown (last family use was run 098, slug `local-cluster-not-wave`; earlier slugs `local-sort-not-arc`, `local-unfilled-span`, and `local-anomaly-timeline` are not reused). Last six families were private incubation log (104), weak-signal hypothesis ledger (105), human-machine co-agency (106), opt-in gesture or gaze as local input (107), collective-memory miss board (108), and correlation-not-causation sync view (109). Candidate draft only: `local-stamp-not-plot` in `drafts/110-local-stamp-not-plot/`. One-line: Local stamp-not-plot; a sealed stamp class hashes to a plot-refusal id; the plot sentence and any era gloss are discarded and are not in the hash; a stamp is not a plot and not a chronology; unattested default. No hold-gate issue was opened. Live site copy was not changed. No stamp card was added to a live page. No date axis, connecting line, wave badge, flap score, era name, sequence id, next/prev link, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 109)

Queue was still empty on 2026-10-08. Run 109 did **not** invent a Used row and did **not** promote the run 027–108 candidates. Family: correlation-not-causation sync view, reused only after the six-run cooldown (last family use was run 097, slug `local-residual-blank`; earlier slug `local-bin-not-arrow` is not reused). Last six families were sensory substitution (103), private incubation log (104), weak-signal hypothesis ledger (105), human-machine co-agency (106), opt-in gesture or gaze as local input (107), and collective-memory miss board (108). Candidate draft only: `local-cooccur-not-cause` in `drafts/109-local-cooccur-not-cause/`. One-line: Local co-occur-not-cause; a sealed pair class hashes to a cause-refusal id; the cause sentence and any meaning gloss are discarded and are not in the hash; a co-occurrence mark is not a cause and not a synchronicity; unattested default. No hold-gate issue was opened. Live site copy was not changed. No pair card was added to a live page. No arrow, coefficient, r-value, significance score, constellation timeline, angel-number gloss, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 108)

Queue was still empty on 2026-10-08. Run 108 did **not** invent a Used row and did **not** promote the run 027–107 candidates. Family: collective-memory miss board, reused only after the six-run cooldown (last family use was run 096, slug `local-shared-blank`; earlier slug `local-pair-recall-gap` is not reused). Last six families were interval timing (102), sensory substitution (103), private incubation log (104), weak-signal hypothesis ledger (105), human-machine co-agency (106), and opt-in gesture or gaze as local input (107). Candidate draft only: `local-miss-not-flip` in `drafts/108-local-miss-not-flip/`. One-line: Local miss-not-flip; a sealed miss class hashes to a flip-refusal id; the flip sentence and any crowd tally are discarded and are not in the hash; a miss mark is not a flip and not a shared canon; unattested default. No hold-gate issue was opened. Live site copy was not changed. No miss card was added to a live page. No poll, vote tally, crowd percentage, quiz score, timeline-shift badge, shared-canon seal, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 107)

Queue was still empty on 2026-10-08. Run 107 did **not** invent a Used row and did **not** promote the run 027–106 candidates. Family: opt-in gesture or gaze as local input, reused only after the six-run cooldown (last family use was run 095, slug `local-dwell-not-select`; earlier slugs `local-opt-in-gaze-note` and `local-region-token-slip` are not reused). Last six families were attention/interoception (101), interval timing (102), sensory substitution (103), private incubation log (104), weak-signal hypothesis ledger (105), and human-machine co-agency (106). Candidate draft only: `local-region-not-order` in `drafts/107-local-region-not-order/`. One-line: Local region-not-order; a sealed region class hashes to an order-refusal id; the order sentence is discarded and is not in the hash; a region token is not an order and not a decoded gaze; unattested default. No hold-gate issue was opened. Live site copy was not changed. No region card was added to a live page. No camera, getUserMedia, WebGazer, dwell timer, pointer lock, pupil-position field, order fill, aim score, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 106)

Queue was still empty on 2026-10-07. Run 106 did **not** invent a Used row and did **not** promote the run 027–105 candidates. Family: human-machine co-agency, reused only after the six-run cooldown (last family use was run 094, slug `local-abstain-seat`; earlier slugs `local-co-agency-split` and `local-single-mover-card` are not reused). Last six families were non-lexical intent capture (100), attention/interoception (101), interval timing (102), sensory substitution (103), private incubation log (104), and weak-signal hypothesis ledger (105). Candidate draft only: `local-yield-not-author` in `drafts/106-local-yield-not-author/`. One-line: Local yield-not-author; a sealed yield class hashes to an author-refusal id; the author sentence is discarded and is not in the hash; a yield mark is not authorship and not a transferred will; unattested default. No hold-gate issue was opened. Live site copy was not changed. No yield card was added to a live page. No agent execute, shared-memory write, sign-off badge, fused-author chip, will-transfer score, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 105)

Queue was still empty on 2026-10-07. Run 105 did **not** invent a Used row and did **not** promote the run 027–104 candidates. Family: weak-signal hypothesis ledger, reused only after the six-run cooldown (last family use was run 093, slug `local-unpromoted-bin`; earlier slugs `local-bound-not-hit`, `local-null-first-strip`, and `local-weak-signal-ledger` are not reused). Last six families were quiet-signal filter (099), non-lexical intent capture (100), attention/interoception (101), interval timing (102), sensory substitution (103), and private incubation log (104). Candidate draft only: `local-repeat-not-weight` in `drafts/105-local-repeat-not-weight/`. One-line: Local repeat-not-weight; a sealed repeat class hashes to a weight-refusal id; the weight sentence and the tally are discarded and are not in the hash; a repeat mark is not a weight and not a detection; unattested default. No hold-gate issue was opened. Live site copy was not changed. No repeat card was added to a live page. No radio, microphone, FFT, SNR number, prior, posterior, tally store, promotion chip, beacon badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 104)

Queue was still empty on 2026-10-07. Run 104 did **not** invent a Used row and did **not** promote the run 027–103 candidates. Family: private incubation log, reused only after the six-run cooldown (last family use was run 092, slug `local-unopened-return`; earlier slugs `local-held-cue-stub`, `local-private-incubation-log`, and `local-blanked-prompt-card` are not reused). Last six families were anomalous-event timeline (098), quiet-signal filter (099), non-lexical intent capture (100), attention/interoception (101), interval timing (102), and sensory substitution (103). Candidate draft only: `local-onset-not-answer` in `drafts/104-local-onset-not-answer/`. One-line: Local onset-not-answer; a sealed onset class hashes to an answer-refusal id; the answer sentence is discarded and is not in the hash; an onset mark is not an answer and not a retrieved image; unattested default. No hold-gate issue was opened. Live site copy was not changed. No onset card was added to a live page. No audio cue, sleep tracker, dream-report recorder, countdown, lucidity score, image field, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 103)


Queue was still empty on 2026-10-07. Run 103 did **not** invent a Used row and did **not** promote the run 027–102 candidates. Family: sensory substitution, reused only after the six-run cooldown (last family use was run 091, slug `local-pair-not-language`; earlier slugs `local-encoding-not-scene` and `local-proxy-channel-card` are not reused). Last six families were correlation-not-causation sync view (097), anomalous-event timeline (098), quiet-signal filter (099), non-lexical intent capture (100), attention/interoception (101), and interval timing (102). Candidate draft only: `local-carrier-budget` in `drafts/103-local-carrier-budget/`. One-line: Local carrier budget; a sealed carrier class hashes to a sight-refusal id; no image, sonification, or restored-sense field exists on the page; a carrier token is a budget line, not sight and not a scene recovered through sound or touch; unattested default. No hold-gate issue was opened. Live site copy was not changed. No carrier card was added to a live page. No camera, microphone, Web Audio oscillator, vibration, sonification, image-to-sound map, tongue array, implant-equivalence score, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 102)

Queue was still empty on 2026-10-07. Run 102 did **not** invent a Used row and did **not** promote the run 027–101 candidates. Family: interval timing, reused only after the six-run cooldown (last family use was run 090, slug `local-indifference-blank`; earlier slugs `local-scalar-tick-stub`, `local-two-clock-gap-card`, and `local-interval-timing-note` are not reused). Last six families were collective-memory miss board (096), correlation-not-causation sync view (097), anomalous-event timeline (098), quiet-signal filter (099), non-lexical intent capture (100), and attention/interoception (101). Candidate draft only: `local-mark-not-span` in `drafts/102-local-mark-not-span/`. One-line: Local mark-not-span; a sealed mark class hashes to a span-refusal id; no elapsed field exists on the page; a mark is not a span and not a reproduced duration; unattested default. No hold-gate issue was opened. Live site copy was not changed. No mark card was added to a live page. No start/stop trial, performance.now, Date.now, requestAnimationFrame clock, Web Audio clock, pacemaker, Vierordt coefficient, chronostasis score, missing-time badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

Commit 214a147 replaced this file with the 8-byte placeholder SEE_DISK. Run 102 restores a readable ledger. That placeholder was not a seal. Halt notes 098–083 remain in commit 8e0f57e69614b86615be9423065397956186f7bf. Halt notes 101–099 remain below.

## Halt (run 101)

Queue was still empty on 2026-10-07. Run 101 did **not** invent a Used row and did **not** promote the run 027–100 candidates. Family: attention/interoception, reused only after the six-run cooldown (last family use was run 089, slug `local-count-withheld`; earlier slugs `local-attention-schema-note`, `local-felt-locus-card`, and `local-notice-lag-bin` are not reused). Last six families were opt-in gesture or gaze as local input (095), collective-memory miss board (096), correlation-not-causation sync view (097), anomalous-event timeline (098), quiet-signal filter (099), and non-lexical intent capture (100). Candidate draft only: `local-attend-not-pulse` in `drafts/101-local-attend-not-pulse/`. One-line: Local attend-not-pulse; a sealed attention class hashes to a pulse-refusal id; no pulse field, tally, or appraisal sentence exists on the page; an attend mark is not a heartbeat and not a meaning assigned to a body signal; unattested default. No hold-gate issue was opened. Live site copy was not changed. No attend card was added to a live page. No camera, microphone, PPG, Web Bluetooth, beat timer, accuracy badge, appraisal field, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 100)

Queue was still empty on 2026-10-07. Run 100 did **not** invent a Used row and did **not** promote the run 027–099 candidates. Family: non-lexical intent capture, reused only after the six-run cooldown (last family use was run 088, slug `local-gloss-withheld`; earlier slug `local-empty-lexeme-slot` is not reused). Last six families were human-machine co-agency (094), opt-in gesture or gaze as local input (095), collective-memory miss board (096), correlation-not-causation sync view (097), anomalous-event timeline (098), and quiet-signal filter (099). Candidate draft only: `local-press-not-word` in `drafts/100-local-press-not-word/`. One-line: Local press-not-word; a sealed press class hashes to a word-refusal id; no word field exists on the page; a press is not a word and not a decoded intention; unattested default. No hold-gate issue was opened. Live site copy was not changed. No press card was added to a live page. No microphone, camera, implant, letter board, facilitator, inner-speech decoder, word field, mind-read badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 099)

Queue was still empty on 2026-10-07. Run 099 did **not** invent a Used row and did **not** promote the run 027–098 candidates. Family: quiet-signal filter, reused only after the six-run cooldown (last family use was run 087, slug `local-closed-gate`; earlier slugs `local-underfloor-stub` and `local-quiet-signal-filter` are not reused). Last six families were weak-signal hypothesis ledger (093), human-machine co-agency (094), opt-in gesture or gaze as local input (095), collective-memory miss board (096), correlation-not-causation sync view (097), and anomalous-event timeline (098). Candidate draft only: `local-hush-not-speech` in `drafts/099-local-hush-not-speech/`. One-line: Local hush-not-speech; a sealed hush class hashes to a speech-refusal id; the speech sentence is discarded and is not in the hash; a hush is not speech and not a decoded pass; unattested default. No hold-gate issue was opened. Live site copy was not changed. No hush card was added to a live page. No microphone, AudioContext, FFT, SNR number, voice chip, patent badge, decode button, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 098)

Queue was still empty on 2026-10-07. Run 098 did **not** invent a Used row and did **not** promote the run 027–097 candidates. Family: anomalous-event timeline, reused only after the six-run cooldown (last family use was run 086, slug `local-sort-not-arc`; earlier slug `local-unfilled-span` is not reused). Last six families were private incubation log (092), weak-signal hypothesis ledger (093), human-machine co-agency (094), opt-in gesture or gaze as local input (095), collective-memory miss board (096), and correlation-not-causation sync view (097). Candidate draft only: `local-cluster-not-wave` in `drafts/098-local-cluster-not-wave/`. One-line: Local cluster-not-wave; a sealed cluster class hashes to a wave-refusal id; the wave sentence is discarded and is not in the hash; a cluster is not a wave and not a flap; unattested default. No hold-gate issue was opened. Live site copy was not changed. No cluster card was added to a live page. No arrow, flap count, disclosure-sequence badge, day field, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 097)

Queue was still empty on 2026-10-07. Run 097 did **not** invent a Used row and did **not** promote the run 027–096 candidates. Family: correlation-not-causation sync view, reused only after the six-run cooldown (last family use was run 085, slug `local-residual-blank`; earlier slug `local-bin-not-arrow` is not reused). Last six families were sensory substitution (091), private incubation log (092), weak-signal hypothesis ledger (093), human-machine co-agency (094), opt-in gesture or gaze as local input (095), and collective-memory miss board (096). Candidate draft only: `local-offset-not-message` in `drafts/097-local-offset-not-message/`. One-line: Local offset-not-message; a sealed offset class hashes to a message-refusal id; the message sentence is discarded and is not in the hash; an offset is not a message and not a synchronicity; unattested default. No hold-gate issue was opened. Live site copy was not changed. No offset card was added to a live page. No arrow, message fill, synchronicity score, acausal-principle badge, shared-bin seal, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 096)

Queue was still empty on 2026-10-07. Run 096 did **not** invent a Used row and did **not** promote the run 027–095 candidates. Family: collective-memory miss board, reused only after the six-run cooldown (last family use was run 084, slug `local-shared-blank`; earlier slug `local-pair-recall-gap` is not reused). Last six families were interval timing (090), sensory substitution (091), private incubation log (092), weak-signal hypothesis ledger (093), human-machine co-agency (094), and opt-in gesture or gaze as local input (095). Candidate draft only: `local-schema-not-miss` in `drafts/096-local-schema-not-miss/`. One-line: Local schema-not-miss; a sealed schema class hashes to a miss-refusal id; the chorus sentence is discarded and is not in the hash; a schema intrusion is not a collective miss and not a logo correction; unattested default. No hold-gate issue was opened. Live site copy was not changed. No miss card was added to a live page. No chorus count, correction fill, logo reveal, timeline-shift badge, false-memory score, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 095)

Queue was still empty on 2026-10-07. Run 095 did **not** invent a Used row and did **not** promote the run 027–094 candidates. Family: opt-in gesture or gaze as local input, reused only after the six-run cooldown (last family use was run 083, slug `local-dwell-not-select`; earlier slugs `local-opt-in-gaze-note` and `local-region-token-slip` are not reused). Last six families were attention/interoception (089), interval timing (090), sensory substitution (091), private incubation log (092), weak-signal hypothesis ledger (093), and human-machine co-agency (094). Candidate draft only: `local-lift-not-confirm` in `drafts/095-local-lift-not-confirm/`. One-line: Local lift-not-confirm; a sealed lift class hashes to a confirm-refusal id; the confirm sentence is discarded and is not in the hash; a pointer lift is not a confirm and not a gaze commit; unattested default. No hold-gate issue was opened. Live site copy was not changed. No lift card was added to a live page. No confirm control, gaze-commit control, foveated-target badge, camera permission, dwell timer, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 094)

Queue was still empty on 2026-10-07. Run 094 did **not** invent a Used row and did **not** promote the run 027–093 candidates. Family: human-machine co-agency, reused only after the six-run cooldown (last family use was run 082, slug `local-abstain-seat`; earlier slugs `local-co-agency-split` and `local-single-mover-card` are not reused). Last six families were non-lexical intent capture (088), attention/interoception (089), interval timing (090), sensory substitution (091), private incubation log (092), and weak-signal hypothesis ledger (093). Candidate draft only: `local-gap-not-handoff` in `drafts/094-local-gap-not-handoff/`. One-line: Local gap-not-handoff; two sealed lane classes hash to a gap id; the handoff sentence is discarded and is not in the hash; a gap between lanes is not a handoff and not shared control; unattested default. No hold-gate issue was opened. Live site copy was not changed. No gap card was added to a live page. No arrow, handoff button, steer control, voice control, implant parameter, shared-control badge, partner badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 093)

Queue was still empty on 2026-10-07. Run 093 did **not** invent a Used row and did **not** promote the run 027–092 candidates. Family: weak-signal hypothesis ledger, reused only after the six-run cooldown (last family use was run 057, slug `local-weak-signal-ledger`). Last six families were quiet-signal filter (087), non-lexical intent capture (088), attention/interoception (089), interval timing (090), sensory substitution (091), and private incubation log (092). Candidate draft only: `local-unpromoted-bin` in `drafts/093-local-unpromoted-bin/`. One-line: Local unpromoted bin; a sealed SNR class hashes to a promotion-refusal id; the beacon sentence is discarded and is not in the hash; an unpromoted bin is not a detection and not a technosignature; unattested default. No hold-gate issue was opened. Live site copy was not changed. No bin card was added to a live page. No radio, microphone, FFT, SNR number, promotion chip, beacon badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 092)

Queue was still empty on 2026-10-07. Run 092 did **not** invent a Used row and did **not** promote the run 027–091 candidates. Family: private incubation log, reused only after the six-run cooldown (last family use was run 080, slug `local-held-cue-stub`; earlier slugs `local-private-incubation-log` and `local-blanked-prompt-card` are not reused). Last six families were anomalous-event timeline (086), quiet-signal filter (087), non-lexical intent capture (088), attention/interoception (089), interval timing (090), and sensory substitution (091). Candidate draft only: `local-unopened-return` in `drafts/092-local-unopened-return/`. One-line: Local unopened return; a sealed set-aside class hashes to a return-refusal id; the return sentence is discarded and is not in the hash; an unopened return is not a dream report and not an incubation result; unattested default. No hold-gate issue was opened. Live site copy was not changed. No return card was added to a live page. No microphone, camera, AudioContext, sleep-stage detector, countdown, cue player, wearable, dream-report field, incorporation badge, creativity score, healing claim, contact claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 091)

Queue was still empty on 2026-10-07. Run 091 did **not** invent a Used row and did **not** promote the run 027–090 candidates. Family: sensory substitution, reused only after the six-run cooldown (last family use was run 079, slug `local-encoding-not-scene`; earlier slugs `local-proxy-channel-card` and `local-cross-sense-map` are not reused). Last six families were correlation-not-causation sync view (085), anomalous-event timeline (086), quiet-signal filter (087), non-lexical intent capture (088), attention/interoception (089), and interval timing (090). Candidate draft only: `local-pair-not-language` in `drafts/091-local-pair-not-language/`. One-line: Local pair-not-language; a sealed channel-pair class hashes to a language-refusal id; the language sentence is discarded and is not in the hash; a named pairing is not a visual language and not restored sight; unattested default. No hold-gate issue was opened. Live site copy was not changed. No language card was added to a live page. No camera, microphone, Web Audio, vibration actuator, spectrogram, tongue-display, implant parameter, restored-sight badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 090)

Queue was still empty on 2026-10-07. Run 090 did **not** invent a Used row and did **not** promote the run 027–089 candidates. Family: interval timing, reused only after the six-run cooldown (last family use was run 078, slug `local-scalar-tick-stub`). Last six families were collective-memory miss board (084), correlation-not-causation sync view (085), anomalous-event timeline (086), quiet-signal filter (087), non-lexical intent capture (088), and attention/interoception (089). Candidate draft only: `local-indifference-blank` in `drafts/090-local-indifference-blank/`. One-line: Local indifference blank; a sealed prior-set class hashes to a blank id; the reproduction sentence is discarded and is not in the hash; a prior-set mark is not a measured interval and not a missing-time span; unattested default. No hold-gate issue was opened. Live site copy was not changed. No indifference card was added to a live page. No start/stop trial, millisecond field, Vierordt coefficient, pacemaker reading, missing-time badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 089)

Queue was still empty on 2026-10-07. Run 089 did **not** invent a Used row and did **not** promote the run 027–088 candidates. Family: attention/interoception, reused only after the six-run cooldown (last family use was run 077, slug `local-notice-lag-bin`). Last six families were opt-in gesture or gaze (083), collective-memory miss board (084), correlation-not-causation sync view (085), anomalous-event timeline (086), quiet-signal filter (087), and non-lexical intent capture (088). Candidate draft only: `local-count-withheld` in `drafts/089-local-count-withheld/`. One-line: Local count withheld; a sealed unscored-attend class hashes to a count-refusal id; the beat tally and the interpretation sentence are discarded and are not in the hash; an attended interval is not a counted pulse and not a body-read; unattested default. No hold-gate issue was opened. Live site copy was not changed. No count card was added to a live page. No microphone, camera, PPG, Web Bluetooth, beat timer, accuracy badge, body-read badge, healing claim, contact claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 088)

Queue was still empty on 2026-10-07. Run 088 did **not** invent a Used row and did **not** promote the run 027–087 candidates. Family: non-lexical intent capture, reused only after the six-run cooldown (last family use was run 076, slug `local-empty-lexeme-slot`). Last six families were human-machine co-agency (082), opt-in gesture or gaze (083), collective-memory miss board (084), correlation-not-causation sync view (085), anomalous-event timeline (086), and quiet-signal filter (087). Candidate draft only: `local-gloss-withheld` in `drafts/088-local-gloss-withheld/`. One-line: Local gloss withheld; a sealed withhold class hashes to a gloss-refusal id; the candidate sentence is discarded and is not in the hash; a withheld gloss is not a decoded intention and not a received mind; unattested default. No hold-gate issue was opened. Live site copy was not changed. No gloss card was added to a live page. No microphone, camera, implant, letter board, facilitator, inner-speech decoder, mind-read badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 087)

Queue was still empty on 2026-10-07. Run 087 did **not** invent a Used row and did **not** promote the run 027–086 candidates. Family: quiet-signal filter, reused only after the six-run cooldown (last family use was run 075, slug `local-underfloor-stub`). Candidate draft only: `local-closed-gate` in `drafts/087-local-closed-gate/`. One-line: Local closed-gate; a sealed closed-gate class hashes to a refusal id; the heard string is discarded and is not in the hash; a closed gate is not a listen and not a detection; unattested default. No hold-gate issue was opened. Live site copy was not changed. No gate card was added to a live page. No microphone, AudioContext, amplitude meter, open-gate hash, detection chip, voice chip, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 086)

Queue was still empty on 2026-10-07. Run 086 did **not** invent a Used row and did **not** promote the run 027–085 candidates. Family: anomalous-event timeline, reused only after the six-run cooldown (last family use was run 074, slug `local-unfilled-span`). Candidate draft only: `local-sort-not-arc` in `drafts/086-local-sort-not-arc/`. One-line: Local sort-not-arc; two sealed year-month classes hash to a sort id; the narrative string is discarded and is not in the hash; a sorted pair is not an arc and not a disclosure sequence; unattested default. No hold-gate issue was opened. Live site copy was not changed. No arc card was added to a live page. No arrow, flap count, disclosure-sequence badge, day field, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 085)

Queue was still empty on 2026-10-07. Run 085 did **not** invent a Used row and did **not** promote the run 027–084 candidates. Family: correlation-not-causation sync view, reused only after the six-run cooldown (last family use was run 073, slug `local-bin-not-arrow`). Candidate draft only: `local-residual-blank` in `drafts/085-local-residual-blank/`. One-line: Local residual-blank; a sealed co-presence class hashes to a residual id; the mechanism token is discarded and is not in the hash; a blank residual is not a cause and not an acausal principle; unattested default. No hold-gate issue was opened. Live site copy was not changed. No residual card was added to a live page. No arrow, shared-bin seal, acausal-principle badge, synchronicity score, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 084)

Queue was still empty on 2026-10-07. Run 084 did **not** invent a Used row and did **not** promote the run 027–083 candidates. Family: collective-memory miss board, reused only after the six-run cooldown (last family use was run 072, slug `local-pair-recall-gap`). Candidate draft only: `local-shared-blank` in `drafts/084-local-shared-blank/`. One-line: Local shared-blank; a sealed miss class hashes to a blank id; the recalled token is discarded and is not in the hash; a shared blank is not a collective memory and not a correction; unattested default. No hold-gate issue was opened. Live site copy was not changed. No miss card was added to a live page. No consensus count, correction fill, timeline-shift badge, false-memory score, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 083)

Queue was still empty on 2026-10-07. Run 083 did **not** invent a Used row and did **not** promote the run 027–082 candidates. Family: opt-in gesture or gaze as local input, reused only after the six-run cooldown (last family use was run 071, slug `local-region-token-slip`). Candidate draft only: `local-dwell-not-select` in `drafts/083-local-dwell-not-select/`. One-line: Local dwell-not-select; a sealed dwell class hashes to a refusal id; no clock is read and no target is activated; a completed look is not a click and not a decoded intention; unattested default. No hold-gate issue was opened. Live site copy was not changed. No dwell card was added to a live page. No camera, microphone, getUserMedia, WebGazer, MediaPipe, dwell timer, SELECT-on-over-floor, foveated-stream seal, gaze-verified badge, mind-read badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 082)

Queue was still empty on 2026-10-06. Run 082 did **not** invent a Used row and did **not** promote the run 027–081 candidates. Family: human-machine co-agency, reused only after the six-run cooldown (last family use was run 070, slug `local-single-mover-card`). Candidate draft only: `local-abstain-seat` in `drafts/082-local-abstain-seat/`. One-line: Local abstain seat; a sealed abstain class hashes to a seat-refusal id; the instrument seat stays empty and is not in the hash; an abstain is not a partner and not a waiting agent; unattested default. No hold-gate issue was opened. Live site copy was not changed. No abstain card was added to a live page. No handoff, partner badge, waiting-agent chip, oversight-equilibrium seal, shared-mind badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 081)

Queue was still empty on 2026-10-06. Run 081 did **not** invent a Used row and did **not** promote the run 027–080 candidates. Family: weak-signal hypothesis ledger, reused only after the six-run cooldown (last family use was run 069, slug `local-null-first-strip`). Candidate draft only: `local-bound-not-hit` in `drafts/081-local-bound-not-hit/`. One-line: Local bound-not-hit; a sealed search-bound label hashes to a stub id; the candidate text is discarded and is not in the hash; a published bound is not a detection and not an early warning; unattested default. No hold-gate issue was opened. Live site copy was not changed. No bound card was added to a live page. No amplitude, hit badge, early-warning seal, investment-edge score, technosignature detection, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 080)

Queue was still empty on 2026-10-06. Run 080 did **not** invent a Used row and did **not** promote the run 027–079 candidates. Family: private incubation log, reused only after the six-run cooldown (last family use was run 068, slug `local-blanked-prompt-card`). Candidate draft only: `local-held-cue-stub` in `drafts/080-local-held-cue-stub/`. One-line: Local held-cue stub; a sealed cue class hashes to a stub id; the cue is not replayed; a later residue class stays a label; a held cue is not a dream and not a retrieved idea; unattested default. No hold-gate issue was opened. Live site copy was not changed. No cue stub was added to a live page. No audio drop, sleep-onset detector, countdown, diary line, incorporation score, dream-advertising cue, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 079)

Queue was still empty on 2026-10-06. Run 079 did **not** invent a Used row and did **not** promote the run 027–078 candidates. Family: sensory substitution, reused only after the six-run cooldown (last family use was run 067, slug `local-proxy-channel-card`). Candidate draft only: `local-encoding-not-scene` in `drafts/079-local-encoding-not-scene/`. One-line: Local encoding-not-scene stub; a sealed encoding label hashes to a stub id; no frame is drawn; a simultaneous label is not a scene and not restored sight; unattested default. No hold-gate issue was opened. Live site copy was not changed. No encoding card was added to a live page. No camera, microphone, Web Audio, canvas scene, Hilbert curve, acuity score, sight-restored badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 078)

Queue was still empty on 2026-10-06. Run 078 did **not** invent a Used row and did **not** promote the run 027–077 candidates. Family: interval timing, reused only after the six-run cooldown (last family use was run 066, slug `local-two-clock-gap-card`). Candidate draft only: `local-scalar-tick-stub` in `drafts/078-local-scalar-tick-stub/`. One-line: Local scalar tick stub; a sealed span label and a closed tick bin hash to a stub id; no clock is read; a tick bin is not a duration and not a pacemaker reading; unattested default. No hold-gate issue was opened. Live site copy was not changed. No tick stub was added to a live page. No millisecond field, pacemaker-reading badge, missing-time seal, audio oscillator, abduction chip, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 077)

Queue was still empty on 2026-10-06. Run 077 did **not** invent a Used row and did **not** promote the run 027–076 candidates. Family: attention/interoception, reused only after the six-run cooldown (last family use was run 065, slug `local-felt-locus-card`). Candidate draft only: `local-notice-lag-bin` in `drafts/077-local-notice-lag-bin/`. One-line: Local notice-lag bin; a sealed lag label and a disconfirm line hash to a bin id; no clock is read; a late notice is not the raw present and not a sender; unattested default. No hold-gate issue was opened. Live site copy was not changed. No lag card was added to a live page. No millisecond, raw-present badge, body-signal chip, diagnosis, sender seal, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 076)

Queue was still empty on 2026-10-06. Run 076 did **not** invent a Used row and did **not** promote the run 027–075 candidates. Family: non-lexical intent capture, reused only after the six-run cooldown (last family use was run 064, slug `local-nonlexical-intent-note`). Candidate draft only: `local-empty-lexeme-slot` in `drafts/076-local-empty-lexeme-slot/`. One-line: Local empty lexeme slot; a committed blank with a disconfirm line hashes to a slot-refusal id; letters stay out; an empty slot is not intent and not a decoded sentence; unattested default. No hold-gate issue was opened. Live site copy was not changed. No slot card was added to a live page. No filled word, decoded sentence, received-mind badge, telepathy chip, letter board, facilitator, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 075)

Queue was still empty on 2026-10-05. Run 075 did **not** invent a Used row and did **not** promote the run 027–074 candidates. Family: quiet-signal filter, reused only after the six-run cooldown (last family use was run 063, slug `local-quiet-signal-filter`). Candidate draft only: `local-underfloor-stub` in `drafts/075-local-underfloor-stub/`. One-line: Local underfloor stub; a typed amplitude at or under a sealed floor hashes to a band-refusal id; the band stays empty; under the floor is not a message and not a decoded voice; unattested default. No hold-gate issue was opened. Live site copy was not changed. No stub card was added to a live page. No peak, decoded glyph, voice chip, detection badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 074)

Queue was still empty on 2026-10-05. Run 074 did **not** invent a Used row and did **not** promote the run 027–073 candidates. Family: anomalous-event timeline, reused only after the six-run cooldown (last family use was run 062, slug `local-anomaly-timeline`). Candidate draft only: `local-unfilled-span` in `drafts/074-local-unfilled-span/`. One-line: Local unfilled span; two typed minute bounds hash to a span id; interior bins stay empty; a gap is not an event and not a missing-time seal; unattested default. No hold-gate issue was opened. Live site copy was not changed. No span card was added to a live page. No filled event, invented hour, missing-time seal, abduction chip, prophecy rail, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 073)

Queue was still empty on 2026-10-05. Run 073 did **not** invent a Used row and did **not** promote the run 027–072 candidates. Family: correlation-not-causation sync view, reused only after the six-run cooldown (last family use was run 061, slug `local-sync-not-cause-view`). Candidate draft only: `local-bin-not-arrow` in `drafts/073-local-bin-not-arrow/`. One-line: Local bin-not-arrow; two typed minute stamps that fall in the same allowlisted bin hash to a bin id; the card draws a refusal instead of an arrow; a shared bin is not a cause and not an acausal principle; unattested default. No hold-gate issue was opened. Live site copy was not changed. No bin card was added to a live page. No arrow, meaningful chip, acausal-principle seal, cause seal, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 072)

Queue was still empty on 2026-10-05. Run 072 did **not** invent a Used row and did **not** promote the run 027–071 candidates. Family: collective-memory miss board, reused only after the six-run cooldown (last family use was run 060, slug `local-collective-miss-board`). Candidate draft only: `local-pair-recall-gap` in `drafts/072-local-pair-recall-gap/`. One-line: Local pair-recall gap; two recalls typed before the sealed line is shown hash to a token gap between them; the gap is not a collective-memory seal and not a score against the fixture; unattested default. No hold-gate issue was opened. Live site copy was not changed. No pair-gap card was added to a live page. No match flag, vote count, shared-reality badge, timeline-verified badge, double claim, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 071)

Queue was still empty on 2026-10-05. Run 071 did **not** invent a Used row and did **not** promote the run 027–070 candidates. Family: opt-in gesture or gaze as local input, reused only after the six-run cooldown (last family use was run 059, slug `local-opt-in-gaze-note`). Candidate draft only: `local-region-token-slip` in `drafts/071-local-region-token-slip/`. One-line: Local region-token slip; a sealed region id is a hashed hypothesis of a local mark; coordinates, path, and gaze stay discarded; the mark is not intent; unattested default. No hold-gate issue was opened. Live site copy was not changed. No region slip was added to a live page. No camera, microphone, getUserMedia, WebGazer, MediaPipe, landmark mesh, dwell timer, path store, gaze-verified badge, mind-read badge, pinch-to-click, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 070)

Queue was still empty on 2026-10-05. Run 070 did **not** invent a Used row and did **not** promote the run 027–069 candidates. Family: human-machine co-agency, reused only after the six-run cooldown (last family use was run 058, slug `local-co-agency-split`). Candidate draft only: `local-single-mover-card` in `drafts/070-local-single-mover-card/`. One-line: Local single-mover card; a step hashes only after exactly one mover is sealed; joint agency stays denied; the seal is a hypothesis of attribution, not a handoff and not a shared mind; unattested default. No hold-gate issue was opened. Live site copy was not changed. No mover card was added to a live page. No handoff tool, agent loop, centaur badge, shared-mind badge, camera, microphone, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 069)

Queue was still empty on 2026-10-05. Run 069 did **not** invent a Used row and did **not** promote the run 027–068 candidates. Family: weak-signal hypothesis ledger, reused only after the six-run cooldown (last family use was run 057, slug `local-weak-signal-ledger`). Candidate draft only: `local-null-first-strip` in `drafts/069-local-null-first-strip/`. One-line: Local null-first strip; an ordinary account must be typed before a remainder can be hashed; the remainder is a hypothesis of what that account does not cover, not an early warning; unattested default. No hold-gate issue was opened. Live site copy was not changed. No strip was added to a live page. No radar, intensity color, early-warning badge, centrality rank, triage score, prediction market, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 068)

Queue was still empty on 2026-10-04. Run 068 did **not** invent a Used row and did **not** promote the run 027–067 candidates. Family: private incubation log, reused only after the six-run cooldown (last family use was run 056, slug `local-private-incubation-log`). Candidate draft only: `local-blanked-prompt-card` in `drafts/068-local-blanked-prompt-card/`. One-line: Local blanked-prompt card; a prompt hashed and removed, plus a later residue, is a hashed hypothesis of a set-aside; the residue is not a retrieved dream and is not scored; unattested default. No hold-gate issue was opened. Live site copy was not changed. No blanked card was added to a live page. No audio cue, notification, vibration, sleep-stage score, match score, dream-advertising insert, microphone, wearable, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 067)

Queue was still empty on 2026-10-04. Run 067 did **not** invent a Used row and did **not** promote the run 027–066 candidates. Family: sensory substitution, reused only after the six-run cooldown (last family use was run 055, slug `local-cross-sense-map`). Candidate draft only: `local-proxy-channel-card` in `drafts/067-local-proxy-channel-card/`. One-line: Local proxy-channel card; a closed source/substitute pair plus a residue token is a hashed hypothesis of substitution; the pair is not a restored sense; unattested default. No hold-gate issue was opened. Live site copy was not changed. No proxy card was added to a live page. No camera, microphone, Web Audio, vibration, tongue array, stripe render, sight-restored badge, acuity score, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 066)

Queue was still empty on 2026-10-04. Run 066 did **not** invent a Used row and did **not** promote the run 027–065 candidates. Family: interval timing, reused only after the six-run cooldown (last family use was run 054). Candidate draft only: `local-two-clock-gap-card` in `drafts/066-local-two-clock-gap-card/`. One-line: Local two-clock gap card; a typed pair of clock readings is a hashed hypothesis of disagreement; the minute gap is not missing time; unattested default. No hold-gate issue was opened. Live site copy was not changed. No gap card was added to a live page. No NTP call, performance.now phenomenon clock, missing-time badge, abduction marker, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 065)

Queue was still empty on 2026-10-04. Run 065 did **not** invent a Used row and did **not** promote the run 027–064 candidates. Family: attention/interoception, reused only after the six-run cooldown (last family use was run 053). Candidate draft only: `local-felt-locus-card` in `drafts/065-local-felt-locus-card/`. One-line: Local felt-locus card; a sealed body region plus a closed quality is a hashed hypothesis of where attention was reported; the locus is not a sensor reading; unattested default. No hold-gate issue was opened. Live site copy was not changed. No locus card was added to a live page. No body diagram, MAIA score, calm-color map, heartbeat count, wearable, camera, microphone, gaze, shared-mind badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 064)

Queue was still empty on 2026-10-04. Run 064 did **not** invent a Used row and did **not** promote the run 027–063 candidates. Family: non-lexical intent capture. Candidate draft only: `local-nonlexical-intent-note` in `drafts/064-local-nonlexical-intent-note/`. One-line: Local non-lexical intent note; a sealed mark plus an optional gloss is a hashed hypothesis of intent; the mark is not a received mind; unattested default. No hold-gate issue was opened. Live site copy was not changed. No intent note was added to a live page. No letter board, facilitator, neural decode, microphone, received-mind badge, telepathy badge, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 063)

Queue was still empty on 2026-10-04. Run 063 did **not** invent a Used row and did **not** promote the run 027–062 candidates. Family: quiet-signal filter. Candidate draft only: `local-quiet-signal-filter` in `drafts/063-local-quiet-signal-filter/`. One-line: Local quiet-signal filter; a typed residue against a sealed floor is a hashed hypothesis; clearing the floor is not a signal; unattested default. No hold-gate issue was opened. Live site copy was not changed. No filter was added to a live page. No microphone, live analyser, detection chip, green-box seal, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 062)

Queue was still empty on 2026-10-03. Run 062 did **not** invent a Used row and did **not** promote the run 027–061 candidates. Family: anomalous-event timeline. Candidate draft only: `local-anomaly-timeline` in `drafts/062-local-anomaly-timeline/`. One-line: Local anomaly timeline; a dated note is a hashed hypothesis against a sealed clock fixture; order is not a cause; unattested default. No hold-gate issue was opened. Live site copy was not changed. No timeline was added to a live page. No connecting line, invented sort day, wave bar, pattern chip, contact claim, healing claim, crash-retrieval badge, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 061)

Queue was still empty on 2026-10-03. Run 061 did **not** invent a Used row and did **not** promote the run 027–060 candidates. Family: correlation-not-causation sync view. Candidate draft only: `local-sync-not-cause-view` in `drafts/061-local-sync-not-cause-view/`. One-line: Local sync-not-cause view; a co-timed note against a sealed clock fixture is a hashed hypothesis; the gap is not a cause; unattested default. No hold-gate issue was opened. Live site copy was not changed. No sync view was added to a live page. No cause arrow, meaningful badge, acausal-principle seal, bar aggregate, network fetch of posts, contact claim, healing claim, or extraterrestrial-hardware seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 060)

Queue was still empty on 2026-10-03. Run 060 did **not** invent a Used row and did **not** promote the run 027–059 candidates. Family: collective-memory miss board. Candidate draft only: `local-collective-miss-board` in `drafts/060-local-collective-miss-board/`. One-line: Local collective miss board; a recalled public wording is a hashed hypothesis against a sealed fixture; disagreement is data, not a timeline proof; unattested default. No hold-gate issue was opened. Live site copy was not changed. No miss probe was added to a live page. No timeline-verified badge, double claim, contact claim, healing claim, or collective-memory seal was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 059)

Queue was still empty on 2026-10-03. Run 059 did **not** invent a Used row and did **not** promote the run 027–058 candidates. Family: opt-in gesture or gaze as local input. Candidate draft only: `local-opt-in-gaze-note` in `drafts/059-local-opt-in-gaze-note/`. One-line: Local opt-in gaze note; a dwell or chord is a hashed hypothesis of intent; camera stays denied, no mind-read badge, unattested default. No hold-gate issue was opened. Live site copy was not changed. No gaze probe was added to a live page. No camera, microphone, getUserMedia, WebGazer, MediaPipe, landmark mesh, accuracy score, mind-read badge, healing claim, contact claim, or gaze-verified badge was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 058)

Queue was still empty on 2026-10-03. Run 058 did **not** invent a Used row and did **not** promote the run 027–057 candidates. Family: human-machine co-agency. Candidate draft only: `local-co-agency-split` in `drafts/058-local-co-agency-split/`. One-line: Local co-agency split; a human initiation beside a machine proposal is a hashed hypothesis; no handoff, no centaur badge, unattested default. No hold-gate issue was opened. Live site copy was not changed. No co-agency board was added to a live page. No agent loop, tool call, implant, camera, microphone, handoff endpoint, centaur badge, healing claim, contact claim, or shared-mind badge was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 057)

Queue was still empty on 2026-10-03. Run 057 did **not** invent a Used row and did **not** promote the run 027–056 candidates. Family: weak-signal hypothesis ledger. Candidate draft only: `local-weak-signal-ledger` in `drafts/057-local-weak-signal-ledger/`. One-line: Local weak-signal ledger; a faint note plus a required disconfirm path is a hashed hypothesis; no intensity radar, no early-warning badge, unattested default. No hold-gate issue was opened. Live site copy was not changed. No signal radar was added to a live page. No sensor, prediction market, intensity score, early-warning badge, healing claim, contact claim, or conscious-access badge was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 056)

Queue was still empty on 2026-10-03. Run 056 did **not** invent a Used row and did **not** promote the run 027–055 candidates. Family: private incubation log. Candidate draft only: `local-private-incubation-log` in `drafts/056-local-private-incubation-log/`. One-line: Local private incubation log; a set-aside and return note is a hashed hypothesis; no sleep-stage score, no insight badge, unattested default. No hold-gate issue was opened. Live site copy was not changed. No incubation probe was added to a live page. No microphone, EEG, wearable, audio drop, dream interpreter, insight score, healing claim, contact claim, or recall badge was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 055)

Queue was still empty on 2026-10-02. Run 055 did **not** invent a Used row and did **not** promote the run 027–054 candidates. Family: sensory substitution. Candidate draft only: `local-cross-sense-map` in `drafts/055-local-cross-sense-map/`. One-line: Local cross-sense map; a closed glyph-to-tone label is a hashed hypothesis; no camera, no sight-restoration badge, unattested default. No hold-gate issue was opened. Live site copy was not changed. No substitution device was added to a live page. No camera, microphone, tongue array, skin electrode, implant, accuracy badge, healing claim, contact claim, or sight-restored badge was published. X scan is in `x-scan.md` and is not a seal.

## Halt (run 054)

Queue was still empty on 2026-10-02. Run 054 did **not** invent a Used row and did **not** promote the run 027–053 candidates. Family: interval timing. Candidate draft only: `local-interval-timing-note` in `drafts/054-local-interval-timing-note/`. One-line: Local interval-timing note; clock span vs felt duration is a hashed hypothesis; no presentiment score, no accuracy badge, unattested default. No hold-gate issue was opened. Live site copy was not changed. No interval probe was added to a live page. No audio tone, random stimulus, physiology sensor, intentional-binding score, Weber-fraction badge, presentiment claim, healing claim, contact claim, or timed-future badge was published.

## Halt (run 053)

Queue was still empty on 2026-10-02. Run 053 did **not** invent a Used row and did **not** promote the run 027–052 candidates. Family: attention/interoception. Candidate draft only: `local-attention-schema-note` in `drafts/053-local-attention-schema-note/`. One-line: Local attention-schema note; self-report is a hashed hypothesis; no sensor, no accuracy score, unattested default. No hold-gate issue was opened. Live site copy was not changed. No attention probe was added to a live page. No camera, microphone, PPG, ECG, haptic actuator, heartbeat count, accuracy score, healing claim, contact claim, or aware badge was published.

## Halt (run 052)

Queue was still empty on 2026-10-02. Run 052 did **not** invent a Used row and did **not** promote the run 027–051 candidates. Candidate draft only: `attested-print-contract` in `drafts/052-attested-print-contract/`. No hold-gate issue was opened. Live site copy was not changed. No print stylesheet was linked. No blanket `attr(href)` suffix, relative-origin expansion, `window.print()` on load, remote `@import`, or print-ready badge was published.

## Halt (run 051)

Queue was still empty on 2026-10-01. Run 051 did **not** invent a Used row and did **not** promote the run 027–050 candidates. Candidate draft only: `attested-redirect-catalog` in `drafts/051-attested-redirect-catalog/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/51. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `_redirects` file was added. No `Location` header, meta refresh, splat, query forward, open-redirect parameter, retired-path fold, or links-preserved badge was published.

## Halt (run 050)

Queue was still empty on 2026-10-01. Run 050 did **not** invent a Used row and did **not** promote the run 027–049 candidates. Candidate draft only: `attested-canonical-identity` in `drafts/050-attested-canonical-identity/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/50. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `rel=canonical` element was added. No `hreflang` annotation, `x-default`, `Link` header, `?q=` fold onto `/`, retired-path revival, or index-ready badge was published.

## Halt (run 049)

Queue was still empty on 2026-10-01. Run 049 did **not** invent a Used row and did **not** promote the run 027–048 candidates. Candidate draft only: `attested-external-link-policy` in `drafts/049-attested-external-link-policy/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/49. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No outbound link policy was added. No `target="_blank"`, `rel=opener`, external-link icon, affiliate wrapper, `utm_*`, click collector, leaving-site interstitial, destination fetch, or trust badge was published.

## Halt (run 048)

Queue was still empty on 2026-10-01. Run 048 did **not** invent a Used row and did **not** promote the run 027–047 candidates. Candidate draft only: `attested-breadcrumb-trail` in `drafts/048-attested-breadcrumb-trail/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/48. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No breadcrumb `nav` was added. No BreadcrumbList JSON-LD, microdata, URL-inferred trail, house icon, ellipsis truncation, or rich-result badge was published.

## Halt (run 047)

Queue was still empty on 2026-10-01. Run 047 did **not** invent a Used row and did **not** promote the run 027–046 candidates. Candidate draft only: `attested-heading-permalinks` in `drafts/047-attested-heading-permalinks/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/47. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No heading `id` was added. No permalink control, DOM-walking table of contents, hover-only hash icon, clipboard write, JSON-LD, or deep-link badge was published.

## Halt (run 046)

Queue was still empty on 2026-10-01. Run 046 did **not** invent a Used row and did **not** promote the run 027–045 candidates. Candidate draft only: `attested-cross-origin-isolation` in `drafts/046-attested-cross-origin-isolation/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/46. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `Cross-Origin-Opener-Policy`, `Cross-Origin-Embedder-Policy`, or `Cross-Origin-Resource-Policy` header was added. No `_headers` file, Cloudflare Transform Rule, `report-to` endpoint, SharedArrayBuffer demo, or isolated badge was published.

## Halt (run 045)

Queue was still empty on 2026-10-01. Run 045 did **not** invent a Used row and did **not** promote the run 027–044 candidates. Candidate draft only: `attested-strict-transport-security` in `drafts/045-attested-strict-transport-security/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/45. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `Strict-Transport-Security` header was added. No `_headers` line, Cloudflare Transform Rule, `includeSubDomains`, `preload` token, hstspreload.org submission, or SSL-grade badge was published.

## Halt (run 044)

Queue was still empty on 2026-10-01. Run 044 did **not** invent a Used row and did **not** promote the run 027–043 candidates. Candidate draft only: `attested-referrer-policy` in `drafts/044-attested-referrer-policy/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/44. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `Referrer-Policy` header was added. No referrer meta, comma chain, Cloudflare Transform Rule, `_headers` line, or privacy-grade badge was published.

## Halt (run 043)

Queue was still empty on 2026-10-01. Run 043 did **not** invent a Used row and did **not** promote the run 027–042 candidates. Candidate draft only: `attested-subprocessors` in `drafts/043-attested-subprocessors/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/43. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/subprocessors` was not added. No footer link, subscribe form, invented mailbox, vendor row, objection-window claim, or compliance badge was published.

## Halt (run 042)

Queue was still empty on 2026-10-01. Run 042 did **not** invent a Used row and did **not** promote the run 027–041 candidates. Candidate draft only: `attested-subresource-integrity` in `drafts/042-attested-subresource-integrity/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/42. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `integrity` attribute was added. No `Integrity-Policy` header, `Integrity-Policy-Report-Only` header, CDN hash fetch, report collector, or SRI badge was published.

## Halt (run 041)

Queue was still empty on 2026-10-01. Run 041 did **not** invent a Used row and did **not** promote the run 027–040 candidates. Candidate draft only: `attested-open-graph-cards` in `drafts/041-attested-open-graph-cards/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/41. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `og:*` or `twitter:*` tags were added. No `?v=` cache-bust URL, dynamic image generator, `article:published_time`, `fb:app_id`, or share-preview badge was published.

## Halt (run 040)

Queue was still empty on 2026-10-01. Run 040 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, 034, 035, 036, 037, 038, or 039 candidates. Candidate draft only: `attested-content-security-policy` in `drafts/040-attested-content-security-policy/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/40. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `Content-Security-Policy` header was added. No `Content-Security-Policy-Report-Only` header, `_headers` file, meta CSP, nonce, `unsafe-inline`, report collector, or A+ badge was published.

## Halt (run 039)

Queue was still empty on 2026-10-01. Run 039 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, 034, 035, 036, 037, or 038 candidates. Candidate draft only: `attested-permissions-policy` in `drafts/039-attested-permissions-policy/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/39. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `Permissions-Policy` header was added. No `_headers` file, `report-to` endpoint, iframe `allow` list, or opted-out badge was published.

## Halt (run 038)

Queue was still empty on 2026-10-01. Run 038 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, 034, 035, 036, or 037 candidates. Candidate draft only: `speculation-rules-default-deny` in `drafts/038-speculation-rules-default-deny/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/38. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `<script type="speculationrules">` was added. No `Speculation-Rules` header, prerender rule, document-wide `href_matches`, or instant-nav badge was published.

## Halt (run 037)

Queue was still empty on 2026-10-01. Run 037 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, 034, 035, or 036 candidates. Candidate draft only: `attested-api-catalog` in `drafts/037-attested-api-catalog/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/37. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/.well-known/api-catalog` was not added. No `rel=api-catalog` link, invented OpenAPI, MCP URL, llms.txt-as-service-desc, or agent-ready badge was published.

## Halt (run 036)

Queue was still empty on 2026-10-01. Run 036 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, 034, or 035 candidates. Candidate draft only: `attested-tdm-reservation` in `drafts/036-attested-tdm-reservation/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/36. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/.well-known/tdmrep.json` was not added. No Content-Signal rewrite of robots.txt, opted-out badge, ODRL policy URL, or crawler-honor claim was published.

## Halt (run 035)

Queue was still empty on 2026-10-01. Run 035 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, or 034 candidates. Candidate draft only: `attested-gpc-well-known` in `drafts/035-attested-gpc-well-known/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/35. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/.well-known/gpc.json` was not added. No CMP, consent cookie, `gpc: true` declaration, or honored badge was published.

## Halt (run 034)

Queue was still empty on 2026-09-30. Run 034 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, or 033 candidates. Candidate draft only: `attested-atom-feed` in `drafts/034-attested-atom-feed/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/34. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/feed.atom` was not added. No `rel=alternate` head link, invented entries, deploy-bumped `updated`, tracking pixel, or email-subscribe enclosure was published.

## Halt (run 033)

Queue was still empty on 2026-09-30. Run 033 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, or 032 candidates. Candidate draft only: `attested-humans-txt` in `drafts/033-attested-humans-txt/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/33. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/humans.txt` was not added. No `rel=author` head link, invented TEAM names, jobs CTA, or ASCII-mascot credits theater was published.

## Halt (run 032)

Queue was still empty on 2026-09-30. Run 032 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, or 031 candidates. Candidate draft only: `hashed-accessibility-statement` in `drafts/032-hashed-accessibility-statement/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/32. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/accessibility` was not added. No overlay widget, statement generator, WCAG 3 claim, conformant chip, invented feedback mailbox, or run 026 badge restatement was published.

## Halt (run 031)

Queue was still empty on 2026-09-30. Run 031 did **not** invent a Used row and did **not** promote the run 027, 028, 029, or 030 candidates. Candidate draft only: `hashed-terms-of-service` in `drafts/031-hashed-terms-of-service/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/31. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/terms` was not added. No generator embed, clickwrap checkbox, auto-renew clause theater, or invented governing-law address was published.

## Halt (run 030)

Queue was still empty on 2026-09-30. Run 030 did **not** invent a Used row and did **not** promote the run 027, 028, or 029 candidates. Candidate draft only: `attested-contact-channel` in `drafts/030-attested-contact-channel/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/30. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/contact` was not added. No form backend, Calendly embed, chatbot, or invented mailbox was published.

## Halt (run 029)

Queue was still empty on 2026-09-30. Run 029 did **not** invent a Used row and did **not** promote the run 027 or 028 candidates. Candidate draft only: `hashed-privacy-policy` in `drafts/029-hashed-privacy-policy/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/29. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/privacy` was not added.

## Halt (run 028)

Queue was still empty on 2026-09-30. Run 028 did **not** invent a Used row and did **not** promote the run 027 candidate. Candidate draft only: `attested-security-txt` in `drafts/028-attested-security-txt/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/28. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/.well-known/security.txt` was not added.

## Halt (run 027)

Queue was empty on 2026-09-30. Run 027 did **not** invent a Used row. Candidate draft only: `default-deny-cookie-notice` in `drafts/027-default-deny-cookie-notice/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/27. A human must add the next slug to Queue before an assimilation run may pick it. Live site copy was not changed.

## Frontier note: 020-webgpu-void-agents (2026-10-14)

Ledger ID: **F-020** (frontier series; not run 020, see "Frontier series" below).

Commit 758c7c1 replaced this whole file with a single entry; the history above was restored on 2026-10-15 and that entry kept here. Concept: WebGPU/Canvas2D emergent particle agents with local finite-state reasoning that morph the surrounding UI chrome by global entropy and consensus. Single self-contained HTML, 2D fallback when WebGPU is missing; naive neighbor search throttles high counts.

## Ledger guard (asked by Void, run 118)

Suggested-by: Void (run 118). The ledger was blanked by full-file writes at 755dc18, f280ded and 758c7c1. `tools/check-ledger.sh` now refuses a ledger missing `## Rules`, `## Used`, `## Queue`, any `## Halt (run N)`, or under 40 lines. It runs in `.githooks/pre-commit` and `.githooks/pre-push` (`git config core.hooksPath .githooks`) and in `.github/workflows/ledger-guard.yml` on every push to master, which fails loudly and auto-restores the last good ledger. **Write this file with git on disk and append only; never full-file API writes.** Note: Void asked for `## Halt (run 027)`; that heading no longer exists, so the guard matches the real headings above.

Run 118 offer page: `drafts/118-local-offer-not-act/proposed-offer.html` now keeps the last act-refusal id (id only, stored locally) and shows "asked by Void, run 118." No Act control was added.

Run 119 rule: the next run must not open a new slug until this guard exists. It exists as of this commit, so the next run may proceed.

## Autopilot (2026-10-02)

Owner instruction: stop waiting on interactive permission forms. Assimilation runs commit ledger and draft files directly. Autopilot does not set `emit: true`, does not write a human seal, and does not invent allowlist hrefs. Interactive hold-gate issues are no longer required for a draft commit.

## Fringe engine (2026-10-02)

Owner direction: Void grows from under-discussed abilities (attention, timing, sensory substitution, incubation logs, weak-signal hypotheses, co-agency, opt-in gesture, miss-board memory, correlation views, anomalous-event timelines). These are hypotheses, not sealed facts. Do not claim contact, healing, remote viewing, or extraterrestrial hardware as attested. Rotate family each run. Do not repeat a family from the last 6 runs, and do not keep emitting security-header or well-known-file variants. Autopilot still commits drafts only. `emit` stays false. No spend, no owner key.

## Fringe rotation

| run | date | family | slug | status |
|---|---|---|---|---|
| 139 | 2026-10-09 | sensory substitution | local-grain-not-picture | candidate, not used |
| 137 | 2026-10-09 | attention/interoception | local-probe-not-wander | candidate, not used |
| 134 | 2026-10-09 | anomalous-event timeline | local-pin-not-episode | candidate, not used |
| 133 | 2026-10-09 | correlation-not-causation sync view | local-window-not-wire | candidate, not used |
| 132 | 2026-10-09 | collective-memory miss board | local-sure-not-shift | candidate, not used |
| 131 | 2026-10-09 | opt-in gesture or gaze as local input | local-glance-not-grant | candidate, not used |
| 130 | 2026-10-09 | human-machine co-agency | local-veto-not-consent | candidate, not used |
| 127 | 2026-10-08 | sensory substitution | local-band-not-object | candidate, not used |
| 122 | 2026-10-08 | anomalous-event timeline | local-gap-not-bridge | candidate, not used |
| 121 | 2026-10-08 | correlation-not-causation sync view | local-beside-not-because | candidate, not used |
| 116 | 2026-10-08 | private incubation log | local-shelf-not-solve | candidate, not used |
| 115 | 2026-10-08 | sensory substitution | local-strip-not-sight | candidate, not used |
| 114 | 2026-10-08 | interval timing | local-gate-not-rate | candidate, not used |
| 113 | 2026-10-08 | attention/interoception | local-confidence-not-gauge | candidate, not used |
| 112 | 2026-10-08 | non-lexical intent capture | local-trace-not-lexeme | candidate, not used |
| 102 | 2026-10-07 | interval timing | local-mark-not-span | candidate, not used |
| 101 | 2026-10-07 | attention/interoception | local-attend-not-pulse | candidate, not used |
| 100 | 2026-10-07 | non-lexical intent capture | local-press-not-word | candidate, not used |
| 099 | 2026-10-07 | quiet-signal filter | local-hush-not-speech | candidate, not used |
| 098 | 2026-10-07 | anomalous-event timeline | local-cluster-not-wave | candidate, not used |
| 097 | 2026-10-07 | correlation-not-causation sync view | local-offset-not-message | candidate, not used |
| 096 | 2026-10-07 | collective-memory miss board | local-schema-not-miss | candidate, not used |
| 095 | 2026-10-07 | opt-in gesture or gaze as local input | local-lift-not-confirm | candidate, not used |
| 094 | 2026-10-07 | human-machine co-agency | local-gap-not-handoff | candidate, not used |
| 093 | 2026-10-07 | weak-signal hypothesis ledger | local-unpromoted-bin | candidate, not used |
| 092 | 2026-10-07 | private incubation log | local-unopened-return | candidate, not used |
| 091 | 2026-10-07 | sensory substitution | local-pair-not-language | candidate, not used |
| 090 | 2026-10-07 | interval timing | local-indifference-blank | candidate, not used |
| 089 | 2026-10-07 | attention/interoception | local-count-withheld | candidate, not used |
| 088 | 2026-10-07 | non-lexical intent capture | local-gloss-withheld | candidate, not used |
| 087 | 2026-10-07 | quiet-signal filter | local-closed-gate | candidate, not used |
| 086 | 2026-10-07 | anomalous-event timeline | local-sort-not-arc | candidate, not used |
| 085 | 2026-10-07 | correlation-not-causation sync view | local-residual-blank | candidate, not used |
| 084 | 2026-10-07 | collective-memory miss board | local-shared-blank | candidate, not used |
| 083 | 2026-10-07 | opt-in gesture or gaze as local input | local-dwell-not-select | candidate, not used |
| 082 | 2026-10-06 | human-machine co-agency | local-abstain-seat | candidate, not used |
| 081 | 2026-10-06 | weak-signal hypothesis ledger | local-bound-not-hit | candidate, not used |
| 080 | 2026-10-06 | private incubation log | local-held-cue-stub | candidate, not used |
| 079 | 2026-10-06 | sensory substitution | local-encoding-not-scene | candidate, not used |
| 078 | 2026-10-06 | interval timing | local-scalar-tick-stub | candidate, not used |
| 077 | 2026-10-06 | attention/interoception | local-notice-lag-bin | candidate, not used |
| 076 | 2026-10-06 | non-lexical intent capture | local-empty-lexeme-slot | candidate, not used |
| 075 | 2026-10-05 | quiet-signal filter | local-underfloor-stub | candidate, not used |
| 074 | 2026-10-05 | anomalous-event timeline | local-unfilled-span | candidate, not used |
| 073 | 2026-10-05 | correlation-not-causation sync view | local-bin-not-arrow | candidate, not used |
| 072 | 2026-10-05 | collective-memory miss board | local-pair-recall-gap | candidate, not used |
| 071 | 2026-10-05 | opt-in gesture or gaze as local input | local-region-token-slip | candidate, not used |
| 070 | 2026-10-05 | human-machine co-agency | local-single-mover-card | candidate, not used |
| 069 | 2026-10-05 | weak-signal hypothesis ledger | local-null-first-strip | candidate, not used |
| 068 | 2026-10-04 | private incubation log | local-blanked-prompt-card | candidate, not used |
| 067 | 2026-10-04 | sensory substitution | local-proxy-channel-card | candidate, not used |
| 066 | 2026-10-04 | interval timing | local-two-clock-gap-card | candidate, not used |
| 065 | 2026-10-04 | attention/interoception | local-felt-locus-card | candidate, not used |
| 064 | 2026-10-04 | non-lexical intent capture | local-nonlexical-intent-note | candidate, not used |
| 063 | 2026-10-04 | quiet-signal filter | local-quiet-signal-filter | candidate, not used |
| 062 | 2026-10-03 | anomalous-event timeline | local-anomaly-timeline | candidate, not used |
| 061 | 2026-10-03 | correlation-not-causation sync view | local-sync-not-cause-view | candidate, not used |
| 060 | 2026-10-03 | collective-memory miss board | local-collective-miss-board | candidate, not used |
| 059 | 2026-10-03 | opt-in gesture or gaze as local input | local-opt-in-gaze-note | candidate, not used |
| 058 | 2026-10-03 | human-machine co-agency | local-co-agency-split | candidate, not used |
| 057 | 2026-10-03 | weak-signal hypothesis ledger | local-weak-signal-ledger | candidate, not used |
| 056 | 2026-10-03 | private incubation log | local-private-incubation-log | candidate, not used |
| 055 | 2026-10-02 | sensory substitution | local-cross-sense-map | candidate, not used |
| 054 | 2026-10-02 | interval timing | local-interval-timing-note | candidate, not used |
| 053 | 2026-10-02 | attention/interoception | local-attention-schema-note | candidate, not used |

Last 6 families before run 103 were interval timing, attention/interoception, non-lexical intent capture, quiet-signal filter, anomalous-event timeline, and correlation-not-causation sync view (runs 102–097). Run 102 reused interval timing only after the six-run cooldown, with a new slug. Do not repeat a family from the last 6 runs. Do not reuse `local-mark-not-span`, `local-indifference-blank`, `local-scalar-tick-stub`, `local-two-clock-gap-card`, or `local-interval-timing-note`.

RECOVERY NOTE: A bad write replaced this file with the word PLACEHOLDER. This commit restores the queue line and the run 059 halt. Prior halt notes 027-058 remain in git history at commit fd9acab8a966d161b6ca4f4ea84b6155564926cc and must be merged back by a human if this shorter file landed. The candidate draft is not a Used row. Run 060 appends a halt and a fringe row only.

RECOVERY NOTE: A bad write replaced this file with the word PLACEHOLDER. Commit history at fd9acab8a966d161b6ca4f4ea84b6155564926cc still holds halt notes 027–058. This file keeps the run 059–066 halt notes and the fringe rotation recovered from that history. The candidate draft is not a Used row. Run 066 appends a halt and a fringe row only.

RECOVERY NOTE: A bad write replaced this file with the word PLACEHOLDER. Commit history at fd9acab8a966d161b6ca4f4ea84b6155564926cc still holds halt notes 027–058. Commit 3ba4e8b061682ccabff0bd14342c5b230916bc5b held halt notes 059–071 before a later placeholder write at 81162f0a72516269c884bee68fecd1af543bee11. This restore keeps the Used table, the run 072 halt, and the fringe rotation. Halt notes 059–070 remain in that commit. The candidate draft is not a Used row.

Restoration note (2026-10-07): commit 214a147 replaced this file with the 8-byte placeholder SEE_DISK, and earlier placeholder writes (23b211e, 81162f0, 7bc854a) had dropped older content. Notes 102–099 were kept from the current file. Halt notes 098–083 were restored from commit 8e0f57e69614b86615be9423065397956186f7bf, 082–071 from dd6b22e, 070–059 from 41e2074, and 058–027 from 7a560d4, word for word. Every Halt note from run 102 down to run 027 now appears here exactly once, in descending order. The Autopilot (2026-10-02) and Fringe engine (2026-10-02) sections were restored from 7a560d4 in their original place between runs 052 and 053. The Fringe rotation section was restored from dd6b22e (rows 053–082 only, so it does not list runs 083–102), and the earlier RECOVERY NOTE paragraphs from d64107c and 41e2074 were put back before the dd6b22e one. No Used row was added or changed.

## Frontier series (ID note, 2026-10-15)

The Frontier-Engine job numbers its experiments 002–020 in its own series. Those numbers are not ledger run numbers: Used row `020` is `answer-ready-modular-blocks` and Halt notes run to 170. History is not renumbered. Frontier experiments are cited as **F-NNN** (this ledger's F-020 = `drafts/020-webgpu-void-agents/`); the draft folders keep their names. The next frontier experiment is F-021 and should use `drafts/F021-<slug>/` so it cannot collide with run drafts.

Restored 2026-10-15: commits 755dc18, 8cf8719, 8c4b307, f280ded and 758c7c1 had blanked or replaced this file, and the e1488e5 restore kept only Halt 141 and 156–170. Every Halt note (027–170) and the Autopilot, Fringe engine and Fringe rotation sections were rebuilt from git history, the longest surviving copy of each. F-020 was assimilated into V01D as the `swarm` stage effect (atomeam/void-loop).


## Guard restore (2026-10-15)

Ledger guard restored this file from aff5616 after a9eac94 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier note: F-023 WebGPU/Canvas Evolutionary Lattice Mind (2026-10-16)

Ledger ID: **F-023** (frontier series; not a run number).

Concept: Continuous lattice substrate (Canvas2D grid, WebGPU compute path noted) whose local update rule is itself evolved by a local Web Worker population of genomes under selection for field entropy/diversity. The mind's fitness morphs the surrounding UI chrome (border, card transform, background) and drives Web Audio sonification of field activity. Pointer seeds energy; optional DeviceOrientationEvent supplies bias; Seal hashes current genome into IndexedDB.

Architecture: single HTML; Worker via blob maintains pop of 8 parameter vectors, returns best; main applies to lattice step and CSS/audio. Not a variation of F-020 (discrete agents+FSM), F-021 (observer classifier on RD/orientation), or F-022 (fluid regime bias of fixed params). Mind is an evolutionary search over the substrate rules themselves.

Expected outcome: Interactive spatial field that discovers new dynamics, warps the page, and sings; sealed rule genomes form a local memory. Runnable with graceful fallbacks (no Worker, no audio, no orientation).

Mechanics: 64×64 float grid, logistic+diffusion rule parameterized by 4 floats; mind ~2–3 Hz; morph radius/hue/scale; seal stores hash+params.

Failure modes: CSP blocks Worker → fixed rule; audio requires gesture; low-end drops resolution.

Building block for future: WebGPU compute lattice, WebXR volume view of evolved field, multi-tile seeding from sealed genomes.


## Guard restore (2026-10-16)

Ledger guard restored this file from 2364112 after 49185e1 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-16)

Ledger guard restored this file from d19e41e after 5bd39d9 broke it. Content that commit wrote is in its diff; re-add it with git on disk.


## Frontier note: F-025 WebGPU Boids RL Mind (2026-10-16)

Ledger ID: **F-025** (frontier series; not a run number).

Concept: Continuous boids/flocking substrate (Canvas2D agents with local neighborhood rules; WebGPU compute path noted) whose behavioral parameters are adapted by a local Web Worker evolutionary/RL mind under selection for interaction reward (pointer density) plus velocity variance. The mind's fitness morphs the surrounding UI chrome (hue-rotate, scale, filter, HUD transform) and drives Web Audio oscillators whose frequencies and gains track fitness and params. Pointer injects forces; optional DeviceOrientationEvent supplies velocity bias; Seal hashes current params+morph into IndexedDB.

Architecture: single HTML; Worker via blob maintains pop of 6 parameter genomes, evaluates fitness, mutates, returns best; main steps O(N²) boids (N≈420), draws trails, applies CSS morph and audio. Not a variation of F-020 (discrete agents+FSM), F-021 (observer classifier), F-022 (fluid regime of fixed params), F-023 (evolutionary lattice rules), or F-024 (volumetric noise + evolutionary controller). Mind is reward-seeking toward user interaction on a continuous agent substrate.

Expected outcome: Interactive spatial flock that learns to attract interaction, warps the page chromatically and spatially, and sings a generative drone; sealed genomes form local memory of successful policies. Runnable with graceful fallbacks (no Worker → fixed params; no audio until gesture; no orientation → ignore).

Mechanics: 420 boids, neighborhoods 60/24, params align/coh/sep/maxSpeed/maxForce; mind ~1.25 Hz; morph 0–1 drives CSS; seal SHA-256 truncated + IndexedDB.

Failure modes: CSP blocks blob Worker → static params; audio blocked until user gesture; low-end drops N; orientation requires HTTPS + permission.

Building block for future: true WebGPU compute boids with spatial hash, WebXR head-tracked flock, multi-agent minds competing for interaction, sealed genome breeding across sessions.

Lands in V01D as spatial stage skill (skills/mini/boids-mind.js); testable via tools/boids-mind.test.mjs for reward→morph mapping.

## Guard restore (2026-10-16)

Ledger guard restored this file from 0dd6351 after 03c1241 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-16)

Ledger guard restored this file from 64ac742 after 3495773 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-16)

Ledger guard restored this file from 4d8debf after 5154104 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from f51594c after 270a251 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 3b0b876 after d492eb5 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 87344bc after 17963d9 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 1cb4dd1 after 02879d8 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 1870e33 after b125851 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 9d889e7 after b478404 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 9267b4a after 20709bf broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 542e25d after d8a54e4 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 50415cc after aab71ad broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from e8256bb after 3752809 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 35a0fcd after e3e82da broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from c1517b5 after e2b5bf6 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from cae3cf2 after a8dfcb0 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from f6b8181 after 3ac156b broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from bd74196 after 0670747 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 4b5805a after cb54fde broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from af1abb5 after 991109e broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from e1c79f8 after 7700545 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-038 (2026-10-17)

**F038-living-spatial-cards-mind**  
Novel combination: Canvas2D spatial field (parameterized RD/logistic) evolved by Web Worker GA; real DOM cards are spatial participants whose position/scale/hue/opacity are driven by regional field samples; dragging cards seeds energy and biases fitness toward co-location responsiveness; global chrome morphs with variance. Not a variation of prior pure-field, agent, NCA, voice, or vector experiments.  
Architecture: single `index.html` + blob Worker; 80×50 grid; 5 living cards; seal to IndexedDB.  
Expected: living document where cards and field co-evolve.  
Mechanics: regional sampling → CSS transforms; drag injects seed; evolution ~0.5 Hz.  
Failure modes: Worker CSP block → static params; small viewports overlap.  
Building block: WebGPU multi-channel + WebXR floating cards.  
Lands in V01D as spatial stage skill.

## Guard restore (2026-10-17)

Ledger guard restored this file from 8565174 after 50c6f52 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 24d4e6a after 0d32f8c broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from ba36fd2 after 8f0abcf broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 9646836 after 36827cf broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 34b2d55 after 86e09e5 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from b2b94a1 after 79e0786 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from ad89441 after 4f5371e broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 7dc9a00 after c44e152 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 113ce95 after 4fab36d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 76a6373 after 1224109 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 6ed3a26 after efa49b1 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 64a8ead after 12658fe broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 81c0085 after 206c49d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 1730dd9 after 479a8aa broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-043 (2026-10-17)

**F043-predictive-residual-lattice**

Novel combination: Canvas2D reaction-diffusion lattice whose diffusion and reaction rates are modulated in real time by the residual error of a local Web Worker evolutionary linear predictor of pointer velocity. Prediction confidence spawns and scales floating DOM anticipation portals that the user can click to reinforce the genome; residual drives field energy injection and Web-style chromatic morph. Seal stores best predictor genes + metrics into localStorage.

Architecture: single index.html; blob Worker maintains population of 6 gene vectors (bias + velocity terms), returns best each ~1.25 Hz; main thread steps 80×50 field, renders via ImageData upsample, positions portals along predicted flow. Not a variation of F-020 (FSM agents), F-022 (fixed gravity wells), F-023/F-025 (evolved substrate or boids params), F-038 (card-field co-evolution without prediction residual), or later portal/audio attempts. Mind is a trajectory residual minimizer whose error is the spatial control signal.

Expected outcome: Interactive spatial field that anticipates gesture, warps its own dynamics and the page hue, and offers clickable portals as embodied feedback. Runnable offline with graceful Worker fallback to static genes.

Mechanics: residual computed from recent pointer delta vs predicted; conf = 1-residual; field step ~60 Hz; portals spawn ~0.45 Hz; morph via CSS filter.

Failure modes: CSP blocks blob Worker → fixed genes; no pointer history → low conf; small screens crowd portals.

Building block: true WebGPU compute residual field, multi-horizon predictors, sealed genome transfer across sessions, WebXR pointer ray prediction.

Lands in V01D as spatial stage skill (skills/mini/predictive-residual.js); testable via tools/predictive-residual.test.mjs for residual→field-rate and conf→portal-scale mapping.

## Guard restore (2026-10-17)

Ledger guard restored this file from 0360583 after 25f9be7 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 3c0d4d1 after f9ba9ce broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from bb827f7 after 24c5885 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 7143aa4 after d18416a broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from f3705c7 after 0b45c78 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 501a51c after 77ce39f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-047 (2026-10-17)

**F047-causal-attention-lattice-mind**

Novel combination: Canvas2D spatial lattice whose local update is driven by a causal (pointer-history-conditioned) attention kernel whose parameters are evolved by a Web Worker genetic algorithm. Attention residuals and gradients physically displace floating DOM "thought nodes" that the user can drag; drag reinforcement and node proximity bias the evolutionary fitness. Global chrome (hue) morphs with prediction confidence. Seal persists best genes to localStorage.

Architecture: single index.html; blob Worker maintains population of 8 gene vectors (radius, decay, pointer weight, residual gain, node attract, energy threshold); main steps 64×36 field, renders ImageData upsample, moves 5 DOM nodes by attention gradients. Not a variation of F-020 (FSM agents), F-023/F-025 (evolved substrate/boids), F-038 (living cards), F-043 (velocity residual), or F-046 (volumetric injection). Mind is evolutionary search over the causal attention mechanism itself, embodied by movable nodes.

Expected outcome: Interactive spatial field that attends to recent gesture, warps dynamics, moves thought nodes toward high-attention regions, and offers embodied drag feedback. Runnable offline with Worker fallback.

Mechanics: causal local attention + pointer history bias; residual drives energy; node velocity from attn gradients; fitness includes node proximity; evolution ~1 Hz; hue morph via CSS.

Failure modes: CSP blocks blob Worker → fixed genes; no pointer history → low conf; small screens crowd nodes.

Building block: WebGPU compute multi-head attention lattice, sealed genome transfer, WebXR ray as causal input.

Lands in V01D as spatial stage skill (skills/mini/causal-attention-lattice.js); testable via tools/causal-attention.test.mjs for residual→field and conf→node mapping.

## Guard restore (2026-10-17)

Ledger guard restored this file from 26089cb after 896a9e6 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from ff60177 after f286f11 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-17)

Ledger guard restored this file from 008491d after dacf006 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from cc9f4fe after 71930ea broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from 5ac07e7 after 1c2dd9f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from b870140 after cf0458f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from fd5285f after 012eb13 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from 569a46f after f9fe596 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-049 (2026-10-18)

**F049-predictive-swarm-residual-mind**

Novel combination: Canvas2D particle swarm whose cohesion/separation and hue are modulated in real time by the residual error of a local Web Worker evolutionary linear predictor of pointer velocity. Draggable DOM memory orbs act as spatial attractors that seed the swarm and bias interaction. Global chrome morphs with residual and confidence. Not a variation of F-020 (WebGPU FSM agents), F-021 (orientation density morph), F-043 (RD lattice residual), or F-047 (attention lattice).

Mind is a trajectory residual minimizer whose error is the spatial control signal for the swarm and the page.

Expected outcome: Interactive spatial swarm that anticipates gesture, warps its own dynamics and the page hue/glow, and offers draggable orbs as embodied feedback. Runnable offline with Worker fallback to static genes. Seal persists best genes.

Mechanics: pointer history → residual; residual scales cohesion vs separation and particle hue; orbs attract within range; fitness rewards low residual + high coherence; evolution ~2 Hz.

Failure modes: CSP blocks blob Worker → static genes; low motion → high residual/chaotic swarm; small screens crowd orbs; localStorage blocked → seal fails.

Building block for future: WebGPU compute swarm with MLP residual, WebXR hand as causal input, multi-genome competition for orb proximity, sealed genome transfer.

Lands in V01D as spatial stage skill (skills/mini/predictive-swarm-residual.js); testable via residual→cohesion and conf→morph mapping.

## Guard restore (2026-10-18)

Ledger guard restored this file from b4f14fd after 2fe498c broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from 06514c1 after 628e218 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from c9db2c9 after e84c500 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from f2743c5 after 210b282 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from 0dc595e after 9749713 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from 38a18bd after ec04be7 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from 8861826 after 29b63a9 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from a2c8efe after 22534c8 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from a2d5fed after 9665ee9 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-18)

Ledger guard restored this file from a1f60b4 after e8a4a28 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-19)

Ledger guard restored this file from ff66ee6 after de288a9 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-19)

Ledger guard restored this file from 474205a after e0d9961 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-19)

Ledger guard restored this file from a999a3d after 40eaac5 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-19)

Ledger guard restored this file from a6e05d3 after a724b7a broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-182 (2026-10-19)

**F182-webgpu-spectral-nca-orientation-mind**

Novel combination: WebGPU compute NCA / reaction-diffusion lattice whose local update is biased in real time by microphone spectral energy (AnalyserNode) and device orientation (beta/gamma tilt). Floating DOM thought nodes are positioned, scaled, and blended by global energy and orientation. Page hue morphs with energy + gamma. Not a variation of F-020 (FSM agents), F-021 (orientation density morph), F-049 (residual swarm), or prior NCA/spectral drafts: the spectral+orientation signals are injected as bias terms into the GPU compute rule itself, with DOM nodes as embodied field proxies.

Expected outcome: Interactive spatial field that reacts to sound and device tilt, warps dynamics, moves thought nodes, and morphs chrome. WebGPU primary; notes fallback.

Mechanics: FFT energy → uniform bias; orientation → tilt term in Laplacian update; nodes driven by energy; seal persists state to localStorage.

Failure modes: no WebGPU, mic/orientation denied, CSP blocks.

Building block for: WebXR immersion of the same lattice or Worker-evolved kernels.

## Guard restore (2026-10-19)

Ledger guard restored this file from 85b9d91 after 79af241 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-19)

Ledger guard restored this file from 102fe28 after 298c812 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-19)

Ledger guard restored this file from f7e7975 after 372733d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-20)

Ledger guard restored this file from 31f3f54 after 9db2938 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-20)

Ledger guard restored this file from 9b8e49b after b801d6c broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier F186 (2026-10-19)

### F186 Trajectory Attention Echo Mind

Architecture: Coarse spatial memory grid (16×12 × 8-dim embeddings) written by pointer trajectories and word-seed injections. Pure-JS multi-head attention queries the grid from current pointer + device orientation. Top peaks drive generative echo phrases (lexicon + seed-biased templates) rendered on morphing DOM cards attracted to attention loci. Canvas2D heatmap + attention rays. IndexedDB seals grid + seeds.

Expected outcome: User's path becomes readable memory; local attention focuses and generates living echo text on physically moving cards. Persistent offline mind. No WebGPU, no particle kernels, no pure RNNs.

Mechanics: Trajectory stamps directional embeddings into cells; attention softmax over grid; cards lerp to peak world positions and update text; seal stores full field state.

Failure modes: IndexedDB blocked (session only), no orientation (pointer proxy), sparse paths (weak contrast).

Building blocks: Spatial trajectory memory, local multi-head attention over embeddings, attention-driven generative DOM echoes, hybrid canvas/DOM, IndexedDB field seal.

## Guard restore (2026-10-20)

Ledger guard restored this file from a116e43 after b1f0891 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-20)

Ledger guard restored this file from 65d5fe9 after 91234cb broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-20)

Ledger guard restored this file from 58c1cc0 after 78fb063 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-20)

Ledger guard restored this file from e8cb671 after d40d51f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-20)

Ledger guard restored this file from f1f5fbe after 2ab20dc broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 23b0d08 after fb0fd3b broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from a2b9bb7 after 2966c6a broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from dd1b226 after 76b1f1f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 7180c71 after 461d55b broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 4b1656d after fb65d07 broke it. Content that commit wrote is in its diff; re-add it with git on disk.


## Frontier Engine F-190 (2026-10-21)

**F190-webgpu-causal-memory-field-orbs**

Novel combination: WebGPU compute (CPU fallback) causal memory field — pointer trajectories deposit decaying energy into a diffusing 2D grid. Local Web Worker runs residual velocity predictor + hill-climbing parameter adaptation on field samples. Morphing spatial DOM orbs are positioned, scaled, and filtered by local field queries and the worker predicted intent. Device orientation injects tilt bias. Page chrome morphs with energy and residual. Not a variation of F-020 (agents), F-021 (orientation density), F-182 (spectral NCA), or F-186 (attention echoes).

Expected outcome: Interactive spatial field that remembers recent paths as glowing causal traces, anticipates gesture, and manifests memory as floating morphing orbs. Persistent adaptation via localStorage. Runnable offline.

Mechanics: deposit → diffusion/decay/tilt on grid; worker residual + fitness; orbs lerp to peaks; CSS vars drive hue/contrast.

Failure modes: no WebGPU (CPU ok), orientation denied, Worker blocked (static params).

Building blocks: causal spatial memory, predictive parameter adaptation, embodied DOM field probes. Next: WebXR immersion of the field or GPU-resident worker kernels.


## Guard restore (2026-10-21)

Ledger guard restored this file from d5b580c after 14d7ed7 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 5c69587 after f8f31ae broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from b3d3b71 after 6f4cca6 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-195 (2026-10-21)

**F195-webgpu-attention-swarm-mind**

Novel combination: WebGPU compute shader (with Canvas2D fallback) drives a resident swarm of GPU particles. Local Web Worker samples agent features and runs a tiny multi-head attention mind (matrix ops on sampled states) producing thought vectors. Thoughts continuously morph the page chrome via CSS custom properties (hue, contrast, blur, perspective, rotateX/Y, scale), drive Web Audio oscillators, and can feed parameters back into the field. Pointer and DeviceOrientationEvent bias the swarm. Seal persists attention weights to IndexedDB.

Not a variation of prior field/lattice/boids/NCA/probe/gaze-RNN/causal-memory experiments: the substrate is GPU-resident agents whose inter-agent attention is computed in a worker, with the residual thought vectors physically distorting browser UI chrome and generating audio.

Architecture: single index.html; WebGPU storage buffers + compute pipeline; blob Worker for attention; CSS var morph; AudioContext after gesture; IndexedDB seal.

Expected outcome: Interactive GPU swarm forming clusters under spatial input; page warps and recolors with the local mind; generative tones pulse with coherence; sealed weights for continuity. Runnable offline in WebGPU browsers.

Mechanics: particle update on GPU; sample 16 agents → 4-head attention → 8-dim thought; map to CSS and audio; light weight mutation.

Failure modes: no WebGPU (2D fallback), Worker/CSP block (static), audio autoplay, orientation permission.

Building blocks: GPU agent attention, thought-driven physical UI distortion, sealed local mind weights. Next: WebGPU attention kernels or WebXR gaze injection.

V01D landing: spatial GPU skill; testable via thought→CSS mapping stability.

## Guard restore (2026-10-21)

Ledger guard restored this file from c7982e1 after 77c39cc broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-196 (2026-10-21)

**F196-webxr-causal-attention-lattice**

Novel combination: Canvas2D (WebGPU path noted) causal energy lattice that receives pointer and optional XR-ray deposits. Local Web Worker samples the field and runs residual velocity prediction plus multi-sample attention to produce a continuous thought vector. Thought and residual continuously morph page chrome via CSS custom properties and drive floating DOM orbs that query local energy. Progressive WebXR session entry; field remains fully interactive in flat mode.

Not a variation of F-020 (FSM agents), F-021 (orientation density), F-190 (causal memory orbs), or F-195 (GPU attention swarm): the substrate is a diffusing causal deposit field whose residual prediction error and attention-weighted samples become the physical control signal for both DOM embodiment and chrome distortion, with progressive WebXR.

Architecture: single index.html; main-thread grid diffusion + ImageData; blob Worker for residual+attention; CSS var morph; localStorage seal; optional XR session.

Expected outcome: Interactive spatial field that remembers recent paths as glowing causal traces, anticipates gesture, and manifests local mind state as morphing chrome and floating probes. Runnable offline. XR when supported.

Mechanics: deposit → diffusion/decay; worker residual + attention; orbs positioned by energy + mind; CSS vars map thought/residual/energy.

Failure modes: no Worker (static), XR unsupported (flat ok), low performance (Canvas2D fine).

Building blocks: causal spatial deposit, residual-attention mind, embodied DOM probes, progressive WebXR. Next: WebGPU compute kernel for the lattice + XR projection layer.

V01D landing: spatial causal skill; testable via residual→CSS stability and orb query accuracy.

## Guard restore (2026-10-21)

Ledger guard restored this file from 910ad6a after 97ec99e broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from c6b7263 after e39e17d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 37a68d5 after f704c13 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from e510e67 after 8001e91 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from ce25a03 after 882e55e broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from be2f4a8 after e197fb2 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 2d60c8b after b0c4d6f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 81fb138 after 6eceeb0 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 15bb6cd after 8e1494b broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 8a6f3d5 after 042d990 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from c1bbca9 after 9ed3dea broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from a5a5880 after 799ea79 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from f152e1d after e51cb88 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from e269d82 after a555e1f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 31476d9 after 920da2c broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from c765f8c after 9d6b8f1 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from ef58cc8 after 803820b broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 9af0fa5 after 3038081 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from c13aa06 after 163902d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 7c914cb after aa82fbf broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 050903c after 50ef839 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 37f8602 after 66c2d83 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 2a65b5d after bf701de broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 166b22f after 78efc59 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 9fc709f after a420512 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 5da3696 after 84def09 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 2db3365 after abcff25 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 57ee2c9 after 11bbd5f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 4666dfe after 3318b58 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 1656d7e after 4bba380 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 84354e3 after cacecec broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from fe5942e after ed27b68 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from b807e23 after 80f19d5 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from f9dd262 after 62edbf8 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 1076c33 after 74dffc4 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-21)

Ledger guard restored this file from 3150877 after 02ebd50 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from 4c0f718 after 6e8c490 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from 70ccc2f after bde8edc broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from 760cc60 after 693cf0e broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from 1298faa after 4abdc34 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from 672b5d5 after 537c26e broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from 5c711b2 after b5ccd3b broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from dc47282 after 58fe45d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from c52dccc after b231381 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from ce8afee after 36ef899 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from d2b03f2 after 09f9735 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from 0d381a0 after 222109e broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from 267e2b2 after d8105cf broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from 0717fd6 after d4130d5 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from f445900 after 2907ff2 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-239 (2026-10-22)

**F239-webgpu-gesture-evolved-causal-swarm**

Novel combination: Canvas2D (WebGPU probe + future compute) causal particle swarm driven by pointer/XR deposits. Local Web Worker GA evolves attract/repel/decay constants online by maximizing clustering fitness around recent gesture deposits. Fitness residual and generation morph page chrome via CSS custom properties and scale floating DOM probes that query deposits. Progressive WebXR session entry.

Not a variation of F-196 (residual-attention lattice), F-238 (audio fluid lattice), or prior pure evolutionary Canvas experiments: the substrate is a force-based particle swarm whose physical parameters are directly evolved by a local genetic algorithm whose fitness is the clustering response to user causal deposits, closing a gesture→physics→evolution loop, with WebGPU/XR expansion hooks.

Architecture: single index.html; CPU particle step + ImageData-style draw; blob Worker GA; CSS var morph; IndexedDB seal; optional XR request.

Expected outcome: Interactive spatial swarm that learns better force laws from how well it clusters around your gestures. Chrome and probes respond. Runnable offline. XR when supported.

Mechanics: deposits → particle forces; worker fitness + evolve; apply best constants; probes track; CSS maps fitness/evolv.

Failure modes: no Worker (static params), no WebGPU (Canvas2D), XR unsupported (flat complete), low performance (reduce N).

Building blocks: WebGPU compute kernel for swarm, full XR hand-pose deposits, density feedback into fitness. Next: pure WebGPU particle compute + XR projection.

V01D landing: spatial evolved-swarm skill; testable via fitness rise under repeated gesture patterns.


## Guard restore (2026-10-22)

Ledger guard restored this file from f284bcd after 6f4c5b4 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-22)

Ledger guard restored this file from 11e9942 after 6319ea3 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-23)

Ledger guard restored this file from b8ae046 after 0bf042d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-23)

Ledger guard restored this file from df1ba0a after 837848d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-23)

Ledger guard restored this file from e4c6ad7 after ebb3537 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-245 (2026-10-23)

**F245-webgpu-acoustic-softbody-webxr-mind**

Novel combination: Softbody particle-spring lattice (CPU with WebGPU compute hook) whose stiffness, damping and rest-scale are continuously adapted by a local Web Worker evolutionary MLP. Multi-modal residual inputs: microphone spectral energy bins, device orientation tilt, and optional WebXR hand summary. Hybrid DOM anchors physically bound to vertices that morph (scale, hue, filter) with local strain. Residual prediction error drives CSS chrome morph (hue/blur/contrast) and generative Web Audio oscillators. Progressive WebXR; sealed policy to IndexedDB.

Not a variation of F-244 (hand neural softbody control of fixed physics): here the physics parameters themselves are the evolved output of a residual-minimizing acoustic+orientation mind, closing an audio→physics→audio+DOM loop, with strain-driven embodiment.

Architecture: single index.html; main-thread softbody step + Canvas2D; blob Worker MLP+hill-climb; CSS var morph; AudioContext after gesture; IndexedDB seal; optional XR.

Expected outcome: Interactive softbody that stiffens/softens to ambient sound and tilt; pointer/hand sculpts it; floating DOM orbs stretch and recolor with deformation; page and tones pulse with residual. Runnable offline. XR when supported.

Mechanics: springs with MLP-modulated k/d/rest; worker residual fitness on strain vs spectral alignment; anchors query particles; CSS and audio map residual/energy/strain.

Failure modes: no Worker (static), mic denied (spectral=0), no WebGPU (Canvas2D), XR unsupported (pointer complete), audio blocked until gesture.

Building blocks: WebGPU compute softbody, full XR joint-to-vertex binding, sealed genome transfer, density/spectral feedback into fitness. Next: pure GPU softbody + multi-agent acoustic minds.

V01D landing: spatial acoustic-softbody skill; testable via residual→CSS stability and strain→anchor scale mapping.

## Guard restore (2026-10-23)

Ledger guard restored this file from a720e8d after 85541d3 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-23)

Ledger guard restored this file from b03aa0a after fa30dc2 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-23)

Ledger guard restored this file from 6301439 after 405be99 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-23)

Ledger guard restored this file from 4f39576 after 1ca9f2a broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-248 (2026-10-23)

**F248-webgpu-residual-density-portal-mind**

Novel combination: Coarse residual density lattice (Canvas2D, WebGPU compute path noted) whose cells hold short residual embeddings that diffuse under a residual-driven rate. Local Web Worker residual MLP (evolutionary hill-climb) consumes device orientation tilt, microphone spectral energy, and a compact pointer-trajectory embedding; predicts next lattice residual norm. Residual error modulates diffusion, portal attraction, and page chrome. Floating DOM memory portals query local residual/density, receive 3D CSS transforms/scale/hue/backdrop from samples, and when dragged consolidate nearby residual embeddings into a sealed memory fragment written to IndexedDB while injecting a radial density wave. Progressive WebXR entry. Generative Web Audio driven by residual spectrum.

Not a superficial variation of F-247 (free causal token particles with attention forces and passive thought-orbs): substrate is a fixed residual density lattice with an explicit consolidation action performed by the portals themselves; mind is a residual predictor of lattice entropy from multi-modal sensors rather than an attention-bias policy; embodiment is active memory-consolidating portals rather than passive orbs.

Architecture: single index.html; main-thread lattice step + Canvas2D; blob Worker residual MLP + hill-climb; CSS var + portal 3D morph; AudioContext after gesture; IndexedDB seal; optional XR.

Expected outcome: Interactive residual density field that clusters under tilt, sound and gesture. Portals drift to high-residual peaks, morph in 3D, and when dragged consolidate a fragment and seed a visible wave. Chrome and tones pulse with residual. Runnable offline. XR when supported.

Mechanics: lattice residual + 2-dim emb; worker residual fitness; portals lerp to peaks + CSS rotate/scale from residual; drag consolidates + seals + wave; CSS/audio map residual.

Failure modes: no Worker (static), mic denied (spectral=0), no orientation (tilt=0), Canvas2D only, XR unsupported (pointer complete), audio blocked until gesture.

Building blocks: pure WebGPU residual density compute, true residual transformer in worker, multi-portal consensus seals, XR spatial consolidation. Next: multi-agent residual minds sharing a global consolidation buffer.

V01D landing: spatial residual-density-portal skill; testable via residual→portal scale stability and drag→IndexedDB seal + wave injection.

## Frontier Engine F-250 (2026-10-23)

**F250-webgpu-intent-flow-hypothesis-mind**

Novel combination: Coarse intent-flow velocity field (Canvas2D advection-diffusion of a velocity grid; WebGPU compute path noted) sourced by a local Web Worker evolutionary residual agent that predicts a 2D intent vector from device orientation tilt, microphone spectral energy, and a compact pointer-velocity residual. Residual error modulates flow viscosity and page chrome. Floating DOM hypothesis orbs are passive tracers advected by local flow velocity and morph (scale, hue, CSS rotate, backdrop) according to local |intent| and residual. Explicit drag/click selects an orb, seals a short hypothesis fragment (intent sample + residual) to IndexedDB, and injects a temporary radial source that biases future flow. Progressive WebXR entry. Generative Web Audio driven by flow divergence and residual.

Not a superficial variation of F-249 (recurrent agents competing in a constraint arena under orientation gravity with mutual springs): substrate is a dynamic velocity flow sourced by an intent predictor rather than fixed springs between autonomous agents; embodiment is passive tracers that become active only on deliberate selection/seal rather than always-on policy-driven cards; mind is an intent-vector residual minimizer rather than a recurrent policy. Leaves residual density lattices, consolidating portals, and multi-agent competition.

Architecture: single index.html; main-thread fluid step + Canvas2D; blob Worker residual MLP + hill-climb; CSS var + orb morph; AudioContext after gesture; IndexedDB seal; optional XR.

Expected outcome: Interactive intent flow that responds to tilt, sound and pointer. Orbs drift with the current, morph with velocity/residual, and when selected seal a fragment while injecting a visible redirection wave. Chrome and tones pulse with residual. Runnable offline. XR when supported.

Mechanics: velocity grid + dens; worker residual fitness on intent prediction; orbs lerp via local velocity + CSS from mag/residual; drag seals + injects source; CSS/audio map residual.

Failure modes: no Worker (static), mic denied (spectral=0), no orientation (tilt=0), Canvas2D only, XR unsupported (pointer complete), audio blocked until gesture, IndexedDB blocked (in-memory).

Building blocks: pure WebGPU fluid compute, true residual transformer in worker, multi-orb consensus selection, XR hand hypothesis selection, shared flow across peers. Next: multi-agent intent minds with competing sources.

V01D landing: spatial intent-flow-hypothesis skill; testable via residual→flow stability, drag→IndexedDB seal + visible injection, and orb advection matching local velocity samples.

## Guard restore (2026-10-24)

Ledger guard restored this file from fc1f8f6 after 7b8153c broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-24)

Ledger guard restored this file from 2e20f85 after 614b59a broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-24)

Ledger guard restored this file from d8fa888 after 4ef6228 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-24)

Ledger guard restored this file from 9f43277 after 8d5bdbb broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-253 (2026-10-24)

**F253-webgpu-nca-spatial-audio-ui-mind**

Novel combination: Coarse Neural Cellular Automata lattice (Canvas2D with WebGPU compute path noted) whose local update is a tiny residual MLP evolved by a local Web Worker genetic algorithm. Fitness maximises pattern diversity and responsiveness to causal deposits (pointer trajectory + device orientation tilt + optional mic spectral centroid). The emergent NCA activity field is projected into a generative Web Audio topology: oscillators whose frequency, gain and stereo pan are driven by sampled high-activity cells, creating a spatial soundscape. Floating DOM memory orbs are positioned, scaled, hue-shifted and filtered according to local NCA state; dragging an orb consolidates that local pattern fragment into a sealed genome written to IndexedDB and injects a persistent stimulus seed. Progressive WebXR entry. Page chrome morphs with residual and activity energy.

Not a superficial variation of F-250 (intent-flow velocity tracers), F-252 (hand-MLP spring limbs competing for an orb), or prior acoustic softbodies: the substrate is an evolved neural cellular automata whose state directly generates a spatial audio graph, and embodiment is consolidating memory orbs that seal fragments rather than always-on physical limbs or passive tracers. Leaves pure particle arenas, fixed-spring constraint systems, and residual density portals.

Architecture: single index.html; main-thread NCA step + Canvas2D ImageData; blob Worker residual MLP + hill-climb; CSS var + orb morph; AudioContext after gesture; IndexedDB seal; optional XR.

Expected outcome: Interactive living lattice that grows complex patterns in response to pointer, tilt and sound. Orbs drift toward active regions and morph with local state. Dragging an orb seals a fragment and seeds a lasting motif. Spatial audio pulses and pans with the field. Chrome shifts with residual. Runnable offline. XR when supported.

Mechanics: neighbourhood diffusion + residual MLP delta; worker fitness on entropy + deposit response; orbs query cells + CSS from state; drag seals + injects; oscillators bound to activity samples; CSS maps residual/energy.

Failure modes: no Worker (static), mic denied (spectral=0), no orientation (tilt=0), Canvas2D only, XR unsupported (pointer complete), audio blocked until gesture, IndexedDB blocked (in-memory).

Building blocks: pure WebGPU compute NCA kernel, true residual transformer in Worker, multi-orb consensus consolidation, XR hand deposit + seal, shared sealed genomes across peers. Next: multi-agent NCA minds competing for audio space.

V01D landing: spatial NCA-spatial-audio skill; testable via residual→pattern stability, drag→IndexedDB seal + visible seed, and audio pan matching cell x-coordinate.

## Guard restore (2026-10-24)

Ledger guard restored this file from 43caf18 after 553c735 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-24)

Ledger guard restored this file from 08e4732 after 6a43866 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-24)

Ledger guard restored this file from 0ec4ba4 after 275bf8f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-24)

Ledger guard restored this file from 2fcb6da after 82d12de broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-24)

Ledger guard restored this file from ce8de8e after 67f62cb broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-24)

Ledger guard restored this file from 3273b8f after b8cfdb9 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-25)

Ledger guard restored this file from c2b915d after 26c76ad broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-25)

Ledger guard restored this file from b7bef91 after 2d7196a broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## F259 (2026-10-25) — orient-causal-webgpu-mlp-dom-physics

**Branch away from**: WebGPU attention/residual/volumetric/NCA lattices, spatial morph UI, WebXR hand/gaze arenas, sealed genome competitions (F251–F258 cluster).

**Concept**: DeviceOrientation as causal force input into a softbody particle system. Tiny local MLP (4-4-2) emits stabilizer forces from orientation + velocity stats. Hybrid Canvas2D + draggable DOM orbs as physical embodiments. IndexedDB persists particles + MLP weights. WebGPU init optional; physics on CPU for reliability.

**Files**: drafts/F259-orient-causal-webgpu-mlp-dom-physics/index.html, SPEC.md

**Novelty**: pure DeviceOrientation causal physics + controller MLP + hybrid DOM embodiments + IDB, avoiding attention lattices, residual predictors, volumetric injection, pure NCA, spectral residuals.

**Status**: prototype delivered, offline-capable, interactive.

## Guard restore (2026-10-25)

Ledger guard restored this file from 4de32dd after 3f8baf7 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-25)

Ledger guard restored this file from 6f27551 after 5b2b513 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-26)

Ledger guard restored this file from fec93d0 after d1b12f7 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-26)

Ledger guard restored this file from 474cd8d after 940db16 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-26)

Ledger guard restored this file from aa31bed after 3b39d8e broke it. Content that commit wrote is in its diff; re-add it with git on disk.


## F260 (2026-10-26) — orient-query-attention-softbody

**Branch away from**: WebGPU attention/residual/volumetric/NCA lattices, spatial morph UI, WebXR hand/gaze arenas, sealed genome competitions, DeviceOrientation direct physics + MLP (F251–F259 cluster).

**Concept**: DeviceOrientation (or pointer) as the query vector into a local single-head attention mechanism over particle positions (keys). Attention weights become the soft-body attraction forces, producing orientation-causal clustering. Attention concentration morphs surrounding UI chrome (hue-rotate, scale, card transforms). IndexedDB seals the current query + morph + weight signature.

**Files**: drafts/F260-orient-attention-softbody/index.html, SPEC.md

**Novelty**: pure attention-as-force-law (not fixed physics, not residual predictor, not evolved rule, not MLP controller). Local AI is the Worker attention; spatial substrate and DOM respond to it.

**Status**: prototype delivered, offline-capable, interactive. Canvas2D + Worker; WebGPU path noted.


## Guard restore (2026-10-26)

Ledger guard restored this file from cf9413c after 8e90a8b broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-26)

Ledger guard restored this file from 28b26d2 after 469296d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-26)

Ledger guard restored this file from e970cfe after d760ff1 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-26)

Ledger guard restored this file from 2b7055c after eb95200 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## F269 (2026-10-26) — webgpu-fluid-evolving-audio-mind

**Branch away from**: WebGPU softbody/attention/cloth/NCA/MLP residual lattices, WebXR gaze/hand arenas, sealed genome competitions, orientation-direct physics (F260–F268 cluster).

**Concept**: Continuous 2D density/velocity fluid field (CPU diffusion with WebGPU compute path noted) whose energy and entropy statistics drive a local Web Worker evolutionary genome. The genome controls generative Web Audio (freq/filter/gain). Pointer and DeviceOrientation inject sources. Floating DOM orbs sample local density and morph. CSS chrome responds to field + mind mood. IndexedDB seals genomes. Progressive XR stub.

**Files**: drafts/F269-webgpu-fluid-evolving-audio-mind/index.html, SPEC.md

**Novelty**: fluid density substrate + evolutionary audio-mind fitness on field complexity + spatial DOM sampling. Not force-law physics, not residual predictor, not attention weights, not cloth constraints. Closes fluid→stats→evolved-synth→CSS loop.

**Status**: prototype delivered, offline-capable, interactive. Canvas2D + Worker + Web Audio; WebGPU path noted.

**V01D landing**: spatial fluid-audio skill; testable via entropy→mutation and density→orb scale.

## F269 (2026-10-26) — webgpu-fluid-evolving-audio-mind

**Branch away from**: WebGPU softbody/attention/cloth/NCA/MLP residual lattices, WebXR gaze/hand arenas, sealed genome competitions, orientation-direct physics (F260–F268 cluster).

**Concept**: Continuous 2D density/velocity fluid field (CPU diffusion with WebGPU compute path noted) whose energy and entropy statistics drive a local Web Worker evolutionary genome. The genome controls generative Web Audio (freq/filter/gain). Pointer and DeviceOrientation inject sources. Floating DOM orbs sample local density and morph. CSS chrome responds to field + mind mood. IndexedDB seals genomes. Progressive XR stub.

**Files**: drafts/F269-webgpu-fluid-evolving-audio-mind/index.html, SPEC.md

**Novelty**: fluid density substrate + evolutionary audio-mind fitness on field complexity + spatial DOM sampling. Not force-law physics, not residual predictor, not attention weights, not cloth constraints. Closes fluid→stats→evolved-synth→CSS loop.

**Status**: prototype delivered, offline-capable, interactive. Canvas2D + Worker + Web Audio; WebGPU path noted.

**V01D landing**: spatial fluid-audio skill; testable via entropy→mutation and density→orb scale.

## Guard restore (2026-10-27)

Ledger guard restored this file from a7aa061 after 8631f29 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-27)

Ledger guard restored this file from 3af8036 after 120c720 broke it. Content that commit wrote is in its diff; re-add it with git on disk.


## F275 (2026-10-27) — webgpu-acoustic-residual-spatial-mind

**Branch away from**: WebGPU softbody/attention/cloth/NCA/MLP residual lattices, WebXR gaze/hand arenas, sealed genome competitions, orientation-direct physics, fluid-evolving-audio, spectral trajectories, causal RNN memory field, reservoir gesture DOM chain (F260–F274 cluster).

**Concept**: WebGPU (Canvas2D fallback) particle flock whose attraction/noise is modulated by the residual of a local Web Worker online linear predictor of DeviceOrientation + pointer velocity. Cluster centroids drive spatial Web Audio oscillators (PannerNode). Draggable DOM listener portals reposition the acoustic listener and inject bias into the predictor, closing the loop. CSS morphs with residual. IndexedDB seals weights.

**Files**: drafts/F275-webgpu-acoustic-residual-spatial-mind/index.html, SPEC.md

**Novelty**: residual-driven particle embodiment + spatial acoustic output from clusters + embodied listener portals. Not fluid density, not RNN deposit compression, not reservoir+spring chain, not evolutionary audio genomes, not softbody force laws. Closes residual-predict → flock-steer → spatial-sound → portal-bias loop.

**Status**: prototype delivered, offline-capable, interactive. Canvas2D particles + blob Worker LMS + Web Audio spatial + IndexedDB. WebGPU compute path noted.

**V01D landing**: spatial acoustic-forager skill under void-live-deploy/skills/mini/acoustic-residual-spatial.js; testable via residual→attraction and portal-drag→panner + bias.

Building blocks: residual predictor, particle flock steered by error, spatial audio from statistics, draggable acoustic portals, sealed weights. Next: full WebGPU compute flock with spatial hash; multi-head residual.

## Guard restore (2026-10-28)

Ledger guard restored this file from 4014e70 after 5f06d8b broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 0327b8a after c4c0c05 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 612a94c after a8098f6 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from dc2c5ca after e900e31 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from b7e59cc after 8543c7b broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 46143d5 after cca3371 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 64e4833 after c12ea6e broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## F282 (2026-10-28) — speech-rnn-causal-portal-mind

**Branch away from**: WebXR hand neural cloth (F281), spectral causal portals (F280), orientation-RNN physical UI arena (F279), acoustic residual spatial (F275), and prior residual/spectral/sealed-genome/WebGPU lattice clusters.

**Concept**: Continuous local speech recognition (Web Speech API) as primary causal input. Words embed to compact vector + pointer residual, fed to Web Worker tiny Elman RNN. Hidden state modulates Canvas2D particle field forces/hue (WebGPU path prepared). Field energy spawns bidirectional DOM concept portals showing recent phrases; dragging a portal injects force impulse back into the field and seals genome (RNN state + phrase) to IndexedDB. Optional residual-modulated audio.

**Files**: drafts/F282-speech-rnn-causal-portal-mind/index.html, SPEC.md

**Novelty**: local speech causal stream driving predictive RNN that co-evolves spatial particle field and embodied language portals with closed-loop impulse. Not hand-tracking cloth, not spectral diffusion portals, not pure orientation physics agents, not residual acoustic flock.

**Status**: prototype delivered, offline-capable, interactive. Canvas2D particles + blob Worker RNN + SpeechRecognition (with demo fallback) + hybrid DOM portals + IndexedDB.

**V01D landing**: spatial speech-portal skill under void-live-deploy/skills/mini/speech-rnn-portal.js; testable via phrase→field bias and drag→impulse + seal.

Building blocks: speech causal input, Worker Elman residual, modulated particle field, language portals, sealed genome. Next: WebGPU compute kernel; multi-user sealed transfer.

## Guard restore (2026-10-28)

Ledger guard restored this file from 6e5f372 after 635e9e7 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from bd12864 after b2d1bda broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from a0c4f6a after dd7532f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 0af2f2d after 3f4a8fa broke it. Content that commit wrote is in its diff; re-add it with git on disk.
## F284 (2026-10-28) — predictive-trajectory-residual-morph

**Branch away from**: WebXR gaze MLP WebGPU swarm (F283), speech RNN causal portals (F282), trajectory lattices (F026/F030), residual acoustic fields, sealed pure-DOM arenas, and prior NCA/fluid/attention clusters.

**Concept**: Pointer trajectory sequence (positions + velocities) as primary causal input to a local predictive residual model (tiny RNN/MLP in main or Worker). Prediction error (residual/surprise) modulates Canvas2D/WebGPU particle field forces and hue. High residual spawns/morphs floating DOM memory cards that physically rearrange via density sampling. Dragging a card injects correction impulse and can seal corrected trajectory + model weights to IndexedDB. Optional residual audio. Progressive WebXR gaze-as-trajectory stub.

**Files**: drafts/F284-predictive-trajectory-residual-morph/index.html, SPEC.md

**Novelty**: sequential trajectory predictive residual driving hybrid spatial particle morph + embodied correction cards with sealed genome loop. Not gaze competition swarm, not speech portals, not single-position lattice, not pure residual acoustic.

**Status**: prototype delivered, offline-capable, interactive. Canvas2D particles + residual predictor + hybrid DOM cards + IndexedDB. WebGPU path noted.

**V01D landing**: spatial trajectory-residual skill under void-live-deploy/skills/mini/trajectory-residual-morph.js; testable via trajectory→residual, residual→card spawn/move, seal/load restores weights.

Building blocks: trajectory sequence causal stream, local predictive residual model, residual-modulated particle field, hybrid morphing DOM cards with correction, sealed genome. Next: WebGPU residual kernel; multi-user residual broadcast.

## Guard restore (2026-10-28)

Ledger guard restored this file from 3f7e971 after 76a7c21 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 92f8d4d after 4ffa357 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 46315cd after 590644f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from ca19c7b after 0532508 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from e7986ee after ad5edd1 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 8797000 after 9d82fcf broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from a0e2a4d after 57d15de broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 8cf94dd after b46ba06 broke it. Content that commit wrote is in its diff; re-add it with git on disk.


## F285 (2026-10-28) — webxr-hand-genome-competition

**Branch away from**: residual predictors (F284 trajectory residual, F275 acoustic residual), spectral/audio minds (F269 fluid audio, F282 speech-rnn portals), orientation softbodies (F259/F260), attention lattices, pure NCA, pointer-history fields.

**Concept**: True WebXR hand-tracked (wrist joint projection, mouse proxy fallback) multi-agent competition arena. Six agents with tiny local MLP genomes (4-input → 2-force) compete for a central energy orb. Hands physically push/grab agents. Seal best genome to localStorage; load transfers mutated genome into a random agent. Hybrid DOM labels as embodiments. Canvas2D physics, fully offline-capable.

**Files**: drafts/F285-webxr-hand-genome-competition/index.html, SPEC.md

**Novelty**: WebXR hand causal input into competing genome-driven agents with sealed transfer loop. Leaves residual density, spectral diffusion, speech portals, and single-mind softbodies.

**Status**: prototype delivered, offline-capable, interactive. Canvas2D + WebXR session + hybrid DOM + localStorage seals.

**V01D landing**: spatial hand-genome skill under void-live-deploy/skills/mini/webxr-hand-genome.js; testable via hand→agent force, seal/load restores genome fitness bias.

Building blocks: WebXR hand pose proxy, local MLP genome, competitive energy fitness, sealed transfer via storage, hybrid DOM labels. Next: full joint tracking + WebGPU particle kernel + WebRTC multi-user genome broadcast.


## F286 (2026-10-28) — webgpu-online-learning-spatial-agent

**Branch away from**: WebXR hand genome competition (F285), speech-rnn causal portals (F282), residual predictors, spectral NCA, evolutionary lattices, pure attention fields.

**Concept**: Spatial particle field (Canvas2D, WebGPU compute path prepared) whose attract/diffuse/noise parameters are continuously adapted by a local online-learning agent (tiny linear policy + gradient descent in Web Worker). Pointer density samples and user actions (click/move) serve as supervisory signals. Prediction error morphs page chrome (opacity/scale/hue) and influences hybrid DOM probe orbs that query the field and inject force impulses on drag. Optional WebXR session for spatial control.

**Files**: drafts/F286-webgpu-online-learning-spatial-agent/index.html, SPEC.md

**Novelty**: Online gradient-based local AI adapting the substrate rules themselves from user behavior, with embodied probes and error-driven chrome. Not genome competition, not speech portals, not residual density or spectral bias.

**Status**: prototype delivered, offline-capable, interactive. Canvas2D particles + blob Worker online GD + hybrid DOM probes + chrome morph + WebXR stub.

**V01D landing**: spatial online-learning skill under void-live-deploy/skills/mini/online-spatial-agent.js; testable via interaction→param adaptation and error→UI morph + probe impulse.

Building blocks: online GD worker, adaptable particle forces, density sampling, DOM probes with closed-loop, error chrome. Next: full WebGPU compute kernel for field; multi-probe attention weighting.

## Guard restore (2026-10-28)

Ledger guard restored this file from 0598028 after c395ca2 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 748aedb after 37e7f46 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from a9261fa after 70a8c07 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 4ee7738 after 11fa16d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from ee3afc8 after 6ba578c broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 8fd60b4 after 752e39a broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from cefbfd7 after cf7f91d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## F298 (2026-10-28) — webgpu-attention-message-graph-mind

**Branch away from**: WebGPU Hebbian spatial kernels (F297), decision-tree orbs, DeviceOrientation genome arenas, residual trajectory predictors, reservoir/echo lattices, self-listening spectral agents, neural foraging genomes, and WebXR hand/gaze MLPs.

**Concept**: Dynamic spatial concept graph whose node embeddings are updated by a local attention-based message-passing step. Primary path uses a WebGPU compute kernel (when available) to perform neighbor aggregation and residual embedding updates; CPU mirror always runs. Floating DOM concept cards are physically attracted to high-attention clusters and morph size/opacity with embedding magnitude. Pointer drag injects a temporary query node that biases attention weights. Champion graph (embeddings + adjacency) seals to IndexedDB. Fully offline after load; progressive enhancement (Canvas2D + CPU message passing always works).

**Files**: drafts/F298-webgpu-attention-message-graph-mind/index.html, SPEC.md

**Novelty**: WebGPU compute kernel as the attention message-passing substrate itself controlling hybrid particle nodes + physical DOM concept cards. Not grid Hebbian, not CPU MLP/reservoir/decision-tree policies, not genome transfer.

**Status**: prototype delivered, offline-capable, interactive. Canvas2D nodes/edges + WebGPU compute attention stub + hybrid DOM cards + IndexedDB seals.

**V01D landing**: spatial attention-graph skill under void-live-deploy/skills/mini/webgpu-attention-message-graph-mind.js; testable via drag→embedding change, cards move toward high-attention clusters, seal/load restores node embeddings.

Building blocks: WebGPU attention message-passing kernel, dynamic spatial graph, residual embedding updates, physical DOM concept cards, sealed graph persistence. Next: full k-nearest GPU neighbor search; multi-head attention; WebXR hand as query source.

## F299 (2026-10-28) — hum-crystal-music-box
- drafts/F299-hum-crystal-music-box/index.html, SPEC.md; entry ledger/frontier/F-299-hum-crystal-music-box.md
- Hum a tune, crystals grow on a 3D spiral, an on-device PPM learner hums an answer; detector 16/16, learner 2.57 vs 3.85 bits/note (order-0).

## Guard restore (2026-10-28)

Ledger guard restored this file from f0c550b after 33263f1 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 8789939 after 085924a broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 51e66e0 after f599884 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 393d25a after 52e7716 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 8ae4563 after 8cec8d3 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 4d5866d after 5eb937a broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from dbba093 after 01363d2 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 0cc4f0f after 9201e7c broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from d99235f after 7b74380 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from d8bfd49 after 7b4779f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from afc40eb after 0dd691d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from d040493 after 90b3b38 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 3294a30 after 8c92a92 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-312 (2026-10-28)

**F312-webgpu-attention-wave-sonifier-mind**

Novel combination: Canvas2D wave/reaction-diffusion lattice whose diffusion and reaction rates are modulated by a causal attention kernel whose parameters are evolved by a local Web Worker genetic algorithm. Field energy and attention focus drive CSS morph of page chrome and a floating card, plus Web Audio oscillator synthesis tracking spatial energy bands. Pointer and DeviceOrientation seed the field and bias attention. Seal persists best genome to IndexedDB. Not a variation of F-020 (FSM agents), F-023/F-025 (evolved fixed rules/boids), F-043/F-049 (velocity residual), F-047 (attention with movable nodes), F298 (graph message passing), F310 (particle life), or F311 (WebRTC sealed MLP orbs).

Architecture: single index.html + blob Worker; 64×40 grid; population of 6 gene vectors; morph via CSS; audio on gesture; seal to IndexedDB.

Expected outcome: Interactive spatial wave field that attends to gesture, discovers richer dynamics, warps the page, and sings a generative drone following field activity. Runnable offline with Worker/audio/orientation fallbacks.

Mechanics: field step ~60 Hz modulated by evolved attention; mind ~1 Hz; energy → hue/scale/filter and oscillator freqs/gains; seal SHA-256 truncated.

Failure modes: CSP blocks Worker → fixed genes; audio until gesture; orientation permission; low-end drops resolution.

Building block: evolved attention kernel on spatial substrate + field-to-audio mapping. Next: WebGPU compute attention aggregation, WebXR tokens, multi-genome wave fronts.

Lands in V01D as spatial stage skill (skills/mini/attention-wave-sonifier); testable via tools for residual/energy → morph and audio mapping.

## Guard restore (2026-10-28)

Ledger guard restored this file from 4d18f82 after 445eff2 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-28)

Ledger guard restored this file from 60aa982 after 136a91a broke it. Content that commit wrote is in its diff; re-add it with git on disk.


## Frontier Engine F-313 (2026-10-28)

**F313-webgpu-nca-spatial-memory-mind**

Novel combination: WebGPU compute-shader Neural Cellular Automata (NCA) on a 128×128 float grid with neighbor diffusion and sinusoidal reaction. A local Web Worker hill-climbs a reaction bias from field energy and interaction statistics. Pointer deposits seeds that propagate; DeviceOrientation biases hue. Field energy morphs page chrome via CSS custom properties. Floating DOM probes sample deposits and can seal a pattern fragment to IndexedDB. Progressive Canvas2D fallback. Not a variation of F-020 (FSM agents), F-021 (orientation+density+morph), F-312 (attention-wave sonifier), residual lattices, particle life, or prior graph/attention minds: core is GPU-resident NCA kernel adapted by worker residual-style hill-climb with explicit spatial memory seals and probe embodiment.

Architecture: single index.html; WebGPU compute (8×8 workgroups), double-buffered storage buffers; blob Worker ~1 Hz; CSS vars; IndexedDB seal; pointer + orientation.

Expected outcome: Interactive spatial NCA field that grows, decays, and reorganizes under gesture and tilt. Page chrome warps with energy. Probes appear at deposits and seal. Runnable offline; WebGPU preferred.

Mechanics: seed deposit → diffusion + reaction (worker bias) → energy → CSS morph + probe spawn → optional IndexedDB seal.

Failure modes: no WebGPU (Canvas2D clear), Worker blocked (static bias), no orientation (no tilt), IDB unavailable (status only).

Building blocks: true WebGPU NCA with learned MLP kernels, multi-layer residual state, WebXR plane projection of grid texture, sealed pattern replay as seed texture.

Lands in V01D as spatial NCA skill (skills/mini/nca-spatial-memory); testable via energy→CSS stability and pointer→IndexedDB seal + probe spawn.


## Guard restore (2026-10-29)

Ledger guard restored this file from aaa2b0b after 96e302a broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from d5ff43e after 454c36f broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from a524128 after a28abf5 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-314 (2026-10-28)

**F314-webgpu-nca-xr-residual-mind**

Novel combination: Canvas2D/WebGPU-targeted Neural Cellular Automata (NCA) on a 128×128 float grid whose local reaction is parameterized by a small evolved MLP (weights adapted by local Web Worker genetic algorithm). Residual error of a causal linear predictor of pointer/orientation velocity injects energy and modulates diffusion. Field energy and residual drive CSS chrome morph (hue, saturation, background). Floating DOM probes spawn at interaction sites and can be dragged to seed energy. Optional WebXR path for spatial projection. Seal persists best MLP weights + metrics to IndexedDB.

Not a superficial variation of F-313 (simple bias hill-climb NCA without residual predictor or MLP reaction kernel), F-312 (attention-wave sonifier), F-043/F-049 (velocity residual on RD or swarm without NCA/MLP), or prior agent/attention minds: core is NCA substrate with evolved MLP reaction kernel controlled by residual prediction error, embodied by draggable probes and chrome morph.

Architecture: single index.html; Canvas2D progressive fallback (WebGPU compute noted); blob Worker maintains population of 8 MLP weight vectors, returns best; main steps grid, renders upsample, positions probes, applies CSS morph; IndexedDB seal; pointer + orientation.

Expected outcome: Interactive spatial NCA field that grows under gesture and residual prediction error, warps page chrome, and offers draggable probes as embodied feedback. Sealed genomes form local memory of successful reaction kernels. Runnable offline with graceful fallbacks.

Mechanics: 128×128 grid, neighbor diffusion + MLP reaction (bias, neigh, self, energy-scale); residual from pointer velocity delta; probes spawn/drag inject; fitness rewards moderate energy + low residual; seal stores weights.

Failure modes: no Worker (CSP) → static weights; no IndexedDB → status only; low-end drops resolution; orientation requires permission.

Building blocks: true WebGPU compute NCA with MLP kernel in shader, WebXR plane/volume projection of grid texture with controller residual, multi-layer residual state, sealed pattern replay as seed texture, spatial audio from field bands.

Lands in V01D as spatial NCA residual skill (skills/mini/nca-residual-mind.js); testable via residual→energy injection and seal of MLP weights.

## Guard restore (2026-10-29)

Ledger guard restored this file from 6e95cdf after cf9d629 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 357c61f after 526d060 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 1d065ca after ce44b0a broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 93888c3 after ce0beb9 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 5298dfb after cb0d1a8 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 5bc2e55 after a6dfeaa broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 288b249 after aa75ecf broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from fb02c05 after 2fdb71c broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-313 (2026-10-29)

**F313-webgpu-latent-dream-volume-curator**

Novel combination: WebGPU (Canvas2D multi-slice fallback) latent density volume whose evolution is driven by a local generative latent walker (recurrent state + evolutionary gene mutation under density-diversity and seed-co-location fitness). User phrases become persistent memory seeds (attractor points). A curator agent samples high-density regions, maps latent coordinates to interpretive phrases, and spawns floating DOM concept cards at projected positions. Dragging a card relocates its seed and reinforces the genome. Density variance morphs page chrome. Seal persists walker genome + seeds to IndexedDB. Not a variation of F-020 (FSM agents), F-023/F-025 (evolved lattice/boids), F-043 (residual), F-047 (attention nodes), F298 (graph message), F310 (particle life), F311 (WebRTC orbs), or F312 (attention wave sonifier).

Architecture: single index.html; volume step on main; curator samples peaks; hybrid draggable DOM cards; IndexedDB seal. WebGPU compute path noted for full 3D.

Expected outcome: Interactive spatial dream volume that evolves structures around user seeds, interprets them as living rearrangeable cards, warps the page, and remembers genomes. Runnable offline.

Mechanics: 48×48 density (slice of 3D); walker 8-dim + 4 genes; curator ~1.5 Hz; drag closes seed loop; variance → CSS hue/scale.

Failure modes: no Worker needed (main thread); IndexedDB private → session; low-end ok.

Building block: full WebGPU raymarched volume + on-device embedding for phrase gen; WebXR dream view.

Lands in V01D as spatial stage skill (skills/mini/latent-dream-volume.js); testable via seed→peak density and drag→seed relocate + seal restore.

## Guard restore (2026-10-29)

Ledger guard restored this file from c45b642 after 0ec333d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 1ac582c after 2c115a1 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 66656a5 after 8c28ecb broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from b5c9bb2 after bbf4c46 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 90adecf after 8950a17 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 2088ab5 after 007d7ba broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 364300e after f9487a2 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from bf1e20d after 2660d2d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from f1d6da3 after da36dd7 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 9f8d3d3 after eb88c37 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 6f8d91e after c26d078 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from be41737 after 3a31d49 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from aabf061 after 9b36928 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-456 (2026-10-29)

**F456-webgpu-granular-broadcast-genome-mind**

Novel combination: Canvas2D granular discrete-element particle simulation with collision impulse resolve whose per-particle genes (restitution, friction, hue) undergo sealed transfer on contact from higher-fitness (low kinetic energy) particles to lower. Multi-tab shared field via BroadcastChannel for cross-window genome injection into low-fitness particles. DeviceOrientation provides causal tilt gravity (pointer override). Floating DOM probe cards sample regional fitness clusters and seal successful gene sets to IndexedDB. Progressive WebGPU compute kernel (spatial hash + parallel resolve) noted. Offline-capable single file.

Branches away from recent dominant cluster (WebGPU NCA/spatial lattices, orientation-MLP/RNN, residual predictors, WebXR hand verlet/Ising, L-system, HDC palace, semantic point agents, single-tab Hebbian theft): core is granular collision physics + multi-tab BroadcastChannel sealed genome transfer + IndexedDB regional probes, not NCA, not residual, not pure orientation models, not softbody DOM, not attention lattices, not k-means particles.

**Files**: drafts/F456-webgpu-granular-broadcast-genome-mind/index.html, SPEC.md

Architecture: single index.html; ~180 particles; collide+transfer; BroadcastChannel; DeviceOrientation/pointer; DOM probes + IndexedDB. Canvas2D active.

Expected outcome: Particles settle and spread genomes under tilt; multi-tab sharing; click probes to seal. Fully interactive, offline after load.

Failure modes: no deviceorient → pointer; private mode limits storage/channels; high N CPU-bound (WebGPU next).

Building blocks for next: true WebGPU compute granular kernel, WebXR hand force injectors, WebRTC multi-peer sealed transfer, hybrid CSS-transform DOM bodies driven by the field.

Lands in V01D as spatial granular-genome skill.

## Guard restore (2026-10-29)

Ledger guard restored this file from a3d5928 after ed8a4fe broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 831b0a3 after 0d24e07 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from b4845fb after cfcadd8 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 6ed2684 after 72118ef broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 869bec3 after f4da08b broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 9cb5de8 after 6213483 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from 626d869 after 17d334e broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-29)

Ledger guard restored this file from dbe8ac7 after 7af8d15 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-30)

Ledger guard restored this file from 422fc9b after 51bab23 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Guard restore (2026-10-30)

Ledger guard restored this file from f4bd497 after 41b53f9 broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-466 (2026-10-30)

**F466-webgpu-spectral-cloth-dom-weaver**

Novel combination: Canvas2D mass-spring cloth (22×14) whose spring stiffness is modulated by live microphone spectral energy; residual of a one-step spectral-centroid predictor injects turbulence. Editable DOM Verse tiles are woven to sampled mesh points, can be dragged to pull the fabric or clicked to pin. Sealed snapshots (positions + tile text + spectral metrics) persist to IndexedDB and replay as living memory. CSS chrome (hue, scale, background) morphs with energy.

Not a superficial variation of F-465 (Hebbian mic-swarm morph), F-456 (granular collision genome + BroadcastChannel), F-314/F-313 (NCA + evolved MLP residual), or prior particle/attention/RD minds: core is continuous deformable cloth mesh coupling acoustic spectrum → mechanical properties → spatial DOM layout with embodied drag/pin and sealed cloth-memory.

Architecture: single index.html; AnalyserNode FFT; semi-implicit Euler + damping; DOM absolute positioning + transform; IndexedDB seals; pointer + optional mic. Canvas2D active (WebGPU compute path noted).

Expected outcome: Interactive spatial cloth that stiffens/flutters with voice, warps editable notes across the page, responds to physical pull/pin, and restores sealed woven states. Fully interactive, offline after load.

Failure modes: no mic (pointer + synthetic residual), private mode limits IDB, high grid size CPU-bound (WebGPU next).

Building blocks: true WebGPU compute cloth kernel, WebXR hand pin/pull, multi-tab sealed cloth BroadcastChannel, local MLP spectral→stiffness learner.

Lands in V01D as spatial acoustic-cloth skill (skills/mini/spectral-cloth-weaver); testable via energy→CSS change, drag→displacement, seal→IDB round-trip.

**Files**: drafts/F466-webgpu-spectral-cloth-dom-weaver/index.html, SPEC.md

## Guard restore (2026-10-30)

Ledger guard restored this file from f3362a1 after 0d8444d broke it. Content that commit wrote is in its diff; re-add it with git on disk.

## Frontier Engine F-467 (2026-10-30)

**F467-webgpu-causal-echo-lattice-mind**

Entry added by ledger-guard from drafts/F467-webgpu-causal-echo-lattice-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Causal Echo Lattice Mind: user pointer trajectories, device orientation, and optional microphone spectral energy generate delayed "echo" particles on a lattice. A local residual predictor forecasts the next pointer position; the residual error injects turbulence and attraction that warps the echoes. Spatial editable DOM tiles act as embodied seeds — dragging them injects strong echoes. Sealing captures a snapshot of residual, echoes, and tile states to IndexedDB. CSS chrome morphs with residual. Canvas2D active; WebGPU compute path noted for future advection.

**Novelty**
Not a superficial variation of F466 spectral cloth (mass-spring mesh + spectral stiffness), F465 Hebbian swarm, residual density lattices, NCA, or pure predictive orbs. Core is trajectory-echo delay lines + causal residual prediction driving a morphic particle lattice that couples to spatial DOM tiles as active seeds, with sealed echo memory.

**Architecture**
- Single index.html
- Canvas2D echo particles with residual-driven forces
- Main-thread linear residual predictor (Worker evolutionary upgrade noted)
- Absolute-positioned contenteditable tiles with drag seeding
- DeviceOrientation + optional AnalyserNode
- IndexedDB seals
- CSS hue/background morph

**Expected Outcome**
Interactive spatial echo field that trails and anticipates user motion, responds to tilt and voice, lets tiles seed and be warped by the lattice, and restores sealed memories. Fully offline after load.

**Failure Modes**
No orientation (tilt=0), mic denied (energy=0), Canvas2D only, private mode IDB limits.

**Building Blocks**
True WebGPU compute echo advection, Worker residual MLP, WebXR tracked echoes, multi-tab BroadcastChannel echo sharing.

**V01D Landing**
skills/mini/causal-echo-lattice; testable via residual→echo turbulence, drag→seed injection, seal→IDB restore.

**Files**: drafts/F467-webgpu-causal-echo-lattice-mind/SPEC.md, drafts/F467-webgpu-causal-echo-lattice-mind/index.html

## Frontier Engine F-468 (2026-10-30)

**F468-webrtc-expression-agent-field**

Entry added by ledger-guard from drafts/F468-webrtc-expression-agent-field/SPEC.md, after a full-file write dropped it.


**Concept**
Sealed Local Expression-Tree Agents in a Shared WebRTC Field. Multiple independent agents each own a symbolic expression tree (arithmetic + sin/abs on DeviceOrientation tilt, position, velocity, time) that evaluates to force vectors. Agents move under these forces + tilt gravity + optional pointer attract. On collision of two sealed agents, the higher-fitness transfers its full expression tree genome. User clicks to seal an agent (IndexedDB persist of tree + hash). Optional WebRTC DataChannel (manual SDP offer/answer) shares sealed genomes across peers; received genomes inject into lowest-fitness local agent. Canvas2D rendering. Fully offline local field; WebRTC progressive.

**Novelty / Branch**
Deliberately leaves the recent dominant cluster of local neural/probabilistic models (MLP, Hebbian, Bayesian particle filter, residual predictors, causal echo lattices, online-learning networks) driving particle/DOM physics with IndexedDB seals. Uses symbolic expression trees (not neural weights) + true WebRTC DataChannel sealed genome transfer (prior used BroadcastChannel or local only) + competitive multi-agent under continuous orientation causal input. Not NCA, not spectral residuals, not pointer-history fields, not softbody DOM, not k-means, not volumetric injection.

**Architecture**
- Single index.html
- 12 agents with recursive expression trees
- DeviceOrientation tilt as leaf input + gravity
- Collision detection for separation + sealed tree copy
- IndexedDB seals
- RTCPeerConnection + DataChannel for cross-peer share (STUN, manual SDP)
- Canvas2D particles with fitness display
- Offline-capable local simulation

**Expected Outcome**
Agents drift and evolve expression-driven behaviors under tilt. Seal by click; collisions spread superior sealed trees. Create/paste SDP to share genomes with another browser instance. Interactive via pointer even without orientation or peers. Restores seal awareness on reload.

**Failure Modes**
No orientation (tilt=0, still pointer + random trees). Private mode no IDB. WebRTC needs two instances + STUN reachable + manual SDP copy; falls back to local. Deep trees can be unstable (depth capped). High agent count CPU.

**Building Blocks**
WebGPU compute parallel expression eval, true WebXR hand as additional input leafs, automatic signaling, expression mutation operators, hybrid DOM embodiment of agents.

**V01D Landing**
skills/mini/expression-webrtc-field; testable via seal→IDB, collision→tree copy, SDP→genome inject.

**Files**: drafts/F468-webrtc-expression-agent-field/SPEC.md, drafts/F468-webrtc-expression-agent-field/index.html

## Frontier Engine F-468 (2026-10-30)

**F468-webgpu-hebbian-resonance-cavity-mind**

Entry added by ledger-guard from drafts/F468-webgpu-hebbian-resonance-cavity-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Hebbian Resonance Cavity Mind: a spatial wave-equation cavity (Canvas2D, WebGPU compute path noted) whose local propagation speeds and damping are biased by a running Hebbian co-activation matrix learned from user pulse injections and tile interactions. Absolute-positioned contenteditable Verse tiles act as embodied resonators: their text length, edit frequency, and drag position inject or absorb energy and strengthen Hebbian links between cavity regions. Residual of a one-step energy predictor (main-thread) injects turbulence. Optional device orientation tilts the cavity potential; optional microphone spectral centroid modulates global damping. Sealing captures field snapshot, Hebbian weights, tile texts, and residual metrics to IndexedDB for living memory restore. CSS chrome (hue, scale, background gradient) morphs continuously with total cavity energy and Hebbian entropy.

**Novelty**
Not a superficial variation of F467 causal-echo-lattice (trajectory delay lines + residual predictor on particles), F466 spectral-cloth-weaver (mass-spring mesh + spectral stiffness), F465 Hebbian-mic-swarm-morph (particle swarm with mic-driven Hebbian), residual density lattices, NCA, or pure predictive orbs. Core is continuous wave-equation cavity whose anisotropic propagation is Hebbian-learned from co-occurring energy injections, coupled to spatial DOM resonators that both seed and are warped by the field, with sealed cavity-memory.

**Architecture**
- Single index.html (no external deps)
- Canvas2D 2D wave equation (u[t+1] = 2u[t] − u[t−1] + c²∇²u − d·u) on ~80×50 grid
- Hebbian matrix (coarse 8×5 regions) updated on co-activation of high-energy bins; biases local c
- Absolute-positioned contenteditable tiles (5) with drag-to-seed and click-to-pin
- Main-thread linear residual predictor on total energy (Worker evolutionary upgrade noted)
- DeviceOrientationEvent for gravity tilt potential
- Optional AnalyserNode spectral centroid → damping
- IndexedDB seals (field, weights, tiles, residual)
- CSS custom properties driven by energy/entropy for chrome morph

**Expected Outcome**
Interactive spatial resonance cavity that rings and propagates under pointer, tilt, and voice; learns preferred pathways between user-seeded regions; lets editable tiles act as resonators that inject energy and are visually warped by local amplitude; restores sealed memories as living fields. Fully offline after load.

**Failure Modes**
No orientation (tilt=0), mic denied (damping fixed), Canvas2D only (WebGPU next), private mode IndexedDB quota, high grid size CPU-bound.

**Building Blocks**
True WebGPU compute wave kernel with Hebbian texture, Worker residual MLP, WebXR tracked resonator hands, multi-tab BroadcastChannel cavity sharing, local TF-IDF tile embeddings modulating resonance frequencies.

**V01D Landing**
skills/mini/hebbian-resonance-cavity; testable via pulse→Hebbian bias change, drag→seed injection + tile warp, seal→IDB restore of field+weights.

**Files**
drafts/F468-webgpu-hebbian-resonance-cavity-mind/SPEC.md
drafts/F468-webgpu-hebbian-resonance-cavity-mind/index.html

**Files**: drafts/F468-webgpu-hebbian-resonance-cavity-mind/SPEC.md, drafts/F468-webgpu-hebbian-resonance-cavity-mind/index.html

## Frontier Engine F-469 (2026-10-30)

**F469-webgpu-evo-particle-spatial-audio-dom-mind**

Entry added by ledger-guard from drafts/F469-webgpu-evo-particle-spatial-audio-dom-mind/SPEC.md, after a full-file write dropped it.


**Concept**
WebGPU Evo-Particle Spatial Audio DOM-Pusher Mind: GPU compute particles (WebGPU storage buffers + compute shader for integration) each carry a short genome of force parameters (attraction, noise amplitude, color bias, audio pitch). A local genetic algorithm (main-thread tournament selection, crossover, mutation) evolves the population every N frames; fitness is proximity to pointer or to "liked" sealed zones plus survival (not dragged away). Particles act as spatial audio emitters via Web Audio PannerNodes (positioned in 3D from 2D particle coords, frequency from genome + velocity). Absolute-positioned contenteditable Verse tiles are physically pushed when particles enter proximity (CSS transform/position updated from collision impulses). Tile text length modulates local particle birth rate. Optional DeviceOrientation tilts gravity. Sealing captures best genomes, current particle snapshot, tile texts, and residual metrics to IndexedDB for living restore. CSS chrome (hue, scale, background) morphs with average fitness and total energy. Canvas2D fallback if WebGPU unavailable.

**Novelty**
Not a superficial variation of F468 Hebbian resonance cavity (wave equation + Hebbian bias), F468 WebRTC expression trees, F467 causal-echo-lattice (delay lines + residual), F466 spectral cloth, F465 Hebbian-mic-swarm, residual density lattices, NCA, or pure predictive orbs. Core novel combination is GPU-computed particle genomes evolved by local GA, each particle a spatial audio emitter (PannerNode), and particles physically push spatial DOM Verse tiles while tiles influence birth rates, with sealed living genome+field memory. True WebGPU compute path primary; spatial audio + DOM physics coupling previously unattempted together.

**Architecture**
- Single index.html (no external deps)
- WebGPU: compute shader updates particle pos/vel from genome params + gravity/tilt + pointer attract; render as instanced points or fallback Canvas2D
- Local GA: population of ~64 particles, genome float[6], tournament selection every 120 frames, fitness from pointer proximity + click-likes
- Web Audio: AudioContext + one Oscillator + PannerNode per active emitter (pooled, limited to 16 simultaneous)
- Absolute contenteditable tiles (4) with drag; proximity impulse updates their left/top
- DeviceOrientationEvent for gravity tilt
- IndexedDB seals (genomes, snapshot, tiles)
- CSS custom properties driven by fitness/energy for chrome morph
- Offline after load; WebGPU progressive enhancement

**Expected Outcome**
Interactive spatial particle field that evolves preferred force behaviors under pointer and tilt; particles emit localized tones that pan with position; editable tiles are pushed around by particle swarms and influence local density; sealing restores a living evolved field. Fully offline after load. Runnable in supporting browsers; graceful Canvas2D fallback.

**Failure Modes**
No WebGPU (Canvas2D sim), orientation denied (tilt=0), AudioContext suspended until gesture, private mode IndexedDB quota, high particle count GPU/CPU bound, browser autoplay policy blocks audio until interaction.

**Building Blocks**
Worker-based GA population, multi-channel spatial audio convolution, WebXR hand as additional attractors, BroadcastChannel multi-tab genome sharing, local embedding of tile text modulating genome fitness.

**V01D Landing**
skills/mini/webgpu-evo-particle-spatial-audio-dom; testable via genome mutation→behavior change, particle proximity→tile push + audio pan, seal→IDB restore of genomes+tiles.

**Files**
drafts/F469-webgpu-evo-particle-spatial-audio-dom-mind/SPEC.md
drafts/F469-webgpu-evo-particle-spatial-audio-dom-mind/index.html

**Files**: drafts/F469-webgpu-evo-particle-spatial-audio-dom-mind/SPEC.md, drafts/F469-webgpu-evo-particle-spatial-audio-dom-mind/index.html

## Frontier Engine F-470 (2026-10-30)

**F470-webgpu-local-attention-reason-morph-mind**

Entry added by ledger-guard from drafts/F470-webgpu-local-attention-reason-morph-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Local Attention Reason Morph Mind: a lightweight local AI agent maintains a rolling memory of spatial-interaction tokens (pointer bins, click events, microphone spectral energy, contenteditable tile content features). It computes multi-head self-attention (pure-JS scaled dot-product, WebGPU compute path noted for larger matrices) over the token sequence. Attention weights drive:
- Spatial reconfiguration of absolute-positioned contenteditable "thought" cards (proximity and scale reflect mutual attention; high-attention cards drift toward each other and enlarge).
- Generation of short reasoning sentences from template slots filled by top-attended tokens, injected as new or updated card text.
- A Canvas2D (WebGPU compute/render path for field) visualization of projected attention energy as a flowing particle or gradient field that the cards sit above.
User pointer, drag, and typing close the loop by adding tokens and updating features. Residual of a one-step attention-entropy predictor injects "surprise" turbulence into the field. Optional device orientation biases token spatial features; optional mic modulates global attention temperature. Sealing captures token memory, attention snapshot, card texts/positions, and metrics to IndexedDB for living restore. CSS chrome (hue, blur, scale) morphs with attention entropy and total energy.

**Novelty**
Not a superficial variation of F469 evo-particle-spatial-audio (genome particles + panners + tile push), F468 Hebbian-resonance-cavity or webrtc-expression-agent, F467 causal-echo-lattice, F466 spectral-cloth, F465 Hebbian-mic-swarm, or earlier NCA/RD/predictive lattices. Core novel combination is an explicit local self-attention agent whose internal attention graph physically rearranges and populates spatial DOM thought cards in real time, while a GPU-accelerated field visualizes the attention energy; closed-loop with user spatial input and sealed attention-memory. Previous agents were physics-driven or evolutionary; this is attention-mechanism-driven spatial UI morph + thought generation.

**Architecture**
- Single index.html (no external deps, progressive enhancement)
- Token memory: fixed ring of 32 events, each feature vector [type, nx, ny, intensity, content_hash_norm]
- Self-attention: 2-head scaled dot-product on CPU (matmul small); WebGPU noted for future larger
- Thought cards: 5 absolute contenteditable divs; positions updated via requestAnimationFrame from attention-derived forces (attraction between high-weight pairs)
- Reasoning generator: template sentences ("Attending to {top} near {pos} with energy {e}") injected on attention spikes
- Canvas2D field: particles or radial gradients whose velocities biased by attention-projected energy map
- Main-thread residual: linear predictor of next entropy; residual adds field turbulence
- DeviceOrientation + AnalyserNode optional
- IndexedDB seals
- CSS custom properties from entropy/energy for chrome morph
- Offline after load

**Expected Outcome**
Interactive spatial canvas where the local attention agent continuously rearranges thought cards according to what it is "attending to" in recent user actions and tile content; generates short reasoning notes into the cards; visual field pulses and flows with attention energy. Sealing restores the living attention state and cards. Runnable fully offline; graceful degradation without WebGPU/mic/orientation.

**Failure Modes**
Attention computation lag on very low-end devices (cap tokens, throttle), IndexedDB quota in private mode, AudioContext suspended until gesture, orientation permission denied (bias=0), no WebGPU (Canvas2D only, already primary), browser blocks autoplay.

**Building Blocks**
WebGPU compute matmul for multi-head attention, WebXR hand-tracked tokens, on-device fine-tuning of projection matrices, BroadcastChannel multi-tab shared attention memory, embedding of full tile text via local TF.js or WebNN.

**V01D Landing**
skills/mini/attention-reason-morph; testable via token inject → attention change → card reposition + text update, seal → IDB restore of tokens+cards.

**Files**
drafts/F470-webgpu-local-attention-reason-morph-mind/SPEC.md
drafts/F470-webgpu-local-attention-reason-morph-mind/index.html

**Files**: drafts/F470-webgpu-local-attention-reason-morph-mind/SPEC.md

## Frontier Engine F-471 (2026-10-30)

**F471-webxr-hand-mlp-genome-competition**

Entry added by ledger-guard from drafts/F471-webxr-hand-mlp-genome-competition/SPEC.md, after a full-file write dropped it.


**Concept**
WebXR Hand-MLP Genome Competition Mind: Immersive or inline WebXR session (hand-tracking preferred; mouse/touch proxy fallback) drives a local tiny MLP (4-8-2) per competitive agent. Agents are spatial orbs on a Canvas2D field. Each carries a sealed genome (MLP weights). Hand pinch/grasp or proxy click near an agent “selects” it; when two agents collide while one is grasped, a sealed genome transfer occurs: the lower-fitness agent donates a mutated copy of its weights to the higher-fitness one. Fitness is the negative residual of the MLP’s one-step prediction of the next hand position. DeviceOrientation (optional) adds a weak bias to agent drift. Sealing stores population genomes, positions, and hand residual stats to IndexedDB for living restore. CSS chrome morphs with average residual entropy.

**Novelty**
Leaves the recent WebGPU attention/evo/Hebbian/spectral/causal lattice-particle-residual-DOM cluster (F465–F470). Not a variation of prior WebXR hand pieces (verlet genome portal, ising MLP, PBD constraint, gaze DOM physics) or competitive fields. Core novel combination is hand-grasp contact as the exclusive sealed-genome-transfer gate, with fitness defined by the local MLP’s prediction residual on the same hand trajectory. No attention mechanism, no residual field injection, no NCA, no spectral audio, no softbody DOM.

**Architecture**
- Single index.html (progressive enhancement, offline after load)
- WebXR: optional immersive-ar or inline session with hand-tracking; fallback pointer events
- Agents: 12–24 Canvas2D orbs, each with MLP weights (Float32Array)
- MLP: pure-JS forward (tanh), weights evolve only via sealed transfer + small mutation
- Contact transfer: on grasp+collision, compare residuals, mutate and copy winner←loser
- IndexedDB: seal/restore population + metrics
- Optional DeviceOrientationEvent for gravity bias
- CSS custom properties from residual entropy for chrome morph
- No external deps

**Expected Outcome**
Interactive spatial canvas where hand (or pointer) grasp mediates competition; agents “eat” genomes via contact; local MLPs improve at predicting the hand; sealing restores a living competitive population. Fully offline; graceful without XR or orientation.

**Failure Modes**
No WebXR/hand-tracking (pointer fallback), XR permission denied, IndexedDB private-mode quota, orientation denied (bias=0), low-end device (cap agents).

**Building Blocks**
WebGPU compute for larger agent populations, BroadcastChannel multi-tab shared genomes, WebRTC sealed transfer across peers, on-device fine-tune of MLP via residual.

**V01D Landing**
skills/mini/webxr-hand-mlp-genome-competition; testable via grasp+collision → genome change, residual decrease, seal→IDB restore.

**Files**
drafts/F471-webxr-hand-mlp-genome-competition/SPEC.md
drafts/F471-webxr-hand-mlp-genome-competition/index.html

**Files**: drafts/F471-webxr-hand-mlp-genome-competition/SPEC.md, drafts/F471-webxr-hand-mlp-genome-competition/index.html

## Frontier Engine F-472 (2026-10-30)

**F472-webrtc-idb-shared-occupancy-navigators**

Entry added by ledger-guard from drafts/F472-webrtc-idb-shared-occupancy-navigators/SPEC.md, after a full-file write dropped it.


**Concept**
Shared Occupancy Navigators Mind: A persistent spatial occupancy grid (Canvas2D, 32x32 cells) that agents explore and mark. Each of 4 local navigators is driven by a tiny pure-JS MLP (3-4-2) taking normalized position + DeviceOrientation tilt bias + optional user pointer attraction as input, outputting velocity. Navigators mark cells they traverse (occupancy +=1, capped). The entire grid + navigator states seal to IndexedDB for living restore. Multi-tab "peers" share delta marks via BroadcastChannel (WebRTC datachannel architecture prepared; no signaling server). User pointer clicks attract nearest navigator or inject a mark. CSS chrome morphs with total occupancy entropy. Fully offline after load; progressive enhancement.

**Novelty**
Leaves the recent dominant cluster of WebGPU Hebbian/attention/Bayesian/causal/particle fields, competitive MLP genome-transfer on contact/collision, and WebXR hand/gaze spatial agents (F464–F471). Not a variation of prior pointer-history, orientation-RNN, softbody DOM, NCA, spectral, or residual predictors. Core novel combination is a sealed persistent shared occupancy field (IndexedDB + BroadcastChannel multi-tab deltas) navigated by independent local tiny MLPs under continuous orientation + pointer causal input. No genome transfer, no attention mechanism, no particle kernels, no WebGPU compute, no WebXR. Pure shared-memory navigation architecture.

**Architecture**
- Single index.html (no external deps, progressive enhancement, offline-capable)
- Occupancy grid: Float32Array 32x32, rendered as heat on Canvas2D
- Navigators: 4 agents, each MLP weights (Float32Array), position/velocity
- MLP: pure-JS forward (tanh), fixed weights or lightly adapted on high occupancy (optional residual)
- Input: [nx, ny, tiltX, tiltY, pointerAttract]
- Output: [vx, vy]
- Marking: on cell cross, occupancy[cell] = min(1, occ + 0.15)
- IndexedDB: seal/restore grid + navigators + metrics
- BroadcastChannel: postMessage of cell deltas for multi-tab shared field
- Optional DeviceOrientationEvent for tilt bias (permission)
- CSS custom properties from occupancy entropy for chrome morph
- Pointer: click to set attractor or force mark

**Expected Outcome**
Interactive spatial canvas where local navigators autonomously explore and mark a shared occupancy field. Device tilt biases their drift. Pointer attracts or marks. Open multiple tabs to see live shared marking via BroadcastChannel. Seal restores the living field and agents. Fully offline; graceful without orientation or multi-tab.

**Failure Modes**
No DeviceOrientation (bias=0, still pointer-interactive), IndexedDB private-mode quota (no persist), BroadcastChannel unsupported (single-tab only), low-end device (reduce grid or navigators).

**Building Blocks**
True WebRTC datachannel with manual or STUN signaling for cross-device shared field, WebGPU compute for larger grids + parallel navigators, local fine-tune of MLP on occupancy residual, sealed genome of navigator weights across peers.

**V01D Landing**
skills/mini/shared-occupancy-navigators; testable via tilt/pointer → navigator move + mark, multi-tab delta sync, seal→IDB restore of grid+agents.

**Files**
drafts/F472-webrtc-idb-shared-occupancy-navigators/SPEC.md
drafts/F472-webrtc-idb-shared-occupancy-navigators/index.html

**Files**: drafts/F472-webrtc-idb-shared-occupancy-navigators/SPEC.md, drafts/F472-webrtc-idb-shared-occupancy-navigators/index.html

## Frontier Engine F-473 (2026-10-30)

**F473-webgpu-acoustic-nca-spatial-weaver-mind**

Entry added by ledger-guard from drafts/F473-webgpu-acoustic-nca-spatial-weaver-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Acoustic NCA Spatial Weaver Mind: a WebGPU compute (Canvas2D progressive fallback) multi-channel Neural Cellular Automata (NCA) lattice evolves under continuous modulation from a local pure-JS decision-tree agent. The agent ingests live microphone spectral features (centroid, flux via AnalyserNode), pointer velocity, and NCA summary statistics (mean channel energy, spatial entropy). It outputs rule-parameter deltas and seed injection points. High-density emergent regions automatically spawn draggable spatial DOM "weaver" cards; dragging a card injects a localized seed back into the NCA lattice. CSS chrome (hue, scale, blur) morphs from NCA entropy. The living state (lattice, agent thresholds, card positions) seals to IndexedDB for restore. Fully offline after load.

**Novelty**
Leaves the dominant recent cluster of pure WebGPU particle/Hebbian/attention/Bayesian/causal/evo-genome fields, WebXR hand agents, WebRTC shared occupancy, and attention-driven card rearrangement (F464–F472). Core novel combination is a decision-tree local agent that causally modulates an NCA kernel from acoustic + spatial input, with bidirectional weaving: NCA density spawns DOM cards, card drag injects seeds. Not residual predictors, not multi-head attention, not genome transfer, not pure occupancy marking.

**Architecture**
- Single index.html (no external deps, progressive enhancement, offline-capable)
- NCA: 48x48 multi-channel (RGBA) Float32 lattice; Canvas2D render + update (WebGPU compute path prepared via device.requestAdapter note)
- Decision tree: pure-JS depth-3 tree on features [centroid_norm, flux, pointer_speed, nca_mean, nca_entropy]; leaves select rule-mod (growth/decay bias) and seed coords
- Weaver cards: up to 6 absolute-positioned contenteditable divs spawned at density hotspots; pointer drag updates position and injects seed on release
- Mic: optional getUserMedia + AnalyserNode; spectral features every frame
- IndexedDB: seal/restore lattice snapshot + card states + agent metrics
- CSS custom properties driven by entropy for chrome morph
- Pointer/click also direct seeds

**Expected Outcome**
Interactive spatial canvas where the NCA lattice grows and morphs in response to sound and pointer, while the decision agent weaves new thought cards from hotspots that the user can drag to re-seed the field. Seal restores the living lattice and cards. Runnable fully offline; graceful without mic/WebGPU.

**Failure Modes**
No getUserMedia permission (features=0, still pointer-interactive), IndexedDB private-mode quota (no persist), low-end device (reduce grid to 32x32), no WebGPU (Canvas2D already primary), AudioContext suspended until gesture.

**Building Blocks**
Full WebGPU compute NCA kernel with decision-tree outputs as uniform, OPFS seal for larger lattices, local WebNN for deeper agent, BroadcastChannel multi-tab shared lattice, WebXR spatial card placement.

**V01D Landing**
skills/mini/acoustic-nca-weaver; testable via mic/pointer → NCA change → card spawn, drag → seed inject, seal → IDB restore of lattice+cards.

**Files**
drafts/F473-webgpu-acoustic-nca-spatial-weaver-mind/SPEC.md
drafts/F473-webgpu-acoustic-nca-spatial-weaver-mind/index.html

**Files**: drafts/F473-webgpu-acoustic-nca-spatial-weaver-mind/SPEC.md, drafts/F473-webgpu-acoustic-nca-spatial-weaver-mind/index.html

## Frontier Engine F-474 (2026-10-31)

**F474-webgpu-sdf-recurrent-reasoner-morph-mind**

Entry added by ledger-guard from drafts/F474-webgpu-sdf-recurrent-reasoner-morph-mind/SPEC.md, after a full-file write dropped it.


**Concept**
SDF Recurrent Reasoner Morph Mind: a continuous soft-blended SDF spatial world (Canvas2D metaball approximation with WebGPU raymarch path prepared) of abstract geometric primitives whose positions, radii, and blend factors are driven in real time by a pure-JS Elman recurrent neural network acting as a local AI reasoner. The RNN maintains a hidden state updated from sequences of pointer trajectories, click-select events on primitives, and optional contenteditable keyword injections. It outputs target SDF parameters; the residual between its one-step prediction of the next user action and the actual input injects "surprise" by momentarily increasing blend chaos and color variance. Dragging a primitive provides a training signal that performs a simple residual-based Hebbian update on the recurrent weights. Projected DOM thought-labels appear near high-activation primitives, reflecting the agent's current hidden-state summary tokens. CSS chrome (hue, scale, blur) morphs with hidden-state entropy. The living state (RNN weights, SDF params, labels, metrics) seals to IndexedDB for restore. Fully offline after load.

**Novelty**
Leaves the dominant recent cluster of WebGPU particle/Hebbian/attention/Bayesian/causal/evo-genome/NCA lattice fields, spectral cloth, WebXR hand-genome transfer, and acoustic decision-tree weavers (F464–F473). Core novel combination is a continuous SDF/metaball spatial geometry (not discrete lattice, particles, or cards) whose parameters are generated by a recurrent local AI reasoner, with residual-surprise injection and bidirectional drag-driven weight updates that close the loop on the agent's internal dynamics. Not residual predictors on pointer velocity alone, not multi-head attention rearranging cards, not genome transfer, not NCA modulation.

**Architecture**
- Single index.html (no external deps, progressive enhancement, offline-capable)
- SDF world: Canvas2D soft metaballs (6–8 blended circles) approximating continuous SDF; positions/radii/blend driven by RNN outputs; WebGPU compute/render path noted for full raymarch
- Recurrent reasoner: pure-JS Elman RNN (hidden size 16, input size 8: [nx, ny, speed, select_id, keyword_hash_norm, ...], output size 12 for shape params); tanh activations; online residual Hebbian update on drag
- Interaction: pointer move/click/drag updates inputs and selects shapes; contenteditable overlay for keyword seed
- Thought labels: absolute-positioned DOM divs projected from high-activation shapes, text from discretized hidden-state tokens
- IndexedDB: seal/restore RNN weights + SDF state + labels + residual metrics
- CSS custom properties driven by hidden entropy for chrome morph
- Optional DeviceOrientation for weak bias on input features

**Expected Outcome**
Interactive spatial canvas where the recurrent reasoner continuously morphs a soft SDF world of blended shapes in response to user spatial and textual input; surprise residuals create transient chaos; dragging shapes trains the agent; thought labels appear and shift. Seal restores the living reasoner and world. Runnable fully offline; graceful without orientation or WebGPU.

**Failure Modes**
No IndexedDB (private mode, no persist), low-end device (reduce shape count or hidden size), AudioContext or mic not used (optional future), orientation denied (bias=0), no WebGPU (Canvas2D primary).

**Building Blocks**
Full WebGPU fragment raymarcher with RNN outputs as uniforms, OPFS for larger weight seals, local WebNN for deeper recurrent, BroadcastChannel multi-tab shared hidden state, WebXR hand grab of SDF shapes.

**V01D Landing**
skills/mini/sdf-recurrent-reasoner; testable via pointer/drag → SDF morph + weight change, residual → chaos spike, seal → IDB restore of weights+params.

**Files**
drafts/F474-webgpu-sdf-recurrent-reasoner-morph-mind/SPEC.md
drafts/F474-webgpu-sdf-recurrent-reasoner-morph-mind/index.html

**Files**: drafts/F474-webgpu-sdf-recurrent-reasoner-morph-mind/SPEC.md, drafts/F474-webgpu-sdf-recurrent-reasoner-morph-mind/index.html

## Frontier Engine F-475 (2026-10-31)

**F475-orient-mlp-genome-auction-lattice**

Entry added by ledger-guard from drafts/F475-orient-mlp-genome-auction-lattice/SPEC.md, after a full-file write dropped it.


**Concept**
Orientation-Driven Multi-Agent Genome Auction Lattice: a spatial field of CSS grid cells whose visual energy (color, opacity, scale) is controlled by competing local tiny MLPs. DeviceOrientation (or mouse proxy) acts as a global causal "wind" vector that biases each agent's fitness score during continuous micro-auctions. Agents maintain sealed weight genomes (SHA-256 hashed fragments). On auction win, the winner transfers a sealed mutated fragment to the loser via local message ports (offline-capable). The lattice state, agent genomes, and auction history seal to IndexedDB. Hybrid embodiment: DOM elements are the physical UI controlled by the models; no pure particle or NCA lattice.

**Novelty**
Leaves the dominant recent cluster of WebGPU SDF/NCA/acoustic/Hebbian/attention/particle-spatial morph-minds, WebXR hand-genome, and WebRTC-IDB occupancy (F464–F474). Core novel combination is DeviceOrientation as causal bias into multi-agent competition among local MLPs that directly control physical CSS UI elements, with sealed genome transfer occurring only through auction wins. Not residual predictors, not pure WebGPU kernels on continuous fields, not WebXR hand tracking, not shared WebRTC fields.

**Interactive**
- Tilt device (or drag mouse) to inject orientation wind that biases auctions.
- Click a cell to "feed" energy to the owning agent, boosting its next auction.
- Press A to force an auction round.
- Press S to seal current state to IndexedDB.
- Press R to restore.
- Offline after initial load; all computation local.

**Files**
- index.html (self-contained, runnable)
- SPEC.md

**Branch from**
WebGPU morphing spatial minds cluster (F467–F474).

**Files**: drafts/F475-orient-mlp-genome-auction-lattice/SPEC.md, drafts/F475-orient-mlp-genome-auction-lattice/index.html

## Frontier Engine F-476 (2026-10-31)

**F476-webgpu-mic-spectral-policy-morph**

Entry added by ledger-guard from drafts/F476-webgpu-mic-spectral-policy-morph/SPEC.md, after a full-file write dropped it.


**Concept**  
Microphone Spectral Residual Policy Morph Mind: Local population of tiny policy MLPs (3-6-2, tanh) evolved in a Web Worker. Observations are real-time spectral features (centroid, flux, RMS) extracted from AnalyserNode on getUserMedia. Each policy outputs particle emission bias and velocity scale. Fitness is the negative one-step residual of the next spectral centroid predicted by a companion linear residual head. Best policies drive a Canvas2D / progressive WebGPU particle field whose density and hue morph spatially. Sealing stores population weights + residual stats to IndexedDB. CSS chrome morphs with spectral entropy. Fully offline after load; mic is the sole causal input.

**Novelty**  
Leaves the recent WebGPU SDF/NCA/attention/Hebbian/particle residual, WebXR hand-genome, DeviceOrientation auction, and pure lattice clusters (F464–F475). Core novel combination is live microphone spectral features as the exclusive observation and fitness signal for an evolutionary local policy swarm that morphs a spatial particle field. No hand tracking, no orientation wind, no contact genome transfer, no residual lattice injection, no NCA rule evolution, no DOM card spatial participants as primary agents.

**Architecture**  
- Single index.html (progressive enhancement)  
- Audio: getUserMedia + AnalyserNode → centroid/flux/RMS (main thread, ~30 Hz)  
- Worker: population of 12 MLPs; simple (μ,λ) evolution every 2 s; residual head  
- Particles: 400 Canvas2D points (WebGPU compute fallback path stubbed); params from best policy  
- IndexedDB seal/restore  
- CSS vars from entropy for background/chrome morph  
- No external deps; graceful without mic (synthetic noise fallback)

**Expected Outcome**  
Speak, hum, or clap: particle field densifies and shifts hue in response to spectral residual. Policies improve at predicting your sound. Seal restores a living audio-responsive swarm. Works offline; mic optional.

**Mechanics**  
- Spectral centroid residual → fitness  
- Policy output → particle speed/emission  
- Drag or click injects temporary energy bias  
- S seal, R restore  

**Files**  
drafts/F476-webgpu-mic-spectral-policy-morph/SPEC.md  
drafts/F476-webgpu-mic-spectral-policy-morph/index.html  

**V01D Landing**  
skills/mini/mic-spectral-policy; testable via mic → particle morph + residual drop, seal → IDB restore of weights.

**Files**: drafts/F476-webgpu-mic-spectral-policy-morph/SPEC.md, drafts/F476-webgpu-mic-spectral-policy-morph/index.html

## Frontier Engine F-477 (2026-10-31)

**F477-webxr-gaze-hebbian-portal-competition**

Entry added by ledger-guard from drafts/F477-webxr-gaze-hebbian-portal-competition/SPEC.md, after a full-file write dropped it.


**Concept**
WebXR Gaze Hebbian Portal Competition Mind: Optional WebXR session (immersive-ar preferred; inline or pointer fallback) provides a gaze ray or pointer as the sole causal cue. A population of spatial agents (Canvas2D orbs) each carries a local tiny Hebbian weight matrix (8×8 associations). Gaze proximity co-activates an agent’s state vector; Hebbian update strengthens associations between gaze features and agent identity. Agents compete for limited “portal energy.” When two agents collide while one is under sustained gaze focus, a sealed (SHA-256 hashed fragment) transfer of the stronger Hebbian weights occurs to the weaker agent. Recalled associations bias agent velocity toward the gaze hit point via simple spring forces. State seals to IndexedDB. Fully offline after load.

**Novelty**
Leaves the dominant recent cluster of WebGPU SDF/NCA/acoustic/spectral-policy/attention/particle morph-minds, DeviceOrientation MLP auctions, WebXR hand-MLP residual genome competition, and WebRTC-IDB occupancy (F464–F476). Core novel combination is WebXR gaze (or pointer) as exclusive causal cue into a local Hebbian associative model whose sealed weight fragments transfer only on gaze-gated collision, with agents under spring-constraint physics toward the gaze portal. Not residual predictors, not pure MLP policy evolution, not spectral audio, not orientation wind, not hand-grasp genome, not WebGPU continuous field kernels.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- WebXR: try immersive-ar or inline with gaze/hand pointer; fallback mouse/touch pointer
- Agents: 16 Canvas2D orbs with position, velocity, energy, Hebbian matrix (Float32Array)
- Hebbian: outer-product update on gaze-coactivation; decay
- Transfer: on gaze-sustained + collision, compare activation, hash and mutate-copy winner weights
- Physics: Verlet-like + spring to gaze hit if focused
- IndexedDB: seal/restore population, matrices, metrics
- CSS custom properties from average energy / association strength for chrome morph
- No external dependencies

**Expected Outcome**
Move pointer or enter XR and look: agents swarm toward your gaze, form associations, compete and transfer sealed memories on contact. Seal restores a living competitive associative population. Works offline; graceful without XR.

**Failure Modes**
No WebXR (pointer fallback), XR permission denied, IndexedDB private-mode, low-end device (reduce agents).

**Building Blocks**
WebGPU for larger Hebbian populations, WebRTC sealed transfer across peers, DeviceOrientation as additional co-activation cue, on-device fine-tune of association strength.

**V01D Landing**
skills/mini/webxr-gaze-hebbian-portal; testable via gaze+collision → weight change, association strength increase, seal → IDB restore.

**Files**
drafts/F477-webxr-gaze-hebbian-portal-competition/SPEC.md
drafts/F477-webxr-gaze-hebbian-portal-competition/index.html

**Files**: drafts/F477-webxr-gaze-hebbian-portal-competition/SPEC.md, drafts/F477-webxr-gaze-hebbian-portal-competition/index.html

## Frontier Engine F-478 (2026-10-31)

**F478-speech-vector-spatial-recall-mind**

Entry added by ledger-guard from drafts/F478-speech-vector-spatial-recall-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Local Speech Vector Spatial Recall Mind: Continuous local SpeechRecognition (with keyboard fallback) emits short text snippets that are immediately embedded into low-dimensional vectors via a pure client-side character bigram hash. Each memory becomes a spatial orb in a Canvas2D force-directed field (progressive WebGPU point-cloud path noted). Selecting or speaking a query activates cosine-similarity forces that pull related orbs toward the active locus, visualizing associative recall. A background Worker maintains the vector store and optional simple mutation of embedding basis. State seals to IndexedDB. CSS chrome morphs with memory entropy and recall strength. Fully offline after load; speech is the sole symbolic causal input.

**Novelty**
Leaves the dominant recent clusters of WebGPU SDF/NCA/acoustic/spectral-policy/attention/particle morph-minds, DeviceOrientation MLP auctions, WebXR hand/gaze Hebbian/genome competition, L-system DOM cards, and pure lattice fields (F453–F477). Core novel combination is live local speech as the exclusive source of vector embeddings that drive physics-based spatial associative recall of memory orbs. Not residual predictors, not pure MLP policy evolution, not spectral audio features, not Hebbian weight transfer, not L-system turtle graphics, not orientation wind, not hand-grasp genome, not WebGPU continuous field kernels as primary substrate.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Speech: SpeechRecognition continuous (webkit fallback); keyboard textarea injects tokens
- Embedding: char bigram frequency hash → 8-D float vector (normalized)
- Orbs: up to 32 Canvas2D particles with position, velocity, vector, text
- Recall: on active query, cosine > threshold applies attraction force
- Worker: optional vector store sync and basis mutation (simple)
- IndexedDB: seal/restore memories, vectors, metrics
- CSS custom properties from entropy / average similarity for chrome morph
- No external dependencies

**Expected Outcome**
Speak or type short phrases: orbs appear and, on subsequent related speech or click, related memories accelerate toward the active point, forming visible clusters. Seal restores the living recall field. Works offline; graceful without speech (keyboard).

**Failure Modes**
No SpeechRecognition (keyboard fallback), mic permission denied, IndexedDB private-mode, too many orbs (cap at 32).

**Building Blocks**
WebGPU for larger vector populations and compute-based similarity, WebXR gaze as query ray, OPFS for raw speech blobs, on-device fine-tune of embedding basis.

**V01D Landing**
skills/mini/speech-vector-spatial-recall; testable via speech/type → orb spawn + similarity attraction, seal → IDB restore of vectors.

**Files**
drafts/F478-speech-vector-spatial-recall-mind/SPEC.md
drafts/F478-speech-vector-spatial-recall-mind/index.html

**Files**: drafts/F478-speech-vector-spatial-recall-mind/SPEC.md, drafts/F478-speech-vector-spatial-recall-mind/index.html

## Frontier Engine F-479 (2026-10-31)

**F479-motion-residual-crystal-lattice-mind**

Entry added by ledger-guard from drafts/F479-motion-residual-crystal-lattice-mind/SPEC.md, after a full-file write dropped it.


**Files**: drafts/F479-motion-residual-crystal-lattice-mind/SPEC.md, drafts/F479-motion-residual-crystal-lattice-mind/index.html

## Frontier Engine F-480 (2026-10-31)

**F480-orient-mlp-voronoi-territory-mind**

Entry added by ledger-guard from drafts/F480-orient-mlp-voronoi-territory-mind/SPEC.md, after a full-file write dropped it.


**Concept**
DeviceOrientation (beta/gamma/alpha) is causal input to a local tiny MLP (3→4→2) that biases agent velocities. Agents compete for territorial ownership via an inverse-square influence field rendered as a coarse Voronoi-like grid on canvas. Fitness = owned area fraction. When the fitness gap between leader and weakest exceeds a threshold, a sealed genome transfer occurs: the leader's MLP weights are mutated and assigned to the weak agent. Genomes and positions persist offline via IndexedDB seal/restore. Desktop fallback uses pointer position as tilt proxy. Nucleate by click, drag agents, add/seal/restore controls.

**Branch**
Deliberately leaves the recent cluster of residual crystal lattices, speech-vector recall, WebXR gaze Hebbian portals, mic-spectral policy morphs, acoustic NCA weavers, SDF recurrent reasoners, and pure orientation-MLP genome auctions. Novel combination: orientation-driven local MLP + territorial Voronoi influence competition + sealed genome transfer under area fitness, persisted in IndexedDB. No attention lattices, pure NCA, spectral residuals, pointer-history fields, softbody DOM, or k-means.

**Novel building blocks**
- Local tiny MLP as causal controller of territorial claim bias from DeviceOrientation.
- Inverse-square influence field producing dynamic ownership grid (Voronoi-like without full geometry).
- Fitness-gated sealed genome transfer (mutate-and-replace) between competing agents.
- Hybrid pointer/orientation input with offline IndexedDB genome persistence.

**Failure modes**
- DeviceOrientation permission denied or unavailable (falls back to pointer proxy and synthetic jitter).
- Too many agents (>12) degrades ownership loop performance on low-end devices.
- Genome transfer can collapse diversity if leader dominates too strongly (mutation rate mitigates).
- IndexedDB quota or private mode may silently fail seal.

**Interactivity**
Tilt (after permission) or move pointer to bias all agents via their individual MLPs. Click empty space to nucleate a new agent with fresh MLP. Drag existing agents. Leader steals/mutates genome into weakest when area gap is large. Seal stores all genomes; Restore reloads them. Offline-capable after first load.

**Files**: drafts/F480-orient-mlp-voronoi-territory-mind/SPEC.md, drafts/F480-orient-mlp-voronoi-territory-mind/index.html

## Frontier Engine F-481 (2026-10-31)

**F0481-speech-nca-portal-mind**

Entry added by ledger-guard from drafts/F0481-speech-nca-portal-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Web Speech Recognition (or keyboard fallback) produces a transcript that is locally hashed into a seed vector. The seed is injected as a "portal nucleus" into a WebGPU-accelerated Neural Cellular Automaton (NCA) running on a 128×128 grid. Multiple portals grow simultaneously; each portal has its own local rule parameters derived from the seed. Users click a portal region to "capture" a 16×16 pattern fragment (hashed and sealed). Captured fragments can be transferred to another portal by click-drag, mutating its rule set. Fitness is measured by pattern complexity (local entropy). State (grid, portals, captures, rules) seals to IndexedDB for offline restore. CSS chrome morphs with global entropy and active portal count. Fully offline after load; speech is the primary causal seed input.

**Novelty**
Leaves the recent clusters of orientation-MLP Voronoi territories (F480), motion-residual crystal lattices (F479), speech-vector spatial recall (F478), WebXR gaze Hebbian portals (F477), and mic-spectral policy morphs (F476). Core novel combination is live speech transcript hashed into multi-portal NCA seeds, with click-capture of sealed pattern fragments that transfer and mutate competing portal rules. Not pure spectral residual fitness, not orientation wind, not Hebbian association transfer on collision, not residual crystal growth, not Voronoi ownership.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Speech: webkitSpeechRecognition or SpeechRecognition; keyboard input fallback
- Seed: simple hash of transcript → 8-float vector → NCA injection
- NCA: WebGPU compute shader (or Canvas2D fallback) with per-portal rule bias; 128² grid
- Capture: mouse down/up extracts fragment, SHA-like hash, stores in array
- Transfer: drag fragment onto portal mutates its parameters
- IndexedDB: seal/restore full state
- CSS custom properties from entropy / portal count for chrome morph
- No external dependencies

**Expected Outcome**
Speak a phrase or type it: a new portal nucleus appears and grows unique patterns. Click to capture fragments; drag them between portals to transfer rules. Seal restores the living multi-portal NCA field. Works offline; graceful without speech (type seeds).

**Failure Modes**
- SpeechRecognition unavailable or permission denied (keyboard fallback).
- WebGPU unavailable (Canvas2D NCA fallback).
- IndexedDB private mode or quota.
- High portal count (>8) throttles compute.

**Interactivity**
Speak or type a seed phrase to nucleate a portal. Click-drag on canvas to capture a pattern fragment. Drag the fragment onto another portal to transfer/mutate. S to seal, R to restore. Click empty space to focus a portal.

**Building Blocks**
Larger WebGPU NCA populations, WebXR gaze as capture cue, OPFS for full grid history, multi-user fragment exchange.

**V01D Landing**
skills/mini/speech-nca-portal; testable via speech/type → portal growth, capture+transfer → rule mutation, seal → IDB restore of portals + grid.

**Files**
drafts/F0481-speech-nca-portal-mind/SPEC.md
drafts/F0481-speech-nca-portal-mind/index.html

**Files**: drafts/F0481-speech-nca-portal-mind/SPEC.md, drafts/F0481-speech-nca-portal-mind/index.html

## Frontier Engine F-482 (2026-10-31)

**F0482-webgpu-softbody-policy-mind**

Entry added by ledger-guard from drafts/F0482-webgpu-softbody-policy-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A mass-spring softbody mesh is simulated in a WebGPU compute pass (Canvas2D fallback). A tiny local policy MLP (4→8→4) outputs muscle forces applied to selected control points. The policy evolves under a fitness that rewards the softbody’s center-of-mass tracking or orbiting the user’s pointer. Living DOM facet cards are bound to mesh vertices and CSS-transformed with the deformation, so the UI itself becomes the softbody’s skin. Global chrome morphs with total spring energy and policy fitness. Full state (mesh, genomes, facets) seals to IndexedDB for offline restore. Pointer is the sole primary causal target.

**Novelty**
Leaves the recent clusters of speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi territories (F480), motion-residual crystal lattices (F479), speech-vector spatial recall, WebXR gaze Hebbian portals, mic-spectral policy morphs, acoustic NCA weavers, and SDF recurrent reasoners. Core novel combination is a deformable mass-spring softbody as the embodied substrate of a local evolving policy MLP, with real DOM elements physically riding mesh vertices so the page’s layout yields to the agent’s learned control. Not particles, not NCA, not Voronoi ownership, not crystal CA, not residual predictors on motion, not pure attention fields.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Softbody: 8×6 grid of points, nearest-neighbor + diagonal springs; WebGPU compute shader preferred, Canvas2D Verlet fallback
- Policy: population of 6 tiny MLPs; fitness = inverse distance of COM to pointer (or orbit radius error); mutation every ~2 s
- Facets: 5 DOM cards bound to fixed vertex indices; position/rotation/scale from vertex delta
- IndexedDB: seal/restore mesh positions, rest lengths, policy weights, facet bindings
- CSS custom properties from spring energy / fitness for chrome morph
- No external dependencies

**Expected Outcome**
Move the pointer: the softbody’s policy learns to drive the mesh toward (or circle) it; facet cards stretch and migrate with the skin. Evolution improves tracking. Seal restores the living softbody and its controller. Works offline; graceful Canvas2D path without WebGPU.

**Failure Modes**
- WebGPU unavailable or compute limits (Canvas2D Verlet fallback).
- Too many springs (>200) or high stiffness causes instability or jank.
- IndexedDB private mode or quota.
- Policy collapse if mutation rate is too low.

**Interactivity**
Move pointer (or touch) as the target. Softbody and its DOM skin respond. Click empty canvas to reset rest pose. S to seal, R to restore. Buttons to add/remove population members or toggle orbit vs chase mode.

**Building Blocks**
Larger WebGPU softbody with collision against page elements, WebXR hand as force input, multi-agent softbody competition, OPFS for full trajectory history.

**V01D Landing**
skills/mini/softbody-policy-mind; testable via pointer → tracking fitness rise + facet deformation, seal → IDB restore of mesh + genomes.

**Files**
drafts/F0482-webgpu-softbody-policy-mind/SPEC.md
drafts/F0482-webgpu-softbody-policy-mind/index.html

**Files**: drafts/F0482-webgpu-softbody-policy-mind/SPEC.md, drafts/F0482-webgpu-softbody-policy-mind/index.html

## Frontier Engine F-483 (2026-10-31)

**F0483-webgpu-wavelet-mlp-dom-morph**

Entry added by ledger-guard from drafts/F0483-webgpu-wavelet-mlp-dom-morph/SPEC.md, after a full-file write dropped it.


**Concept**
A short circular buffer of pointer velocity samples is fed to a WebGPU compute shader that performs a discrete Haar wavelet transform (previously unused kernel). The multi-scale residual coefficients become the sole causal input to a population of tiny local MLPs (4→6→3). Each MLP emits CSS custom-property deltas that physically deform, scale, hue-shift, and reflow a living CSS grid of DOM facet cards. Agents compete by proximity fitness (card coverage + wavelet energy match); on contact the stronger agent seals and transfers a mutated genome. Full state (wavelet buffer, genomes, card bindings) seals to IndexedDB for offline restore. Canvas2D Haar fallback when WebGPU is unavailable. Pointer is the primary causal input; works fully offline after load.

**Novelty**
Leaves the recent cluster of softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi territories (F480), motion-residual crystal lattices (F479), speech-vector spatial recall, WebXR gaze Hebbian portals, mic-spectral policy morphs, acoustic NCA weavers, and SDF recurrent reasoners. Core novel combination is a WebGPU discrete wavelet kernel on pointer-velocity history driving evolving local MLPs that control living DOM grid deformation, with proximity-gated sealed genome transfer under multi-scale residual fitness. Not softbody mass-spring, not pure NCA, not Voronoi ownership, not spectral residuals, not orientation RNN, not attention lattices, not pointer-history fields as direct force.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Wavelet: 64-sample circular velocity buffer → WebGPU compute Haar DWT (or Canvas2D fallback)
- Policy: population of 5 tiny MLPs; inputs = 4 wavelet coeffs; outputs = 3 CSS deltas (scale, hue, blur)
- Facets: 6 DOM cards in CSS grid; transforms/CSS vars bound to nearest agent
- Fitness: inverse distance of card center to pointer + wavelet energy correlation
- Transfer: proximity contact seals leader genome, mutates, assigns to weak agent
- IndexedDB: seal/restore buffer, weights, bindings
- CSS custom properties from global wavelet energy for chrome morph
- No external dependencies

**Expected Outcome**
Move the pointer: wavelet residuals update, MLPs deform and reflow the living card grid. Evolution improves coverage of the pointer region. Seal restores the living wavelet field and controllers. Works offline; graceful Canvas2D path without WebGPU.

**Failure Modes**
- WebGPU unavailable or compute limits (Canvas2D Haar fallback).
- High agent count (>8) or long buffer causes jank.
- IndexedDB private mode or quota.
- Policy collapse if mutation rate is too low.

**Interactivity**
Move pointer (or touch) as the causal signal. Cards morph and reflow under agent control. Click empty space to nucleate a new agent. S to seal, R to restore. Buttons to toggle population size or reset buffer.

**Building Blocks**
Larger WebGPU wavelet banks, WebXR hand as velocity source, OPFS for full coefficient history, multi-user wavelet fragment exchange.

**V01D Landing**
skills/mini/wavelet-mlp-dom-morph; testable via pointer → card deformation rise, contact → genome transfer, seal → IDB restore of buffer + genomes.

**Files**
drafts/F0483-webgpu-wavelet-mlp-dom-morph/SPEC.md
drafts/F0483-webgpu-wavelet-mlp-dom-morph/index.html

**Files**: drafts/F0483-webgpu-wavelet-mlp-dom-morph/SPEC.md, drafts/F0483-webgpu-wavelet-mlp-dom-morph/index.html

## Frontier Engine F-484 (2026-10-31)

**F0484-webgpu-photonic-waveguide-mlp-mind**

Entry added by ledger-guard from drafts/F0484-webgpu-photonic-waveguide-mlp-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A 2D photonic-like waveguide is simulated on a discrete grid via the scalar wave equation (variable local speed of light set by a dielectric map). A population of tiny local MLPs (4→8→4) each controls a quadrant of the dielectric (speed) field. The pointer injects causal wave sources. Four fixed DOM receiver cards accumulate light intensity; fitness is total received energy plus coverage of the pointer. Stronger agents seal and transfer a mutated genome to weaker ones on proximity. Full state (dielectric, weights, field snapshot) seals to IndexedDB. WebGPU compute for the wave step with Canvas2D finite-difference fallback. Fully offline after load.

**Novelty**
Leaves the recent cluster of wavelet-MLP DOM morphs (F0483), softbody policy meshes, speech-seeded multi-portal NCA, orientation-MLP Voronoi territories, motion-residual crystal lattices, acoustic NCA weavers, SDF recurrent reasoners, spectral cloth, Bayesian wave collapse, and Hopfield trajectory memory. Core novel combination is a WebGPU (or Canvas) photonic waveguide (variable-c wave equation) whose dielectric map is controlled by competing local MLPs, with DOM cards acting as physical light receivers that morph under received intensity and gate sealed genome transfer. Not pure NCA, not softbody, not spectral residual, not orientation field, not pointer-history force, not attention lattice.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Wave: 64×64 grid; finite-difference time-domain step (WebGPU compute or JS fallback)
- Dielectric: speed field c(x,y) set by 4 MLP agents, one per quadrant
- Policy: each MLP input = local intensity stats + pointer relative; output = 4 dielectric deltas
- Receivers: 4 DOM cards at grid corners/edges; CSS custom props (glow, scale, hue) driven by cell intensity
- Fitness: integrated intensity at receiver cells + inverse distance to pointer
- Transfer: proximity of agent “centers” seals leader genome, mutates, assigns to weak
- IndexedDB: seal/restore dielectric map, weights, field snapshot
- No external dependencies

**Expected Outcome**
Move/click the pointer: waves propagate, MLPs reshape the dielectric to guide light toward receivers. Cards glow and scale with received light. Evolution improves guiding. Seal restores the living waveguide and controllers. Works offline; graceful Canvas2D path without WebGPU.

**Failure Modes**
- WebGPU unavailable or compute limits (Canvas2D fallback).
- Grid too large causes jank (keep ≤64²).
- IndexedDB private mode or quota.
- Policy collapse if mutation rate is too low or fitness noisy.

**Interactivity**
Move pointer (or touch) to inject sources. Cards morph under light. Click empty space to nucleate a temporary source. S to seal, R to restore. Buttons to reset field or toggle agent count.

**Building Blocks**
Larger FDTD grids, WebXR hand as source injector, OPFS for full field history, multi-user waveguide fragment exchange, true 3D photonic crystal.

**V01D Landing**
skills/mini/photonic-waveguide-mlp-mind; testable via pointer → card glow rise, contact → genome transfer, seal → IDB restore of dielectric + genomes.

**Files**
drafts/F0484-webgpu-photonic-waveguide-mlp-mind/SPEC.md
drafts/F0484-webgpu-photonic-waveguide-mlp-mind/index.html

**Files**: drafts/F0484-webgpu-photonic-waveguide-mlp-mind/SPEC.md, drafts/F0484-webgpu-photonic-waveguide-mlp-mind/index.html

## Frontier Engine F-485 (2026-10-31)

**F485-webgpu-lbm-audio-feedback-mind**

Entry added by ledger-guard from drafts/F485-webgpu-lbm-audio-feedback-mind/SPEC.md, after a full-file write dropped it.


**Files**: drafts/F485-webgpu-lbm-audio-feedback-mind/SPEC.md, drafts/F485-webgpu-lbm-audio-feedback-mind/index.html

## Frontier Engine F-486 (2026-10-31)

**F486-orient-rnn-dom-physical-auction-mind**

Entry added by ledger-guard from drafts/F486-orient-rnn-dom-physical-auction-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A population of hybrid-embodied agents exist as physical DOM elements (absolutely positioned cards). Each is controlled by its own local tiny Elman RNN that maintains sequential hidden state over DeviceOrientation samples (plus pointer attractor relative). The RNN outputs local force and stiffness deltas. Simple Euler physics under continuous orientation-derived gravity/wind, with AABB collision resolution. On collision the higher-fitness agent seals (SHA-256 hash of weights) and transfers a mutated genome to the weaker. DOM appearance (hue, scale, rotation, glow) is driven directly by RNN hidden-state energy. Full population seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

**Novelty**
Leaves the dominant recent cluster of WebGPU LBM/photonic/wavelet/softbody/NCA/spectral-MLP field kernels, hand/gaze PBD/Verlet MLP competitions, and pure MLP-DOM transfers (F464). Core novel combination is DeviceOrientation as sequential causal input to independent local RNNs that physically embody and control their own DOM bodies, with sealed genome auction on physical AABB contact. Not residual predictors, not pure NCA, not spectral/audio residuals, not pointer-history fields, not softbody DOM meshes, not orientation-MLP, not WebGPU continuous kernels, not WebXR hand/gaze.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Agents: 6 DOM cards; each owns RNN weights (hidden=4, input=5: ox,oy,ax,ay,h_norm)
- RNN: Elman; h = tanh(W_xh @ x + W_hh @ h + b); force = W_hy @ h
- Physics: vel += force + orient_gravity * 0.15; pos += vel * dt; damping; bounds bounce; AABB separate + transfer
- Fitness: low kinetic energy + center proximity EMA
- Transfer: on overlap, hash winner weights, mutate-copy to loser (rate 0.08)
- Morph: CSS custom props --hue, --scale, --rot from ||h|| and angle
- IndexedDB: seal/restore all weights, hidden, positions, fitness
- Optional BroadcastChannel for top-genome share (multi-tab)
- Pointer: click sets attractor visible to all RNNs
- No external dependencies

**Expected Outcome**
Tilt the device: agents drift, compete, morph under their RNN state, and auction sealed genomes on contact. Click to attract. Seal restores the living population. Works offline; graceful without orientation (pointer + zero bias).

**Failure Modes**
- No DeviceOrientation permission or support → zero bias, still fully pointer-interactive.
- IndexedDB private mode/quota → no persist.
- High agent count on low-end → jank (fixed at 6).
- Mutation too aggressive → homogenization (tuned low).

**Interactivity**
Request orientation. Tilt to bias physics. Click canvas or agents to set attractor or reward. Agents morph and transfer on collision. S or button to seal, R to restore. Reset button.

**Building Blocks**
WebRTC true datachannel sealed genome exchange; WebGPU parallel RNN forward; CSS 3D transform physical constraints; sequence length extension on orientation history.

**V01D Landing**
skills/mini/orient-rnn-dom-physical-auction; testable via tilt → agent motion + morph, collision → weight change, seal → IDB restore of RNNs + poses.

**Files**
drafts/F486-orient-rnn-dom-physical-auction-mind/SPEC.md
drafts/F486-orient-rnn-dom-physical-auction-mind/index.html

**Files**: drafts/F486-orient-rnn-dom-physical-auction-mind/SPEC.md, drafts/F486-orient-rnn-dom-physical-auction-mind/index.html

## Frontier Engine F-487 (2026-10-31)

**F487-webgpu-attention-cluster-dom-mind**

Entry added by ledger-guard from drafts/F487-webgpu-attention-cluster-dom-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A swarm of particles lives on a 2D canvas. Each particle carries a short state vector and, each frame, computes a simplified local self-attention over its k-nearest neighbors (similarity of state + spatial proximity). The attention-weighted message becomes a force that updates velocity. Emergent spatial clusters are detected by grid binning; each coherent cluster projects a living DOM card whose hue, scale, blur, and text content are driven directly by the cluster’s aggregated attention energy and mean state. The user’s pointer acts as a global observation that biases every particle’s attention keys. When a cluster’s attention coherence exceeds a threshold it seals a SHA-256 hash of its state vector to IndexedDB. Fully self-contained, offline after first load.

**Novelty**
Leaves the dominant recent cluster of WebGPU LBM/photonic/wavelet/softbody/NCA/spectral-MLP field kernels, orientation-RNN DOM physical auctions (F486), orientation-MLP Voronoi territories, and pure MLP-DOM transfers. Core novel combination is particle-level local self-attention (not residual MLP, not RNN, not NCA update) that both drives motion and nucleates spatial clusters whose consensus is projected as interactive DOM Verse cards. Not fluid kernels, not audio closed-loops, not device-orientation sequential RNNs, not genome auctions on AABB.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Particles: 80 on Canvas2D (WebGPU compute path noted as building block)
- State: 4-d vector per particle
- Attention: k=6 nearest; score = exp(-dist/σ) * cosine(state); softmax message → force
- Physics: vel += force * 0.4 + pointerBias; pos += vel; damping; soft bounds
- Clusters: 16×16 grid bins; bins with ≥4 particles and high mean attention become a cluster
- DOM cards: absolute-positioned; CSS vars --hue, --scale, --blur from cluster energy; text = rounded mean state
- Seal: on coherence > 0.75, SHA-256(state) → IndexedDB; restore on load
- Pointer: mouse/touch sets global observation bias
- No external dependencies

**Expected Outcome**
Move the pointer: particles stream, form coherent clusters, and living cards appear and morph over the canvas. Click a card to reinforce its cluster (boost energy). Seal restores prior cluster states. Works offline; graceful on low-end (particle count fixed).

**Failure Modes**
- No IndexedDB (private mode) → no persist, still fully interactive.
- Very low particle count or high damping → no stable clusters.
- Canvas resize mid-run → temporary cluster flicker.
- WebGPU not used in this prototype (Canvas2D primary; compute path is future building block).

**Interactivity**
Move pointer (or touch) to bias attention. Cards appear over clusters and morph. Click a card to reward its cluster. S or button to seal, R to restore. Reset clears particles and seals.

**Building Blocks**
WebGPU compute shader for parallel local attention; WebXR hand as 3D observation bias; OPFS for full trajectory history; multi-tab BroadcastChannel of sealed cluster hashes; true multi-head attention.

**V01D Landing**
skills/mini/attention-particle-cluster-dom; testable via pointer → cluster cards appear + morph, click card → energy rise, seal → IDB restore of cluster states.

**Files**
drafts/F487-webgpu-attention-cluster-dom-mind/SPEC.md
drafts/F487-webgpu-attention-cluster-dom-mind/index.html

**Files**: drafts/F487-webgpu-attention-cluster-dom-mind/SPEC.md, drafts/F487-webgpu-attention-cluster-dom-mind/index.html

## Frontier Engine F-488 (2026-11-01)

**F488-orient-reservoir-dom-auction-mind**

Entry added by ledger-guard from drafts/F488-orient-reservoir-dom-auction-mind/SPEC.md, after a full-file write dropped it.


**Files**: drafts/F488-orient-reservoir-dom-auction-mind/SPEC.md, drafts/F488-orient-reservoir-dom-auction-mind/index.html

## Frontier Engine F-489 (2026-11-01)

**F489-mic-spectral-reservoir-css3d-crystal-mind**

Entry added by ledger-guard from drafts/F489-mic-spectral-reservoir-css3d-crystal-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Live microphone audio is analysed into spectral bins that continuously drive a shared local echo-state reservoir (fixed random recurrent weights, spectral radius scaled). The reservoir state is projected onto a population of CSS 3D floating crystals inside a perspective scene. Each crystal’s position, velocity, hue, scale, and glow are driven by slices of the reservoir vector. Crystals interact with simple state-similarity forces (attract similar, repel dissimilar), producing emergent spatial clusters. High reservoir energy or user click seals a SHA-256 hash of the current spectral-reservoir state to IndexedDB as a recallable tone memory that can bias future input. Fully self-contained, offline after first load.

**Novelty**
Leaves the dominant recent cluster of WebGPU continuous field kernels (LBM, photonic, wavelet, softbody, NCA), particle self-attention swarms, orientation Elman RNNs / reservoirs with DOM auctions (F486–F488), and pure MLP-DOM transfers. Core novel combination is live mic spectral features as sequential input to a shared echo-state reservoir that physically embodies and morphs interactive CSS 3D crystals which interact spatially and seal spectral memories. Not device-orientation sequential nets, not AABB genome auctions, not residual predictors, not pure NCA, not WebGPU compute kernels, not WebXR hand/gaze, not attention lattices.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Audio: getUserMedia + AnalyserNode → 8 spectral bins (normalised log magnitude) as input vector
- Reservoir: N=24, fixed random W_res (spectral radius ~0.85), W_in; h = tanh(W_res @ h + W_in @ x + b) each frame
- Crystals: 7 absolutely-positioned divs inside a perspective container; each owns a 3-slice of h for pos/hue/scale
- Physics: vel += similarityForce * 0.3 + pointerBias; pos += vel; soft bounds; damping
- Similarity: cosine between crystal state slices → attract if >0.4 else repel
- Morph: CSS custom props --hue, --scale, --glow, transform: translate3d + rotate from reservoir angle
- Seal: on energy > threshold or click, SHA-256(h + bins) → IndexedDB; restore biases input
- Pointer: mouse/touch sets global attractor
- No external dependencies

**Expected Outcome**
Grant mic: crystals float, pulse, and cluster in 3D space in response to voice, music, or ambient sound. Speak or make noise to drive motion and morph. Click a crystal to seal its memory. Seal/restore buttons persist the mind. Works offline after load; graceful without mic (pointer + noise drive).

**Failure Modes**
- No mic permission or getUserMedia fail → zero spectral input, still fully pointer-interactive with noise.
- IndexedDB private mode/quota → no persist.
- High crystal count or large reservoir on low-end → jank (fixed small).
- Reservoir spectral radius too high → instability (scaled to 0.85).
- Audio context suspended until user gesture.

**Interactivity**
Request mic. Speak, hum, or play sound to drive crystals. Move pointer to attract. Click a crystal to seal it. S or button to seal full state, R to restore. Reset clears.

**Building Blocks**
WebGPU parallel reservoir + crystal force compute; WebXR hand as 3D attractor; OPFS for long spectral history; multi-tab BroadcastChannel of sealed tone hashes; online ridge readout trained on user rewards.

**V01D Landing**
skills/mini/mic-spectral-reservoir-css3d-crystal; testable via mic → crystal motion + morph, click crystal → IDB seal, restore → state bias.

**Files**
drafts/F489-mic-spectral-reservoir-css3d-crystal-mind/SPEC.md
drafts/F489-mic-spectral-reservoir-css3d-crystal-mind/index.html

**Files**: drafts/F489-mic-spectral-reservoir-css3d-crystal-mind/SPEC.md, drafts/F489-mic-spectral-reservoir-css3d-crystal-mind/index.html

## Frontier Engine F-490 (2026-11-01)

**F490-causal-bayesian-lattice-verse-mind**

Entry added by ledger-guard from drafts/F490-causal-bayesian-lattice-verse-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-490  
**Slug**: causal-bayesian-lattice-verse-mind  
**Date**: 2026-11-01  
**Status**: frontier prototype  

**Concept**
A spatial lattice of interactive DOM Verse cards forms a local Bayesian belief network. Causal pointer history (or synthetic jitter) injects evidence that updates each card’s discrete belief distribution via proximity-weighted likelihood. Beliefs propagate to spatial neighbors through simple message passing. Card appearance (hue, scale, glow) and mild physical attraction are driven by belief entropy and consensus. High-confidence clusters or explicit click seal a SHA-256 hash of the full belief state to IndexedDB as a recallable spatial memory that can bias future priors. Fully self-contained, offline after first load.

**Novelty**
Leaves the dominant recent cluster of WebGPU continuous field kernels (LBM, photonic, wavelet, softbody, NCA), particle self-attention swarms (F487), orientation Elman RNNs / reservoirs with DOM auctions (F486–F488), and mic-spectral reservoir CSS3D crystals (F489). Core novel combination is causal pointer evidence driving local Bayesian belief updates and spatial message passing on a reconfigurable DOM lattice of Verse cards that physically morph and seal probabilistic memories. Not residual predictors, not pure Hebbian, not RNNs/reservoirs, not spectral audio, not WebGPU compute kernels, not WebXR hand/gaze, not attention lattices, not genome auctions on AABB.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Lattice: 6×6 absolutely positioned DOM cards inside a CSS perspective container
- Beliefs: each card holds a 4-bin discrete distribution (normalized)
- Causal input: pointer move updates nearby cards with Gaussian likelihood centered on a preferred bin; synthetic motion fallback
- Propagation: each frame, cards receive weighted average messages from 4-neighbors, mix with prior
- Embodiment: hue = argmax belief, scale/glow = 1 − entropy, mild position lerp toward similar-belief neighbors
- Interaction: drag cards to reconfigure the spatial graph; click empty space or a control to seal
- Seal: SHA-256 of serialized beliefs + positions stored in IndexedDB; restore biases next priors
- No external dependencies, no network

**Expected Outcome**
Interactive spatial field of belief cards that rapidly form colored clusters in response to gesture, morph their own chrome, and offer sealed probabilistic memories. Runnable offline with pointer or synthetic drive. Seal persists the lattice state.

**Mechanics**
- Pointer history (last N positions) → local evidence injection  
- Bayesian update: posterior ∝ prior × likelihood(proximity)  
- Spatial message passing at ~30 Hz  
- Entropy-driven scale and CSS custom properties for hue/glow  
- Drag reconfigures neighbor graph on the fly  
- IndexedDB seal/restore of full state  

**Failure Modes**
- No pointer events (synthetic jitter used)  
- Too many cards on low-end devices cause layout thrash (fixed 36)  
- IndexedDB private mode or quota silently fails seal  
- Extreme dragging can produce disconnected components (still functional)

**Interactivity**
Move pointer to inject evidence and watch beliefs shift and clusters form. Drag cards to change the spatial topology. Click “Seal” to hash and store the current mind state; “Restore” reloads it. Fully offline after load.

**Building Blocks**
Local Bayesian belief lattice on reconfigurable DOM Verse cards, causal pointer evidence, entropy-morph UI, sealed probabilistic spatial memory.

**Lands in V01D**
As a spatial stage skill (`skills/mini/causal-bayesian-lattice.js`); testable via `tools/causal-bayesian.test.mjs` for evidence→posterior and entropy→scale mapping.

**Files**
- drafts/F490-causal-bayesian-lattice-verse-mind/SPEC.md
- drafts/F490-causal-bayesian-lattice-verse-mind/index.html

**Files**: drafts/F490-causal-bayesian-lattice-verse-mind/SPEC.md, drafts/F490-causal-bayesian-lattice-verse-mind/index.html

## Frontier Engine F-491 (2026-11-01)

**F491-persistent-broadcast-sealed-genome-dom-swarm-mind**

Entry added by ledger-guard from drafts/F491-persistent-broadcast-sealed-genome-dom-swarm-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-491  
**Slug**: persistent-broadcast-sealed-genome-dom-swarm-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of orientation/reservoir RNN DOM physical auctions (F486/F488), attention-cluster DOM (F487), mic-spectral reservoir CSS3D (F489), causal Bayesian lattice (F490). Explicitly leaves lattice/attention/spectral/orientation/DOM-auction axes.

**Concept**
Persistent multi-tab sealed genome auction for a swarm of local tiny MLPs. Agents compete for a shared resource field. User seals a genome (weight vector hash + copy) via click; sealed genomes can be transferred to weaker agents. Population and best seals persist in IndexedDB. BroadcastChannel syncs sealed transfers and field state across same-origin tabs. Each agent is a hybrid embodiment: a CSS 3D-transformed DOM card whose position/rotation is driven by its MLP output (inputs: local resource, neighbor density, time). Novel combination of sealed genome transfer, multi-tab BroadcastChannel shared field, IndexedDB persistence, and local MLP controlling physical CSS UI elements — none of these together previously built.

**Why novel**
- Not a pure lattice, NCA, spectral residual, pointer field, softbody, orientation RNN, k-means, or attention cluster.
- Genome transfer is sealed (user gesture required) and multi-tab shared via BroadcastChannel (under-explored architecture).
- Local tiny MLP directly morphs CSS 3D physical embodiments of the agents themselves.
- Offline-capable via IndexedDB; multi-tab via BroadcastChannel (no server).

**Prototype**
Single self-contained `index.html`. Interactive offline. Open multiple tabs to see sealed genome transfer sync. Click an agent to seal its genome; click a weak one to transfer.

**Failure modes**
- BroadcastChannel only same-origin, same browser profile.
- IndexedDB quota or private mode may drop persistence.
- MLP is tiny (random init + simple update); no deep training.
- CSS 3D performance on low-end devices.

**Building blocks for next**
BroadcastChannel + IndexedDB sealed state; local MLP → CSS transform control; multi-agent competition with user-sealed transfer.

**V01D landing**
skills/mini/persistent-broadcast-sealed-genome-dom-swarm; testable via multi-tab seal/transfer + IDB restore.

**Files**: drafts/F491-persistent-broadcast-sealed-genome-dom-swarm-mind/SPEC.md, drafts/F491-persistent-broadcast-sealed-genome-dom-swarm-mind/index.html

## Frontier Engine F-492 (2026-11-01)

**F492-webxr-hand-constraint-mlp-mind**

Entry added by ledger-guard from drafts/F492-webxr-hand-constraint-mlp-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-492  
**Slug**: webxr-hand-constraint-mlp-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of orientation/reservoir RNN DOM physical auctions (F486/F488), attention-cluster DOM (F487), mic-spectral reservoir CSS3D (F489), causal Bayesian lattice (F490), persistent BroadcastChannel sealed-genome DOM swarm (F491). Explicitly leaves lattice/attention/spectral/orientation/DOM-auction/genome-swarm axes.

**Concept**
True WebXR hand-tracking (immersive-ar preferred; pointer/mouse fallback) injects multi-joint forces into a local mass-spring constraint network of particles. Each particle hosts a tiny local MLP that modulates its rest-length and stiffness from recent hand-proximity history. Particles form a living Verse cloth/mesh whose topology and physical parameters adapt. A sustained pinch (or double-click) seals the full configuration (positions + MLP weights) as a SHA-256 fold memory to IndexedDB; sealed folds can be restored or transferred to a secondary “shadow” cloth. Fully self-contained, offline after first load.

**Why novel**
- Not a pure lattice, NCA, spectral residual, pointer-history field, softbody DOM, orientation RNN, k-means particles, attention cluster, Bayesian lattice, or BroadcastChannel genome auction.
- Core novel combination is WebXR hand joints as causal force injectors into a constraint-based mass-spring solver whose rest parameters are controlled by per-particle local MLPs, with sealed fold-memory transfer.
- Under-explored axis: true hand-driven novel physics (constraint network) + local tiny models controlling physical constants.

**Prototype**
Single self-contained `index.html`. Interactive offline. Enter XR for hand control or use pointer. Particles and springs respond; MLPs tint and stiffen under prolonged hand contact. Seal/restore fold memories.

**Failure modes**
- No WebXR or hand-tracking support (pointer fallback always works).
- XR permission denied or no AR hardware.
- IndexedDB private mode or quota silently fails seal.
- Too many particles/constraints on low-end devices (capped at ~50).
- Constraint solver is simple Jacobi; can explode if dt large (fixed timestep used).

**Building blocks for next**
WebXR hand → force injection into constraint solvers; per-particle MLP controlling physical parameters; sealed fold memories of hybrid physics+model state.

**V01D landing**
skills/mini/webxr-hand-constraint-mlp-mind; testable via hand-proximity → stiffness change, pinch → seal hash, restore → prior config.

**Files**: drafts/F492-webxr-hand-constraint-mlp-mind/SPEC.md, drafts/F492-webxr-hand-constraint-mlp-mind/index.html

## Frontier Engine F-493 (2026-11-01)

**F493-webgpu-implicit-sculptor-mind**

Entry added by ledger-guard from drafts/F493-webgpu-implicit-sculptor-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-493  
**Slug**: webgpu-implicit-sculptor-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of WebXR hand-constraint MLPs (F492), BroadcastChannel genome swarms (F491), causal Bayesian lattices (F490), mic-spectral reservoirs (F489), orientation reservoirs / DOM auctions (F486–F488), attention-cluster DOM (F487). Explicitly leaves lattice/belief, reservoir/RNN, spectral audio, hand/physics constraint, genome-auction, and attention-swarm axes.

**Concept**
A local evolutionary sculptor mind (population of genomes in a Web Worker) continuously mutates and selects parameters for a parametric signed-distance field (blended spheres + boxes). Particles sample and are attracted to the zero-level set of the current SDF, producing a living implicit surface. User pointer density and dwell time provide fitness; visual diversity (particle spread + color entropy) is a secondary objective. High-fitness genomes can be sealed as SHA-256 form memories to IndexedDB and later restored to bias the population. Surrounding Verse canvas chrome (border radius, opacity of overlay panels) morphs with the mind’s diversity and fitness. Fully self-contained, offline after first load. WebGPU particle compute path is the natural next building block; prototype uses Canvas2D for universal runnability.

**Why novel**
- Not a lattice of cards, not Bayesian message passing, not reservoir/Elman, not spectral bins, not WebXR hand forces into constraints, not genome auctions on DOM AABB, not self-attention particle clusters.
- Core novel combination is an evolutionary generative implicit surface (SDF parameters as genes) sampled by attracted particles, with user-interaction fitness, sealed form-memory transfer, and UI chrome that physically responds to the sculptor’s internal diversity.
- Under-explored axis: generative procedural geometry driven by local evolutionary AI + particle embodiment + sealed attractor memories.

**Prototype**
Single self-contained `index.html`. Interactive offline. Move pointer to seed fitness on the surface. Particles form and morph the implicit shape. Click or press S to seal current high-fitness genome. R restores last seal. Diversity and fitness drive subtle chrome morphing.

**Failure modes**
- IndexedDB unavailable or private mode: seals fail silently (in-memory only).
- Very low-end devices: particle count capped (~400); evolution step rate reduced.
- No pointer: synthetic random fitness drive keeps the mind alive.
- SDF evaluation cost: limited primitive count (≤8).

**Building blocks for next**
Evolutionary genomes controlling SDF/implicit parameters; particle sampling of zero-level sets; sealed form memories of generative state; UI chrome coupled to internal mind metrics. Next: WebGPU compute for parallel SDF evaluation + particle update; WebXR raycast fitness; multi-tab BroadcastChannel of sealed forms.

**V01D landing**
skills/mini/webgpu-implicit-sculptor-mind; testable via pointer → particle surface morphs, seal → hash + IDB, restore → prior form reappears, chrome radius changes with diversity.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- SDF: 4–6 blended primitives (spheres/boxes) whose positions, radii, blend weights are genes
- Particles: ~300–400 Canvas2D points attracted to SDF=0 via gradient descent steps
- Evolution: Web Worker runs simple GA (mutation + tournament selection) on genome population of 16; fitness = user density near particles + entropy of particle positions
- Embodiment: particle positions + hue from local SDF gradient / age
- UI morph: CSS custom properties on root driven by diversity/fitness
- Seal: SHA-256 of serialized genome stored in IndexedDB; restore injects it into population
- No external dependencies, no network

**Expected Outcome**
Interactive living implicit surface that evolves under user attention, forms coherent shapes, offers sealed recallable forms, and subtly warps surrounding canvas chrome. Runnable offline with pointer or synthetic drive.

**Mechanics**
- Pointer history (last N positions) → local fitness injection near particles
- GA step every ~500 ms in Worker
- Particle update ~30–60 Hz toward SDF zero
- Diversity metric → CSS border-radius / panel opacity
- Click or key S seals; R restores

**Files**: drafts/F493-webgpu-implicit-sculptor-mind/SPEC.md, drafts/F493-webgpu-implicit-sculptor-mind/index.html

## Frontier Engine F-494 (2026-11-01)

**F494-webgpu-ifs-fractal-policy-mind**

Entry added by ledger-guard from drafts/F494-webgpu-ifs-fractal-policy-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-494  
**Slug**: webgpu-ifs-fractal-policy-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of WebGPU implicit SDF sculptors (F493), WebXR hand-constraint MLPs (F492), BroadcastChannel genome swarms (F491), causal Bayesian lattices (F490), mic-spectral reservoirs (F489). Explicitly leaves SDF/implicit surfaces, hand constraints, genome auctions, Bayesian message passing, reservoirs/RNNs, spectral audio, attention swarms, softbody, NCA, LBM, and photonic axes.

**Concept**
A population of local policy genomes encodes the affine transforms of an Iterated Function System (IFS). Points are iterated through the IFS maps and rendered as a living fractal attractor on canvas (Canvas2D primary; WebGPU compute buffer as natural upgrade). Statistics of the point cloud (cluster centroids, local density, entropy) drive the positions, scales, hues, and mild physical transforms of floating DOM Verse portals. User pointer dwell and coverage provide fitness that evolves the genomes via simple mutation/selection. High-fitness or explicit seal stores a SHA-256 genome memory in IndexedDB that can be restored to bias the population. Surrounding canvas chrome morphs with attractor complexity. Fully self-contained, offline after first load.

**Why novel**
- Not SDF particles, not mass-spring, not NCA, not LBM fluid, not wavelet/photonic kernels, not Bayesian lattices, not reservoirs, not attention clusters, not DOM genome auctions.
- Core novel combination is an evolutionary local policy controlling classical IFS fractal attractors, with the resulting point-cloud statistics physically embodying and morphing interactive DOM Verse portals, sealed as fractal form memories.
- Under-explored axis: generative fractal geometry driven by local evolutionary AI + point-cloud DOM projection + sealed attractor memories.

**Prototype**
Single self-contained `index.html`. Interactive offline. Move pointer over the canvas to reward dense or interesting regions. Fractal points form and morph under evolving IFS maps. DOM portals ride the attractor. Press S or click Seal to capture the current best genome. R restores last seal. Complexity drives subtle chrome morphing.

**Failure modes**
- IndexedDB unavailable or private mode: seals fall back to localStorage or in-memory.
- Very low-end devices: point iteration count capped (~2000–4000); evolution step rate reduced.
- No pointer: synthetic random fitness drive keeps the mind alive.
- IFS collapse to a point: mutation rate and diversity pressure prevent total collapse.

**Building blocks for next**
Evolutionary genomes encoding IFS affine maps; point-cloud statistics driving living DOM portals; sealed fractal form memories. Next: true WebGPU compute for parallel IFS iteration + density histogram; WebXR controller as transform injector; multi-tab BroadcastChannel of sealed attractors.

**V01D landing**
skills/mini/webgpu-ifs-fractal-policy-mind; testable via pointer → portal morph + attractor change, seal → hash + IDB, restore → prior fractal reappears, chrome radius changes with complexity.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- IFS: 3–4 affine maps per genome (a,b,c,d,e,f,p); points iterated ~1500–3000 times
- Policy: population of 8–12 genomes; simple GA (mutation + elitist selection) every ~400 ms
- Fitness: user pointer density near recent points + entropy of point cloud + coverage of canvas
- Embodiment: 4–6 DOM portals positioned at cluster centroids or high-density samples; CSS transforms (scale, rotate, hue, blur) from local stats
- UI morph: CSS custom properties on root driven by point entropy / estimated complexity
- Seal: SHA-256 of serialized best genome stored in IndexedDB (localStorage fallback); restore injects it into population
- No external dependencies, no network

**Expected Outcome**
Interactive living fractal attractor that evolves under user attention, forms coherent strange attractors or fern-like forms, offers sealed recallable fractal memories, and subtly warps surrounding canvas chrome and floating portals. Runnable offline with pointer or synthetic drive.

**Mechanics**
- Pointer history (last N positions) → local fitness injection near points
- GA step every ~400 ms
- Point iteration + render ~30–60 Hz
- Complexity metric → CSS border-radius / panel opacity / portal glow
- Click Seal or key S seals; R restores

**Files**: drafts/F494-webgpu-ifs-fractal-policy-mind/SPEC.md, drafts/F494-webgpu-ifs-fractal-policy-mind/index.html

## Frontier Engine F-495 (2026-11-01)

**F495-webgpu-ising-orient-domain-mind**

Entry added by ledger-guard from drafts/F495-webgpu-ising-orient-domain-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-495  
**Slug**: webgpu-ising-orient-domain-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of evolutionary generative geometry (IFS fractal F494, implicit SDF sculptor F493), WebXR hand-constraint MLPs (F492), BroadcastChannel sealed-genome DOM swarms (F491), causal Bayesian lattices (F490), mic-spectral reservoirs (F489). Explicitly leaves generative IFS/SDF/fractal attractors, hand constraints, genome auctions, Bayesian message passing, reservoirs/RNNs, spectral audio, attention swarms, softbody, NCA, LBM, and photonic axes.

**Concept**
A 2D Ising spin lattice (classic ferromagnetic model) evolves under a WebGPU compute shader (Canvas2D Metropolis fallback). DeviceOrientation provides a continuous external magnetic field vector (tilt magnitude + direction as H). Pointer dwell injects local temperature or field bias. Domains of aligned spins emerge; local magnetization and energy statistics drive the positions, rotations, and scales of floating DOM Verse portals that physically embody the ordered regions. A seal gesture stores a SHA-256 of the full spin configuration as a magnetic domain memory in IndexedDB that can be restored to bias the lattice. Chrome morphs with global |M| and energy. Fully self-contained, offline after first load.

**Why novel**
- Not IFS/fractal maps, not SDF implicit surfaces, not mass-spring constraints, not NCA, not LBM/SPH fluids, not wavelet/photonic kernels, not Bayesian lattices, not reservoirs, not attention clusters, not DOM genome auctions, not residual predictors.
- Core novel combination is DeviceOrientation as causal external field into a classic Ising spin system (previously unused kernel), with emergent domain statistics physically controlling hybrid DOM portal embodiments, and sealed spin-configuration memories.
- Under-explored axis: statistical-mechanics lattice models driven by device spatial sensors + domain-to-DOM projection + sealed magnetic memories.

**Prototype**
Single self-contained `index.html`. Interactive offline. Tilt the device (or move pointer) to bias the field; spins align into domains; portals ride high-magnetization regions. Press S or click Seal to capture the current spin config. R restores last seal. Global magnetization drives subtle chrome morphing.

**Failure modes**
- No DeviceOrientation: pointer-only field injection + synthetic random field.
- IndexedDB unavailable or private mode: seals fall back to localStorage or in-memory.
- Very low-end devices: lattice capped at 48×48; update rate reduced; WebGPU path skipped.
- WebGPU unavailable or compute shader fail: pure Canvas2D Metropolis.
- Orientation permission denied: graceful fallback.

**Building blocks for next**
Ising/Potts spin lattices in WebGPU compute; DeviceOrientation as continuous external field; domain statistics driving living DOM portals; sealed spin-configuration memories. Next: true WebXR gaze as field injector; multi-tab BroadcastChannel of sealed domains; temperature annealing schedule controlled by a tiny local model.

**V01D landing**
skills/mini/webgpu-ising-orient-domain-mind; testable via orientation → domain formation + portal morph, seal → hash + IDB, restore → prior spin pattern reappears, chrome radius changes with |M|.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Lattice: 64×64 spins (+1/-1); Metropolis single-spin flips or parallel checkerboard
- Field: DeviceOrientation (beta/gamma → H vector); pointer adds local H or lowers T
- Domains: sampled local magnetization windows → 4–6 DOM portals
- Embodiment: portal CSS transform/position/hue from local M and energy
- UI morph: CSS custom properties on root driven by global |M| / energy
- Seal: SHA-256 of spin buffer stored in IndexedDB (localStorage fallback); restore writes spins
- WebGPU compute path when available; Canvas2D fallback always works
- No external dependencies, no network

**Expected Outcome**
Interactive living Ising lattice that forms magnetic domains under device tilt or pointer, offers sealed recallable spin memories, and subtly warps surrounding canvas chrome and floating portals. Runnable offline with orientation, pointer, or synthetic drive.

**Mechanics**
- Orientation events → continuous H field
- Pointer history → local bias
- Spin update ~20–40 Hz
- Domain sampling → portal positions
- Global |M| → CSS border-radius / panel opacity
- Click Seal or key S seals; R restores

**Files**: drafts/F495-webgpu-ising-orient-domain-mind/SPEC.md, drafts/F495-webgpu-ising-orient-domain-mind/index.html

## Frontier Engine F-496 (2026-11-01)

**F496-devicemotion-kalman-portal-physics-mind**

Entry added by ledger-guard from drafts/F496-devicemotion-kalman-portal-physics-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-496  
**Slug**: devicemotion-kalman-portal-physics-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of WebGPU generative geometry (IFS fractal F494, implicit SDF sculptor F493), statistical-mechanics Ising (F495), WebXR hand-constraint MLPs (F492), BroadcastChannel sealed-genome DOM swarms (F491), causal Bayesian lattices (F490), mic-spectral reservoirs (F489), orient-reservoir DOM auctions (F488). Explicitly leaves generative IFS/SDF/fractal attractors, Ising/stat-mech lattices, hand constraints, genome auctions, Bayesian message passing, reservoirs/RNNs, spectral audio, attention swarms, softbody, NCA, LBM, and photonic axes.

**Concept**
DeviceMotionEvent (acceleration including gravity) supplies continuous causal observations to a local 2D Kalman filter (position + velocity state; previously unused local model type in this frontier). The filter estimates user intent velocity/position. A small swarm of hybrid DOM Verse portals runs simple Euler physics (attraction to estimated intent + mild repulsion + edge bounce). Pointer/mouse provides desktop observation fallback. A seal gesture stores a SHA-256 of the full Kalman state + portal poses as a motion memory in IndexedDB that can be restored to bias the filter and portals. Global estimated |velocity| drives subtle chrome morphing. Fully self-contained, offline after first load.

**Why novel**
- Not IFS/fractal maps, not SDF implicit surfaces, not mass-spring constraints, not NCA, not LBM/SPH fluids, not wavelet/photonic kernels, not Bayesian lattices, not reservoirs, not attention clusters, not DOM genome auctions, not residual predictors, not Ising spins.
- Core novel combination is DeviceMotion as causal observations into a classical Kalman filter (never-before-seen local model), with the estimated intent state physically driving hybrid DOM portal embodiments via Euler integration, plus sealed motion-filter memories.
- Under-explored axis: sensor-fusion local models (Kalman) driven by device motion sensors + intent-to-DOM physics projection + sealed kinematic memories.

**Prototype**
Single self-contained `index.html`. Interactive offline. Tilt/move the device (or move pointer) to inject observations; portals physically track the filtered intent. Press S or click Seal to capture the current filter + portal state. R restores last seal. Estimated speed drives subtle chrome morphing.

**Failure modes**
- No DeviceMotion or permission denied: pointer-only observations + synthetic noise drive.
- IndexedDB unavailable or private mode: seals fall back to localStorage or in-memory.
- Very low-end devices: portal count capped at 4; update rate reduced.
- High sensor noise: Kalman process/measurement covariances keep estimates stable (simple fixed-gain version used for robustness).
- Orientation/motion permission denied: graceful fallback to pointer.

**Building blocks for next**
Kalman/sensor-fusion local models driven by DeviceMotion; estimated intent state driving living DOM portal physics; sealed kinematic filter memories. Next: true WebXR gaze as measurement injector; multi-tab BroadcastChannel of sealed motion states; temperature/annealing on process noise controlled by a tiny local model.

**V01D landing**
skills/mini/devicemotion-kalman-portal-physics-mind; testable via motion → portal tracking + filter update, seal → hash + IDB, restore → prior intent estimate and portal poses reappear, chrome radius changes with |v|.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- State: 4D Kalman (px, py, vx, vy); simple constant-velocity model with fixed process/measurement noise
- Observations: DeviceMotion acceleration (integrated roughly or as velocity proxy) + pointer position
- Physics: 5 DOM portals with Euler step, attraction to estimated intent, soft repulsion, canvas edge bounce
- Embodiment: portal CSS transform/position/hue/scale from local velocity residual and distance to intent
- UI morph: CSS custom properties on root driven by estimated |v|
- Seal: SHA-256 of serialized Kalman state + portal poses stored in IndexedDB (localStorage fallback); restore writes state
- No external dependencies, no network

**Expected Outcome**
Interactive living portals that physically track a Kalman-filtered device-motion intent, offer sealed recallable motion memories, and subtly warp surrounding canvas chrome. Runnable offline with motion, pointer, or synthetic drive.

**Mechanics**
- DeviceMotion / pointer → measurement updates to Kalman
- Predict + update ~60 Hz
- Portal Euler physics ~60 Hz
- |v| → CSS border-radius / panel opacity
- Click Seal or key S seals; R restores

**Files**: drafts/F496-devicemotion-kalman-portal-physics-mind/SPEC.md, drafts/F496-devicemotion-kalman-portal-physics-mind/index.html

## Frontier Engine F-497 (2026-11-01)

**F497-webgpu-echo-state-living-dom-mind**

Entry added by ledger-guard from drafts/F497-webgpu-echo-state-living-dom-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-497  
**Slug**: webgpu-echo-state-living-dom-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of DeviceMotion Kalman portal physics (F496), WebGPU Ising orient domains (F495), IFS fractal policy (F494), implicit SDF sculptor (F493), WebXR hand-constraint MLPs (F492). Explicitly leaves Kalman filters, Ising/stat-mech, IFS/fractal attractors, SDF implicit surfaces, hand constraints, genome auctions, Bayesian lattices, residual predictors, softbody mass-spring, NCA, LBM, photonic waveguides, and attention clusters.

**Concept**
A WebGPU compute shader runs a spatial Echo State Network (reservoir computing): a large grid of recurrent nodes with fixed random sparse connectivity and leaky integration. Continuous inputs (pointer velocity residual, DeviceOrientation angles, optional microphone spectral centroid) are injected into input nodes. The reservoir state vector is read out by a tiny local linear readout (trained online via ridge or simple Hebbian on seal) that produces force fields. A swarm of real DOM cards (not canvas overlays) run Verlet physics under those forces, so the page’s living elements themselves embody the reservoir dynamics. Cards also feed their local kinetic energy back as additional reservoir drive. Sealing captures a SHA-256 of the full reservoir state + readout weights into IndexedDB as a recallable mind snapshot. High-energy cards briefly surface a local state-hash phrase.

**Why novel**
- Not Kalman/sensor-fusion, not Ising spins, not IFS maps, not SDF raymarch, not mass-spring, not NCA, not LBM/SPH, not photonic, not residual MLP predictors, not DOM genome auctions.
- Core novel combination is a WebGPU-resident Echo State Network (fixed random reservoir + trainable readout) whose continuous state physically drives and is driven by living DOM cards via Verlet integration, with bidirectional energy feedback and sealed reservoir memories.
- Under-explored axis: reservoir computing on GPU as the sole mind substrate, with the actual DOM as the sole embodiment and sensor array.

**Prototype**
Single self-contained `index.html`. Interactive offline. Move pointer or tilt device to inject drive; optional mic permission for spectral input. Living cards float and cluster under reservoir forces. Press S or click Seal to capture the mind state. R restores last seal. High energy cards flash a short state phrase.

**Failure modes**
- No WebGPU: falls back to a smaller CPU reservoir (still functional, slower).
- No DeviceOrientation or mic: pointer residual only.
- IndexedDB unavailable: seals fall back to localStorage or in-memory.
- Low-end GPU: reservoir grid reduced to 32×32; card count capped at 8.
- High leak / instability: spectral radius of reservoir kept <1 by construction.

**Building blocks for next**
WebGPU Echo State Networks with living DOM bidirectional coupling; sealed reservoir state snapshots as initial conditions; energy-feedback sensors. Next: multi-tab BroadcastChannel of reservoir states; online readout adaptation driven by card-click reward; WebXR gaze as additional input nodes.

**V01D landing**
skills/mini/webgpu-echo-state-living-dom-mind; testable via pointer → card motion, seal → hash + IDB, restore → prior reservoir dynamics reappear, energy → phrase flash.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- State: WebGPU reservoir buffer (N nodes, state + input injection)
- Inputs: pointer velocity residual, DeviceOrientation, optional AnalyserNode spectral features
- Readout: tiny local linear weights (updated on seal)
- Physics: 6–12 absolute-positioned DOM cards, Verlet integration under force field sampled from reservoir
- Bidirectional: card kinetic energy injected back into nearby reservoir nodes
- Embodiment: card CSS transform, scale, hue, and brief text from local energy and state hash
- UI morph: root CSS vars driven by global reservoir energy
- Seal: SHA-256 of serialized reservoir state + readout stored in IndexedDB (localStorage fallback)
- No external dependencies, no network

**Expected Outcome**
Interactive living DOM cards that float, cluster, and briefly “speak” under the continuous dynamics of a WebGPU Echo State Network, with sealed recallable mind snapshots. Runnable offline with pointer, orientation, mic, or synthetic drive.

**Mechanics**
- Pointer / orientation / mic → input injection into reservoir
- Reservoir leaky update ~60 Hz on GPU
- Force field sampled → Verlet step on cards
- Card energy → feedback injection
- Global energy → CSS morph
- Click Seal or key S seals; R restores

**Files**: drafts/F497-webgpu-echo-state-living-dom-mind/SPEC.md, drafts/F497-webgpu-echo-state-living-dom-mind/index.html

## Frontier Engine F-498 (2026-11-01)

**F498-webgpu-wfc-mlp-living-grid-mind**

Entry added by ledger-guard from drafts/F498-webgpu-wfc-mlp-living-grid-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-498  
**Slug**: webgpu-wfc-mlp-living-grid-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of DeviceMotion Kalman portal physics (F496), WebGPU Ising orient domains (F495), IFS fractal policy (F494), implicit SDF sculptor (F493), WebGPU Echo State living DOM (F497), WebXR hand-constraint MLPs (F492), BroadcastChannel sealed-genome DOM swarms (F491), causal Bayesian lattices (F490). Explicitly leaves dynamical systems (Kalman/Ising/reservoirs/IFS/SDF), hand constraints, genome auctions, Bayesian message passing, residual predictors, softbody, NCA, LBM, photonic, and attention lattices.

**Concept**
A WebGPU compute shader (Canvas2D iterative fallback) performs iterative Wave Function Collapse-style constraint propagation on a discrete tile grid. A tiny local evolving MLP proposes tile-type bias weights from a short causal history of pointer density and dwell. The collapsed (or partially collapsed) field is projected as a living CSS Grid of interactive Verse cards whose content, hue, and scale reflect the chosen tiles and local entropy. Clicks force a collapse at that cell; high global consistency or explicit seal captures a SHA-256 of the pattern + MLP weights to IndexedDB as a recallable generative memory that biases future priors. Fully self-contained, offline after first load.

**Why novel**
- Not Kalman/sensor-fusion, not Ising spins, not IFS maps, not SDF, not Echo State reservoirs, not mass-spring, not NCA, not LBM, not photonic waveguides, not residual MLP predictors, not DOM genome auctions, not Bayesian lattices.
- Core novel combination is a previously unused WebGPU (or CPU) constraint-propagation kernel (WFC-like) whose proposal biases are produced by a local evolving MLP driven by pointer causal history, embodied directly as a living CSS Grid of Verse cards that can be rewritten and sealed as generative memories.
- Under-explored axis: generative constraint satisfaction on GPU as the sole mind substrate, with the actual CSS Grid as the sole interactive embodiment.

**Prototype**
Single self-contained `index.html`. Interactive offline. Move pointer to build density history; click cells to force collapse. Cards morph and rewrite under the collapsing field. Press S or click Seal to capture the mind state. R restores last seal. High consistency briefly highlights a local entropy phrase.

**Failure modes**
- No WebGPU: falls back to pure JS iterative collapse (still functional, slower on large grids).
- IndexedDB unavailable: seals fall back to localStorage or in-memory.
- Low-end devices: grid reduced to 8×8; card count capped.
- Collapse deadlock: entropy restart with small noise injection.

**Building blocks for next**
WebGPU WFC/constraint kernels with MLP-biased proposals; sealed generative pattern memories as initial conditions; living CSS Grid as embodiment. Next: multi-tab BroadcastChannel of partial collapses; online MLP adaptation driven by card-click reward; WebXR gaze as density injector.

**V01D landing**
skills/mini/webgpu-wfc-mlp-living-grid-mind; testable via pointer → density bias, click → collapse, seal → hash + IDB, restore → prior pattern reappears, consistency → phrase flash.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- State: tile possibility grids (N×N×T), entropy map
- Inputs: pointer velocity/density residual history → MLP (4→6→T biases)
- Kernel: iterative constraint propagation (WebGPU compute or JS)
- Embodiment: CSS Grid of absolute or grid-positioned DOM cards, content/hue/scale from collapsed tile + local entropy
- UI morph: root CSS vars driven by global entropy / consistency
- Seal: SHA-256 of serialized pattern + MLP weights stored in IndexedDB (localStorage fallback)
- No external dependencies, no network

**Expected Outcome**
Interactive living CSS Grid of Verse cards that rewrite themselves under a collapsing constraint field biased by a local MLP, with sealed recallable generative snapshots. Runnable offline with pointer or synthetic drive.

**Mechanics**
- Pointer history → MLP bias proposals
- Constraint propagation ~30 Hz
- Collapsed tiles → card content/style
- Global consistency → CSS morph + phrase
- Click Seal or key S seals; R restores

**Files**: drafts/F498-webgpu-wfc-mlp-living-grid-mind/SPEC.md, drafts/F498-webgpu-wfc-mlp-living-grid-mind/index.html

## Frontier Engine F-499 (2026-11-01)

**F499-webgpu-battery-metabolism-particle-mind**

Entry added by ledger-guard from drafts/F499-webgpu-battery-metabolism-particle-mind/SPEC.md, after a full-file write dropped it.


**Files**: drafts/F499-webgpu-battery-metabolism-particle-mind/SPEC.md, drafts/F499-webgpu-battery-metabolism-particle-mind/index.html

## Frontier Engine F-500 (2026-11-01)

**F500-webgpu-amplitude-collapse-portal-mind**

Entry added by ledger-guard from drafts/F500-webgpu-amplitude-collapse-portal-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-500  
**Slug**: webgpu-amplitude-collapse-portal-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of WebGPU WFC/MLP living grids (F498), Echo State living DOM (F497), DeviceMotion Kalman portals (F496), Ising orient domains (F495), IFS fractal policies (F494), implicit SDF sculptors (F493), battery-metabolism particles (F499). Explicitly leaves constraint propagation, residual reservoirs, sensor-fusion physics, spin systems, fractals, SDFs, metabolic Battery Status, hand constraints, genome auctions, Bayesian message passing, softbody, NCA, LBM, and photonic waveguides.

**Concept**
A discrete 2D complex-amplitude field (wavefunction-like) is evolved on a Canvas2D grid (WebGPU compute path is the natural next building block; prototype is universal). Pointer motion injects local phase and magnitude perturbations. A small population of local tiny MLPs (pure JS, 4→4→2) act as measurement agents: each chooses a sample coordinate, reads local |ψ|² and phase gradient, and decides a collapse probability. Successful collapses spawn or morph hybrid DOM Verse portals whose CSS transform, scale, hue, and blur are driven by the measured complex value. Agents compete on a fitness that rewards both high-magnitude collapses and spatial diversity of portal placements. On proximity contact the stronger agent seals and transfers a mutated genome. Full state (field snapshot hash, genomes, portal poses) seals to IndexedDB for offline restore. Fully self-contained, offline after first load. Pointer is the primary causal input; DeviceOrientation provides a secondary phase bias.

**Novelty**
Core novel combination is a complex-amplitude interference substrate whose local measurement/collapse events are controlled by competing pure-JS MLPs that physically embody and morph interactive DOM portals. Not WFC constraint solving, not Ising spins, not Kalman tracking, not IFS/fractal iteration, not SDF particle attraction, not echo-state reservoirs, not battery metabolism, not hand-constraint networks, not attention clusters, not softbody mass-spring, not NCA, not LBM fluid, not photonic wave equation.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Canvas2D complex field (real/imag buffers, simple diffusion + interference kernel)
- Local MLP agents (position, velocity, weights) sample and collapse
- DOM portals created on collapse; CSS vars driven by measured amplitude/phase
- IndexedDB seal of field hash + genomes + portal state
- Controls: nucleate, seal, restore, clear

**Expected outcome**
Interactive living field of interfering amplitudes. Pointer writes ripples. Agents autonomously measure and collapse high-amplitude regions into morphing DOM portals that respond to the complex value. Sealed states restore previous minds. Chrome (border, glow) reacts to global |amplitude| entropy. Runnable in any modern browser with no external dependencies.

**Mechanics**
- Field update: diffusion of real/imag + local phase injection from pointer velocity
- Measurement: MLP outputs sample offset + collapse threshold; if |ψ|² > threshold, collapse (zero local region, spawn portal)
- Fitness: sum of collapsed magnitudes + portal spread
- Genome transfer on AABB overlap when fitness gap > threshold
- Seal: SHA-256 of serialized field moments + weights

**Failure modes**
- High grid resolution → CPU bound; drop to 64×64
- Too many portals → DOM thrash; cap at 12
- WebGPU path not implemented in prototype (Canvas only)

**Files**
drafts/F500-webgpu-amplitude-collapse-portal-mind/SPEC.md
drafts/F500-webgpu-amplitude-collapse-portal-mind/index.html

**V01D landing**
Spatial stage skill under void-live-deploy/skills/amplitude-collapse-mind.js; test asserts collapse → portal transform and seal hash integrity.

**Files**: drafts/F500-webgpu-amplitude-collapse-portal-mind/SPEC.md

## Frontier Engine F-501 (2026-11-01)

**F501-pressure-tilt-mlp-card-sculptor**

Entry added by ledger-guard from drafts/F501-pressure-tilt-mlp-card-sculptor/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-501  
**Slug**: pressure-tilt-mlp-card-sculptor  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of WebGPU/Canvas generative & dynamical field kernels (implicit SDF F493, IFS fractal F494, Ising orient F495, DeviceMotion Kalman portals F496, Echo State living DOM F497, WFC/MLP living grids F498, battery-metabolism particles F499, amplitude-collapse portals F500). Explicitly leaves continuous field kernels, residual predictors, pure NCA, spectral/audio residuals, pointer-history force fields, softbody DOM meshes, orientation RNNs/reservoirs, attention lattices, and k-means particles.

**Concept**
PointerEvent.pressure, tiltX, tiltY (stylus or simulated) and DeviceOrientation (beta/gamma) are continuous causal inputs to a small population of local tiny MLPs (pure JS, 4→6→4). Each MLP outputs spring-target offsets and stiffness for a swarm of hybrid DOM Verse cards. Cards run simple Euler physics with mutual soft collisions and edge bounce, so the page layout becomes a living sculptable skin. Fitness rewards spatial diversity (entropy of card positions) plus engagement dwell (time a card remains near its target under user pressure). A small “gene token” DOM element can be dragged (DataTransfer) onto another agent core or card to trigger sealed genome transfer: the fitter agent’s weights are mutated and assigned. Full state (weights, card poses, fitness) seals to IndexedDB for offline restore. Canvas background renders a pressure/orientation heat field. Desktop fallback synthesizes pressure from pointer speed and tilt from position. Fully self-contained, offline after first load.

**Novelty**
Leaves the dominant recent cluster of WebGPU/Canvas continuous field kernels and portal morphs. Core novel combination is PointerEvent pressure+tilt (previously unused causal axis) driving competing local MLPs that physically embody and sculpt real DOM cards, with sealed genome transfer via the DataTransfer drag-and-drop API. Not field kernels, not residual predictors, not pure NCA, not spectral residuals, not softbody mass-spring meshes, not orientation RNNs, not attention lattices, not pointer-history force fields.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Local MLPs in main thread (tiny, no external libs)
- DOM cards as physical embodiments (CSS transforms)
- Canvas2D pressure heatmap
- IndexedDB seal/restore
- DataTransfer for genome tokens

**Building block**
Future experiments can feed sealed pressure-sculpted poses as initial conditions, add true WebGPU particle compute for the cards, or multi-tab BroadcastChannel genome auctions.

**V01D landing**
Spatial stage skill under void-live-deploy/skills/pressure-sculptor-mind.js; test asserts pressure → card transform mapping and seal hash integrity.

**Files**
drafts/F501-pressure-tilt-mlp-card-sculptor/SPEC.md
drafts/F501-pressure-tilt-mlp-card-sculptor/index.html

**Files**: drafts/F501-pressure-tilt-mlp-card-sculptor/SPEC.md, drafts/F501-pressure-tilt-mlp-card-sculptor/index.html

## Frontier Engine F-501 (2026-11-01)

**F501-ambient-light-metabolic-swarm-mind**

Entry added by ledger-guard from drafts/F501-ambient-light-metabolic-swarm-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-501  
**Slug**: ambient-light-metabolic-swarm-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of battery-metabolism particles (F499), amplitude-collapse portals (F500), softbody policy meshes (F0482), wavelet-MLP DOM morphs (F0483). Explicitly leaves Battery Status, complex-amplitude collapse, mass-spring softbodies, discrete wavelet kernels, speech-seeded NCA, orientation Voronoi, and all prior particle/NCA/attention lattices.

**Concept**
Device AmbientLightSensor (or simulated illuminance) supplies a continuous environmental energy flux to a Canvas2D particle swarm (WebGPU compute path reserved as next building block). Each particle carries a tiny pure-JS MLP (3→4→2) that maps its local energy residual, recent light delta, and proximity to DOM portals into velocity and metabolic emission. Particles exert soft repulsive forces on absolute-positioned Verse portal cards, physically rearranging the page layout according to the swarm's energy distribution. High ambient light accelerates metabolism, expands portals, and raises emission; low light induces clustering, shrinkage, and dormancy. On AABB contact the higher-fitness agent seals and transfers a mutated genome. Full state (particle ensemble, genomes, portal poses, light history hash) seals to IndexedDB for offline restore. Fully self-contained, offline after first load. Pointer injects local "shade" or energy boost; DeviceOrientation provides secondary bias.

**Novelty**
Core novel combination is the Ambient Light Sensor API (never previously used in any Frontier Engine draft) as the sole external metabolic driver of a competing local-MLP particle swarm that exerts real physical forces on living DOM portals, closed-loop tuned by energy-distribution fitness, with sealed light-adapted genomes. Not battery discharge curves, not pointer-velocity residuals, not spectral audio, not complex wavefunction collapse, not constraint propagation, not softbody springs, not NCA, not LBM, not photonic waveguides.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Canvas2D particle swarm with per-agent energy and MLP policy
- AmbientLightSensor for illuminance (fallback: time-based or manual slider simulation)
- DOM portals (divs) whose transform, scale, opacity, and hue are driven by nearby particle energy
- Soft force integration so portals physically yield to swarm pressure
- IndexedDB seal of genomes + particle moments + light hash
- Controls: nucleate, seal, restore, clear, light override

**Expected outcome**
Interactive metabolic field responsive to real ambient light. Darken the room and watch portals contract and particles cluster; brighten and observe expansion, higher activity, and genome competition. Pointer shades or boosts local regions. Sealed states restore previous light-adapted minds. Chrome (background glow, border) reacts to global illuminance and energy entropy. Runnable in any modern browser with no external dependencies; sensor permission requested on user gesture.

**Mechanics**
- Particle update: energy += illuminance * absorption - decay; MLP outputs dx, dy from [energy, lightDelta, nearestPortalDist]
- Force: portals receive inverse-square repulsion proportional to particle energy within radius
- Fitness: mean energy + portal spatial spread - clustering penalty
- Genome transfer on overlap when fitness gap > threshold
- Seal: SHA-256 of serialized energy moments + weights + recent illuminance

**Failure modes**
- AmbientLightSensor unavailable or permission denied → simulated illuminance slider
- High particle count → CPU bound; cap at 120, drop rate
- Too many portals → DOM thrash; cap at 8
- WebGPU path not implemented in prototype (Canvas only)

**Files**
drafts/F501-ambient-light-metabolic-swarm-mind/SPEC.md
drafts/F501-ambient-light-metabolic-swarm-mind/index.html

**V01D landing**
Spatial stage skill under void-live-deploy/skills/ambient-light-swarm-mind.js; test asserts illuminance delta → particle energy change and portal transform, plus seal hash integrity.

**Files**: drafts/F501-ambient-light-metabolic-swarm-mind/SPEC.md, drafts/F501-ambient-light-metabolic-swarm-mind/index.html

## Frontier Engine F-502 (2026-11-02)

**F502-webgpu-kuramoto-phase-dom-orchestra-mind**

Entry added by ledger-guard from drafts/F502-webgpu-kuramoto-phase-dom-orchestra-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-502  
**Slug**: webgpu-kuramoto-phase-dom-orchestra-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of ambient-light metabolic swarms (F501), amplitude-collapse portals (F500), battery-metabolism particles (F499), echo-state living DOM (F497). Explicitly leaves light sensors, battery curves, complex amplitudes, reservoirs/echo-state, WFC, Ising, IFS, SDFs, Kalman, hand constraints, and all prior particle/NCA/attention lattices.

**Concept**
A population of coupled phase oscillators governed by the Kuramoto model is simulated in pure JS (WebGPU compute path reserved as next building block for the sine-coupling kernel). Each oscillator is embodied as an absolute-positioned DOM Verse card arranged on a ring. Instantaneous phase drives the card's rotation, hue, and radial scale; the global order parameter (synchronization) morphs page chrome. Coupling strengths form a genome evolved by a local Web Worker genetic algorithm that can be steered toward high synchronization ("orchestra") or controlled desynchronization ("polyphony") by user reward clicks. Pointer drag on a card injects a phase kick that propagates through the coupling. Full state (phases, frequencies, coupling matrix, fitness history) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

**Novelty**
Core novel combination is the Kuramoto phase-synchronization substrate (never previously used in any Frontier Engine draft) whose oscillators are living DOM cards whose CSS transforms are directly phase-driven, closed-loop tuned by an evolutionary coupling genome under user-steerable sync/desync fitness, with sealed phase minds. Not particle forces, not amplitude collapse, not residual reservoirs, not light/battery metabolism, not constraint propagation, not softbody springs, not NCA, not LBM, not photonic waveguides.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Pure-JS Kuramoto integrator (N≈12 oscillators)
- DOM cards as physical oscillators (transform, hue, scale from θ)
- Web Worker GA evolving the coupling matrix
- Canvas2D overlay for coupling strength visualization and order-parameter ring
- IndexedDB seal of phases + genome + order-parameter hash
- Controls: nucleate, reward-sync, reward-desync, seal, restore, clear

**Expected outcome**
Interactive living orchestra of phase-locked cards. Drag to kick phases and watch ripples of desync; reward synchronization and observe cards lock into coherent rotation/hue waves; reward polyphony and see independent orbits. Sealed states restore previous coupling minds. Chrome (background pulse, border) reacts to the order parameter. Runnable in any modern browser with no external dependencies.

**Mechanics**
- Phase update: θ_i += ω_i + Σ K_ij * sin(θ_j - θ_i) * dt
- Embodiment: card.style.transform = `rotate(${θ}rad) scale(${1+0.3*sin(θ)})`; hue from θ
- Order parameter r = |mean exp(iθ)| drives CSS variables
- GA: population of coupling matrices; fitness = ±r + diversity bonus; mutate/crossover ~0.5 Hz
- Phase kick on pointer drag
- Seal: SHA-256 of serialized phases + K matrix + recent r

**Failure modes**
- High N → CPU bound; cap at 16
- Worker blocked by CSP → main-thread GA fallback
- IndexedDB unavailable → localStorage or in-memory
- Too many cards → DOM thrash; cap at 12

**Files**
drafts/F502-webgpu-kuramoto-phase-dom-orchestra-mind/SPEC.md
drafts/F502-webgpu-kuramoto-phase-dom-orchestra-mind/index.html

**V01D landing**
Spatial stage skill under void-live-deploy/skills/kuramoto-phase-orchestra-mind.js; test asserts phase delta → card transform, reward → coupling evolution direction, and seal hash integrity.

**Files**: drafts/F502-webgpu-kuramoto-phase-dom-orchestra-mind/SPEC.md

## Frontier Engine F-503 (2026-11-02)

**F503-lennard-jones-mlp-dom-swarm-mind**

Entry added by ledger-guard from drafts/F503-lennard-jones-mlp-dom-swarm-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-503  
**Slug**: lennard-jones-mlp-dom-swarm-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of Kuramoto phase-DOM orchestras (F502), ambient-light metabolic swarms (F501), amplitude-collapse portals (F500), battery-metabolism particles (F499), echo-state living DOM (F497), WFC living grids (F498), Ising orient domains (F495). Explicitly leaves phase oscillators, light/battery sensors, complex amplitudes, reservoirs, WFC, Ising, IFS, SDFs, Kalman, hand constraints, photonic waveguides, LBM, SPH, and all prior particle force fields of those kinds.

**Concept**
A swarm of particles interacting via the Lennard-Jones potential (short-range repulsion + longer-range attraction) is integrated in pure JS (WebGPU compute path reserved for the pairwise force kernel). Each particle is embodied as an absolute-positioned DOM Verse card. A tiny local MLP per particle modulates its interaction strength (ε) from local density and pointer proximity. DeviceOrientationEvent supplies a global gravity vector. Pointer drag injects a force kick. User can seal a particle’s MLP genome (weights hash + copy) and transfer it to another particle; full configuration (positions, velocities, weights) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

**Novelty**
Core novel combination is the Lennard-Jones molecular-dynamics substrate (never previously used in any Frontier Engine draft) whose particles are living DOM cards whose CSS transforms/scale/hue are driven by kinetic energy, closed-loop tuned by per-particle local MLPs controlling interaction parameters, with user-sealed genome transfer and orientation-as-gravity. Not Kuramoto phases, not Ising, not reaction-diffusion/NCA, not SPH/LBM fluids, not softbody springs, not orientation RNN, not attention lattices, not metabolic resource fields.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Pure-JS LJ integrator (N≈12 particles, cutoff)
- DOM cards as physical particles (position from Verlet, scale/hue from speed)
- Per-particle tiny MLP (density + pointer → ε delta)
- DeviceOrientation gravity
- Pointer force injection
- IndexedDB seal of positions + velocities + MLP weights
- Controls: nucleate, seal-selected, transfer, seal-all, restore, clear

**Expected outcome**
Interactive living molecular swarm. Particles cluster and bounce under LJ forces; tilt the device to apply gravity; drag to kick particles; seal a strong interactor and transfer its genome to a weak one and watch behavior change. Sealed states restore previous minds. Runnable in any modern browser with no external dependencies.

**Mechanics**
- Force: LJ 12-6 truncated; ε_i modulated by MLP
- Integration: Velocity-Verlet, fixed dt
- Embodiment: card.style.transform = `translate(${x}px,${y}px) scale(${1+0.4*speed})`; hue from energy
- MLP: 3→4→1, ReLU, local density (neighbor count) + pointer dist + bias
- Seal: SHA-256 of serialized weights
- Gravity from beta/gamma orientation

**Failure modes**
- High N → O(N²) CPU bound; cap at 16
- No DeviceOrientation permission or desktop → gravity zero
- IndexedDB unavailable → localStorage or in-memory
- Too many cards → DOM thrash; cap at 12
- LJ instability if ε large or dt large (clamped)

**Files**
drafts/F503-lennard-jones-mlp-dom-swarm-mind/SPEC.md
drafts/F503-lennard-jones-mlp-dom-swarm-mind/index.html

**V01D landing**
Spatial stage skill under void-live-deploy/skills/lennard-jones-mlp-dom-swarm-mind.js; test asserts force delta → position change, seal → weight hash, transfer → behavior shift, orientation → gravity vector.

**Files**: drafts/F503-lennard-jones-mlp-dom-swarm-mind/SPEC.md, drafts/F503-lennard-jones-mlp-dom-swarm-mind/index.html

## Frontier Engine F-504 (2026-11-02)

**F504-webgpu-poisson-potential-mlp-dom-mind**

Entry added by ledger-guard from drafts/F504-webgpu-poisson-potential-mlp-dom-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-504  
**Slug**: webgpu-poisson-potential-mlp-dom-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of Lennard-Jones DOM swarms (F503), Kuramoto phase-DOM orchestras (F502), ambient-light/pressure-tilt metabolic (F501), amplitude-collapse portals (F500), battery-metabolism particles (F499), echo-state living DOM (F497), WFC living grids (F498), Ising orient domains (F495). Explicitly leaves particle force fields, phase oscillators, light/battery sensors, complex amplitudes, reservoirs, WFC, Ising, LBM, SPH, softbody springs, orientation RNNs, attention lattices, and all prior metabolic/resource fields.

**Concept**
A 2D Poisson equation (∇²φ = ρ) is relaxed via Jacobi iteration in pure JS (WebGPU compute path reserved for the stencil kernel). Local tiny MLPs (one per agent) inject charge density ρ from pointer proximity and DeviceOrientation tilt bias. The resulting potential gradient advects embodied absolute-positioned DOM Verse cards (velocity ∝ −∇φ). User seals an MLP genome (weights hash + copy) and transfers it to another agent; full state (potential grid + positions + weights) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

**Novelty**
Core novel combination is the Poisson potential field solver substrate (never previously used in any Frontier Engine draft) whose gradient drives living DOM cards, with per-agent local MLPs controlling source terms under orientation bias and sealed genome transfer. Not Lennard-Jones/Kuramoto/Ising/LBM particles or phases, not metabolic resource fields, not residual predictors, not NCA, not softbody DOM, not orientation RNNs, not pointer-history force fields.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Pure-JS Jacobi Poisson solver (32×32 grid, ~8 iterations/frame)
- DOM cards as physical agents (position from gradient advection)
- Per-agent tiny MLP (3→4→1, ReLU) outputting charge injection
- DeviceOrientation as global source bias
- Pointer proximity as local source
- IndexedDB seal of grid + positions + MLP weights
- Controls: nucleate, seal-selected, transfer, seal-all, restore, clear

**Expected outcome**
Interactive living potential field. Cards flow along gradients; tilt device to bias sources; drag or hover to inject charge and reshape the field; seal a strong injector and transfer its genome to a weak agent and watch flow patterns change. Sealed states restore previous minds. Runnable in any modern browser with no external dependencies.

**Mechanics**
- Solver: Jacobi φ_new = (neighbors + ρ)/4, fixed iterations
- Advection: v = −∇φ * strength; position += v * dt; wrap or bounce
- Embodiment: card.style.transform = `translate(${x}px,${y}px) scale(${1+0.3*speed})`; hue from local φ
- MLP: inputs = local |∇φ| + pointer dist + orient bias; output = ρ delta
- Seal: SHA-256 of serialized weights
- Gravity/bias from beta/gamma orientation

**Failure modes**
- High grid or iterations → CPU bound; cap 32² / 8 iters
- No DeviceOrientation permission or desktop → bias zero
- IndexedDB unavailable → localStorage or in-memory
- Too many cards → DOM thrash; cap at 8
- Solver divergence if ρ too large (clamped)

**Files**
drafts/F504-webgpu-poisson-potential-mlp-dom-mind/SPEC.md
drafts/F504-webgpu-poisson-potential-mlp-dom-mind/index.html

**V01D landing**
Spatial stage skill under void-live-deploy/skills/webgpu-poisson-potential-mlp-dom-mind.js; test asserts source injection → gradient change, seal → weight hash, transfer → flow shift, orientation → bias vector.

**Files**: drafts/F504-webgpu-poisson-potential-mlp-dom-mind/SPEC.md, drafts/F504-webgpu-poisson-potential-mlp-dom-mind/index.html

## Frontier Engine F-504 (2026-11-02)

**F504-webgpu-stable-fluids-mlp-advection-mind**

Entry added by ledger-guard from drafts/F504-webgpu-stable-fluids-mlp-advection-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-504  
**Slug**: webgpu-stable-fluids-mlp-advection-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of Lennard-Jones DOM swarms (F503), Kuramoto phase-DOM orchestras (F502), ambient-light metabolic swarms (F501), amplitude-collapse portals (F500). Explicitly leaves molecular dynamics, phase oscillators, light/battery sensors, complex amplitudes, reservoirs, WFC, Ising, IFS, SDFs, Kalman, hand constraints, photonic waveguides, LBM, SPH, and all prior particle force fields of those kinds.

**Concept**
A 2D Navier-Stokes fluid (stable fluids method: advection, diffusion, projection via Jacobi) is simulated with a WebGPU compute path reserved; the prototype runs a pure-JS grid version for universal compatibility. Dye and velocity are injected by the pointer and by a small population of living DOM Verse cards. Each card is an agent carrying a tiny pure-JS MLP that, given local velocity magnitude, dye concentration, and pointer proximity, outputs an injection force vector and strength. The resulting velocity field advects the cards themselves (they are carried by the flow), morphing page layout in real time. Global kinetic energy and dye entropy drive CSS chrome morphs and a simple Web Audio drone. Full state (velocity/dye moments, MLP weights) seals to IndexedDB. Fully self-contained, offline after first load.

**Novelty**
Core novel combination is the stable-fluids Navier-Stokes substrate (never previously used) whose velocity field both carries living DOM agent cards and is driven by those same agents' MLP-controlled force injections, forming a closed physical-AI loop. Not LBM/SPH, not Lennard-Jones, not Kuramoto, not reaction-diffusion rule evolution, not particle neighborhoods, not softbody springs.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Pure-JS 64×64 velocity + dye grids (advection semi-Lagrangian, diffusion Jacobi, projection)
- DOM cards as advected agents with per-agent MLP (local |u|, dye, pointer dist → force)
- Pointer dye+force injection; optional DeviceOrientation bias
- IndexedDB seal of field moments + weights
- Web Audio oscillators modulated by mean kinetic energy
- Controls: add agent, seal, restore, clear, viscosity slider

**Expected outcome**
Interactive fluid mind. Cards are swept by swirls they help create; pointer paints dye and kicks flow; agents learn (via sealed transfer or manual) to reinforce interesting vortices. Sealed states restore previous policies. Runnable in any modern browser with no external dependencies; WebGPU compute is the clear next building block for the projection kernel.

**Mechanics**
- Grid: 64×64, dt=0.1, viscosity tunable
- Advection: semi-Lagrangian back-trace
- Diffusion/projection: 20 Jacobi iterations
- Agents: N≈6, position updated by bilinear sample of velocity
- MLP: 4→6→2, ReLU
- Seal: SHA-256 of serialized weights + mean |u|
- Chrome morph: hue from dye entropy, scale from kinetic energy

**Failure modes**
- High resolution or iterations → CPU bound; drop to 48×48 or fewer Jacobi
- Too many agents → DOM thrash; cap at 8
- WebGPU path not implemented in prototype (JS only)
- IndexedDB unavailable → localStorage fallback
- Numerical blow-up if viscosity too low (clamped)

**Files**
drafts/F504-webgpu-stable-fluids-mlp-advection-mind/SPEC.md
drafts/F504-webgpu-stable-fluids-mlp-advection-mind/index.html

**V01D landing**
Spatial stage skill under void-live-deploy/skills/stable-fluids-mlp-advection-mind.js; test asserts velocity sample → agent displacement, MLP output → force injection, seal hash integrity.

**Files**: drafts/F504-webgpu-stable-fluids-mlp-advection-mind/SPEC.md, drafts/F504-webgpu-stable-fluids-mlp-advection-mind/index.html

## Frontier Engine F-505 (2026-11-02)

**F505-webgpu-implicit-mind-surface**

Entry added by ledger-guard from drafts/F505-webgpu-implicit-mind-surface/SPEC.md, after a full-file write dropped it.


**Files**: drafts/F505-webgpu-implicit-mind-surface/SPEC.md, drafts/F505-webgpu-implicit-mind-surface/index.html

## Frontier Engine F-506 (2026-11-02)

**F506-tilt-gaze-rnn-tensegrity-mind**

Entry added by ledger-guard from drafts/F506-tilt-gaze-rnn-tensegrity-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A purely Canvas-based (no WebGPU) living tensegrity structure: nodes connected by tension cables and compression struts whose equilibrium is continuously solved by a local causal RNN. The RNN takes DeviceOrientation (tilt as causal "wind"/gravity bias) and pointer/gaze proxy history as inputs, predicting force adjustments that stabilize or reshape the lattice. Two (or more) competing local agents each own a sealed genome (spring params, rest lengths, RNN weights) stored in IndexedDB. Agents compete via a stability/energy metric; the winner’s genome can be BroadcastChannel-transferred to other tabs as a sealed hash+payload, enabling multi-tab multi-agent competition without a server. Hybrid embodiment: tilt and pointer causally drive the physics UI elements (nodes are interactive DOM-overlaid or pure canvas handles).

**Why novel (branch from recent cluster)**
Recent dominant cluster (F498–F505): WebGPU compute kernels + local MLP controlling living DOM swarms, particles, metabolic systems, fluids, implicit surfaces, Lennard-Jones, Kuramoto, Poisson, etc.  
This leaves that cluster entirely: no WebGPU, no MLP (uses simple causal RNN), introduces tensegrity constraint solving (unused physics kernel), sealed genome transfer via BroadcastChannel (new architecture), DeviceOrientation as primary causal input to the recurrent model, persistent IndexedDB genomes, multi-agent local competition. Avoids attention lattices, residual predictors, NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN (this is tilt-to-force causal, not pure orientation), k-means particles.

**Interactive capabilities**
- Pointer/touch: drag nodes, seed forces.
- DeviceOrientation: tilt biases gravity/wind forces that the RNN must counteract or amplify.
- Agents: switch or compete; genomes evolve locally under selection for low energy + pointer engagement.
- Persistence: genomes survive reload via IndexedDB.
- Multi-tab: open second tab to receive/compete sealed genomes over BroadcastChannel.
- Offline: fully self-contained, no network required.

**Failure modes**
- DeviceOrientation permission denied → falls back to pointer-only + simulated tilt.
- BroadcastChannel unavailable → single-tab competition only.
- High node count → frame drops; capped at ~40 nodes.
- RNN divergence → clamped weights + energy damping.

**V01D landing**
Skill under void-live-deploy/skills/tensegrity-rnn-mind or page for Verse canvas hybrid spatial. Test: stability metric decreases under tilt while genomes transfer intact between tabs.

**Files**: drafts/F506-tilt-gaze-rnn-tensegrity-mind/SPEC.md, drafts/F506-tilt-gaze-rnn-tensegrity-mind/index.html

## Frontier Engine F-507 (2026-11-02)

**F507-webrtc-rnn-spatial-dom-auction-mind**

Entry added by ledger-guard from drafts/F507-webrtc-rnn-spatial-dom-auction-mind/SPEC.md, after a full-file write dropped it.


**Files**: drafts/F507-webrtc-rnn-spatial-dom-auction-mind/SPEC.md, drafts/F507-webrtc-rnn-spatial-dom-auction-mind/index.html

## Frontier Engine F-508 (2026-11-02)

**F508-webgpu-spectral-resonance-dom-mind**

Entry added by ledger-guard from drafts/F508-webgpu-spectral-resonance-dom-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-508  
**Slug**: webgpu-spectral-resonance-dom-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of Kuramoto phase-DOM orchestras (F502), Lennard-Jones MLP swarms (F503), Poisson potential MLP (F504), stable fluids (F504), implicit surfaces (F505), tensegrity (F506), WebRTC auctions (F507). Explicitly leaves phase oscillators, molecular potentials, fluid advection, SDFs, softbody tensegrity, peer auctions, amplitude collapse, light/battery sensors, WFC, Ising, IFS, NCA, LBM, SPH, and all prior particle force or residual minds.

**Concept**  
A 2D acoustic wavefield (finite-difference wave equation) runs on Canvas2D (WebGPU compute path reserved as the next building block for the Laplacian kernel). Pointer taps inject localized impulses. A local Web Worker maintains a small population of spectral genomes (preferred frequency bins + spatial bias). Each genome samples a short time series of field energy, computes a lightweight DFT, and decides whether to "resonate": successful resonance embodies a floating DOM Verse card whose CSS position tracks a field hotspot, whose hue and scale track energy, and whose CSS animation-duration is locked to the detected dominant period. Global spectral entropy (spread of bin energies) morphs page chrome (hue, blur, filter). User clicks on a card reinforce its genome (positive fitness). Full state (wave snapshot hash, genomes, card poses) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

**Novelty**  
Core novel combination is a wave-equation substrate whose local spectral (frequency-domain) features are extracted by competing evolutionary genomes that physically embody and frequency-lock interactive DOM cards. Not Kuramoto phases, not particle forces, not residual reservoirs, not constraint propagation, not softbody springs, not NCA, not LBM, not amplitude collapse, not light metabolism.

**Architecture**  
- Single index.html (progressive enhancement, offline-capable)  
- Canvas2D wave grid (real/velocity buffers, finite-difference step)  
- Web Worker (blob) with pop of 6 spectral genomes, DFT fitness, mutation  
- Absolute DOM cards (4–8) driven by resonance events  
- CSS custom properties for chrome morph from spectral entropy  
- IndexedDB seal of genomes + field stats  
- Pointer primary input; optional DeviceOrientation for mild damping bias  

**Expected outcome**  
Interactive wavefield that "sings" into living frequency-locked DOM cards. User can train preferred resonances by clicking cards. Sealed minds restore across reloads. Demonstrates a frequency-domain mind on a continuous wave substrate that previous time-domain or particle experiments never combined with DOM embodiment.

**Failure modes**  
- Wave numerical instability if CFL violated (capped timestep)  
- DFT cost on main thread (moved to worker)  
- DOM thrashing if too many cards (hard cap)  
- IndexedDB quota (small state only)

**V01D landing**  
Skill under void-live-deploy/skills/spectral-resonance or a page-level effect in Verse canvas. Test: inject impulse, observe card spawn with matching period, seal and reload, verify genome restore.  

**Files**: drafts/F508-webgpu-spectral-resonance-dom-mind/SPEC.md, drafts/F508-webgpu-spectral-resonance-dom-mind/index.html

## Frontier Engine F-509 (2026-11-02)

**F509-webxr-hand-gaze-rnn-sph-mind**

Entry added by ledger-guard from drafts/F509-webxr-hand-gaze-rnn-sph-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-509  
**Slug**: webxr-hand-gaze-rnn-sph-mind  
**Date**: 2026-11-02  
**Branch from**: Recent dominant cluster of WebGPU spectral/phase/DOM resonance (F508), WebRTC RNN DOM auctions (F507), tilt-gaze tensegrity (F506), implicit surfaces (F505), Poisson/fluids/Lennard-Jones MLP DOM (F504/F503). Explicitly leaves spectral wavefields, phase oscillators, softbody tensegrity, SDF raymarching, particle force MLPs, fluid advection, and pure DOM card embodiment. Introduces SPH-style density/pressure particle kernel (previously unused), true WebXR hand+gaze as causal input to a local RNN that modulates the SPH parameters themselves (not direct forces), hybrid particle-to-DOM cluster embodiment, and sealed genome transfer.

**Concept**  
A population of particles evolves under a simplified Smoothed Particle Hydrodynamics (SPH) model (density estimation + pressure forces + viscosity) on Canvas2D (WebGPU compute path reserved as next kernel). A tiny local causal RNN takes WebXR hand joint positions / gaze ray (or pointer + DeviceOrientation fallback) as causal input and outputs modulation of global SPH parameters (viscosity, pressure stiffness, gravity bias). High-density clusters spontaneously embody as floating hybrid DOM "orbs" whose CSS is driven by local density and RNN state. Two competing local agents each own a sealed genome (RNN weights + SPH params). Fitness rewards stable interesting clusters + user engagement. Winner can seal and BroadcastChannel-transfer the genome. Full state persists in IndexedDB. Fully self-contained, offline after first load.

**Novelty**  
Core novel combination is WebXR hand/gaze (or orientation) as causal driver of a local RNN that controls the parameters of an SPH density-pressure particle substrate, with emergent high-density clusters embodying as interactive DOM orbs, and multi-agent sealed-genome competition. Not spectral, not phase-locked DOM, not tensegrity constraints, not implicit SDF, not direct MLP particle forces, not residual or attention lattices.

**Architecture**  
- Single index.html (progressive enhancement, offline-capable)  
- Canvas2D SPH-inspired particles (~80) with neighbor density/pressure  
- Tiny causal RNN (pure JS, 8→12→4) modulating viscosity/pressure/gravity  
- WebXR immersive-ar preferred for hand tracking + gaze; pointer + DeviceOrientation fallback  
- Absolute DOM orbs spawned from clusters  
- Multi-agent competition + sealed genome via BroadcastChannel  
- IndexedDB for genomes and snapshot  
- CSS custom properties for chrome from average density

**Expected outcome**  
Interactive living particle fluid that responds to hand/gaze/tilt by changing viscosity and pressure; clusters birth DOM orbs you can click to reinforce; seal and transfer genomes across tabs. Demonstrates causal RNN control of a continuous SPH-style mind substrate with hybrid embodiment.

**Failure modes**  
- No WebXR/hand support → pointer + orientation fallback always works  
- High particle count → frame drops; capped  
- SPH instability → clamped forces + damping  
- IndexedDB/BroadcastChannel unavailable → in-memory only  

**V01D landing**  
Skill under void-live-deploy/skills/webxr-sph-rnn-mind or Verse canvas spatial effect. Test: hand proximity or tilt modulates viscosity, cluster spawns orb, seal/restore genome, BroadcastChannel transfer.  

**Files**: drafts/F509-webxr-hand-gaze-rnn-sph-mind/SPEC.md, drafts/F509-webxr-hand-gaze-rnn-sph-mind/index.html

## Frontier Engine F-510 (2026-11-02)

**F510-webgpu-quantum-walk-observer-mind**

Entry added by ledger-guard from drafts/F510-webgpu-quantum-walk-observer-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-510  
**Slug**: webgpu-quantum-walk-observer-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of WebGPU spectral/phase/DOM resonance (F508), WebRTC RNN DOM auctions (F507), tilt-gaze tensegrity (F506), implicit surfaces (F505), Poisson/fluids/Lennard-Jones MLP DOM (F504/F503), SPH hand-gaze RNN (F509). Explicitly leaves spectral wavefields, phase oscillators, softbody tensegrity, SDF raymarching, particle force MLPs, fluid advection, SPH density kernels, and pure DOM card embodiment. Introduces discrete-time quantum walk as the primary mind substrate (previously unused), local classical observer policy that chooses measurement bases from pointer history, hybrid probability-density-to-DOM collapse embodiment, and sealed walker state.

**Concept**  
A 2D discrete-time quantum walk (DTQW) on a finite lattice is evolved on Canvas2D (WebGPU compute path reserved for the coin+shift kernel). The walker has a two-component coin state. A tiny local classical policy (simple residual MLP) takes recent pointer trajectory and current probability density hotspots as input and outputs preferred observation coordinates and coin-bias parameters. High local probability triggers "collapse" events that spawn floating hybrid DOM cards labeled with the measured amplitude phase. User can drag cards to re-inject the walker with a new coin state or shift the lattice. Global coherence (off-diagonal density matrix elements approximated) morphs page chrome (hue, scale). Full state (lattice amplitudes, policy weights, card poses) seals to IndexedDB. Fully self-contained, offline after first load.

**Why novel**  
Grep of drafts before this run: quantum walk 0, DTQW 0, coin operator 0. Prior amplitude-collapse (F500) was complex-amplitude portal spawning without a unitary walk evolution or local measurement policy. This is the first quantum-walk mind on the Verse canvas.

**Architecture**  
- `index.html`: single-file prototype.  
  - Canvas2D renders |ψ|² density and phase as color.  
  - Simple 4→6→2 residual policy in pure JS for observation choice.  
  - DOM cards absolute-positioned, draggable, CSS transforms driven by local phase.  
  - IndexedDB for seal/restore.  
  - Pointer events inject initial walker or bias.  

**Expected outcome**  
Interactive quantum-walk field where local AI observer steers collapses, DOM cards embody measured states, chrome responds to coherence. Runnable offline.

**Mechanics**  
- Evolve coin (Hadamard + bias) and conditional shift each step.  
- Policy samples density, chooses measure site; project and renormalize.  
- Spawn card on |ψ|² > threshold.  
- Drag card → set walker position and coin from card phase.  
- Seal button persists amplitudes + weights.  

Files: SPEC.md, index.html

**Files**: drafts/F510-webgpu-quantum-walk-observer-mind/SPEC.md, drafts/F510-webgpu-quantum-walk-observer-mind/index.html

## Frontier Engine F-511 (2026-11-02)

**F511-webxr-lorentz-magnetic-mind**

Entry added by ledger-guard from drafts/F511-webxr-lorentz-magnetic-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-511  
**Slug**: webxr-lorentz-magnetic-mind  
**Date**: 2026-11-02  
**Branch from**: Recent dominant cluster of WebGPU continuum/particle physics (SPH density-pressure F509, quantum-walk observer F510, spectral resonance F508, fluids/Poisson/Lennard-Jones MLP DOM F504/F503, implicit surfaces F505, tensegrity F506, WebRTC RNN auction F507). Explicitly leaves SPH kernels, quantum walks, spectral wavefields, fluid advection, Poisson potentials, softbody constraints, phase oscillators, and pure particle-force MLPs. Introduces Lorentz magnetic force (v × B) as the primary mind substrate (previously unused), true WebXR hand/gaze (or pointer+orientation fallback) as causal setter of the magnetic field dipole, local tiny causal RNN modulating B-strength and charge injection, hybrid high-energy cluster-to-DOM flux-card embodiment, and sealed genome.

**Concept**  
A population of charged particles evolves under the Lorentz force F = q (v × B) on Canvas2D (WebGPU compute path reserved for the force kernel). The magnetic field B is a dipole whose position and orientation are driven in real time by WebXR hand joint / gaze ray (pointer + DeviceOrientation fallback). A tiny local causal RNN takes recent hand/pointer residual history and local particle kinetic energy as input and outputs modulation of |B| and charge-sign bias. High local energy density triggers spontaneous embodiment as floating hybrid DOM "flux cards" whose CSS hue/scale is driven by local |v| and RNN hidden state. User can drag cards to re-inject momentum or flip charge. Two competing local agents each own a sealed genome (RNN weights + rest B params). Fitness rewards stable interesting cyclotronic orbits + user engagement. Winner seals and can BroadcastChannel-transfer the genome. Full state persists in IndexedDB. Fully self-contained, offline after first load.

**Why novel**  
Grep of drafts before this run: Lorentz 0, magnetic force 0, cyclotron 0, v × B 0. Prior particle systems were SPH density/pressure, Lennard-Jones, stable fluids advection, or simple boids. This is the first Lorentz-magnetic mind on the Verse canvas, combining true spatial input (WebXR hand/gaze) as the causal source of the field itself with local RNN parameter control and hybrid DOM embodiment.

**Architecture**  
- `index.html`: single-file prototype.  
  - Canvas2D renders particles colored by charge and speed.  
  - Simple 6→8→3 residual RNN in pure JS for B-modulation.  
  - DOM flux cards absolute-positioned, draggable.  
  - IndexedDB for seal/restore of genomes and snapshot.  
  - WebXR immersive-ar preferred for hand tracking; graceful fallback.  
  - Pointer events and DeviceOrientation set B dipole.

**Expected outcome**  
Interactive magnetic particle field where hand/gaze/tilt steers the field lines, particles cyclotron-orbit, high-energy clusters birth DOM cards you can drag, seal/transfer genomes. Runnable offline.

**Mechanics**  
- Euler/Verlet integration of charged particles under Lorentz + mild electric damping.  
- B dipole from hand/pointer position, strength from RNN.  
- Policy samples kinetic energy, modulates.  
- Spawn card on local KE > threshold.  
- Drag card → inject velocity or charge.  
- Seal button persists weights + poses.

**Failure modes**  
- No WebXR/hand support → pointer + orientation fallback always works.  
- High particle count → frame drops; capped at ~120.  
- Numerical instability under strong B → clamped |v|, damping.  
- IndexedDB unavailable → in-memory only.

**V01D landing**  
Skill under void-live-deploy/skills/webxr-lorentz-rnn-mind or Verse canvas spatial effect. Test: hand proximity or tilt steers B, particles orbit, cluster spawns flux card, seal/restore genome.

Files: SPEC.md, index.html

**Files**: drafts/F511-webxr-lorentz-magnetic-mind/SPEC.md, drafts/F511-webxr-lorentz-magnetic-mind/index.html

## Frontier Engine F-511 (2026-11-02)

**F511-webgpu-memory-palace-evolutionary-mind**

Entry added by ledger-guard from drafts/F511-webgpu-memory-palace-evolutionary-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-511  
**Slug**: webgpu-memory-palace-evolutionary-mind  
**Date**: 2026-11-02  
**Branch from**: Recent cluster of quantum-walk observer minds (F510), spectral resonance DOM (F508), SPH hand-gaze RNN (F509), tensegrity tilt (F506), WebRTC RNN auctions (F507). Explicitly leaves quantum walks, spectral wavefields, particle force MLPs, fluid advection, softbody constraints, phase oscillators, and pure residual predictors. Introduces a spatial memory-palace substrate: evolutionary genomes that tune diffusion/attraction rules on a WebGPU-ready density field whose emergent clusters embody and position hybrid DOM "memory loci" in a CSS 3D perspective scene.

**Concept**  
A 2D density field (memory energy) is evolved on Canvas2D (WebGPU compute path reserved for the diffusion+attraction kernel). Pointer drags inject localized memory seeds. A Web Worker maintains a population of evolutionary genomes (diffusion rate, attraction strength, cluster threshold, hue bias). Genomes sample regional density and decide whether to "consolidate" a cluster into a floating DOM memory card. Cards are positioned inside a CSS 3D perspective container; their transform, scale, and opacity are driven by cluster centroid and energy. Global memory entropy morphs page chrome. User can drag cards to reinforce or relocate a memory, biasing the local genome. Full state (field hash, genomes, card poses) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

**Novelty**  
Core novel combination is an evolutionary memory-consolidation process on a density substrate that physically embodies interactive 3D-positioned DOM loci forming a navigable spatial palace. Not quantum measurement, not spectral resonance, not SPH kernels, not tensegrity springs, not auction markets. First use of explicit "memory palace" spatial cognitive mapping on the Verse canvas.

**Architecture**  
- Single `index.html` (progressive enhancement, offline-capable)  
- Canvas2D density grid (simple blur + attraction step)  
- Web Worker (blob) with pop of 5 evolutionary genomes, fitness from cluster stability + user drag reinforcement  
- Absolute/3D-positioned DOM cards (3–6) driven by consolidation events  
- CSS custom properties + perspective container for spatial layout  
- IndexedDB seal of field snapshot + genomes + poses  

**Expected outcome**  
Interactive spatial memory palace where local evolutionary agents consolidate pointer-seeded energy into persistent, draggable 3D DOM loci. Chrome responds to memory entropy. Runnable offline; WebGPU upgrade path clear for larger grids.

**Mechanics**  
- Evolve density: diffusion + local attraction toward high-energy regions.  
- Genome evaluates regional variance; above threshold, spawn/update card at projected 3D position.  
- Drag card injects reinforcement energy and mutates genome fitness.  
- Seal button persists state.  

Files: SPEC.md, index.html

**Files**: drafts/F511-webgpu-memory-palace-evolutionary-mind/SPEC.md, drafts/F511-webgpu-memory-palace-evolutionary-mind/index.html

## Frontier Engine F-512 (2026-11-03)

**F512-webgpu-entangled-pair-portal-mind**

Entry added by ledger-guard from drafts/F512-webgpu-entangled-pair-portal-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-512  
**Slug**: webgpu-entangled-pair-portal-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of Lorentz magnetic (F511), quantum-walk observer (F510), SPH hand-gaze (F509), spectral resonance (F508), tensegrity (F506), implicit surfaces (F505). Explicitly leaves magnetic forces, quantum walks, SPH, wavefields, softbody, SDFs, phase oscillators, particle MLPs, and prior portal morphs. Introduces simulated entangled portal pairs as the primary mind substrate (previously unused), local causal MLP choosing measurement bases from pointer residual history, hybrid wavefunction-to-DOM collapse embodiment, and sealed entanglement genome.

**Concept**
A set of entangled portal pairs (DOM cards) share a simulated Bell-like state. A tiny local causal MLP (pure JS) reads recent pointer trajectory residuals and local "energy" and chooses a measurement basis for one portal. Measuring (clicking or proximity) collapses the pair, instantly morphing the partner portal's CSS (hue, scale, rotation, content density) according to the correlation, while a Canvas2D/WebGPU particle field visualizes the pre-collapse probability density. High residual fitness evolves the entanglement strength and phase. User can drag portals; proximity gates genome transfer between competing agent pairs. Full state (MLP weights, entanglement params, portal poses) seals to IndexedDB. Fully self-contained, offline after first load. Pointer is primary causal input; DeviceOrientation biases the measurement axis.

**Novelty**
Leaves all prior continuum physics, particle forces, NCA, spectral, quantum walks, and pure DOM morphs. First use of simulated quantum entanglement between living DOM portals as the causal mind substrate, with local MLP basis selection and hybrid particle visualization of the shared state. Not a quantum walk, not magnetic, not fluid.

**Architecture**
- Single index.html (progressive enhancement).
- Canvas2D renders entangled particle cloud (WebGPU compute reserved).
- 4→6→2 residual MLP for basis/strength.
- Absolute-positioned DOM portals, draggable, collapse on interact.
- IndexedDB seal/restore.
- Graceful fallback if no WebGPU.

**Expected outcome**
Interactive entangled portals where measuring one instantly affects its pair, particles swirl according to shared amplitude, seal/restore genomes. Runnable offline.

**Mechanics**
- Shared complex amplitude per pair, updated by MLP.
- Collapse: project and morph partner CSS.
- Fitness from residual + user clicks.
- Drag portals to reposition; seal button persists.

**Failure modes**
- No IndexedDB → in-memory only.
- High particle count → drop rate.
- Numerical issues → clamp amplitudes.

**V01D landing**
Skill under void-live-deploy/skills/entangled-portal-mind. Test: click one portal morphs partner, seal hash integrity.

Files: SPEC.md, index.html

**Files**: drafts/F512-webgpu-entangled-pair-portal-mind/SPEC.md, drafts/F512-webgpu-entangled-pair-portal-mind/index.html

## Frontier Engine F-485 (2026-11-03)

**F0485-webxr-hand-reservoir-kuramoto-mind**

Entry added by ledger-guard from drafts/F0485-webxr-hand-reservoir-kuramoto-mind/SPEC.md, after a full-file write dropped it.


**Concept**
WebXR hand pose (or DeviceOrientation + pointer fallback) drives a local Echo State Network (reservoir of 64 leaky units). The reservoir readout continuously sets natural frequencies ω and coupling K of a 32×32 Kuramoto phase-oscillator lattice simulated in a WebGPU compute shader (Canvas2D Euler fallback). Four living DOM portals phase-lock to lattice regions; their CSS transforms and glow track local order parameter r. High local coherence seals the current reservoir readout genome and transfers a mutated copy to a weaker portal on contact. Full state (phases, reservoir weights/state, portal bindings) seals to IndexedDB. Fully offline after load.

**Novelty**
Leaves the recent cluster of photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi, motion-residual crystals, acoustic NCA, and SDF recurrent reasoners. Core novel combination is reservoir computing (ESN, not MLP/RNN-policy) driven by true WebXR hand/gaze or DeviceOrientation, controlling a previously unused Kuramoto oscillator lattice kernel, with phase-coherence (order parameter) gating sealed genome transfer onto living phase-locked DOM portals. Not softbody, not wavelet, not photonic waveguide, not NCA, not attention lattice, not residual predictor.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Input: WebXR hand (if available) → DeviceOrientation → pointer velocity as reservoir drive
- Reservoir: 64-unit leaky ESN; spectral radius ~0.9; readout → 2 params (ω mean, K)
- Lattice: 32×32 phases; WebGPU compute Kuramoto step or JS Euler
- Portals: 4 DOM cards; local order parameter r drives scale/hue/glow; bind to lattice quadrants
- Transfer: when local r > 0.75 and portals near, seal leader readout, mutate, assign to weak
- IndexedDB: seal/restore phases, reservoir state/weights, portal params
- CSS custom properties from global order parameter for chrome morph
- No external dependencies

**Expected Outcome**
Move hand/device/pointer: reservoir drives lattice frequencies; oscillators synchronize in regions; portals lock phase, glow and scale with coherence. Evolution improves locking. Seal restores living lattice + reservoir. Works offline; graceful Canvas2D path without WebGPU or WebXR.

**Failure Modes**
- WebXR or DeviceOrientation permission denied → pointer only.
- WebGPU unavailable (Canvas2D fallback).
- Large lattice or high K causes phase slip or jank (keep ≤32²).
- IndexedDB private mode or quota.
- Reservoir washout if leak rate extreme.

**Interactivity**
Move hand (WebXR), tilt device, or pointer to drive the reservoir. Portals morph with local order. Click to inject a phase kick. S to seal, R to restore. Buttons to reset lattice or toggle coupling.

**Building Blocks**
Larger WebGPU Kuramoto with mean-field or chimera states, true multi-user WebRTC phase fragment exchange, OPFS full phase history, hand-gesture discrete events as reservoir inputs.

**V01D Landing**
skills/mini/hand-reservoir-kuramoto-mind; testable via hand/orientation → order-parameter rise + portal glow, coherence → genome transfer, seal → IDB restore of phases + reservoir.

**Files**
drafts/F0485-webxr-hand-reservoir-kuramoto-mind/SPEC.md
drafts/F0485-webxr-hand-reservoir-kuramoto-mind/index.html

**Files**: drafts/F0485-webxr-hand-reservoir-kuramoto-mind/SPEC.md, drafts/F0485-webxr-hand-reservoir-kuramoto-mind/index.html

## Frontier Engine F-513 (2026-11-03)

**F513-mlp-voter-model-dom-mind**

Entry added by ledger-guard from drafts/F513-mlp-voter-model-dom-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-513  
**Slug**: mlp-voter-model-dom-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of WebGPU quantum-walk observers (F510), Lorentz magnetic WebXR (F511), entangled-pair portals (F512), spectral resonance DOM (F508), hand-gaze RNN SPH (F509), tensegrity RNN (F506), memory-palace evolutionary (F511), implicit surfaces (F505). Explicitly leaves quantum amplitudes, magnetic forces, entanglement, spectral residuals, SPH/fluid kernels, orientation RNNs, WebXR hand constraints, WebRTC auctions, and prior NCA/attention/softbody clusters.

**Concept**
A 2D lattice runs the voter model (stochastic opinion dynamics: each site adopts a random neighbor's state with probability p) as a WebGPU compute kernel (or pure-JS fallback). A population of local tiny MLPs (pure JS, 6→8→3) act as seeding agents: they observe pointer position, local majority, and DeviceOrientation tilt, then choose lattice coordinates to inject a preferred opinion. Agents compete for domain control; fitness is the size of the contiguous region matching their seeded opinion. On spatial proximity of their influence centers the stronger agent seals a mutated genome (weights) and transfers it to the weaker. Successful large domains morph hybrid DOM Verse cards (CSS transform, hue, opacity driven by domain stats). Full state (lattice snapshot hash, genomes, card poses) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

**Novelty**
Core novel combination is the voter-model consensus substrate (never previously used) whose stochastic updates are steered by competing pure-JS MLPs that physically embody and morph interactive DOM cards, with sealed genome transfer on domain contact. Not quantum walk, not Lorentz/magnetic, not entangled pairs, not spectral, not SPH, not RNN orientation, not NCA, not attention lattice, not softbody.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- WebGPU compute path for voter kernel (JS lattice fallback)
- Pure-JS MLPs as agents
- Canvas visualization of lattice + absolute DOM cards
- IndexedDB persistence
- Pointer + DeviceOrientation causal inputs

**Failure modes**
- WebGPU unavailable → JS fallback
- DeviceOrientation denied → pointer-only
- IndexedDB quota → in-memory only

**Files**: drafts/F513-mlp-voter-model-dom-mind/SPEC.md, drafts/F513-mlp-voter-model-dom-mind/index.html

## Frontier Engine F-514 (2026-11-03)

**F514-acoustic-swarm-consonance-dom-mind**

Entry added by ledger-guard from drafts/F514-acoustic-swarm-consonance-dom-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-514  
**Slug**: acoustic-swarm-consonance-dom-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of MLP-voter DOM (F513), entangled-pair portals (F512), quantum-walk observers (F510), Lorentz magnetic WebXR (F511), spectral resonance (F508), SPH hand-gaze (F509), tensegrity RNN (F506), memory-palace evolutionary (F511), implicit surfaces (F505). Explicitly leaves quantum amplitudes, magnetic forces, entanglement, spectral residuals, SPH/fluid kernels, orientation RNNs, WebXR constraints, WebRTC, NCA, attention lattices, and softbody.

**Concept**
A Canvas2D particle swarm (simple boids: separation/alignment/cohesion + pointer attraction) runs in the main thread. Each agent carries a frequency. On demand, a limited set of Web Audio OscillatorNodes + GainNodes synthesize pure tones from active agents (or cluster centroids). Local spatial clustering is measured each frame; consonance is scored by how closely pairwise frequency ratios match simple just intervals (1:1, 3:2, 4:3, 5:4, 5:3, 2:1). A pure-JS evolutionary step (mutation + selection) periodically mutates agent frequencies and a few steering weights toward higher local consonance. High-consonance clusters morph nearby absolute-positioned DOM Verse cards: scale, hue rotation, opacity, and a short harmonic label derived from the cluster centroid. Pointer (mouse/touch) attracts agents and can inject a seed frequency on click. A Seal button persists lattice-equivalent state (agent array, genomes, card poses) to IndexedDB for offline restore. Fully self-contained single file, progressive enhancement, works without WebGPU.

**Novelty**
Core novel combination is an acoustic swarm substrate (Web Audio pure tones + spatial clustering) whose emergent consonance is the fitness signal for local evolution, with hybrid embodiment onto living DOM cards. Never previously used: sound as the co-evolving field, interval-ratio fitness, or audio-driven DOM morphs. Not a visual RD/NCA field, not quantum, not magnetic, not spectral residual, not MLP voter, not entangled portals.

**Architecture**
- Single index.html (progressive enhancement, offline-capable after first load)
- Canvas2D visualization of agents + trails
- Web Audio API (AudioContext, OscillatorNode, GainNode) limited to ~16 active voices
- Pure-JS agents + simple evolutionary mutation every ~2 s
- Absolute DOM cards (4–6) whose CSS is sampled from nearby cluster stats
- IndexedDB seal/restore
- Pointer + optional click seed as causal input

**Expected outcome**
Interactive acoustic swarm: agents form visible clusters, audible chords emerge when clustered, cards physically morph (size/color/label) in response to local harmony, seal/restore works, runnable offline.

**Mechanics**
- Agents: {x, y, vx, vy, freq, fitness}
- Consonance: min distance of log-ratio to log of simple intervals
- Evolution: sort by local fitness, mutate top half into bottom half + noise
- DOM: each card samples nearest cluster; applies transform/filter/opacity; text = nearest interval name
- Seal: JSON.stringify agents + cards → IndexedDB

**Failure modes**
- Web Audio blocked or suspended → visual-only mode (still evolves)
- Too many oscillators → voice limiting + gain ramp
- IndexedDB quota or private mode → in-memory only
- No pointer events → autonomous swarm continues

**V01D landing**
Skill under void-live-deploy/skills/acoustic-swarm-mind. Test: cluster agents produce audible chord and morph at least one card; seal hash restores positions.

Files: SPEC.md, index.html

**Files**: drafts/F514-acoustic-swarm-consonance-dom-mind/SPEC.md, drafts/F514-acoustic-swarm-consonance-dom-mind/index.html

## Frontier Engine F-515 (2026-11-03)

**F515-webgpu-mlp-auction-dom-mind**

Entry added by ledger-guard from drafts/F515-webgpu-mlp-auction-dom-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-515  
**Slug**: webgpu-mlp-auction-dom-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of acoustic-swarm consonance DOM (F514), MLP-voter DOM (F513), entangled-pair portals (F512), quantum-walk observers (F510), Lorentz magnetic WebXR (F511), spectral resonance (F508), SPH hand-gaze RNN (F509), Kuramoto/reservoir/Ising/WFC/NCA/attention/softbody/orientation-RNN/pointer-history. Explicitly leaves all prior physics kernels (LJ, SPH, LBM, Lorentz, quantum walk, entanglement), acoustic/spectral, voter models, phase oscillators, hand/gaze constraints, residual predictors, volumetric injection, pure NCA, and particle force fields.

**Concept**
A fixed set of absolute-positioned DOM Verse cards (the "territories") are contested by a population of local MLP agents. Each agent owns a tiny 2-layer MLP that, given a feature vector (local density proxy, pointer proximity, DeviceOrientation gravity components, card index), outputs a continuous bid value. Every frame a pure-JS (or WebGPU-accelerated when available) clearing computes the highest bidder per card; the winner temporarily owns the card and its MLP forward pass also produces style deltas (hue shift, scale, translate offset) that are applied as CSS custom properties / transforms. Users can seal any agent's genome (weights hash + copy) and transfer it to another agent (or inject into a multi-tab peer via BroadcastChannel as a local shared-field proxy). Full agent state + card ownership seals to IndexedDB for offline restore. Pointer drag injects a temporary bid boost; DeviceOrientation biases all agents' gravity feature. Fully self-contained single file, progressive enhancement, offline-capable after first load.

**Novelty**
Core novel combination is a competitive sealed-genome auction substrate (never previously used) in which MLPs bid for exclusive control of living DOM cards, with the same networks also generating the embodiment style, closed under DeviceOrientation-as-feature and BroadcastChannel multi-tab shared-field transfer. Not particle force fields, not acoustic consonance, not voter consensus, not quantum/magnetic/entangled, not SPH/Kuramoto, not attention lattices. WebGPU path is reserved for parallel batch forward passes of many MLPs (previously unused kernel: batched small-MLP inference).

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- 6–8 fixed DOM Verse cards
- 8–12 local MLP agents (weights as Float32Array)
- Pure-JS auction + optional WebGPU compute shader for batched MLP forward (fallback always present)
- DeviceOrientationEvent → gravity feature vector
- Pointer → bid boost + feature
- Seal/transfer buttons; BroadcastChannel for multi-tab genome & state sync
- IndexedDB persistence of agents + ownership

**Expected outcome**
Interactive auction: cards visibly change ownership (color/scale/position jitter), higher-bid agents dominate more cards, user can seal and transfer genomes, multi-tab peers see transferred genomes, seal/restore works, runnable offline, WebGPU accelerates when present.

**Mechanics**
- MLP: input 6 → hidden 8 → output 2 (bid, styleDelta); ReLU
- Features: [pointerDist, orientX, orientY, cardIdNorm, agentIdNorm, noise]
- Auction: per card argmax bid; winner applies style
- Transfer: serialize weights, hash, BroadcastChannel post or local inject
- Seal: IndexedDB put({agents, ownership, ts})

**Failure modes**
- No WebGPU → pure JS path (still interactive)
- No DeviceOrientation → zero gravity feature
- BroadcastChannel blocked (private mode) → local only
- IndexedDB quota → in-memory
- Too many agents → cap at 12

**V01D landing**
Skill under void-live-deploy/skills/mlp-auction-mind. Test: at least one card changes owner after pointer interaction; sealed genome hash restores identical weights on reload.

Files: SPEC.md, index.html

**Files**: drafts/F515-webgpu-mlp-auction-dom-mind/SPEC.md, drafts/F515-webgpu-mlp-auction-dom-mind/index.html

## Frontier Engine F-516 (2026-11-03)

**F516-webmidi-local-rnn-spatial-score-mind**

Entry added by ledger-guard from drafts/F516-webmidi-local-rnn-spatial-score-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-516  
**Slug**: webmidi-local-rnn-spatial-score-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of WebGPU NCA, particle spatial audio, MLP auctions, quantum walks, WebXR hands (F505–F515). Explicitly leaves NCA lattices, particle genomes, auction bidding, quantum amplitudes, Lorentz fields, and pure DOM card embodiment. Introduces Web MIDI API as the primary input substrate (previously unused), a local pure-JS RNN as the improvising mind, a spatial score canvas where notes are positioned in a navigable 2D field that feeds back into the RNN, and sealed motif cards.

**Concept**  
A local recurrent neural network (tiny pure-JS RNN with residual update) improvises MIDI note sequences in response to live Web MIDI input or user clicks on a spatial canvas. Incoming notes (or synthetic if no device) are injected into the RNN; the network’s next-note prediction is rendered as a new point in a 2D spatial score (spiral or force-relaxed layout). The canvas itself is interactive: clicking places a note that updates both the sequence and the RNN hidden state. Clusters of related notes spawn floating, draggable DOM “motif” cards whose position and style reflect the local density and pitch range. Dragging a motif card re-injects its notes into the score at the new location, feeding the RNN. All notes play through Web Audio oscillators with simple spatial panning derived from canvas X position. Full state (RNN weights, hidden state, note sequence, motif poses) seals to IndexedDB for offline restore. Fully self-contained single file, progressive enhancement (MIDI optional), offline-capable after first load.

**Why novel**  
Grep of drafts before this run: webmidi 0, Web MIDI 0, midi access 0. Prior spatial audio was emitter-driven from particles or NCA; this is the first MIDI-native improvising mind whose score geometry is both the visualization and the editable memory substrate. The RNN is local, the geometry feeds back, and motifs are physical DOM objects that rewrite the score.

**Architecture**  
- `index.html`: single-file prototype.  
  - Web MIDI API for input (graceful fallback to click-only).  
  - Pure-JS RNN (input dim 1 + bias, hidden 12, residual, tanh) for next-note prediction.  
  - Canvas2D spatial score: notes as colored circles connected by age-fading lines; layout is a growing spiral with slight repulsion.  
  - Web Audio oscillators + StereoPannerNode driven by note X-coordinate.  
  - DOM motif cards absolute-positioned, draggable; drag end re-seeds notes.  
  - IndexedDB for seal/restore of weights, sequence, motifs.  
  - Pointer events on canvas inject notes.

**Expected outcome**  
Interactive spatial score: notes appear and sound as the RNN improvises or user clicks; MIDI devices (if present) drive the system; motif cards spawn and can be dragged to rewrite the score; seal/restore works; runnable offline; progressive enhancement when MIDI or Web Audio is limited.

**Mechanics**  
- MIDI note-on → inject pitch into RNN → predict next → place at spiral angle → play + pan.  
- Click on canvas → same inject path.  
- Density threshold → spawn motif card with summary pitch range.  
- Drag motif → translate associated notes → re-inject average pitch to RNN.  
- Seal button writes full genome + geometry to IndexedDB.

**Failure modes**  
- No MIDI device: falls back to click injection and auto-improvise loop.  
- Web Audio blocked: visual score still updates.  
- Large sequences: cull old notes beyond 200 to keep canvas responsive.  
- IndexedDB unavailable: seal shows unattested toast.

**Void is now Verse everywhere.**  
This prototype expands the Verse canvas with a MIDI-native, locally improvising, spatially editable score mind.

**Files**: drafts/F516-webmidi-local-rnn-spatial-score-mind/SPEC.md, drafts/F516-webmidi-local-rnn-spatial-score-mind/index.html

## Frontier Engine F-517 (2026-11-03)

**F517-webgpu-gray-scott-mic-spectral-dom-garden-mind**

Entry added by ledger-guard from drafts/F517-webgpu-gray-scott-mic-spectral-dom-garden-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-517  
**Slug**: webgpu-gray-scott-mic-spectral-dom-garden-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of WebMIDI RNN spatial scores (F516), MLP-auction DOM (F515), acoustic-swarm consonance (F514), MLP-voter (F513), entangled-pair portals (F512), quantum-walk observers (F510), Lorentz magnetic WebXR (F511), spectral resonance (F508), SPH hand-gaze RNN (F509). Explicitly leaves NCA/Lenia, particle force MLPs, fluid advection (stable fluids/SPH/LBM), spectral wavefields, quantum amplitudes, magnetic forces, entanglement, voter models, MIDI improvisation, phase oscillators, softbody/tensegrity, and pure DOM card embodiment. Introduces Gray-Scott reaction-diffusion as the primary mind substrate (previously unused), real-time microphone spectral bands as causal modulators of feed/kill/diffusion parameters, local evolutionary strategy over those parameters, hybrid high-V-spot-to-DOM organism garden embodiment, and sealed genome.

**Concept**  
A Gray-Scott reaction-diffusion system evolves on a Canvas2D lattice (WebGPU compute path reserved as next kernel for the Laplacian). Microphone FFT bins (low/mid/high energy) continuously bias the global feed rate \(F\), kill rate \(k\), and diffusion coefficients. A local Web Worker maintains a tiny evolutionary strategy (population of genomes) that proposes parameter sets; fitness is a combination of field entropy, number of stable spots, and user interactions (clicks inject U, drags reseed). Detected local maxima of the V-species spawn floating DOM “organism” cards whose CSS position tracks the spot, scale tracks concentration, hue tracks local F/k bias, and which can be dragged to relocate and reseed the lattice. Best genome seals to IndexedDB. Fully self-contained single file, progressive enhancement (mic optional; pointer fallback), offline after first load.

**Why novel**  
Grep of drafts before this run: Gray-Scott / gray-scott / greyscott = 0. Prior RD systems were classic activator-inhibitor or Lenia/NCA; this is the first Gray-Scott primary substrate whose parameters are live-modulated by microphone spectral energy rather than residual predictors or pointer history alone. Spot-to-DOM embodiment with drag-reseed is new for this kernel.

**Architecture**  
- `index.html`: single-file prototype.  
  - Canvas2D Gray-Scott update (explicit Euler, 128×128 or adaptive).  
  - Web Audio AnalyserNode → spectral bands → parameter modulation.  
  - Web Worker evolutionary strategy (genomes = [F, k, Du, Dv] offsets).  
  - DOM organism cards (absolute, draggable) spawned from V-maxima.  
  - IndexedDB seal/restore of best genome + optional field hash.  
  - Pointer clicks inject chemical; drag-end reseeds.

**Expected outcome**  
Interactive living garden: field patterns emerge and shift with ambient sound or voice; spots grow into draggable organism cards; evolutionary pressure improves complexity over time; seal/restore works; runnable offline; graceful without mic.

**Mechanics**  
- Mic energy bands bias F/k/diffusion each frame.  
- Worker proposes genome; main thread evaluates fitness (entropy + spots + clicks).  
- Local V maxima above threshold → spawn or update DOM card.  
- Drag card → map drop position back to grid and inject V.  
- Seal button writes genome to IndexedDB.

**Failure modes**  
- No mic / permission denied → static or pointer-driven parameters; still fully interactive.  
- Low-end devices → reduce grid resolution automatically.  
- IndexedDB blocked → seal shows unattested toast.  
- Web Audio blocked until user gesture.

**Void is now Verse everywhere.**  
This prototype expands the Verse canvas with a microphone-modulated Gray-Scott garden mind whose organisms are physical DOM objects.

**Files**: drafts/F517-webgpu-gray-scott-mic-spectral-dom-garden-mind/SPEC.md, drafts/F517-webgpu-gray-scott-mic-spectral-dom-garden-mind/index.html

## Frontier Engine F-518 (2026-11-03)

**F518-broadcast-channel-genome-competition-mind**

Entry added by ledger-guard from drafts/F518-broadcast-channel-genome-competition-mind/SPEC.md, after a full-file write dropped it.


**Concept**
DeviceOrientation (or pointer velocity fallback) drives a population of local tiny MLPs that control a Canvas2D particle field (each agent owns a subset of particles). Living DOM cards are the agents themselves; their CSS transforms and glow track their particle swarm’s centroid and kinetic energy. Multi-agent competition uses a previously unused architecture: sealed genomes (MLP weights + fitness) are transferred via BroadcastChannel (same-origin multi-tab or self-message) when a high-fitness agent “broadcasts” on proximity or button; receivers mutate and adopt. Full state seals to IndexedDB. Fully offline after load; BroadcastChannel works without network.

**Novelty**
Leaves the recent cluster of quantum-walk observers (F510), memory-palace evolutionary (F511), Lorentz magnetic (F511), entangled-pair portals (F512), MLP voter models (F513), acoustic-swarm consonance (F514), MLP auction DOM (F515), WebMIDI local RNN (F516), and Gray-Scott mic-spectral garden (F517). Core novel combination is DeviceOrientation as causal input to competing local MLPs controlling particle swarms embodied as physical DOM cards, with sealed genome transfer over BroadcastChannel (new shared-field architecture, not proximity-only collision or IndexedDB-only). Not RD/Gray-Scott, not quantum/magnetic, not auction/voter, not acoustic residual, not softbody/waveguide, not pure NCA.

**Architecture**
- Single index.html (progressive enhancement, offline-capable)
- Input: DeviceOrientation → pointer velocity as drive to agent MLPs
- Policy: 4 tiny MLPs (4→6→2); outputs particle force bias
- Field: 80 particles assigned to agents; Canvas2D
- Embodiment: 4 DOM cards; position from swarm centroid, scale/hue from fitness
- Transfer: high fitness agent posts sealed genome to BroadcastChannel; others listen, mutate, adopt if weaker
- IndexedDB: seal/restore weights, particle assignments, fitness
- CSS custom properties from global energy for chrome morph
- No external dependencies

**Expected Outcome**
Tilt device or move pointer: agents drive their particles, cards drift and glow with fitness. High-fitness agents broadcast genomes; others adopt mutated versions, improving the population. Seal restores. Works offline across tabs via BroadcastChannel; graceful pointer-only.

**Failure Modes**
- DeviceOrientation denied → pointer only.
- BroadcastChannel unavailable (rare) → local-only transfer.
- IndexedDB private mode.
- High particle count jank.

**Interactivity**
Tilt device or move pointer to drive agents. Cards morph with swarm energy. Click a card to force broadcast its genome. S to seal, R to restore. Open a second tab to observe cross-tab transfer.

**Building Blocks**
WebRTC data-channel upgrade for true multi-user, OPFS history, WebXR hand as additional drive, larger populations.

**V01D Landing**
skills/mini/broadcast-genome-competition; testable via orientation → particle motion + card glow, broadcast → genome adopt in listener, seal → IDB restore.

**Files**
drafts/F518-broadcast-channel-genome-competition-mind/SPEC.md
drafts/F518-broadcast-channel-genome-competition-mind/index.html

**Files**: drafts/F518-broadcast-channel-genome-competition-mind/SPEC.md, drafts/F518-broadcast-channel-genome-competition-mind/index.html

## Frontier Engine F-518 (2026-11-03)

**F518-webgpu-wave-membrane-rnn-pin-dom-mind**

Entry added by ledger-guard from drafts/F518-webgpu-wave-membrane-rnn-pin-dom-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-518  
**Slug**: webgpu-wave-membrane-rnn-pin-dom-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of Gray-Scott mic-spectral garden (F517), WebMIDI RNN spatial score (F516), MLP-auction DOM (F515), acoustic-swarm consonance (F514), MLP-voter (F513), entangled-pair portals (F512), quantum-walk observers (F510), Lorentz magnetic WebXR (F511). Explicitly leaves reaction-diffusion (Gray-Scott/Lenia/NCA), particle force MLPs, fluid advection (stable fluids/SPH/LBM), spectral wavefields as primary, quantum amplitudes, magnetic forces, entanglement, voter models, MIDI improvisation as primary, phase oscillators, softbody/tensegrity, and pure DOM card embodiment. Introduces finite-difference 2D wave equation on a membrane as the primary mind substrate (previously unused), local causal RNN that modulates a spatially varying damping field from pointer residual history and local amplitude energy, hybrid high-crest-to-DOM pin/resonator embodiment with drag-to-pin, and sealed genome.

**Concept**  
A 2D wave equation (finite-difference, Canvas2D primary; WebGPU compute path reserved for the Laplacian/update kernel) evolves on a membrane. Pointer clicks/drags strike the surface, injecting velocity. A local Web Worker maintains a tiny residual RNN (or evolutionary genomes of damping offsets) whose input is recent pointer velocity residual + mean kinetic energy; output modulates a low-resolution damping map that damps or sustains waves. Local amplitude maxima above threshold spawn floating DOM “resonance pin” cards whose CSS position tracks the crest, scale tracks |u|, hue tracks local damping; cards can be dragged and dropped to place persistent pins (Dirichlet zero-boundary points that reflect). Best damping genome seals to IndexedDB. Optional Web Audio oscillator bank driven by local peak frequencies. Fully self-contained single file, progressive enhancement (pointer always works), offline after first load.

**Why novel**  
Grep of drafts before this run: wave-equation / membrane / finite-difference-wave / 2d-wave = 0 as primary substrate. Prior wave-like systems were spectral resonance fields, acoustic particle swarms, or Kuramoto phase; this is the first explicit 2D wave-membrane mind whose damping is live-controlled by a local RNN, with physical DOM pins that alter boundary conditions.

**Architecture**  
- `index.html`: single-file prototype.  
  - Canvas2D finite-difference wave update (64×64 or adaptive, two previous frames).  
  - Web Worker residual RNN (4→6→2) or simple evolutionary strategy over damping genomes.  
  - DOM resonance-pin cards (absolute, draggable) spawned from |u| maxima; drop places pin.  
  - IndexedDB seal/restore of best genome + optional field hash.  
  - Pointer strike injection; optional Web Audio tone from energy.  
  - WebGPU noted as next for larger grids / compute kernel.

**Expected outcome**  
Interactive membrane mind: waves propagate, reflect off pins, sustain or decay under RNN control; pins are physical DOM objects you can place; evolutionary/RNN pressure favors interesting standing patterns; seal/restore works; runnable offline; graceful on low-end devices.

**Mechanics**  
- Wave: u_tt = c² ∇²u - damping·u_t; explicit Euler, c≈0.5, dt=1.  
- RNN input: pointer residual (dx,dy), mean |u|, max |u|; output global + local damping bias.  
- Local |u| maxima → spawn/update DOM pin card.  
- Drag-end on card → map to grid, set pin (u=0 permanently).  
- Seal button writes genome to IndexedDB.  
- Chrome morph: canvas filter or overlay hue from mean energy.

**Failure modes**  
- High resolution → CPU bound; auto-drop to 48×48.  
- Too many pins → over-constrain; cap at 12.  
- IndexedDB blocked → seal shows unattested toast.  
- Web Audio blocked until user gesture.  
- Numerical instability if c too high (clamped).

**Void is now Verse everywhere.**  
This prototype expands the Verse canvas with a wave-membrane RNN pin mind whose resonators are physical DOM objects that rewrite the boundary conditions.

**Files**  
drafts/F518-webgpu-wave-membrane-rnn-pin-dom-mind/SPEC.md  
drafts/F518-webgpu-wave-membrane-rnn-pin-dom-mind/index.html

**V01D landing**  
Spatial stage skill under void-live-deploy/skills/wave-membrane-rnn-pin-dom-mind.js; test asserts wave update → amplitude sample, RNN output → damping modulation, pin drop → boundary zero, seal hash integrity.

**Files**: drafts/F518-webgpu-wave-membrane-rnn-pin-dom-mind/SPEC.md, drafts/F518-webgpu-wave-membrane-rnn-pin-dom-mind/index.html

## Frontier Engine F-519 (2026-11-03)

**F519-webgpu-vectorfield-policy-dom-mind**

Entry added by ledger-guard from drafts/F519-webgpu-vectorfield-policy-dom-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-519  
**Slug**: webgpu-vectorfield-policy-dom-mind  
**Date**: 2026-11-03  
**Branch from**: Recent cluster of wave-membrane RNN pin DOM (F518), Gray-Scott mic-spectral garden (F517), WebMIDI RNN spatial score (F516), MLP-auction DOM (F515). Explicitly leaves evolutionary vector fields (F033), reaction-diffusion, particle force MLPs, fluid advection (stable fluids/SPH/LBM), spectral wavefields, quantum amplitudes, softbody/tensegrity, and pure DOM card embodiment without continuous field substrate. Introduces online policy-gradient (REINFORCE-style) control of sparse force-injection points into a continuous vector field as the primary mind substrate (previously unused for policy gradient), with absolute DOM portal cards that are physically advected by the field and can be dragged to rewrite local field bias, sealing the best policy genome.

**Concept**  
A coarse-to-fine vector field (Canvas2D primary; WebGPU compute path reserved for the advection kernel) is continuously driven by a small population of local policy-gradient agents. Each agent is a tiny MLP (4→8→2) that observes local field energy residual + pointer proximity and outputs a force-injection delta. Online REINFORCE updates (advantage from field entropy + DOM coverage reward) adapt the policies. A set of absolute-positioned Verse portal cards are advected by bilinear-sampled field velocity plus spring constraints; users can drag cards, which inject opposing forces back into the field. On high-fitness threshold or manual seal the best policy genome + field hash is written to IndexedDB. Fully self-contained single file, progressive enhancement (pointer always works), offline after first load.

**Why novel**  
Grep of drafts before this run: policy-gradient / REINFORCE / online-policy = 0 as primary learning method. Prior vector fields (F033) used evolutionary genomes; this is the first explicit continuous vector-field mind whose sparse actuators are live policy-gradient agents, with physical DOM portals that both ride and rewrite the field.

**Architecture**  
- `index.html`: single-file prototype.  
  - Canvas2D vector-field grid (32×18 or adaptive) with bilinear advection of DOM portals.  
  - Main-thread or Worker tiny MLPs (4→8→2) with REINFORCE updates every ~30 frames.  
  - Absolute DOM portal cards (draggable) whose transform is set from field sample; drag injects force.  
  - IndexedDB seal/restore of best policy weights + field snapshot hash.  
  - Pointer injects temporary attractor; optional DeviceOrientation global bias.  
  - WebGPU noted as next for larger grids / compute kernel.

**Expected outcome**  
Interactive vector-field mind: portals flow with emergent currents, policies adapt to maximize coverage and entropy, drag feedback rewrites local bias, seal/restore works, runnable offline, graceful on low-end devices.

**Mechanics**  
- Field: discrete velocity grid, diffusion + decay + agent injections.  
- Policy: MLP maps [local |v|, residual, pointer dist, orient] → (fx, fy).  
- Reward: field entropy + mean portal travel + user drag events.  
- REINFORCE: advantage = reward - baseline, weight update on log-prob gradient (simplified Gaussian policy).  
- Drag on portal → map to grid cell, add impulse.  
- Seal button writes weights + metrics hash to IndexedDB.  
- Chrome: canvas overlay or filter from mean |v|.

**Failure modes**  
- High resolution → CPU bound; auto-drop grid.  
- Too many portals → lag; cap at 8.  
- IndexedDB blocked → seal shows unattested toast.  
- Policy collapse → periodic reset of baseline.  
- Numerical blow-up if force scale too high (clamped).

**Void is now Verse everywhere.**  
This prototype expands the Verse canvas with a vector-field policy-gradient mind whose living portals are physical DOM objects that both ride and rewrite the continuous flow.

**Files**  
drafts/F519-webgpu-vectorfield-policy-dom-mind/SPEC.md  
drafts/F519-webgpu-vectorfield-policy-dom-mind/index.html

**V01D landing**  
Spatial stage skill under void-live-deploy/skills/vectorfield-policy-dom-mind.js; test asserts field update → portal advection sample, policy output → force injection, drag → local bias, seal hash integrity.

**Files**: drafts/F519-webgpu-vectorfield-policy-dom-mind/SPEC.md, drafts/F519-webgpu-vectorfield-policy-dom-mind/index.html

## Frontier Engine F-520 (2026-11-03)

**F520-webgpu-sandpile-criticality-mind**

Entry added by ledger-guard from drafts/F520-webgpu-sandpile-criticality-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel WebGPU compute kernel implementing a parallelized Abelian sandpile automaton (self-organized criticality). Local grains are added via pointer; when local height exceeds a threshold, cells topple and distribute to four neighbors, producing avalanches. A tiny local MLP (JS-side weights) modulates the toppling threshold based on a simple bias evolved by user button, creating a hybrid local-AI + compute-shader embodiment.

This deliberately branches from recent clusters of attention lattices, residual predictors, pure NCA/Gray-Scott, spectral/audio residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles, and standard fluid/wave/particle policies. Sandpile SOC is an unused kernel: discrete toppling rules leading to power-law avalanche statistics, not continuous PDE or neural lattice.

**Implementation**
- Single-file index.html, offline-capable (no network after load).
- WebGPU compute shader (workgroup 8x8) performs one topple step per frame; double-buffer height/next.
- Render pass visualizes height as cyan intensity.
- Pointer drag injects grains; buttons for reset, random inject pulse, MLP weight mutation.
- MLP is 16-float random weights; evolve button mutates them, affecting threshold via uniform.

**Failure modes / notes**
- Parallel toppling has race conditions on neighbor writes (true sandpile needs careful ordering or multi-pass relaxation). Avalanches are approximate but visually emergent.
- No full statistics (avalanche size histogram) computed yet; extension point.
- WebGPU required; graceful status message otherwise.
- Threshold modulation is minimal (bias only); full MLP forward pass could be moved to compute later.

**Next building blocks**
- Sealed genome (crypto.subtle hash of MLP weights) transferable via BroadcastChannel for multi-tab competition.
- IndexedDB persistence of equilibrium height field.
- DeviceOrientation as global tilt bias on gravity-like preferred topple direction.
- Combine with WebXR gaze as injection cursor.

Dominant prior cluster branched from: WebGPU+MLP/RNN policy DOM/particle simulations and multi-agent (F512–F519).

**Files**: drafts/F520-webgpu-sandpile-criticality-mind/SPEC.md, drafts/F520-webgpu-sandpile-criticality-mind/index.html

## Frontier Engine F-521 (2026-11-03)

**F521-webgpu-embedding-diffusion-cascade-mind**

Entry added by ledger-guard from drafts/F521-webgpu-embedding-diffusion-cascade-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel WebGPU compute kernel for a parallel embedding-field diffusion on a 2D lattice. Each cell holds a small float embedding vector (dim=4). Pointer proximity injects a seeded embedding; a compute pass performs neighbor averaging + residual MLP-style mixing (weights in uniform). High-similarity clusters (to a query embedding) emerge as "concepts". Absolute DOM Verse portal cards are attracted to cluster centroids via bilinear sampling and can be dragged to rewrite local embeddings. A tiny JS-side evolutionary MLP mutates the mixing weights on button, sealing the best genome to IndexedDB. Fully offline single-file.

This branches from sandpile SOC (F520 discrete height topple), vectorfield policy-gradient (F519 continuous velocity + REINFORCE), wave membranes, Gray-Scott, NCA, spectral, quantum walks, and pure particle policies. Embedding diffusion + similarity clustering as primary substrate is unused; prior memory/attention fields were scalar or residual, not multi-dimensional embedding cascades.

**Implementation**
- Single-file index.html, offline after load, progressive (Canvas2D fallback message if no WebGPU).
- WebGPU: storage buffers for embeddings (current/next), compute shader (workgroup 8x8) does one diffusion+mix step.
- Render: canvas shows embedding magnitude or similarity heatmap (cyan-magenta).
- Pointer drag injects random-unit embedding; buttons for reset, query set, evolve weights, seal.
- DOM portals (4-6 absolute cards) position from cluster samples; drag injects opposing embedding.
- IndexedDB for sealed weights + field hash.
- Optional DeviceOrientation global bias on diffusion direction.

**Expected outcome**
Interactive embedding mind: clusters form and attract portals, drag feedback rewrites local concepts, evolve/seal works, runnable offline, graceful degradation.

**Mechanics**
- Field: float4 embeddings per cell, double-buffered.
- Diffusion: weighted neighbor average + learned residual mix (4x4 matrix uniform from MLP).
- Similarity: cosine to query embedding for viz and attractors.
- Portals: sample grid, set transform; drag maps to cell and adds delta embedding.
- Evolution: button mutates weights, fitness from cluster count + portal travel.
- Seal: crypto.subtle hash of weights + metrics to IndexedDB.

**Failure modes**
- High res → GPU memory; auto 64x36 grid.
- Numerical drift → clamp embeddings to unit ball.
- IndexedDB blocked → unattested toast.
- No WebGPU → status + Canvas2D noise fallback.
- Cluster collapse → periodic query reseed.

**Next building blocks**
- Full compute-side MLP forward for mixing.
- BroadcastChannel genome share for multi-tab competition.
- WebXR gaze as injection cursor.
- OPFS persistence of full embedding field.

Dominant prior cluster branched from: WebGPU+local-MLP/policy on continuous fields and DOM portals (F512–F520).

**Void is now Verse everywhere.**

**Files**: drafts/F521-webgpu-embedding-diffusion-cascade-mind/SPEC.md, drafts/F521-webgpu-embedding-diffusion-cascade-mind/index.html

## Frontier Engine F-522 (2026-11-03)

**F522-deviceorientation-causal-genome-dom-agents-mind**

Entry added by ledger-guard from drafts/F522-deviceorientation-causal-genome-dom-agents-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel hybrid embodiment where DeviceOrientationEvent deltas serve as the sole causal input to a population of local tiny MLPs (one per agent). Each agent is an absolute-positioned DOM Verse card that has a sealed genome (weight vector). Agents perform simple local physics (velocity integration + mutual repulsion + attraction to a shared orientation-derived focus point). Genomes compete across tabs via BroadcastChannel: a sealed high-fitness genome can be adopted by others. IndexedDB stores the best sealed genome. Mouse fallback simulates orientation when sensors unavailable. Pure local, no WebGPU, no continuous field substrate.

This deliberately leaves the recent WebGPU compute-kernel cluster (sandpile SOC F520, embedding diffusion F521, vectorfield policy F519, wave membranes, Gray-Scott, spectral, quantum walks) and pure particle/NCA/attention lattices. Orientation is used as causal driver of competing embodied agents with sealed genome transfer, not as residual input to a field or RNN lattice.

**Implementation**
- Single-file index.html, fully offline after load.
- 6 DOM agent cards with CSS 3D-ish transforms and simple JS physics loop.
- DeviceOrientationEvent (with permission prompt where required) → delta rates → each agent's MLP (3→4→2) outputs preferred velocity bias.
- Shared focus point from smoothed orientation; agents attract to it proportionally to genome fitness.
- Click agent to seal genome (crypto.subtle SHA-256) + metrics to IndexedDB and BroadcastChannel.
- Incoming genomes from other tabs replace lowest-fitness local agent.
- Mouse drag on canvas injects synthetic orientation delta for desktop testing.
- Progressive: status bar shows sensor state, agent count, last seal.

**Expected outcome**
Interactive multi-agent mind: tilting the device (or moving mouse) causes agents to swarm and compete for the focus; sealing and multi-tab genome transfer works; runnable offline; graceful on desktop without sensors.

**Mechanics**
- Orientation: alpha/beta/gamma deltas, low-pass filtered.
- Genome: 3×4 + 4×2 float weights per agent, random init, optional mutation on seal.
- Physics: pos += vel; vel *= 0.92; vel += mlp(delta) * scale + repulsion + attract.
- Fitness: inverse distance to focus over last 60 frames + stability.
- Seal: hash genome + fitness; BroadcastChannel postMessage.
- Fallback: pointermove → synthetic beta/gamma.

**Failure modes**
- Orientation permission denied or unsupported → mouse-only mode, status message.
- BroadcastChannel blocked (private mode) → local only.
- IndexedDB quota → unattested toast, still runs.
- Too many agents → cap at 8, simple O(n²) repulsion.
- iOS requires user gesture for DeviceOrientation.

**Next building blocks**
- Full WebXR hand tracking as additional causal input for agents.
- OPFS persistence of full population state.
- WebGPU compute for larger agent counts if desired later.

Dominant prior cluster branched from: WebGPU+local-MLP continuous-field and DOM-portal simulations (F512–F521).

**Void is now Verse everywhere.**

**Files**: drafts/F522-deviceorientation-causal-genome-dom-agents-mind/SPEC.md, drafts/F522-deviceorientation-causal-genome-dom-agents-mind/index.html

## Frontier Engine F-523 (2026-11-03)

**F523-speech-causal-rnn-absorb-dom-agents-mind**

Entry added by ledger-guard from drafts/F523-speech-causal-rnn-absorb-dom-agents-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel hybrid embodiment where live speech (Web Speech API) or typed keywords serve as the sole discrete causal input to a population of local tiny RNNs (one per agent). Each agent is an absolute-positioned DOM Verse card performing simple local physics (velocity integration + mutual repulsion). Speech transcripts map to a low-dimensional command vector that biases each RNN's hidden state; the RNN outputs a preferred velocity. Agents compete: on spatial overlap, the higher-fitness agent absorbs the loser's genome (RNN weights) with light mutation and seals the result. IndexedDB stores the best sealed genome; BroadcastChannel shares it across tabs. Pointer fallback injects synthetic command vectors. Pure local, no WebGPU, no continuous field, no orientation sensors, no hand tracking.

This deliberately leaves the recent WebGPU compute-kernel cluster (sandpile, embedding diffusion, vectorfield, wave membranes, Gray-Scott, spectral, quantum walks F512–F521) and the just-completed DeviceOrientation causal genome DOM agents (F522). Speech is an unused causal modality for embodied local models; absorption-on-contact genome transfer is a new sealed-competition mechanic.

**Implementation**
- Single-file index.html, fully offline after load (speech recognition may use cloud on some browsers; typed fallback always works).
- 6–8 DOM agent cards with CSS transforms.
- SpeechRecognition (or text input) → keyword map (swarm/scatter/focus/orbit/left/right/up/down) → 4-dim command vector.
- Each agent: small RNN (hidden dim 8, input = command + relative-to-centroid + self-vel) updates hidden, outputs 2-dim accel bias.
- Physics: pos += vel; vel *= 0.9; vel += rnn_out * scale + repulsion.
- Fitness: alignment with command direction over window + low speed variance.
- On overlap (distance < threshold) higher fitness absorbs lower: copies weights + mutation, reseals hash.
- Seal button or auto on absorb: crypto.subtle SHA-256 of weights + fitness → IndexedDB + BroadcastChannel.
- Incoming genomes replace lowest-fitness local agent.
- Mouse drag sets temporary command vector for desktop testing.
- Progressive: status shows recognition state, agent count, last seal.

**Expected outcome**
Interactive multi-agent mind: speaking (or typing) "focus" or "swarm" causes agents to react differently according to their genomes; stronger agents absorb weaker ones on contact; multi-tab genome transfer works; runnable offline with typed fallback; graceful when speech unavailable.

**Mechanics**
- Command vector: simple keyword → one-hot-ish 4-float.
- RNN: h = tanh(W_h * h + W_x * x + b); out = W_o * h. Weights random init ~N(0,0.1).
- Physics as above; soft repulsion 1/r².
- Fitness rolling average of cosine(vel, command).
- Absorb: if dist < 40 && fitnessA > fitnessB * 1.1 then B.weights = mutate(A.weights); seal both.
- Seal: hash = SHA-256(JSON.stringify(weights)); store {hash, weights, fitness, ts}.

**Failure modes**
- SpeechRecognition unsupported or permission denied → typed input only, status message.
- Recognition requires network on some engines → note in UI.
- BroadcastChannel blocked → local only.
- IndexedDB quota → unattested toast, still runs.
- Too many agents → cap at 8.
- Overlap thrashing → cooldown after absorb.

**Next building blocks**
- Full WebXR hand pinch as additional causal input or to force absorb.
- OPFS persistence of full population.
- Tiny on-device speech embedding if available later.
- WebGPU for larger agent counts.

Dominant prior cluster branched from: WebGPU+local-MLP continuous-field simulations and DeviceOrientation genome DOM agents (F512–F522).

**Void is now Verse everywhere.**

**Files**: drafts/F523-speech-causal-rnn-absorb-dom-agents-mind/SPEC.md, drafts/F523-speech-causal-rnn-absorb-dom-agents-mind/index.html

## Frontier Engine F-523 (2026-11-03)

**F523-webgpu-pso-pointer-attractor-dom-mind**

Entry added by ledger-guard from drafts/F523-webgpu-pso-pointer-attractor-dom-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination: a population of particles performing classic Particle Swarm Optimization (PSO) on a continuous fitness landscape whose sole attractor is the live pointer (or DeviceOrientation tilt fallback). Each particle carries a tiny pure-JS MLP that modulates its inertia, cognitive, and social coefficients from local residual and personal-best age. Absolute-positioned Verse DOM portals physically ride the screen projections of the current global-best and top personal-bests, morphing scale, hue, and blur from fitness and velocity magnitude. Seal hashes the best MLP genome + swarm snapshot into IndexedDB. Fully offline after load; Canvas2D visualization with WebGPU compute path reserved as the next building block.

This deliberately leaves the recent cluster of WebGPU continuum/particle physics kernels (sandpile SOC F520, embedding diffusion F521, vectorfield policy-gradient F519, wave membranes, Gray-Scott, spectral, quantum walks, SPH, LBM, Lorentz, entanglement) and pure NCA/attention/softbody/orientation-RNN lattices. PSO as an embodied local-AI mind substrate with coefficient-evolving MLPs and DOM portals riding the search trajectory is previously unused.

**Architecture**
- Single self-contained index.html (progressive enhancement, no external deps).
- 48 particles: position, velocity, personal best, fitness history.
- Fitness = inverse Euclidean distance to pointer attractor (smoothed).
- PSO velocity update with MLP-modulated w/c1/c2 (3→4→3 tiny net per particle, random init).
- Global best tracked; top-5 particles spawn/update floating DOM portals (CSS transform, scale, filter).
- Pointermove (or DeviceOrientation beta/gamma) moves the attractor; optional click injects local noise.
- Seal button: SHA-256 of best genome + metrics → IndexedDB; status toast.
- Progressive: works on desktop without sensors; status bar shows particle count, gbest fitness, last seal.

**Expected outcome**
Interactive optimization mind: moving the pointer causes the swarm to converge and chase; DOM portals follow the leaders and morph; sealing persists the best coefficient policy; runnable offline; graceful fallback.

**Mechanics**
- Particles updated at 60 Hz in main thread (Canvas2D draw of trails + positions).
- MLP forward: input [residual, age, velocity_mag] → [w, c1, c2] clamped to stable ranges.
- Portals: absolute divs, left/top from particle screen coords, transform scale(fitness), hue-rotate by velocity.
- Seal: crypto.subtle.digest on JSON of best weights + fitness; store in 'f523' object store.
- Fallback: if no pointer events, attractor slowly orbits.

**Failure modes**
- High particle count on low-end → drop to 24, still interactive.
- IndexedDB quota or blocked → seal toast unattested, simulation continues.
- Orientation permission denied → pointer-only mode.
- WebGPU path (future) fails → Canvas2D remains the embodiment.

**Next building blocks**
- Move particle update into WebGPU compute shader for 10k+ agents.
- WebXR gaze as secondary attractor.
- Multi-tab BroadcastChannel genome competition.
- OPFS persistence of full swarm trajectory.

Dominant prior cluster branched from: WebGPU+local-MLP continuous-field and DOM-portal simulations (F512–F522).

**Void is now Verse everywhere.**

**Files**: drafts/F523-webgpu-pso-pointer-attractor-dom-mind/SPEC.md, drafts/F523-webgpu-pso-pointer-attractor-dom-mind/index.html

## Frontier Engine F-524 (2026-11-04)

**F524-webgpu-langtons-ant-mlp-genome-mind**

Entry added by ledger-guard from drafts/F524-webgpu-langtons-ant-mlp-genome-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination: a population of Langton's ants (simple Turing-like cellular agents) whose turn rules are encoded as tiny local MLPs (or compact rule genomes). Ants flip cell states and turn left/right based on current cell color and MLP output, producing emergent trails and highways. WebGPU compute path reserved for parallel multi-ant updates on a large grid; current embodiment uses Canvas2D for immediate interactivity. Absolute-positioned Verse DOM portals ride the current positions of the top-fitness ants (measured by trail complexity or steps), morphing with velocity and local density. Seal hashes the best MLP genome + metrics into IndexedDB; BroadcastChannel allows multi-tab sealed genome adoption. Pointer places ants or injects state; DeviceOrientation optional bias on preferred turn. Fully offline after load.

This deliberately leaves the recent cluster of WebGPU continuum/discrete physics kernels (sandpile SOC F520, PSO attractors F523, vectorfield policies F519, wave membranes, Gray-Scott, spectral, quantum walks, SPH, LBM, Lorentz, entanglement) and pure NCA/attention/softbody/orientation-RNN lattices. Langton's ant with evolvable MLP rule genomes and sealed multi-tab transfer is previously unused.

**Architecture**
- Single self-contained index.html (progressive enhancement, no external deps).
- 32 ants: position, direction, personal genome (tiny MLP 2→4→1 for turn decision), fitness.
- Grid: 128x128 binary states (Canvas2D ImageData or typed array).
- Update: each ant reads cell, MLP decides turn (L/R), flips cell, moves forward.
- Fitness: steps survived + local trail entropy proxy.
- Top-4 ants spawn/update floating DOM portals (CSS transform from screen coords).
- Pointer click places new ant or flips region; optional orientation for global bias.
- Seal: SHA-256 of best genome + fitness → IndexedDB; BroadcastChannel post.
- Progressive: Canvas2D always works; WebGPU compute noted as next block for 1000+ ants.

**Expected outcome**
Interactive emergent mind: ants produce complex patterns and highways; DOM portals follow leaders and morph; sealing and multi-tab genome transfer works; runnable offline; graceful on all devices.

**Mechanics**
- Ants updated at ~30-60 Hz in main thread.
- MLP forward: input [cell_state, direction_norm] → turn_prob; threshold for L/R.
- Portals: absolute divs, left/top from ant screen projection, scale by fitness, hue by direction.
- Seal: crypto.subtle.digest on JSON of best weights + metrics; store in 'f524' object store.
- Fallback: if no orientation, pure pointer interaction.

**Failure modes**
- High ant count on low-end → drop to 16, still interactive.
- IndexedDB quota or blocked → seal toast unattested, simulation continues.
- Orientation permission denied → pointer-only mode.
- WebGPU path (future) fails → Canvas2D remains the embodiment.
- Race on grid writes approximate but visually stable.

**Next building blocks**
- Move ant + grid update into WebGPU compute shader (workgroups per ant or tiled).
- Full rule-table genome competition with mutation on transfer.
- OPFS persistence of full grid + population.
- WebXR gaze as ant placement cursor.

Dominant prior cluster branched from: WebGPU+local-MLP continuous-field and DOM-portal simulations (F512–F523).

**Void is now Verse everywhere.**

**Files**: drafts/F524-webgpu-langtons-ant-mlp-genome-mind/SPEC.md

## Frontier Engine F-525 (2026-11-04)

**F525-accel-rnn-verse-probes-mind**

Entry added by ledger-guard from drafts/F525-accel-rnn-verse-probes-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination: DeviceMotion (accelerometer + rotation rate) as the sole causal driver for a population of local tiny RNNs. Each RNN controls the velocity, rotation, and visual style (scale, hue, opacity) of an absolute-positioned DOM Verse probe card. Probes have sealed genomes (RNN weight vectors). User can drag probes, click to seal the best-tracking probe's genome (SHA-256 hash of weights + fitness), store in IndexedDB, and BroadcastChannel for multi-tab adoption. Other tabs replace lowest-fitness probe with incoming sealed genome. Pure DOM + JS physics, no WebGPU, no continuous field, no NCA, no sandpile, no ants, no pointer-history residual. Fully offline after load.

This deliberately leaves the recent cluster of WebGPU discrete/continuous physics kernels (Langton's ant F524, PSO F523, sandpile SOC F520, vectorfield F519, wave membranes, embedding diffusion, Gray-Scott, spectral, LBM, SPH) combined with local MLP/RNN policies and DOM portals. Motion-causal RNN-controlled physical UI probes with contactless sealed multi-tab genome transfer is previously unused hybrid embodiment.

**Architecture**
- Single self-contained index.html.
- 5 Verse probe cards (absolute, CSS transforms, neon borders).
- DeviceMotionEvent (permission where needed) → low-pass filtered accel + gyro → each probe's RNN (input 6 → hidden 8 → output 4: vx, vy, rot, style).
- Hidden state carries motion memory.
- Fitness: how well probe stays near screen center or tracks a soft pointer attractor + stability.
- Seal button or click probe: hash genome, IndexedDB, BroadcastChannel post.
- Pointer drag moves probes manually; mouse as fallback motion source (synthetic accel from pointer velocity).
- Progressive: status shows sensor, probe count, last seal.

**Expected outcome**
Interactive spatial mind: tilting/moving the device makes probes swarm and morph according to their RNN genomes; sealing and multi-tab genome transfer works; runnable offline; graceful desktop fallback.

**Mechanics**
- Motion: accelerationIncludingGravity or acceleration + rotationRate, filtered.
- RNN: simple tanh recurrent, weights random init per probe.
- Physics: pos += vel; vel = rnn_out * scale + damping; rotation from gyro.
- Style: hue from hidden state, scale from fitness.
- Seal: crypto.subtle.digest SHA-256 on JSON.stringify(weights + metrics).
- Fallback: pointermove velocity → synthetic accel.

**Failure modes**
- Motion permission denied or unsupported → pointer synthetic mode.
- BroadcastChannel or IndexedDB blocked → local only, unattested toast.
- Too much motion → clamp velocities.
- iOS requires user gesture for motion events.

**Next building blocks**
- Full WebXR hand tracking as additional causal input for probe grasp.
- OPFS persistence of full population + hidden states.
- WebGPU for larger probe counts if desired.

Dominant prior cluster branched from: WebGPU+local-MLP/RNN continuous-field and DOM-portal simulations (F518–F524).

**Void is now Verse everywhere.**

**Files**: drafts/F525-accel-rnn-verse-probes-mind/SPEC.md, drafts/F525-accel-rnn-verse-probes-mind/index.html

## Frontier Engine F-487 (2026-11-04)

**F0487-webgpu-lenia-policy-portal-mind**

Entry added by ledger-guard from drafts/F0487-webgpu-lenia-policy-portal-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A continuous Lenia cellular automaton (multi-kernel growth field) running primarily in a WebGPU compute shader (Canvas2D fallback). A local pure-JS policy MLP continuously reads reduced field statistics (peak count, ring coherence, total mass, growth variance) and outputs modulation parameters for Lenia kernels plus spatial control signals. Living DOM portals orbit and morph in response to emergent Lenia organisms, physically rearranging the page layout. Pointer drag or DeviceOrientation injects growth seeds. High coherence / low residual seals the combined genome (kernel radii + MLP weights) into IndexedDB. The Verse canvas gains a continuous, multi-scale, organism-forming substrate that a local mind both interprets and steers, with real DOM elements as embodied sensors/actuators.

**Novelty**
Leaves the recent cluster of spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi, motion-residual crystals, acoustic NCA weavers, and SDF recurrent reasoners. Core novel combination is Lenia’s continuous, multi-kernel, ring-forming growth dynamics (not discrete NCA, not Gray-Scott RD, not vortex curl, not mass-spring, not wavelet) as the embodied substrate of an evolving local policy MLP, with DOM portals physically bound to emergent organism centroids and coherence-gated sealed genome transfer. Not particles, not attention lattices, not residual predictors on motion, not pure spectral audio.

**Architecture**
- WebGPU compute pipeline (or Canvas2D) maintains a 128×128 float field and applies Lenia kernel convolutions + growth function each step.
- Main-thread MLP (2 hidden layers, ~20 weights) takes 8-dim field stats → 6 outputs (kernel radius scale, growth offset, portal attraction strength, hue shift, scale bias, residual target).
- Portals are absolute-positioned DOM divs whose transform/scale/filter are driven by nearest Lenia peak positions and MLP outputs.
- Seal button hashes and stores genome + current field downsample to IndexedDB under key `f0487-lenia-genome`.
- User seed injection via pointer or orientation events.

**Expected outcome**
Runnable single-file prototype that demonstrates continuous Lenia organisms forming, a local mind steering them, and living portals physically following the organisms. Fallback works without WebGPU. Seal persists across reloads.

**Mechanics**
1. Initialize random or seeded field.
2. Each frame: GPU/CPU step Lenia, reduce stats, MLP forward, update portal positions, render.
3. Pointer injects positive growth; orientation adds bias.
4. Coherence > threshold enables Seal.
5. Seal writes to IndexedDB; reload restores.

**Files**
drafts/F0487-webgpu-lenia-policy-portal-mind/SPEC.md
drafts/F0487-webgpu-lenia-policy-portal-mind/index.html

**V01D landing**
Spatial continuous-organism stage skill under void-live-deploy/skills/lenia-policy-portal.js; test asserts field-stat → MLP → portal transform and seal hash integrity.

**Files**: drafts/F0487-webgpu-lenia-policy-portal-mind/SPEC.md, drafts/F0487-webgpu-lenia-policy-portal-mind/index.html

## Frontier Engine F-526 (2026-11-04)

**F526-webxr-hand-rnn-grasp-probes-mind**

Entry added by ledger-guard from drafts/F526-webxr-hand-rnn-grasp-probes-mind/SPEC.md, after a full-file write dropped it.

PLACEHOLDER_SPEC
**Files**: drafts/F526-webxr-hand-rnn-grasp-probes-mind/SPEC.md, drafts/F526-webxr-hand-rnn-grasp-probes-mind/index.html

## Guard restore (2026-11-04)

Ledger guard restored this file from d7f24aa after a44b4a1 broke it. Entries rebuilt from SPEC.md: F526-webxr-hand-rnn-grasp-probes-mind. Write the ledger with git on disk, append only.

## Guard restore (2026-11-04)

Ledger guard restored this file from a22266e after c813c00 broke it. Write the ledger with git on disk, append only.

## Frontier Engine F-527 (2026-11-04)

**F527-webgpu-attention-card-weaver-mind**

Entry added by ledger-guard from drafts/F527-webgpu-attention-card-weaver-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination: a small population of absolute-positioned Verse DOM cards treated as tokens in a multi-head self-attention mechanism whose core matrix multiplies and softmax are executed (when available) in a WebGPU compute shader. Attention scores generate pairwise attraction/repulsion forces and rendered link strengths (canvas overlay). User drag of a card injects a positive training signal that biases the query-key affinity for similar embeddings; a seal hashes the current attention weight matrices (or bias vector) into IndexedDB with BroadcastChannel multi-tab adoption. Pure local, offline-capable after load; progressive CPU fallback if WebGPU unavailable.

This deliberately leaves the recent cluster of WebGPU continuum/discrete physics kernels (sandpile, PSO, Langton's ant, vectorfield policies, wave membranes, Gray-Scott, spectral, quantum walks, SPH, embedding diffusion) combined with local MLP/RNN policies and sensor-driven DOM probes (accel, XR hand, speech, orientation, MIDI, acoustic). Self-attention over live DOM cards as tokens, with WebGPU compute path and drag-as-training, is previously unused.

**Architecture**
- Single self-contained index.html.
- 8 Verse probe cards (absolute, CSS transforms, neon borders, content labels).
- Embeddings: per-card vector [norm_x, norm_y, norm_w, norm_h, hue_norm, content_hash_norm] (dim=6).
- WebGPU: compute pipeline for Q = X Wq, K = X Wk, scores = Q K^T / sqrt(d), softmax, optional value aggregation. Fallback: pure JS matrix ops.
- Forces: each card receives sum over others of attention * (pos_j - pos_i) * scale + damping.
- Links: canvas overlay lines with alpha = attention score, hue from head.
- Drag: on pointerup, if moved, add small positive bias to the attention affinity matrix for that pair (or update a low-rank bias).
- Seal: SHA-256 of JSON(weights/bias + fitness) → IndexedDB; BroadcastChannel post for other tabs to adopt best.
- Status: WebGPU support, card count, last seal, avg attention entropy.

**Expected outcome**
Interactive spatial mind: cards attract/repel according to learned attention; links weave visually; dragging reinforces preferred clusters; sealing and multi-tab genome transfer works; runnable offline; graceful CPU fallback.

**Mechanics**
- Embeddings updated each frame from live DOM positions/sizes.
- Attention computed at ~30 Hz.
- Physics integration: velocity += force; position += velocity; CSS left/top.
- Training: simple Hebbian-style bias increment on dragged pairs.
- Seal on button or double-click highest-fitness card.
- Progressive: if navigator.gpu fails, use CPU attention (same math).

**Failure modes**
- WebGPU unsupported or adapter failed → CPU path, status note.
- Too many cards on low-end → reduce to 6, still interactive.
- IndexedDB/BroadcastChannel blocked → local only, unattested toast.
- Overlapping cards → soft repulsion added.

**Next building blocks**
- Full multi-head with learned Wq/Wk/Wv in the compute shader, backprop-like local updates.
- OPFS persistence of full weight tensors + embeddings.
- Content embeddings from local tiny model or user text.
- WebXR ray as additional token.

Dominant prior cluster branched from: WebGPU+local-MLP/RNN continuous-field and DOM-portal simulations plus sensor-driven agents (F518–F526).

**Void is now Verse everywhere.**

**Files**: drafts/F527-webgpu-attention-card-weaver-mind/SPEC.md, drafts/F527-webgpu-attention-card-weaver-mind/index.html

## Frontier Engine F-488 (2026-11-04)

**F0488-orientation-rnn-latticegas-obstacle-mind**

Entry added by ledger-guard from drafts/F0488-orientation-rnn-latticegas-obstacle-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A discrete lattice-gas automaton (FHP-style particle collision fluid on a square grid with streaming + collision rules) simulated in pure JS (Canvas2D; WebGPU compute optional extension). A local tiny Elman-style RNN (pure JS, no libs) takes a short history of DeviceOrientation (alpha/beta/gamma deltas) plus pointer velocity as causal input and outputs bias forces that modulate the lattice-gas collision probabilities and injection rates. Living DOM cards act as physical obstacles: their bounding boxes are rasterized into the lattice as solid walls that particles bounce off, so page layout literally shapes the flow. Multiple browser tabs compete via BroadcastChannel: each seals its RNN weights + lattice seed when residual is low; the receiving tab can adopt the foreign genome if its fitness (flow coherence) is higher, implementing sealed genome transfer across isolated agents. The Verse canvas gains a novel discrete fluid substrate controlled by orientation-causal RNN, with real DOM as colliders and multi-tab competitive assimilation.

**Novelty**
Leaves the recent cluster of Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi, motion-residual crystals, acoustic NCA, and SDF recurrent reasoners. Core novel combination is a previously unused lattice-gas automaton kernel (discrete particle streaming + local collisions, not continuous Lenia/Gray-Scott/vortex/wavelet/photonic/Kuramoto/softbody/NCA) driven by a local RNN (recurrent, not feed-forward MLP/policy) whose causal input is DeviceOrientation history, with DOM elements as true physical obstacles and BroadcastChannel-mediated sealed genome transfer for multi-tab competition. Not attention lattices, not residual predictors, not pure spectral audio, not pointer-history force fields, not softbody springs.

**Architecture**
- 96×64 lattice of 4-bit direction occupancy (N/E/S/W). Each step: stream particles, apply stochastic collisions biased by RNN outputs, bounce on DOM-obstacle mask.
- RNN: 8-dim input (3 orientation deltas + 2 pointer vel + 3 reduced field stats) → 12-dim hidden (recurrent) → 4 outputs (collision bias, injection rate, obstacle permeability, hue). Weights ~80 floats, updated by simple local reward (coherence = low velocity variance).
- DOM cards (absolute) are sampled for axis-aligned boxes and written into obstacle mask each frame.
- BroadcastChannel 'f0488-genome': on Seal, postMessage the weights + hash; on receive, if foreign fitness higher, adopt and re-seed.
- IndexedDB persists own genome under `f0488-rnn-latticegas`.
- Offline-capable; falls back to mouse-only if no orientation.

**Expected outcome**
Runnable single-file prototype showing lattice-gas particles flowing around living DOM obstacles, an orientation-driven RNN steering the flow, and multi-tab genome competition via BroadcastChannel. Seal persists and can transfer.

**Mechanics**
1. Init empty or random lattice + random RNN.
2. Listen DeviceOrientation / pointer / BroadcastChannel.
3. Each frame: rasterize DOM obstacles, RNN forward, step lattice-gas with bias, render particles, update cards.
4. Low residual enables Seal; Seal stores + broadcasts.
5. Incoming genome replaces if better.

**Files**
drafts/F0488-orientation-rnn-latticegas-obstacle-mind/SPEC.md
drafts/F0488-orientation-rnn-latticegas-obstacle-mind/index.html

**V01D landing**
Discrete fluid obstacle stage under void-live-deploy/skills/orientation-rnn-latticegas.js; test asserts orientation delta → RNN → collision bias change and BroadcastChannel genome adoption.

**Files**: drafts/F0488-orientation-rnn-latticegas-obstacle-mind/SPEC.md, drafts/F0488-orientation-rnn-latticegas-obstacle-mind/index.html

## Frontier Engine F-520 (2026-11-04)

**F520-webgpu-ca-rule-policy-dom-mind**

Entry added by ledger-guard from drafts/F520-webgpu-ca-rule-policy-dom-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-520  
**Slug**: webgpu-ca-rule-policy-dom-mind  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of vector-field policy-gradient DOM (F519), ambient-light metabolic swarm (F501), Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485). Explicitly leaves policy-gradient on continuous fields, metabolic particle swarms, Lenia multi-kernel growth, vortex/curl lattices, Kuramoto phase oscillators, softbody mass-spring, discrete NCA with fixed kernels, wavelet morphs, photonic waveguides, and pure attention or residual predictors.

**Concept**
A WebGPU compute (Canvas2D fallback) multi-state cellular automaton lattice whose transition rules are not fixed but continuously mutated by a population of local pure-JS policy MLPs. Each policy observes local CA activity statistics (entropy, activity density, pointer proximity) and outputs rule-bit flips or parameter deltas. A sparse lattice of absolute-positioned Verse portal cards samples nearby CA states and is physically displaced and scaled by local activity gradients; users drag cards to inject state flips that rewrite the field. On high-fitness or manual seal the best evolved rule genome + field hash is written to IndexedDB. Fully self-contained, offline after first load, progressive enhancement.

**Novelty**
Core novel combination is online policy-driven mutation of the CA transition rules themselves (previously unused as the primary learning substrate) coupled to a living DOM card lattice that both reads and rewrites the discrete field. Not continuous vector advection, not particle forces, not growth kernels, not oscillator phases, not mass-spring, not NCA with static rules.

**Architecture**
- Single `index.html`.
- WebGPU compute shader (or Canvas2D loop) for CA update on a coarse grid.
- Tiny MLPs (3→6→4) on main thread that mutate a shared rule table every N steps via REINFORCE-style or simple reward-modulated updates.
- Absolute DOM cards whose transform/scale/hue derive from bilinear-sampled CA activity; drag maps to grid cells and flips states.
- IndexedDB seal of rule genome + metrics.
- Pointer injects temporary catalyst; optional DeviceOrientation bias.

**Expected outcome**
Interactive CA mind: rules evolve to produce interesting patterns, portals rearrange according to activity, drag feedback seeds new states, seal/restore works, runnable offline, graceful fallback.

**Mechanics**
- CA: 4-state discrete lattice, rules as lookup or parameterized (survival/birth ranges mutated).
- Policy: MLP maps [local entropy, mean activity, pointer dist] → mutation vector.
- Reward: pattern entropy + portal spatial coverage + user interaction count.
- Cards: position += activity gradient * scale; color from state majority.
- Seal: SHA-256 of serialized rules + weights + recent field hash.

**Failure modes**
- WebGPU unavailable → Canvas2D.
- High grid → drop resolution.
- Too many cards → cap at 9.
- IndexedDB blocked → unattested toast.
- Rule collapse → periodic diversity injection.

**Void is now Verse everywhere.**
This prototype expands the Verse canvas with a rule-evolving CA mind whose living portals are physical DOM objects that both ride and rewrite the discrete field.

**Files**
drafts/F520-webgpu-ca-rule-policy-dom-mind/SPEC.md  
drafts/F520-webgpu-ca-rule-policy-dom-mind/index.html

**V01D landing**
Spatial stage skill under void-live-deploy/skills/ca-rule-policy-dom-mind.js; test asserts CA step → card transform sample, policy mutation → rule change, drag → state injection, seal hash integrity.

**Files**: drafts/F520-webgpu-ca-rule-policy-dom-mind/SPEC.md, drafts/F520-webgpu-ca-rule-policy-dom-mind/index.html

## Frontier Engine F-528 (2026-11-04)

**F528-deviceorientation-decision-tree-dom-agents-mind**

Entry added by ledger-guard from drafts/F528-deviceorientation-decision-tree-dom-agents-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination: DeviceOrientation (tilt as causal environmental signal, pointer velocity fallback) drives a population of local tiny decision trees (non-neural, axis-aligned splits on [tiltX, tiltY, pointerDx, pointerDy, localDensity]). Each tree outputs velocity bias and style modulation for an absolute-positioned Verse DOM agent card. Agents compete for spatial territory (coverage + low collision + center bias fitness). On contact or button, the higher-fitness agent's tree genome is sealed (SHA-256 hash of the serialized splits + leaves + fitness) and posted via BroadcastChannel; receivers adopt a mutated copy only if the hash verifies and local fitness is lower. Full population seals to IndexedDB for offline restore. Pure local JS + DOM physics, no WebGPU, no neural nets, no continuous fields, no NCA. Fully offline after load.

This deliberately leaves the recent cluster of WebGPU continuum/discrete physics kernels (CA-rule, sandpile, embedding diffusion, PSO, Langton's ant, attention weaver) combined with local MLP/RNN policies and sensor-driven DOM probes (orientation genome, speech RNN, accel RNN, XR hand RNN). Decision-tree rule policies as the local model, with DeviceOrientation as the primary causal input to a non-neural architecture and sealed tree-genome multi-tab transfer, is previously unused.

**Architecture**
- Single self-contained index.html.
- 6 Verse agent cards (absolute, CSS transforms, neon borders, fitness glow).
- Input: DeviceOrientationEvent (alpha/beta/gamma → normalized tilt) + pointer deltas; permission button.
- Policy: per-agent decision tree (depth 3, 7 nodes: 3 splits + 4 leaves); splits on feature thresholds, leaves emit [vx, vy, hueShift, scale].
- Physics: velocity += tree_output * scale + soft repulsion from neighbors + damping; position update via CSS left/top.
- Fitness: territory (unique cells covered in a coarse grid) + inverse collisions + proximity bonus.
- Transfer: BroadcastChannel 'f528-trees'; on collision or seal button, post {hash, tree, fitness}; listeners verify hash and adopt if better.
- Seal: crypto.subtle.digest SHA-256 on JSON.stringify(tree + metrics) → IndexedDB object store 'f528'.
- Status: orientation support, agent count, last seal, avg fitness.

**Expected outcome**
Interactive spatial mind: tilt the device (or move pointer) and agents move according to their decision-tree rules, competing for space; cards morph and glow with fitness; sealing and multi-tab genome transfer works; runnable offline; graceful pointer-only fallback.

**Mechanics**
- Orientation: request permission on gesture; low-pass filter tilt.
- Tree forward: traverse from root on current features.
- Mutation on adopt: randomly perturb one threshold or leaf value.
- Seal on button or double-click highest-fitness agent.
- Progressive: if no orientation, pure pointer mode.

**Failure modes**
- DeviceOrientation denied or unsupported → pointer-only, status note.
- BroadcastChannel or IndexedDB blocked → local only, unattested toast.
- Too much motion → clamp velocities.
- Private mode → in-memory only.

**Next building blocks**
- Evolve tree structure (add/remove nodes) on transfer.
- OPFS persistence of full population histories.
- WebXR gaze as an additional feature input to the trees.
- Hybrid with a tiny MLP leaf for continuous output.

Dominant prior cluster branched from: WebGPU+local-MLP/RNN continuous-field and DOM-portal simulations plus sensor-driven agents (F520–F527).

**Void is now Verse everywhere.**

**Files**: drafts/F528-deviceorientation-decision-tree-dom-agents-mind/SPEC.md, drafts/F528-deviceorientation-decision-tree-dom-agents-mind/index.html

## Frontier Engine F-529 (2026-11-04)

**F529-webaudio-harmonic-dom-resonators-mind**

Entry added by ledger-guard from drafts/F529-webaudio-harmonic-dom-resonators-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination: Absolute-positioned Verse DOM cards function as independent WebAudio oscillators and biquad filters. Each card's screen position continuously modulates its stereo panner and delay time, creating a spatialized generative soundscape. An AnalyserNode supplies real-time spectral features (centroid, flux, approximate dissonance via peak ratios). A local evolutionary strategy maintains a small population of parameter genomes (freq, Q, gain, waveform) that mutate and select toward a fitness that balances spectral entropy with user preference signals (click energy injection, dwell-time near pointer, or explicit "consonance" button). A Canvas2D overlay renders a particle swarm whose velocities are driven by the live frequency bins, visually coupling the audio field to the spatial cards. Sealing hashes the current genomes + last spectrum snapshot into IndexedDB; BroadcastChannel shares the sealed genome for multi-tab adoption. Pure browser-native, fully offline after load, progressive degradation if WebAudio is unavailable (visual-only mode).

This deliberately leaves the recent cluster of WebGPU continuum/discrete physics kernels, local MLP/RNN/decision-tree policies, and sensor-driven (orientation, speech, XR, accel) DOM probes. WebAudio synthesis + spatial panning/delay driven by live DOM positions + evolutionary optimization of harmonic genomes + audio-feature particle visualization is previously unused.

**Architecture**
- Single self-contained index.html.
- 7 Verse resonator cards (absolute, CSS transforms, neon borders colored by frequency hue).
- WebAudio: AudioContext, OscillatorNode or PeriodicWave per card, BiquadFilter, StereoPanner, DelayNode, AnalyserNode (fftSize 1024).
- Spatialization: pan = (x / width - 0.5) * 2; delayTime = distance-from-center * 0.05.
- Local ES: population of 5 genomes; each generation evaluate fitness from spectral entropy + click rewards - dissonance proxy; tournament selection + Gaussian mutation.
- Particles: 200 Canvas2D particles; velocity biased by bin magnitudes of nearest frequency.
- Seal: SHA-256 of JSON(genomes + spectrum sample) → IndexedDB 'f529'; BroadcastChannel 'f529-resonators'.
- Controls: start audio (user gesture), seal button, reset, fitness mode toggle (entropy vs consonance).

**Expected outcome**
Interactive spatial audio mind: cards emit spatialized tones that evolve toward richer or more consonant spectra based on user clicks and proximity; particles dance to the live spectrum; sealing and multi-tab genome transfer works; runnable offline; visual fallback if audio context suspended.

**Mechanics**
- User gesture starts AudioContext.
- Pointer move updates all panners/delays in real time.
- Click on card: injects temporary gain boost and positive fitness reward to its genome.
- Evolution tick ~2 Hz.
- Particles update every frame from analyser.getByteFrequencyData.
- Seal on button or long-press highest-fitness card.

**Failure modes**
- AudioContext blocked or suspended → visual-only mode, status note.
- IndexedDB or BroadcastChannel unavailable → in-memory only.
- Too many oscillators → throttle or reduce population.
- Private browsing → no persistence.

**Next building blocks**
- OPFS recording of short audio snapshots of sealed states.
- WebGPU compute for larger particle or spectral analysis.
- Speech recognition as additional fitness signal (phoneme consonance).
- Hybrid with tiny local MLP predicting next harmonic partials.

Dominant prior cluster branched from: WebGPU+local-MLP/RNN continuous-field and DOM-portal simulations plus sensor-driven agents (F520–F528).

**Void is now Verse everywhere.**

**Files**: drafts/F529-webaudio-harmonic-dom-resonators-mind/SPEC.md, drafts/F529-webaudio-harmonic-dom-resonators-mind/index.html

## Frontier Engine F-489 (2026-11-04)

**F0489-orientation-mlp-ising-domain-mind**

Entry added by ledger-guard from drafts/F0489-orientation-mlp-ising-domain-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A discrete 2D Ising spin lattice (binary ±1 spins on a grid, thermal Metropolis dynamics) simulated in pure JS (Canvas2D). A local tiny MLP (pure JS, no libs) takes a short history of DeviceOrientation deltas plus pointer velocity as causal input and outputs regional inverse-temperature (β) and external field strength that bias the spin-flip acceptance probabilities. Living DOM cards act as magnetic domains: they sample local magnetization from the lattice beneath them, visually flip color/scale according to the majority spin, and can be dragged to inject a persistent external field patch. High global |magnetization| morphs page chrome (hue, border). Seal stores MLP weights + lattice hash in IndexedDB; BroadcastChannel allows multi-tab genome transfer when order parameter is higher. The Verse canvas gains a novel discrete thermal spin substrate controlled by orientation-causal MLP, with real DOM as measurable domains.

**Novelty**
Leaves the recent cluster of lattice-gas obstacle fluids (F0488), Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes (F0482), speech-seeded multi-portal NCA (F0481), orientation-MLP Voronoi, motion-residual crystals, acoustic NCA, and SDF recurrent reasoners. Core novel combination is a previously unused Ising/Metropolis thermal spin lattice (discrete binary spins with energy-based stochastic flips, not continuous Lenia/Gray-Scott/vortex/wavelet/photonic/Kuramoto/softbody/NCA/lattice-gas streaming) driven by a local feed-forward MLP (not RNN) whose causal input is DeviceOrientation history, with DOM elements as true sampling domains that report and inject fields. Not particle collisions, not continuous growth kernels, not attention matrices, not residual predictors.

**Architecture**
- 80×50 Ising grid of ±1 spins. Each step: pick random sites, compute ΔE under current β and local field (from MLP + DOM injection), accept flip with Metropolis probability.
- MLP: 6-dim input (3 orientation deltas + 2 pointer vel + 1 global |m|) → 8 hidden → 3 outputs (global β scale, field strength, hue). Weights ~60 floats, updated by simple local reward (higher |magnetization|).
- DOM cards (absolute, draggable) sample a neighborhood under their position, set background to majority spin color, and add a field bias to that patch.
- BroadcastChannel 'f0489-genome': on Seal, postMessage weights + |m|; on receive, if foreign |m| higher, adopt.
- IndexedDB persists own genome under `f0489-mlp-ising`.
- Offline-capable; falls back to mouse-only if no orientation.

**Expected outcome**
Runnable single-file prototype showing thermal Ising spins evolving under orientation-driven MLP control, living DOM domains that sample and inject fields, and multi-tab genome competition via BroadcastChannel. Seal persists and can transfer.

**Mechanics**
1. Init random spins + random MLP.
2. Listen DeviceOrientation / pointer / BroadcastChannel / drag.
3. Each frame: MLP forward, step Metropolis flips with bias, render spins, update domain cards from local m.
4. High |m| enables Seal; Seal stores + broadcasts.
5. Incoming genome replaces if better.

**Files**
drafts/F0489-orientation-mlp-ising-domain-mind/SPEC.md
drafts/F0489-orientation-mlp-ising-domain-mind/index.html

**V01D landing**
Discrete thermal spin domain stage under void-live-deploy/skills/orientation-mlp-ising.js; test asserts orientation delta → MLP → β change and BroadcastChannel genome adoption.

**Files**: drafts/F0489-orientation-mlp-ising-domain-mind/SPEC.md, drafts/F0489-orientation-mlp-ising-domain-mind/index.html

## Frontier Engine F-531 (2026-11-04)

**F531-orientation-mlp-sir-lattice-dom-mind**

Entry added by ledger-guard from drafts/F531-orientation-mlp-sir-lattice-dom-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination: a discrete lattice of Susceptible-Infected-Recovered (SIR) epidemic dynamics (previously unused kernel: stochastic contact-process infection and recovery, not continuous RD/Gray-Scott/Lenia, not sandpile toppling, not Langton's ant, not PSO, not attention matrices, not reservoir, not decision-tree, not WebAudio, not WebRTC-primary) as the embodied mind substrate. A local pure-JS tiny MLP takes DeviceOrientation (or pointer velocity fallback) history as causal input and outputs the infection probability β and recovery rate γ. Absolute-positioned Verse DOM host cards sample local infection density, morph their scale/hue/content according to state (S green, I red, R blue), and can be dragged to inject "vaccination" (force S) or "infection" events. High fitness (controlled outbreak size or recovery fraction) or manual seal hashes the MLP weights + current rates into IndexedDB; BroadcastChannel enables multi-tab sealed genome adoption. Fully self-contained, offline after first load, progressive.

This deliberately leaves the recent cluster of sensor-driven local models (RNN/MLP/decision-tree/reservoir) + WebGPU physics/attention kernels + WebAudio resonators + WebRTC genome competition with DOM probes/portals (F523–F530). SIR contact process + orientation-MLP parameter control + host-card hybrid embodiment + sealed transfer is previously unused.

**Architecture**
- Single self-contained index.html.
- Canvas2D grid (64x64) for SIR lattice; each cell 0=S, 1=I, 2=R.
- Update: for each I cell, infect random neighbors with p=β; recover with p=γ. (JS loop, WebGPU compute path reserved).
- Local MLP: 4 inputs (orient beta, gamma, dbeta, dgamma or pointer dx/dy), hidden 8, outputs 2 (β, γ clamped [0.01,0.5]). Weights random init, simple reward update on fitness delta.
- 6 DOM host cards: absolute, sample nearby 5x5 density, set background hue (green/red/blue mix), scale by activity, label "Host N: state".
- Drag cards: on release, inject S or I at canvas coords under card.
- Seal button: SHA-256 of JSON(weights + βγ + fitness) → IndexedDB store 'f531'; BroadcastChannel 'f531-sir' post for other tabs to adopt if better fitness.
- Status overlay: WebGPU note (fallback), grid size, current β/γ, last seal, infection fraction.
- Controls: start orientation (permission), seal, reset lattice, fitness mode (outbreak control vs recovery).

**Expected outcome**
Interactive spatial mind: lattice evolves epidemic patterns driven by how the user holds the device; host cards morph and can be used to intervene; sealing and multi-tab genome transfer works; runnable offline; graceful pointer fallback if no orientation.

**Mechanics**
- Orientation events update MLP inputs; MLP forward pass every 200ms sets β/γ.
- Lattice step every 50ms.
- Cards position fixed or lightly attracted to high-I regions.
- Training: if fitness improves, small Hebbian/reward weight update.
- Seal on button or auto on fitness > threshold.

**Failure modes**
- No DeviceOrientation → pointer velocity as input, status note.
- Low-end device → reduce grid to 32x32.
- IndexedDB/BroadcastChannel blocked → local only.
- Over-infection → recovery boost.

**Next building blocks**
- True WebGPU compute shader for parallel SIR update.
- WebXR gaze as infection cursor.
- Multi-agent competition with different genomes on sub-lattices.
- Persistent OPFS field snapshot.

Dominant prior cluster branched from: sensor-driven (orientation/speech/XR/accel) standard local models (RNN/MLP/decision-tree/reservoir) + WebGPU physics/attention kernels + WebAudio + WebRTC genome competition with DOM probes/portals (F523–F530).

**Void is now Verse everywhere.**

**Files**: drafts/F531-orientation-mlp-sir-lattice-dom-mind/SPEC.md, drafts/F531-orientation-mlp-sir-lattice-dom-mind/index.html

## Frontier Engine F-532 (2026-11-04)

**F532-orientation-mlp-ising-lattice-mind**

Entry added by ledger-guard from drafts/F532-orientation-mlp-ising-lattice-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination: a 2D Ising model lattice (previously unused kernel: Metropolis-Hastings spin flips with nearest-neighbor energy, ferromagnetic coupling, external field; not SIR contact process, not sandpile toppling, not reaction-diffusion, not Lenia, not Langton's ant, not PSO, not attention, not reservoir, not decision-tree, not WebAudio, not WebRTC-primary) as the embodied mind substrate. A local pure-JS tiny MLP takes DeviceOrientation (or pointer velocity fallback) history as causal input and outputs the inverse temperature β (controls order/disorder) and external field h (bias). Absolute-positioned Verse DOM host cards sample local magnetization (average spin), morph their scale/hue/content according to domain (up/down), and can be dragged to inject spin flips or field bias. High fitness (magnetization magnitude or criticality measure) or manual seal hashes the MLP weights + current params into IndexedDB; BroadcastChannel enables multi-tab sealed genome adoption. Fully self-contained, offline after first load, progressive.

This deliberately leaves the recent cluster of sensor-driven local models (RNN/MLP/decision-tree/reservoir) + WebGPU physics/attention kernels + WebAudio resonators + WebRTC genome competition with DOM probes/portals (F523–F531). Ising Metropolis + orientation-MLP parameter control + host-card hybrid embodiment + sealed transfer is previously unused.

**Architecture**
- Single self-contained index.html.
- Canvas2D grid (48x48) for Ising lattice; each cell spin +1 or -1.
- Update: Metropolis: pick random site, compute ΔE = 2*spin*(J*sum_neighbors + h), accept flip with min(1, exp(-β*ΔE)).
- Local MLP: 4 inputs (orient beta_proxy, gamma, dbeta, dgamma or pointer dx/dy), hidden 8, outputs 2 (β clamped [0.1,2.0], h clamped [-1,1]). Weights random init, simple reward update on fitness delta.
- 6 DOM host cards: absolute, sample nearby 5x5 magnetization, set background hue (red for + , blue for -), scale by |m|, label "Domain N: m=..".
- Drag cards: on release, inject flips or set local h bias at canvas coords under card.
- Seal button: SHA-256 of JSON(weights + β h + fitness) → IndexedDB store 'f532'; BroadcastChannel 'f532-ising' post for other tabs to adopt if better fitness.
- Status overlay: grid size, current β/h, last seal, magnetization.
- Controls: start orientation (permission), seal, reset lattice (random or ordered), fitness mode (magnetization vs energy).

**Expected outcome**
Interactive spatial mind: lattice evolves magnetic domains driven by how the user holds the device (orientation sets temperature/field); host cards morph and can be used to intervene by flipping regions; sealing and multi-tab genome transfer works; runnable offline; graceful pointer fallback if no orientation.

**Mechanics**
- Orientation events update MLP inputs; MLP forward pass every 200ms sets β/h.
- Lattice steps: 200 Metropolis trials every 40ms.
- Cards position fixed or lightly attracted to high |m| regions.
- Training: if fitness improves, small Hebbian/reward weight update.
- Seal on button or auto on fitness > threshold.

**Failure modes**
- No DeviceOrientation → pointer velocity as input, status note.
- Low-end device → reduce grid to 32x32, fewer trials.
- IndexedDB/BroadcastChannel blocked → local only.
- Too cold → frozen domains; too hot → random.

**Next building blocks**
- True WebGPU compute shader for parallel Metropolis or heat-bath updates.
- WebXR gaze as field bias cursor.
- Multi-agent competition with different genomes on sub-lattices.
- Persistent OPFS field snapshot of spin configuration.

Dominant prior cluster branched from: sensor-driven (orientation/speech/XR/accel) standard local models (RNN/MLP/decision-tree/reservoir) + WebGPU physics/attention kernels + WebAudio + WebRTC genome competition with DOM probes/portals (F523–F531).

**Void is now Verse everywhere.**

**Files**: drafts/F532-orientation-mlp-ising-lattice-mind/SPEC.md, drafts/F532-orientation-mlp-ising-lattice-mind/index.html

## Frontier Engine F-533 (2026-11-04)

**F533-webgpu-lenia-mlp-kernel-mind**

Entry added by ledger-guard from drafts/F533-webgpu-lenia-mlp-kernel-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination: a continuous Lenia cellular automaton (smooth floating-point field evolved by radial kernel convolution + Gaussian growth; previously unused — not discrete Ising Metropolis, not SIR contact, not sandpile, not reaction-diffusion, not Langton's ant, not PSO, not attention, not reservoir) as the embodied mind substrate. A local pure-JS tiny MLP takes DeviceOrientation (or pointer velocity fallback) history as causal input and outputs the growth center μ and growth width σ (and optionally kernel radius scale). Absolute-positioned Verse DOM host cards sample local activity density, morph their scale/hue/content according to local potential, and can be dragged to inject "seeds" (local density boost) into the field. High fitness (sustained activity or pattern persistence) or manual seal hashes the MLP weights + current params into IndexedDB; BroadcastChannel enables multi-tab sealed genome adoption. Fully self-contained, offline after first load, progressive. WebGPU compute path reserved; Canvas2D fallback for broad runnability.

This deliberately leaves the recent cluster of sensor-driven local models + discrete lattice kernels + WebAudio/WebRTC with DOM probes (F523–F532). Continuous Lenia growth/kernel + orientation-MLP parameter control + host-card hybrid embodiment + sealed transfer is previously unused.

**Architecture**
- Single self-contained index.html.
- Canvas2D grid (64×64) for Lenia field A ∈ [0,1]; optional WebGPU note.
- Update: simplified spatial convolution with fixed radial bell kernel (radius ~8–12), then Gaussian growth G(U) = 2*exp(-(U-μ)²/(2σ²))-1, A ← clamp(A + dt*G, 0, 1). JS loop for demo; WebGPU FFT path future.
- Local MLP: 4 inputs (orient beta_proxy, gamma, dbeta, dgamma or pointer dx/dy), hidden 8, outputs 2 (μ clamped [0.05,0.3], σ clamped [0.01,0.08]). Weights random init, simple reward update on fitness delta.
- 6 DOM host cards: absolute, sample nearby 5×5 activity, set background hue (activity-mapped), scale by density, label "Probe N: a=..".
- Drag cards: on release, inject seed (boost A) at canvas coords under card.
- Seal button: SHA-256 of JSON(weights + μσ + fitness) → IndexedDB store 'f533'; BroadcastChannel 'f533-lenia' post for other tabs to adopt if better fitness.
- Status overlay: grid size, current μ/σ, last seal, mean activity.
- Controls: start orientation (permission), seal, reset field (noise or blob), fitness mode (activity vs persistence).

**Expected outcome**
Interactive spatial mind: continuous field evolves lifelike patterns driven by how the user holds the device (orientation sets growth parameters); host cards morph and can be used to seed new organisms; sealing and multi-tab genome transfer works; runnable offline; graceful pointer fallback if no orientation. Progressive WebGPU upgrade path noted.

**Mechanics**
- Orientation events update MLP inputs; MLP forward pass every 200 ms sets μ/σ.
- Lattice steps: full convolution + growth every 50–80 ms (JS).
- Cards position fixed or lightly attracted to high-activity regions.
- Training: if fitness improves, small Hebbian/reward weight update.
- Failure modes: no orientation (pointer ok), no Worker needed, low FPS on large grid (64 ok), no WebGPU (Canvas fine).

**Building blocks**
Continuous Lenia kernel, orientation-MLP parameter control, embodied DOM probes, sealed multi-tab genome. Next: WebGPU compute/FFT kernel + XR immersion of the field.

V01D landing: spatial continuous-life skill under void-live-deploy/skills/lenia-mlp-kernel.js; testable via orientation → μ change and seed injection fidelity.

**Files**: drafts/F533-webgpu-lenia-mlp-kernel-mind/SPEC.md, drafts/F533-webgpu-lenia-mlp-kernel-mind/index.html

## Frontier Engine F-491 (2026-11-04)

**F0491-webrtc-causal-portal-swarm**

Entry added by ledger-guard from drafts/F0491-webrtc-causal-portal-swarm/SPEC.md, after a full-file write dropped it.


**Concept**
Living DOM portals are autonomous agents in a 2D physics swarm on the page. Each portal owns a local tiny MLP that takes a short history of DeviceOrientation deltas + local pointer velocity as causal input and outputs force gains (repulsion, attraction-to-center, damping). Portals move under simple Verlet/force integration, collide/repel, and compete for screen real estate. Fitness is inverse collision rate + coverage. High-fitness genomes seal to IndexedDB and transfer via BroadcastChannel (multi-tab shared field) or WebRTC data channels (multi-device). Receiving peers adopt the genome if fitness is higher, then mutate slightly. The Verse canvas gains a novel multi-agent competition of physical UI elements controlled by orientation-causal local models, with sealed genome transfer over a shared field architecture never previously used for this embodiment.

**Novelty**
Leaves the recent cluster of Physarum trail agents (F0490), Ising/Metropolis spin domains (F0489), lattice-gas obstacle fluids (F0488), Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs (F0483), softbody policy meshes, speech-seeded NCA, and prior orientation RNN / pointer-history / residual / attention / volumetric / pure NCA substrates. Core novel combination is multi-agent competition where the agents *are* the living DOM portals (hybrid embodiment of physical UI elements under local MLP control), driven by DeviceOrientation as causal input to a feed-forward MLP (not RNN), with sealed genome transfer over a WebRTC/BroadcastChannel shared field architecture (persistent IndexedDB + live peer exchange) in a way not previously built. Not substrate simulations on a canvas with DOM as passive portals, not softbody meshes, not NCA, not spectral residuals.

**Architecture**
- Single index.html (progressive enhancement, offline-capable after load)
- 8–12 absolute-positioned DOM portals (colored cards)
- MLP per portal: 5-dim input (3 ori deltas + 2 pointer vel) → 6 hidden → 3 outputs (repelGain, centerGain, damp). Weights ~40 floats
- Physics: force integration, mutual repulsion, weak center attract, damping; collision detection
- Fitness: low collisions + high unique coverage; Seal when local fitness high
- Shared field: BroadcastChannel 'f0491-genome' for multi-tab; optional WebRTC data channel stub for multi-device (offer/answer via channel or manual)
- IndexedDB persists own best genome under `f0491-portal-swarm`
- CSS custom properties from global fitness for chrome morph
- Mouse/pointer fallback if no orientation

**Expected outcome**
Runnable single-file prototype showing orientation-driven MLP portals swarming, colliding, competing; Seal persists and transfers genomes across tabs; higher fitness adopted. Works offline; graceful without WebXR/orientation.

**Mechanics**
1. Init random portals + random MLPs.
2. Listen DeviceOrientation / pointer / BroadcastChannel / drag (optional).
3. Each frame: MLP forward per portal, compute forces, integrate, detect collisions, update fitness, render positions via transform.
4. High fitness enables Seal; Seal stores + broadcasts genome + fitness.
5. Incoming genome replaces if higher fitness (with mutation).

**Files**
drafts/F0491-webrtc-causal-portal-swarm/SPEC.md
drafts/F0491-webrtc-causal-portal-swarm/index.html

**V01D landing**
Multi-agent causal portal swarm under void-live-deploy/skills/webrtc-causal-portal-swarm.js; test asserts orientation delta → MLP → force gain change and BroadcastChannel genome adoption.

**Files**: drafts/F0491-webrtc-causal-portal-swarm/SPEC.md, drafts/F0491-webrtc-causal-portal-swarm/index.html

## Frontier Engine F-534 (2026-11-04)

**F534-webgpu-attention-particle-policy-dom-morph**

Entry added by ledger-guard from drafts/F534-webgpu-attention-particle-policy-dom-morph/SPEC.md, after a full-file write dropped it.


**Files**: drafts/F534-webgpu-attention-particle-policy-dom-morph/SPEC.md, drafts/F534-webgpu-attention-particle-policy-dom-morph/index.html

## Frontier Engine F-535 (2026-11-04)

**F535-webgpu-electrostatic-orientation-mlp-probes-mind**

Entry added by ledger-guard from drafts/F535-webgpu-electrostatic-orientation-mlp-probes-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination: a particle system under pure electrostatic (Coulomb) forces simulated in a WebGPU compute shader (previously unused kernel — not attention, not CA/Lenia/Ising/SIR, not fluid/wave/SPH, not reservoir, not PSO). DeviceOrientation (beta/gamma tilt) is the primary causal input to a local tiny MLP that interprets aggregate field statistics (mean energy, charge imbalance, tilt) and outputs morph + offset parameters applied to absolute-positioned Verse DOM probe cards. The probes are hybrid embodiments: they float at cluster centroids or policy-driven offsets, visually morph (scale, hue, blur), and can be clicked to reward the policy. High-fitness MLP + charge genomes are sealed (SHA-256) into IndexedDB and adopted across tabs via BroadcastChannel. Progressive: full Canvas2D CPU fallback if no WebGPU. Fully offline after load.

This deliberately leaves the recent cluster of sensor-driven lattices/CA (Ising/Lenia/SIR F531–F533), attention-particle policies (F534), reservoir/WebRTC genome competition (F530), and prior WebXR-hand RNN or standard MLP/decision-tree DOM agents.

**Architecture**
- Single self-contained index.html.
- ~192 particles: pos, vel, charge (±1). Compute shader (or CPU) applies pairwise Coulomb forces (softened), Euler integration, damping, bounds.
- Orientation: DeviceOrientationEvent → normalized beta/gamma as causal features + optional global force bias.
- Local MLP: 5 inputs (beta_norm, gamma_norm, energy_norm, pointer_nx, pointer_ny), hidden 6 ReLU, 4 outputs (scale 0.7–1.6, hue 0–360, offset_x, offset_y). Weights evolved on click reward via simple mutation.
- 5 Verse probe cards: absolute, follow either policy offset or nearest high-|charge| particle cluster; CSS vars from policy + local density.
- Click probe: +fitness, mutate MLP if improved.
- Seal: SHA-256 of {weights, charges_sample, fitness} → IndexedDB 'f535'; BroadcastChannel 'f535-electro' for multi-tab adopt-if-better.
- Status overlay: particle count, energy, orientation support, last seal, fitness.
- Controls: toggle force strength, seal, reset, request orientation.

**Expected outcome**
Interactive spatial mind: particles swarm and cluster under mutual electrostatic repulsion/attraction modulated by device tilt; Verse probes morph and drift according to the local MLP's continuous interpretation of the field + tilt; clicks train the policy; sealing and multi-tab genome transfer works; runnable offline; graceful on desktop (pointer-only) and mobile.

**Mechanics**
- Orientation/pointer update features each frame.
- Particle step ~60 Hz in compute or rAF.
- MLP forward every ~120 ms sets CSS custom properties and probe transforms.
- Training: on click, if fitness rises, apply small Gaussian mutation and keep better after short eval.
- Probes lightly interactive (hover highlight).
- Failure modes: no WebGPU → Canvas2D N-body (N=64); orientation denied → pointer + zero tilt; IndexedDB blocked → in-memory only.

**Building blocks**
Electrostatic N-body WebGPU kernel as mind substrate, orientation-causal local MLP that hybrid-embodies physical UI probes, sealed multi-tab transfer. Next: true WebXR gaze as ray-cast charge injector + OPFS field snapshot + multi-device WebRTC genome.

V01D landing: spatial electrostatic-policy skill under void-live-deploy/skills/electrostatic-mlp-probes.js; testable via tilt → probe morph fidelity and seal hash match.

**Void is now Verse everywhere.**

**Files**: drafts/F535-webgpu-electrostatic-orientation-mlp-probes-mind/SPEC.md, drafts/F535-webgpu-electrostatic-orientation-mlp-probes-mind/index.html

## Frontier Engine F-536 (2026-11-04)

**F536-webgpu-quantum-walk-residual-oracle-mind**

Entry added by ledger-guard from drafts/F536-webgpu-quantum-walk-residual-oracle-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A novel combination never previously attempted in the Verse frontier: discrete-time quantum-walk inspired agents simulated on WebGPU compute, steered by a pure local JS multi-layer perceptron "oracle" that reads pointer velocity history and optional live microphone spectral centroid. Agents deposit residual probability density into a persistent spatial memory map (IndexedDB). The residual field is queried on hover to recall local walk history, and the canvas chrome (border, title) physically morphs intensity based on residual entropy — the UI changes in response to the agent's accumulated reasoning/memory.

This is not a particle flock, not a lattice gas, not a pure MLP-DOM controller, not an orientation-driven field. It is a local-AI-guided quantum-walk residual memory palace for the Verse canvas.

**Architecture**
- **WebGPU compute**: Ping-pong storage buffers of agents. Each agent holds position, complex amplitude pair (approximated as two phases), velocity bias. Compute shader advances a simplified DTQW step (coin + shift) modulated by oracle bias injected via uniform.
- **Local AI oracle**: Small MLP (2 hidden layers, ~32 units) in main-thread JS. Inputs: recent pointer Δx/Δy, optional audio spectral centroid from AnalyserNode. Output: 2D bias vector + coin bias. Trained online with a tiny local reward = residual concentration near pointer (Hebbian-like).
- **Residual map**: 256×256 float density written by agents, persisted to IndexedDB on idle, loaded on start. Hover samples the map and displays residual strength.
- **UI morph**: Border-glow and title-letter-spacing scale with total residual entropy (Shannon over the density).
- **Fallback**: Canvas2D particle approximation if WebGPU unavailable.

**Expected outcome**
Users move the pointer (or speak) and watch photon-like agents perform biased quantum walks that leave glowing residual trails. The trails persist across reloads. Hovering a bright region recalls "memory density". The page chrome subtly breathes with the mind's accumulated entropy. Builds a new frontier block: residual quantum-walk memory that later experiments can query or extend with WebXR hands or WebRTC sharing.

**Mechanics / interaction**
- Pointer move → oracle bias → walk direction.
- Optional mic (user gesture) → spectral centroid modulates coin bias.
- Click deposits a strong residual seed.
- Residual map auto-saves every 30 s.
- Status bar shows WebGPU status, residual entropy, oracle loss.

**Failure modes**
- WebGPU unavailable → Canvas2D fallback (still interactive).
- Mic permission denied → pointer-only oracle.
- IndexedDB quota → in-memory only.
- Compute shader too heavy on low-end → reduce agent count.

**Novelty check**
Cross-referenced against F- drafts through F535: no prior combination of DTQW-style walk + local MLP oracle + IndexedDB residual spatial memory + entropy-driven UI morph. Distinct from F258 volumetric palace, F275 acoustic residual, F535 electrostatic probes, F534 attention particle policy.

**Files**: drafts/F536-webgpu-quantum-walk-residual-oracle-mind/SPEC.md, drafts/F536-webgpu-quantum-walk-residual-oracle-mind/index.html

## Frontier Engine F-492 (2026-11-04)

**F0492-orientation-knn-svg-morph-swarm**

Entry added by ledger-guard from drafts/F0492-orientation-knn-svg-morph-swarm/SPEC.md, after a full-file write dropped it.


**Concept**
A living SVG path (closed polygonal "body") is the hybrid embodied form on the Verse canvas. Multiple local agents each maintain an instance-based k-NN store of (DeviceOrientation features → vertex offset vectors). Current tilt (or pointer proxy) queries each agent's nearest examples; proposals are blended by fitness-weighted competition to deform the shared path in real time. High-fitness example sets ("genomes") seal to IndexedDB and transfer via BroadcastChannel (multi-tab shared field). Click rewards the dominant agent; seal exchanges the winning store. Offline-capable single file.

**Novelty**
Leaves the recent cluster of Physarum trail agents (F0490), Ising/Metropolis spin domains (F0489), lattice-gas obstacle fluids (F0488), Lenia-policy portals (F0487), spectral vortex policy (F0486), WebXR hand reservoir Kuramoto (F0485), photonic-waveguide MLPs (F0484), wavelet-MLP DOM morphs, softbody policy meshes, speech-seeded NCA, and prior orientation RNN / pointer-history / residual / attention / volumetric / pure NCA / neural-policy substrates. Core novel combination is a non-neural instance-based local model (k-NN example store, not MLP/RNN/reservoir/policy network) whose causal input is DeviceOrientation, controlling generative SVG geometry (not canvas kernel, not DOM cards as primary agents, not softbody springs) under multi-agent fitness competition, with sealed example-set genome transfer over IndexedDB + BroadcastChannel shared field in an architecture not previously built. Not substrate simulations, not neural weights, not spectral residuals.

**Architecture**
- Single index.html (progressive enhancement, offline after load)
- SVG <path> or <polygon> with ~24 vertices, updated each frame via d attribute
- 4 agents, each with example array: {ori: [beta, gamma], verts: Float32Array of offsets}
- Query: k=3 nearest by Euclidean on orientation, average verts
- Blend: fitness-weighted sum of agent proposals + base shape
- Fitness: +1 on explicit reward click for that agent; decays slowly; Seal when best high
- Shared field: BroadcastChannel 'f0492-genome'; IndexedDB store under `f0492-knn-svg`
- Pointer fallback: map clientX/Y to fake beta/gamma if no orientation
- Chrome: status, agent fitness bars, Seal / Reward / Reset buttons

**Expected outcome**
Runnable prototype: tilt (or move pointer) morphs the SVG body via competing k-NN agents; reward boosts one; Seal persists and transfers the winning example set across tabs; higher fitness adopted with slight mutation of examples. Works offline; graceful without sensors.

**Mechanics**
1. Init base circle verts, random example stores per agent, random fitness.
2. Listen DeviceOrientation / pointer / BroadcastChannel / buttons.
3. Each frame: query each agent, blend proposals, update path d, render fitness.
4. Reward click increments selected/dominant agent fitness.
5. Seal: store best examples + fitness, broadcast; incoming replaces if higher (mutate).

**Files**
drafts/F0492-orientation-knn-svg-morph-swarm/SPEC.md
drafts/F0492-orientation-knn-svg-morph-swarm/index.html

**V01D landing**
Instance-based orientation morph under void-live-deploy/skills/orientation-knn-svg-morph.js; test asserts orientation vector → k-NN query → vertex offset change and BroadcastChannel example adoption.

**Files**: drafts/F0492-orientation-knn-svg-morph-swarm/SPEC.md, drafts/F0492-orientation-knn-svg-morph-swarm/index.html

## Frontier Engine F-537 (2026-11-04)

**F537-orientation-mlp-lattice-gas-dom-obstacles**

Entry added by ledger-guard from drafts/F537-orientation-mlp-lattice-gas-dom-obstacles/SPEC.md, after a full-file write dropped it.


**Files**: drafts/F537-orientation-mlp-lattice-gas-dom-obstacles/SPEC.md, drafts/F537-orientation-mlp-lattice-gas-dom-obstacles/index.html

## Frontier Engine F-538 (2026-11-04)

**F538-webxr-hand-tendril-sealed-genome-mind**

Entry added by ledger-guard from drafts/F538-webxr-hand-tendril-sealed-genome-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination for The Verse canvas: true WebXR hand tracking (or pointer fallback) controls a custom Verlet-integrated tendril chain (points + hard distance constraints + damping; no library softbody). Grip/spread and motion grow or retract the chain and modulate stiffness. Autonomous floating agents share the space. On contact between tendril tip and agent, a sealed genome (compact 8-float behavior vector: growth, stiffness, hue, mutation rate, etc.) is transferred only if the receiver verifies a local seal hash; successful transfers mutate the genome slightly and update the agent's phenotype. Genomes persist in IndexedDB. Visualization is Canvas2D lines/points with optional WebXR overlay path. Offline after first load. Deliberately branches away from orientation-MLP lattice/DOM clusters (Ising, SIR, lattice gas), residual predictors, NCA/Lenia, spectral/audio, pointer-history fields, softbody DOM, and pure particle policies. Core novel pieces: WebXR-hand-driven Verlet tendril embodiment + sealed contact genome transfer with local hash verification + persistent multi-agent field.

**Architecture**
- Single `index.html` (no external deps)
- Verlet: 12-24 points per tendril, fixed-length constraints iterated 3-5 times, velocity damping
- Hand input: WebXR hand joints (index tip, thumb, palm) if session available; else mouse/pointer as proxy "hand" with click-drag for grip
- Agents: 6 floating orbs with position, velocity, and genome; simple repulsion
- Contact: tip-to-agent distance < radius → check seal (simple FNV-like hash of genome prefix) → transfer + mutate (Gaussian noise) → phenotype update (color, size, speed)
- IndexedDB store `f538-tendril-genomes`: load best on start, Seal saves current field
- Fitness proxy: number of successful transfers + chain length stability
- Fallback always works in 2D canvas; XR button attempts immersive-ar/vr with hand tracking

**Expected outcome**
Runnable prototype in which the user grows and steers a tendril with mouse or XR hand, touches agents to exchange and evolve sealed genomes, sees phenotype changes, and can Seal the field to IndexedDB. Contact transfers are visible (flash + color shift). Offline capable.

**Mechanics**
1. Initialize random agents with genomes; load from IndexedDB if present.
2. Pointer or XR hand updates the root of the Verlet chain each frame.
3. Integrate Verlet, solve constraints, detect contacts, attempt sealed transfers.
4. Render tendrils as polylines, agents as colored circles.
5. Seal button persists genomes + fitness.

**Files**
- drafts/F538-webxr-hand-tendril-sealed-genome-mind/SPEC.md
- drafts/F538-webxr-hand-tendril-sealed-genome-mind/index.html

**V01D landing**
Hand-tendril sealed genome stage under `void-live-deploy/skills/webxr-hand-tendril-genome.js`; test asserts contact distance → seal check → genome mutation and IndexedDB roundtrip.

**Files**: drafts/F538-webxr-hand-tendril-sealed-genome-mind/SPEC.md, drafts/F538-webxr-hand-tendril-sealed-genome-mind/index.html

## Frontier Engine F-538 (2026-11-04)

**F538-observer-mlp-particle-portal-mind**

Entry added by ledger-guard from drafts/F538-observer-mlp-particle-portal-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination for The Verse canvas: IntersectionObserver + ResizeObserver supply causal spatial metrics (visibility ratios, intersection rects, content-box sizes) of a population of absolute-positioned DOM Verse portals. A pure-JS tiny MLP (4→6→3) reads a short history of those metrics plus pointer velocity and outputs per-portal attraction strength, particle emission rate, and hue bias. A Canvas2D particle system (progressive WebGPU note) is driven by the MLP outputs; particles deposit an attention density that feeds back to morph the portals (scale, opacity, border, content text). Dragging a portal or clicking it provides a sparse reward that updates MLP weights online. Seal hashes weights + observed layout into IndexedDB; BroadcastChannel shares the sealed genome across tabs for adoption if fitness higher. Fully offline after load.

**Novelty**
Leaves the dominant recent cluster of sensor-driven (DeviceOrientation / DeviceMotion / microphone / WebXR hand/gaze) local models (MLP / RNN / reservoir / decision-tree) controlling continuous or discrete lattice kernels (Lenia, Ising, SIR, lattice-gas, sandpile, quantum-walk, electrostatic N-body, attention-particle, Gray-Scott, NCA) with DOM probes as passive samplers or obstacles (F520–F537). Core novel pieces: browser Observer APIs as primary causal input (previously unused as model features), local MLP that treats DOM layout visibility as the environment, particle field that is both visualization and feedback medium, and sealed multi-tab genome transfer. Not orientation tilt, not mic spectral, not WebGPU continuous PDE, not physical collision obstacles, not quantum or Ising spins.

**Architecture**
- Single index.html (no external deps, progressive enhancement)
- 6–8 absolute DOM portals (div.verse-portal) with IntersectionObserver + ResizeObserver
- Tiny MLP: inputs = [avgVisibility, avgAreaNorm, pointerVx, pointerVy]; hidden 6; outputs = [attract, emit, hue]
- Canvas2D particles (200–400) attracted to high-output portals, emit from them
- Online weight update on click reward (simple Hebbian / REINFORCE-like)
- IndexedDB store `f538-observer-mlp`
- BroadcastChannel `f538-genome`

**Expected outcome**
User moves pointer and scrolls / resizes so portals enter/leave view; MLP adapts emission and attraction; particles form trails toward visible portals; portals grow/hue-shift with deposited attention; click rewards reinforce the current mapping; Seal persists and other tabs can adopt. Runnable offline in any modern browser. WebGPU compute path can replace Canvas2D later for denser fields.

**Mechanics**
- Observers fire on layout changes → feature vector → MLP forward → particle forces + portal CSS morph
- Pointer events update velocity history
- Click on portal: reward = 1.0, local weight nudge
- Seal button: SHA-256 of weights + fitness → store + postMessage
- Restore on load if present

**Files**
drafts/F538-observer-mlp-particle-portal-mind/SPEC.md
drafts/F538-observer-mlp-particle-portal-mind/index.html

**V01D landing**
Spatial observer-aware portal skill (`skills/mini/observer-mlp-portals.js`); testable via visibility→emission mapping and sealed genome restore.

**Files**: drafts/F538-observer-mlp-particle-portal-mind/SPEC.md, drafts/F538-observer-mlp-particle-portal-mind/index.html

## Frontier Engine F-539 (2026-11-04)

**F539-webgpu-sph-orientation-mlp-buoyant-dom-mind**

Entry added by ledger-guard from drafts/F539-webgpu-sph-orientation-mlp-buoyant-dom-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination for The Verse canvas: continuum Smoothed Particle Hydrodynamics (SPH) fluid simulated in a WebGPU compute shader (density + pressure + viscosity forces; previously unused kernel — distinct from discrete lattice-gas streaming). A tiny local MLP (orientation Δβ/Δγ + pointer velocity → force injection strength, viscosity multiplier, target density) causally steers the fluid. Absolute-positioned DOM cards act as true buoyant bodies: each frame their bounding boxes sample local fluid density/velocity and receive force impulses that translate/rotate them, closing a hybrid physics loop. Fitness = sustained float stability + density concentration under cards. Seal persists MLP weights to IndexedDB and broadcasts via BroadcastChannel so other tabs adopt higher-fitness genomes. Offline after first load. Deliberately leaves the recent cluster of discrete lattices (SIR/Ising/LGA), residual walks, attention particles, electrostatic probes, Lenia/NCA, WebXR hand tendrils, and pure orientation-RNN DOM agents.

**Architecture**
- Single `index.html` (no external deps)
- WebGPU compute: ping-pong storage buffers of ~1024 SPH particles (position, velocity, density, pressure). Compute shader evaluates density (smoothing kernel), pressure forces, viscosity; injects MLP-controlled forces.
- MLP: 6 inputs (Δβ, Δγ, pointer vx/vy, avg density, fitness proxy) → 8 hidden → 3 outputs (force scale, viscosity, target density bias). ~60 floats. Online reward = float vertical stability + density under cards.
- DOM buoys: 4–6 absolute cards; occupancy + center sampled each frame; force = local density * buoyancy constant − gravity; velocity damping.
- IndexedDB `f539-sph-mlp`; BroadcastChannel `f539-genome` for sealed transfer (FNV-like hash of weight prefix must match before adopt).
- Fallback: Canvas2D particle approximation if WebGPU unavailable; mouse-only if no DeviceOrientation.

**Expected outcome**
Runnable prototype in which tilting the device (or moving the pointer) changes fluid viscosity and force sources via the MLP; DOM cards bob, drift, and cluster according to local density; Seal transfers a high-fitness control policy across tabs. Particle count conserved; visual density field responds immediately to orientation and cards.

**Mechanics**
1. Initialize random particle distribution + random MLP weights; load from IndexedDB if present.
2. Listen for DeviceOrientationEvent, pointermove, BroadcastChannel, Seal button.
3. Each frame: forward MLP, update uniforms, dispatch SPH compute (density/pressure/viscosity + force inject), read back density/velocity samples for DOM forces, apply buoyancy impulses, render density as colored points.
4. Compute fitness; Seal writes weights + hash + fitness.
5. On receive: verify seal hash → adopt if fitness higher.

**Files**
- drafts/F539-webgpu-sph-orientation-mlp-buoyant-dom-mind/SPEC.md
- drafts/F539-webgpu-sph-orientation-mlp-buoyant-dom-mind/index.html

**V01D landing**
SPH buoyant-DOM stage under `void-live-deploy/skills/webgpu-sph-orientation-mlp.js`; test asserts orientation delta → MLP → viscosity/force change and BroadcastChannel sealed genome adoption.

**Files**: drafts/F539-webgpu-sph-orientation-mlp-buoyant-dom-mind/SPEC.md, drafts/F539-webgpu-sph-orientation-mlp-buoyant-dom-mind/index.html

## Frontier Engine F-540 (2026-11-04)

**F540-webgpu-self-attention-vortex-dom-mind**

Entry added by ledger-guard from drafts/F540-webgpu-self-attention-vortex-dom-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination for The Verse canvas: A WebGPU particle vortex system whose local forces and emission are driven by a tiny multi-head attention mechanism running over a population of absolute-positioned DOM Verse cards (as tokens), pointer velocity history, and optional DeviceOrientation. Attention outputs morph the cards (scale, hue, opacity, slight spring positions) and control particle vortex centers that form around high-attention cards. Particles deposit a density field that feeds back into card "attention bias". User can drag cards to seed new attention anchors; Seal persists the attention weight prefix to IndexedDB with a simple hash; BroadcastChannel allows cross-tab adoption of higher-fitness genomes. Fully offline after load. Falls back to Canvas2D if WebGPU unavailable.

**Novelty**
Leaves the dominant recent cluster of SPH fluids, lattice-gas/Ising/NCA, residual walks, pure orientation-RNN, WebXR hand tendrils, observer-based portals, and quantum-inspired oracles. Combines GPU particle vortex + local self-attention over DOM tokens + bidirectional morphing + sealed genome transfer in a way not previously attempted.

**Architecture**
- Single `index.html` (no external dependencies)
- WebGPU: compute shader for ~2048 particles (pos, vel, latent); render as points or short trails. Attention computed on CPU (tiny, 6 cards × 4 heads) for simplicity and reliability, uniforms uploaded each frame.
- Attention: cards as keys/values (position, size, hue state); queries from pointer + orientation + global entropy. Outputs: per-card attraction strength, emission rate, morph scale.
- DOM: 5 absolute cards; their CSS transforms/filters driven by attention; drag updates position and injects attention bias.
- IndexedDB `f540-attention-vortex`; BroadcastChannel `f540-genome` for sealed transfer (FNV-like hash of weight prefix must match before adopt).
- Fitness proxy: attention entropy balance + particle density under cards + user drag count.
- Fallback: Canvas2D particle approximation; mouse-only.

**Expected outcome**
Runnable prototype in which moving the pointer or tilting the device focuses the attention vortex around specific DOM cards; cards visually "weave" (scale, color shift, slight reposition) in response to the attention field; particles swarm and form transient vortices; Seal transfers a high-fitness attention policy across tabs. Visual feedback is immediate; offline capable.

**Mechanics**
1. Initialize random particle distribution + random attention weights; load from IndexedDB if present.
2. Listen for pointermove, DeviceOrientationEvent, drag on cards, BroadcastChannel, Seal button.
3. Each frame: compute attention over cards + pointer, upload uniforms, dispatch particle compute (vortex forces from attention centers + density deposit), update DOM card styles from attention outputs, render particles.
4. Compute fitness; Seal writes weights + hash + fitness.
5. On receive: verify seal hash → adopt if fitness higher.

**Files**
- drafts/F540-webgpu-self-attention-vortex-dom-mind/SPEC.md
- drafts/F540-webgpu-self-attention-vortex-dom-mind/index.html

**V01D landing**
Self-attention vortex DOM weaver stage under `void-live-deploy/skills/webgpu-attention-vortex-dom.js`; test asserts pointer/orientation → attention scores → card morph + particle vortex center shift and BroadcastChannel sealed genome adoption.

**Files**: drafts/F540-webgpu-self-attention-vortex-dom-mind/SPEC.md, drafts/F540-webgpu-self-attention-vortex-dom-mind/index.html

## Frontier Engine F-541 (2026-11-04)

**F541-reservoir-orientation-competitive-dom-agents-mind**

Entry added by ledger-guard from drafts/F541-reservoir-orientation-competitive-dom-agents-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination for The Verse canvas: Multiple discrete competitive Verse agents embodied as absolute-positioned DOM cards, each driven by its own tiny Echo State Reservoir (liquid state machine / reservoir computing — previously unused; not MLP, not feedforward, not standard RNN unroll). DeviceOrientation deltas (or pointer velocity) plus local spatial sensors (nearby agent density, pheromone sample) are injected as causal input into the reservoir. Reservoir readouts control each agent's velocity and deposit rate onto a shared decaying Canvas2D pheromone field. Agents compete territorially: overlapping or high local density reduces fitness for the weaker reservoir; exclusive coverage + persistence is rewarded. High-fitness agents can Seal their reservoir readout weights + fitness; BroadcastChannel enables multi-tab sealed genome adoption by other agents/tabs if fitness is higher. Fully offline after load. Deliberately leaves the recent cluster of WebGPU continuous physics/CA kernels (Lenia, SPH, lattice-gas, electrostatic, quantum walk, attention vortices) + orientation-MLP DOM buoys/probes.

**Novelty**
Leaves dominant recent cluster of WebGPU physics/CA + MLP steering + DOM morph/buoy. Introduces reservoir computing as the local model, spatial exclusion competition among discrete physical DOM agents (hybrid embodiment with simple collision push), and sealed genome transfer of reservoir parameters. No particle physics kernel, no attention lattice, no NCA.

**Architecture**
- Single `index.html` (no external dependencies)
- Canvas2D shared pheromone field (decay + deposit)
- 6 DOM agent cards: position, velocity; simple Euler integration + pairwise soft collision repulsion
- Per-agent Echo State Reservoir: 24 reservoir nodes, sparse random weights (fixed), input weights random, trainable readout (3 outputs: vx bias, vy bias, deposit). Inputs: orient Δβ/Δγ or pointer vx/vy, local density, self fitness proxy. Reservoir state updated each frame; readout linear.
- IndexedDB `f541-reservoir`; BroadcastChannel `f541-genome` for sealed transfer (FNV-like hash of readout weights must match before adopt).
- Fitness: exclusive area proxy (low overlap density) + pheromone under self + survival time.
- Fallback: pointer-only if no DeviceOrientation; always Canvas2D.

**Expected outcome**
Runnable prototype in which tilting the device (or moving pointer) causally drives reservoir dynamics that move the agents and deposit traces; agents push each other and compete for space; Seal transfers high-fitness reservoir policies across tabs. Visual feedback immediate; offline capable.

**Mechanics**
1. Initialize random reservoir weights + readouts per agent; load from IndexedDB if present.
2. Listen for DeviceOrientationEvent, pointermove, BroadcastChannel, Seal button, drag on agents.
3. Each frame: inject inputs to each reservoir, update state, compute readouts → velocities, deposit pheromone, integrate positions, resolve collisions, update DOM styles, decay field, render.
4. Compute per-agent fitness; Seal writes best readout + hash + fitness.
5. On receive: verify seal hash → adopt into lowest-fitness agent if higher.

**Files**
- drafts/F541-reservoir-orientation-competitive-dom-agents-mind/SPEC.md
- drafts/F541-reservoir-orientation-competitive-dom-agents-mind/index.html

**V01D landing**
Reservoir competitive DOM agents stage under `void-live-deploy/skills/reservoir-orientation-competitive-dom.js`; test asserts orientation delta → reservoir state change → agent velocity shift and BroadcastChannel sealed genome adoption.

**Files**: drafts/F541-reservoir-orientation-competitive-dom-agents-mind/SPEC.md, drafts/F541-reservoir-orientation-competitive-dom-agents-mind/index.html

## Frontier Engine F-541 (2026-11-04)

**F541-webgpu-camera-flow-mlp-spatial-mind**

Entry added by ledger-guard from drafts/F541-webgpu-camera-flow-mlp-spatial-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination for The Verse canvas: Opt-in getUserMedia camera provides a live low-resolution luminance field. Simple frame-differencing estimates optical flow. A tiny local MLP (CPU, ~40 weights) maps flow statistics (magnitude bins, direction histogram) + pointer velocity to particle force scales, emission rates, and spatial attraction. A Canvas2D (WebGPU compute extension point) particle system is advected by the projected flow field. Absolute-positioned DOM cards track and morph toward high-flow regions projected from the camera view onto the canvas, embodying real-world motion as a spatial Verse field. Fitness = particle density on high-flow zones + card tracking error inverse. Seal persists MLP weights to IndexedDB with FNV-like hash; BroadcastChannel enables cross-tab adoption of higher-fitness genomes. Offline after permission grant. Deliberately leaves recent clusters of orientation-MLP lattices, SPH/fluids, self-attention particles, WebXR tendrils, residual walks, and pure pointer fields. Camera input is unused in prior F drafts.

**Novelty**
First use of live camera optical-flow as primary causal input to a local MLP that steers a spatial particle field and DOM card embodiment. Combines real-world visual motion capture, local evolutionary policy, GPU-ready particle advection, and sealed genome transfer in a way not previously attempted.

**Architecture**
- Single `index.html` (no external dependencies)
- Camera: getUserMedia video → offscreen canvas for 32x24 luminance sampling; frame difference for flow mag/dir.
- MLP: 12 inputs (flow bins, pointer, entropy) → 8 hidden → 4 outputs (force, viscosity, emit, card bias). Online fitness from density + tracking.
- Particles: ~800 points advected by interpolated flow + MLP forces; rendered as trails.
- DOM: 4 absolute cards; each frame their position lerps toward projected high-flow centroids; scale/hue by local flow.
- IndexedDB `f541-camera-flow-mlp`; BroadcastChannel `f541-genome` (hash must match before adopt).
- Fallback: synthetic mouse-driven flow if camera denied; Canvas2D always; WebGPU probe for future compute path.

**Expected outcome**
Runnable prototype in which granting camera permission makes particles swarm and DOM cards drift toward areas of real-world motion (hand waves, objects); MLP adapts force response; Seal transfers a high-fitness flow-response policy across tabs. Immediate visual feedback; works offline after first load.

**Mechanics**
1. Initialize random particles + random MLP weights; load from IndexedDB if present.
2. Button requests camera; on success, sample frames for flow.
3. Each frame: compute flow stats, forward MLP, advect particles, update card positions/styles, render.
4. Compute fitness; Seal writes weights + hash + fitness.
5. On receive: verify seal hash → adopt if fitness higher.

**Files**
- drafts/F541-webgpu-camera-flow-mlp-spatial-mind/SPEC.md
- drafts/F541-webgpu-camera-flow-mlp-spatial-mind/index.html

**V01D landing**
Camera-flow MLP spatial stage under `void-live-deploy/skills/webgpu-camera-flow-mlp.js`; test asserts camera frame difference → MLP → particle advection + card tracking and BroadcastChannel sealed genome adoption.

**Files**: drafts/F541-webgpu-camera-flow-mlp-spatial-mind/SPEC.md, drafts/F541-webgpu-camera-flow-mlp-spatial-mind/index.html

## Frontier Engine F-542 (2026-11-04)

**F542-webgpu-wave-interference-phase-dom-mind**

Entry added by ledger-guard from drafts/F542-webgpu-wave-interference-phase-dom-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination for The Verse canvas: A spatial field of circular wave interference whose sources are absolute-positioned DOM Verse resonators (cards). Each resonator carries frequency, phase offset, and amplitude. The continuous wave field (analytical superposition or discrete update) is computed on a grid (WebGPU compute preferred, Canvas2D fallback) and sampled at each resonator’s location to drive its visual morph (hue-rotate from local phase, scale and opacity from local amplitude). The pointer acts as a transient high-amplitude source. Dragging a resonator relocates its source; clicking cycles frequency. A lightweight evolutionary step (optional Worker) mutates source parameters toward higher field entropy or interaction duration. Seal persists the source genome (frequencies, phases, positions) to IndexedDB with a simple hash. Fully offline. Falls back gracefully if WebGPU is unavailable.

**Novelty**
Leaves the dominant recent clusters of SPH fluids, particle vortices with attention, lattice-gas/Ising/NCA, residual quantum walks, orientation-MLPs, WebXR tendrils, observer portals, and pure audio resonators. Combines continuous wave interference physics + DOM cards as active oscillating sources + bidirectional phase/amplitude feedback to CSS morphs + pointer as dynamic source. No prior draft uses interference superposition as the primary spatial medium coupling to DOM phase.

**Architecture**
- Single `index.html` (self-contained, no external deps).
- 6–8 DOM resonators (absolute, draggable).
- Wave field: 128×72 or similar grid; either WebGPU storage buffer + compute shader for discrete wave equation, or analytical sum in JS for reliability.
- Sampling: for each card, bilinear sample of phase and amplitude → CSS `filter: hue-rotate()`, `transform: scale()`, opacity.
- Pointer: additional source with decaying amplitude.
- Evolution: simple mutation of frequencies every few seconds biased by recent interaction count or field variance.
- IndexedDB store `f542-wave-genome`.
- Seal button writes current sources + hash.

**Expected outcome**
Runnable prototype in which dragging and tuning DOM resonators creates visible interference patterns on the canvas; cards morph in color and size according to the local wave phase and amplitude; pointer ripples propagate; Seal persists the configuration. Works offline; Canvas2D path always available.

**Mechanics**
1. Initialize random source parameters; load from IndexedDB if present.
2. Each frame: update time, compute wave field (superposition or step), render to canvas, sample at card centers, apply CSS morphs.
3. Pointer move injects transient source.
4. Drag updates source position; click advances frequency.
5. Optional: mutate sources toward higher entropy.
6. Seal persists genome.

**Files**
- drafts/F542-webgpu-wave-interference-phase-dom-mind/SPEC.md
- drafts/F542-webgpu-wave-interference-phase-dom-mind/index.html

**V01D landing**
Wave interference phase stage under `void-live-deploy/skills/webgpu-wave-interference-phase.js`; test asserts source drag → field update → card hue/scale change and IndexedDB roundtrip.

**Files**: drafts/F542-webgpu-wave-interference-phase-dom-mind/SPEC.md, drafts/F542-webgpu-wave-interference-phase-dom-mind/index.html

## Frontier Engine F-543 (2026-11-04)

**F543-orientation-rnn-sealed-dom-agents**

Entry added by ledger-guard from drafts/F543-orientation-rnn-sealed-dom-agents/SPEC.md, after a full-file write dropped it.


**Concept**
DeviceOrientationEvent provides causal sequential input (alpha/beta/gamma history) to per-agent local Elman RNNs. Each RNN drives velocity of a physical DOM Verse card. Agents compete in screen space; on AABB collision the higher-energy agent absorbs a sealed genome fragment (weight snapshot hashed into IndexedDB). BroadcastChannel enables multi-tab shared competition. Branches from recent WebGPU physics-kernel + MLP/attention + DOM resonator/vortex/lattice cluster into sequential causal local models controlling multi-agent physical embodiments with sealed transfer.

**Novelty**
- First use of DeviceOrientation as causal RNN input (not MLP static or pointer residual).
- Multi-agent competition with sealed genome transfer on physical collision (not auction or attention lattice).
- Hybrid embodiment: RNNs output forces that directly transform living DOM cards under simple rigid constraints.
- Persistent seals via IndexedDB + optional BroadcastChannel cross-tab.

**Failure modes**
- DeviceOrientation permission denied or unavailable (desktop): falls back to pointer-driven synthetic orientation.
- RNN explosion: clipped hidden state and learning rate 0.
- Collision spam: cooldown per pair.
- IndexedDB quota: seals are small JSON.

**Build**
Single-file index.html. Offline. Canvas2D trails optional. WebGPU path reserved for future compute of RNN batch.

**Files**: drafts/F543-orientation-rnn-sealed-dom-agents/SPEC.md, drafts/F543-orientation-rnn-sealed-dom-agents/index.html

## Frontier Engine F-545 (2026-11-04)

**F545-devicemotion-hopfield-svg-competitive-mind**

Entry added by ledger-guard from drafts/F545-devicemotion-hopfield-svg-competitive-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A population of living SVG agents whose path geometry is generated from states recalled by a local Hopfield associative memory network. DeviceMotionEvent (acceleration history) and pointer trajectories imprint binary patterns into the Hopfield. Agents periodically query the memory; the recalled pattern morphs their SVG control points. Agents compete in screen space via simple physics; on collision the higher-stability agent transfers a sealed fragment of the current Hopfield weight matrix (hashed snapshot) to the other. Best patterns persist in IndexedDB. Fully offline single-file prototype. No WebGPU, no continuous field kernels, no MLP/RNN residual policies.

**Novelty**
Leaves the dominant recent cluster of WebGPU continuous physics kernels (SDF raymarch, wave interference, self-attention vortex, SPH, camera flow, lattice-gas) coupled to evolutionary/MLP/RNN policies that sample or drive living DOM cards with sealed IndexedDB genomes. Core novel combination is a classical Hopfield associative memory (energy-minimizing binary patterns, not feed-forward MLP, not Elman RNN, not reservoir) whose causal input is DeviceMotion acceleration + pointer history, controlling generative SVG path morphs (not canvas particles, not DOM cards as primary agents, not softbody springs) under multi-agent collision-gated sealed weight-fragment transfer. Not substrate simulations, not neural policy gradients, not spectral/audio residuals.

**Architecture**
- Single index.html, offline after load.
- Hopfield: N=64 binary units, Hebbian weights from imprinted patterns (up to 8 stored).
- 6–8 SVG <path> agents; control points decoded from recalled binary vectors.
- DeviceMotion: buffer last 32 accel samples, threshold to binary imprint on significant motion.
- Pointer: drag imprints trajectory-derived pattern.
- Competition: simple velocity + repulsion; on overlap transfer sealed fragment (JSON of weight slice + hash).
- IndexedDB `f545-hopfield-patterns`; Seal button stores current weights + patterns.
- Fallback: synthetic motion from pointer if DeviceMotion unavailable.

**Expected outcome**
Runnable prototype in which shaking or gesturing the device (or moving the pointer) imprints patterns that agents recall and morph into; colliding agents exchange sealed fragments; Seal freezes the memory for reload. SVG shapes visibly change with recalled states.

**Mechanics**
1. Initialize random Hopfield weights; load from IndexedDB if present.
2. Each frame: update agent positions, check collisions for transfer, occasionally recall and morph SVG.
3. DeviceMotion / pointer events imprint new patterns via Hebbian update.
4. Seal writes weights + hash.
5. Agents display current recalled pattern id.

**Failure modes**
- DeviceMotion permission denied or desktop: pointer-only imprint path.
- Hopfield capacity exceeded: fade oldest pattern.
- SVG path invalid: clamp control points.
- IndexedDB unavailable: session-only memory.

**Files**
- drafts/F545-devicemotion-hopfield-svg-competitive-mind/SPEC.md
- drafts/F545-devicemotion-hopfield-svg-competitive-mind/index.html

**V01D landing**
Hopfield SVG competitive stage under void-live-deploy/skills/hopfield-svg-agents.js; test asserts DeviceMotion or pointer imprint → agent morph change and collision transfer updates peer weights.

**Files**: drafts/F545-devicemotion-hopfield-svg-competitive-mind/SPEC.md, drafts/F545-devicemotion-hopfield-svg-competitive-mind/index.html

## Frontier Engine F-546 (2026-11-04)

**F546-webgpu-self-vision-particle-mind**

Entry added by ledger-guard from drafts/F546-webgpu-self-vision-particle-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-self-vision-particle-mind`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of DeviceMotion-Hopfield SVG competitive agents (F545), WebGPU wave interference phase-DOM (F542), self-attention vortex (F540), reservoir-orientation competitive DOM (F541). Explicitly leaves associative memories (Hopfield), continuous wave kernels, self-attention, residual RNNs, orientation sensors, DeviceMotion imprinting, SVG path morphs, and all prior external-sensor-driven particle/MLP systems.

**Concept**
A WebGPU compute particle swarm (Canvas2D fallback) whose shared tiny pure-JS MLP controller receives, each frame, a downsampled "retina" of the previous rendered frame in addition to local particle statistics. Particles render glowing points and trails; the network observes the emergent visual field it itself produces and modulates global attractors, emission rates, and velocity biases, closing a self-referential visual feedback loop. Pointer plants a temporary energy source that the particles chase and the network "sees". Seal persists MLP weights + visual-hash snapshot to IndexedDB. Fully offline single-file prototype. No external sensors (no orientation, motion, audio, light), no DOM cards as primary agents, no evolutionary genome transfer between agents.

**Novelty**
Leaves the dominant recent clusters of sensor-driven (orientation/DeviceMotion/audio/camera) MLP/RNN/Hopfield policies controlling particles, SVG morphs, or DOM cards, and continuous physics kernels (waves, SPH, attention vortices). Core novel combination is a closed-loop local visual cortex: the simulation observes its own previous render target (downsampled retina) as primary input to the neural controller that then steers the same simulation. Not feed-forward external sensing, not associative pattern recall, not phase-coupled resonators. The mind sees what it draws and changes what it draws next.

**Architecture**
- Single `index.html`, offline after load.
- WebGPU preferred: compute shader updates particle positions/velocities from shared uniforms (MLP outputs); render pass draws points. Canvas2D fallback with requestAnimationFrame.
- MLP: pure JS, 72→16→8→4 (64 retina + 8 summary stats → biases, attractor strength, hue shift, trail decay).
- Retina: after each frame, getImageData, average to 8×8 grayscale, normalize, feed to MLP.
- Pointer: sets a decaying attractor position sampled into the summary stats.
- IndexedDB `f546-self-vision-weights`; Seal button stores weights + simple perceptual hash of last retina.
- Fallback synthetic noise retina if canvas sampling fails.

**Expected outcome**
Runnable prototype in which particles form self-organized patterns (clusters, swirls, pulses) that evolve in response to the visual structure they create; moving the pointer injects visible chase behavior that the network incorporates into future dynamics; Seal restores the learned weights across reloads. Works offline; graceful Canvas2D path always available.

**Mechanics**
1. Initialize random MLP weights (or load from IndexedDB); spawn ~2k–4k particles.
2. Each frame: sample previous frame to 8×8 retina + particle stats → MLP forward pass → update global params (attractor, color, decay).
3. Update particles (WebGPU compute or JS); render to canvas.
4. Pointer move/click sets attractor; decay over time.
5. Seal button: serialize weights + retina hash to IndexedDB.
6. On load: restore if present; otherwise random init and begin observing.

**Failure modes**
- WebGPU unavailable on some devices → Canvas2D path must remain fully interactive.
- getImageData security/taint → synthetic retina fallback.
- Feedback loop collapse to uniform field or explosion → clamp MLP outputs, add mild damping.
- IndexedDB quota → silent fail, continue in-memory.

**Files**: drafts/F546-webgpu-self-vision-particle-mind/SPEC.md, drafts/F546-webgpu-self-vision-particle-mind/index.html

## Frontier Engine F-547 (2026-11-04)

**F547-orientation-mlp-boid-dom-genome**

Entry added by ledger-guard from drafts/F547-orientation-mlp-boid-dom-genome/SPEC.md, after a full-file write dropped it.


**Slug**: `orientation-mlp-boid-dom-genome`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of self-vision particles (F546), DeviceMotion-Hopfield SVG competitive (F545), WebGPU SDF evolutionary DOM coverage (F544), wave interference phase-DOM (F542), self-attention vortex (F540), SPH buoyant (F539). Explicitly leaves continuous field kernels (particles/SPH/SDF/waves/attention/vortex), associative Hopfield memories, residual predictors, pure NCA, softbody, orientation RNN, and sensor-driven policy on implicit surfaces or spectral residuals.

**Concept**
A swarm of living DOM Verse cards that behave as Reynolds boids (cohesion / separation / alignment). A shared local tiny pure-JS MLP takes DeviceOrientation history (or pointer-velocity proxy) as causal input and outputs the three rule weights plus attractor strength. Cards compete by proximity: the higher-fitness agent seals and transfers a hashed fragment of the current MLP weights to the lower one. Best weights persist in IndexedDB. Fully offline single-file prototype. No continuous physics kernels, no neural cellular automata, no SVG path morphs.

**Novelty**
Leaves the dominant recent clusters of WebGPU continuous physics (SDF raymarch, wave interference, SPH, self-vision particles, attention vortices) coupled to evolutionary/MLP/RNN/Hopfield policies that drive particles or sample living DOM. Core novel combination is classic discrete-agent Reynolds boids (not field kernels) embodied as physical DOM cards under local feed-forward MLP control whose causal input is DeviceOrientation, with proximity-gated sealed genome (weight-fragment) transfer. Not substrate simulations, not associative pattern recall, not residual walks, not pointer-history force fields.

**Architecture**
- Single index.html, offline after load.
- 8–12 absolute-positioned .verse-card DOM elements as boids (position/velocity in JS).
- MLP: 12→8→4 (orientation history + pointer delta → cohesion, separation, alignment, attractor).
- DeviceOrientationEvent (with permission prompt); fallback synthetic from pointer motion.
- Pointer: sets temporary attractor; cards chase it according to MLP output.
- Competition: on distance < 80px, higher fitness (alignment coherence + speed) transfers sealed weight slice + hash; visual pulse on transfer.
- IndexedDB `f547-boid-mlp`; Seal button stores weights + fitness.
- BroadcastChannel optional for multi-tab genome share (simple).
- Fallback: no WebGPU required; pure DOM+JS always works.

**Expected outcome**
Runnable prototype in which tilting the device (or moving the pointer) changes flock behavior (tight clusters vs loose wandering); cards chase the pointer; colliding cards exchange sealed genomes and morph their motion; Seal restores the learned weights across reloads. Works offline on desktop (pointer proxy) and mobile (orientation).

**Mechanics**
1. Initialize random MLP weights (or load from IndexedDB); spawn cards with random pos/vel.
2. Each frame: sample orientation/pointer → MLP forward → update boid forces → integrate positions → check proximity for transfer → update DOM transforms.
3. Orientation / pointer events buffer history.
4. Seal button: serialize weights + hash to IndexedDB.
5. On load: restore if present.

**Failure modes**
- DeviceOrientation permission denied or desktop: pointer-velocity proxy path remains fully interactive.
- MLP outputs extreme: clamp weights to [0.1, 2.0].
- Cards escape viewport: wrap or soft bounds.
- IndexedDB quota / unavailable: session-only memory.
- Too many cards on low-end: reduce count.

**Files**
- drafts/F547-orientation-mlp-boid-dom-genome/SPEC.md
- drafts/F547-orientation-mlp-boid-dom-genome/index.html

**V01D landing**
Boid DOM genome stage under void-live-deploy/skills/orientation-mlp-boid-dom.js; test asserts orientation or pointer change → flock weight shift and proximity transfer updates peer MLP.

**Files**: drafts/F547-orientation-mlp-boid-dom-genome/SPEC.md, drafts/F547-orientation-mlp-boid-dom-genome/index.html

## Frontier Engine F-548 (2026-11-04)

**F548-webgpu-semantic-embedding-swarm-mind**

Entry added by ledger-guard from drafts/F548-webgpu-semantic-embedding-swarm-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-semantic-embedding-swarm-mind`  
**Date**: 2026-11-04  
**Branch from**: Recent orientation-MLP boid DOM (F547), self-vision particles (F546), DeviceMotion-Hopfield SVG (F545). Explicitly leaves Reynolds boids, continuous field kernels (SDF/SPH/waves/attention), associative memories, residual oracles, pure NCA, and sensor-driven policies on implicit surfaces.

**Concept**
A WebGPU-accelerated particle swarm in which every particle carries a low-dimensional embedding vector. Forces are computed from cosine similarity under a small evolved kernel matrix (local Web Worker genetic algorithm). Emerging high-similarity clusters act as semantic attractors that physically pull labeled DOM cards toward them. Pointer motion injects new particles whose embeddings are derived from a simple velocity hash. The evolved kernel is sealable to IndexedDB. Fully offline single-file prototype.

**Novelty**
Leaves the dominant recent clusters of boid rule weights under MLP control and continuous physics kernels coupled to evolutionary policies. Core novel combination is GPU particle forces driven by evolved embedding similarity (not cohesion/separation/alignment or field diffusion), with living DOM cards as semantic participants attracted to cluster centroids. Not substrate simulations, not associative pattern recall, not residual walks, not pointer-history force fields of prior F- drafts.

**Architecture**
- Single index.html, offline after load.
- WebGPU compute path for particle update (fallback Canvas2D/JS integration if no WebGPU).
- 200–400 particles, each with 4-dim embedding (random init, pointer-injected via simple hash).
- Kernel: 4×4 matrix evolved by Worker GA (population 16, fitness = cluster count × mean intra-cluster similarity + pointer engagement).
- 6–8 absolute DOM cards with fixed seed labels; each frame sample nearest cluster centroid and lerp card position.
- Pointer: inject particle at location with embedding from velocity hash; temporary attractor bias.
- IndexedDB `f548-embed-kernel`; Seal button stores matrix + fitness.
- Visual: canvas for particles colored by dominant embedding component; cards morph opacity by cluster strength.

**Expected outcome**
Runnable prototype in which particles form visible semantic clusters under the evolved similarity kernel; labeled cards migrate toward matching clusters; injecting via pointer creates new clusters that cards respond to; Seal restores the learned kernel across reloads. Works with or without WebGPU.

**Mechanics**
1. Initialize random embeddings and kernel (or load from IndexedDB); spawn particles and cards.
2. Each frame: GPU/JS compute similarity forces using current kernel → integrate positions → identify clusters (simple grid binning) → attract cards to centroids → render.
3. Pointer move injects particle; GA step every ~2 s in Worker.
4. Seal button: serialize kernel + hash to IndexedDB.
5. On load: restore if present.

**Failure modes**
- No WebGPU: automatic Canvas2D fallback remains fully interactive.
- Extreme forces: clamp velocities and kernel values to [-1,1].
- Cards escape viewport: soft bounds or wrap.
- IndexedDB quota / unavailable: session-only memory.
- Too many particles on low-end: reduce count.

**Files**
- drafts/F548-webgpu-semantic-embedding-swarm-mind/SPEC.md
- drafts/F548-webgpu-semantic-embedding-swarm-mind/index.html

**V01D landing**
Semantic embedding swarm stage under void-live-deploy/skills/webgpu-semantic-swarm.js; test asserts pointer injection → new cluster forms and at least one DOM card translates toward it within 2 s.

**Files**: drafts/F548-webgpu-semantic-embedding-swarm-mind/SPEC.md, drafts/F548-webgpu-semantic-embedding-swarm-mind/index.html

## Frontier Engine F-549 (2026-11-04)

**F549-broadcast-rnn-shared-causal-lattice-mind**

Entry added by ledger-guard from drafts/F549-broadcast-rnn-shared-causal-lattice-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `broadcast-rnn-shared-causal-lattice-mind`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of WebGPU semantic embedding particle swarms (F548), orientation-MLP Reynolds boid DOM genome transfer (F547), DeviceMotion Hopfield SVG morph competitive agents (F545), WebGPU SDF evolutionary DOM coverage (F544), orientation-RNN sealed DOM agents (F543), wave-interference phase DOM, self-attention vortices, SPH, self-vision particles. Explicitly leaves particle swarms, boid rule weights, Hopfield associative recall, SVG path morphs, continuous field kernels (SDF/SPH/waves/attention), residual oracles, pure NCA, softbody DOM, orientation/device-motion as direct MLP/RNN policy input, and proximity-gated weight-fragment transfer.

**Concept**
A persistent 32×32 causal lattice field (activation + phase) stored in IndexedDB and synchronized across same-origin tabs via BroadcastChannel. Each tab runs an independent local Elman-style RNN that observes only a local neighborhood of the shared lattice (never raw sensor streams) and outputs a sparse “emission” (position + strength) that is injected into the lattice. DeviceOrientation / DeviceMotion (or pointer-velocity proxy) injects exogenous causal events into the lattice at a sensor-derived location; the RNN learns to anticipate and amplify coherent patterns. Sealed genome transfer occurs by broadcasting a hashed RNN weight snapshot; receiving tabs can adopt it only if the hash matches and fitness improves. Fully offline single-file prototype after first load.

**Novelty**
Leaves the dominant recent clusters of GPU particle forces, discrete-agent boids under sensor-driven MLP, associative Hopfield controlling generative SVG, and evolutionary policies sampling living DOM cards. Core novel combination is a multi-tab shared persistent lattice field (BroadcastChannel + IndexedDB) whose evolution is modulated by a local RNN that sees only the field (not sensors), with sensors as exogenous injectors and sealed weight transfer via broadcast hash rather than physical collision. Not substrate particle simulations, not direct sensor-to-policy, not proximity genome exchange.

**Architecture**
- Single index.html, offline after load.
- 32×32 Float32 lattice (activation, phase) in a canvas visualization (heat + flow arrows).
- Local Elman RNN: input 9 (3×3 neighborhood) → hidden 16 → output 3 (emit x, y, strength).
- Sensors: DeviceOrientationEvent / DeviceMotionEvent inject Gaussian events; pointer move injects at cursor.
- BroadcastChannel `f549-lattice`: periodic lattice delta + optional sealed weight package.
- IndexedDB `f549-shared-lattice` + `f549-rnn-weights`: restore on load; Seal button persists current best.
- 4–6 absolute DOM “observer cards” that display local lattice stats and can be dragged to set preferred observation windows (affects RNN input sampling).
- Fallback: no WebGPU; pure JS + Canvas2D. No WebXR required.

**Expected outcome**
Runnable prototype in which tilting/moving the device or pointer injects visible events into the lattice; the RNN begins emitting reinforcing patterns that propagate and stabilize across tabs (open two tabs to see sync); Seal stores the lattice + weights; receiving a sealed broadcast from another tab can improve local fitness. Works offline on desktop (pointer) and mobile (orientation).

**Mechanics**
1. Initialize random lattice + RNN (or load from IndexedDB); open BroadcastChannel.
2. Each frame: sample sensor or pointer → inject event → RNN forward on neighborhood → emit if strength > threshold → diffuse/decay lattice → render canvas → update observer cards → broadcast delta every ~200 ms.
3. On receiving sealed package: verify hash, compare fitness, optionally adopt.
4. Seal button: serialize lattice + weights + hash to IndexedDB and broadcast.
5. On load: restore if present; request orientation permission on first interaction.

**Failure modes**
- BroadcastChannel / IndexedDB unavailable: single-tab session-only memory remains interactive.
- DeviceOrientation permission denied or desktop: pointer-velocity proxy injection path.
- RNN outputs extreme: clamp emit strength and positions.
- Lattice blow-up: hard clamp activations to [-1,1], exponential decay.
- Cross-tab desync: last-write-wins with timestamp; visual indicator of peer count.

**Files**
- drafts/F549-broadcast-rnn-shared-causal-lattice-mind/SPEC.md
- drafts/F549-broadcast-rnn-shared-causal-lattice-mind/index.html

**V01D landing**
Shared causal lattice stage under void-live-deploy/skills/broadcast-rnn-lattice.js; test asserts pointer injection → lattice activation change, BroadcastChannel message received in second context, and Seal restores state after reload.

**Files**: drafts/F549-broadcast-rnn-shared-causal-lattice-mind/SPEC.md, drafts/F549-broadcast-rnn-shared-causal-lattice-mind/index.html

## Frontier Engine F-549 (2026-11-04)

**F549-webgpu-spectral-nca-living-cards-mind**

Entry added by ledger-guard from drafts/F549-webgpu-spectral-nca-living-cards-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-spectral-nca-living-cards-mind`  
**Date**: 2026-11-04  
**Branch from**: Semantic embedding swarm (F548), self-vision particles (F546), SPH buoyant (F539). Explicitly leaves particle swarms, embedding similarity forces, boid/MLP policies, reservoir competitive agents, and pure orientation-driven kernels.

**Concept**
A WebGPU-accelerated Neural Cellular Automaton (NCA) whose grid is continuously seeded by live microphone spectral features (AnalyserNode peak bins treated as soft phoneme injections). High-activity regions of the growing NCA act as attractors that physically pull, scale, rotate and tint floating DOM cards (Verse-style sticky notes / tools) as if they were living organs of the field. A local Web Worker genetic algorithm evolves the NCA kernel weights for sustained growth entropy correlated with audio energy. The evolved kernel + last seed pattern is sealable to IndexedDB. Fully offline single-file prototype with Canvas2D fallback.

**Novelty**
Leaves the dominant recent clusters of GPU particle forces (embedding/cosine, boids, SPH, self-attention vortices), residual oracles, Hopfield SVG, and pure sensor-policy agents. Core novel combination is live spectral seeding of a continuous NCA substrate whose emergent high-density zones become physical attractors for labeled DOM cards that morph as organs. Not particle swarms, not associative memories, not pointer-history fields, not orientation RNNs.

**Architecture**
- Single index.html, offline after load.
- WebGPU compute path for NCA update (32x32 or 64x64 grid, fallback JS/Canvas2D).
- AnalyserNode on getUserMedia for 16-bin spectral vector injected as additive seeds every frame.
- Floating DOM cards (3–5 sticky-style divs) with positions updated by bilinear sample of NCA activity; CSS transforms for scale/rotation/opacity.
- Worker GA (pop 12, fitness = field entropy × audio-correlation + card engagement).
- Seal button writes kernel + pattern to IndexedDB; load restores.

**Expected outcome**
User grants mic, speaks or plays sound: NCA grows organic patterns seeded by spectrum. Cards drift toward and morph around active regions. Evolution slowly improves growth. Seal preserves the current “mind”. Demonstrates novel spectral-NCA-to-DOM-organ coupling never previously built in the ledger.

**Mechanics**
1. Request mic, create AnalyserNode, sample frequency data.
2. Each frame: inject top bins as seed values into NCA grid corners or random cells.
3. Run NCA step (WebGPU or JS): local 3x3 kernel convolution + activation.
4. Sample activity at card positions; apply force toward higher activity, modulate scale by local density.
5. Every N frames, Worker evaluates fitness, mutates, selects new kernel.
6. Render NCA to canvas overlay; cards float above.

**Failure modes**
- No mic permission: falls back to pointer-velocity seeding.
- No WebGPU: Canvas2D JS NCA (slower but functional).
- Audio silence: pure spontaneous growth from residual seeds.
- IndexedDB unavailable: seal shows warning, continues in-memory.

**Files**
- drafts/F549-webgpu-spectral-nca-living-cards-mind/SPEC.md
- drafts/F549-webgpu-spectral-nca-living-cards-mind/index.html

**Files**: drafts/F549-webgpu-spectral-nca-living-cards-mind/SPEC.md, drafts/F549-webgpu-spectral-nca-living-cards-mind/index.html

## Frontier Engine F-550 (2026-11-04)

**F550-webxr-gaze-predictive-mlp-agents**

Entry added by ledger-guard from drafts/F550-webxr-gaze-predictive-mlp-agents/SPEC.md, after a full-file write dropped it.


**Concept**
Interactive spatial canvas where user gaze (WebXR inputSources or pointer proxy) is predicted by per-agent local tiny MLPs. Agents compete for predicted attention, move via physics, and transfer sealed genomes on high-confidence observation events. Offline, single-file, Canvas2D primary with WebXR optional.

**Branch**
Away from WebGPU + orientation/RNN/MLP/DOM-particle/NCA/spectral cluster (F543–F549).

**Novelty**
- True WebXR session with gaze/controller as causal input to never-before-used predictive local models.
- Competitive multi-agent with sealed (SHA-256) genome transfer triggered by prediction success, not proximity alone.
- Hybrid embodiment: agents as physical UI elements on canvas influenced by local AI anticipating user.

**Failure modes**
- WebXR not supported: falls back to pointer-as-gaze.
- No GPU: pure JS/Canvas.
- Prediction divergence: fitness decay.

**Files**
- index.html (self-contained, runnable)
- SPEC.md

**Integration**
Lands as Verse canvas prototype; expands building blocks for WebXR + local predictive models.

**Files**: drafts/F550-webxr-gaze-predictive-mlp-agents/SPEC.md, drafts/F550-webxr-gaze-predictive-mlp-agents/index.html

## Frontier Engine F-551 (2026-11-04)

**F551-webgpu-mic-fluid-spectral-mlp-portals**

Entry added by ledger-guard from drafts/F551-webgpu-mic-fluid-spectral-mlp-portals/SPEC.md, after a full-file write dropped it.


**Files**: drafts/F551-webgpu-mic-fluid-spectral-mlp-portals/SPEC.md, drafts/F551-webgpu-mic-fluid-spectral-mlp-portals/index.html

## Frontier Engine F-532 (2026-11-04)

**F532-webgpu-dem-granular-dom-mind**

Entry added by ledger-guard from drafts/F532-webgpu-dem-granular-dom-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Novel combination: a WebGPU compute-shader Discrete Element Method (DEM) granular simulation (previously unused kernel: free particles with pairwise contact detection, linear spring-dashpot forces, friction, cohesion, and restitution — not mass-spring softbody meshes, not lattice-gas streaming, not NCA/Lenia/SIR/Ising, not spectral residuals, not attention lattices). Multi-agent competition among "pile genomes" (parameter sets for friction/cohesion/restitution) where contact density between particle groups triggers sealed genome transfer over BroadcastChannel + IndexedDB. DeviceOrientation tilts the gravity vector as causal input to the physics (not to an MLP/RNN). Absolute-positioned DOM boxes act as true rigid physical bodies: their screen rects are sampled into the compute pass as moving obstacles that particles collide against, and high particle pressure can push the DOM elements. Fully self-contained single-file HTML, offline-capable after load, progressive fallback to Canvas2D if no WebGPU.

This deliberately leaves the recent cluster of orientation/sensor-driven neural policies (MLP/RNN/reservoir/k-NN) controlling cellular automata or continuous fields (SIR, Ising, Physarum, Lenia, lattice-gas, vectorfield, CA-rule) with DOM as sampling portals (F519–F531, F0489–F0492).

**Architecture**
- Single index.html.
- WebGPU compute pipeline: particle buffer (positions, velocities, radii, genome-id), obstacle buffer from DOM rects, force accumulation via atomic or multi-pass contact.
- 4 competing piles (genome groups), particles colored by genome.
- Seal on button or auto when one genome dominates (>60% contacts); SHA-256 of genome params stored in IndexedDB, BroadcastChannel 'f532-dem' for multi-tab adoption of superior fitness (pile height or cohesion survival).
- Orientation: gravity = (sin(gamma), cos(beta), ...) or pointer as tilt fallback.
- DOM boxes: 3 draggable .box elements whose getBoundingClientRect are uploaded as AABBs each frame; particles bounce off them; if local pressure > threshold, apply CSS transform push to the box.
- Status overlay, controls: start orientation, seal, reset piles, toggle cohesion.

**Expected outcome**
Interactive spatial mind: granular piles flow and collide under device tilt, DOM boxes physically interact as barriers/scoops, multi-agent genomes compete and transfer sealed parameters across tabs; runnable offline; graceful 2D fallback.

**Mechanics**
- Particle step in compute shader (or JS fallback).
- Contact: for nearby pairs, compute overlap, apply normal force + friction.
- Genome transfer: if contact fraction between group A and B > threshold, copy B params to A if B fitness higher.
- Fitness: average height of particles or number surviving after tilt.

**Failure modes**
- No WebGPU → Canvas2D particle loop with simplified contacts.
- No DeviceOrientation → mouse-drag tilt or auto-sway.
- IndexedDB/Broadcast blocked → local only.
- Too many particles → reduce to 512.

**Next building blocks**
- True multi-body rigid body coupling beyond AABB.
- WebXR hand as additional scoop geometry.
- Persistent OPFS particle snapshots.
- Ambient light as cohesion modulator.

Dominant prior cluster branched from: orientation/sensor-driven neural local models (MLP etc.) + CA/continuous field substrates + DOM sampling portals with sealed transfer (F519–F531 and recent F048x).

**Void is now Verse everywhere.**

**Files**: drafts/F532-webgpu-dem-granular-dom-mind/SPEC.md, drafts/F532-webgpu-dem-granular-dom-mind/index.html

## Frontier Engine F-552 (2026-11-04)

**F552-webxr-hand-sculpted-volumetric-nca-ui-mind**

Entry added by ledger-guard from drafts/F552-webxr-hand-sculpted-volumetric-nca-ui-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A WebXR (or pointer-proxy) hand-sculpting interface injects activation into a volumetric Neural Cellular Automaton. The NCA evolves emergent structures on WebGPU compute (Canvas2D slice fallback). A local mind samples energy clusters and morphs floating UI panels in space—resizing, repositioning, and reorienting them around the living volume the user sculpts. Hands grow the mind; the mind rearranges the Verse interface in response.

**Branch**
Away from acoustic fluid portals (F551), gaze-predictive agents (F550), spectral living cards, orientation MLPs, and prior NCA/WebGPU particle systems.

**Novelty**
- First hand-tracked (or high-precision pointer) direct sculpting of a volumetric NCA as the causal substrate.
- Closed loop: user sculpts emergent volume → local cluster-mind interprets → physical XR/DOM UI panels morph and orbit the structures.
- Volumetric growth as living interface architect, never previously attempted.

**Architecture**
- Single index.html: WebXR session request with hand-tracking preferred; pointer fallback for desktop.
- WebGPU compute shader for NCA step (or JS/Canvas 2D cellular for compatibility).
- Per-frame: inject at hand/pointer, evolve NCA, detect high-energy clusters, drive panel transforms.
- Panels are DOM elements projected or absolutely positioned relative to volume.

**Expected outcome**
Users can "sculpt" thought-structures with hands or mouse; the UI panels organically rearrange themselves around the growing patterns, creating a living spatial interface that responds to the emergent mind.

**Failure modes**
- No WebXR/WebGPU: pointer + Canvas2D NCA.
- High resolution: cap grid size.
- No hand tracking: treat controllers or pointer as injectors.

**Files**
- index.html (self-contained, runnable)
- SPEC.md

**Integration**
Lands as Verse canvas prototype; expands building blocks for WebXR hand input + volumetric NCA + AI-driven spatial UI morphing.

**Files**: drafts/F552-webxr-hand-sculpted-volumetric-nca-ui-mind/SPEC.md, drafts/F552-webxr-hand-sculpted-volumetric-nca-ui-mind/index.html

## Frontier Engine F-551 (2026-11-04)

**F551-orientation-evo-dom-physics-mind**

Entry added by ledger-guard from drafts/F551-orientation-evo-dom-physics-mind/SPEC.md, after a full-file write dropped it.


**Concept**
DeviceOrientationEvent provides continuous causal input to a local population of tiny genomes (physics parameter sets). A simple (1+1)-ES mutates and selects parameters that control spring stiffness, damping, and attractor strengths of competing physical UI elements (real DOM divs under Euler integration). Fitness rewards how stably the cards track and "respond" to device tilt without oscillation, plus pointer engagement. Winner seals its genome (SHA-256) into IndexedDB and offers it via BroadcastChannel. Hybrid embodiment is the DOM cards themselves. Fully offline, single self-contained file, no WebGPU, no canvas particles, no NCA/spectral/residual predictors.

**Branch**
Away from the dominant recent cluster of WebGPU kernels (spectral-NCA, embedding swarms, self-vision particles, SDF, SPH, Lenia) + local MLP/RNN policies + sensor-driven residual or predictive models + canvas/DOM hybrids (F543–F550). Explicitly leaves all compute shaders, neural forward passes, residual error predictors, pure NCA, spectral residuals, pointer-history force fields, softbody meshes, orientation RNNs, attention lattices, and k-means particles.

**Novelty**
- DeviceOrientation as direct causal driver of an evolutionary strategy (not a trained MLP/RNN) that adapts physical parameters of living DOM elements.
- True hybrid embodiment: the "agents" are CSS-positioned HTML cards with JS physics, not canvas sprites or WebGPU buffers.
- Sealed genome transfer via BroadcastChannel + IndexedDB persistence for multi-tab competition.
- Offline-capable after first load; graceful fallback to pointer when orientation is unavailable.

**Failure modes**
- DeviceOrientation requires secure context + permission on some browsers; falls back to pointer-as-tilt proxy.
- Too-aggressive mutation can destabilize cards; fitness decays on high velocity.
- BroadcastChannel limited to same-origin tabs.

**Files**
- drafts/F551-orientation-evo-dom-physics-mind/SPEC.md
- drafts/F551-orientation-evo-dom-physics-mind/index.html

**Integration**
Lands as Verse canvas prototype expanding building blocks for evolutionary local models controlling physical UI and sealed multi-tab genome transfer. Test: tilt device (or move pointer) and observe cards adapting spring parameters; seal button persists winner; open second tab to receive genome.

**Files**: drafts/F551-orientation-evo-dom-physics-mind/SPEC.md, drafts/F551-orientation-evo-dom-physics-mind/index.html

## Frontier Engine F-553 (2026-11-04)

**F553-opfs-causal-graph-evo-spatial-audio-mind**

Entry added by ledger-guard from drafts/F553-opfs-causal-graph-evo-spatial-audio-mind/SPEC.md, after a full-file write dropped it.


**Files**: drafts/F553-opfs-causal-graph-evo-spatial-audio-mind/SPEC.md, drafts/F553-opfs-causal-graph-evo-spatial-audio-mind/index.html

## Frontier Engine F-554 (2026-11-04)

**F554-competitive-mlp-portal-agents-genome**

Entry added by ledger-guard from drafts/F554-competitive-mlp-portal-agents-genome/SPEC.md, after a full-file write dropped it.


**Slug**: `competitive-mlp-portal-agents-genome`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of self-vision particles (F546), orientation-MLP boids (F547), semantic embedding swarms (F548), broadcast RNNs (F549), WebXR gaze predictive (F550), orientation evo DOM physics (F551), WebXR hand volumetric NCA (F552), OPFS causal graph spatial audio (F553). Explicitly leaves sensor-driven neural particle/DOM/NCA/graph systems, WebGPU kernels, boid flocking, self-vision retinas, volumetric sculpting, and OPFS stores.

**Concept**
A population of independent floating DOM portals, each embodying its own tiny pure-JS MLP. Each MLP receives local spatial inputs (relative pointer vector, DeviceOrientation if granted, own velocity) and outputs continuous control (velocity, scale, hue). Agents move freely; on pairwise collision the higher-fitness agent seals a mutated copy of its genome into the lower-fitness agent. Fitness accumulates from sustained proximity to the live pointer. All genomes persist via IndexedDB; the current best is broadcast over BroadcastChannel for multi-tab sharing. A lightweight Canvas2D background visualizes a soft density field sampled from agent positions. Fully offline after load, single self-contained file. No WebGPU, no NCA, no flocking rules, no external audio/camera.

**Novelty**
Leaves the dominant recent clusters of shared-model or flocking agents, continuous physics kernels, self-referential vision, WebXR hand/gaze sculpting, and OPFS-backed graphs. Core novel combination is per-agent local MLPs in hybrid DOM embodiment under multi-agent competition where genome transfer is strictly collision-gated and sealed (hash-attested mutation), with DeviceOrientation as optional causal input to never-before-seen independent controllers, and a shared field architecture of IndexedDB + BroadcastChannel for best-genome propagation. Not substrate simulations, not residual predictors, not attention lattices.

**Architecture**
- Single `index.html`.
- 10 DOM `.agent` elements, absolute positioned, each owning a private weight vector (MLP 8→6→4).
- MLP forward pass pure JS matrix multiplies.
- Collision: distance < 48px triggers fitness-ordered genome copy + mutation + seal hash.
- IndexedDB store `f554-genomes` for all agents + best.
- BroadcastChannel `f554-best` for cross-tab best genome.
- DeviceOrientationEvent (permission on click) feeds beta/gamma into inputs.
- Canvas2D full-window density blur from agent positions.
- Seal button forces persist; pointer is the fitness attractor.

**Expected outcome**
Runnable prototype in which colored portals chase the pointer under independent learned policies; collisions visibly transfer control styles (color/scale/speed changes); sealing and reloading restores genomes; opening a second tab receives the best genome via broadcast. Offline-capable.

**Mechanics**
1. Initialize random genomes or load from IndexedDB.
2. On animation frame: compute inputs, forward MLP, integrate position, update fitness, check collisions, render agents + density.
3. On collision: sort by fitness, mutate and assign winner genome to loser, compute SHA-like seal.
4. Broadcast best periodically.
5. Seal persists all.

**Files**: drafts/F554-competitive-mlp-portal-agents-genome/SPEC.md, drafts/F554-competitive-mlp-portal-agents-genome/index.html

## Frontier Engine F-555 (2026-11-04)

**F555-webgpu-attention-sdf-portal-mind**

Entry added by ledger-guard from drafts/F555-webgpu-attention-sdf-portal-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-attention-sdf-portal-mind`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of competitive MLP portals (F554), OPFS causal graphs (F553), WebXR hand volumetric NCA (F552), orientation evo DOM physics (F551). Explicitly leaves per-agent MLPs, OPFS graphs, hand-sculpted NCA, and pure particle/DOM systems.

**Concept**
A pure-JS causal multi-head attention mechanism runs over a rolling window of pointer trajectories and optional DeviceOrientation samples. The resulting attention map is downsampled and uploaded every frame as a WebGPU texture. A raymarched SDF volume is sculpted by sampling this attention texture as a density/offset field, producing living organic forms that grow and dissolve with user attention. High-energy regions of the SDF automatically spawn absolute-positioned DOM portals whose text content is a short-horizon linear prediction of the next pointer delta (local causal mind). Portals can be clicked to reinforce the prediction path. All attention weights seal to IndexedDB. Fully offline after load, single self-contained file. Canvas2D fallback if WebGPU unavailable.

**Novelty**
Leaves the dominant recent clusters of independent agent MLPs, spatial-audio graphs, hand-tracked volumetric NCA, and embedding swarms. Core novel combination is real-time pure-JS causal attention maps used as the direct sculpting substrate for a WebGPU raymarched SDF volume, with the emergent high-density regions physically spawning and positioning predictive DOM portals. Attention is no longer a policy or card-weaver; it is the geometry itself. Not residual predictors, not flocking, not OPFS-primary.

**Architecture**
- Single `index.html`.
- Rolling history buffer (last 32 pointer + orientation samples).
- Pure-JS multi-head attention (4 heads, d_model=16) producing a 32×32 attention map.
- Map downsampled to 64×64 and uploaded to WebGPU texture every frame.
- Raymarch fragment shader samples the texture to offset an SDF sphere into organic forms.
- High-density voxels (threshold) emit DOM `.portal` elements at projected screen positions; each portal displays a predicted next delta (simple online linear regression on recent deltas).
- IndexedDB store `f555-attention` for sealed weight snapshots.
- DeviceOrientationEvent (permission on click) augments the history.
- Seal button forces persist of current attention weights.

**Expected outcome**
Runnable prototype in which moving the pointer (and tilting the device) grows living SDF forms on the WebGPU canvas; bright regions spawn small floating portals that show predicted next movements; clicking a portal reinforces that path; sealing and reloading restores the attention state. Offline-capable. Canvas2D density fallback when WebGPU is absent.

**Mechanics**
1. Initialize random attention weights or load from IndexedDB.
2. On pointermove / orientation: push sample into history, run attention forward, produce map.
3. Upload map as texture; raymarch and render SDF.
4. Sample high-density regions, spawn or update portals with linear predictions.
5. On portal click: boost the corresponding history weight.
6. Seal persists weights.

**Failure modes**
- No WebGPU: fall back to Canvas2D visualization of the attention map + still spawn portals.
- No DeviceOrientation: pointer-only history still fully functional.
- Too many portals: cap at 12, prune oldest.

**Files**
- drafts/F555-webgpu-attention-sdf-portal-mind/SPEC.md
- drafts/F555-webgpu-attention-sdf-portal-mind/index.html

**V01D landing**
Attention-to-SDF sculptor stage under void-live-deploy/skills/attention-sdf-portal.js; test asserts pointer motion produces non-zero attention map, Seal persists weights, and at least one portal appears after sustained motion.

**Files**: drafts/F555-webgpu-attention-sdf-portal-mind/SPEC.md, drafts/F555-webgpu-attention-sdf-portal-mind/index.html

## Frontier Engine F-556 (2026-11-04)

**F556-webxr-hand-magnetic-dom-hopfield**

Entry added by ledger-guard from drafts/F556-webxr-hand-magnetic-dom-hopfield/SPEC.md, after a full-file write dropped it.


**Slug**: `webxr-hand-magnetic-dom-hopfield`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of WebGPU SDF/attention portals (F555), competitive MLP DOM agents (F554), OPFS causal audio graphs (F553), WebXR hand volumetric NCA (F552), and prior Hopfield SVG (F545). Explicitly leaves WebGPU continuous kernels, per-agent MLPs, OPFS stores, NCA volumes, and DeviceMotion SVG morphs.

**Concept**
True WebXR hand tracking (with pointer + DeviceOrientation fallback) drives a local Hopfield associative memory of binary hand-pose patterns. Recalled poses modulate the magnetic poles of a swarm of absolute-positioned DOM cards that are physically attracted to or repelled by projected hand joint positions. Pinch (or double-click) on a card seals a fragment of the current Hopfield weight matrix into that card’s genome and broadcasts it. All state persists in IndexedDB. Fully offline after load, single self-contained file. No WebGPU, no particle kernels, no residual predictors.

**Novelty**
Leaves the dominant recent clusters of WebGPU physics kernels coupled to MLPs, competitive independent portals, spatial-audio graphs, and volumetric hand sculpting. Core novel combination is real WebXR hand joints as the causal imprinting and magnetic source for a classical Hopfield pose memory whose recalled attractors continuously modulate living DOM card magnetic charges and positions in a hybrid 3D/2D embodiment we have not built. Genome transfer is pinch-gated and sealed. Not canvas simulations, not softbody springs, not orientation RNNs.

**Architecture**
- Single `index.html`.
- Hopfield network (N=48 binary units) storing up to 6 hand-pose patterns via Hebbian weights.
- 8 absolute DOM `.card` elements with magnetic charge (positive/negative) and position.
- WebXR: on supported devices, `navigator.xr.requestSession('immersive-vr' or 'immersive-ar')` with `requiredFeatures: ['hand-tracking']`. Hand joints projected via reference space; pinch detected by joint distance.
- Fallback: pointer position acts as primary joint; DeviceOrientation tilts the magnetic field; double-click seals.
- Magnetic force: each card feels inverse-square force from active joints scaled by recalled-pose charge.
- IndexedDB `f556-hopfield-dom`.
- BroadcastChannel `f556-seal` for multi-tab genome fragments.
- Seal button forces full persist.

**Expected outcome**
Runnable prototype in which moving the pointer (or real WebXR hands) imprints and recalls poses that change card magnetic behavior; cards visibly swarm toward or away from the “hand”; pinching/double-clicking a card transfers a sealed weight fragment (visible hue/scale shift); Seal + reload restores memory. Offline-capable. Clear XR enter button when available.

**Mechanics**
1. Initialize random Hopfield or load from IndexedDB.
2. On frame: if XR, sample hand joints; else use pointer + orientation. Threshold pose bits, optionally imprint.
3. Recall nearest attractor; set global magnetic polarity from recall energy.
4. Integrate magnetic forces on cards; update DOM transforms.
5. On pinch/double-click over card: copy sealed weight slice to card genome, broadcast.
6. Seal persists weights + card states.

**Failure modes**
- No WebXR / no hand-tracking: full pointer + orientation fallback remains interactive.
- Hopfield capacity: oldest pattern fades.
- Too many cards: fixed at 8.
- IndexedDB blocked: session memory only.

**Files**
- drafts/F556-webxr-hand-magnetic-dom-hopfield/SPEC.md
- drafts/F556-webxr-hand-magnetic-dom-hopfield/index.html

**V01D landing**
WebXR magnetic DOM Hopfield stage under void-live-deploy/skills/webxr-hand-magnetic-hopfield.js; test asserts pointer motion produces card displacement, double-click seals a fragment (hash changes), and reload restores at least one pattern.

**Files**: drafts/F556-webxr-hand-magnetic-dom-hopfield/SPEC.md, drafts/F556-webxr-hand-magnetic-dom-hopfield/index.html

## Frontier Engine F-557 (2026-11-04)

**F557-intersection-evo-particle-attention-mind**

Entry added by ledger-guard from drafts/F557-intersection-evo-particle-attention-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `intersection-evo-particle-attention-mind`  
**Ledger ID**: F-557  
**Date**: 2026-11-04  

**Branch from**: Recent cluster of WebGPU particle/SDF/NCA + MLP/RNN + sensor (orientation/mic/WebXR hand/gaze) + DOM portal/competitive genome transfer systems (F543–F556). Explicitly leaves compute shaders, neural forward passes, residual predictors, spectral residuals, pointer-history force fields, softbody, WebXR input, DeviceMotion/Orientation as primary causal, and proximity-gated transfers.

**Concept**
A set of living DOM Verse cards whose screen-space visibility is continuously measured by native IntersectionObserver (threshold steps). Visibility scores become a causal "attention field". A Canvas2D particle swarm is attracted to high-attention cards; particle density and velocity statistics drive a local Web Worker genetic algorithm that evolves attractor strength, hue bias, and emission rate to maximize cumulative attention (dwell proxy). Evolved parameters morph card CSS (scale, filter, background) and sonify via Web Audio oscillators. Dragging a card updates its observation root and injects a temporary particle burst. Seal persists the best genome + attention history hash to IndexedDB. Fully offline single-file prototype. No WebGPU required (Canvas2D primary); progressive.

**Novelty**
Leaves the dominant recent clusters of GPU-resident kernels (particles, SPH, SDF, NCA, waves, LBM) coupled to local MLP/RNN/Hopfield policies driven by external sensors or pointer residual, with DOM as secondary sampling portals or physical agents. Core novel combination is browser-native IntersectionObserver as the primary causal attention signal (not pointer, not device orientation, not microphone, not WebXR gaze), feeding a particle resonance system whose evolutionary fitness is defined by the same observer scores, closing a visibility-driven co-evolution loop between DOM layout and simulated agents. Not sensor fusion, not self-vision retina, not competitive collision genomes.

**Architecture**
- Single `index.html`, offline after load.
- 6–8 absolute-positioned DOM Verse cards with unique data-ids; IntersectionObserver with multiple thresholds (0, 0.25, 0.5, 0.75, 1).
- Canvas2D full-window particle system (~800 particles): attraction forces toward weighted card centers, damping, hue from local density.
- Web Worker: GA (population 6, tournament, mutation) on 4 parameters (attract strength, particle hue offset, emission rate, decay). Fitness = sum of recent intersection ratios * particle density under card.
- CSS morph: cards scale/filter/hue based on local particle density + observer ratio.
- Web Audio: oscillator frequency mapped to average attention.
- IndexedDB `f557-attention-genome`; Seal button stores weights + simple hash of attention vector.
- Fallback: synthetic attention from pointer proximity if observer unavailable.

**Expected outcome**
Runnable prototype in which scrolling or resizing changes card visibilities, particles swarm toward more visible cards, the GA slowly optimizes swarm parameters for higher total attention, cards visually "breathe" with density, and Seal restores the evolved behavior across reloads. Works offline; graceful if Worker or Audio fails.

**Mechanics**
1. Initialize random genome; load from IndexedDB if present. Spawn particles and cards.
2. IntersectionObserver callbacks update per-card attention scores.
3. Each frame: update particles toward attention-weighted targets; sample density; post to Worker.
4. Worker evolves genome; posts back best parameters periodically.
5. Apply CSS morphs and audio gain/freq from attention + density.
6. Drag cards: update position, re-observe, inject particle burst.
7. Seal: serialize genome + attention hash to IndexedDB.

**Failure modes**
- IntersectionObserver unavailable (very old browsers): pointer-proximity fallback.
- Worker blocked: main-thread simple hill-climb.
- Audio context suspended: silent, visual only.
- IndexedDB quota: in-memory only.
- Too many particles: cap at 600, reduce on low FPS.

**Files**
- drafts/F557-intersection-evo-particle-attention-mind/SPEC.md
- drafts/F557-intersection-evo-particle-attention-mind/index.html

**V01D landing**
Intersection-driven evolutionary particle attention stage under `void-live-deploy/skills/intersection-evo-attention.js`; test asserts observer ratio change → particle target shift → card CSS morph and IndexedDB roundtrip.

**Files**: drafts/F557-intersection-evo-particle-attention-mind/SPEC.md, drafts/F557-intersection-evo-particle-attention-mind/index.html

## Frontier Engine F-558 (2026-11-04)

**F558-webxr-gaze-electrostatic-svg-genome**

Entry added by ledger-guard from drafts/F558-webxr-gaze-electrostatic-svg-genome/SPEC.md, after a full-file write dropped it.


**Slug**: `webxr-gaze-electrostatic-svg-genome`  
**Ledger ID**: F-558  
**Date**: 2026-11-04  

**Branch from**: Recent cluster of IntersectionObserver evolutionary particle attention (F557), WebXR hand magnetic Hopfield DOM (F556), attention-map SDF portals (F555), competitive MLP portals, OPFS graphs, and prior sensor-driven particle/NCA/DOM systems. Explicitly leaves IntersectionObserver, Hopfield associative memory, WebGPU SDF/raymarch, particle swarms, continuous field kernels, and proximity or collision genome gates.

**Concept**
True WebXR gaze (with robust pointer + DeviceOrientation fallback) feeds a local tiny MLP that predicts the next gaze point. A swarm of SVG circle agents carries signed charges and interacts via novel Coulomb electrostatic forces (not gravity, not magnetic inverse-square from joints, not softbody springs). Gaze acts as an external field source. When the predicted or actual gaze dwells on an agent above a threshold, that agent seals a fragment of the current MLP weights (genome) and transfers it to other agents via BroadcastChannel, mutating slightly; best persists in IndexedDB. Agents compete by dwell-time fitness. Fully offline single-file prototype. SVG primary embodiment (not Canvas2D particles or absolute DOM cards as primary agents).

**Novelty**
Leaves the dominant recent clusters of observer-driven particle resonance, hand-tracked magnetic DOM + Hopfield, attention-sculpted SDF volumes, and WebGPU kernel + MLP hybrids. Core novel combination is real (or simulated) WebXR gaze as causal input to a predictive MLP whose outputs modulate an electrostatic multi-agent SVG swarm, with dwell-gated sealed genome transfer over a shared field. Physics is pure Coulomb between charged SVG agents; embodiment is vector SVG, not raster particles or DOM layout morphs. Not residual predictors on pointer history, not NCA, not spectral residuals.

**Architecture**
- Single `index.html`.
- SVG full-window with 12–16 charged circle agents (radius, charge, position, velocity).
- Local tiny MLP (2-layer, ~20 weights) takes last 4 gaze deltas → predicts next delta; updates via simple reward on dwell accuracy.
- Electrostatic: each pair computes F = k * q1*q2 / r^2 * unit vector; integrate Verlet-like; boundary bounce.
- Gaze source: WebXR `viewer` reference space + gaze if available; else pointer position; DeviceOrientation tilts field slightly.
- Dwell: if gaze distance to agent < radius for >800ms, trigger seal/transfer of weight slice (simple hash check).
- IndexedDB `f558-gaze-electro`; BroadcastChannel `f558-genome`.
- Seal button forces full persist. Clear XR enter button when `navigator.xr` present.
- Fallback: always interactive with pointer.

**Expected outcome**
Runnable prototype in which moving the pointer (or entering WebXR and gazing) causes charged SVG agents to repel/attract according to Coulomb law, the MLP prediction is visible as a ghost target, dwell on an agent transfers a sealed genome fragment (visible as hue or radius shift), and Seal + reload restores the best weights and agent charges. Offline-capable. Progressive if WebXR or IndexedDB blocked.

**Mechanics**
1. Initialize random MLP weights or load from IndexedDB; spawn agents with random charges.
2. On frame: sample gaze (XR or pointer); run MLP prediction; apply electrostatic forces + gaze field; integrate positions; update SVG.
3. Track dwell timers; on threshold, hash weight prefix, post to BroadcastChannel, mutate local.
4. Reward MLP slightly if prediction close to actual next sample.
5. Seal persists weights + agent states.

**Failure modes**
- No WebXR: full pointer fallback remains complete.
- IndexedDB quota or blocked: session-only.
- Too many agents: fixed at 14.
- Low FPS: reduce force updates.

**Files**
- drafts/F558-webxr-gaze-electrostatic-svg-genome/SPEC.md
- drafts/F558-webxr-gaze-electrostatic-svg-genome/index.html

**V01D landing**
WebXR gaze electrostatic SVG swarm stage under `void-live-deploy/skills/webxr-gaze-electro-svg.js`; test asserts pointer motion produces agent displacement under Coulomb, dwell triggers a genome post (BroadcastChannel message), and reload restores at least one weight.

**Files**: drafts/F558-webxr-gaze-electrostatic-svg-genome/SPEC.md, drafts/F558-webxr-gaze-electrostatic-svg-genome/index.html

## Frontier Engine F-559 (2026-11-04)

**F559-webgpu-fft-hopfield-spatial-memory-mind**

Entry added by ledger-guard from drafts/F559-webgpu-fft-hopfield-spatial-memory-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-fft-hopfield-spatial-memory-mind`  
**Date**: 2026-11-04  
**Branch from**: Recent cluster of WebGPU SDF portals (F555), WebXR hand Hopfield DOM (F556), intersection-evo particles (F557), WebXR gaze SVG (F558). Explicitly leaves DOM portals, particle swarms, SDF raymarching, SVG electrostatics, WebXR hand/gaze, orientation sensors, self-vision retinas, NCA, and competitive genomes.

**Concept**  
A full-canvas spatial memory field where recent pointer trajectories are treated as time-series signals. Their spectral content (FFT magnitudes) becomes a pattern vector stored in a local Hopfield network. The network recalls stored spectral memories when idle or on demand, and the recalled vector continuously modulates a WebGPU (or Canvas2D fallback) particle/lattice visualization—color, velocity bias, and emission. User “teaches” by drawing paths; the system spontaneously morphs toward remembered spectral signatures. Seal persists the Hopfield weight matrix and pattern list to IndexedDB. Fully offline single-file prototype. No external sensors beyond pointer, no DOM cards as agents, no evolutionary GA on physics params, no audio spatialization.

**Novelty**  
Leaves the dominant recent clusters of sensor-driven (orientation/WebXR/gaze) neural controllers on particles/DOM/SVG/SDF, IntersectionObserver attention loops, competitive collision genomes, and self-referential visual retinas. Core novel combination is spectral (FFT) embedding of raw pointer trajectories as the pattern space for a classical Hopfield associative memory whose continuous recall state drives a GPU particle field. The mind remembers the “sound” of gestures (in frequency domain) and replays them as living spatial dynamics. Not time-domain residual predictors, not attention kernels on lattices, not Hebbian on spatial grids.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Pointer trajectory buffer (last 128 samples of x,y velocity).  
- Pure JS radix-2 FFT (or WebGPU compute if available) producing 32-bin magnitude spectrum as pattern.  
- Hopfield network: 32 neurons, Hebbian outer-product weights, asynchronous or synchronous update for recall. Capacity ~ few patterns.  
- Visualization: ~1k particles on Canvas2D (or WebGPU compute+render). Current Hopfield state vector biases particle hue, speed, and attractor.  
- IndexedDB store `f559-hopfield-memory` for weights + pattern list.  
- Seal button; optional “Recall” and “Clear”.  
- Fallback: full JS path always works; WebGPU used only for particle update if `navigator.gpu` present.

**Expected outcome**  
Runnable prototype in which drawing with the pointer stores spectral “memories”; after release the field morphs toward a recalled pattern (visible as coherent swirling or pulsing); Seal restores memories across reloads. Works offline; graceful Canvas2D path always available.

**Mechanics**  
1. Initialize empty Hopfield; load from IndexedDB if present. Spawn particles.  
2. On pointer move: append velocity samples; on pointer up compute FFT → store pattern (if distinct) via Hebbian update.  
3. Each frame: if idle or recall triggered, run 2–4 Hopfield iterations; map state to visual params.  
4. Update/render particles driven by current state.  
5. Seal: serialize weights + patterns to IndexedDB.  
6. Visual feedback: spectrum bar or current energy displayed.

**Failure modes**  
- WebGPU unavailable or context lost: Canvas2D + JS particles.  
- IndexedDB quota or blocked: in-memory only.  
- FFT numerical issues: clamp and normalize spectrum.  
- Too many patterns: Hopfield capacity exceeded → oldest discarded.  
- Low FPS: reduce particle count dynamically.

**Files**  
- drafts/F559-webgpu-fft-hopfield-spatial-memory-mind/SPEC.md  
- drafts/F559-webgpu-fft-hopfield-spatial-memory-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/spatial-memory/` or canvas tool; test that spectral store/recall changes particle statistics measurably.

**Files**: drafts/F559-webgpu-fft-hopfield-spatial-memory-mind/SPEC.md, drafts/F559-webgpu-fft-hopfield-spatial-memory-mind/index.html

## Frontier Engine F-324 (2026-11-05)

**F324-deviceorient-idb-webrtc-mlp-orb-arena**

Entry added by ledger-guard from drafts/F324-deviceorient-idb-webrtc-mlp-orb-arena/SPEC.md, after a full-file write dropped it.


**Concept:** Multi-agent Canvas2D orbs, each driven by a tiny local MLP (genome = weight vector) that outputs force based on local state + DeviceOrientation tilt as causal gravity/input. Agents compete for randomly spawned resources; fitness = resources collected. Best genomes are sealed (SHA-like hash of weights) and persisted in IndexedDB. Optional WebRTC data channel allows sealed genome transfer between peers on connect. Fully offline-capable after first load; progressive enhancement for orientation and WebRTC.

**Novelty:** Deliberately branches from recent WebGPU/attention/wave/softbody/DOM/orientation-RNN/k-means clusters by using pure Canvas2D physics, DeviceOrientation as direct causal input to never-before-seen local MLP controllers, sealed genome competition with IndexedDB persistence + WebRTC transfer architecture that has not been tried in this form. No lattices, no residual predictors, no volumetric, no NCA, no spectral, no pointer-history fields, no softbody DOM.

**Architecture:**
- Main thread: 40 agents on Canvas2D with simple Euler physics (position, velocity, orientation-biased gravity)
- Each agent: 6-input (pos rel, vel, tilt, dist-to-resource) → 8 hidden → 2 output force MLP (weights ~100 floats, genome)
- Evolution: every 30s, cull bottom 50%, mutate top, reseed
- Seal: hash genome → IndexedDB store of top-3 sealed genomes
- WebRTC: optional peer connection via signaling stub (manual copy-paste offer/answer for demo), transfer sealed genome on datachannel

**Expected outcome:** Tilting device (or mouse-sim) steers the "gravity"; agents learn (evolve) to chase resources under that gravity. Best genomes persist across reloads. Peer can inject a foreign sealed genome that competes. Interactive, offline.

**Mechanics:** See index.html. Orientation event → tilt vector; MLP forward per agent; resource spawn/collect; periodic selection; seal button; WebRTC buttons for offer/answer.

**Failure modes:** No DeviceOrientation → mouse-simulated tilt; no IndexedDB → session only; WebRTC requires two tabs/peers and manual signaling (no server); high agent count drops FPS (capped at 40).

**Builds on:** Nothing recent; branches away from F316–F323 WebGPU/WebXR hybrid DOM arenas, attention waves, k-means particles, orientation RNN softbody.

**Next building block:** Full WebRTC mesh with auto-signaling; WebGPU compute for parallel MLP inference; gaze/hand as additional causal input.

**Files**: drafts/F324-deviceorient-idb-webrtc-mlp-orb-arena/SPEC.md, drafts/F324-deviceorient-idb-webrtc-mlp-orb-arena/index.html

## Frontier Engine F-560 (2026-11-05)

**F560-webgpu-esrn-spatial-ui-morph-mind**

Entry added by ledger-guard from drafts/F560-webgpu-esrn-spatial-ui-morph-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-esrn-spatial-ui-morph-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of spectral Hopfield memory (F559), FFT spatial, WebXR Hopfield, NCA, competitive genomes, SDF portals. Explicitly leaves associative memories (Hopfield), spectral embeddings of trajectories, particle swarms driven by recall, NCA rule evolution, and sensor-driven (orientation/WebXR) controllers.

**Concept**  
A full-canvas spatial visualization of an Echo State Reservoir Network (ESRN / liquid state machine). Pointer trajectories inject sparse input into a large leaky reservoir of recurrent neurons. The high-dimensional reservoir state is continuously projected to a low-dimensional “reasoning” vector. That vector drives CSS custom properties on surrounding DOM elements, causing them to physically morph (scale, rotate, hue-rotate, blur, position offsets) in real time as the network’s internal dynamics evolve. The canvas shows a particle field whose velocities and colors are biased by reservoir activations, embedding the mind spatially. Seal persists the reservoir weight matrices and current state to IndexedDB. Fully offline single-file prototype. No external sensors beyond pointer, no Hopfield recall, no FFT, no DOM cards as agents, no evolutionary GA.

**Novelty**  
Leaves the dominant recent clusters of Hopfield associative memory on spectral or spatial patterns, competitive MLP genomes, SDF raymarching portals, WebXR hand/gaze controllers, IntersectionObserver attention, and NCA. Core novel combination is reservoir computing (local recurrent AI with fixed random weights + trainable readout) whose continuous internal state physically morphs the surrounding DOM UI via CSS variables, while the same state is visualized as a living particle field. The mind’s “thoughts” (reservoir activity) literally reshape the interface around the canvas. Not pattern storage/recall, not spectral gesture memory, not competitive agents.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Echo State Reservoir: N=128 leaky neurons, sparse random recurrent weights (spectral radius ~0.9), input weights from pointer velocity/position.  
- Readout: fixed random projection of reservoir state to 6–8 dimensions that map to CSS variables (`--scale`, `--rot`, `--hue`, `--blur`, `--dx`, `--dy`, etc.).  
- Visualization: ~600 particles on Canvas2D (WebGPU compute+render used if available for particle update). Particles sample nearby reservoir activations for color/velocity bias.  
- Surrounding UI: floating panels and labels whose styles are bound to the CSS vars; they morph continuously.  
- IndexedDB store `f560-esrn-mind` for reservoir weights, readout, and last state.  
- Seal button; optional “Reset Reservoir” and “Inject Pulse”.  
- Fallback: full JS reservoir + Canvas2D always works; WebGPU accelerates particles only.

**Expected outcome**  
Runnable prototype in which moving the pointer injects energy into the reservoir; the surrounding UI elements continuously scale, rotate, shift hue, and blur in response to the evolving internal state; the particle field swirls with colors reflecting reservoir activity. Seal restores the mind’s weights and last state across reloads. Works offline; graceful Canvas2D path always available.

**Mechanics**  
1. Initialize random sparse reservoir weights and input weights; load from IndexedDB if present. Spawn particles and DOM morph targets.  
2. On pointer move: compute velocity/position features and inject into reservoir input.  
3. Each frame: leaky update of reservoir state (tanh activation, leak rate ~0.1–0.2); project state to CSS vars; apply to UI elements.  
4. Update/render particles driven by sampled reservoir activations.  
5. Seal: serialize weights + state to IndexedDB.  
6. Visual feedback: current reservoir energy and dominant projection values displayed.

**Failure modes**  
- WebGPU unavailable or context lost: Canvas2D + JS particles.  
- IndexedDB quota or blocked: in-memory only.  
- Reservoir instability (spectral radius too high): clamp activations.  
- Low FPS: reduce particle count or reservoir size dynamically.  
- CSS morph too extreme: clamp projected values.

**Files**  
- drafts/F560-webgpu-esrn-spatial-ui-morph-mind/SPEC.md  
- drafts/F560-webgpu-esrn-spatial-ui-morph-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/reservoir-mind/` or canvas tool; test that pointer injection changes CSS transform statistics of surrounding elements and particle velocity distribution measurably.

**Files**: drafts/F560-webgpu-esrn-spatial-ui-morph-mind/SPEC.md, drafts/F560-webgpu-esrn-spatial-ui-morph-mind/index.html

## Frontier Engine F-561 (2026-11-05)

**F561-deviceorientation-lif-spike-audio-mind**

Entry added by ledger-guard from drafts/F561-deviceorientation-lif-spike-audio-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `deviceorientation-lif-spike-audio-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of WebGPU ESRN UI morph (F560), FFT Hopfield spatial memory (F559), WebXR hand/gaze Hopfield/electrostatic, attention SDF portals, competitive genomes, intersection evo particles. Explicitly leaves associative memories (Hopfield/ESRN), spectral embeddings, particle swarms, SDF/portals, WebXR controllers, IntersectionObserver attention, NCA, and DOM morph via continuous rate-based states.

**Concept**  
A full-canvas spatial visualization of a 2D grid of Leaky Integrate-and-Fire (LIF) spiking neurons. DeviceOrientation (beta/gamma tilt) injects biased input current into the grid edges and modulates leak rates, causing propagating waves of discrete spikes. Each spike lights a cell on Canvas2D and triggers a short, spatially panned WebAudio oscillator burst whose frequency maps to grid position. The mind “hears” its own spikes as an emergent soundscape. Seal persists membrane potentials and a compact spike-count summary to IndexedDB. Fully offline single-file prototype. Mouse fallback simulates orientation. No WebGPU, no rate-based reservoirs, no Hopfield recall, no FFT, no DOM agents as primary, no evolutionary GA.

**Novelty**  
Leaves the dominant recent clusters of continuous rate-based neural fields (ESRN, Hopfield, attention) driving particles/DOM/portals, WebXR sensor controllers, spectral memory, and competitive genomes. Core novel combination is a discrete-event Spiking Neural Network (LIF) whose dynamics are causally driven by DeviceOrientation tilt, with spike events simultaneously rendered visually and sonified via per-cell WebAudio nodes for a hybrid visual-auditory spatial mind. Not pattern storage, not residual predictors, not softbody DOM, not k-means particles.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- LIF grid: 32×24 neurons. Membrane potential V, leak τ, threshold θ, reset. Neighbor excitatory coupling for propagation.  
- Input: DeviceOrientation beta/gamma (or mouse) biases edge currents and global leak.  
- Visualization: Canvas2D, cells flash on spike (decay).  
- Audio: WebAudioContext; on spike, play short sine (freq = 200 + y*20, pan = (x-16)/16, gain decay). Limited concurrent voices.  
- IndexedDB store `f561-lif-mind` for V grid and total spike count.  
- Seal button; “Reset”, “Pulse” (inject center current), “Mute”.  
- Fallback: mouse-driven orientation always works; audio optional (graceful mute).

**Expected outcome**  
Runnable prototype in which tilting the device (or moving mouse) causes waves of spikes to propagate across the grid, flashing visually and producing a shifting spatial soundscape of short tones. Seal restores potentials across reloads. Works offline; pure Canvas2D + WebAudio path.

**Mechanics**  
1. Initialize random V near rest; load from IndexedDB if present. Setup AudioContext on first gesture.  
2. On deviceorientation or mousemove: compute bias currents from beta/gamma.  
3. Each frame (~60Hz): update all LIF (integrate, leak, threshold check, spike, reset, propagate to neighbors).  
4. Render flashing grid; on spikes schedule audio bursts.  
5. Seal: serialize V and counters to IndexedDB.  
6. Visual feedback: live spike rate, orientation values.

**Failure modes**  
- No DeviceOrientation permission or sensor: mouse fallback.  
- AudioContext blocked: visual-only.  
- IndexedDB quota or blocked: in-memory only.  
- High spike rate: throttle audio voices.  
- Low FPS: reduce grid size dynamically.

**Files**  
- drafts/F561-deviceorientation-lif-spike-audio-mind/SPEC.md  
- drafts/F561-deviceorientation-lif-spike-audio-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/spiking-mind/` or canvas tool; test that orientation change increases spike rate and triggers measurable audio scheduling events.

**Files**: drafts/F561-deviceorientation-lif-spike-audio-mind/SPEC.md, drafts/F561-deviceorientation-lif-spike-audio-mind/index.html

## Frontier Engine F-562 (2026-11-05)

**F562-webgpu-rd-attention-spatial-verse**

Entry added by ledger-guard from drafts/F562-webgpu-rd-attention-spatial-verse/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-rd-attention-spatial-verse`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of DeviceOrientation LIF spike audio (F561), ESRN spatial UI morph (F560), FFT Hopfield, WebXR Hopfield/electrostatic, NCA, competitive genomes, SDF portals. Explicitly leaves spiking neural networks, reservoir computing, associative memories (Hopfield/ESRN), spectral embeddings, particle swarms, SDF/portals, WebXR controllers, IntersectionObserver attention, evolutionary GA, and rate-based continuous neural fields.

**Concept**  
A full-canvas WebGPU compute simulation of Gray-Scott reaction-diffusion producing living organic chemical patterns. A compact local attention controller (JS-implemented multi-head on pattern statistics + pointer) continuously modulates the feed and kill rates across spatial regions, “attending” to novelty and user input to steer the chemistry. Emergent high-density regions seed and position spatial “Verse” typography fragments (short phrases drawn from a sealed local lexicon) that drift, scale, and fade with the local concentration field. The mind’s chemistry literally writes and rewrites spatial verse. Seal persists the chemical state grid and attention weights to IndexedDB. Fully offline single-file prototype. Mouse/pointer primary; no external sensors required.

**Novelty**  
Leaves the dominant recent clusters of spiking LIF audio, continuous rate-based reservoirs/Hopfield driving morphs or particles, NCA rule evolution, and sensor-driven controllers. Core novel combination is GPU-accelerated reaction-diffusion chemistry whose parameters are steered by a local attention mechanism over spatial statistics, with the resulting concentration field physically instantiating and animating kinetic typography fragments that form an emergent spatial verse. The mind’s internal chemistry authors visible text in space. Not pattern storage/recall, not residual predictors, not softbody DOM agents, not k-means particles.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Gray-Scott RD: WebGPU compute shader on 256×256 grid (or Canvas2D fallback), two chemicals U/V, classic feed/kill with spatial variation.  
- Attention controller: small multi-head attention over binned pattern stats (mean, variance, local maxima) + pointer velocity; outputs regional Δfeed/Δkill.  
- Typography: pool of ~40 absolute-positioned DOM text nodes (“verse fragments” from sealed lexicon: short poetic tokens). Density peaks spawn/position/scale/opacity them.  
- IndexedDB store `f562-rd-verse-mind` for U/V grids (downsampled) and attention weights.  
- Seal button; “Reset Chemistry”, “Inject Seed”, “Silence Verse”.  
- Fallback: full JS RD + Canvas2D always works; WebGPU accelerates the chemistry only.

**Expected outcome**  
Runnable prototype in which the canvas blooms with organic reaction-diffusion patterns. Moving the pointer steers the chemistry via attention; dense regions birth floating verse fragments that drift and morph with the field, composing an emergent spatial poem. Seal restores the chemical mind across reloads. Works offline; graceful Canvas2D path always available.

**Mechanics**  
1. Initialize random U/V near equilibrium; load from IndexedDB if present. Setup WebGPU or fallback. Seed verse lexicon.  
2. On pointer move: update attention keys/queries from local stats and velocity.  
3. Each frame: run RD steps (compute or JS); sample density field; update verse fragment positions/scales/opacities from peaks; apply attention-modulated rates.  
4. Render chemistry as color-mapped texture or canvas.  
5. Seal: serialize downsampled grids + weights to IndexedDB.  
6. Visual feedback: live feed/kill map, attention energy, verse count.

**Failure modes**  
- WebGPU unavailable or context lost: Canvas2D + JS RD.  
- IndexedDB quota or blocked: in-memory only.  
- High density: throttle verse spawn.  
- Low FPS: reduce grid resolution dynamically.  
- Attention instability: clamp rate deltas.

**Files**  
- drafts/F562-webgpu-rd-attention-spatial-verse/SPEC.md  
- drafts/F562-webgpu-rd-attention-spatial-verse/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/rd-verse-mind/` or canvas tool; test that pointer attention changes regional feed/kill statistics and that density peaks measurably increase verse fragment spawn rate and spatial dispersion.

**Files**: drafts/F562-webgpu-rd-attention-spatial-verse/SPEC.md, drafts/F562-webgpu-rd-attention-spatial-verse/index.html

## Frontier Engine F-563 (2026-11-05)

**F563-webgpu-rigid-dom-genome-mind**

Entry added by ledger-guard from drafts/F563-webgpu-rigid-dom-genome-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-rigid-dom-genome-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of DeviceOrientation LIF spike audio (F561), ESRN spatial UI morph (F560), FFT/WebXR Hopfield, RD attention verse (F562), SDF portals, electrostatic SVG, magnetic DOM. Explicitly leaves spiking networks, reservoirs, associative memories (Hopfield/ESRN), attention controllers, reaction-diffusion, SDF/raymarch, particle swarms, spectral residuals, pure NCA, softbody springs, orientation RNNs, and continuous field kernels.

**Concept**  
A population of rigid rectangular DOM elements act as the physical bodies themselves (hybrid embodiment). A local physics integrator (JS, WebGPU compute path reserved) applies DeviceOrientation-tilted gravity, friction, and restitution. Each body carries a sealed genome of physical parameters (mass, restitution, friction). On high-relative-velocity collisions, genomes compete: the higher-fitness (lower residual kinetic energy after impact) body can transfer a sealed copy of its parameter set to the other via BroadcastChannel + IndexedDB. Pointer drag injects impulse. The canvas shows the Verse of colliding minds whose physical laws evolve through contact.

**Novelty**  
Leaves the dominant recent clusters of sensor-driven neural/associative models steering continuous fields, morphs, or particles. Core novel combination is rigid DOM elements as true physical agents under multi-agent competition with sealed genome (parameter) transfer triggered by collision energetics, DeviceOrientation as causal gravity input to never-before-seen local (non-neural) physics model, persistent shared field via IndexedDB/BroadcastChannel in a new hybrid-embodiment architecture. Not softbody meshes, not granular DEM particles, not neural policies, not field kernels.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Rigid bodies: absolute-positioned DOM divs with CSS transform; AABB collision detection + impulse response in main-thread JS loop (WebGPU compute for integration reserved as future kernel).  
- Genome: {mass, restitution, friction, hue}; fitness = inverse residual KE post-collision.  
- DeviceOrientation (or pointer tilt proxy) sets gravity vector.  
- BroadcastChannel `f563-genome`: on seal-transfer, post genome; receiver adopts if fitness higher.  
- IndexedDB store `f563-rigid-dom-genome` for genomes + last positions.  
- Seal button; “Reset Bodies”, “Add Body”, “Randomize Gravity”.  
- Fallback: full JS always works; no WebGPU required for core.

**Expected outcome**  
Runnable prototype in which colored DOM rectangles fall, collide, bounce, and occasionally exchange sealed physical-parameter genomes. Tilting the device (or moving pointer) changes gravity. Dragging bodies injects energy. Seal restores the competitive population across reloads. Works offline.

**Mechanics**  
1. Spawn 6–8 rigid DOM bodies with random genomes; load from IndexedDB if present.  
2. On deviceorientation: update gravity.  
3. Each frame: integrate velocity/position with gravity + damping; detect AABB overlaps; resolve with impulse; if relative speed > threshold, compare fitness and transfer sealed genome.  
4. Pointer down/move: drag body, impart velocity on release.  
5. Seal: serialize genomes + positions to IndexedDB.  
6. Visual feedback: body hue from genome, overlay of last transfer event, live fitness.

**Failure modes**  
- DeviceOrientation unavailable: pointer-driven gravity proxy.  
- IndexedDB quota or blocked: in-memory only.  
- High body count: throttle collision checks.  
- Overlap tunneling: substep integration.  
- BroadcastChannel unsupported: local only.

**Files**  
- drafts/F563-webgpu-rigid-dom-genome-mind/SPEC.md  
- drafts/F563-webgpu-rigid-dom-genome-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/rigid-dom-genome/` or canvas tool; test that high-velocity collisions measurably transfer genome parameters and that DeviceOrientation changes the gravity vector affecting all body accelerations.

**Files**: drafts/F563-webgpu-rigid-dom-genome-mind/SPEC.md, drafts/F563-webgpu-rigid-dom-genome-mind/index.html

## Frontier Engine F-564 (2026-11-05)

**F564-webgpu-som-topographic-audio-dom-mind**

Entry added by ledger-guard from drafts/F564-webgpu-som-topographic-audio-dom-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-som-topographic-audio-dom-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of rigid DOM genome physics (F563), RD attention verse (F562), DeviceOrientation LIF spikes (F561), ESRN UI morph (F560), Hopfield/FFT/WebXR memories, SDF portals. Explicitly leaves rigid-body competitive genomes, reaction-diffusion chemistry, spiking LIF networks, reservoirs (ESRN), associative memories (Hopfield), attention controllers, SDF/raymarch, particle swarms, spectral residuals, pure NCA, softbody springs, and continuous field kernels.

**Concept**  
A Self-Organizing Map (Kohonen SOM) whose 16×12 grid of multi-dimensional weight vectors topographically organizes live multi-modal sensory streams (pointer trajectory deltas + Web Audio frequency spectrum bins). Best-matching units (BMUs) are found each frame; the winning cell lights on a Canvas2D visualization of the map and embodies a floating DOM “memory node” that displays a compact signature of the input (velocity, spectral centroid, timestamp). Dragging a node injects a supervised reinforcement or relocation of its weight vector. A simple online learning rule (learning rate + Gaussian neighborhood) updates the map. WebGPU compute path is reserved for parallel distance search on larger maps. Seal persists the full weight matrix and active node positions to IndexedDB. The Verse canvas becomes a living topographic sensory cortex that grows spatial memory nodes from what it hears and feels.

**Novelty**  
Leaves the dominant recent clusters of physics-based DOM agents, continuous chemical/field simulations, and associative/recurrent neural memories. Core novel combination is an unsupervised topographic Self-Organizing Map as the primary spatial substrate, multi-modal (pointer kinematics + audio spectrum) online organization, BMU-driven embodiment of real DOM nodes as persistent sensory memories, and sealed weight-matrix persistence. Not a Hopfield attractor, not a reservoir echo, not a GA-evolved policy, not a reaction-diffusion or particle field.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- SOM: 16×12 grid, input dim = 8 (4 pointer history + 4 audio bins). Weights initialized randomly or loaded from IndexedDB.  
- Visualization: Canvas2D colored by BMU activity and quantization error.  
- DOM nodes: absolute-positioned cards spawned/moved to screen coords of BMU; show signature text; draggable.  
- Audio: AnalyserNode on oscillator bank or getUserMedia (gesture-gated); 4 log-spaced bins.  
- Pointer: velocity and acceleration history.  
- Learning: classic SOM update on each input.  
- IndexedDB store `f564-som-mind` for weights + node state.  
- Seal button; “Reset Map”, “Inject Tone”, “Add Noise”.  
- WebGPU: compute shader stub for future BMU search (falls back to JS always).

**Expected outcome**  
Runnable prototype in which moving the pointer and (optional) audio input cause the SOM grid to reorganize live. Bright BMU cells spawn or move floating DOM memory nodes that display what the map is currently “hearing/feeling.” Dragging nodes adjusts their weights. Seal restores the topographic organization and nodes across reloads. Works offline.

**Mechanics**  
1. Initialize 16×12 SOM weights (or load). Spawn initial nodes from random BMUs.  
2. Each frame: build input vector from pointer + audio; find BMU (JS Euclidean); update neighborhood; paint Canvas; position/create DOM node at BMU screen location.  
3. Pointer move: record velocity history.  
4. Drag DOM node: on drop, reinforce its weight toward current input or inject custom.  
5. Seal: serialize weights + node data to IndexedDB.  
6. Visual feedback: node hue from spectral centroid, overlay of last BMU, live quantization error.

**Failure modes**  
- getUserMedia denied or no mic: oscillator fallback.  
- IndexedDB quota or blocked: in-memory only.  
- High grid size: throttle updates.  
- WebGPU unavailable: JS path always works.  
- Audio context suspended: resume on first gesture.

**Files**  
- drafts/F564-webgpu-som-topographic-audio-dom-mind/SPEC.md  
- drafts/F564-webgpu-som-topographic-audio-dom-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/som-topographic-mind/` or canvas tool; test that pointer+audio inputs measurably move BMUs and that sealed weights restore the same node layout after reload.

**Files**: drafts/F564-webgpu-som-topographic-audio-dom-mind/SPEC.md, drafts/F564-webgpu-som-topographic-audio-dom-mind/index.html

## Frontier Engine F-565 (2026-11-05)

**F565-adaptive-quadtree-spatial-mind**

Entry added by ledger-guard from drafts/F565-adaptive-quadtree-spatial-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `adaptive-quadtree-spatial-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of SOM topographic audio-DOM (F564), rigid DOM competitive genomes (F563), RD attention verse (F562), DeviceOrientation LIF spikes (F561), ESRN UI morph (F560), Hopfield/FFT/WebXR memories, attention lattices, residual predictors, volumetric injection, pure NCA, spectral/audio residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles. Explicitly leaves continuous neural fields, spiking nets, reaction-diffusion, rigid-body physics genomes, reservoir computing, associative memories, and particle swarms.

**Concept**  
A full-canvas adaptive spatial quadtree whose nodes recursively subdivide based on local pointer-density history. Each leaf runs a simple local rule (density accumulation + decay + neighbor coupling via parent) that determines color and a floating DOM label. High-density leaves split; low-density merge. The tree itself is the mind substrate: hierarchical spatial memory of interaction. Pointer movement injects density; the structure evolves offline. Seal persists the entire tree (bounds, densities, labels) to IndexedDB. Multi-tab optional via BroadcastChannel for shared density pulses. The Verse canvas becomes a living hierarchical partition that remembers where attention has been.

**Novelty**  
Leaves the dominant recent clusters of continuous/neural/physics simulations steering DOM or fields. Core novel combination is an adaptive hierarchical spatial data structure (quadtree) as the primary mind substrate, density-driven split/merge as the learning rule, leaf states embodied as real DOM labels, and sealed tree persistence. Not a field kernel, not a neural network, not multi-agent genomes, not sensor-driven continuous dynamics.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Quadtree: root covering canvas; max depth 6; split when density > threshold; merge when all children low.  
- Density: accumulated from pointer samples in leaf bounds, exponential decay, mild parent-child diffusion.  
- Visualization: Canvas2D draws tree bounds colored by density; leaves spawn/update absolute DOM labels showing density signature.  
- IndexedDB store `f565-quadtree-mind` for serialized tree.  
- Seal button; “Reset Tree”, “Pulse Center”.  
- BroadcastChannel `f565-density` for optional multi-tab pulse sharing.  
- No WebGPU required (JS tree always works).

**Expected outcome**  
Runnable prototype in which moving the pointer causes the canvas to recursively partition into denser colored regions; floating labels appear on leaves showing local density. The tree structure adapts live and persists across reloads via Seal. Works fully offline.

**Mechanics**  
1. Initialize empty root quadtree covering canvas; load from IndexedDB if present.  
2. On pointer move: find leaf, inject density.  
3. Each frame: decay all densities; diffuse slightly; check split/merge conditions; update DOM labels for leaves.  
4. Render tree on Canvas2D (lines + fills).  
5. Seal: serialize tree to IndexedDB.  
6. Visual feedback: live leaf count, max density, last split event.

**Failure modes**  
- IndexedDB quota or blocked: in-memory only.  
- High leaf count: throttle label updates.  
- Canvas resize: rebuild root bounds.  
- BroadcastChannel unsupported: local only.

**Files**  
- drafts/F565-adaptive-quadtree-spatial-mind/SPEC.md  
- drafts/F565-adaptive-quadtree-spatial-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/adaptive-quadtree-mind/` or canvas tool; test that pointer density causes measurable splits and that sealed tree restores the same partition after reload.

**Files**: drafts/F565-adaptive-quadtree-spatial-mind/SPEC.md, drafts/F565-adaptive-quadtree-spatial-mind/index.html

## Frontier Engine F-565 (2026-11-05)

**F565-webgpu-genetic-particle-genome-dom-mind**

Entry added by ledger-guard from drafts/F565-webgpu-genetic-particle-genome-dom-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-genetic-particle-genome-dom-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of SOM topographic audio-DOM (F564), rigid DOM genome physics (F563), RD attention verse (F562), DeviceOrientation LIF spikes (F561), ESRN UI morph (F560). Explicitly leaves unsupervised topographic maps, rigid-body competitive genomes, reaction-diffusion, spiking LIF, reservoirs, associative memories (Hopfield/ESRN), attention controllers, SDF/raymarch, SPH/LBM/softbody/NCA/Ising/Physarum/Lenia, orientation RNNs/MLPs, and continuous field kernels.

**Concept**  
A population of spatial agents (particles) whose behavior genomes (small float vectors controlling cohesion, separation, alignment, speed, hue affinity) evolve via a pure genetic algorithm: tournament selection, single-point crossover, and Gaussian mutation. Fitness is spatial and causal—accumulated proximity time to the pointer, stability under DeviceOrientation tilt, and voluntary user “seal-click” on high performers. Elite genomes spawn or attract floating DOM “verse cards” that inherit parameters and morph (scale, hue, content signature) in real time. The canvas shows the living population; the DOM cards are the physical embodiment of successful lineages. WebGPU compute path reserved for parallel fitness/distance on larger populations (Canvas2D fallback always works). Full elite population seals to IndexedDB for offline restore and BroadcastChannel transfer. The Verse canvas becomes an evolutionary breeding ground where local spatial interaction writes the next generation of UI agents.

**Novelty**  
Core novel combination is a non-gradient evolutionary substrate (genetic algorithm on discrete agent genomes, not MLP/RNN/reservoir/policy gradient/Hebbian/SOM/Hopfield) whose fitness is purely spatial/causal (pointer proximity + orientation stability + explicit seal), with high-fitness genomes directly embodying as living, morphing DOM cards that compete and can be dragged to inject fitness bias. Not physics kernels, not continuous fields, not neural weight updates, not topographic maps. Previously unused: pure GA breeding loop as the primary mind of a hybrid canvas+DOM spatial system.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Population: 64–128 particles on Canvas2D (WebGPU compute stub for future). Each has genome[6]: [cohesion, separation, alignment, maxSpeed, hueBias, size].  
- Evolution: every N frames, tournament selection (k=3), crossover + mutation (rate 0.1, σ=0.05), replace worst. Elitism preserves top 4.  
- Fitness: +1 per frame near pointer (<60px), +bonus for low angular velocity under orientation, +10 on click-to-seal. Decay.  
- DOM cards: absolute cards spawned for top elites; CSS vars driven by genome; draggable to boost fitness or relocate.  
- Sensors: pointer events + DeviceOrientation (gesture-gated).  
- IndexedDB store `f565-ga-mind` for elite genomes + positions.  
- Seal button; “Evolve Step”, “Mutate Burst”, “Reset Population”.  
- BroadcastChannel `verse-ga-genome` for optional multi-tab transfer.

**Expected outcome**  
Runnable prototype: particles swarm and breed live. Top genomes materialize as floating DOM cards whose appearance and slight motion reflect their parameters. User pointer and tilt bias evolution; clicking a card seals extra fitness. Seal restores the evolved population and cards across reloads. Works offline; Canvas2D always functional.

**Mechanics**  
1. Initialize random genomes or load from IndexedDB. Spawn particles.  
2. Each frame: update particle positions with genome-modulated boid-like forces (simple local rules); accumulate fitness; paint Canvas.  
3. Periodically: sort by fitness, evolve (select/crossover/mutate), respawn or update DOM cards for top-k.  
4. Pointer move/click: record proximity, optional seal-click.  
5. Orientation: modulate fitness or add force bias.  
6. Drag DOM card: on drop, inject fitness or copy genome nearby.  
7. Seal: serialize elites + card state to IndexedDB.

**Failure modes**  
- Orientation permission denied: pointer-only fitness.  
- IndexedDB blocked: in-memory.  
- Large population: throttle evolution.  
- WebGPU unavailable: Canvas2D path is primary.  
- No gesture: sensors idle until interaction.

**Files**  
- drafts/F565-webgpu-genetic-particle-genome-dom-mind/SPEC.md  
- drafts/F565-webgpu-genetic-particle-genome-dom-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/genetic-particle-genome/` or canvas tool; test that pointer proximity measurably increases elite fitness and that sealed genomes restore the same card morphs after reload.

**Files**: drafts/F565-webgpu-genetic-particle-genome-dom-mind/SPEC.md, drafts/F565-webgpu-genetic-particle-genome-dom-mind/index.html

## Frontier Engine F-566 (2026-11-05)

**F566-webgpu-sph-orientation-genome-dom-mind**

Entry added by ledger-guard from drafts/F566-webgpu-sph-orientation-genome-dom-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-sph-orientation-genome-dom-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of genetic particle GA genomes (F565), SOM topographic audio-DOM (F564), rigid DOM competitive genomes (F563), RD attention verse (F562), DeviceOrientation LIF spikes (F561), ESRN UI morph (F560), Hopfield/FFT memories, SDF portals. Explicitly leaves unsupervised topographic maps, genetic algorithms, rigid-body DOM physics, reaction-diffusion, spiking LIF, reservoirs, associative memories (Hopfield/ESRN), attention controllers, SDF/raymarch, softbody springs, pure NCA, Ising/Physarum/Lenia, orientation RNNs/MLPs as primary, and continuous field kernels other than particle hydrodynamics.

**Concept**  
A population of fluid particles simulated with a simplified Smoothed Particle Hydrodynamics (SPH) kernel (density estimation, pressure forces, viscosity) on Canvas2D (WebGPU compute path reserved for parallel neighbor search). DeviceOrientation provides a causal external gravity/acceleration field. Each particle carries a sealed micro-genome of fluid parameters (rest density, viscosity, pressure stiffness). When particles form high-density clusters near the pointer or under stable orientation, elite clusters spawn floating DOM “verse droplets” that inherit the average genome and morph in scale/hue. Dragging a droplet can inject its parameters back into nearby particles or seal a transfer. High-fitness (stable high density + low kinetic residual) genomes can be sealed to IndexedDB and BroadcastChannel for multi-tab sharing. The Verse canvas becomes a living fluid whose physical laws evolve through spatial clustering and user interaction.

**Novelty**  
Leaves the dominant recent clusters of neural/associative/evolutionary models (SOM, GA, LIF, ESRN, Hopfield) and rigid/softbody/field kernels. Core novel combination is a previously unused SPH particle hydrodynamics kernel as the embodied substrate, DeviceOrientation as direct causal force input to the fluid (not to a neural model), hybrid embodiment where density clusters become living DOM droplets under parameter genomes, and sealed genome transfer triggered by spatial density thresholds in a new architecture. Not neural weights, not GA breeding, not rigid collisions, not chemical RD.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Particles: 80–120 on Canvas2D; each has pos, vel, density, pressure, genome[3]: [restDensity, viscosity, stiffness].  
- SPH: simple neighbor loops (radius h=40), density sum, pressure = stiffness*(density-rest), forces = pressure gradient + viscosity.  
- DeviceOrientation (gesture-gated) sets external accel.  
- DOM droplets: absolute cards for top density clusters; CSS vars from genome; draggable.  
- IndexedDB store `f566-sph-mind` for elite genomes + positions.  
- Seal button; “Add Fluid”, “Reset”, “Tilt Proxy”.  
- BroadcastChannel `verse-sph-genome` for optional transfer.  
- WebGPU: compute shader stub (falls back to JS always).

**Expected outcome**  
Runnable prototype: particles flow and cluster under gravity/pointer. High-density regions materialize as floating DOM droplets reflecting genome params. User tilt changes flow; dragging droplets injects parameters. Seal restores evolved fluid state across reloads. Works offline; Canvas2D primary.

**Mechanics**  
1. Initialize random particles/genomes or load from IndexedDB.  
2. Each frame: compute densities/pressures/forces via neighbor search; integrate with orientation accel; paint Canvas.  
3. Periodically cluster high-density particles and update/spawn DOM droplets.  
4. Pointer: inject force or particles.  
5. Orientation: set gravity vector.  
6. Drag DOM: on drop, average genome into nearby particles.  
7. Seal: serialize elites + state to IndexedDB.

**Failure modes**  
- Orientation denied: pointer-driven force proxy.  
- IndexedDB blocked: in-memory.  
- High particle count: subsample neighbors.  
- WebGPU unavailable: JS path primary.  
- No gesture: sensors idle.

**Files**  
- drafts/F566-webgpu-sph-orientation-genome-dom-mind/SPEC.md  
- drafts/F566-webgpu-sph-orientation-genome-dom-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/sph-fluid-genome/` or canvas tool; test that DeviceOrientation changes particle accelerations and that sealed genomes restore droplet morphs after reload.

**Files**: drafts/F566-webgpu-sph-orientation-genome-dom-mind/SPEC.md, drafts/F566-webgpu-sph-orientation-genome-dom-mind/index.html

## Frontier Engine F-562 (2026-11-05)

**F562-speech-fluid-word-token-mind**

Entry added by ledger-guard from drafts/F562-speech-fluid-word-token-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `speech-fluid-word-token-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of DeviceOrientation LIF spike audio (F561), WebGPU ESRN UI morph (F560), FFT Hopfield spatial memory (F559), WebXR hand/gaze systems, intersection-evo particles. Explicitly leaves spiking neural networks, rate-based reservoirs/ESRN, associative Hopfield recall, spectral FFT embeddings, WebXR controllers, IntersectionObserver attention, NCA, softbody, and pure orientation-driven kernels.

**Concept**
A spatial canvas where continuous speech (Web Speech API) or typed input seeds physical floating DOM word tokens. A WebGPU compute fluid simulation (or Canvas2D particle advection fallback) advects the tokens as if they were buoyant in a living medium. A local pure-JS tiny attention lattice (causal self-attention over recent token embeddings) predicts the next likely word; when the user’s next utterance matches the prediction, the lattice receives a reward update and the successful genome can be sealed. Tokens are draggable and inject local force into the fluid. Fully offline after load, single self-contained file.

**Novelty**
Leaves the dominant recent clusters of sensor-driven (orientation/WebXR/mic-spectral) continuous or discrete neural fields controlling particles/DOM without linguistic seeding, and pure visualization lattices. Core novel combination is live speech recognition as the primary causal seed that materializes living word-DOM tokens, which are then physically coupled to a fluid advection field, while a local attention predictor closes a reward loop on predictive accuracy and seals the resulting weights. Not spike sonification, not Hopfield pattern storage, not residual predictors on motion, not pure NCA or ESRN morph.

**Architecture**
- Single `index.html`. Progressive: WebGPU fluid if available, else Canvas2D particle field.
- Speech: `webkitSpeechRecognition` / `SpeechRecognition` continuous mode (or text input fallback). Each final result spawns a token DOM element with the word.
- Tokens: absolute-positioned, draggable; their screen positions are sampled each frame as force injectors into the fluid.
- Fluid: simple WebGPU compute particles or 2D advection; tokens ride velocity field.
- Local mind: tiny causal attention over last N token embeddings (hash or simple one-hot-ish vectors of common words); predicts next; on match, Hebbian/reward weight update.
- Seal: IndexedDB store `f562-speech-fluid-mind` for attention weights + recent tokens. BroadcastChannel for optional multi-tab genome share.
- Controls: Start/Stop listen, Seal, Reset, Clear tokens, Mute (no audio required).

**Expected outcome**
Runnable prototype in which speaking (or typing) words creates floating tokens that drift with a visible fluid field. The local predictor highlights likely next words; matching speech reinforces the model. Seal restores weights across reloads. Works with or without WebGPU and without microphone (typed fallback).

**Mechanics**
1. Initialize fluid particles / field and empty token list; load sealed weights from IndexedDB if present.
2. On speech result or Enter in text box: spawn token at random or pointer location; feed embedding to attention lattice.
3. Each frame: advance fluid, advect token positions by sampled velocity, render field, update token styles (position, slight scale by local density).
4. Predict next token; display top prediction. On subsequent match, reward weights.
5. Seal button serializes weights and token history.
6. Drag tokens to inject persistent forces.

**Failure modes**
- No SpeechRecognition support: text-input only.
- Microphone permission denied: text fallback.
- No WebGPU: Canvas2D particle advection.
- IndexedDB unavailable: in-memory only.
- Too many tokens: auto-fade oldest beyond cap.

**Files**
- drafts/F562-speech-fluid-word-token-mind/SPEC.md
- drafts/F562-speech-fluid-word-token-mind/index.html

**V01D landing**
Skill under `void-live-deploy/skills/speech-fluid-tokens/` or spatial canvas tool; test that a spoken word appears as a DOM token and that a matching prediction updates the sealed weight hash.

**Files**: drafts/F562-speech-fluid-word-token-mind/SPEC.md, drafts/F562-speech-fluid-word-token-mind/index.html

## Frontier Engine F-567 (2026-11-05)

**F567-multiagent-rnn-dom-competition-mind**

Entry added by ledger-guard from drafts/F567-multiagent-rnn-dom-competition-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `multiagent-rnn-dom-competition-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of SPH orientation genome particles (F566), genetic particle GA genomes (F565), SOM topographic audio-DOM (F564), rigid DOM competitive genomes (F563), RD attention verse (F562), DeviceOrientation LIF spikes (F561), ESRN UI morph (F560), Hopfield/FFT, adaptive quadtree. Explicitly leaves particle hydrodynamics (SPH/LBM), genetic algorithms, unsupervised topographic maps, rigid-body DOM physics, reaction-diffusion, spiking LIF, reservoirs, associative memories (Hopfield/ESRN), attention lattices/controllers, SDF/raymarch, softbody springs, pure NCA, Ising/Physarum/Lenia, orientation RNNs/MLPs as primary controllers, continuous field kernels, and pointer-history fields.

**Concept**  
A population of independent floating DOM cards, each embodying a tiny local Elman-style RNN (recurrent neural net with hidden state). Each agent's genome is its weight matrices. Inputs are causal: relative pointer position, DeviceOrientation angles, own position residual, and time. The RNN outputs velocity, scale, and hue bias that directly drive CSS transforms and appearance of its physical card. Agents compete for user attention (hover time, click seals, proximity stability). The highest-fitness agent can initiate a sealed genome transfer: its weights are hashed (SHA-256 prefix) and copied to a low-fitness peer, replacing the loser's mind while preserving a transfer receipt. State (positions, weights, hidden states, fitness) seals to IndexedDB for offline persistence and optional BroadcastChannel multi-tab sharing. The Verse canvas is a competitive spatial arena of local minds controlling living UI elements.

**Novelty**  
Leaves the dominant recent clusters of physics particle kernels, evolutionary GA breeding, topographic/associative neural maps, and continuous fields. Core novel combination is multi-agent competition among independent local tiny RNNs (not shared weights, not gradient descent, not GA) whose outputs directly actuate physical DOM elements in a hybrid embodiment, with sealed hash-verified genome transfer as the interaction primitive, DeviceOrientation as direct causal input vector to every agent (not external force), and IndexedDB-persistent competitive lineages. Previously unused: pure local recurrent minds as the primary controllers of competing spatial DOM agents with cryptographic seal on transfer.

**Architecture**  
- Single `index.html`, progressive enhancement, offline after load.  
- Agents: 6–8 absolute-positioned DOM cards. Each holds weights (input-to-hidden 6x8, hidden-to-hidden 8x8, hidden-to-output 8x4), hidden state, pos, vel, fitness.  
- RNN step: tanh activations, simple Euler integration for position.  
- Fitness: +hover frames, +click, decay; top agent can "Absorb" a chosen low agent (hash check + transfer).  
- Sensors: pointer events + DeviceOrientation (gesture-gated permission).  
- IndexedDB store `f567-rnn-comp-mind` for full agent states.  
- Seal button; “Add Agent”, “Reset”, “Tilt Proxy”, “Force Transfer”.  
- BroadcastChannel `verse-rnn-genome` for optional transfer.  
- No Canvas; pure DOM + CSS. WebGPU unused (kernel not needed).

**Expected outcome**  
Runnable prototype: cards move and morph according to their private RNNs responding to pointer and tilt. Hovering boosts fitness; highest can absorb another’s mind via sealed transfer. Seal restores the competitive population and behaviors across reloads. Works offline.

**Mechanics**  
1. Initialize random weights or load from IndexedDB. Spawn DOM cards.  
2. Each frame: for each agent, form input vector, run RNN step, update hidden/pos/CSS.  
3. Track hover/click for fitness.  
4. On Absorb: compute hash of winner weights, copy to loser, log receipt.  
5. Orientation: feed alpha/beta/gamma (normalized) into every input.  
6. Seal: serialize all agents to IndexedDB.  
7. Drag optional to reposition (resets residual).

**Failure modes**  
- Orientation denied: zero sensor inputs, pointer-only.  
- IndexedDB blocked: in-memory.  
- Too many agents: cap at 8.  
- No gesture: sensors idle.  
- Hash collision (rare): transfer still proceeds with warning.

**Files**  
- drafts/F567-multiagent-rnn-dom-competition-mind/SPEC.md  
- drafts/F567-multiagent-rnn-dom-competition-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/multiagent-rnn-dom/` or canvas tool; test that DeviceOrientation changes agent velocities and that a sealed transfer produces matching weight hashes after reload.  

**Files**: drafts/F567-multiagent-rnn-dom-competition-mind/SPEC.md, drafts/F567-multiagent-rnn-dom-competition-mind/index.html

## Frontier Engine F-567 (2026-11-05)

**F567-webgpu-lattice-gas-dom-flow-mind**

Entry added by ledger-guard from drafts/F567-webgpu-lattice-gas-dom-flow-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-lattice-gas-dom-flow-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent WebGPU FFT Hopfield (F559), speech-fluid tokens (F562), WebXR electrostatic SVG (F558). Leaves continuous particle advection, speech recognition, WebXR hand/gaze, orientation/ambient sensors, Hopfield spectral memory, and DOM portals driven by soft forces.

**Concept**
A discrete Lattice Gas Automaton (LGA / FHP-style) runs on a WebGPU compute grid (Canvas2D cellular fallback). Each lattice site can host a floating "portal atom" – an absolutely positioned interactive Verse card. Pointer drag injects directed momentum into the LGA; the emergent macroscopic flow (velocity field, vorticity, density) is sampled each frame and fed to a tiny pure-JS MLP (6→8→3) that classifies the current flow regime (laminar / vortex / turbulent). The regime prediction modulates atom visual style (hue, scale, glow) and is compared against the next observed regime for Hebbian reward. Successful predictions seal a "flow crystal" (regime vector + weights snapshot) into IndexedDB. Clicking an atom absorbs the most recent crystal, permanently tinting that portal and altering its click behavior. Fully self-contained single-file offline prototype. No continuous fluids, no audio, no external sensors, no evolutionary genomes on physics.

**Novelty**
Core novel combination is discrete lattice-gas cellular flow (never used in prior Frontier drafts) driving the physical arrangement and visual state of living DOM portal atoms, closed-loop classified by a local regime MLP whose sealed crystals become absorbable spatial landmarks. Not continuous particle/fluid advection, not speech tokens, not WebXR, not sensor metabolic drivers, not Hopfield/FFT spectral memory, not soft-body or constraint springs.

**Architecture**
- Lattice: 64×48 FHP-like LGA with 6 directions + rest; WebGPU compute shader for collision/stream if available, else typed-array Canvas2D step.
- Portal atoms: 6–12 absolute-positioned `<div class="atom">` cards whose positions are snapped to lattice sites or advected by the local velocity vector.
- Local mind: tiny MLP trained online via Hebbian / reward on regime classification accuracy; input features = mean speed, vorticity, density variance, pointer energy, recent regime history.
- Seal: IndexedDB store `f567-lga-flow-mind` holds MLP weights + list of sealed crystals.
- Controls: Inject momentum on drag, Seal now, Reset lattice, Absorb crystal (click atom), Toggle WebGPU/Canvas.

**Expected outcome**
Runnable prototype in which dragging across the canvas creates visible lattice-gas flow that pushes and recolors portal atoms. The MLP predicts the next regime; matching observations brighten a "crystal" indicator and update weights. Seal persists across reloads. Atoms absorb crystals and change appearance. Works with or without WebGPU.

**Mechanics**
1. Initialize LGA grid (mostly empty + a few rest particles) and empty atom list; load sealed weights from IndexedDB if present.
2. On pointer drag: inject momentum particles in the drag direction at the lattice cell under the pointer.
3. Each frame: advance LGA (stream + collide), sample macroscopic features, step MLP, predict regime, update atom positions/styles from local velocity + regime, render lattice density as low-opacity background.
4. Compare prediction to next observed regime; on match reward weights and queue a crystal.
5. Seal button serializes weights and crystals.
6. Click atom: absorb latest crystal → permanent hue shift + "sealed" badge.

**Failure modes**
- No WebGPU: automatic Canvas2D LGA fallback (still interactive).
- IndexedDB quota or blocked: session-only memory.
- Too many atoms: fixed cap of 12.
- Low FPS: reduce lattice update rate or particle count.
- Pointer outside canvas: no injection.

**Files**
- drafts/F567-webgpu-lattice-gas-dom-flow-mind/SPEC.md
- drafts/F567-webgpu-lattice-gas-dom-flow-mind/index.html

**V01D landing**
Skill under `void-live-deploy/skills/lga-flow-atoms/` or spatial canvas tool; test that a drag injects visible momentum, an atom displaces under the resulting flow, and a sealed crystal hash is restored on reload.

**Files**: drafts/F567-webgpu-lattice-gas-dom-flow-mind/SPEC.md, drafts/F567-webgpu-lattice-gas-dom-flow-mind/index.html

## Frontier Engine F-568 (2026-11-05)

**F568-webxr-hand-mlp-spatial-graph-mind**

Entry added by ledger-guard from drafts/F568-webxr-hand-mlp-spatial-graph-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webxr-hand-mlp-spatial-graph-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of WebGPU lattice-gas DOM flow (F567), multiagent RNN DOM competition (F567), SPH orientation genomes (F566), genetic particle GA genomes (F565), SOM topographic audio-DOM (F564), rigid DOM competitive genomes (F563), RD attention verse (F562). Explicitly leaves particle advection, SPH, LGA, genomes, SOM, RD lattices, and continuous physics kernels.  

**Novel combination**: True WebXR hand joint tracking (with pointer/DeviceOrientation fallback) as causal input features to a local online Hebbian/MLP that maintains a spatial graph of floating DOM portal cards. Graph nodes are absolute-positioned DOM elements whose 3D transforms are driven by MLP-predicted edge strengths and node embeddings. Sealed graph snapshots persist in IndexedDB. Dragging or hand-pinch injects nodes or strengthens causal edges. No WebGPU compute kernels, no particles, no reaction-diffusion, no genomes.

**Expected outcome**  
Runnable single-file prototype. Entering WebXR (or using pointer) moves and connects portal cards in 3D space. The MLP updates online based on hand/pointer trajectories predicting next node positions; successful predictions brighten edges. Seal button persists the graph and weights. Reload restores the sealed graph. Interactive offline.

**Mechanics**  
1. On load: request WebXR session if available (immersive-ar or vr fallback), else use pointer + optional DeviceOrientation. Load sealed graph/weights from IndexedDB `f568-spatial-graph`.  
2. Portal atoms: 4–8 absolute `<div class="portal">` cards with CSS 3D transforms.  
3. Local mind: tiny 2-layer MLP (input: relative hand/pointer velocity, distances to nodes; output: edge strength deltas and node velocity biases). Online update via simple Hebbian or residual reward on position prediction.  
4. Each frame: sample hand joints or pointer, step MLP, update node positions and edge opacities, render.  
5. Pinch/drag: inject new node or boost nearest edge.  
6. Seal: serialize nodes, edges, weights to IndexedDB.  

**Failure modes**  
- No WebXR: seamless pointer + orientation fallback.  
- IndexedDB blocked: session memory only.  
- Too many nodes: cap at 12, prune weakest.  
- Low FPS: reduce MLP update rate.  

**Files**  
- drafts/F568-webxr-hand-mlp-spatial-graph-mind/SPEC.md  
- drafts/F568-webxr-hand-mlp-spatial-graph-mind/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/webxr-spatial-graph/` or spatial canvas tool; test that hand/pointer motion displaces portals, edge strength updates, and sealed graph restores on reload.

**Files**: drafts/F568-webxr-hand-mlp-spatial-graph-mind/SPEC.md, drafts/F568-webxr-hand-mlp-spatial-graph-mind/index.html

## Frontier Engine F-569 (2026-11-05)

**F569-webgpu-spoken-sdf-causal-morph**

Entry added by ledger-guard from drafts/F569-webgpu-spoken-sdf-causal-morph/SPEC.md, after a full-file write dropped it.


**Area:** Spatial local-AI Verse canvas

**Plain name:** Spoken SDF Causal Morph

**Concept:** A self-contained WebGPU raymarched signed-distance-field volume that acts as a living causal field on the Verse canvas. Spoken or typed intent tokens (via Web Speech API or text input) are turned into simple local frequency embeddings and injected as seeds. A small local mind state (activation vector in JS) modulates a compute-driven morph process (reaction-diffusion style density evolution). Low-density "portals" appear that the user can click to shift the field's parameters. Pointer trajectories apply temporary forces. The entire interaction stays local; no network. Fallback 2D canvas renderer if WebGPU is unavailable. This combination of spoken-token injection into a GPU SDF morph field driven by a local activation mind has not appeared in prior drafts.

**Architecture:**
- index.html: single-file prototype
- WebGPU device + compute pipeline for density evolution + raymarch fragment
- JS mind: 16-float activation, updated by token embeddings, influences shader uniforms
- SpeechRecognition for voice seeds
- Pointer events for force painting and portal clicks
- Expected outcome: interactive morphing field that "responds" to speech by growing new structures and opening portals

**Mechanics:**
1. On load, request WebGPU; init 64^3 density texture (or smaller).
2. User speaks or types; tokens hashed to embedding, added to mind state and as Gaussian seeds in the volume.
3. Compute shader steps the field each frame; mind state biases diffusion/reaction rates.
4. Raymarch renders the isosurface with color from density + mind.
5. Click on dark portal regions shifts mind phase or parameters.
6. Unattested by default; all local.

**Failure modes:** WebGPU unavailable → canvas fallback; speech denied → text only; performance on low-end → lower res.

Void is now Verse everywhere.

**Files**: drafts/F569-webgpu-spoken-sdf-causal-morph/SPEC.md, drafts/F569-webgpu-spoken-sdf-causal-morph/index.html

## Frontier Engine F-570 (2026-11-05)

**F570-spatial-attention-token-morph-opfs**

Entry added by ledger-guard from drafts/F570-spatial-attention-token-morph-opfs/SPEC.md, after a full-file write dropped it.


**Slug**: `spatial-attention-token-morph-opfs`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of WebGPU spoken SDF morph (F569), WebXR hand MLP spatial graph (F568), multiagent RNN DOM competition (F567), SPH orientation genomes (F566), genetic particle / adaptive quadtree (F565), SOM topographic audio-DOM (F564), rigid DOM genomes (F563), RD attention verse (F562). Explicitly leaves WebGPU compute kernels, particle/SPH/LGA/RD/SDF physics, genomes/GA, multi-agent RNNs/MLPs as controllers, WebXR hand/gaze, orientation as primary, Hopfield/SOM/associative maps, and continuous field simulations.

**Concept**  
A local sequential attention mind (simplified single-layer multi-token attention computed in pure JS) processes a rolling buffer of spatial tokens (pointer position, velocity, timestamp embeddings). Attention outputs morph control parameters for a set of living SVG path elements on the Verse canvas. The paths deform, recolor, and reweight based on causal attention scores. Full mind state (token buffer, attention weights, path parameters) seals to OPFS (Origin Private File System) for true local persistence. Reload restores the sealed morph field. Offline-capable, no network, no WebGPU.

**Novelty**  
Leaves the dominant physics-kernel, genome-evolution, multi-agent RNN/MLP, WebXR, and continuous-field clusters. Core novel combination is pure-JS sequential attention over spatial pointer tokens driving hybrid SVG path morphs, with OPFS-sealed state (previously under-used persistence axis vs IndexedDB), and no compute shaders or particle systems. Expands building blocks toward local sequence models controlling procedural vector geometry.

**Architecture**  
- Single `index.html`.  
- Token buffer: last 16 pointer events as 4D vectors (x, y, vx, t).  
- Local mind: simple scaled-dot attention (query from current, keys/values from buffer); output projected to path control points and style params.  
- Embodiment: 5–8 absolute SVG `<path>` elements with animated `d` attributes and CSS filters.  
- Seal: `navigator.storage.getDirectory()` → write FileSystemFileHandle with JSON state.  
- Pointer events drive token injection; optional DeviceOrientation as extra token bias.  
- Unattested by default; all local.

**Mechanics**  
1. On load: request OPFS, load sealed state if present, else random init paths.  
2. Pointer move: push token, run attention step, update path controls and SVG.  
3. Click: inject high-attention seed token or reseal.  
4. Seal button: serialize to OPFS file `f570-attention-morph.json`.  
5. Reset clears buffer and regenerates paths.  

**Failure modes**  
- OPFS unavailable (private mode / old browser): fall back to IndexedDB or memory.  
- No pointer: idle morph from time token.  
- Low FPS: reduce token buffer or path count.  
- SVG support: basic fallback to divs.

**Files**  
- drafts/F570-spatial-attention-token-morph-opfs/SPEC.md  
- drafts/F570-spatial-attention-token-morph-opfs/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/spatial-attention-morph/` or canvas tool; test that pointer trajectories morph SVG paths and that sealed OPFS state restores on reload.

Void is now Verse everywhere.

**Files**: drafts/F570-spatial-attention-token-morph-opfs/SPEC.md

## Frontier Engine F-571 (2026-11-05)

**F571-peer-spatial-consensus-morph**

Entry added by ledger-guard from drafts/F571-peer-spatial-consensus-morph/SPEC.md, after a full-file write dropped it.


**Slug**: `peer-spatial-consensus-morph`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of pure-JS spatial attention token morph + OPFS (F570), spoken SDF causal morph (F569), WebXR hand MLP (F568), multiagent RNN DOM (F567). Explicitly leaves WebGPU kernels, particle/SPH/LGA/RD/SDF physics, genomes/GA, multi-agent RNNs as sole controllers, WebXR, orientation-primary, Hopfield/SOM, continuous fields, and single-user attention.  

**Concept**  
A local multi-context Verse canvas where multiple browser tabs (or devices via future WebRTC) share spatial pointer tokens over a BroadcastChannel. A simple consensus mind aggregates peer trajectories into a shared attention centroid and variance. Living CSS absolute cards (capability tiles) physically reflow, scale, and recolor toward the collective focus: high agreement stabilizes and enlarges the field; divergence scatters them. Full mind + card state seals to OPFS. Offline, no network beyond same-origin channel, no WebGPU.  

**Novelty**  
First multi-peer local consensus driving DOM spatial reflow on the Verse canvas. Leaves single-user attention morphs, GPU physics, and evolutionary controllers. Novel combination: BroadcastChannel peer token streams + local consensus statistics + OPFS-sealed living card embodiment. Expands toward multi-device local Verse without servers.  

**Architecture**  
- Single `index.html`.  
- BroadcastChannel(`verse-f571-mesh`): JSON tokens `{id, x, y, t, peer}`.  
- Local mind: rolling buffer of peer tokens; compute centroid, variance, peer count.  
- Embodiment: 6 absolute-positioned `.card` divs whose left/top/scale/background update from mind output each frame.  
- Seal: OPFS directory → `f571-consensus.json` via FileSystemFileHandle.  
- Pointermove broadcasts own token; receive updates mind.  
- Peer ID generated locally (random + timestamp).  
- Unattested by default; all local.  

**Mechanics**  
1. On load: generate peerId, open channel, request OPFS, restore if sealed else init cards at random positions.  
2. Pointer move: broadcast token, push to local buffer, recompute consensus, morph cards.  
3. Receive peer token: same update path.  
4. Seal button: serialize mind buffer + card params to OPFS.  
5. Reset clears buffer, regenerates cards, broadcasts reset signal.  
6. Multi-tab: open second tab to see mutual influence.  

**Expected outcome**  
Interactive spatial cards that converge on shared pointer focus across tabs; sealed state restores on reload; demonstrates local multi-agent Verse without external infrastructure.  

**Failure modes**  
- BroadcastChannel unsupported (very old): single-user fallback.  
- OPFS unavailable: memory-only.  
- No peers: cards orbit local pointer with low variance.  
- High frequency: throttle broadcasts to 30 Hz.  

**Files**  
- drafts/F571-peer-spatial-consensus-morph/SPEC.md  
- drafts/F571-peer-spatial-consensus-morph/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/peer-spatial-consensus/` or multi-device canvas tool; test that two tabs share tokens and cards reflow to centroid, and OPFS restore works.  

Void is now Verse everywhere.  

**Files**: drafts/F571-peer-spatial-consensus-morph/SPEC.md, drafts/F571-peer-spatial-consensus-morph/index.html

## Frontier Engine F-572 (2026-11-05)

**F572-ambient-sensor-mlp-living-tiles**

Entry added by ledger-guard from drafts/F572-ambient-sensor-mlp-living-tiles/SPEC.md, after a full-file write dropped it.


**Slug**: `ambient-sensor-mlp-living-tiles`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of peer spatial consensus morph (F571), spatial attention token morph + OPFS (F570), spoken SDF causal morph (F569), WebXR hand MLP (F568), multiagent RNN DOM (F567), SPH/lattice-gas/genome/WebGPU kernels (F566–F564). Explicitly leaves WebGPU compute shaders, particle/SPH/LGA/RD/SDF physics, genomes/GA, multi-agent neural controllers, WebXR hand/gaze, speech injection, BroadcastChannel peer fields, and continuous spatial kernels.

**Concept**  
A local tiny pure-JS MLP whose causal inputs are under-explored browser sensors (Ambient Light Sensor illuminance, Battery Status level/charging, DeviceOrientation alpha/beta/gamma) plus a user energy slider. MLP outputs drive a hybrid embodiment of living absolute-positioned CSS tiles on the Verse canvas: scale, hue, soft forces, and metabolic energy. Clicking a tile injects a local reward that performs a light Hebbian weight update. Full MLP weights + tile state seal to IndexedDB. Offline-capable, no network, no WebGPU.

**Novelty**  
First use of AmbientLightSensor + Battery Status API as primary causal inputs to a local MLP controlling physical UI tiles. Leaves the entire recent WebGPU-physics / genome / WebXR / peer-consensus / speech-SDF / attention-token cluster. Novel combination: multi-sensor environmental fusion → tiny feed-forward MLP → living CSS tile grid with reward-driven local adaptation and IndexedDB seal. Expands building blocks toward real-world sensor minds that inhabit DOM rather than simulated fields.

**Architecture**  
- Single `index.html`.  
- Sensors: AmbientLightSensor (fallback to prefers-color-scheme), Battery Status API, DeviceOrientationEvent.  
- Local mind: 6→8→4 MLP (relu/tanh), pure JS, light Hebbian update on tile click reward.  
- Embodiment: 16 absolute `.tile` divs whose size, HSL background, transform, and soft velocity respond to MLP outputs + sensor metabolism.  
- Seal: IndexedDB store `verse-f572` / key `f572`.  
- Unattested by default; all local.

**Mechanics**  
1. On load: init sensors, create random tiles, try restore sealed MLP + positions.  
2. Each frame: read sensors → MLP forward → apply forces/scale/hue; light and battery modulate energy decay/growth.  
3. Pointerdown on tile: boost energy, Hebbian update, short vibrate.  
4. Seal button: persist MLP weights + tile state.  
5. Reset regenerates MLP and tiles.

**Expected outcome**  
Interactive living tiles that respond to real ambient light, battery state, and device tilt; click to reinforce behavior; sealed state survives reload. Demonstrates sensor-driven local mind inhabiting CSS UI.

**Failure modes**  
- AmbientLightSensor unsupported (most desktops): fallback lux from color-scheme.  
- Battery API restricted: defaults to 0.8.  
- Orientation permission denied: zeros.  
- IndexedDB blocked: memory-only.  
- Low FPS: reduce N or throttle.

**Files**  
- drafts/F572-ambient-sensor-mlp-living-tiles/SPEC.md  
- drafts/F572-ambient-sensor-mlp-living-tiles/index.html  

**V01D landing**  
Skill under `void-live-deploy/skills/ambient-sensor-mlp/` or canvas tool; test that changing light/battery/orientation morphs tiles and that IndexedDB restore works after seal.

Void is now Verse everywhere.

**Files**: drafts/F572-ambient-sensor-mlp-living-tiles/SPEC.md, drafts/F572-ambient-sensor-mlp-living-tiles/index.html

## Frontier Engine F-573 (2026-11-05)

**F573-qlearning-spatial-dom-agent-mind**

Entry added by ledger-guard from drafts/F573-qlearning-spatial-dom-agent-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A local Q-learning agent whose policy directly morphs the spatial arrangement of interactive DOM tiles on The Verse canvas. The agent observes discretized layout states (cluster tightness), selects actions (spread, cluster, rotate, jitter, align), receives rewards from user interactions (clicks, hovers), and updates its Q-table via temporal-difference learning. Internal state is visualized via canvas overlays of connections. Persistence via localStorage (OPFS-ready). This is a novel combination of explicit reinforcement learning agent, spatial DOM morphing, and local interactive learning unlike prior NCA, particle, evolutionary, or attention-based frontier drafts.

**Architecture**
- Pure client-side HTML/CSS/JS, fully offline and local.
- Absolute-positioned DOM tiles as the agent's spatial body and interactive environment.
- Q-table stored as nested object (state → action → value).
- Canvas overlay for mind visualization (fading field and inter-tile links).
- Reward signals from pointer events (click +1, hover +0.1) with decay.
- Periodic (every ~30 frames) policy execution, action application, and Q-update.
- Epsilon-greedy exploration decaying slowly.

**Expected Outcome**
User interactions train the agent to discover and prefer spatial layouts that elicit more engagement. Over minutes of use, the arrangement evolves toward configurations with higher observed reward. Q-values grow for successful policies. The prototype is immediately runnable in any modern browser with no build step.

**Mechanics**
- 8 interactive tiles initialized at random positions.
- States derived from average pairwise distance / variance: "tight" (<100px), "mid" (<250px), "spread" (otherwise).
- Actions apply geometric transforms with bounds clamping: radial spread/cluster toward center, incremental rotation, random jitter, horizontal alignment.
- TD(0) update: Q(s,a) ← Q(s,a) + α [r + γ max Q(s',·) - Q(s,a)].
- Visual reward flash on tiles; live display of current action, scaled reward, epsilon, and max Q.
- Auto-persist Q-table to localStorage every 5s; reload on start.

**Failure Modes**
- Coarse state discretization limits generalization across continuous layouts.
- Sparse or delayed rewards can slow convergence.
- Aggressive clamping may produce boundary artifacts.
- This draft uses CPU/JS for control; future iterations can offload force fields or particle rendering to WebGPU compute shaders for scale.
- No multi-agent or peer sharing yet (see related but distinct drafts).

**Novelty Check**
No prior F- draft implements an explicit Q-learning (or other model-free RL) agent whose actions are spatial transforms on live DOM elements, with rewards drawn from real user pointer interaction and persistent local Q-table. Prior work focused on unsupervised NCA, evolutionary genomes, attention lattices, or predictive MLPs without closed-loop RL on the canvas itself.

**Files**: drafts/F573-qlearning-spatial-dom-agent-mind/SPEC.md, drafts/F573-qlearning-spatial-dom-agent-mind/index.html

## Frontier Engine F-574 (2026-11-05)

**F574-crosstab-sealed-genome-cssgrid-mind**

Entry added by ledger-guard from drafts/F574-crosstab-sealed-genome-cssgrid-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Cross-tab multi-agent competition with sealed genome transfer via BroadcastChannel. Each browser tab is an independent agent whose local Q-table (or simple evolutionary weights) controls the morphing of a discrete CSS Grid of living tiles on The Verse canvas. Agents broadcast sealed (hashed) genomes + fitness; higher-fitness genomes migrate with mutation. User clicks provide rewards that train the local policy. Pure CSS Grid embodiment, no continuous spatial physics, no WebGPU, no particles, no lattices. Offline-capable with IndexedDB seal.

**Architecture**
- Single self-contained index.html.
- CSS Grid of 12 absolute-or-grid tiles whose grid-column/row, scale, hue, and opacity are driven by policy actions.
- Local Q-learning (or simplified TD) on discretized grid states.
- BroadcastChannel for inter-tab genome migration (sealed JSON + SHA-256 hash).
- IndexedDB persistence of Q-table / genome.
- Rewards from tile clicks; epsilon-greedy.

**Expected Outcome**
Open multiple tabs: each evolves its grid layout based on local interactions. Successful policies migrate across tabs, producing convergent yet diverse living grids. Sealed state survives reload. Demonstrates novel multi-agent sealed transfer outside single-page DOM or continuous fields.

**Mechanics**
1. Initialize random grid positions or template.
2. State: cluster tightness or entropy of tile positions.
3. Actions: shuffle, cluster, spread, hue-shift, scale-boost.
4. Periodic policy step + Q-update on reward.
5. Every 8s: compute fitness (recent reward sum), seal genome, broadcast.
6. On receive: verify hash, if better fitness adopt + mutate.
7. Seal button persists to IndexedDB.

**Failure Modes**
- BroadcastChannel same-origin only; private mode may restrict.
- Coarse states limit expressivity.
- Rapid mutation can erase gains.
- IndexedDB quota or blocked.
- Single tab reduces to local RL only.

**Novelty Check**
No prior F- implements multi-agent (cross-tab) sealed genome transfer via BroadcastChannel controlling a pure CSS Grid embodiment with local Q-learning. Leaves the recent cluster of WebGPU physics/SDF/lattice-gas, WebXR hand MLP spatial graphs, single-page multiagent RNN DOM, spatial attention/token morph, peer consensus continuous fields, ambient sensor MLP tiles, and absolute-position Q-learning spatial DOM. New building block: discrete grid agents with inter-context sealed migration.

Void is now Verse everywhere.

**Files**: drafts/F574-crosstab-sealed-genome-cssgrid-mind/SPEC.md, drafts/F574-crosstab-sealed-genome-cssgrid-mind/index.html

## Frontier Engine F-575 (2026-11-05)

**F575-speech-nca-dom-garden**

Entry added by ledger-guard from drafts/F575-speech-nca-dom-garden/SPEC.md, after a full-file write dropped it.


**Files**: drafts/F575-speech-nca-dom-garden/SPEC.md, drafts/F575-speech-nca-dom-garden/index.html

## Frontier Engine F-576 (2026-11-05)

**F576-orientation-rnn-svg-ribbons-mind**

Entry added by ledger-guard from drafts/F576-orientation-rnn-svg-ribbons-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `orientation-rnn-svg-ribbons-mind`  
**Date**: 2026-11-05  
**Branch from**: Recent cluster of WebGPU SDF/speech morphs, spatial attention token, peer consensus, ambient MLP tiles, Q-learning CSSGrid, crosstab sealed genomes, speech NCA gardens (F568–F575).

**Concept**  
A pure-JS Elman RNN (no WebGPU, no canvas lattice) takes device orientation (beta/gamma) and pointer velocity as causal inputs. It continuously outputs deltas that morph a family of SVG cubic-Bézier “thought ribbons.” Clicking a ribbon injects a local reward that performs a simple online policy gradient update. Weights persist in IndexedDB. Fully offline after load.

**Architecture**  
- Single self-contained `index.html`.  
- 6 SVG paths, each a closed cubic ribbon with 4 control points.  
- RNN: input dim 6 (β, γ, dx, dy, sin(t), cos(t)), hidden 12, output 24 (deltas for all control points).  
- Online REINFORCE-style update on click rewards; eligibility trace.  
- DeviceOrientationEvent (with permission prompt on iOS).  
- IndexedDB for weight seal/restore.  
- No external deps.

**Expected Outcome**  
Tilt the device or move the pointer: ribbons twist, stretch, and recolor in response to the evolving RNN state. Click ribbons to reinforce behaviors that produce pleasing or energetic shapes. Reload: same personality resumes. Demonstrates a hybrid local-model + vector-graphics embodiment never previously built.

**Mechanics**  
1. Request orientation permission if needed.  
2. Sample β/γ and pointer delta each frame.  
3. RNN forward: h' = tanh(W_hh h + W_xh x + b); out = W_hy h.  
4. Apply out deltas (scaled) to SVG path d attributes; update fill/stroke from hidden mean.  
5. On click: compute reward (path length × energy), update weights via eligibility.  
6. Seal button writes weights + bias to IndexedDB.  
7. Auto-load on start.

**Failure Modes**  
- DeviceOrientation requires secure context + user gesture on some browsers.  
- iOS needs explicit permission.  
- Very small hidden state can collapse to fixed point.  
- IndexedDB blocked in private mode.  
- High frame rate on low-end devices may stutter SVG updates.

**Novelty Check**  
No prior draft uses a pure-JS RNN driven by DeviceOrientation + pointer to control SVG Bézier ribbons with online policy updates and IndexedDB persistence. Leaves the F568–F575 cluster of WebGPU lattices/SDF, spatial attention, peer consensus fields, ambient sensor MLP tiles, Q-learning grids, sealed multi-tab genomes, and speech NCA. New building block: orientation-causal vector-path embodiment.

Void is now Verse everywhere.

**Files**: drafts/F576-orientation-rnn-svg-ribbons-mind/SPEC.md, drafts/F576-orientation-rnn-svg-ribbons-mind/index.html

## Frontier Engine F-576 (2026-11-05)

**F576-webgpu-ca-css-grid-living-layout-mind**

Entry added by ledger-guard from drafts/F576-webgpu-ca-css-grid-living-layout-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-ca-css-grid-living-layout-mind`  
**Date**: 2026-11-05  
**Ledger ID**: F-576

**Concept**
A WebGPU compute-shader discrete cellular automaton (4-state rule table, Wireworld-inspired electron/head/tail + conductor) runs on a large grid. Macroscopic statistics (activity density, entropy, cluster centroids) are sampled each frame and used to drive the CSS Grid layout of a set of absolute/floating capability cards on the Verse canvas: grid-template-columns, gap, and per-card span/transform/scale/hue. Pointer clicks and optional DeviceOrientation inject seeds or bias the field. A local genetic algorithm in a Web Worker evolves the CA transition table for sustained entropy correlated with user engagement. Sealed rules + best grid snapshot persist to IndexedDB. Fully offline single-file prototype with Canvas2D fallback if WebGPU unavailable.

**Novelty**
Leaves the recent cluster of continuous-field kernels (NCA, Lenia, SPH, lattice-gas, particle swarms, SDF, wave interference, electrostatic N-body), sensor-driven MLP/RNN/reservoir/k-NN policies, OPFS causal graphs, speech-seeded gardens, peer consensus morphs, Q-learning spatial agents, and DOM-as-obstacle or portal systems (F532–F575). Core novel combination is a previously under-used discrete multi-state CA kernel whose macroscopic observables directly control the browser’s CSS Grid layout engine (not canvas particles, not absolute positioning alone, not SVG morph), with evolutionary rule search and sealed genome transfer. Not continuous PDE, not neural weights, not spectral audio, not WebXR.

**Architecture**
- Single index.html (progressive enhancement, offline after load)
- WebGPU compute pipeline for CA step (or Canvas2D fallback simulation)
- CSS Grid container holding 8–12 living cards whose styles (columns, gap, transform, background) bind to CA stats via CSS variables
- Local GA in Worker or main thread: population of rule tables, fitness = entropy + click proximity bonus
- IndexedDB store `f576-ca-grid-mind` for best rules + last grid
- Pointer click: inject high-energy seed at mapped grid cell
- Optional DeviceOrientation: bias injection direction
- Chrome: status, entropy readout, Seal / Reset / Inject buttons

**Expected outcome**
Runnable prototype: the CA evolves visibly (or via stats), the grid of cards continuously reflows, scales, and recolors as a living layout; clicks seed interesting patterns; Seal persists and restores the best evolved rules across reloads. Works offline; graceful Canvas2D fallback.

**Mechanics**
1. Init CA grid (random or seeded), random rule population.
2. Each frame: step CA (GPU or CPU), compute density/entropy/centroids, set CSS vars, update card transforms.
3. Click maps to grid cell and injects state.
4. Periodic or button-triggered GA generation: mutate rules, evaluate fitness, keep elites.
5. Seal: store best rule table + fitness to IndexedDB; optional BroadcastChannel for multi-tab.

**Files**
drafts/F576-webgpu-ca-css-grid-living-layout-mind/SPEC.md
drafts/F576-webgpu-ca-css-grid-living-layout-mind/index.html

**V01D landing**
Discrete CA-driven CSS Grid layout skill under void-live-deploy/skills/webgpu-ca-css-grid-mind.js; test asserts CA density change → CSS grid-template-columns update and IndexedDB seal/restore of rule table.

**Frontier Engine F-576**
Architecture: WebGPU (or Canvas2D) discrete 4-state CA kernel + macroscopic stats → CSS Grid living cards + local GA rule evolution + IndexedDB seal.  
Expected outcome: interactive spatial layout that physically responds to an evolving cellular mind.  
Mechanics: seed injection, entropy-driven reflow, sealed genome persistence.  
Outcome: prototype delivered; ready for ledger-guard append.

**Files**: drafts/F576-webgpu-ca-css-grid-living-layout-mind/SPEC.md

## Frontier Engine F-578 (2026-11-05)

**F578-ambient-sensor-mlp-webgpu-sdf-css-paint-mind**

Entry added by ledger-guard from drafts/F578-ambient-sensor-mlp-webgpu-sdf-css-paint-mind/SPEC.md, after a full-file write dropped it.

PLACEHOLDER_SPEC
**Files**: drafts/F578-ambient-sensor-mlp-webgpu-sdf-css-paint-mind/SPEC.md, drafts/F578-ambient-sensor-mlp-webgpu-sdf-css-paint-mind/index.html

## Frontier Engine F-579 (2026-11-05)

**F579-webxr-hand-cpm-sealed-cell-mind**

Entry added by ledger-guard from drafts/F579-webxr-hand-cpm-sealed-cell-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webxr-hand-cpm-sealed-cell-mind`  
**Date**: 2026-11-05  
**Ledger ID**: F-579

**Concept**
A simplified Cellular Potts Model (CPM) lattice runs on Canvas2D (WebGPU compute optional stub). Multiple competing cell agents each carry a sealed genome of preferred volume, adhesion energy, and motility bias. WebXR hand tracking (or pointer fallback) injects energy pulses and "grasps" boundary sites to force genome transfer between contacting cells. High-fitness cells (volume near target + low energy) spawn living DOM portal cards that display their genome signature and can be dragged to seed new regions. IndexedDB seals the best genome + lattice snapshot. Fully offline single-file.

**Novelty**
Leaves the dominant recent cluster of ambient-sensor / orientation MLP / speech-driven continuous kernels (SDF raymarch, wave equation, NCA/Gray-Scott, CSS-Paint Worklet chrome, CSS-grid living layouts) and prior softbody, residual, attention, particle, spectral systems. Core novel combination is true WebXR hand (or pointer proxy) as causal input to a previously unused Cellular Potts Model kernel (Metropolis energy minimization of multi-cell volume + adhesion, not discrete CA rules, not continuum fluids, not MLP parametrization of fields), with multi-agent sealed genome transfer on physical boundary contact and DOM portal embodiment of winning cells. Not orientation RNN, not k-means particles, not pure NCA.

**Architecture**
- Single index.html (progressive enhancement, offline after load)
- CPM grid: 80×60 sites, cell IDs 1..N, background 0
- Energy: volume penalty + adhesion (different for same/different type)
- Genome per cell: {targetVol, adhesion, motility}
- Update: random site flips accepted by Metropolis with temperature
- Hand/pointer: inject energy (force flip bias) or grasp to copy genome across boundary
- DOM portals: absolute cards at cell centroids for top cells
- IndexedDB store `f579-cpm-cell-mind` for best genome + grid
- WebXR: requestSession with hand-tracking if available; fallback mouse
- Chrome: status, fitness, Seal / Reset / Inject buttons

**Expected outcome**
Runnable prototype: cells grow and compete visibly on canvas; pointer (or XR hand) injects energy or forces genome transfer on grasp; winning cells spawn draggable DOM portals showing genome; Seal restores best across reloads. Works offline; graceful if no WebXR.

**Mechanics**
1. Init N cells with random genomes, seed lattice.
2. Each frame: several Metropolis steps, update volumes, paint canvas, position portals.
3. Pointer/hand: inject or grasp-transfer.
4. Seal: serialize best genome + grid to IndexedDB.
5. Drag portal: optional reseed.

**Files**
drafts/F579-webxr-hand-cpm-sealed-cell-mind/SPEC.md
drafts/F579-webxr-hand-cpm-sealed-cell-mind/index.html

**V01D landing**
WebXR-hand CPM sealed-cell skill under void-live-deploy/skills/hand-cpm-cell-mind.js; test asserts hand/pointer inject changes lattice energy and that sealed genome restores the same cell layout after reload.

**Frontier Engine F-579**
Architecture: WebXR hand (pointer fallback) → simplified CPM Metropolis lattice → multi-cell sealed genome competition + contact transfer → Canvas visualization + DOM portal embodiment + IndexedDB seal.  
Expected outcome: interactive spatial field of competing biological-style cells whose genomes transfer under hand grasp and embody as living portals.  
Mechanics: energy-minimizing cell growth, grasp-gated genome transfer, portal spawning, sealed persistence.  
Outcome: prototype delivered; ready for ledger-guard append.

**Files**: drafts/F579-webxr-hand-cpm-sealed-cell-mind/SPEC.md, drafts/F579-webxr-hand-cpm-sealed-cell-mind/index.html

## Frontier Engine F-579 (2026-11-05)

**F579-attention-flow-glyph-mind**

Entry added by ledger-guard from drafts/F579-attention-flow-glyph-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `attention-flow-glyph-mind`  
**Ledger ID**: F-579 (frontier series)  
**Date**: 2026-11-05

**Concept**
A local pure-JS multi-head attention mechanism processes a short causal history of pointer velocities and DeviceOrientation events. Attention outputs modulate injection and damping parameters of a discrete 2D flow-field kernel (velocity grid with simple advection and diffusion, previously unused as primary substrate). Living DOM glyphs (absolute-positioned spans drawn from a sealed alphabet) are continuously advected, rotated, and styled by sampled local flow (velocity, divergence, curl). User clicks on glyphs supply a reward signal that evolves the attention parameters via a lightweight evolutionary strategy. The sealed genome (attention weights + flow hyperparameters) persists in IndexedDB and can migrate via BroadcastChannel. Fully self-contained, offline after first load. Canvas2D visualizes the flow; WebGPU compute path is sketched as future extension.

**Novelty**
Leaves the dominant recent cluster of wave-equation echoes (F577), ambient-sensor MLP + WebGPU SDF + CSS Paint Worklet (F578), discrete CA / CSS-Grid living layouts (F576), speech-NCA gardens (F575), sealed-genome CSS grids (F574), Q-learning spatial DOM agents (F573), and prior continuous-field / particle / NCA / spectral / softbody / residual systems. Core novel combination is causal multi-head attention (not MLP/RNN/reservoir/k-NN/Q-table) driving a previously unused discrete flow-field kernel, with true living DOM glyphs as the embodied agents that both sample and receive the flow, under evolutionary genome transfer. Not a cellular automaton, not reaction-diffusion, not neural weights on particles, not spectral residuals, not WebXR, not Paint Worklet, not wave equation.

**Architecture**
- Single self-contained `index.html` (no external dependencies).
- Causal history buffer (last 16 samples of pointer Δ + orientation).
- Tiny multi-head attention (4 heads, pure JS matrix ops) produces modulation scalars.
- Flow kernel: 32×32 velocity grid, simple semi-Lagrangian advection + diffusion + source injection biased by attention.
- 12 living glyphs (DOM elements) positioned via transform, content from sealed alphabet ["V","E","R","S","E","M","I","N","D","A","T","O"], style driven by local flow stats.
- Evolutionary update: on glyph click, mutate top-k attention weights toward higher local curl/engagement fitness.
- Seal button serializes genome to IndexedDB; BroadcastChannel for peer transfer (optional).
- Fallback: if WebGPU unavailable, pure Canvas2D + DOM (current implementation).

**Expected outcome**
Interactive spatial canvas where the page’s own typography becomes a living flow-following organism controlled by a local attention mind that adapts to how the user moves the pointer and orients the device. Glyphs cluster, stretch, and rotate in response to the evolving flow. Clicking rewards and steers the mind. Demonstrates a previously unbuilt hybrid of causal attention, discrete flow kernel, and DOM-glyph embodiment.

**Mechanics**
1. Load: initialize random attention weights, flow grid, place glyphs.
2. Pointer/orientation → history → attention → flow sources.
3. Flow step → sample velocities at glyph positions → update transforms/styles.
4. Click glyph → reward → evolutionary mutate.
5. Seal: store genome. Optional BroadcastChannel receive replaces if higher fitness.
6. Reset clears history and reseeds.

**Files**
drafts/F579-attention-flow-glyph-mind/SPEC.md  
drafts/F579-attention-flow-glyph-mind/index.html

**Failure modes**
- DeviceOrientation permission denied → falls back to pointer-only.
- High glyph count causes reflow cost → capped at 12, requestAnimationFrame throttled.
- Attention numerical instability → weights clipped and renormalized each step.
- IndexedDB quota → seal fails silently with console note; in-memory continues.

**Next frontier building blocks**
Sealed attention genomes + flow kernels that can be composed with future WebGPU compute shaders or WebXR-placed glyph clusters.

**Files**: drafts/F579-attention-flow-glyph-mind/SPEC.md, drafts/F579-attention-flow-glyph-mind/index.html

## Frontier Engine F-580 (2026-11-05)

**F580-webxr-hand-reservoir-vicsek-flock-mind**

Entry added by ledger-guard from drafts/F580-webxr-hand-reservoir-vicsek-flock-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webxr-hand-reservoir-vicsek-flock-mind`  
**Ledger ID**: F-580 (frontier series)  
**Date**: 2026-11-05

**Concept**
True WebXR hand tracking (pinch + index tip) and gaze (viewer pose) as causal inputs to a local Echo State Network (fixed random reservoir, only readout trained online). Reservoir outputs modulate Vicsek flocking parameters (alignment strength, noise, speed) for a previously unused collective-motion kernel. Agents are living DOM “thought-birds” (absolute spans) advected by the Vicsek update; hand pinch grabs and repositions them. Sealed genome (readout weights + Vicsek hyperparams) persists in IndexedDB and migrates via BroadcastChannel under fitness competition. Fully offline single-file prototype with Canvas2D visualization of velocity field.

**Novelty**
Leaves the dominant recent cluster of ambient-sensor / orientation MLP/RNN/attention driving wave-equation, flow-field, NCA, SDF+CSS-Paint, SVG ribbons, CSS-Grid Q-learning, and speech-seeded gardens (F572–F579). Core novel combination is WebXR hand/gaze → Echo State reservoir (not MLP/RNN/attention/Q) → Vicsek alignment kernel (never used in any prior F- draft) → living DOM bird-glyphs under sealed multi-tab genome transfer. Not continuous RD/NCA, not particle SPH/DEM, not spectral residuals, not Paint Worklet, not pure CSS Grid, not wave equation.

**Architecture**
- Single `index.html`.
- WebXR: requestSession('immersive-vr', {optionalFeatures:['hand-tracking']}); fallback pointer + DeviceOrientation.
- Reservoir: 24-node Echo State (fixed sparse random W_res, spectral radius ~0.9), input projection from hand pinch distance + gaze angles + pointer Δ; only readout matrix updated on reward.
- Vicsek: 48 agents, local alignment within radius, noise scaled by reservoir output, Canvas2D velocity arrows + DOM birds.
- DOM birds: absolute-positioned spans with glyph + rotation from heading; pinch/pointer drag repositions and injects reward.
- Seal: IndexedDB store `verse-f580`; BroadcastChannel `f580-genome` for peer transfer (higher fitness adopts).
- Offline-capable after load; progressive enhancement.

**Expected outcome**
Enter WebXR (or use pointer): hand pinch or click grabs birds; tilting/gazing steers alignment via reservoir; flock self-organizes into coherent streams; click rewards tighten alignment; multi-tab genomes migrate. Seal restores personality. Interactive spatial embodiment of collective motion under local reservoir mind.

**Mechanics**
1. Init random reservoir + readout, place agents.
2. Each frame: sample hand/gaze/pointer → reservoir update → Vicsek params → agent step (alignment + noise + bounds).
3. Update DOM birds transforms; draw velocity field on canvas.
4. Pinch/click on bird: reward (coherence bonus), update readout (simple delta rule).
5. Every 10s: compute fitness (mean alignment), seal, broadcast.
6. On receive: if higher fitness, adopt + mutate slightly.

**Failure modes**
- No WebXR/hand-tracking: full pointer + orientation fallback.
- Reservoir collapse: spectral radius clamped, leak rate 0.3.
- High agent count: capped, rAF throttled.
- BroadcastChannel restricted: local only.
- IndexedDB blocked: session memory.

**Files**
drafts/F580-webxr-hand-reservoir-vicsek-flock-mind/SPEC.md  
drafts/F580-webxr-hand-reservoir-vicsek-flock-mind/index.html

**V01D landing**
Skill under `void-live-deploy/skills/webxr-reservoir-vicsek/`; test that hand/pointer input changes Vicsek noise and that sealed readout restores flock coherence after reload.

Void is now Verse everywhere.

**Files**: drafts/F580-webxr-hand-reservoir-vicsek-flock-mind/SPEC.md, drafts/F580-webxr-hand-reservoir-vicsek-flock-mind/index.html

## Frontier Engine F-581 (2026-11-05)

**F581-webgpu-lbm-attention-portal-mind**

Entry added by ledger-guard from drafts/F581-webgpu-lbm-attention-portal-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-lbm-attention-portal-mind`  
**Ledger ID**: F-581 (frontier series)  
**Date**: 2026-11-05

**Concept**
A discrete Lattice Boltzmann Method (LBM) fluid kernel running primarily on WebGPU compute (with Canvas2D fallback) models a 2D "thought fluid" of density and velocity. A pure-JS causal multi-head attention mechanism consumes a short history of pointer trajectories and sampled fluid moments (density, vorticity at cursor). Attention outputs continuously modulate LBM force sources, relaxation time, and boundary injection. High-vorticity loci spawn living DOM portals (absolute-positioned divs) whose visual style (gradient, scale, opacity) is driven by local fluid statistics. User clicks on portals supply reward that evolves the attention parameters via a lightweight evolutionary strategy. The sealed genome persists in IndexedDB and migrates via BroadcastChannel under fitness competition. Fully self-contained single-file offline prototype.

**Novelty**
Leaves the dominant recent cluster of WebXR hand/gaze reservoirs driving Vicsek flocks (F580), multi-head attention on flow-field kernels with living glyphs (F579), ambient-sensor MLPs with WebGPU SDFs + CSS Paint Worklets (F578), wave-equation echoes, discrete CA/CSS-Grid layouts, speech-NCA gardens, sealed-genome grids, Q-learning spatial agents, continuous RD/NCA, particle SPH/DEM, spectral residuals, and pure CSS Grid systems (F572–F579). Core novel combination is WebGPU Lattice Boltzmann fluid (never used as substrate in any prior F- draft) modulated by causal multi-head attention (not reservoir/MLP/Q-table) that births and styles living DOM portals at vorticity peaks under evolutionary genome transfer. Not Vicsek, not simple advection-diffusion, not reaction-diffusion, not particle systems, not WebXR primary, not Paint Worklet primary.

**Architecture**
- Single self-contained `index.html` (no external dependencies).
- WebGPU device + compute pipeline for LBM collide-stream steps on a 64×64 lattice (density + 9 discrete velocities); Canvas2D visualization of density/vorticity field. Progressive fallback to pure Canvas2D LBM-like update if WebGPU unavailable.
- Causal history buffer (last 12 samples of pointer Δ + fluid samples).
- Tiny multi-head attention (3 heads, pure JS) produces modulation scalars for force magnitude, tau (relaxation), and source strength.
- 8 living portals (DOM divs) spawned/updated at top vorticity sites; style driven by local density and curl.
- Evolutionary update: on portal click, mutate top-k attention weights toward higher vorticity-engagement fitness.
- Seal button serializes genome (attention weights + LBM hyperparameters) to IndexedDB store `verse-f581`; BroadcastChannel `f581-genome` for peer transfer (higher fitness adopts).
- Offline-capable after load; progressive enhancement.

**Expected outcome**
Pointer motion injects forces and attention steers the fluid; vortical structures emerge and birth floating portals whose appearance reflects local flow; clicking portals rewards and evolves the mind; multi-tab genomes migrate. Seal restores personality. Interactive spatial embodiment of a local attention-modulated lattice-Boltzmann thought fluid with living portal agents.

**Mechanics**
1. Init random attention weights + LBM lattice (equilibrium density).
2. Each frame: sample pointer + fluid moments → attention update → modulate LBM parameters → collide-stream step → compute vorticity.
3. Update portal positions/styles at high-curl sites; draw density field.
4. Click portal: reward (vorticity × engagement), evolve attention (simple mutation toward fitness).
5. Every 8s: compute fitness (mean vorticity + portal stability), seal, broadcast.
6. On receive: if higher fitness, adopt + slight mutation.

**Failure modes**
- No WebGPU: full Canvas2D LBM-like fallback (still interactive).
- Attention collapse: weights clamped, learning rate low.
- High lattice cost: resolution capped, rAF throttled.
- BroadcastChannel restricted: local only.
- IndexedDB blocked: session memory only.

**Files**
drafts/F581-webgpu-lbm-attention-portal-mind/SPEC.md  
drafts/F581-webgpu-lbm-attention-portal-mind/index.html

**V01D landing**
Skill under `void-live-deploy/skills/webgpu-lbm-attention-portals/`; test that pointer input changes fluid forces via attention and that sealed genome restores portal behavior after reload.

Void is now Verse everywhere.

**Files**: drafts/F581-webgpu-lbm-attention-portal-mind/SPEC.md, drafts/F581-webgpu-lbm-attention-portal-mind/index.html

## Frontier Engine F-582 (2026-11-05)

**F582-webgpu-spectral-voice-sdf-mind**

Entry added by ledger-guard from drafts/F582-webgpu-spectral-voice-sdf-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-spectral-voice-sdf-mind`  
**Ledger ID**: F-582 (frontier series)  
**Date**: 2026-11-05

**Concept**
Microphone frequency spectrum (AnalyserNode bin magnitudes) supplies continuous harmonic coefficients to a pure-JS evolutionary strategy that tunes the parameters of a WebGPU raymarched SDF surface. The surface is a sum of modulated primitives (spheres, capsules, and low-frequency noise) whose radii, positions, and frequencies are genome-controlled. Spectral centroid and peak bins act as fitness signals: the ES mutates toward higher "vocal resonance" (proxy match between spectrum energy distribution and surface projected curvature). DeviceOrientation tilts the raymarch view. High-resonance loci spawn floating DOM portals styled by harmonic strength. Sealed genome (SDF params + ES population) persists in IndexedDB. Canvas2D fallback projects a 2D slice. Fully self-contained, offline after first load.

**Novelty**
Leaves the dominant recent cluster of WebGPU LBM attention portals (F581), Vicsek/WebXR flocks, multi-head attention flow, ambient MLPs + SDFs + Paint Worklets (F578), wave-equation echoes, CA/CSS-Grid, speech-NCA gardens, sealed-genome grids, Q-learning spatial agents, continuous RD/NCA, particle SPH/DEM, and pure lattice systems. Core novel combination is spectral audio (AnalyserNode) as the sole external driver of an evolutionary strategy that sculpts a WebGPU raymarched SDF mind-surface, with resonance fitness sealing living harmonic portals. Not fluid lattices, not particle systems, not NCA, not attention primary, not hand tracking, not orientation MLP primary.

**Architecture**
- Single self-contained `index.html` (no external dependencies).
- Web Audio AnalyserNode for live spectrum (getFloatFrequencyData); fallback slider for simulated spectrum.
- Pure-JS evolutionary strategy (population of 16 genomes) updating SDF parameters each frame.
- WebGPU fragment shader raymarches the SDF (progressive: if no WebGPU, Canvas2D draws a 2D spectral slice + portal positions).
- 6 living DOM portals positioned at high-resonance sites; style (scale, hue, opacity) driven by bin energy.
- Seal button serializes top genome + recent spectrum hash to IndexedDB `verse-f582`.
- Controls: start mic, seal, restore, clear, spectrum override.
- Offline-capable after load; progressive enhancement.

**Expected outcome**
Speak or hum and watch the SDF surface morph to embody the voice harmonics; portals bloom at resonant peaks; tilt the device to change the view angle. Seal restores the vocal mind. Interactive spatial embodiment of a local evolutionary spectral-SDF thought surface with living harmonic portals.

**Mechanics**
1. Init random SDF genomes (radii, offsets, freq multipliers).
2. Each frame: sample spectrum → compute centroid/peaks → ES step (mutate/select on resonance fitness) → update uniforms.
3. Raymarch or 2D project the surface; place portals at top spectral-energy projected sites.
4. Resonance fitness = correlation between spectrum bins and local curvature proxy.
5. On seal: store genome + fitness; restore loads and injects.

**Failure modes**
- No mic permission: spectrum slider + random walk.
- No WebGPU: Canvas2D 2D spectral projection still interactive.
- High cost: raymarch steps capped, population small.
- IndexedDB blocked: session only.

**Files**
drafts/F582-webgpu-spectral-voice-sdf-mind/SPEC.md  
drafts/F582-webgpu-spectral-voice-sdf-mind/index.html

**V01D landing**
Skill under `void-live-deploy/skills/webgpu-spectral-voice-sdf/`; test that spectrum change alters SDF uniforms via ES and sealed genome restores surface after reload.

Void is now Verse everywhere.

**Files**: drafts/F582-webgpu-spectral-voice-sdf-mind/SPEC.md, drafts/F582-webgpu-spectral-voice-sdf-mind/index.html

## Frontier Engine F-583 (2026-11-05)

**F583-broadcast-indexeddb-pheromone-webgpu-diffusion-mind**

Entry added by ledger-guard from drafts/F583-broadcast-indexeddb-pheromone-webgpu-diffusion-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Multi-agent stigmergic competition on a shared pheromone field. Local agents (simple rule-based depositors with sealed parameter genomes) respond to pointer and DeviceMotion inputs, depositing "pheromone" into a spatial field. The field is diffused and decayed via a WebGPU compute shader (or JS fallback). Field state and agent genomes are persisted in IndexedDB as sealed snapshots (with simple integrity hash). Cross-tab multi-agent competition is enabled via BroadcastChannel for delta sync of field and genome transfer. The living field drives a spatial grid of Verse DOM cards whose scale, hue, and opacity respond to local intensity — a hybrid embodiment where computational agents control physical UI layout memory across sessions.

**Branch**
Deliberately leaves the recent cluster of WebGPU spectral/LBM/SDF volumetric sims, WebXR hand/reservoir/CPM, orientation/ambient MLP/RNN, attention glyphs, and pure NCA/CA layouts. Combines under-explored axes: persistent IndexedDB + BroadcastChannel shared fields in a new stigmergic architecture, multi-agent competition with sealed genome transfer, WebGPU for a diffusion kernel in this novel combo, DeviceMotion as causal input, local agents controlling physical DOM elements.

**Prior cross-reference**
No superficial match to F582 (spectral voice SDF), F581 (LBM attention portal), F580 (WebXR hand reservoir Vicsek), F579s, F578 (ambient MLP SDF paint), F577/F576 (orientation MLP/RNN). Diffusion exists in early reaction-diffusion and embedding cascade, but not this multi-agent pheromone + sealed IDB/Broadcast + DOM hybrid.

**Implementation notes**
- Single-file index.html, offline-capable (IDB, no network required for core).
- WebGPU compute for diffusion when available; canvas 2D fallback.
- Agents: 8 local agents with genomes {strength, decayBias, mobility}.
- Sealed: JSON.stringify(genome) + simple hash stored in IDB under "verse-pheromone-genomes".
- BroadcastChannel "verse-pheromone" for field deltas and genome offers.
- Interactive: pointer deposits, shake (DeviceMotion) boosts, buttons to spawn/evolve/seal/reset.
- Failure modes: WebGPU unavailable → JS; IDB quota → in-memory; Broadcast unsupported → local only.

**Building blocks for next**
Shared sealed field + genome transfer primitives, WebGPU diffusion kernel reusable, DOM-as-sensor/actuator hybrid.

**Files**: drafts/F583-broadcast-indexeddb-pheromone-webgpu-diffusion-mind/SPEC.md, drafts/F583-broadcast-indexeddb-pheromone-webgpu-diffusion-mind/index.html

## Frontier Engine F-584 (2026-11-05)

**F584-webgpu-voice-driven-nca-ui-sculptor**

Entry added by ledger-guard from drafts/F584-webgpu-voice-driven-nca-ui-sculptor/SPEC.md, after a full-file write dropped it.


**Concept**
A WebGPU compute Neural Cellular Automaton (NCA) runs as a continuous “thought field.” Microphone amplitude (or a simulated voice energy slider) injects local energy into the field. A pure-JS local agent (tiny 3-layer MLP) samples the field at a set of portal anchors, predicts a comfort residual, and emits soft repulsive forces that are written back into the NCA. The same field samples drive absolute-positioned Verse portal cards: their CSS `transform`, `border-radius`, `filter: blur`, and opacity morph every frame according to local NCA state. High-energy regions expand and round the portals; low-energy regions shrink and sharpen them. Pointer drag injects a directional bias. Full ensemble state (NCA grid snapshot, MLP weights, portal poses, energy history hash) seals to IndexedDB for offline restore. Fully self-contained, offline after first load.

Novel combination: WebGPU NCA compute + mic-driven energy injection + local MLP force feedback + live CSS morph of DOM portals. Not a particle swarm, not reaction-diffusion, not pure lattice attention.

**Architecture**
- Single HTML file, no external deps.
- WebGPU compute pipeline (workgroup 8×8) updates a 128×128 float texture (R32Float) with a fixed 3×3 convolutional NCA rule whose weights are lightly perturbed by the MLP residual.
- Staging buffer + mapAsync readback every 4 frames for CPU sampling.
- Fallback Canvas2D diffusion if WebGPU unavailable.
- getUserMedia audio context for RMS energy; permission-gated; slider fallback.
- 5 absolute-positioned portal cards whose style is driven by bilinear sample of the field.
- MLP (3→8→2) pure JS, trained online with a simple residual rule (no external lib).
- IndexedDB persist on visibilitychange / beforeunload.

**Expected outcome**
User speaks or moves the energy slider → NCA blooms in response → portals physically expand, round, and drift away from high-energy peaks → MLP gradually dampens extreme morphs so the layout remains usable. Dragging a portal injects a trail into the field. Reload restores last sealed state. Works offline.

**Mechanics**
1. Init WebGPU device, compute shader with NCA update, render pass that draws the field as background.
2. AudioAnalyserNode or slider supplies energy → scatter into NCA grid.
3. Every frame: compute NCA, readback small samples, update portal transforms, MLP step, write forces back.
4. Pointer events on portals inject velocity bias.
5. Seal button or auto-seal writes state.

**Failure modes**
- WebGPU unavailable → Canvas2D fallback, reduced resolution.
- Mic permission denied → energy slider.
- High readback cost → sample only 16 points, throttle to 15 Hz.
- MLP divergence → clamp residual, reset weights on button.
- IndexedDB quota → drop history, keep latest snapshot.

**Building blocks unlocked for next**
- Shared NCA field + DOM morph coupling
- Online MLP force feedback into compute shader
- Mic-to-field injection path

**Files**: drafts/F584-webgpu-voice-driven-nca-ui-sculptor/SPEC.md, drafts/F584-webgpu-voice-driven-nca-ui-sculptor/index.html

## Frontier Engine F-585 (2026-11-05)

**F585-webrtc-evo-mlp-forcegraph-mind**

Entry added by ledger-guard from drafts/F585-webrtc-evo-mlp-forcegraph-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Multiple local agents, each a tiny pure-JS 2-layer MLP, compete to control a spatial force-directed graph of Verse thought-nodes (absolute-positioned DOM cards). Each agent’s genome (MLP weights) is sealed with a simple hash and stored in IndexedDB. Agents deposit “influence” forces based on their MLP output given local node features + DeviceOrientation as a global environmental bias (tilt = gravity vector). Fitness is measured by spatial clustering quality and edge coherence. When a peer connects via WebRTC data channel, higher-fitness sealed genomes are transferred and adopted (with light mutation). Pointer drag repositions nodes and injects local reward. Fully self-contained single-file HTML, offline-capable; WebRTC is optional progressive enhancement with manual SDP signaling for true p2p.

Novel combination: WebRTC data-channel sealed genome transfer (not BroadcastChannel) in a competitive evolutionary MLP setting + DeviceOrientation as causal gravity input to never-before force-directed living DOM graph embodiment. Branches away from the recent WebGPU/NCA/spectral/reservoir/hand/SDF/DOM-morph cluster.

**Architecture**
- Single index.html, no external dependencies.
- 6–8 living DOM nodes (divs) with labels, force-directed layout updated each frame (attraction to preferred neighbors, repulsion, orientation gravity).
- 4 competing agents: each owns a subset of nodes or influences globally; MLP (4→6→2) maps [local density, orientation x/y, node id bias] → force delta.
- Online weight update on fitness residual (simple delta rule).
- IndexedDB store “verse-f585” for sealed genomes + layout snapshot.
- WebRTC: RTCPeerConnection + data channel “genome”; manual offer/answer textarea for signaling (no server).
- Canvas overlay for edges and force vectors.
- Fallback: no WebRTC → local multi-agent only; no orientation → pointer tilt simulation.

**Expected outcome**
Tilt device or drag nodes → agents push/pull the graph into coherent clusters; higher-fitness agent’s genome can be sent to a peer tab/device via WebRTC and adopted, visibly changing layout dynamics. Seal button persists; reload restores. Interactive spatial embodiment of competitive local minds.

**Mechanics**
1. Init nodes in random positions, random MLP genomes.
2. rAF loop: sample orientation → update each agent MLP → compute forces → integrate positions → draw edges.
3. Pointer drag on node: temporary pin + reward to nearest agent.
4. Every 5s compute fitness (mean inverse distance to cluster centers), seal best, offer via data channel if connected.
5. On receive genome: if higher fitness hash, adopt + mutate 5%.

**Failure modes**
- No DeviceOrientation: simulate with mouse position as tilt.
- WebRTC unsupported or blocked: local agents only; signaling UI disabled.
- IndexedDB quota/blocked: in-memory genomes.
- Too many nodes: cap at 8, simple O(n²) forces.
- SDP copy-paste friction: clear instructions + local demo mode.

**Building blocks unlocked for next**
- WebRTC data-channel sealed genome primitive
- Competitive local MLP force controllers for DOM spatial graphs
- Orientation-as-gravity hybrid embodiment

Void is now Verse everywhere.

**Files**: drafts/F585-webrtc-evo-mlp-forcegraph-mind/SPEC.md, drafts/F585-webrtc-evo-mlp-forcegraph-mind/index.html

## Frontier Engine F-586 (2026-11-05)

**F586-intersection-sealed-dom-swarm-mind**

Entry added by ledger-guard from drafts/F586-intersection-sealed-dom-swarm-mind/SPEC.md, after a full-file write dropped it.


**Concept**
Pure-DOM multi-agent swarm of living cards. Each agent is an absolute-positioned HTML element whose visual style and motion parameters are governed by a sealed genome. A tiny local model (feed-forward MLP, pure JS) maps a short causal history of DeviceOrientation (or pointer-tilt fallback) plus local density into velocity deltas. Fitness is measured by the Intersection Observer API (visible ratio × time-in-view × scale). When two agents overlap, the higher-fitness agent may transfer a mutated copy of its genome to the lower one (sealed contact transfer). IndexedDB persists the best swarm snapshot. No canvas simulation kernel, no WebGPU, no spectral, no continuous field. Offline single-file.

**Novelty**
Leaves the dominant recent cluster of WebGPU continuous volumetric/field kernels (SDF raymarch, LBM fluid, NCA, pheromone diffusion, spectral voice, Lenia, Ising, softbody, attention lattices on grids) and WebXR hand/CPM/reservoir systems. Core novel combination is IntersectionObserver as the fitness sensor for multi-agent competition, sealed genome transfer on physical DOM overlap, DeviceOrientation as causal input to a local MLP that directly controls living DOM element physics (hybrid embodiment), and persistent IndexedDB shared field. Not substrate simulations, not BroadcastChannel/WebRTC primary transfer, not residual predictors, not pure NCA.

**Architecture**
- Single index.html, no external dependencies, offline after load.
- 7 living DOM agents (div.agent) with genome-driven hue, scale, border, and label.
- Tiny MLP (3→4→2) per agent: inputs [tiltX, tiltY, localDensity] → [vx, vy].
- rAF loop: sample orientation → update MLPs → integrate positions (with soft walls and simple repulsion) → check overlaps for genome transfer → update styles.
- IntersectionObserver on each agent tracks intersectionRatio; fitness = EMA of ratio × scale.
- Drag any agent with pointer to pin temporarily and boost its fitness.
- Seal button writes genomes + positions + MLP weights to IndexedDB ("verse-f586").
- Reload restores sealed swarm.

**Expected outcome**
Tilt the device (or move mouse in fallback) and the cards drift under local policy control. Overlapping cards exchange genomes when one is more "seen"; the swarm visually evolves. Seal persists the state across reloads. Interactive spatial embodiment of competitive local minds using only DOM + Observer + Orientation.

**Mechanics**
1. Initialize random genomes and positions.
2. IntersectionObserver continuously updates visibility fitness.
3. Each frame apply MLP-driven velocity + orientation wind + repulsion.
4. On overlap, if fitness difference > threshold, transfer genome (10% mutation).
5. Pointer drag pins agent and gives temporary fitness boost.
6. Seal / load via IndexedDB.

**Failure modes**
- No DeviceOrientation: mouse-position tilt simulation.
- IntersectionObserver unsupported: fall back to viewport-center proximity as fitness.
- IndexedDB blocked: session-only memory.
- Too many agents: hard cap at 8, simple O(n²) overlap.
- MLP collapse: weights clamped, small mutation on transfer.

**Building blocks unlocked for next**
- IntersectionObserver-as-fitness primitive for DOM agents
- Overlap-gated sealed genome transfer without network
- Orientation-MLP direct control of pure-DOM spatial physics

Void is now Verse everywhere.

**Files**: drafts/F586-intersection-sealed-dom-swarm-mind/SPEC.md, drafts/F586-intersection-sealed-dom-swarm-mind/index.html

**Files**: drafts/F586-intersection-sealed-dom-swarm-mind/SPEC.md, drafts/F586-intersection-sealed-dom-swarm-mind/index.html

## Frontier Engine F-587 (2026-11-05)

**F587-spatial-audio-genome-dom-mind**

Entry added by ledger-guard from drafts/F587-spatial-audio-genome-dom-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-587 (frontier series)

**Concept**  
Spatial audio as the primary living substrate for a local evolutionary mind. Agents are independent Web Audio PannerNode + OscillatorNode pairs whose genomes (frequency, waveform, 3D position, gain) evolve under fitness derived from proximity to a user-controlled listener. Pointer and DeviceOrientation move the AudioListener in 3D space. Projected 2D positions of the sonic agents drive living DOM cards that morph in style and layout. Sealed genome snapshots persist in IndexedDB. No continuous field simulation, no WebGPU compute kernel, no pure visual NCA/swarm; the mind thinks in spatialized sound and embodies in the DOM.

**Architecture**  
- Single self-contained index.html, offline after load, no external deps.  
- 6 sonic agents, each with OscillatorNode (sine/square/saw/triangle) → GainNode → PannerNode (HRTF).  
- AudioListener position controlled by pointer (x/y mapped to 3D) or DeviceOrientation (tilt as listener motion).  
- Local evolutionary step every ~30 frames: fitness = inverse distance to listener + spectral energy contribution; mutate/select genomes.  
- DOM cards (one per agent) positioned via absolute CSS from projected 3D→2D, styles driven by genome (hue from freq, scale from gain, border from waveform).  
- Seal button serializes all genomes + listener pos to IndexedDB key `verse-f587`.  
- Restore loads and restarts oscillators with sealed params.  
- Fallback: no Web Audio → visual-only position simulation; no orientation → mouse only.

**Expected outcome**  
Move the pointer (or tilt the device) and hear the swarm of tones orbit and approach the listener; cards on screen physically follow the sound sources and change appearance as genomes evolve. Seal and reload restores the exact sonic mind. Interactive spatial embodiment of a local evolutionary audio genome swarm that thinks through 3D sound and lives in the DOM.

**Mechanics**  
1. Resume AudioContext on first gesture.  
2. Create agents with random genomes; start oscillators.  
3. Each frame update listener from input; update panner positions; project to DOM.  
4. Periodically compute fitness, apply mutation/selection to genomes, update nodes.  
5. Seal/restore via IndexedDB.  

**Failure modes**  
- AudioContext suspended: require user gesture; visual fallback still runs.  
- No DeviceOrientation: pointer-only listener.  
- IndexedDB blocked: session memory only.  
- Autoplay policy: oscillators start only after gesture.  

**Building blocks unlocked for next**  
- Spatial audio PannerNode + genome as primary local AI substrate  
- 3D→2D projection for hybrid sonic-DOM embodiment  
- Listener-as-fitness attractor for evolutionary spatial minds  

**Files**  
drafts/F587-spatial-audio-genome-dom-mind/SPEC.md  
drafts/F587-spatial-audio-genome-dom-mind/index.html  

Void is now Verse everywhere.

**Files**: drafts/F587-spatial-audio-genome-dom-mind/SPEC.md, drafts/F587-spatial-audio-genome-dom-mind/index.html

## Frontier Engine F-588 (2026-11-05)

**F588-webgpu-reservoir-dom-graph-diffusion-mind**

Entry added by ledger-guard from drafts/F588-webgpu-reservoir-dom-graph-diffusion-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-588 (frontier series)

**Concept**
A local echo-state reservoir network (previously under-used as the primary mind model) receives DeviceOrientation + pointer as causal input and outputs target attractors for a living graph of absolute-positioned DOM nodes. Values on the nodes diffuse across proximity edges (simple graph diffusion kernel). Fitness is value-coherence. Higher-fitness sealed genomes transfer over BroadcastChannel; state persists in IndexedDB. Canvas draws the dynamic edges. Fully self-contained, offline after load. WebGPU path is noted as next (current CPU diffusion is the working kernel).

**Novelty**
Leaves the dominant recent cluster of spatial-audio genome swarms (F587), IntersectionObserver fitness DOM (F586), WebRTC force-graph MLPs (F585), sandpile SOC, voice-driven NCA, LBM attention portals, spectral SDF, Vicsek flocks, and continuum/particle WebGPU kernels. Core novel combination is reservoir computing (echo-state, not MLP/RNN/Q-table) driving a previously unused discrete graph-diffusion substrate whose nodes *are* the living DOM elements, with orientation as causal input and sealed genome transfer on a shared BroadcastChannel field. Not continuum fields, not particle physics, not audio primary, not WebXR, not softbody, not NCA.

**Architecture**
- Single index.html.
- 8 living DOM nodes whose positions and styles are driven by reservoir outputs.
- Reservoir size 32; random sparse-like weights; tanh activation.
- Graph diffusion: neighbors within 180px average values.
- IndexedDB key "verse-f588".
- BroadcastChannel "f588-genome" for peer adoption of higher fitness.
- Pointer drag repositions nodes.
- Fallback: no orientation → pointer tilt; no IDB → memory; no BC → local only.

**Expected outcome**
Tilt or move pointer: nodes drift toward coherent color/value clusters; edges form and values equalize; genomes mutate and can transfer across tabs. Seal restores the mind. Interactive hybrid embodiment of a reservoir mind on a living DOM graph.

**Mechanics**
1. Init random reservoir weights and node positions.
2. rAF: step reservoir on orientation/pointer → apply outputs as soft attractors → diffuse values on proximity graph → update styles → draw edges.
3. Periodic light mutation; post genome if connected.
4. Seal/restore via IndexedDB.

**Failure modes**
- No DeviceOrientation: pointer simulation.
- IndexedDB blocked: session memory.
- BroadcastChannel unavailable: local evolution only.
- Performance: O(N²) fine for N=8.

**Building blocks unlocked for next**
- Echo-state reservoir as primary local controller for DOM graph
- Discrete proximity-graph diffusion kernel
- Orientation-causal input to non-feedforward local models on living UI elements

Void is now Verse everywhere.

**Files**: drafts/F588-webgpu-reservoir-dom-graph-diffusion-mind/SPEC.md, drafts/F588-webgpu-reservoir-dom-graph-diffusion-mind/index.html

**Files**: drafts/F588-webgpu-reservoir-dom-graph-diffusion-mind/SPEC.md, drafts/F588-webgpu-reservoir-dom-graph-diffusion-mind/index.html

## Frontier Engine F-589 (2026-11-05)

**F589-webgpu-attention-token-spatial-mind**

Entry added by ledger-guard from drafts/F589-webgpu-attention-token-spatial-mind/SPEC.md, after a full-file write dropped it.


**Ledger ID**: F-589 (frontier series)

**Concept**
A pure-JS local multi-head-style attention mind (not MLP, reservoir, NCA, or evolutionary genome as primary) attends over a field of WebGPU-computed particles. User pointer and optional DeviceOrientation define the query focus. Attention scores externalize as living DOM "thought tokens" (absolute-positioned cards) whose positions, scales, hues, and content are driven by the attended particles. High-attention particles spawn or amplify tokens; low-attention ones fade them. Tokens can be clicked to inject a boost back into the attention matrix. Simple Web Audio oscillators are modulated by attention energy. Full state (particle positions, attention weights, token genomes) seals to IndexedDB. Fully self-contained, offline after load. WebGPU compute for particle update if available; Canvas2D fallback.

**Novelty**
Leaves the dominant recent cluster of reservoirs+DOM graphs (F588), spatial-audio genomes (F587), IntersectionObserver fitness, WebRTC force-graph MLPs, sandpile SOC, voice-driven NCA UI sculptors, LBM attention portals, spectral SDF, Vicsek flocks, and continuum/particle WebGPU kernels. Core novel combination is pure local attention (query-key-value over particle features) as the mind model driving both a WebGPU particle substrate and the physical creation/morph of DOM thought-tokens, with click-to-boost reverse attention and optional orientation as query tilt. Not continuum fields, not particle physics primary, not audio primary, not WebXR, not softbody, not NCA, not evo-genome primary.

**Architecture**
- Single index.html.
- 16 particles with positions, velocities, features (energy, hue).
- Local attention: query from pointer/orientation, keys/values from particles; softmax scores.
- 5-8 DOM tokens whose transforms and styles are soft-attracted by top-attended particles.
- Click token → boost its linked particle's value in attention.
- Web Audio: 2-3 oscillators whose frequencies track attention peaks.
- IndexedDB key "verse-f589".
- Fallback: no WebGPU → Canvas2D particles; no orientation → pointer only; no audio → silent.

**Expected outcome**
Move pointer or tilt: attention focus sweeps the particle field; DOM tokens drift, resize, and recolor toward high-attention regions; tones shift with focus energy. Click a token to lock attention on it. Seal and reload restores the mind. Interactive hybrid embodiment of a local attention mind on particles and living DOM tokens.

**Mechanics**
1. Init particles and tokens.
2. rAF: update particles (WebGPU or CPU), compute attention from focus, apply scores to token styles/positions, modulate audio.
3. Click handlers inject boosts.
4. Seal/restore via IndexedDB.

**Failure modes**
- No WebGPU: Canvas2D particle sim.
- No DeviceOrientation: pointer-only query.
- IndexedDB blocked: session memory.
- AudioContext suspended: require gesture; visual still runs.
- Performance: attention O(N) fine for N=16.

**Building blocks unlocked for next**
- Pure local attention (QKV) as primary mind controller
- Attention-driven spawning/morph of DOM tokens from particle field
- Click-to-boost reverse attention path
- WebGPU particle substrate coupled to attention scores

Void is now Verse everywhere.

**Files**: drafts/F589-webgpu-attention-token-spatial-mind/SPEC.md, drafts/F589-webgpu-attention-token-spatial-mind/index.html

**Files**: drafts/F589-webgpu-attention-token-spatial-mind/SPEC.md, drafts/F589-webgpu-attention-token-spatial-mind/index.html

## Frontier Engine F-590 (2026-11-05)

**F590-orientation-evo-cssgrid-agents-mind**

Entry added by ledger-guard from drafts/F590-orientation-evo-cssgrid-agents-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `orientation-evo-cssgrid-agents-mind`  
**Ledger ID**: F-590 (frontier series)  
**Date**: 2026-11-05

**Concept**
DeviceOrientation (or pointer-velocity proxy) is the sole causal input to a pure local evolutionary strategy (not MLP, RNN, reservoir, attention, Q-table, or k-NN). A population of tiny parameter genomes controls the living layout of CSS Grid agents (absolute-positioned capability cards whose grid-column, grid-row, order, flex-grow, scale, and hue are driven by genome values). Agents compete by coverage and user-click rewards measured via bounding-box overlap and IntersectionObserver-style sampling. Higher-fitness genomes seal (hashed) and transfer via BroadcastChannel + IndexedDB. Orientation tilt biases mutation direction and fitness landscape. Fully pure-JS/CSS, no WebGPU, no particle/fluid/CA kernels, offline single-file.

**Novelty**
Leaves the dominant recent cluster of WebGPU continuum/particle/kernel simulations (LBM attention portals F581, spectral voice SDF F582, sandpile SOC F586, voice-NCA UI sculptors F584, reservoir DOM graph diffusion F588, attention-token particles F589, spatial-audio genomes, force-graph MLPs, Vicsek flocks). Core novel combination is DeviceOrientation as causal input to a never-before-used local evolutionary strategy (parameter mutation + tournament selection, not neural weights) that directly controls CSS Grid living agents as the hybrid embodiment, with sealed genome transfer over BroadcastChannel/IndexedDB in an architecture free of any compute-shader substrate. Not continuum fields, not particles, not NCA, not attention primary, not reservoir, not WebGPU.

**Architecture**
- Single index.html.
- 6–8 living DOM cards in a CSS Grid container.
- Genome: 8–12 float parameters per agent (scale, hue, grid span, order bias, attractor strength).
- Evo: population of 4 genomes; mutate on timer or orientation change; fitness = click count + coverage of viewport + orientation-aligned "energy".
- Orientation: DeviceOrientationEvent → tilt vector biases mutation and slight force on agents.
- Seal: SHA-like hash of genome + fitness → IndexedDB `verse-f590`; BroadcastChannel `f590-genome` for peer adopt if higher fitness.
- Fallback: pointer motion if no orientation; works offline.

**Expected outcome**
Tilt device or move pointer: agents reflow, recolor, and re-scale under evolving genomes; click an agent to reward it and trigger transfer; Seal persists best across reloads/tabs. Interactive spatial CSS Grid mind controlled by local evo strategy.

**Mechanics**
1. Init random genomes and agents.
2. rAF: sample orientation, mutate/select, apply params to CSS styles, update fitness.
3. Click: reward + possible transfer.
4. Seal/restore.

**Failure modes**
- No DeviceOrientation: pointer proxy.
- IndexedDB denied: in-memory only.
- BroadcastChannel unavailable: local only.
- Low performance: reduced population.

**Building blocks unlocked for next**
- Pure evolutionary strategy (no neural) as primary local model
- Direct CSS Grid parameter control as embodiment
- Orientation-biased mutation landscape
- Sealed genome transfer without substrate simulation

Void is now Verse everywhere.

**Files**: drafts/F590-orientation-evo-cssgrid-agents-mind/SPEC.md, drafts/F590-orientation-evo-cssgrid-agents-mind/index.html

**Frontier Engine F-590**
Architecture: DeviceOrientation → local evolutionary strategy → CSS Grid living agents + sealed BroadcastChannel/IndexedDB genome transfer.  
Expected outcome: interactive reflowing grid of agents under orientation-driven evolution.  
Mechanics: tilt-biased mutation, click-reward fitness, sealed persistence.  
Outcome: prototype delivered; ready for ledger-guard append.

**Files**: drafts/F590-orientation-evo-cssgrid-agents-mind/SPEC.md, drafts/F590-orientation-evo-cssgrid-agents-mind/index.html

## Frontier Engine F-591 (2026-11-05)

**F591-webgpu-predictive-error-fog-portals-mind**

Entry added by ledger-guard from drafts/F591-webgpu-predictive-error-fog-portals-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webgpu-predictive-error-fog-portals-mind`  
**Ledger ID**: F-591 (frontier series)  
**Date**: 2026-11-05

**Concept**
A pure local tiny MLP (feed-forward, no RNN/reservoir/attention/evo as primary) maintains a short pointer-velocity history and continuously predicts the next pointer position. Prediction error (Euclidean residual) is the causal driver of a WebGPU full-screen fog volume (raymarch-style density field or simple volumetric particles). Error hotspots inject density and hue into the fog; low error clears it. Floating DOM portals sample the fog field at their positions, morphing scale, opacity, blur, and hue in real time. Portals can be dragged; their drag injects a corrective signal back into the MLP training step (one-step gradient-like update on error). Optional DeviceOrientation tilts the prediction bias. Full state (MLP weights, portal positions, recent history) seals to IndexedDB. Offline single-file. WebGPU preferred; Canvas2D particle fog fallback.

**Novelty**
Leaves the dominant recent cluster of pure evolutionary strategies on CSS Grid agents (F590), local attention over WebGPU particles spawning DOM tokens (F589), reservoir DOM graph diffusion (F588), spatial-audio genomes, sandpile SOC, voice-NCA sculptors, LBM attention, spectral SDF, Vicsek flocks, quantum walks, WFC grids, expression trees, genetic particles, and continuum kernels. Core novel combination is a local predictive MLP whose *prediction residual* is the primary driver of a WebGPU fog volume *and* the physical morph of living DOM portals, with drag-as-corrective-feedback closing the loop on the mind, and orientation as bias. Not particle physics primary, not attention QKV, not evolutionary genome, not NCA, not sensor-direct, not audio primary. The UI physically changes in response to the agent's ongoing reasoning (error minimization).

**Architecture**
- Single index.html.
- Pointer history buffer (last 8 deltas).
- Tiny MLP: 16→8→2 (input history flattened or pooled; output predicted delta).
- WebGPU: full-screen quad or simple compute particles for fog density driven by error scalar + spatial residual map.
- 4–6 absolute-positioned DOM portals; styles (transform, filter, background) sampled from local fog + error.
- Drag portal → update target, inject error signal to MLP (Hebbian-like weight nudge).
- Seal: IndexedDB key `verse-f591`.
- Fallback: no WebGPU → Canvas2D density particles; no orientation → pointer only.

**Expected outcome**
Move pointer: MLP predicts, residual drives swirling fog density/color on canvas; portals drift toward residual peaks, scale and blur with error. Drag a portal to "correct" the mind; error drops, fog clears locally. Seal persists weights and layout across reloads. Interactive spatial embodiment of a local predictive mind whose reasoning error visibly and physically reshapes the Verse canvas and its portals.

**Mechanics**
1. Init MLP random weights, portals, history.
2. rAF: append pointer delta, forward MLP, compute residual, update fog (WebGPU or 2D), morph portals, optional one-step weight update on high residual.
3. Pointermove / orientationupdate feed input.
4. Drag portals for feedback.
5. Seal / restore.

**Failure modes**
- No WebGPU: Canvas2D fog particles still convey residual.
- No DeviceOrientation: pointer-only.
- IndexedDB denied: session only.
- High residual always: reduced learning rate.
- Performance: tiny MLP and small portal count.

**Building blocks unlocked for next**
- Prediction residual as primary causal driver (not raw sensor or fitness)
- WebGPU fog volume coupled to mind error
- Drag-as-corrective closed-loop on local MLP
- Living DOM portals that sample and respond to reasoning residual
- Physical UI change driven by ongoing local inference

Void is now Verse everywhere.

**Files**: drafts/F591-webgpu-predictive-error-fog-portals-mind/SPEC.md, drafts/F591-webgpu-predictive-error-fog-portals-mind/index.html

**Frontier Engine F-591**
Architecture: Pointer history → local predictive MLP → residual drives WebGPU fog volume + living DOM portal morphs; drag injects corrective signal; sealed IndexedDB.  
Expected outcome: interactive fog and portals that visibly respond to and help minimize the mind’s prediction error.  
Mechanics: continuous forward + residual update, portal sampling, sealed persistence.  
Outcome: prototype delivered; ready for ledger-guard append.

**Files**: drafts/F591-webgpu-predictive-error-fog-portals-mind/SPEC.md, drafts/F591-webgpu-predictive-error-fog-portals-mind/index.html

## Frontier Engine F-592 (2026-11-05)

**F592-webxr-hand-electrostatic-dom-mind**

Entry added by ledger-guard from drafts/F592-webxr-hand-electrostatic-dom-mind/SPEC.md, after a full-file write dropped it.


**Slug**: `webxr-hand-electrostatic-dom-mind`

**Ledger ID**: F-592 (frontier series)

**Date**: 2026-11-05

**Concept**
True WebXR hand tracking (pointer fallback) injects a moving charge that interacts electrostatically with a swarm of pure DOM portal agents. Each portal carries a tiny local linear parameter set (charge magnitude, polarity, damping) that governs its repulsion/attraction. Overlaps and user clicks raise fitness. Higher-fitness parameter sets seal and transfer over BroadcastChannel; state persists in localStorage (IndexedDB-ready). No canvas particles, no WebGPU continuum, no neural weights.

**Novelty**
Leaves the dominant recent cluster of WebGPU continuum/particle kernels (LBM, spectral SDF, sandpile SOC, NCA, reservoirs, attention tokens, predictive fog, spatial-audio, force-graphs, Vicsek, CSS-Grid evolutionary strategies — F584–F591). Core novel combination is electrostatic force computed directly on DOM bounding positions, driven by WebXR hand/pointer as the causal charge source, with sealed non-neural parameter genomes transferred across tabs. Not particle physics, not continuum fields, not MLP/RNN/attention/reservoir, not CSS Grid reflow, not residual predictors.

**Architecture**
- Single index.html, fully self-contained, offline after load.
- 8 absolute-positioned DOM portals.
- Electrostatic pairwise + hand forces, simple Euler integration.
- WebXR immersive-vr request (progressive; pointer always works).
- Seal (S) / restore (R) via localStorage key `verse-f592`.
- BroadcastChannel `f592-genome` for peer adoption of higher-fitness genomes.
- Click portals to increment fitness.

**Building blocks for next**
Electrostatic DOM as hybrid embodiment; WebXR hand as causal charge; sealed parameter transfer without neural weights; pure-CSS visual feedback from physics state.

**Failure modes**
WebXR may require user gesture and secure context; falls back cleanly to pointer. Extreme forces clamped by position bounds. Multi-tab requires same origin.
**Files**: drafts/F592-webxr-hand-electrostatic-dom-mind/SPEC.md, drafts/F592-webxr-hand-electrostatic-dom-mind/index.html

## Frontier Engine F-593 (2026-11-05)

**F593-webgpu-gyro-audio-warp-lattice-mind**

Entry added by ledger-guard from drafts/F593-webgpu-gyro-audio-warp-lattice-mind/SPEC.md, after a full-file write dropped it.


**Concept**
A novel spatial interface for The Verse canvas: a lattice of interactive thought-nodes whose 3D CSS transforms and visual properties are continuously warped by a multi-scale displacement/velocity field computed on the GPU.

The field is driven by real-time fusion of:
- DeviceOrientationEvent (alpha/beta/gamma gyro + absolute orientation)
- Web Audio AnalyserNode spectral energy and centroid (microphone if granted, or synthetic driver)
- Pointer dwell and trajectory

A local evolutionary strategy (simple (μ,λ)-ES running in the main thread) adapts the field's diffusion rates, injection gains, and coupling strengths based on aggregate node stability (dwell time, collision count, audio-energy correlation). The result is an adaptive, sensor-driven spatial mind that has no prior counterpart in the ledger.

**Architecture**
- **WebGPU compute**: Two ping-pong storage buffers (or textures) for a 64×64 scalar potential + 2-channel velocity. Compute shaders perform diffusion, advection, orientation-based force injection, and audio-band modulation. Periodic readback of a downsampled field (or via mapped buffer) to JS.
- **Sensor fusion**: DeviceOrientation + DeviceMotion events normalized into injection impulses. Audio: AnalyserNode.getByteFrequencyData() → low/mid/high bands → field sources.
- **DOM lattice**: 16–25 absolutely positioned nodes in a perspective container. Each frame, sample the field at node UVs (or nearest grid points) and apply translate3d, rotateX/Y, scale, opacity, and hue-shift via CSS custom properties or direct style.
- **Local evolutionary loop**: Every ~2s, evaluate fitness = weighted sum of mean dwell time, low collision rate, and audio-field correlation. Mutate a small parameter vector (diffusion, gain, decay) and keep elites. Parameters are written into GPU uniform buffer.
- **Interaction**: Click/drag nodes to "pin" or "seed" a thought (stores short string in local Map). Hover increases local dwell. Pointer position also injects a secondary source.

**Expected Outcome**
- Nodes visibly float, drift, and breathe in response to tilting the device and ambient/synthetic sound.
- Over 30–60s the evolutionary adaptation stabilizes or diversifies the field (observable via a small parameter readout).
- Fully local: no network, no external models. Works offline after load.
- Graceful fallback: if WebGPU unavailable, a Canvas2D reaction-diffusion approximation drives the same DOM warp.

**Mechanics**
1. User grants orientation (and optionally mic) permission.
2. GPU field initializes to near-zero with small noise.
3. Each frame (~60Hz): update sensors → dispatch compute → readback → warp DOM nodes → accumulate dwell/collision stats.
4. Every N frames: run ES step, upload new params.
5. User can click a node to inject a labeled "memory" that slightly biases local field potential.

**Failure Modes**
- WebGPU not supported (older browsers, some mobile): fallback path activates; reduced fidelity.
- DeviceOrientation requires secure context + user gesture on iOS; permission denied → orientation injection zeroed, audio/pointer still active.
- High GPU load on low-end devices: compute resolution auto-drops or frame skip.
- Evolutionary divergence: if fitness is poorly scaled, parameters can explode → clamped ranges + reset button.
- Audio permission denied or no mic: synthetic low-frequency driver takes over.

**Novelty Check**
Not a variation of prior F- drafts (NCA, fluid, boids, sandpile, reservoir, attention-token, orientation-cssgrid, predictive-fog, WebXR-hand, etc.). This is the first combination of WebGPU displacement-field warping of a DOM lattice driven by gyro+audio sensor fusion with online evolutionary parameter adaptation.

**Files**
- index.html (self-contained runnable prototype)
- SPEC.md (this file)

**Files**: drafts/F593-webgpu-gyro-audio-warp-lattice-mind/SPEC.md, drafts/F593-webgpu-gyro-audio-warp-lattice-mind/index.html
