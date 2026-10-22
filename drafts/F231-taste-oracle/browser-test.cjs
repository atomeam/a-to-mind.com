// Headless check: page loads, WebGL2 renders, 40 simulated choices train the model.
const { chromium } = require(process.env.PW || 'playwright-core');
const http = require('http'), fs = require('fs'), path = require('path');
const dir = __dirname;
const srv = http.createServer((q, s) => { const f = path.join(dir, decodeURIComponent(q.url.split('?')[0]) === '/' ? 'index.html' : decodeURIComponent(q.url.split('?')[0])); fs.readFile(f, (e, d) => { if (e) { s.writeHead(404); s.end(); return; } s.writeHead(200, { 'content-type': f.endsWith('.js') ? 'text/javascript' : 'text/html' }); s.end(d); }); }).listen(8731);
(async () => {
  const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 1100, height: 640 } }); const errs = [];
  p.on('pageerror', (e) => errs.push(String(e))); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  await p.goto('http://localhost:8731/index.html'); await p.waitForTimeout(2500);
  await p.screenshot({ path: path.join(dir, 'shot-start.png') });
  const start = await p.evaluate(() => ({ hasGL: __f231.hasGL, frames: __f231.frames }));
  const res = await p.evaluate(async () => { __f231.reset(); const T = await __f231.autoTaster(40, 7); const inc = __f231.gp.incumbent(); return { choices: __f231.history.length, regret: +(T.umax - T.u(inc)).toFixed(3), umax: +T.umax.toFixed(3), points: __f231.gp.X.length, radius: +__f231.gp.radius.toFixed(3), frames: __f231.frames }; });
  await p.waitForTimeout(1500); await p.screenshot({ path: path.join(dir, 'shot-after-40.png') });
  const reload = await (async () => { await p.reload(); await p.waitForTimeout(1500); return p.evaluate(() => __f231.history.length); })();
  const out = { start, after40: res, persistedChoicesAfterReload: reload, errors: errs };
  fs.writeFileSync(path.join(dir, 'bench-browser.json'), JSON.stringify(out, null, 1)); console.log(JSON.stringify(out, null, 1));
  await b.close(); srv.close();
})().catch((e) => { console.error(e); process.exit(1); });
