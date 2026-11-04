# F536: WebGPU Quantum-Inspired Residual Walk Oracle Mind

## Concept
A novel combination never previously attempted in the Verse frontier: discrete-time quantum-walk inspired agents simulated on WebGPU compute, steered by a pure local JS multi-layer perceptron "oracle" that reads pointer velocity history and optional live microphone spectral centroid. Agents deposit residual probability density into a persistent spatial memory map (IndexedDB). The residual field is queried on hover to recall local walk history, and the canvas chrome (border, title) physically morphs intensity based on residual entropy — the UI changes in response to the agent's accumulated reasoning/memory.

This is not a particle flock, not a lattice gas, not a pure MLP-DOM controller, not an orientation-driven field. It is a local-AI-guided quantum-walk residual memory palace for the Verse canvas.

## Architecture
- **WebGPU compute**: Ping-pong storage buffers of agents. Each agent holds position, complex amplitude pair (approximated as two phases), velocity bias. Compute shader advances a simplified DTQW step (coin + shift) modulated by oracle bias injected via uniform.
- **Local AI oracle**: Small MLP (2 hidden layers, ~32 units) in main-thread JS. Inputs: recent pointer Δx/Δy, optional audio spectral centroid from AnalyserNode. Output: 2D bias vector + coin bias. Trained online with a tiny local reward = residual concentration near pointer (Hebbian-like).
- **Residual map**: 256×256 float density written by agents, persisted to IndexedDB on idle, loaded on start. Hover samples the map and displays residual strength.
- **UI morph**: Border-glow and title-letter-spacing scale with total residual entropy (Shannon over the density).
- **Fallback**: Canvas2D particle approximation if WebGPU unavailable.

## Expected outcome
Users move the pointer (or speak) and watch photon-like agents perform biased quantum walks that leave glowing residual trails. The trails persist across reloads. Hovering a bright region recalls "memory density". The page chrome subtly breathes with the mind's accumulated entropy. Builds a new frontier block: residual quantum-walk memory that later experiments can query or extend with WebXR hands or WebRTC sharing.

## Mechanics / interaction
- Pointer move → oracle bias → walk direction.
- Optional mic (user gesture) → spectral centroid modulates coin bias.
- Click deposits a strong residual seed.
- Residual map auto-saves every 30 s.
- Status bar shows WebGPU status, residual entropy, oracle loss.

## Failure modes
- WebGPU unavailable → Canvas2D fallback (still interactive).
- Mic permission denied → pointer-only oracle.
- IndexedDB quota → in-memory only.
- Compute shader too heavy on low-end → reduce agent count.

## Novelty check
Cross-referenced against F- drafts through F535: no prior combination of DTQW-style walk + local MLP oracle + IndexedDB residual spatial memory + entropy-driven UI morph. Distinct from F258 volumetric palace, F275 acoustic residual, F535 electrostatic probes, F534 attention particle policy.
