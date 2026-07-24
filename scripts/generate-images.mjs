/**
 * Generates the site's photographic imagery with the OpenAI Images API.
 *
 * Usage:
 *   node scripts/generate-images.mjs           # generate missing images
 *   node scripts/generate-images.mjs --force   # regenerate everything
 *
 * Reads OPENAI_API_KEY from .env in the repo root. Never generates the
 * brand logo — that is a supplied asset (public/jrs-music-logo.png).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images");
const force = process.argv.includes("--force");

const STYLE =
  "Dark, moody, photorealistic. Pure black background with warm orange stage-light rim lighting. " +
  "High contrast, cinematic, professional photography. No text, no logos, no watermarks.";

const images = [
  {
    file: "hero-guitarist.png",
    size: "1536x1024",
    prompt:
      `Close-up of a musician playing an electric guitar on a dark stage, framed from the chest down with hands on the fretboard and strings. ` +
      `Dramatic warm orange side lighting from the right, subject positioned on the right half of the frame, ` +
      `left half fading completely to solid black for text overlay. Faint atmospheric haze. ${STYLE}`,
  },
  {
    file: "drums-bg.png",
    size: "1536x1024",
    prompt:
      `Wide shot of a full drum kit on a dark concert stage, heavily shadowed, cymbals and drum rims catching faint warm orange light. ` +
      `Very dark overall exposure so text can be overlaid on top, subtle stage haze. ${STYLE}`,
  },
  {
    file: "og-image.png",
    size: "1536x1024",
    prompt:
      `Moody concert stage scene with an electric guitar leaning against an amplifier, warm orange spotlights cutting through haze, ` +
      `generous dark negative space in the center-left for a logo overlay. ${STYLE}`,
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

async function generate(apiKey, { file, prompt, size }) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size,
      quality: "high",
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
  fs.writeFileSync(path.join(outDir, file), Buffer.from(b64, "base64"));
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

  for (const image of images) {
    const target = path.join(outDir, image.file);
    if (!force && fs.existsSync(target)) {
      console.log(`skip     ${image.file} (exists, use --force to regenerate)`);
      continue;
    }
    console.log(`generate ${image.file} (${image.size}) ...`);
    const started = Date.now();
    await generate(apiKey, image);
    console.log(
      `done     ${image.file} in ${((Date.now() - started) / 1000).toFixed(1)}s`
    );
  }

  console.log("All images ready in public/images/");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
