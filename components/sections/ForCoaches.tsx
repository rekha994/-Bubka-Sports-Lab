import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { forCoaches } from "@/content/coaches";

/**
 * "section · For Coaches" — 1440 x 968 desktop / 390 x 1334 mobile.
 *
 * Desktop is a two-column split: a 614px analytics panel on the left spanning
 * the full height, heading and 2x2 feature grid stacked on the right.
 * DOM order is heading → panel → features, which is the mobile reading order;
 * desktop re-places the panel into column one via explicit grid lines.
 */
export function ForCoaches() {
  return (
    <section
      aria-labelledby="for-coaches-heading"
      className="bg-ink py-10 lg:py-[100px]"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[614px_1fr] lg:gap-x-[57px]">
          <SectionHeading
            id="for-coaches-heading"
            eyebrow={forCoaches.eyebrow}
            headline={forCoaches.headline}
            description={forCoaches.description}
            descriptionClassName="lg:max-w-[460px]"
            className="lg:col-start-2 lg:row-start-1"
          />

          <div className="relative h-[430px] overflow-hidden rounded-[12px] border border-white/10 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:h-auto lg:min-h-[767px]">
            <Image
              src={forCoaches.panel.src}
              alt={forCoaches.panel.alt}
              fill
              sizes="(max-width: 1023px) calc(100vw - 40px), 614px"
              className="object-cover"
            />
          </div>

          <ul className="grid gap-3 lg:col-start-2 lg:row-start-2 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-[14px]">
            {forCoaches.features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
