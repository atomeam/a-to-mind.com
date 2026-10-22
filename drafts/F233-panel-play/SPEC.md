# F-233 Panel Play

**Area of the week:** Comics and sequential storytelling.

**Plain name:** Panel Play

**Concept:** A single-file interactive comic strip maker for regular visitors. Create 3-panel strips by clicking to place speech bubbles, stick figures, and simple props. Type dialogue, rearrange panels, then download as PNG or copy a shareable state link (URL hash). No accounts, offline after load.

**Why this area:** Recent drafts clustered on tiny competing neural models, lattices, swarms, fields and sealed genomes. Verse already handles board games, stage objects (clocks, notes, shapes), weather, books and code review. Sequential visual storytelling (comics, cartoons) is a clear gap that top creative sites do better and that people actually make and share.

**What it upgrades or combines with:** Upgrades Verse's stage/cards ("keep this", sticky notes, shapes). Combines with kept cards and "make a comic about…" asks. Could feed into future sprite or image tools.

**Expected outcome:** Visitor builds a short comic in under a minute, downloads it or shares the link. Useful, playable, shareable. Potential for later paid templates or print-on-demand.

**Failure modes:** Canvas export blocked in some browsers (fallback text list), large hash URLs truncated (limit panels), touch precision on mobile (larger hit areas).

**Honest results:** Pointer/touch placement works; PNG download uses toDataURL; shareable state is base64 JSON in hash. Fully client-side.
