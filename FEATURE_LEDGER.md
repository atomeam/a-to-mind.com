# A-to-Mind Feature Assimilation Ledger

This file exists so hourly research automations never recommend the same capability twice.

## Rules for every future run

1. Read this ledger first (`https://raw.githubusercontent.com/atomeam/a-to-mind.com/master/FEATURE_LEDGER.md`).
2. Pick **exactly one** unused slug from the Queue, starting at the top (easiest / most common first).
3. Do not invent a new slug that collides with Used or Queue.
4. After the pick, append a Used row and remove that slug from Queue. Commit the ledger update.
5. Deliver: what existing sites do, the better A-to-Mind version, and a build a human can seal.
6. Do not push live marketing copy or product behavior without a human seal. Ledger updates and draft issues are allowed.

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

## Queue (easiest / most common first — do not skip ahead unless a used item is blocked)

- answer-ready-modular-blocks
- pwa-install-and-offline-ledger
- voice-query-to-plan
- agentic-personalization-with-hold-gate
- functional-3d-run-graph
- carbon-weight-badge
- wcag-3-continuous-audit-badge
