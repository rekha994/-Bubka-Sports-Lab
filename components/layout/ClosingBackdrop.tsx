import Image from "next/image";
import type { ReactNode } from "react";

import { MediaScrim } from "@/components/ui/MediaScrim";
import { closingBackdrop } from "@/content/cta";

/**
 * Shared backdrop for the bottom of the home page: the video runs behind the
 * Final CTA *and* the footer, down to the last pixel of the page.
 *
 * That span is why the footer is composed here rather than in the root layout —
 * the two need a common positioned ancestor. Wrapping the footer in a plain
 * <div> keeps its `contentinfo` landmark intact, since that mapping depends on
 * the nearest sectioning ancestor being <body>.
 *
 * Min-heights match the design's media area: 390x882 on mobile (CTA 316 +
 * footer 566) and 1440x936 on desktop (588 + 348).
 */
export function ClosingBackdrop({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate min-h-[882px] overflow-hidden bg-ink lg:min-h-[936px]">
      {/* Graded still underneath: covers slow loads, unsupported formats and
          reduced-motion visitors without a flash of black. */}
      <Image
        src={closingBackdrop.image.src}
        alt={closingBackdrop.image.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      {closingBackdrop.video ? (
        <div aria-hidden className="absolute inset-0 -z-10 motion-reduce:hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="size-full object-cover"
          >
            <source src={closingBackdrop.video} type="video/mp4" />
          </video>
          <MediaScrim />
        </div>
      ) : null}

      {children}
    </div>
  );
}
