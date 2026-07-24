/**
 * Generates the six instrument icons for "What Do You Want to Play?" with
 * the OpenAI image generation API (gpt-image-1, background: "transparent").
 *
 * Unlike editing an existing raster asset (which re-renders the whole
 * image and can't guarantee pixel fidelity — see the logo background-removal
 * attempt), generating a fresh flat vector-style icon from a text prompt is
 * a task these models handle well, and transparent background is natively
 * supported by the generations endpoint.
 *
 * After generation, each icon is recolored so every visible pixel is exactly
 * the brand accent (--color-accent, #FE7E02) — the model's alpha/silhouette
 * is kept, but the RGB is forced to the exact hex rather than trusting the
 * model to match it, since generative models don't reliably hit an exact hex.
 *
 * Usage:
 *   node scripts/generate-icons.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "icons");

const ACCENT = { r: 0xfe, g: 0x7e, b: 0x02 }; // --color-accent
const OUT_SIZE = 160;

const STYLE =
  "Minimalist flat 2D vector icon, single uniform-width line-art outline, no fill, no shading, " +
  "no gradients, no drop shadow, no photorealism, no text, centered with even padding, " +
  "transparent background, clean simple geometric line work, modern web icon style, orange stroke color.";

const icons = [
  {
    file: "guitar",
    prompt: `A line-art icon of an electric guitar: headstock with visible tuning pegs at top, thin neck, double-cutaway body outline, a few string lines. ${STYLE}`,
  },
  {
    file: "vocals",
    prompt: `A line-art icon of a handheld microphone: capsule head with a grid/mesh pattern, tapered body, held at a slight upward angle. ${STYLE}`,
  },
  {
    file: "drums",
    prompt: `A line-art icon of a simplified drum kit: a hi-hat cymbal on the left, one or two mounted toms, a bass drum front and center, a cymbal at the top right. ${STYLE}`,
  },
  {
    file: "piano",
    prompt: `A line-art icon of a grand piano silhouette from a top-down/side angle, with a row of vertical key lines along the bottom edge. ${STYLE}`,
  },
  {
    file: "bass",
    prompt: `A line-art icon of an electric bass guitar: same family as an electric guitar icon but with a longer neck and body proportions so it reads distinctly as a bass. ${STYLE}`,
  },
  {
    file: "other",
    prompt: `A line-art icon of a circle outline containing a single eighth music note centered inside it. ${STYLE}`,
  },
];

function loadApiKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY;
  const envPath = path.join(root, ".env");
  if (fs.existsSync(envPath)) {
    const match = fs
      .readFileSync(envPath, "utf8")
      .match(/^OPENAI_API_KEY\s*=\s*(.+)$/m);
    if (match) return match[1].trim().replace(/^["']|["']$/g, "");
  }
  return null;
}

async function generate(apiKey, prompt) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
      quality: "high",
      background: "transparent",
      n: 1,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`OpenAI API error ${res.status}: ${body}`);
  }

  const data = await res.json();
  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) throw new Error("No image data in API response.");
  return Buffer.from(b64, "base64");
}

async function recolorToAccent(pngBuffer) {
  const { data, info } = await sharp(pngBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += info.channels) {
    // Keep the model's alpha (its silhouette/anti-aliasing), force RGB to
    // the exact brand accent color.
    out[i] = ACCENT.r;
    out[i + 1] = ACCENT.g;
    out[i + 2] = ACCENT.b;
  }

  return sharp(out, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .resize(OUT_SIZE, OUT_SIZE, { fit: "contain", kernel: "lanczos3" })
    .webp({ lossless: true })
    .toBuffer();
}

async function main() {
  const apiKey = loadApiKey();
  if (!apiKey) {
    console.error(
      "OPENAI_API_KEY not found. Add it to .env in the repo root or set it in the environment."
    );
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });

  for (const icon of icons) {
    console.log(`generate ${icon.file}.webp ...`);
    const started = Date.now();
    const raw = await generate(apiKey, icon.prompt);
    const recolored = await recolorToAccent(raw);
    fs.writeFileSync(path.join(outDir, `${icon.file}.webp`), recolored);
    console.log(
      `done     ${icon.file}.webp in ${((Date.now() - started) / 1000).toFixed(1)}s`
    );
  }

  console.log("All icons ready in public/icons/");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
