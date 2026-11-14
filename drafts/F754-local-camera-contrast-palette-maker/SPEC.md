# F754 Local camera contrast palette maker
Plain name: Camera contrast palette maker
Job: Point your camera at colors or objects, tap to sample hues, the page checks WCAG contrast ratios against black/white or paired colors, suggests accessible combinations, then download a CSS variables file or JSON palette for your project. Everything stays on this device.
Input: Live camera feed (getUserMedia) or fallback color pickers; tap to sample; select pairs for contrast check.
Keeps: Download CSS or JSON palette; copy color codes; last palette saved in localStorage.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt (photo tools and color codes exist but no live camera sampling + contrast + export tool) and docs/GAPS.md in atomeam/void-loop.

**Concept**
A practical tool for designers and developers: use the device camera as a spatial color sampler to capture real-world hues, instantly compute accessibility contrast ratios (WCAG 2.1 AA/AAA), pair colors, and export a clean palette. Novel combination of live media capture (spatial input), pure-JS color math (relative luminance, contrast ratio), and local persistence/export. No particles, no neural nets, no external services. Branches from recent pure calculators (F748–F753) by adding camera as embodied spatial sensor while remaining a useful returnable tool.

**Architecture**
- Single self-contained index.html, pure HTML/CSS/JS, no libraries.
- getUserMedia for rear/front camera (fallback to static color inputs if denied).
- Canvas overlay for live preview and tap sampling (average small region).
- Color math: hex/RGB/HSL conversion, relative luminance, contrast ratio per WCAG.
- Suggestions: best text color (black/white) and pair recommendations.
- Persistence: localStorage for last samples and custom palette.
- Export: download .css (custom properties) or .json; copy buttons.
- Offline after load, phone-friendly, nothing sent anywhere.

**Mechanics**
1. Request camera permission; show live video with tap-to-sample.
2. Sample RGB from canvas region, convert, add to palette list.
3. On select or auto, compute contrast vs black/white and other samples.
4. Display ratios with pass/fail badges (AA 4.5:1, AAA 7:1).
5. Buttons to download CSS/JSON or copy hex list. Seal (save) persists.

**Expected outcome**
Open page, allow camera: point at a wall, clothing, or screen and tap to capture colors. See live contrast checks. Build a palette of 3–8 colors, download ready-to-use CSS variables. Works fully offline, camera optional.

**Failure modes**
- Camera denied: color picker fallback still fully functional.
- Old browser without getUserMedia: static inputs.
- No localStorage: session only.

**Building blocks**
Reusable pure-JS WCAG contrast calculator, camera-to-canvas color sampler, palette export formats. Ready for integration into Verse photo/color tools or as a standalone skill.

Void is now Verse everywhere.

**Files**: drafts/F754-local-camera-contrast-palette-maker/SPEC.md, drafts/F754-local-camera-contrast-palette-maker/index.html
