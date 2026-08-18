import type { Stat } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * "statsbar" — 1136 x 144 on desktop, 350 x 120 on mobile. Three equal cells
 * separated by hairline rules inside a translucent card.
 *
 * Rendered as a description list: each cell keeps `dt` (label) before `dd`
 * (value) in the DOM for assistive tech, and reverses visually.
 */
export function StatsBar({
  stats,
  className,
}: {
  stats: readonly Stat[];
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid w-full grid-cols-3 divide-x divide-hairline rounded-card border border-hairline bg-card",
        className,
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col-reverse items-center justify-center gap-2 px-2 py-6 text-center lg:gap-3 lg:py-8"
        >
          <dt className="text-[10px] leading-[16px] font-medium tracking-[0.14em] text-muted uppercase lg:text-[11px]">
            {stat.label}
          </dt>
          <dd className="font-display text-[32px] leading-none text-accent lg:text-[52px]">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
