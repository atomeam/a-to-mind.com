# F674 Competitive Local Summarizer Genome

Plain name: Competitive Local Summarizer
Job: Paste or type text; several tiny on-device models compete to produce extractive summaries; rate the best one to seal and transfer its genome to other tabs; download the winning summary as text.
Input: Textarea for source text; click ratings on candidate summaries.
Keeps: Download the best summary as .txt; copy to clipboard; last source and best genome restored from IndexedDB.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no multi-agent competitive local summarizer with sealed genome transfer over BroadcastChannel/IndexedDB on user text.

**Concept**
A practical tool for The Verse canvas that takes a person's own text and runs a tournament of tiny local models (simple extractive scorers with trainable weights) that compete to produce the best summary. The person rates the winner; that genome is sealed and broadcast to other open tabs or sessions via BroadcastChannel, with persistence in IndexedDB. Export yields the chosen summary.

**Novelty**
Branches away from the recent spatial-planner and hybrid sensor-physical cluster (GPU bin packer F673, tilt note organizer F672, WebXR hand Verlet genome F671, spatial packing list F671, barcode inventory F670, motion wallpaper F669, eyedropper palette F668, room layout F667). Explicitly leaves residual predictors, pure NCA, spectral residuals, pointer-history fields, softbody DOM, orientation RNN, k-means particles, continuum fields, and physical DOM/SVG morphs. Core novel combination is multi-agent competition among local tiny models on a pure text task, with sealed genome transfer over a BroadcastChannel + IndexedDB shared field architecture in a rating-gated tournament not previously built. Not spatial packing, not sensor-driven physical cards, not WebXR, not generative wallpaper.

**Architecture**
Single self-contained index.html, offline after load.
- Textarea + Run button.
- 4 competing agents, each a tiny linear scorer (features: sentence length, position, word rarity proxy → score).
- Extractive summary: top-scoring sentences.
- User clicks "Prefer" on one; seals its weights as genome.
- BroadcastChannel posts the sealed genome; other tabs adopt if present.
- IndexedDB persists best genome and last text.
- Download and copy buttons.

**Expected outcome**
Open page, paste a paragraph, run competition, see 4 summaries, prefer one, open another tab to see genome transfer, download TXT, reload restores.

**Mechanics**
1. Load best genome and text from IndexedDB or init random weights.
2. On run: split text into sentences, score with each agent's weights, select top 30%.
3. Display candidates.
4. On prefer: seal genome, post to channel, save to IDB.
5. On message: adopt genome if better or always for demo.
6. Export: Blob download of chosen summary.

**Failure modes**
- No BroadcastChannel: single-tab only, still functional.
- IndexedDB blocked: session memory.
- Short text: summaries may be near-identical.
- No sentences: fallback to full text.

Void is now Verse everywhere.

**Files**
drafts/F674-competitive-local-summarizer-genome/SPEC.md
drafts/F674-competitive-local-summarizer-genome/index.html

## V01D landing
Competitive local summarizer skill under void-live-deploy/skills/competitive-summarizer.js; test asserts paste + run produces at least two different candidates, prefer seals and posts genome, download produces text blob, reload restores genome.
