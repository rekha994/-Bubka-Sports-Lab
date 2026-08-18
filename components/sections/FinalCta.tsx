import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { finalCta } from "@/content/cta";

/**
 * "section · Final CTA" — 1440 x 588 desktop / 390 x 316 mobile.
 *
 * Larger headline than the other sections (146/126 vs 80/69) with tighter
 * 20px gaps, so it composes Eyebrow/Headline directly rather than reusing
 * SectionHeading's scale.
 */
export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden bg-ink py-10 lg:py-[100px]"
    >
      <Image
        src={finalCta.background.src}
        alt={finalCta.background.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* Mobile-only scrim, mirroring the design: the desktop plate is already
          graded, but the mobile frame adds a scrim for legibility. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.8)_100%)] lg:hidden"
      />

      <Container>
        <Eyebrow>{finalCta.eyebrow}</Eyebrow>

        <Headline
          id="final-cta-heading"
          lines={finalCta.headline}
          className="mt-5 text-[48px] leading-[50px] tracking-[-1px] md:text-[100px] md:leading-[92px] lg:text-[146px] lg:leading-[126px]"
        />

        <p className="mt-5 max-w-[350px] text-[16px] leading-[26px] text-body md:max-w-[480px]">
          {finalCta.subtitle}
        </p>
      </Container>
    </section>
  );
}
