const { chromium } = require('playwright-core');
const U = 'http://localhost:8727/index.html';
(async () => {
  const b = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 1200, height: 800 } }); const errs = [];
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await p.goto(U); await p.waitForFunction(() => window.__f227 && window.__f227.st.finishedMs > 0, null, { timeout: 120000 });
  const snap = () => p.evaluate(() => { const s = window.__f227.st, w = s.wfc, used = new Set(w.tiles()); return { mode3d: window.__f227.mode3d, recall: +s.recall.toFixed(3), precision: +s.precision.toFixed(3), rules: s.gotRules, truth: s.truthRules, peels: s.rules.peels, decodeMs: Math.round(s.decodeMs), learnMs: Math.round(s.learnMs), done: w.done, repairs: w.repairs, failed: w.failed, dreamMs: Math.round(s.finishedMs), tilesUsed: [...used].sort() }; });
  const out = { fresh: await snap() };
  await p.waitForTimeout(300); await p.screenshot({ path: 'shot-done.png' });
  // mid-collapse shot
  await p.evaluate(() => window.__f227.dream(5)); await p.waitForTimeout(120); await p.screenshot({ path: 'shot-dreaming.png' });
  // paint: synthetic painter puts snow in the water
  await p.goto(U + '?auto=1'); await p.waitForFunction(() => window.__f227 && window.__f227.autoDone, null, { timeout: 60000 });
  await p.waitForTimeout(400); await p.waitForFunction(() => window.__f227.st.finishedMs > 0, null, { timeout: 60000 });
  out.afterPaint = await snap();
  // damage
  await p.evaluate(() => { const s = window.__f227.st; s.damage = 0.3; s.mind.setDamage(0.3); window.__f227.dream(9); });
  await p.waitForFunction(() => window.__f227.st.finishedMs > 0, null, { timeout: 60000 }); out.damaged30 = await snap();
  out.stats = await p.evaluate(() => document.getElementById('stats').innerText);
  out.errs = errs.slice(0, 5); console.log(JSON.stringify(out, null, 1)); await b.close();
})();
