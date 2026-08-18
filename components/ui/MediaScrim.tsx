import { cn } from "@/lib/cn";

/**
 * The design's standard scrim over *ungraded* media — raw video and
 * photography that has no darkening baked in.
 *
 * linear-gradient(180deg, rgba(5,5,5,0.62) 0%, rgba(5,5,5,0.28) 36%,
 *                 rgba(5,5,5,0.48) 72%, rgba(5,5,5,0.98) 100%)
 *
 * Never place this over an already-graded plate (the hero still, the Final CTA
 * still, the testimonials scrim) — those carry their own darkening and would be
 * crushed by a second pass.
 */
export function MediaScrim({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.62)_0%,rgba(5,5,5,0.28)_36%,rgba(5,5,5,0.48)_72%,rgba(5,5,5,0.98)_100%)]",
        className,
      )}
    />
  );
}
