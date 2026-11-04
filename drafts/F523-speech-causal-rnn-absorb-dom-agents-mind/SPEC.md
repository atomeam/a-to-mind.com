# F523 Speech Causal RNN Absorb DOM Agents Mind

## Concept
Novel hybrid embodiment where live speech (Web Speech API) or typed keywords serve as the sole discrete causal input to a population of local tiny RNNs (one per agent). Each agent is an absolute-positioned DOM Verse card performing simple local physics (velocity integration + mutual repulsion). Speech transcripts map to a low-dimensional command vector that biases each RNN's hidden state; the RNN outputs a preferred velocity. Agents compete: on spatial overlap, the higher-fitness agent absorbs the loser's genome (RNN weights) with light mutation and seals the result. IndexedDB stores the best sealed genome; BroadcastChannel shares it across tabs. Pointer fallback injects synthetic command vectors. Pure local, no WebGPU, no continuous field, no orientation sensors, no hand tracking.

This deliberately leaves the recent WebGPU compute-kernel cluster (sandpile, embedding diffusion, vectorfield, wave membranes, Gray-Scott, spectral, quantum walks F512–F521) and the just-completed DeviceOrientation causal genome DOM agents (F522). Speech is an unused causal modality for embodied local models; absorption-on-contact genome transfer is a new sealed-competition mechanic.

## Implementation
- Single-file index.html, fully offline after load (speech recognition may use cloud on some browsers; typed fallback always works).
- 6–8 DOM agent cards with CSS transforms.
- SpeechRecognition (or text input) → keyword map (swarm/scatter/focus/orbit/left/right/up/down) → 4-dim command vector.
- Each agent: small RNN (hidden dim 8, input = command + relative-to-centroid + self-vel) updates hidden, outputs 2-dim accel bias.
- Physics: pos += vel; vel *= 0.9; vel += rnn_out * scale + repulsion.
- Fitness: alignment with command direction over window + low speed variance.
- On overlap (distance < threshold) higher fitness absorbs lower: copies weights + mutation, reseals hash.
- Seal button or auto on absorb: crypto.subtle SHA-256 of weights + fitness → IndexedDB + BroadcastChannel.
- Incoming genomes replace lowest-fitness local agent.
- Mouse drag sets temporary command vector for desktop testing.
- Progressive: status shows recognition state, agent count, last seal.

## Expected outcome
Interactive multi-agent mind: speaking (or typing) "focus" or "swarm" causes agents to react differently according to their genomes; stronger agents absorb weaker ones on contact; multi-tab genome transfer works; runnable offline with typed fallback; graceful when speech unavailable.

## Mechanics
- Command vector: simple keyword → one-hot-ish 4-float.
- RNN: h = tanh(W_h * h + W_x * x + b); out = W_o * h. Weights random init ~N(0,0.1).
- Physics as above; soft repulsion 1/r².
- Fitness rolling average of cosine(vel, command).
- Absorb: if dist < 40 && fitnessA > fitnessB * 1.1 then B.weights = mutate(A.weights); seal both.
- Seal: hash = SHA-256(JSON.stringify(weights)); store {hash, weights, fitness, ts}.

## Failure modes
- SpeechRecognition unsupported or permission denied → typed input only, status message.
- Recognition requires network on some engines → note in UI.
- BroadcastChannel blocked → local only.
- IndexedDB quota → unattested toast, still runs.
- Too many agents → cap at 8.
- Overlap thrashing → cooldown after absorb.

## Next building blocks
- Full WebXR hand pinch as additional causal input or to force absorb.
- OPFS persistence of full population.
- Tiny on-device speech embedding if available later.
- WebGPU for larger agent counts.

Dominant prior cluster branched from: WebGPU+local-MLP continuous-field simulations and DeviceOrientation genome DOM agents (F512–F522).

**Void is now Verse everywhere.**
