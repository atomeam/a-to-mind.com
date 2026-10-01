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
| answer-ready-modular-blocks | 2026-09-30 | 020 | specified | Six hashed self-contained blocks; no chatbot; no FAQPage emit; hold-gate only |
| pwa-install-and-offline-ledger | 2026-09-30 | 021 | specified | Allowlisted SW + honest install; offline ledger not a run promise; hold-gate only |
| voice-query-to-plan | 2026-09-30 | 022 | specified | Gesture listen; catalog plan; transcript is data; run holds; no TTS |
| agentic-personalization-with-hold-gate | 2026-09-30 | 023 | specified | Zero-party facets only; infer deny; persist/apply hold; hold-gate only |
| functional-3d-run-graph | 2026-09-30 | 024 | specified | CSS-3D attested run graph; 2D default; no WebGL/Three; rewire holds |
| carbon-weight-badge | 2026-09-30 | 025 | specified | Sealed SWDMv4 page-weight badge; unattested default; no third-party widget; hold-gate only |
| wcag-3-continuous-audit-badge | 2026-09-30 | 026 | specified | Sealed WCAG 2.2 AA snapshot badge; WCAG 3 claim denied; no overlay; hold-gate only |

## Queue (easiest / most common first — do not skip ahead unless a used item is blocked)

_(empty as of run 026. Do not invent slugs in this file without a human adding them.)_

## Halt (run 027)

Queue was empty on 2026-09-30. Run 027 did **not** invent a Used row. Candidate draft only: `default-deny-cookie-notice` in `drafts/027-default-deny-cookie-notice/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/27. A human must add the next slug to Queue before an assimilation run may pick it. Live site copy was not changed.

## Halt (run 028)

Queue was still empty on 2026-09-30. Run 028 did **not** invent a Used row and did **not** promote the run 027 candidate. Candidate draft only: `attested-security-txt` in `drafts/028-attested-security-txt/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/28. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/.well-known/security.txt` was not added.

## Halt (run 029)

Queue was still empty on 2026-09-30. Run 029 did **not** invent a Used row and did **not** promote the run 027 or 028 candidates. Candidate draft only: `hashed-privacy-policy` in `drafts/029-hashed-privacy-policy/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/29. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/privacy` was not added.

## Halt (run 030)

Queue was still empty on 2026-09-30. Run 030 did **not** invent a Used row and did **not** promote the run 027, 028, or 029 candidates. Candidate draft only: `attested-contact-channel` in `drafts/030-attested-contact-channel/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/30. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/contact` was not added. No form backend, Calendly embed, chatbot, or invented mailbox was published.

## Halt (run 031)

Queue was still empty on 2026-09-30. Run 031 did **not** invent a Used row and did **not** promote the run 027, 028, 029, or 030 candidates. Candidate draft only: `hashed-terms-of-service` in `drafts/031-hashed-terms-of-service/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/31. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/terms` was not added. No generator embed, clickwrap checkbox, auto-renew clause theater, or invented governing-law address was published.

## Halt (run 032)

Queue was still empty on 2026-09-30. Run 032 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, or 031 candidates. Candidate draft only: `hashed-accessibility-statement` in `drafts/032-hashed-accessibility-statement/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/32. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/accessibility` was not added. No overlay widget, statement generator, WCAG 3 claim, conformant chip, invented feedback mailbox, or run 026 badge restatement was published.

## Halt (run 033)

Queue was still empty on 2026-09-30. Run 033 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, or 032 candidates. Candidate draft only: `attested-humans-txt` in `drafts/033-attested-humans-txt/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/33. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/humans.txt` was not added. No `rel=author` head link, invented TEAM names, jobs CTA, or ASCII-mascot credits theater was published.

## Halt (run 034)

Queue was still empty on 2026-09-30. Run 034 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, or 033 candidates. Candidate draft only: `attested-atom-feed` in `drafts/034-attested-atom-feed/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/34. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/feed.atom` was not added. No `rel=alternate` head link, invented entries, deploy-bumped `updated`, tracking pixel, or email-subscribe enclosure was published.

## Halt (run 035)

Queue was still empty on 2026-10-01. Run 035 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, or 034 candidates. Candidate draft only: `attested-gpc-well-known` in `drafts/035-attested-gpc-well-known/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/35. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/.well-known/gpc.json` was not added. No CMP, consent cookie, `gpc: true` declaration, or honored badge was published.

## Halt (run 036)

Queue was still empty on 2026-10-01. Run 036 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, 034, or 035 candidates. Candidate draft only: `attested-tdm-reservation` in `drafts/036-attested-tdm-reservation/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/36. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/.well-known/tdmrep.json` was not added. No Content-Signal rewrite of robots.txt, opted-out badge, ODRL policy URL, or crawler-honor claim was published.

## Halt (run 037)

Queue was still empty on 2026-10-01. Run 037 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, 034, 035, or 036 candidates. Candidate draft only: `attested-api-catalog` in `drafts/037-attested-api-catalog/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/37. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/.well-known/api-catalog` was not added. No `rel=api-catalog` link, invented OpenAPI, MCP URL, llms.txt-as-service-desc, or agent-ready badge was published.

## Halt (run 038)

Queue was still empty on 2026-10-01. Run 038 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, 034, 035, 036, or 037 candidates. Candidate draft only: `speculation-rules-default-deny` in `drafts/038-speculation-rules-default-deny/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/38. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `<script type="speculationrules">` was added. No `Speculation-Rules` header, prerender rule, document-wide `href_matches`, or instant-nav badge was published.

## Halt (run 039)

Queue was still empty on 2026-10-01. Run 039 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, 034, 035, 036, 037, or 038 candidates. Candidate draft only: `attested-permissions-policy` in `drafts/039-attested-permissions-policy/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/39. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `Permissions-Policy` header was added. No `_headers` file, `report-to` endpoint, iframe `allow` list, or opted-out badge was published.

## Halt (run 040)

Queue was still empty on 2026-10-01. Run 040 did **not** invent a Used row and did **not** promote the run 027, 028, 029, 030, 031, 032, 033, 034, 035, 036, 037, 038, or 039 candidates. Candidate draft only: `attested-content-security-policy` in `drafts/040-attested-content-security-policy/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/40. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `Content-Security-Policy` header was added. No `Content-Security-Policy-Report-Only` header, `_headers` file, meta CSP, nonce, `unsafe-inline`, report collector, or A+ badge was published.

## Halt (run 041)

Queue was still empty on 2026-10-01. Run 041 did **not** invent a Used row and did **not** promote the run 027–040 candidates. Candidate draft only: `attested-open-graph-cards` in `drafts/041-attested-open-graph-cards/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/41. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `og:*` or `twitter:*` tags were added. No `?v=` cache-bust URL, dynamic image generator, `article:published_time`, `fb:app_id`, or share-preview badge was published.

## Halt (run 042)

Queue was still empty on 2026-10-01. Run 042 did **not** invent a Used row and did **not** promote the run 027–041 candidates. Candidate draft only: `attested-subresource-integrity` in `drafts/042-attested-subresource-integrity/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/42. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `integrity` attribute was added. No `Integrity-Policy` header, `Integrity-Policy-Report-Only` header, CDN hash fetch, report collector, or SRI badge was published.

## Halt (run 043)

Queue was still empty on 2026-10-01. Run 043 did **not** invent a Used row and did **not** promote the run 027–042 candidates. Candidate draft only: `attested-subprocessors` in `drafts/043-attested-subprocessors/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/43. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. `/subprocessors` was not added. No footer link, subscribe form, invented mailbox, vendor row, objection-window claim, or compliance badge was published.

## Halt (run 044)

Queue was still empty on 2026-10-01. Run 044 did **not** invent a Used row and did **not** promote the run 027–043 candidates. Candidate draft only: `attested-referrer-policy` in `drafts/044-attested-referrer-policy/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/44. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `Referrer-Policy` header was added. No referrer meta, comma chain, Cloudflare Transform Rule, `_headers` line, or privacy-grade badge was published.

## Halt (run 045)

Queue was still empty on 2026-10-01. Run 045 did **not** invent a Used row and did **not** promote the run 027–044 candidates. Candidate draft only: `attested-strict-transport-security` in `drafts/045-attested-strict-transport-security/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/45. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `Strict-Transport-Security` header was added. No `_headers` line, Cloudflare Transform Rule, `includeSubDomains`, `preload` token, hstspreload.org submission, or SSL-grade badge was published.

## Halt (run 046)

Queue was still empty on 2026-10-01. Run 046 did **not** invent a Used row and did **not** promote the run 027–045 candidates. Candidate draft only: `attested-cross-origin-isolation` in `drafts/046-attested-cross-origin-isolation/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/46. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `Cross-Origin-Opener-Policy`, `Cross-Origin-Embedder-Policy`, or `Cross-Origin-Resource-Policy` header was added. No `_headers` file, Cloudflare Transform Rule, `report-to` endpoint, SharedArrayBuffer demo, or isolated badge was published.

## Halt (run 047)

Queue was still empty on 2026-10-01. Run 047 did **not** invent a Used row and did **not** promote the run 027–046 candidates. Candidate draft only: `attested-heading-permalinks` in `drafts/047-attested-heading-permalinks/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/47. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No heading `id` was added. No permalink control, DOM-walking table of contents, hover-only hash icon, clipboard write, JSON-LD, or deep-link badge was published.


## Halt (run 048)

Queue was still empty on 2026-10-01. Run 048 did **not** invent a Used row and did **not** promote the run 027–047 candidates. Candidate draft only: `attested-breadcrumb-trail` in `drafts/048-attested-breadcrumb-trail/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/48. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No breadcrumb `nav` was added. No BreadcrumbList JSON-LD, microdata, URL-inferred trail, house icon, ellipsis truncation, or rich-result badge was published.


## Halt (run 049)

Queue was still empty on 2026-10-01. Run 049 did **not** invent a Used row and did **not** promote the run 027–048 candidates. Candidate draft only: `attested-external-link-policy` in `drafts/049-attested-external-link-policy/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/49. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No outbound link policy was added. No `target="_blank"`, `rel=opener`, external-link icon, affiliate wrapper, `utm_*`, click collector, leaving-site interstitial, destination fetch, or trust badge was published.


## Halt (run 050)

Queue was still empty on 2026-10-01. Run 050 did **not** invent a Used row and did **not** promote the run 027–049 candidates. Candidate draft only: `attested-canonical-identity` in `drafts/050-attested-canonical-identity/`. Hold-gate issue: https://github.com/atomeam/a-to-mind.com/issues/50. A human must add a slug to Queue before an assimilation run may pick it. Live site copy was not changed. No `rel=canonical` element was added. No `hreflang` annotation, `x-default`, `Link` header, `?q=` fold onto `/`, retired-path revival, or index-ready badge was published.
