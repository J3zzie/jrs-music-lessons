import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

/**
 * Renders a generated image as a section background when it exists on disk,
 * so the site still builds and looks intentional before
 * `npm run generate:images` has been run.
 */
export default function BackgroundImage({
  name,
  className = "booking-media",
}: {
  name: string;
  className?: string;
}) {
  const exists = fs.existsSync(
    path.join(process.cwd(), "public", "images", name)
  );
  if (!exists) {
    return <div className={className} aria-hidden="true" />;
  }
  return (
    <div className={className} aria-hidden="true">
      <Image src={`/images/${name}`} alt="" fill sizes="100vw" />
    </div>
  );
}
