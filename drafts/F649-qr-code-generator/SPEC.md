# F649 QR code generator

Plain name: QR code generator
Job: Type or paste any text, URL or message; instantly get a scannable QR code you can resize, recolor, download as PNG or copy as an image.
Input: A text box for the content; size control; optional foreground and background color pickers; error-correction level.
Keeps: Download the QR as a PNG file; copy the image to the clipboard; the last content and colors are saved on this device for next time; share link carries the content via URL hash.
Not on Verse yet: checked against llms.txt and GAPS.md — no offline QR code generator with custom colors, PNG download, copy and local save.

## What existing sites do
Most QR generators are online services that send your text to a server, add tracking, or require accounts. Simple local ones often lack color control, download, or persistence.

## Better Verse version
Fully offline after load. Nothing leaves the device. Custom colors, size, error correction. Instant preview. Download PNG, copy image, share link that restores the exact code. Saved last settings. Works on phone. Honest: uses standard QR encoding so phones scan it correctly.

## Architecture
Single self-contained index.html. Pure vanilla HTML/CSS/JS. Includes a compact pure-JS QR code encoder (Reed-Solomon based, supports alphanumeric/byte modes, error correction L/M/Q/H). Canvas renders the modules with optional quiet zone. localStorage for last state. URL hash for share.

## Expected outcome
A person pastes a Wi-Fi password, URL or note, sees the QR, tweaks colors so it matches their brand, downloads a PNG to print or share, and comes back because the settings stick.

## Failure modes
Very long text may require higher error correction or fail to encode (shows message). Canvas not supported: rare. Clipboard denied: download still works.

## Files
drafts/F649-qr-code-generator/SPEC.md
drafts/F649-qr-code-generator/index.html
