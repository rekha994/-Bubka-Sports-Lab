import type { Headline as HeadlineData } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * Renders a headline as lines of runs. Each line is its own block so the
 * design's hard line breaks survive, and accent runs pick up the lime token.
 */
export function Headline({
  as: Tag = "h2",
  lines,
  id,
  className,
}: {
  as?: "h1" | "h2";
  lines: HeadlineData;
  id?: string;
  className?: string;
}) {
  return (
    <Tag id={id} className={cn("font-display uppercase", className)}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.map((run, runIndex) => (
            <span key={runIndex} className={run.accent ? "text-accent" : undefined}>
              {run.text}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
