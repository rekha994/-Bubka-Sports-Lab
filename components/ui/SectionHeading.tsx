import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Tag } from "@/components/ui/Tag";
import type { Headline as HeadlineData } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * eyebrow → h2 → description block that opens the Athletes, Coaches and
 * Clubs sections.
 *
 * Figma rhythm: eyebrow 18, gap 24, h2 (76/69 desktop · 48/50 mobile),
 * gap 24, description 16/26.
 *
 * Both h2 font sizes come from the design spec. The 69px desktop line-height
 * is an exact Figma node measurement; mobile matches the h1's 48/50 pairing.
 */
export function SectionHeading({
  eyebrow,
  badge,
  headline,
  description,
  id,
  className,
  descriptionClassName,
}: {
  eyebrow: string;
  /** Optional pill beside the eyebrow, e.g. "Coming soon". */
  badge?: string;
  headline: HeadlineData;
  description: string;
  id?: string;
  className?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-2">
        <Eyebrow>{eyebrow}</Eyebrow>
        {badge ? <Tag>{badge}</Tag> : null}
      </div>
      <Headline
        id={id}
        lines={headline}
        className="mt-4 text-[48px] leading-[50px] tracking-[-1px] md:text-[60px] md:leading-[58px] lg:mt-6 lg:text-[76px] lg:leading-[69px]"
      />
      <p
        className={cn(
          "mt-5 text-[16px] leading-[26px] text-body lg:mt-6",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </div>
  );
}
