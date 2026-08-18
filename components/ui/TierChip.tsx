import { BoltIcon, PinIcon } from "@/components/ui/icons";
import type { TierVariant } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * "chip · tier" — 23px tall, 9px side padding, 4px icon gap, 10px/15px label.
 * Marquee and Pro sit on lime with black text; Local is a dark glass pill.
 */
const variants: Record<TierVariant, string> = {
  marquee: "bg-accent text-ink",
  pro: "bg-accent text-ink",
  local: "bg-black/65 text-paper backdrop-blur-sm",
};

export function TierChip({
  label,
  variant,
  className,
}: {
  label: string;
  variant: TierVariant;
  className?: string;
}) {
  const Icon = variant === "local" ? PinIcon : BoltIcon;

  return (
    <span
      className={cn(
        "inline-flex h-[23px] items-center gap-1 rounded-[4px] px-[9px] text-[10px] leading-[15px] font-bold tracking-[0.08em] uppercase",
        variants[variant],
        className,
      )}
    >
      <Icon className="size-[10px] shrink-0" />
      {label}
    </span>
  );
}
