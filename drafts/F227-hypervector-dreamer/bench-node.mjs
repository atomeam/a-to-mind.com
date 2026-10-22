import { TileMind, exactRules, WFC, violations, sampleMap, TILES } from './core.js';
const ZT = +(process.env.ZT || 4);
const n = TILES.length, SW = 24, SH = 24, out = { sample: `${SW}x${SH}`, recovery: [], wfc: [] };
const pr = (allowed, ex, cnt, minC) => { let tp = 0, fp = 0, fn = 0; for (let d = 0; d < 4; d++) for (let a = 0; a < n; a++) for (let b = 0; b < n; b++) { const got = !!(allowed[d][a] & (1 << b)), c = cnt[d][a * n + b]; if (got && c > 0) tp++; else if (got) fp++; else if (c >= minC) fn++; } return { tp, fp, fn }; };
const maps = [3, 11, 19, 27, 35].map(s => sampleMap(SW, SH, s));
for (const D of [512, 2048, 8192]) for (const mode of ['acc', 'bin']) for (const p of [0, 0.2, 0.35, 0.45]) {
  let TP = 0, FP = 0, FN = 0, FN2 = 0, P = 0, P2 = 0;
  for (const map of maps) {
    const m = new TileMind(n, D, 7); m.learnMap(map, SW, SH); m.setDamage(p);
    const { allowed } = m.rules(mode, ZT), { count } = exactRules(map, SW, SH, n);
    const r1 = pr(allowed, null, count, 1), r2 = pr(allowed, null, count, 2);
    TP += r1.tp; FP += r1.fp; FN += r1.fn; FN2 += r2.fn;
    for (let d = 0; d < 4; d++) for (const c of count[d]) { if (c > 0) P++; if (c >= 2) P2++; }
  }
  out.recovery.push({ D, mode, damage: p, precision: +(TP / Math.max(1, TP + FP)).toFixed(3), recall_all: +(1 - FN / P).toFixed(3), recall_seen2plus: +(1 - FN2 / P2).toFixed(3) });
}
const W = 40, H = 40;
for (const cfg of [{ name: 'exact counted rules', src: 'exact' }, { name: 'HDC acc D=8192', D: 8192, mode: 'acc', p: 0 }, { name: 'HDC acc D=8192 35% damaged', D: 8192, mode: 'acc', p: 0.35 }, { name: 'HDC bin D=8192', D: 8192, mode: 'bin', p: 0 }, { name: 'HDC acc D=512', D: 512, mode: 'acc', p: 0 }]) {
  let fail = 0, rep = 0, vio = 0, tot = 0, ms = 0, runs = 0;
  for (const [mi, map] of maps.entries()) {
    const ex = exactRules(map, SW, SH, n); let allowed;
    const freq = new Float64Array(n); for (const t of map) freq[t]++;
    if (cfg.src === 'exact') allowed = ex.allowed; else { const m = new TileMind(n, cfg.D, 7); m.learnMap(map, SW, SH); m.setDamage(cfg.p); allowed = m.rules(cfg.mode, ZT).allowed; }
    for (let s = 1; s <= 8; s++) { const t0 = performance.now(); const w = new WFC(W, H, n, allowed, freq, s * 101 + mi).run(); ms += performance.now() - t0; runs++; if (w.failed) fail++; rep += w.repairs; const v = violations(w.tiles(), W, H, ex.allowed); vio += v.bad; tot += v.tot; }
  }
  out.wfc.push({ rules: cfg.name, runs, failed: fail, repairs_per_run: +(rep / runs).toFixed(2), violation_rate_vs_exact: +(vio / tot).toFixed(4), ms_per_40x40: +(ms / runs).toFixed(1) });
}
const t0 = performance.now(); const m = new TileMind(n, 8192, 7); m.learnMap(maps[0], SW, SH); const tl = performance.now() - t0;
const t1 = performance.now(); m.rules('acc'); const tr = performance.now() - t1;
const t2 = performance.now(); m.edit(maps[0], SW, SH, 5, 5, 6); const te = performance.now() - t2;
out.timing_ms = { learn_24x24_D8192: +tl.toFixed(1), rules_D8192: +tr.toFixed(1), one_cell_edit: +te.toFixed(2) };
console.log(JSON.stringify(out, null, 1));
