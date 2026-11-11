# F670 Barcode Spatial Inventory
Plain name: Barcode inventory scanner
Job: Point your phone camera at product barcodes or QR codes; the page detects them locally, lets you name the item and set quantity, then drag the cards around a spatial board to arrange shelves or categories; download a CSV of the list and a PNG of the layout.
Input: Camera feed via BarcodeDetector (Chromium) or a photo upload as fallback; text fields for name and quantity; pointer drag to reposition cards.
Keeps: Download CSV of all items (code, name, qty, notes); download PNG of the current spatial board; last inventory restored from localStorage (`verse-f670-inventory`); share link encodes the list via URL hash.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no offline barcode/QR scanner that builds a spatial inventory board with dual CSV+PNG export and device persistence (QR generator exists but is one-way).

**Novelty**
Branches away from the recent spatial planners (kanban F666, dependency Gantt F665, room layout F667, seating, chore rota) and generative orientation/wave tools (F669 wallpaper, F668 eyedropper palette, F664 L-system). Core novel combination is the previously unused BarcodeDetector API (plus FileReader fallback) as the primary input that seeds a free-form spatial card board. Users arrange physical-world items into a visual layout, then export both structured data and a picture. Not a particle field, not an MLP-driven simulation, not a pure planner of tasks, not a one-shot QR encoder.

**Architecture**
Single self-contained index.html.
- Feature-detect BarcodeDetector; if present, open getUserMedia and run detection in a requestAnimationFrame loop on a video element.
- Fallback: <input type="file"> that draws the image to a canvas and attempts detection (or just records the filename as code if detection fails).
- Detected codes become draggable cards on a free canvas (absolute positioned divs or canvas-drawn, but DOM cards for accessibility and form inputs).
- Each card: code, editable name, qty stepper, notes, delete.
- localStorage persistence of the array of {code, name, qty, notes, x, y}.
- Export CSV: standard comma-separated with headers.
- Export PNG: temporarily render the board (or use html2canvas-style, but pure canvas redraw of cards for reliability) to an offscreen canvas and download.
- URL hash: compact JSON of the list (positions optional) for share.
- Honest messages about browser support (BarcodeDetector is Chromium-only as of 2026; iOS Safari falls back to photo).
- Works offline after load; nothing sent anywhere; phone-friendly layout.

**Expected outcome**
A person at a store or packing can scan items, arrange them spatially, leave and return to the same board, and walk away with a clean list and a picture. Failure modes (no camera permission, unsupported browser, duplicate scans) are handled with clear UI and still produce a usable inventory.
