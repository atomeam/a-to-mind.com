# F650 Image contrast checker
Plain name: Image contrast checker
Job: Upload a photo or screenshot; click two spots to sample the foreground and background colors; see the WCAG contrast ratio, whether it passes AA/AAA for normal and large text, and a sample preview; copy the hex values and ratio or download a PNG report.
Input: An image file (photo, screenshot, design mockup); clicks on the canvas to sample two colors (or color pickers as fallback).
Keeps: Copy button for hexes + ratio + pass/fail; download a PNG of the sample swatches and numbers; last colors and image name saved in localStorage for next time.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt (color tool has contrast for typed colors and palette-from-photo extraction, but no click-to-sample contrast from an uploaded image with WCAG report download) and docs/GAPS.md in atomeam/void-loop (no match).

**What existing sites do**
Online contrast checkers take hex inputs and show ratios. Some let you pick from screen but require extensions. Image upload tools often extract palettes but do not compute accessibility contrast between two sampled points. Most send images to servers.

**Better Verse version**
Fully offline after load. Nothing leaves the device. Upload any image, click two points to sample exact pixels, instantly get accurate relative luminance contrast ratio, clear AA/AAA badges for normal and large text, live sample preview. Copy results, download a PNG report card with the swatches. Settings and last image name stick. Works on phone. Honest: uses the standard WCAG 2 relative luminance formula.

**Architecture**
Single self-contained index.html. Pure vanilla HTML/CSS/JS, no libraries, no network.
- File input + Canvas to display image and sample pixels via getImageData.
- Relative luminance and contrast ratio computed in pure JS (sRGB to linear, WCAG formula).
- Two color slots with live preview squares.
- localStorage key `verse-f650-contrast` for last fg/bg.
- Canvas report generator for PNG download.
- Fallback color inputs if no image.

**Expected outcome**
A designer or developer drops a screenshot of a UI, clicks the text color and the background, sees “4.6:1 — passes AA normal”, copies the hexes for their stylesheet, downloads the report, and returns because it is fast and private.

**Failure modes**
Large images may be slow to draw (scale down). Cross-origin images blocked (use local file). Canvas getImageData fails on tainted canvas: rare for local files. No image: still works with pickers.

**Files**
drafts/F650-image-contrast-checker/SPEC.md
drafts/F650-image-contrast-checker/index.html

Void is now Verse everywhere.
