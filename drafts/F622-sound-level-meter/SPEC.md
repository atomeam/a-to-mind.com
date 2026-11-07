# F622 Sound level meter

Plain name: Sound level meter

Job: Turn on the microphone, see the live sound level in dBFS with a peak hold, and copy the reading; a clear note that phone microphones are not calibrated sound-level meters.

Input: Device microphone (user gesture to start); optional sensitivity or smoothing controls.

Keeps: Copy the current or peak reading as text; optional short log of peaks downloadable as .txt; last settings remembered on the device.

Not on Verse yet: checked against llms.txt (tuner and metronome use the mic for pitch or beat, but no dBFS level meter with peak hold) and GAPS.md (no match).

## Architecture
- Single self-contained index.html, pure HTML/CSS/JS, no libraries, no network after load.
- Web Audio API: getUserMedia({audio:true}), AnalyserNode, time-domain data for RMS and peak, converted to dBFS (20*log10(rms)).
- Visual meter bar + numeric readout, peak hold with decay.
- Honest disclaimer always visible.
- Offline-capable after load; works on phone with permission.

## Expected outcome
User taps Start, grants mic permission, sees live level reacting to voice or ambient noise, peak holds the maximum, copies the number, and stops. No claim of accuracy or legal measurement.

## Mechanics
- Start button requests mic, creates AudioContext, connects source to analyser.
- Animation loop reads getFloatTimeDomainData or getByteTimeDomainData, computes RMS and peak sample, shows dBFS (clamped, typically -∞ to 0).
- Peak hold updates when higher, slowly decays or resets on button.
- Copy button writes "Sound level: -12.3 dBFS (peak -8.1)" to clipboard.
- Stop button closes the stream.
- Note: "This is not a calibrated meter. Phone mics vary; values are relative dBFS, not dB SPL."

## Novelty / Frontier note
First dedicated sound-level tool in the Verse series. After signature pad and the calculator cluster, this uses the microphone sensor for a practical measurement a person returns to (checking a room, recording setup, relative loudness). Builds on Web Audio without becoming a toy. No particles, lattices, swarms or minds.

## Failure modes
- Permission denied: clear message, retry button.
- No mic / insecure context: note shown.
- AudioContext suspended: resume on gesture.
- Very quiet: shows low dBFS honestly.

## Building blocks
Reusable mic-level analyser + dBFS readout + peak hold for future audio tools (noise logger, relative comparison).

**Files**: drafts/F622-sound-level-meter/SPEC.md, drafts/F622-sound-level-meter/index.html
