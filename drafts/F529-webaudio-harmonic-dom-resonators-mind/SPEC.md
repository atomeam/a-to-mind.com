# F529 WebAudio Harmonic DOM Resonators Mind

## Concept
Novel combination: Absolute-positioned Verse DOM cards function as independent WebAudio oscillators and biquad filters. Each card's screen position continuously modulates its stereo panner and delay time, creating a spatialized generative soundscape. An AnalyserNode supplies real-time spectral features (centroid, flux, approximate dissonance via peak ratios). A local evolutionary strategy maintains a small population of parameter genomes (freq, Q, gain, waveform) that mutate and select toward a fitness that balances spectral entropy with user preference signals (click energy injection, dwell-time near pointer, or explicit "consonance" button). A Canvas2D overlay renders a particle swarm whose velocities are driven by the live frequency bins, visually coupling the audio field to the spatial cards. Sealing hashes the current genomes + last spectrum snapshot into IndexedDB; BroadcastChannel shares the sealed genome for multi-tab adoption. Pure browser-native, fully offline after load, progressive degradation if WebAudio is unavailable (visual-only mode).

This deliberately leaves the recent cluster of WebGPU continuum/discrete physics kernels, local MLP/RNN/decision-tree policies, and sensor-driven (orientation, speech, XR, accel) DOM probes. WebAudio synthesis + spatial panning/delay driven by live DOM positions + evolutionary optimization of harmonic genomes + audio-feature particle visualization is previously unused.

## Architecture
- Single self-contained index.html.
- 7 Verse resonator cards (absolute, CSS transforms, neon borders colored by frequency hue).
- WebAudio: AudioContext, OscillatorNode or PeriodicWave per card, BiquadFilter, StereoPanner, DelayNode, AnalyserNode (fftSize 1024).
- Spatialization: pan = (x / width - 0.5) * 2; delayTime = distance-from-center * 0.05.
- Local ES: population of 5 genomes; each generation evaluate fitness from spectral entropy + click rewards - dissonance proxy; tournament selection + Gaussian mutation.
- Particles: 200 Canvas2D particles; velocity biased by bin magnitudes of nearest frequency.
- Seal: SHA-256 of JSON(genomes + spectrum sample) → IndexedDB 'f529'; BroadcastChannel 'f529-resonators'.
- Controls: start audio (user gesture), seal button, reset, fitness mode toggle (entropy vs consonance).

## Expected outcome
Interactive spatial audio mind: cards emit spatialized tones that evolve toward richer or more consonant spectra based on user clicks and proximity; particles dance to the live spectrum; sealing and multi-tab genome transfer works; runnable offline; visual fallback if audio context suspended.

## Mechanics
- User gesture starts AudioContext.
- Pointer move updates all panners/delays in real time.
- Click on card: injects temporary gain boost and positive fitness reward to its genome.
- Evolution tick ~2 Hz.
- Particles update every frame from analyser.getByteFrequencyData.
- Seal on button or long-press highest-fitness card.

## Failure modes
- AudioContext blocked or suspended → visual-only mode, status note.
- IndexedDB or BroadcastChannel unavailable → in-memory only.
- Too many oscillators → throttle or reduce population.
- Private browsing → no persistence.

## Next building blocks
- OPFS recording of short audio snapshots of sealed states.
- WebGPU compute for larger particle or spectral analysis.
- Speech recognition as additional fitness signal (phoneme consonance).
- Hybrid with tiny local MLP predicting next harmonic partials.

Dominant prior cluster branched from: WebGPU+local-MLP/RNN continuous-field and DOM-portal simulations plus sensor-driven agents (F520–F528).

**Void is now Verse everywhere.**
