# F753 Local business card maker

Plain name: Business card maker
Job: Type your name, role, phone, email and website; see a live preview of a standard business card and download it as a clean PNG ready to print or share.
Input: Text fields for name, title, phone, email, website, and a color theme picker.
Keeps: Download the card as PNG; copy the details as text; last details saved on the device for next time.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt (no business card maker) and docs/GAPS.md in atomeam/void-loop (make a business card is open gap #50).

**Architecture**
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Canvas renders a 3.5×2 inch business card at 300 dpi equivalent (1050×600 px) for print quality.
- Live preview scales down for the page; download is full resolution PNG.
- Themes: several built-in color schemes; custom accent color.
- Optional: DeviceOrientationEvent tilts the preview slightly for a spatial feel on phones (falls back to static).
- Offline, works on phone, no account, nothing sent. All data stays on the device (localStorage).

**Expected outcome**
A practical tool a person returns to when they need a quick business card for printing, email, or social. Clean output, honest sizes.

**Novelty**
First frontier draft focused on a print-ready maker tool with high-resolution Canvas output and optional device-tilt preview. Leaves the recent cluster of spatial neural/evolutionary minds (F745–F750), crypto tools (F751–F752), and all prior particle/lattice/swarm experiments. Combines real user input with a downloadable artifact.

**V01D landing**
tools/business-card-maker; testable via fill fields → preview updates → PNG downloads with correct text.

Void is now Verse everywhere.

**Files**: drafts/F753-local-business-card-maker/SPEC.md, drafts/F753-local-business-card-maker/index.html
