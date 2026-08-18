import Image from "next/image";

import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TestimonialSlide } from "@/components/ui/TestimonialSlide";
import { testimonials } from "@/content/testimonials";

/**
 * "section · Testimonials" — 1440 x 682 desktop / 390 x 857 mobile.
 *
 * Eyebrow only (no h2), then a slide carousel over a darkened stadium plate.
 */
export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-ink py-10 lg:py-[100px]"
    >
      {/* Already a 42%-alpha scrim plate, so it needs no gradient over it —
          it contributes the floodlight bloom and nothing else. */}
      <Image
        src={testimonials.background.src}
        alt={testimonials.background.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <Container>
        <Eyebrow id="testimonials-heading">{testimonials.eyebrow}</Eyebrow>
      </Container>

      <div className="mt-6 lg:mt-[26px]">
        <Carousel
          label="Testimonials"
          gapClassName="gap-3 lg:gap-10"
          controlsClassName="mt-6 lg:mt-[14px]"
        >
          {testimonials.slides.map((testimonial) => (
            <TestimonialSlide key={testimonial.slug} testimonial={testimonial} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
