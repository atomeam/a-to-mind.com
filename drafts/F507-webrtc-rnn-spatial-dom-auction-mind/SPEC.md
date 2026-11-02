# F507-webrtc-rnn-spatial-dom-auction-mind

**Ledger ID**: F-507  
**Slug**: webrtc-rnn-spatial-dom-auction-mind  
**Date**: 2026-11-02  
**Branch from**: Recent dominant cluster of WebGPU compute kernels + local MLP controlling living DOM swarms, particles, metabolic systems, fluids, implicit surfaces, Lennard-Jones, Kuramoto, Poisson (F498–F505) and tensegrity constraint RNN + BroadcastChannel (F506). Explicitly leaves WebGPU, MLP, particles, fluids, surfaces, softbody, NCA, spectral, attention lattices, residual predictors, orientation-only RNN, and pure BroadcastChannel transfer.

**Concept**  
A free 2D spatial field of hybrid Verse DOM cards whose positions, scales, and CSS transforms are continuously driven by a population of local tiny causal RNNs. Each RNN takes a history of DeviceMotion/DeviceOrientation (acceleration/tilt as causal “wind”) plus pointer residual as input and outputs force deltas that move its owned cards. Agents compete on a fitness that rewards both spatial stability under tilt and pointer engagement time. The winner can seal its genome (RNN weights + rest params) and offer it via a serverless WebRTC DataChannel (manual SDP offer/answer paste for true peer-to-peer, no signaling server). Receiving peer can accept the sealed genome into its auction, mutate, and compete. Full state persists in IndexedDB. Fully self-contained single-file HTML, offline-capable after first load (WebRTC is optional additive). Pointer and device motion are the primary causal inputs.

**Novelty**  
Core novel combination is DeviceMotion-causal tiny RNN control of free-floating hybrid DOM spatial cards, combined with multi-agent sealed-genome auction transfer over true WebRTC DataChannel (manual SDP architecture never previously used in the ledger). Not WebGPU kernels, not MLP living swarms, not fluid/Poisson/Kuramoto/implicit surfaces, not tensegrity constraint solving, not BroadcastChannel-only, not attention or residual predictors.

**Architecture**  
- Single index.html (progressive enhancement, offline-capable)  
- Pure DOM absolute-positioned cards driven by per-agent RNN force outputs  
- Tiny causal RNN (pure JS, 6→8→4 hidden recurrent) with genome = weights  
- DeviceMotion + DeviceOrientation as causal input stream  
- Multi-agent competition + sealed genome auction  
- WebRTC RTCDataChannel with manual SDP copy/paste for peer transfer  
- IndexedDB for genomes and field snapshot  
- BroadcastChannel fallback for same-origin multi-tab  

**Interactive**  
- Tilt/accelerate device to drive RNN forces  
- Pointer/touch: drag cards, seed engagement, select agent  
- Agents panel: switch active, view fitness, seal & offer genome  
- WebRTC panel: generate offer, paste remote SDP, send/receive sealed genome  
- Persistence: reload restores last genomes and card poses  

**Failure modes**  
- DeviceMotion permission denied or unsupported → falls back to pointer-only + simulated tilt  
- WebRTC ICE failure or no STUN → channel stays closed; BroadcastChannel still works for tabs  
- RNN numerical instability under extreme tilt → clamped outputs  

**Next building blocks**  
Sealed WebRTC genome auction + DeviceMotion-causal RNN DOM control can be combined with future WebGPU kernels or WebXR hand tracking.  
