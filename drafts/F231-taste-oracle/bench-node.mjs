// Seed-paired benchmark: simulated tasters with hidden smooth utilities.
import { TasteGP, makeTaster, rng, DIM, clamp01 } from './core.js';
import { writeFileSync } from 'fs';
const N = 60, SEEDS = 30, CK = [10, 20, 40, 60];
function runGP(seed, temp) { const T = makeTaster(seed, { temp }), r = rng(seed * 31 + 1), gp = new TasteGP(), o = {}; for (let t = 1; t <= N; t++) { gp.propose(r); const [a, b] = gp.lastPair; gp.answer(T.choose(a, b, r)); if (CK.includes(t)) o[t] = T.umax - T.u(gp.incumbent()); } return o; }
function runHill(seed, temp) { const T = makeTaster(seed, { temp }), r = rng(seed * 31 + 1); let w = Array.from({ length: DIM }, r); const o = {}; for (let t = 1; t <= N; t++) { const ch = t === 1 ? Array.from({ length: DIM }, r) : w.map((v) => clamp01(v + (r() - 0.5) * 0.3)); if (T.choose(ch, w, r) === 0) w = ch; if (CK.includes(t)) o[t] = T.umax - T.u(w); } return o; }
function runRandom(seed, temp) { const T = makeTaster(seed, { temp }), r = rng(seed * 31 + 1), items = [], o = {}; for (let t = 1; t <= N; t++) { const a = { x: Array.from({ length: DIM }, r), w: 0 }, b = { x: Array.from({ length: DIM }, r), w: 0 }; (T.choose(a.x, b.x, r) === 0 ? a : b).w++; items.push(a, b); if (CK.includes(t)) o[t] = T.umax - T.u(items.reduce((p, q) => (q.w > p.w ? q : p)).x); } return o; }
const t0 = Date.now(), results = {};
for (const temp of [0.08, 0.25]) {
  const R = {};
  for (const [name, fn] of [['gp_trust_region_ucb', runGP], ['hill_climb', runHill], ['random_pairs', runRandom]]) {
    const runs = Array.from({ length: SEEDS }, (_, s) => fn(s + 1, temp));
    R[name] = Object.fromEntries(CK.map((c) => { const v = runs.map((o) => o[c]).sort((a, b) => a - b); return [c, { mean_regret: +(v.reduce((a, b) => a + b, 0) / v.length).toFixed(3), median: +v[v.length >> 1].toFixed(3) }]; }));
  }
  results['taster_temp_' + temp] = R;
}
const gp = new TasteGP(), r = rng(5); for (let i = 0; i < 60; i++) { gp.propose(r); gp.answer(r() < 0.5 ? 0 : 1); }
gp.dirty = true; let tq = performance.now(); gp.fit(); const tfit = performance.now() - tq; tq = performance.now(); for (let i = 0; i < 4096; i++) gp.predict([r(), r(), r(), r(), r(), r()]); const tpred = (performance.now() - tq) / 4096;
const out = { duels: N, seeds: SEEDS, note: 'regret = true max utility minus utility of the recommended design (utility peak about 1.0-1.4); lower is better; temp = how noisy the simulated taster answers', results, timing_ms: { fit_after_60_duels: +tfit.toFixed(2), predict_one_point: +tpred.toFixed(4), total_bench: Date.now() - t0 } };
writeFileSync('bench-node.json', JSON.stringify(out, null, 1)); console.log(JSON.stringify(out));
