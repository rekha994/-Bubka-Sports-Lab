import Image from "next/image";

import { site } from "@/content/site";

/**
 * Brand lockup — 106 x 21 in Figma.
 *
 * Pass `alt=""` when the surrounding element already carries an accessible
 * name (e.g. the header's home link), so the brand isn't announced twice.
 */
export function Logo({
  alt = site.name,
  className,
}: {
  alt?: string;
  className?: string;
}) {
  return (
    <Image
      src={site.logo.src}
      alt={alt}
      width={site.logo.width}
      height={site.logo.height}
      priority
      className={className}
    />
  );
}
