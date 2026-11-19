# F837 Spatial Audio Evolutionary Listener Mind

## Concept
Living DOM portals are 3D spatial sound sources on The Verse canvas. A shared local evolutionary policy (tiny MLP) observes DeviceOrientation (mapped as listener orientation) + pointer deltas and outputs continuous control for each source: 3D position offsets, oscillator frequency, and gain. Web Audio API with PannerNodes (HRTF panning) + OscillatorNodes + AnalyserNode creates a real-time spatial sound field the user hears by tilting the device (or moving the mouse as proxy). A canvas projects the 3D source positions and draws the live spectrum. Dragging a portal moves its source; clicking a portal provides a reward that mutates the MLP weights toward the current configuration. Seal persists the policy to IndexedDB and broadcasts via BroadcastChannel for multi-tab adoption. Progressive enhancement: works muted or without sensors via visual-only + synthetic motion.

## Novelty
Leaves the dominant recent cluster of visual continuum/particle/cloth/NCA/CNN/Q-table minds (F836 Verlet DOM cloth + WebXR hands, F835 CNN density features, F834 Q-table layouts, F833 mic-NCA, F832 online-MLP notes, earlier SPH/LBM/Gray-Scott/Physarum/Lenia/N-body/softbody/attention/residual). Core novel combination is spatial audio (PannerNode HRTF) as primary embodiment, DeviceOrientation as *listener* transform (not force or bias), and an evolutionary local MLP policy controlling generative sound parameters of living portal-sources, with visual projection secondary. First spatial-audio evolutionary listener mind on Verse. Not microphone spectral injection, not haptic, not visual kernel primary.

## Architecture
- Single index.html (offline after load).
- 6 absolute-positioned DOM portals (colored cards).
- Shared tiny MLP: 6 inputs (ori alpha/beta/gamma, pointer dx/dy, time) → 18 outputs (3 pos + freq + gain × 6 sources). ~150 weights, pure JS.
- Web Audio: AudioContext, 6 OscillatorNodes + GainNodes + PannerNodes (HRTF), one AnalyserNode on master.
- Listener: setPosition(0,0,0), setOrientation from device or pointer.
- Canvas2D: orthographic projection of source positions + spectrum bars.
- Reward: portal click → small Gaussian mutation on MLP + fitness++.
- Persistence: IndexedDB key `verse-f837`; BroadcastChannel `f837-genome`.
- CSS custom properties from average frequency for chrome hue.

## Expected outcome
Open page (grant audio on interaction). Hear spatial tones that move and pitch-shift with device tilt or mouse. Portals follow projected positions. Click to reward and evolve the policy. Seal transfers the mind to other tabs. Visual spectrum and positions update live. Works offline; graceful if AudioContext blocked.

## Mechanics
1. User gesture starts AudioContext.
2. Each frame: read orientation/pointer → MLP forward → set panner positions, oscillator frequencies, gains.
3. Update portal CSS transforms from projected 3D coords.
4. Draw canvas projection + analyser spectrum.
5. Click portal: mutate weights, increment fitness.
6. Seal: store {weights, fitness} to IndexedDB + post to channel; adopt if higher fitness.

## Files
drafts/F837-spatial-audio-evo-listener-mind/SPEC.md
drafts/F837-spatial-audio-evo-listener-mind/index.html

## V01D landing
Spatial audio evolutionary listener under void-live-deploy/skills/spatial-audio-evo-listener.js; test asserts orientation vector → MLP → panner.setPosition change and BroadcastChannel adoption.

**Void is now Verse everywhere.**
