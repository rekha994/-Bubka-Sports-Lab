import { IconWell } from "@/components/ui/IconWell";
import type { Feature } from "@/content/types";

/**
 * "card · feature" — 286 x ~192 desktop, 350 x 136 mobile.
 *
 * Mobile lays the icon beside the copy (22px padding, 14px gap); desktop
 * stacks icon → title → body with 10px gaps.
 */
export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <li className="flex gap-[14px] rounded-[8px] border border-hairline bg-card p-5 lg:flex-col lg:gap-[10px] lg:p-[22px]">
      <IconWell name={feature.icon} />
      <div>
        <h3 className="text-[15px] leading-[24px] font-bold text-paper">
          {feature.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-[22px] text-muted lg:mt-[10px]">
          {feature.body}
        </p>
      </div>
    </li>
  );
}
