# F491-persistent-broadcast-sealed-genome-dom-swarm-mind

**Ledger ID**: F-491  
**Slug**: persistent-broadcast-sealed-genome-dom-swarm-mind  
**Date**: 2026-11-01  
**Branch from**: Recent cluster of orientation/reservoir RNN DOM physical auctions (F486/F488), attention-cluster DOM (F487), mic-spectral reservoir CSS3D (F489), causal Bayesian lattice (F490). Explicitly leaves lattice/attention/spectral/orientation/DOM-auction axes.

## Concept
Persistent multi-tab sealed genome auction for a swarm of local tiny MLPs. Agents compete for a shared resource field. User seals a genome (weight vector hash + copy) via click; sealed genomes can be transferred to weaker agents. Population and best seals persist in IndexedDB. BroadcastChannel syncs sealed transfers and field state across same-origin tabs. Each agent is a hybrid embodiment: a CSS 3D-transformed DOM card whose position/rotation is driven by its MLP output (inputs: local resource, neighbor density, time). Novel combination of sealed genome transfer, multi-tab BroadcastChannel shared field, IndexedDB persistence, and local MLP controlling physical CSS UI elements — none of these together previously built.

## Why novel
- Not a pure lattice, NCA, spectral residual, pointer field, softbody, orientation RNN, k-means, or attention cluster.
- Genome transfer is sealed (user gesture required) and multi-tab shared via BroadcastChannel (under-explored architecture).
- Local tiny MLP directly morphs CSS 3D physical embodiments of the agents themselves.
- Offline-capable via IndexedDB; multi-tab via BroadcastChannel (no server).

## Prototype
Single self-contained `index.html`. Interactive offline. Open multiple tabs to see sealed genome transfer sync. Click an agent to seal its genome; click a weak one to transfer.

## Failure modes
- BroadcastChannel only same-origin, same browser profile.
- IndexedDB quota or private mode may drop persistence.
- MLP is tiny (random init + simple update); no deep training.
- CSS 3D performance on low-end devices.

## Building blocks for next
BroadcastChannel + IndexedDB sealed state; local MLP → CSS transform control; multi-agent competition with user-sealed transfer.

## V01D landing
skills/mini/persistent-broadcast-sealed-genome-dom-swarm; testable via multi-tab seal/transfer + IDB restore.
