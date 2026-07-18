/**
 * Genera los iconos optimizados a partir de public/logo.png (512×512 RGBA).
 *
 *   node scripts/generate-icons.mjs
 *
 * Solo hay que reejecutarlo si cambia el logo de origen.
 */
import sharp from 'sharp';
import { readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'public', 'logo.png');
const out = name => join(root, 'public', name);

const kb = p => (statSync(p).size / 1024).toFixed(1) + ' KB';

// Fondo de marca para los iconos que no admiten transparencia (Apple/Android).
const BRAND_BG = { r: 9, g: 16, b: 30, alpha: 1 };

const targets = [
  // Favicons con transparencia
  { name: 'favicon-16.png', size: 16, bg: null },
  { name: 'favicon-32.png', size: 32, bg: null },
  { name: 'favicon-48.png', size: 48, bg: null },
  // Iconos de instalación / PWA sobre fondo de marca
  { name: 'apple-touch-icon.png', size: 180, bg: BRAND_BG, pad: 0.14 },
  { name: 'icon-192.png', size: 192, bg: BRAND_BG, pad: 0.12 },
  { name: 'icon-512.png', size: 512, bg: BRAND_BG, pad: 0.12 },
];

console.log('origen: logo.png', kb(src));

for (const t of targets) {
  let img;

  if (t.pad) {
    // Deja aire alrededor del logo: en iOS/Android el icono se recorta y el
    // logo a sangre queda cortado por las esquinas redondeadas.
    const inner = Math.round(t.size * (1 - t.pad * 2));
    const margin = Math.round((t.size - inner) / 2);
    const resized = await sharp(src).resize(inner, inner, { fit: 'contain' }).toBuffer();

    img = sharp({
      create: { width: t.size, height: t.size, channels: 4, background: t.bg },
    }).composite([{ input: resized, top: margin, left: margin }]);
  } else {
    img = sharp(src).resize(t.size, t.size, {
      fit: 'contain',
      background: t.bg ?? { r: 0, g: 0, b: 0, alpha: 0 },
    });
    if (t.bg) img = img.flatten({ background: t.bg });
  }

  await img
    .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
    .toFile(out(t.name));

  console.log('  ✓', t.name.padEnd(22), kb(out(t.name)));
}

// logo.png y favicon.png se reoptimizan en sitio: mismo nombre, mismas
// dimensiones y misma URL pública (por si algo externo los enlaza), pero
// una fracción del peso.
const { writeFileSync, existsSync } = await import('node:fs');

for (const name of ['logo.png', 'favicon.png']) {
  if (!existsSync(out(name))) continue;
  const before = kb(out(name));
  const optimized = await sharp(readFileSync(out(name)))
    .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
    .toBuffer();
  writeFileSync(out(name), optimized);
  console.log('  ✓', `${name} (reoptimizado)`.padEnd(22), `${before} → ${kb(out(name))}`);
}
