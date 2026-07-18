/**
 * Genera public/og-image.png (1200×630) — la tarjeta que se ve al compartir
 * la web en WhatsApp, X, LinkedIn, Slack, etc.
 *
 *   node scripts/generate-og.mjs
 *
 * Renderiza un HTML con Playwright y lo comprime con sharp.
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { readFileSync, statSync, unlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const logo = readFileSync(join(root, 'public', 'logo.png')).toString('base64');
const outPath = join(root, 'public', 'og-image.png');
const tmpPath = join(root, 'public', '.og-tmp.png');

/**
 * Descarga una fuente de Google Fonts y la devuelve como @font-face embebido.
 * Enlazar la hoja de estilos normal no basta: Playwright no llega a aplicarla
 * a tiempo y el render sale con la tipografía de reemplazo del sistema.
 */
async function embedFont(family, weights) {
  const CHROME_UA =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
  const api = `https://fonts.googleapis.com/css2?family=${family}:wght@${weights.join(';')}&display=swap`;

  // Con UA de Chrome la API devuelve woff2; con el UA de Node devolvería ttf.
  const css = await fetch(api, { headers: { 'User-Agent': CHROME_UA } }).then(r => r.text());

  // Solo los bloques latinos: evita traer cirílico/griego que no usamos.
  const blocks = css.split('@font-face').filter(b => b.includes('U+0000-00FF') || b.includes('U+0100-02AF'));

  let out = '';
  for (const b of blocks) {
    const url = b.match(/url\((https:[^)]+\.woff2)\)/)?.[1];
    const weight = b.match(/font-weight:\s*(\d+)/)?.[1] ?? '400';
    const style = b.includes('font-style: italic') ? 'italic' : 'normal';
    if (!url) continue;
    const buf = Buffer.from(await fetch(url, { headers: { 'User-Agent': CHROME_UA } }).then(r => r.arrayBuffer()));
    out += `@font-face{font-family:'${family.replace(/\+/g, ' ')}';font-style:${style};font-weight:${weight};src:url(data:font/woff2;base64,${buf.toString('base64')}) format('woff2');}`;
  }
  return out;
}

const fontCss =
  (await embedFont('Syne', [700, 800])) + (await embedFont('DM+Sans', [300, 400, 500]));

const html = `<!doctype html>
<html><head><meta charset="utf-8">
<style>
  ${fontCss}
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width:1200px; height:630px; overflow:hidden;
    background:
      radial-gradient(ellipse at 12% 8%, rgba(0,212,200,.16) 0%, transparent 52%),
      radial-gradient(ellipse at 92% 96%, rgba(0,181,170,.13) 0%, transparent 50%),
      #09101e;
    font-family:'DM Sans',sans-serif; color:#e8eaf6;
    display:flex; flex-direction:column; justify-content:center;
    padding:0 84px; position:relative;
  }
  /* Rejilla sutil de fondo, guiño al canvas de la web */
  .grid {
    position:absolute; inset:0;
    background-image:
      linear-gradient(rgba(255,255,255,.028) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.028) 1px, transparent 1px);
    background-size:64px 64px;
    mask-image: radial-gradient(ellipse at 50% 50%, #000 35%, transparent 78%);
  }
  .top { display:flex; align-items:center; gap:16px; margin-bottom:34px; position:relative; }
  .top img { width:56px; height:56px; }
  .brand { font-family:'Syne',sans-serif; font-weight:800; font-size:25px; letter-spacing:-.4px; }
  .brand span { color:#00d4c8; }
  /* Syne es considerablemente más ancha que una grotesca normal: a 78px
     el titular desbordaba a 4 líneas y se comía la cabecera y el pie. */
  h1 {
    font-family:'Syne',sans-serif; font-weight:800; font-size:54px;
    line-height:1.12; letter-spacing:-2px; position:relative; margin-bottom:24px;
  }
  h1 .a { color:#00d4c8; }
  h1 em { font-style:normal; color:transparent; -webkit-text-stroke:1.5px rgba(255,255,255,.45); }
  p.sub {
    font-size:23px; font-weight:300; color:#b8c2d0; line-height:1.5;
    max-width:800px; position:relative; margin-bottom:38px;
  }
  .foot { display:flex; align-items:center; gap:14px; position:relative; }
  .pill {
    display:inline-flex; align-items:center; gap:10px;
    background:#00d4c8; color:#09101e; border-radius:100px;
    padding:14px 28px; font-family:'Syne',sans-serif; font-weight:700; font-size:21px;
  }
  .chip {
    display:inline-flex; align-items:center; gap:9px;
    border:1px solid rgba(255,255,255,.13); border-radius:100px;
    padding:13px 24px; font-size:19px; color:#b8c2d0;
  }
  .chip b { color:#00d4c8; font-weight:500; }
</style></head>
<body>
  <div class="grid"></div>
  <div class="top">
    <img src="data:image/png;base64,${logo}" alt="">
    <div class="brand">Neulam<span>Core</span></div>
  </div>
  <h1>La app de hábitos<br>que construye tu <span class="a">disciplina</span><br><em>día a día.</em></h1>
  <p class="sub">Rachas, rangos y XP, recordatorios inteligentes y estadísticas reales de tu progreso.</p>
  <div class="foot">
    <div class="pill">
      <svg width="19" height="21" viewBox="0 0 512 512" fill="currentColor"><path d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49ZM345.8 174 89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32ZM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95ZM456.9 231.21l-72.36-39.83L318.16 256l66.38 64.62 72.36-39.83a28.34 28.34 0 0 0 0-49.58Z"/></svg>
      Gratis en Google Play
    </div>
    <div class="chip"><b>✓</b> Sin anuncios</div>
    <div class="chip"><b>✓</b> Funciona offline</div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

// Si la tipografía de marca no se aplicó, la imagen saldría en una fuente
// genérica y no lo notaríamos hasta verla compartida en redes.
const fontsOk = await page.evaluate(() => ({
  syne: document.fonts.check('800 78px Syne'),
  dmSans: document.fonts.check('300 26px "DM Sans"'),
}));
if (!fontsOk.syne || !fontsOk.dmSans) {
  await browser.close();
  throw new Error(`Tipografías no cargadas: ${JSON.stringify(fontsOk)}`);
}

// El contenido no puede salirse del lienzo de 1200×630 (las redes recortan sin avisar).
const overflow = await page.evaluate(() => {
  const d = document.documentElement, b = document.body;
  const wide = [...b.querySelectorAll('h1, p.sub, .foot, .top')]
    .filter(el => el.getBoundingClientRect().right > 1200 - 40)
    .map(el => `${el.tagName.toLowerCase()}.${el.className} → ${Math.round(el.getBoundingClientRect().right)}px`);
  return { h: Math.max(d.scrollHeight, b.scrollHeight), w: Math.max(d.scrollWidth, b.scrollWidth), wide };
});
if (overflow.h > 630 || overflow.w > 1200 || overflow.wide.length) {
  await browser.close();
  throw new Error(`El contenido desborda el lienzo: ${JSON.stringify(overflow)}`);
}

await page.screenshot({ path: tmpPath });
await browser.close();

await sharp(tmpPath).png({ compressionLevel: 9, palette: true, quality: 92, effort: 10 }).toFile(outPath);
unlinkSync(tmpPath);

console.log('✓ og-image.png 1200×630 —', (statSync(outPath).size / 1024).toFixed(1), 'KB');
