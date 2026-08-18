"use client";

import { useEffect, useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Headline } from "@/content/types";
import { cn } from "@/lib/cn";

type Entry = { id: string; title: string };

/**
 * "On this page" — heading plus a numbered contents list.
 *
 * The links are plain anchors and work without JavaScript; the highlight is a
 * progressive enhancement driven by an IntersectionObserver, so the list marks
 * whichever section is currently in view.
 */
export function PolicyContents({
  eyebrow,
  headline,
  description,
  entries,
}: {
  eyebrow: string;
  headline: Headline;
  description: string;
  entries: readonly Entry[];
}) {
  const [activeId, setActiveId] = useState(entries[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (records) => {
        const inView = records
          .filter((record) => record.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (inView[0]) setActiveId(inView[0].target.id);
      },
      /* Ignore the fixed nav, and only count sections in the upper viewport. */
      { rootMargin: "-96px 0px -65% 0px" },
    );

    for (const entry of entries) {
      const element = document.getElementById(entry.id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [entries]);

  return (
    <div>
      <SectionHeading
        eyebrow={eyebrow}
        headline={headline}
        description={description}
      />

      <nav aria-label="On this page" className="mt-8 lg:mt-10">
        <ol className="border-t border-hairline">
          {entries.map((entry, index) => {
            const isActive = entry.id === activeId;
            return (
              <li key={entry.id} className="border-b border-hairline">
                <a
                  href={`#${entry.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="flex items-baseline gap-4 py-3 transition-colors"
                >
                  <span
                    className={cn(
                      "shrink-0 text-[12px] leading-5 font-semibold tracking-[0.08em] tabular-nums",
                      isActive ? "text-accent" : "text-faint",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "text-[14px] leading-5",
                      isActive ? "text-accent" : "text-body",
                    )}
                  >
                    {entry.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
