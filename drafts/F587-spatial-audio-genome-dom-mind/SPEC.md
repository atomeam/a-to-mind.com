# F587-spatial-audio-genome-dom-mind

**Ledger ID**: F-587 (frontier series)

**Concept**  
Spatial audio as the primary living substrate for a local evolutionary mind. Agents are independent Web Audio PannerNode + OscillatorNode pairs whose genomes (frequency, waveform, 3D position, gain) evolve under fitness derived from proximity to a user-controlled listener. Pointer and DeviceOrientation move the AudioListener in 3D space. Projected 2D positions of the sonic agents drive living DOM cards that morph in style and layout. Sealed genome snapshots persist in IndexedDB. No continuous field simulation, no WebGPU compute kernel, no pure visual NCA/swarm; the mind thinks in spatialized sound and embodies in the DOM.

**Architecture**  
- Single self-contained index.html, offline after load, no external deps.  
- 6 sonic agents, each with OscillatorNode (sine/square/saw/triangle) → GainNode → PannerNode (HRTF).  
- AudioListener position controlled by pointer (x/y mapped to 3D) or DeviceOrientation (tilt as listener motion).  
- Local evolutionary step every ~30 frames: fitness = inverse distance to listener + spectral energy contribution; mutate/select genomes.  
- DOM cards (one per agent) positioned via absolute CSS from projected 3D→2D, styles driven by genome (hue from freq, scale from gain, border from waveform).  
- Seal button serializes all genomes + listener pos to IndexedDB key `verse-f587`.  
- Restore loads and restarts oscillators with sealed params.  
- Fallback: no Web Audio → visual-only position simulation; no orientation → mouse only.

**Expected outcome**  
Move the pointer (or tilt the device) and hear the swarm of tones orbit and approach the listener; cards on screen physically follow the sound sources and change appearance as genomes evolve. Seal and reload restores the exact sonic mind. Interactive spatial embodiment of a local evolutionary audio genome swarm that thinks through 3D sound and lives in the DOM.

**Mechanics**  
1. Resume AudioContext on first gesture.  
2. Create agents with random genomes; start oscillators.  
3. Each frame update listener from input; update panner positions; project to DOM.  
4. Periodically compute fitness, apply mutation/selection to genomes, update nodes.  
5. Seal/restore via IndexedDB.  

**Failure modes**  
- AudioContext suspended: require user gesture; visual fallback still runs.  
- No DeviceOrientation: pointer-only listener.  
- IndexedDB blocked: session memory only.  
- Autoplay policy: oscillators start only after gesture.  

**Building blocks unlocked for next**  
- Spatial audio PannerNode + genome as primary local AI substrate  
- 3D→2D projection for hybrid sonic-DOM embodiment  
- Listener-as-fitness attractor for evolutionary spatial minds  

**Files**  
drafts/F587-spatial-audio-genome-dom-mind/SPEC.md  
drafts/F587-spatial-audio-genome-dom-mind/index.html  

Void is now Verse everywhere.
