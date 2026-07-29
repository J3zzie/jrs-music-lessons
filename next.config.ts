import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The default Next.js Image Optimization API (/_next/image) requires a
  // Node.js server (sharp) and is not available on Cloudflare's Workers
  // runtime, so optimized <Image> requests 404 there even though they work
  // fine locally under `next dev`/`next start`. Serving the original files
  // directly avoids that gap without changing how any image looks.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
