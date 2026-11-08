# F625 Regex tester

Plain name: Regex tester

Job: Paste a regular expression and a block of text; see every match and its capture groups highlighted live, get a plain-English breakdown of what the pattern does, rearrange the match cards spatially, then copy the matches, download them as JSON or CSV, or share a link that restores the exact pattern and text.

Input: Pattern box (with flags), large text area, live update.

Keeps: Copy matches as text or JSON; download .json or .csv; shareable URL hash; last session saved in localStorage.

Not on Verse yet: checked against llms.txt and GAPS.md — no offline regex tester with group cards, plain-English explanation, and export exists.

## Architecture

Single self-contained HTML file. Pure vanilla JS:

- Native RegExp with try/catch for invalid patterns; global and sticky flags supported.
- Live highlight of full matches and numbered/named groups inside the text view.
- Spatial match cards: each match becomes a draggable CSS card showing index, full match, and groups; cards can be reordered by drag to form a custom layout that is preserved in the export.
- Local rule-based explainer that walks the pattern and emits plain-English phrases for common tokens (literal, . * + ? [] () | ^ $ \d \w \s, etc.) without external models.
- URL hash + localStorage persistence of pattern, flags, text, and card order.
- Mobile-friendly; works offline after load; no external assets.

## Expected outcome

A person pastes a log line pattern and a sample log (or an email subject regex and sample subjects) and immediately sees which parts matched, why the pattern works, and can export a clean list of extracted fields. They come back because the share link and saved state make it useful for iterative pattern writing or teaching regex without leaving the browser.

## Failure modes

- Invalid regex shows a clear error and does not crash.
- Catastrophic backtracking patterns may freeze the tab on huge texts; UI notes the risk and caps text length.
- Named groups and lookarounds are shown but the explainer covers only the common subset.
- No server; everything stays on the device.

## Frontier Engine F-625

Architecture: Native RegExp engine + rule-based local explainer + CSS spatial match cards with drag reorder + URL/localStorage seal.  
Expected outcome: interactive spatial extraction tool whose match cards can be rearranged by the user and whose pattern is explained in plain language.  
Mechanics: live matching, group extraction, spatial reordering, sealed persistence, export.
