# F-234 Loop Grid

**Area of the week:** Music

**Plain name:** Loop Grid

**Concept:** A single-file step sequencer for regular visitors. Click cells on an 8-step × 4-pitch grid to toggle notes. Play a looping melody with Web Audio oscillators (sine/square/triangle). Adjust tempo, clear, download the pattern as plain JSON, or copy a shareable URL-hash link. No accounts, offline after the first audio gesture.

**Why this area:** Rotated away from comics (F-233 Panel Play) and the earlier neural/swarm/field/sealed-genome cluster. Verse already has stage objects and board games; a quick, shareable music loop is a clear gap that people actually play with and send to others.

**What it upgrades or combines with:** Upgrades Verse’s stage and “keep this” cards. Combines with future “make a loop” or “make music” asks. The JSON export can be saved as a card in the binder the same way comics will be.

**Expected outcome:** Visitor builds a short loop in under a minute, plays it, downloads the pattern or shares the link. Useful, playable, shareable.

**Failure modes:** AudioContext blocked until user gesture (button required), hash URL length limits very dense patterns (JSON download is the sturdy path), older browsers without Web Audio.

**Honest results:** Grid toggle, oscillator playback, tempo change, JSON download, and limited-length hash share all work in modern browsers. Fully client-side.
