# F267 — Sealed MLP DOM Resource Arena

## Concept
Local multi-agent competition on a Canvas2D resource field with hybrid DOM agent cards. Each agent is controlled by a tiny MLP genome (4→6→2) that maps local observations — nearby resource density, average peer distance, pointer proximity, own energy — into movement forces. User pointer clicks plant decaying resource particles. Agents compete to collect energy; higher energy scales and styles their floating DOM card. Sealed genome transfer is entirely user-mediated (clipboard string export/import) plus IndexedDB persistence of sealed agents. Fully offline, single self-contained HTML, no external dependencies, no WebGPU, no WebXR, no DeviceOrientation primary path, no attention lattices, no NCA, no spectral residuals, no WebRTC.

## Branch away from
Dominant recent cluster F259–F266: WebGPU/WebXR physics arenas, orientation/gaze/hand as primary causal input, RNN/MLP+fluid/NCA/attention/spectral residual fields, and WebRTC multi-agent competitions.

## Capabilities
- Click canvas to plant resources.
- Agents autonomously move and compete via their local MLP controllers.
- Select an agent by clicking near it; seal its genome to IndexedDB.
- Export selected genome to clipboard as a compact base64 string.
- Import a genome string to spawn a new agent with that exact controller.
- On load, previously sealed genomes are restored as agents.
- Energy decay + resource collection creates selection pressure; visual DOM embodiment responds in real time.

## Architecture
- Main thread only (no Worker required for this scale).
- Canvas2D for resource particles and agent body markers.
- Absolute-positioned DOM cards for agent “physical UI” embodiment (scale/border driven by energy).
- Tiny MLP forward pass per agent per frame.
- IndexedDB object store for sealed genomes.
- Clipboard API for user-mediated sealed transfer (no network).

## Failure modes
- Very high agent count (>~30) may drop frame rate on low-end devices (current default is low).
- IndexedDB private-mode or quota → seals not persisted (still works in-session).
- Clipboard permission denied → export falls back to manual copy (status message).
- Invalid import string rejected with status feedback.

## Next expansion
Could add simple mutation/crossover on low-energy agents, optional DeviceOrientation global bias, or WebGPU particle path while keeping the sealed-MLP-DOM core. Could expose genome as a downloadable JSON file.

## V01D landing
Skill under `void-live-deploy/skills/sealed-mlp-dom-resource-arena/` or a frontier canvas page.  
Test: plant resources, observe competition and DOM scaling; seal/export, reload or import in a new tab, confirm persistence and transfer of behavior.
