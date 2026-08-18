import { cn } from "@/lib/cn";

/**
 * Small pill. `solid` is the lime badge (audience labels, "coming soon");
 * `glass` is the dark overlay badge used for "live analytics", with a lime
 * status dot.
 */
const variants = {
  solid: "bg-accent text-ink",
  glass: "bg-black/70 text-paper backdrop-blur-sm",
} as const;

export function Tag({
  children,
  variant = "solid",
  dot = false,
  className,
}: {
  children: string;
  variant?: keyof typeof variants;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-[23px] items-center gap-1.5 rounded-[4px] px-2 text-[10px] leading-[15px] font-bold tracking-[0.08em] uppercase",
        variants[variant],
        className,
      )}
    >
      {dot && <span aria-hidden className="size-1.5 rounded-full bg-accent" />}
      {children}
    </span>
  );
}
