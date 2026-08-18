import Image from "next/image";

import { AvatarStack } from "@/components/ui/AvatarStack";
import { Container } from "@/components/ui/Container";
import { IconWell } from "@/components/ui/IconWell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { forClubs } from "@/content/clubs";

/**
 * "section · For Clubs" — 1440 x 973 desktop / 390 x 1478 mobile.
 *
 * Desktop splits into a 558px copy column and a 631px dashboard panel.
 * On mobile everything stacks in DOM order: heading, avatars, claims, panel.
 */
export function ForClubs() {
  const { panel } = forClubs;

  return (
    <section
      aria-labelledby="for-clubs-heading"
      className="bg-ink py-10 lg:py-[100px]"
    >
      <Container>
        <div className="grid gap-4 lg:grid-cols-[558px_1fr] lg:items-start lg:gap-x-[51px]">
          <div>
            <SectionHeading
              id="for-clubs-heading"
              eyebrow={forClubs.eyebrow}
              badge={forClubs.badge}
              headline={forClubs.headline}
              description={forClubs.description}
            />

            <div className="mt-4 lg:mt-6">
              <AvatarStack
                avatars={forClubs.members.avatars}
                overflowLabel={forClubs.members.overflowLabel}
                srLabel={forClubs.members.srLabel}
              />
            </div>

            <ul className="mt-4 grid gap-4 lg:mt-6 lg:gap-6">
              {forClubs.claims.map((claim) => (
                <li key={claim.label} className="flex items-start gap-4">
                  <IconWell name={claim.icon} size={32} />
                  <span className="text-[15px] leading-[26px] text-body">
                    {claim.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Square export cropped to the design's landscape panel. Anchored
              to the top so the baked-in "Live analytics" badge survives. */}
          <div className="relative h-[240px] overflow-hidden rounded-[12px] lg:h-[545px]">
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              sizes="(max-width: 1023px) calc(100vw - 40px), 631px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
