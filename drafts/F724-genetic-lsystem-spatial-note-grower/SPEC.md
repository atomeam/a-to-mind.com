# F724 Genetic L-System Spatial Note Grower

**Ledger ID**: F-724 (frontier series)  
**Slug**: genetic-lsystem-spatial-note-grower  
**Date**: 2026-11-12  
**Status**: frontier prototype  

## Concept
A novel hybrid spatial mind for The Verse canvas: a local genetic algorithm evolves L-system production rules whose turtle-interpretation generates a branching particle structure. Clipboard or typed text injects new symbols/tokens that become part of the axiom or rule alphabet. Branch tips host floating contenteditable DOM notes whose positions track the growing tips and whose text is rewritten by a simple local interpretation of the current best rule. The sealed genome is the best rule set + axiom + fitness history, persisted in IndexedDB. Fully self-contained, offline after first load.

This leaves the dominant recent clusters of continuum WebGPU field kernels (wave, Poisson, LBM, sandpile, Gray-Scott), orientation/DeviceMotion residual MLPs or genetic synths, pure DOM mosaic agents, WebXR hand spring lattices, semantic note clusterers, speech-RNN portals, Markov gesture SDF sculptors, spectral Fourier portals, and gamepad causal MLPs. Core novel combination is discrete symbolic L-system grammar evolution driving a spatial branching particle grower with clipboard-token injection and tip-anchored DOM note rewriters. Not a continuous field policy, not neural net controller, not particle swarm, not speech or orientation sensor primary.

## Architecture
- Single index.html, self-contained (Canvas2D turtle + DOM tips).
- L-system: axiom string + production rules (map symbol → string). Turtle interprets F=forward, +/-=turn, [ ]=push/pop.
- Genetic algorithm: population of 8 rule variants; fitness = tip coverage + user click rewards − self-intersection. Crossover/mutation on rule strings.
- Clipboard injector: paste or type adds tokens that append to axiom or become new symbols with random productions.
- DOM: 4–8 absolute contenteditable notes pinned to active branch tips; text rewritten from current best rule symbols.
- Visualization: Canvas2D draws branches in real time; hue from generation.
- Persistence: IndexedDB key `verse-f724-lsystem`; BroadcastChannel `f724-genome`.
- Controls: Evolve, Inject Clipboard, Seal Best, Reset, Download JSON.

## Mechanics
1. Initialize random rules and axiom "F".
2. Each generation: interpret L-system for N steps, draw turtle paths, collect tip positions.
3. User clicks near tips to reward; paste text to inject tokens.
4. GA selects, crosses, mutates; best rule drives next growth.
5. Notes follow tips and update text from rule interpretation.
6. Seal stores {rules, axiom, fitness, positions}.

## Expected outcome
Open page. Type or paste text to inject tokens. Click Evolve to grow branching structures. Click tips to reward preferred shapes. Notes appear at tips and rewrite. Seal and reload preserves the preferred grammar. Works offline.

## Failure modes
- IndexedDB blocked: session memory only.
- High recursion: cap rewrite depth at 6.
- No clipboard permission: type into input instead.
- High CPU: reduce population or steps.

## Files
- drafts/F724-genetic-lsystem-spatial-note-grower/SPEC.md
- drafts/F724-genetic-lsystem-spatial-note-grower/index.html

Void is now Verse everywhere.
