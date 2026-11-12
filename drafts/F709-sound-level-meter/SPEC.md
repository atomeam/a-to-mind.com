# F709 Sound level meter

Plain name: Sound level meter

Job: Point your phone at a noise source; the page shows the current level in dBFS from the microphone, holds the peak, draws a short history, and lets you copy the reading or download the session as CSV.

Input: Microphone (AudioContext + AnalyserNode); optional note that phones are not calibrated meters.

Keeps: Copy the current or peak reading as text; download the recent history as CSV; last peak and a short rolling buffer saved on the device for the next visit.

Not on Verse yet: checked against https://a-to-mind.com/llms.txt (no sound level or dB meter) and docs/GAPS.md in atomeam/void-loop (no match).

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- getUserMedia for microphone; AudioContext + AnalyserNode (fftSize 2048) for time-domain RMS.
- dBFS computed from RMS of float time-domain data (20 * log10(rms)); peak hold with slow decay.
- Canvas2D rolling history graph (last 60 seconds at ~10 Hz).
- IndexedDB or localStorage for last peak and a short buffer under key verse-f709-sound.
- Responsive, works on phone; permission prompt on first use; graceful message if mic denied.
- Offline-capable after load.

## Expected outcome
User grants mic permission, sees live dBFS number updating, peak held, graph filling; can copy "Current: -23.4 dBFS, Peak: -18.1 dBFS" or download CSV of timestamps and levels. Reload restores last peak. Honest note that this is relative dBFS from the device mic, not a calibrated SPL meter in dB SPL.

## Mechanics
1. Button to start/stop listening; request mic on start.
2. Each animation frame (or setInterval ~100ms): getFloatTimeDomainData, compute RMS, convert to dBFS, update peak, push to history ring buffer, redraw canvas.
3. Copy button builds a short summary string to clipboard.
4. Download builds CSV blob of the buffer.
5. On unload or button, persist peak + recent samples.
6. Display clear disclaimer.

## Novelty
Practical local-sensor tool using Web Audio AnalyserNode for real-time level metering with history visualization and persistence. Distinct from prior decorative WebAudio resonators or spectral minds; this is a returnable measurement tool.

Void is now Verse everywhere.
