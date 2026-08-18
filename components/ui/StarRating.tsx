import { cn } from "@/lib/cn";

const MAX = 5;

/**
 * "stars" — 94 x 22. Glyphs are decorative; the rating is announced as text.
 */
export function StarRating({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <p className={cn("text-[14px] leading-[22px] text-accent", className)}>
      <span aria-hidden className="tracking-[0.28em]">
        {"★".repeat(rating)}
        <span className="text-white/20">{"★".repeat(MAX - rating)}</span>
      </span>
      <span className="sr-only">{`Rated ${rating} out of ${MAX}`}</span>
    </p>
  );
}
