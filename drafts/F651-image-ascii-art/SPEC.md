# F651-image-ascii-art

Plain name: Image to ASCII art

Job: Upload a photo; set character width, contrast, and charset; see a live ASCII preview that updates as you tweak; copy the text or download a .txt file. Last settings stick on this device.

Input: An image file; numeric width (chars); contrast slider; charset preset or custom string.

Keeps: Copy the ASCII block; download as text file; last width, contrast, charset, and image name saved in localStorage.

Not on Verse yet: checked against llms.txt and recent drafts — no offline image-to-ASCII converter with live preview, adjustable charset, and download.

## What existing sites do
Online converters upload your image to a server, add watermarks, limit resolution, or require accounts. Local ones are rare and often lack live parameter tweaking or persistence.

## Better Verse version
Fully offline after load. Nothing leaves the device. Instant live preview while you drag sliders. Multiple charsets (standard, blocks, custom). Download clean .txt. Settings persist. Works on phone. Honest: brightness sampled from resized canvas, mapped to charset density.

## Architecture
Single self-contained index.html. Pure vanilla HTML/CSS/JS, no libraries, no network.
- File input + Canvas to resize and sample pixel brightness.
- Average luminance per character cell.
- Map brightness to charset index (darker = denser or inverse).
- Preformatted <pre> or textarea for preview and copy.
- localStorage key `verse-f651-ascii` for last params.
- Download via Blob + a[download].

## Expected outcome
A person drops a selfie or logo, cranks the width, switches to block characters, copies the art into a chat or README, and returns because it is private and fast.

## Failure modes
Very large images scaled down automatically. No image: empty state. Clipboard denied: download still works. Low contrast images produce flat output (user can adjust).

## Mechanics
User selects image → draw to hidden canvas at target width → sample cells → build string → update preview. Sliders re-run the mapping instantly.

Void is now Verse everywhere.
