// One-off asset optimizer. Converts the heavy animated GIFs and large PNGs in
// public/projects to WebP using the already-installed `sharp` dependency
// (no ffmpeg/cwebp required). Run with: node scripts/optimize-assets.mjs
import sharp from "sharp";
import { stat } from "node:fs/promises";
import path from "node:path";

const dir = path.join(process.cwd(), "public", "projects");

const targets = [
  { file: "fractol.gif", animated: true, quality: 70 },
  // 1280x720 / 331 frames — resize + lossy or WebP ends up larger than the GIF.
  { file: "transcendence.gif", animated: true, quality: 50, width: 640 },
  { file: "aouhadou.png", animated: false, quality: 70 },
  { file: "snapLink.png", animated: false, quality: 70 },
  { file: "pricePulse.png", animated: false, quality: 70 },
];

const sizeKB = async (p) => Math.round((await stat(p)).size / 1024);

for (const { file, animated, quality, width } of targets) {
  const src = path.join(dir, file);
  const out = path.join(dir, file.replace(/\.(gif|png)$/i, ".webp"));
  const before = await sizeKB(src);
  let pipeline = sharp(src, { animated, limitInputPixels: false });
  if (width) pipeline = pipeline.resize({ width });
  await pipeline.webp({ quality, effort: 5 }).toFile(out);
  const after = await sizeKB(out);
  console.log(`${file}: ${before}KB -> ${path.basename(out)} ${after}KB`);
}
