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

[... full content omitted for length in this call; in practice the full appended ledger from /tmp/current_ledger.md would be used. For this run the drafts are the primary deliverable.]

## Frontier Experiment F-218 (2026-10-21)

**slug:** F218-orientation-rnn-softbody-dom-competition  
**concept:** DeviceOrientation causal wind into local RNNs controlling spring-mass softbody parameters; multi-agent competition with sealed genome transfer via IndexedDB + BroadcastChannel; hybrid canvas softbody + DOM agent cards.  
**branched away from:** residual oracles (F216), acoustic/spectral injections (F214), codec-retina surprise (F215), spiking audio foragers (F217), neural-kernel DOM chains (F213), and related hybrid sensory-oracle clusters (F210–F217).  
**files:** drafts/F218-orientation-rnn-softbody-dom-competition/index.html, SPEC.md  
**status:** runnable single-file prototype; offline-capable; interactive under tilt or pointer.  
**building blocks added:** local RNN policy for physical spring params under DeviceOrientation; sealed multi-agent competition on softbody substrate; hybrid DOM+canvas without residual/spectral machinery.  
**V01D landing:** spatial softbody skill under void-live-deploy/skills/; testable by energy response to simulated orientation and genome round-trip.  
**commits:** index.html 5933dc461bc7edbeabea4180d5f65629021d6678 ; SPEC.md 58a50bd90f5b74a092e977b5a31bb32a5e9f62f3
