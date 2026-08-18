import type { ReactElement } from "react";

import {
  CardIcon,
  ChartIcon,
  ClockIcon,
  DashboardIcon,
  GridIcon,
  MailIcon,
  NetworkIcon,
  ShieldCheckIcon,
  TargetIcon,
} from "@/components/ui/icons";
import type { IconName } from "@/content/types";
import { cn } from "@/lib/cn";

type IconComponent = (props: { className?: string }) => ReactElement;

const registry: Record<IconName, IconComponent> = {
  target: TargetIcon,
  chart: ChartIcon,
  network: NetworkIcon,
  shield: ShieldCheckIcon,
  dashboard: DashboardIcon,
  clock: ClockIcon,
  mail: MailIcon,
  grid: GridIcon,
  card: CardIcon,
};

/** 38px on feature cards, 32px on club claim rows. */
const sizes = {
  28: { well: "size-[28px] rounded-[6px]", glyph: "size-[14px]" },
  32: { well: "size-[32px] rounded-[6px]", glyph: "size-[16px]" },
  38: { well: "size-[38px] rounded-[8px]", glyph: "size-[18px]" },
} as const;

/**
 * "icon well" — rounded tile holding a lime glyph. Decorative: the adjacent
 * title or label carries the meaning.
 */
export function IconWell({
  name,
  size = 38,
  className,
}: {
  name: IconName;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const Icon = registry[name];
  const scale = sizes[size];

  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center border border-accent/25 bg-accent/10",
        scale.well,
        className,
      )}
    >
      <Icon className={cn("text-accent", scale.glyph)} />
    </span>
  );
}
