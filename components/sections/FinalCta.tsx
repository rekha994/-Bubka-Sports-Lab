import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { finalCta } from "@/content/cta";

/**
 * "section · Final CTA" — 1440 x 588 desktop / 390 x 316 mobile.
 *
 * Larger headline than the other sections (146/126 vs 76/69) with tighter
 * 20px gaps, so it composes Eyebrow/Headline directly rather than reusing
 * SectionHeading's scale.
 *
 * Transparent by design: ClosingBackdrop supplies the video that runs behind
 * this section and the footer together.
 */
export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative py-10 lg:py-[100px]"
    >
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
