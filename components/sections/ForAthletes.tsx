import Image from "next/image";

import { Carousel } from "@/components/ui/Carousel";
import { CoachCard } from "@/components/ui/CoachCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { forAthletes } from "@/content/athletes";

/**
 * "section · For Athletes" — 1440 x 910 desktop / 390 x 734 mobile.
 *
 * Stadium plate behind a scrim, heading in the 1240 column, then a coach
 * carousel that bleeds past the right edge of the frame.
 */
export function ForAthletes() {
  return (
    <section
      aria-labelledby="for-athletes-heading"
      className="relative isolate overflow-hidden bg-ink py-10 lg:pt-[100px] lg:pb-[90px]"
    >
      <Image
        src={forAthletes.background.src}
        alt={forAthletes.background.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.62)_28%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.92)_92%,#000_100%)]"
      />

      <Container>
        <SectionHeading
          id="for-athletes-heading"
          eyebrow={forAthletes.eyebrow}
          headline={forAthletes.headline}
          description={forAthletes.description}
          descriptionClassName="lg:max-w-[520px]"
        />
      </Container>

      <div className="mt-6 lg:mt-10">
        <Carousel label="Verified coaches" controlsClassName="mt-6 lg:mt-10">
          {forAthletes.coaches.map((coach, index) => (
            <CoachCard key={`${coach.slug}-${index}`} coach={coach} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
