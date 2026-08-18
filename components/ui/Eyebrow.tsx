import { cn } from "@/lib/cn";

/**
 * Small lime uppercase kicker that opens every section.
 *
 * Figma: Inter 700, 12px / 18px, letter-spacing 2.5px, #D7FF00 — identical on
 * mobile and desktop, so no responsive step.
 */
export function Eyebrow({
  children,
  id,
  className,
}: {
  children: string;
  id?: string;
  className?: string;
}) {
  return (
    <p
      id={id}
      className={cn(
        "text-[12px] leading-[18px] font-bold tracking-[2.5px] text-accent uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
