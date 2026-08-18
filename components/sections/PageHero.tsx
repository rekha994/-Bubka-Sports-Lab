import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { MediaScrim } from "@/components/ui/MediaScrim";
import type { Headline as HeadlineData } from "@/content/types";

/**
 * Banner for interior pages (legal, etc.) — 1440x560 on desktop, sitting
 * below the fixed nav rather than under it.
 *
 * Reuses the home page's h1 scale (128 / 110.08 / -1px) and eyebrow, so the
 * type system stays shared rather than forked per page.
 */
export function PageHero({
  eyebrow,
  headline,
  background,
  id = "page-heading",
}: {
  eyebrow: string;
  headline: HeadlineData;
  background: { src: string; alt: string };
  id?: string;
}) {
  return (
    <section aria-labelledby={id} className="bg-ink pt-16 lg:pt-[57px]">
      <div className="relative isolate flex h-[420px] items-center overflow-hidden lg:h-[560px]">
        <Image
          src={background.src}
          alt={background.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <MediaScrim className="-z-10" />

        <Container>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Headline
            as="h1"
            id={id}
            lines={headline}
            className="mt-4 text-[48px] leading-[50px] tracking-[-1px] md:text-[88px] md:leading-[80px] lg:mt-[73px] lg:text-[128px] lg:leading-[110.08px]"
          />
        </Container>
      </div>
    </section>
  );
}
