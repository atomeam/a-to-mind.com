# F277-predictive-force-injection-mind

## Concept
Novel combination: A WebGPU (Canvas2D fallback) particle field whose forces are continuously steered by a local online linear predictor (LMS in a Web Worker) of the user's pointer trajectory. The predicted next position becomes a dynamic attractor injected into the simulation, creating a visible "echo" of anticipated motion. Global prediction residual and field coherence then morph the surrounding Void chrome (border, hue, status seal pill) in real time. This closes a loop of local predictive AI → spatial embodiment → interface response without any external model or network.

Expands the Void canvas with an anticipatory spatial mind that physically changes the frame around the living field.

## Architecture
- Single self-contained HTML file.
- Canvas: WebGPU compute path preferred for particle update; falls back to Canvas2D requestAnimationFrame sim.
- Web Worker: maintains short history of pointer velocity, runs simple online LMS predictor, returns predicted offset + residual each tick via postMessage.
- Main thread injects the predicted point as an attractor force in the particle update.
- Reduced stats (mean residual, particle density near attractor, coherence) drive CSS custom properties that animate border-width, hue-rotate, and a floating status pill ("echoing" / "sealed" / "drifting").
- Optional: pointer lock or touch for continuous input; click commits a temporary ghost attractor.

## Expected outcome
Runnable interactive prototype demonstrating closed-loop local predictive spatial AI that alters both the particle field and the UI chrome. Failure modes: no WebGPU → 2D fallback still works; high particle count throttled; worker unavailable → pure reactive (no prediction).

## Mechanics
- Move pointer: particles are pulled toward both the cursor and the predicted future point (visualized as a faint ghost).
- Prediction residual modulates UI intensity (lower residual = stronger morph, "confident echo").
- Click: locks the current prediction as a fixed attractor for ~3s and flashes a seal indicator.
- Global "mood" of the field (coherence) changes the outer frame color and thickness.

## Novelty vs prior
Not a pure trajectory memory field, not residual-only flock, not RNN deposit, not causal attention cards. Unique: continuous force injection of an online local predictor's output into a GPU/CPU particle system, with residual directly morphing Void chrome in a tight anticipatory loop. Building block for later multi-step predictive worlds or sealed prediction receipts.
