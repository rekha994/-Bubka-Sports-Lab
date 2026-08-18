import Image from "next/image";

import { TierChip } from "@/components/ui/TierChip";
import type { Coach } from "@/content/types";

/**
 * "card · coach" — 280 x 398 mobile / 330 x 431 desktop.
 *
 * Desktop: 3 cards + 2 gaps of 18 fill 1026 of the 1240 viewport, so the 4th
 * starts at 1044 and is clipped at the content edge. The photo is a 330x330
 * square — 1:1 with the source asset — leaving a 101px footer.
 */
export function CoachCard({ coach }: { coach: Coach }) {
  return (
    <li className="flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-[10px] border border-white/10 bg-[#0a0a0a] lg:h-[431px] lg:w-[330px]">
      <div className="relative h-[320px] shrink-0 lg:h-[330px]">
        <Image
          src={coach.image}
          alt={`${coach.name}, ${coach.role.replace(/\s+/g, " ")}`}
          fill
          sizes="(max-width: 1023px) 280px, 330px"
          className="object-cover"
        />
        {/* "fade" — blends the photo into the footer. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0)_45%)]"
        />
        <TierChip
          label={coach.tier.label}
          variant={coach.tier.variant}
          className="absolute top-3 left-3"
        />
      </div>

      <div className="px-4 py-[14px] lg:px-5 lg:py-[18px]">
        <h3 className="text-[14px] leading-[22px] font-bold tracking-[0.02em] text-paper uppercase">
          {coach.name}
        </h3>
        <p className="text-[13px] leading-[22px] whitespace-pre-line text-muted">
          {coach.role}
        </p>
      </div>
    </li>
  );
}
