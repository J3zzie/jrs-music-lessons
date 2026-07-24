/**
 * One-off tool: extracts the six instrument icon glyphs directly from
 * mockup.png (pixel-perfect match to the design), strips the black
 * background to transparency, and exports each as a WebP with alpha.
 *
 * This is NOT part of the generate:images pipeline (that script only
 * generates photographic imagery). Icons are cropped from the supplied
 * mockup, not AI-generated, so they match the mockup exactly.
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const mockupPath = path.join(root, "mockup.png");
const outDir = path.join(root, "public", "icons");

// Rough per-icon search windows within mockup.png (1024x1536), generous
// enough to contain the full glyph plus some margin, tight enough to
// exclude neighboring icons and the label text below.
const windows = {
  guitar: { left: 85, top: 535, width: 96, height: 80 },
  vocals: { left: 235, top: 535, width: 96, height: 80 },
  drums: { left: 385, top: 535, width: 96, height: 80 },
  piano: { left: 535, top: 535, width: 96, height: 80 },
  bass: { left: 685, top: 535, width: 96, height: 80 },
  other: { left: 835, top: 535, width: 96, height: 80 },
};

const OUT_SIZE = 160; // export square canvas (upscaled, crisp on retina)
const PADDING_FRAC = 0.14; // padding around the detected glyph bbox

function isBackground(r, g, b) {
  // near-black card background / border
  return r < 30 && g < 30 && b < 30;
}

async function findBBox(raw, info) {
  const { width, height, channels } = info;
  let minX = width,
    minY = height,
    maxX = -1,
    maxY = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = raw[idx],
        g = raw[idx + 1],
        b = raw[idx + 2];
      if (!isBackground(r, g, b)) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { minX, minY, maxX, maxY };
}

async function extractIcon(name, win) {
  const region = sharp(mockupPath).extract(win);
  const { data, info } = await region
    .clone()
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const bbox = await findBBox(data, info);
  if (bbox.maxX < 0) throw new Error(`No glyph pixels found for ${name}`);

  const glyphW = bbox.maxX - bbox.minX + 1;
  const glyphH = bbox.maxY - bbox.minY + 1;
  const side = Math.max(glyphW, glyphH);
  const pad = Math.round(side * PADDING_FRAC);

  const cx = win.left + bbox.minX + glyphW / 2;
  const cy = win.top + bbox.minY + glyphH / 2;
  const half = side / 2 + pad;

  const cropLeft = Math.max(0, Math.round(cx - half));
  const cropTop = Math.max(0, Math.round(cy - half));
  const cropSize = Math.round(half * 2);

  const cropped = sharp(mockupPath).extract({
    left: cropLeft,
    top: cropTop,
    width: cropSize,
    height: cropSize,
  });

  const { data: raw2, info: info2 } = await cropped
    .clone()
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // The source is glyph-color-over-a-dark-card-background (not pure black —
  // the mockup's card fill is ~rgb(16,15,16)), so edge pixels are alpha-
  // blended against that near-black, not true black: pixel ~= alpha *
  // glyphColor + noise. Un-premultiplying naively (alpha = max(r,g,b))
  // leaves every background pixel with a faint ~6% alpha instead of true
  // transparency — a visible haze once composited on any lighter surface.
  // A noise floor below which alpha snaps to 0 removes that haze while
  // remapping the remaining range keeps the real anti-aliased glyph edges
  // smooth.
  const FLOOR = 40;
  const out = Buffer.from(raw2);
  for (let i = 0; i < out.length; i += info2.channels) {
    const r = out[i],
      g = out[i + 1],
      b = out[i + 2];
    const rawAlpha = Math.max(r, g, b);
    if (rawAlpha <= FLOOR) {
      out[i] = 0;
      out[i + 1] = 0;
      out[i + 2] = 0;
      out[i + 3] = 0;
    } else {
      out[i] = Math.min(255, Math.round((r * 255) / rawAlpha));
      out[i + 1] = Math.min(255, Math.round((g * 255) / rawAlpha));
      out[i + 2] = Math.min(255, Math.round((b * 255) / rawAlpha));
      out[i + 3] = Math.round(((rawAlpha - FLOOR) * 255) / (255 - FLOOR));
    }
  }

  await sharp(out, {
    raw: { width: info2.width, height: info2.height, channels: info2.channels },
  })
    .resize(OUT_SIZE, OUT_SIZE, { fit: "contain", kernel: "lanczos3" })
    .webp({ lossless: true })
    .toFile(path.join(outDir, `${name}.webp`));

  console.log(`wrote ${name}.webp (glyph ${glyphW}x${glyphH} -> ${OUT_SIZE}x${OUT_SIZE})`);
}

async function main() {
  const fs = await import("node:fs");
  fs.mkdirSync(outDir, { recursive: true });
  for (const [name, win] of Object.entries(windows)) {
    await extractIcon(name, win);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
