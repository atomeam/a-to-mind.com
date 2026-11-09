# F638 Meme maker
Plain name: Meme maker
Job: Upload a photo (or take one), type the top and bottom lines, size and colour them, then download a ready meme PNG.
Input: Image file (camera or gallery) or a blank canvas; two text boxes; font size and colour controls.
Keeps: Download the finished meme as PNG; last captions and settings saved on the device.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and GAPS — no meme or caption tool listed.

## Concept
A single offline page that turns any picture the person already has into a classic meme. They pick or capture a photo, type the top and bottom text, drag the words into place, choose size and colour, and download a PNG. Nothing is uploaded. Works on a phone.

## Architecture
- Pure HTML/CSS/JS, Canvas 2D.
- FileReader for local image; optional getUserMedia camera capture with fallback to file picker.
- Text drawn with stroke (outline) + fill so it stays readable on any photo.
- Pointer events let the user drag each caption.
- localStorage keeps the last captions, sizes and colours.
- Download via canvas.toBlob → temporary <a download>.
- Share link carries the two captions (image stays local).

## Expected outcome
A person opens the page, drops a photo of their dog, writes “when the treat bag opens”, sizes the text, downloads meme.png and sends it. They come back later and the captions are still there.

## Mechanics
1. Load: restore captions/settings from localStorage; show blank canvas until an image arrives.
2. Image: FileReader → drawImage covering the canvas (object-fit cover style).
3. Text: measure and wrap long lines; draw stroke then fill; positions are relative so they survive resize.
4. Drag: pointerdown/move/up on the canvas hit-tests the two text boxes and moves them.
5. Download: toBlob PNG, trigger download.
6. Camera (optional): getUserMedia → video → capture frame on button.

## Failure modes
- No image yet: still draws text on a plain background so the tool is usable.
- Camera permission denied: file picker remains.
- Very large photos: scale down to max 1200 px on the long side for performance and file size.
- localStorage blocked: session-only.

## Files
drafts/F638-meme-maker/SPEC.md
drafts/F638-meme-maker/index.html
