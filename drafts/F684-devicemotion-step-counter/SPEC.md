# F684 DeviceMotion Step Counter

Plain name: Step counter and walk logger
Job: Enable device motion, count steps from accelerometer peaks while walking, see live acceleration and estimated distance, log sessions with timestamps, and export or copy the history as CSV.
Input: DeviceMotionEvent (accelerometer); optional manual step add; session name
Keeps: CSV download of all sessions, copy today's total and full log, IndexedDB persistence of history so it survives reload
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and docs/GAPS.md in atomeam/void-loop — no offline pedometer / step logger that uses DeviceMotion for peak-based counting, visual acceleration trace, session history and CSV export. Spirit level and inertial particle filter exist but do not count steps or produce a walk log.

## Concept
A practical offline step counter for The Verse canvas. DeviceMotionEvent acceleration magnitude is high-pass filtered and peak-detected to count steps. Live Canvas shows the recent acceleration trace with step markers. Sessions can be named and sealed into IndexedDB. Estimated distance uses a simple step-length assumption the user can adjust. Fully self-contained, works on phones that grant motion permission, pointer fallback for demo.

## Novelty
Leaves the dominant recent cluster of WebGPU continuum kernels (LBM, Gray-Scott, percolation), particle swarms with MLP/genome controllers, spatial-audio particles, causal-graph PageRank portals, and inertial particle-filter localization (F676–F683). Core novel combination is previously unused peak-detection on DeviceMotion accelerometer magnitude as the primary input for a keepable fitness log tool, with Canvas trace visualization and session export. Not a particle cloud, not an MLP, not a localization filter, not a simulation mind.

## Architecture
- Single index.html, vanilla JS.
- Permission button for DeviceMotion.
- Accel magnitude → simple high-pass → threshold peak detector with refractory period → step count.
- Canvas 2D: scrolling waveform of |a| with vertical lines at detected steps.
- Controls: start/stop session, step length (m), sensitivity, manual +1, seal/save, export CSV, clear.
- IndexedDB store `verse-f684-steps` holds array of sessions {id, name, start, steps, distance, duration}.
- Offline after load; no network.

## Expected outcome
Grant motion permission, walk or shake device; steps increment, trace shows peaks, distance updates; seal a session; reload restores history; CSV downloads cleanly.

## Failure modes
- Motion permission denied or desktop: show message, allow manual step increments and simulated accel for demo.
- iOS requires user gesture + HTTPS for DeviceMotion.
- Sensor noise or placement: adjust sensitivity slider.
- IndexedDB blocked: session-only memory.

## Files
- index.html
- SPEC.md

Void is now Verse everywhere.
