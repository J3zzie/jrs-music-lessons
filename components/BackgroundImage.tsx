import Image from "next/image";

/**
 * Renders a generated section background image (hero-guitarist.png,
 * drums-bg.png — both committed under public/images/).
 *
 * This previously gated rendering on `fs.existsSync(process.cwd() + ...)`
 * so the site would still build before `npm run generate:images` had been
 * run. That check used Node-only APIs, which don't exist in the Workers
 * runtime Cloudflare Pages/next-on-pages executes Next.js in — a real risk
 * for any route that isn't fully static — and served no purpose anymore
 * once the generated images became permanent, committed assets. Rendering
 * directly removes that edge-runtime incompatibility.
 */
export default function BackgroundImage({
  name,
  className = "booking-media",
}: {
  name: string;
  className?: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      <Image src={`/images/${name}`} alt="" fill sizes="100vw" />
    </div>
  );
}
