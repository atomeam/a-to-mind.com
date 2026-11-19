# F821-speech-driven-spatial-flowchart

**Plain name:** Voice flowchart maker  
**Job:** Speak commands or phrases to create labeled process boxes on a spatial board, drag them or use voice to position and connect with arrows, then download the diagram as PNG or export/import JSON. Last diagram persists on the device.

**Ledger ID:** F-821  
**Slug:** speech-driven-spatial-flowchart  
**Date:** 2026-11-18  
**Branch from:** Recent cluster of multitouch MLP SVG filters (F819), WebGPU radiosity causal MLPs (F818), online particle MLP swarms (F816), content-attention note forces (F813), WebXR hand reservoirs (F814), sealed-genome arenas, and pure manual flowchart (F820).

**Concept**  
A practical, interactive spatial diagram tool for The Verse canvas that treats spoken language as the primary causal input. The Web Speech Recognition API captures continuous or command-style phrases ("add login step", "connect to checkout", "move left"). A tiny local MLP (or simple rule + embedding proxy) maps short command history + keyword features to suggested connection targets or layout nudges. User can still drag freely; voice provides rapid authoring. Fully single-file, offline-capable after initial load (speech may fall back to typed input if unavailable). Pointer and touch always work.

**Novelty**  
Leaves the dominant recent cluster of continuous kinematic/sensor (orientation, multitouch, pointer velocity) inputs driving local MLPs/RNNs that modulate physics fields, SVG filters, radiosity, particles, or softbody DOM. Also departs from pure attention-force layouts and sealed-genome competitions. Core novel combination is discrete speech commands as causal driver for a local tiny model that assists a useful, persistent spatial flowchart/process diagram tool people return to. Not a simulation substrate, not continuum or agent physics, not sealed genomes as primary, not pure manual drag.

**Architecture**  
- Single index.html (progressive enhancement).  
- SpeechRecognition (webkit prefix fallback); continuous mode with interim results; command parser for "add <label>", "connect <from> to <to>", "delete", "export".  
- Absolute-positioned editable box divs + SVG overlay for arrows.  
- Local MLP proxy: 8-dim keyword hash + last-command one-hot → suggested target index or layout offset (simple JS, Hebbian-style update on user correction).  
- Persistence: localStorage `verse-f821-flowchart` (boxes + edges + model weights).  
- Export: JSON download; canvas snapshot for PNG.  
- Seal: freezes current model weights.  

**Expected outcome**  
Open page, click "Start voice" (or type), speak "add review code", "add merge", "connect review to merge". Boxes appear, connections draw. Drag to arrange. Download PNG/JSON. Reload restores. Works on desktop; on mobile speech requires user gesture and may need network for recognition.

**Failure modes**  
- No SpeechRecognition support: falls back to typed input box with same parser.  
- Permission denied: typed mode.  
- Recognition errors: user can edit labels manually.  
- Many boxes: still functional; SVG scales.

**Building blocks**  
Speech-command parser + local suggestion MLP for future voice-driven spatial tools on Verse. Reusable diagram export (PNG + JSON).

Void is now Verse everywhere.

**Files**  
drafts/F821-speech-driven-spatial-flowchart/SPEC.md  
drafts/F821-speech-driven-spatial-flowchart/index.html  
