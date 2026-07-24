/**
 * Removes the flat black background from jrs-music-logo.png without
 * altering the artwork.
 *
 * An OpenAI gpt-image-1 edit (background: "transparent") was tried first
 * but re-renders the whole image — it softened crisp vector edges and left
 * a translucent orange haze instead of a clean cutout, which is not
 * acceptable for a brand asset that must stay pixel-identical.
 *
 * Since the source is simply orange-artwork-over-pure-black
 * (pixel = alpha * color), the background can be removed exactly by
 * un-premultiplying against black — the same technique used in
 * extract-icons.mjs. No AI involved, no risk of redrawing the logo.
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcPath = path.join(root, "jrs-music-logo.png");
const outPath = path.join(root, "public", "jrs-music-logo.png");
const faviconPath = path.join(root, "public", "favicon.png");

async function main() {
  const { data, info } = await sharp(srcPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += info.channels) {
    const r = out[i],
      g = out[i + 1],
      b = out[i + 2];
    const alpha = Math.max(r, g, b);
    if (alpha === 0) {
      out[i + 3] = 0;
    } else {
      out[i] = Math.min(255, Math.round((r * 255) / alpha));
      out[i + 1] = Math.min(255, Math.round((g * 255) / alpha));
      out[i + 2] = Math.min(255, Math.round((b * 255) / alpha));
      out[i + 3] = alpha;
    }
  }

  const pipeline = () =>
    sharp(out, {
      raw: { width: info.width, height: info.height, channels: info.channels },
    });

  await pipeline().png().toFile(outPath);
  console.log(`wrote ${outPath}`);

  await pipeline()
    .resize(64, 64, { kernel: "lanczos3" })
    .png()
    .toFile(faviconPath);
  console.log(`wrote ${faviconPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
