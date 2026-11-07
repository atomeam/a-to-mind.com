# F621 Signature pad

Plain name: Signature pad

Job: Draw your signature with a mouse or finger on a clean pad, then download a transparent PNG ready to paste into a form or document.

Input: Canvas you draw on with pointer (mouse, pen or touch); controls for pen colour, thickness, clear and undo.

Keeps: Download the signature as a transparent PNG; optional copy of the data URL; last few signatures remembered on this device so you can redraw or re-download them.

Not on Verse yet: checked against llms.txt (photo tools have general drawing and a resize tool that can take a signature, but no dedicated signature pad that outputs a clean transparent PNG) and GAPS.md (no match).

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Canvas 2D context for freehand drawing via pointer events (supports pressure where available).
- Transparent background by default; export via toDataURL('image/png') or toBlob.
- Stroke history kept in memory for undo (last 20 strokes).
- Optional localStorage for a small gallery of named signatures (data URLs).
- Offline-capable; responsive for phone (touch-friendly large pad, prevent scroll while drawing).

## Expected outcome
User opens the page, draws a signature (smooth lines, pressure if pen), clears or undoes mistakes, downloads a transparent PNG, and can reload to see recent ones. Honest: the PNG is what you drew; no claim of legal validity or biometric verification.

## Mechanics
- Pointer down/move/up to draw quadratic or line segments; pressure scales line width if available.
- Colour picker and thickness slider.
- Clear button wipes canvas.
- Undo pops last stroke and redraws.
- Download button creates a temporary <a> with the PNG data URL (filename signature-YYYYMMDD.png).
- Gallery: save current as named entry in localStorage; click to load back onto canvas.

## Novelty / Frontier note
First dedicated signature-pad tool in the Verse series. After the calculator/tracker cluster (F613–F620) and the two spatial recall tools, this branches into direct visual input → clean file output. Expands the useful-tool frontier with a drawing-to-PNG building block people return to for forms, contracts or quick marks. No particles, lattices, swarms or minds.

## Failure modes
- Canvas not supported: message shown.
- localStorage full: gallery disabled, drawing still works.
- Download blocked by browser: data URL offered for right-click save.
- Very large strokes: limited history to keep memory light.

## Building blocks
Reusable canvas freehand drawing + transparent PNG export + simple local gallery for future sketch, annotation or mark tools.

**Files**: drafts/F621-signature-pad/SPEC.md, drafts/F621-signature-pad/index.html
