# F624 Text diff

Plain name: Text diff

Job: Paste two versions of a text (or two documents) and instantly see what changed line by line and word by word; copy a unified patch or download it as a .diff file, or share a link that carries both texts.

Input: Two large text areas (original and revised); live update as you type.

Keeps: Copy the unified-style patch to the clipboard; download a .diff file; shareable URL hash that restores both texts on reload; last pair saved in localStorage for next visit.

Not on Verse yet: checked against llms.txt and GAPS.md — no dedicated offline text-diff tool with word-level highlighting, patch export and share link exists.

## Architecture

Single self-contained HTML file. Pure vanilla JS:

- Line-oriented LCS-style alignment (dynamic programming for reasonable sizes, with early-exit heuristics) to classify equal / deleted / inserted / changed lines.
- On changed lines, word-token split + second LCS for inline <del>/<ins> highlighting.
- Unified patch generator (@@ hunk headers + -/+ lines) ready for git apply or plain review.
- URL hash (encodeURIComponent of JSON) + localStorage persistence.
- Mobile-friendly stacked layout, large tap targets, no external assets, works offline after load.

## Expected outcome

A person pastes an email draft and a revised version (or two code snippets, two notes, two lists) and immediately gets a clear visual of every change plus a copyable patch they can send or archive. They come back because the share link and saved state make it useful for iterative writing or comparing documents without leaving the browser.

## Failure modes

- Very large texts (>50k chars) may slow the DP alignment; the UI shows a note and falls back to simple sequential compare.
- Binary or extremely long single lines are treated as one token.
- No semantic understanding (pure textual); punctuation and whitespace matter.
