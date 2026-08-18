import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
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
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,5,5,0.62)_0%,rgba(5,5,5,0.28)_36%,rgba(5,5,5,0.48)_72%,rgba(5,5,5,0.98)_100%)]"
        />

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
