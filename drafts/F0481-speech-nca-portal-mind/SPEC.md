# F0481 Speech-Seeded WebGPU NCA Portal Mind

## Concept
Web Speech Recognition (or keyboard fallback) produces a transcript that is locally hashed into a seed vector. The seed is injected as a "portal nucleus" into a WebGPU-accelerated Neural Cellular Automaton (NCA) running on a 128×128 grid. Multiple portals grow simultaneously; each portal has its own local rule parameters derived from the seed. Users click a portal region to "capture" a 16×16 pattern fragment (hashed and sealed). Captured fragments can be transferred to another portal by click-drag, mutating its rule set. Fitness is measured by pattern complexity (local entropy). State (grid, portals, captures, rules) seals to IndexedDB for offline restore. CSS chrome morphs with global entropy and active portal count. Fully offline after load; speech is the primary causal seed input.

## Novelty
Leaves the recent clusters of orientation-MLP Voronoi territories (F480), motion-residual crystal lattices (F479), speech-vector spatial recall (F478), WebXR gaze Hebbian portals (F477), and mic-spectral policy morphs (F476). Core novel combination is live speech transcript hashed into multi-portal NCA seeds, with click-capture of sealed pattern fragments that transfer and mutate competing portal rules. Not pure spectral residual fitness, not orientation wind, not Hebbian association transfer on collision, not residual crystal growth, not Voronoi ownership.

## Architecture
- Single index.html (progressive enhancement, offline-capable)
- Speech: webkitSpeechRecognition or SpeechRecognition; keyboard input fallback
- Seed: simple hash of transcript → 8-float vector → NCA injection
- NCA: WebGPU compute shader (or Canvas2D fallback) with per-portal rule bias; 128² grid
- Capture: mouse down/up extracts fragment, SHA-like hash, stores in array
- Transfer: drag fragment onto portal mutates its parameters
- IndexedDB: seal/restore full state
- CSS custom properties from entropy / portal count for chrome morph
- No external dependencies

## Expected Outcome
Speak a phrase or type it: a new portal nucleus appears and grows unique patterns. Click to capture fragments; drag them between portals to transfer rules. Seal restores the living multi-portal NCA field. Works offline; graceful without speech (type seeds).

## Failure Modes
- SpeechRecognition unavailable or permission denied (keyboard fallback).
- WebGPU unavailable (Canvas2D NCA fallback).
- IndexedDB private mode or quota.
- High portal count (>8) throttles compute.

## Interactivity
Speak or type a seed phrase to nucleate a portal. Click-drag on canvas to capture a pattern fragment. Drag the fragment onto another portal to transfer/mutate. S to seal, R to restore. Click empty space to focus a portal.

## Building Blocks
Larger WebGPU NCA populations, WebXR gaze as capture cue, OPFS for full grid history, multi-user fragment exchange.

## V01D Landing
skills/mini/speech-nca-portal; testable via speech/type → portal growth, capture+transfer → rule mutation, seal → IDB restore of portals + grid.

## Files
drafts/F0481-speech-nca-portal-mind/SPEC.md
drafts/F0481-speech-nca-portal-mind/index.html
