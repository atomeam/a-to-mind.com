# F757 Sleep cycle calculator

Plain name: Sleep cycle calculator

Job: Enter the time you need to wake up or the time you plan to go to bed; the page suggests bedtimes or wake times that end on a 90-minute sleep cycle (plus a fall-asleep buffer), then copy the list or download an .ics file of alarms.

Input: Radio for mode (wake-up time or bedtime); time input; number for minutes to fall asleep (default 15); optional number of cycles to show.

Keeps: Copy the full list of suggested times as text; download .ics calendar file with alarm events; last settings saved in localStorage (`verse-f757-sleep`); share link carries the inputs via URL hash.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no offline sleep-cycle / bedtime calculator with 90-minute cycles, latency buffer, copy list and .ics export.

## Novelty
Leaves the dominant recent cluster of mixed practical utilities (SSH keygen F752, message encryptor F751, business card maker F753, camera contrast palette F754) and residual spatial/physics minds (SPH buoyancy F755, OPFS genetic terrain F756). This is a pure deterministic useful tool a person returns to for better sleep timing. No particles, lattices, swarms, genomes, MLPs, WebGPU kernels, or sealed competition. New building block is client-side .ics generation for timed alarms from cycle math.

## Architecture
Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Time math: Date objects for next suggested times in 90-min steps, offset by latency.
- Modes: given wake → compute bedtimes going backward; given bed → compute wakes going forward.
- Persistence: localStorage for last mode/time/latency.
- Export: navigator.clipboard for text; Blob + download for .ics (VEVENT with VALARM).
- Share: encode params in location.hash.

## Expected outcome
User picks 7:00 AM wake, 15 min latency, sees suggested bedtimes like 10:15 PM, 11:45 PM, 1:15 AM etc., copies the list or downloads .ics to import into calendar. Reloads and inputs restore. Honest: based on average 90-min cycles; individual variation applies.

## Failure modes
Invalid time input (show message); no localStorage (still works, no persist); large .ics on very old browsers (rare).

## Building blocks
Reusable client-side time-cycle calculator and .ics generator for other schedulers.

Void is now Verse everywhere.

**Files**: drafts/F757-sleep-cycle-calculator/SPEC.md, drafts/F757-sleep-cycle-calculator/index.html
