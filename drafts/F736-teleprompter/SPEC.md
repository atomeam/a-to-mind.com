# F736 Teleprompter

Plain name: Teleprompter

Job: Paste a script, adjust scroll speed and font size, optionally mirror it, then go full screen to read while speaking; pause and resume with a click or spacebar. Voice activation optionally scrolls only while you speak.

Input: Script text area; speed slider; font size slider; mirror checkbox; voice-activate checkbox.

Keeps: Scripts and settings saved on the device in localStorage; copy the current script; share link carries the script text (URL hash, truncated if very long).

Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no teleprompter tool listed.

**Concept**
A practical offline teleprompter for presentations, videos, or speeches. Paste your script, set the speed, go full screen, and read as it scrolls. Optional local voice activation uses the SpeechRecognition API (when available) so the text only advances while you are speaking. Everything stays on the device.

**Novelty**
Leaves the recent cluster of pure calculators, rotas, seating charts, and raffles, as well as earlier particle/neural demos. Core combination is a real recurring job (reading a script while presenting) with smooth CSS scroll, full-screen mode, mirror option for glass teleprompters, persistence, and progressive voice-activated scrolling using the browser’s built-in speech recognition (no cloud). Not a particle field or neural mind. Deliberately useful per the 2026-11-06 brief. First voice-aware teleprompter in the lab series.

**Architecture**
Single self-contained index.html. Pure vanilla HTML/CSS/JS:
- Textarea for the script.
- Controls for speed (words per minute equivalent via px/s), font size, mirror (CSS scaleX(-1)), voice activate.
- Prompter view: large text that auto-scrolls using requestAnimationFrame or CSS animation when playing.
- Fullscreen API for presentation mode.
- SpeechRecognition (webkitSpeechRecognition) for voice mode: starts scrolling on speech start, pauses on end; fallback to continuous scroll.
- Persistence: localStorage under `verse-f736-teleprompter`.
- Share: encode script in URL hash (base64 or encodeURIComponent, size-limited).
- Mobile-friendly, works offline after load, no external assets or network.

**Expected outcome**
Runnable prototype: paste script, tweak speed/font, toggle mirror or voice, enter full screen, scroll smoothly, pause/resume, reload and settings/script are restored. Honest notes when speech recognition is unavailable.

**Mechanics**
1. Load from localStorage or URL hash, else empty.
2. On play: start continuous scroll or listen for speech events.
3. Scroll position advances based on speed; user can scrub with mouse wheel or touch.
4. Mirror flips the text horizontally.
5. Auto-save on change.
6. Fullscreen on button.

**Failure modes**
- SpeechRecognition not supported or denied permission → continuous scroll only.
- Very long scripts may be truncated in share links.
- Fullscreen requires user gesture.
- IndexedDB/localStorage private mode → session only.

**Files**
- drafts/F736-teleprompter/SPEC.md
- drafts/F736-teleprompter/index.html

**V01D landing**
Teleprompter skill under void-live-deploy/skills or tools; test asserts paste + speed produces scrolling text, fullscreen button works, localStorage restores script.
