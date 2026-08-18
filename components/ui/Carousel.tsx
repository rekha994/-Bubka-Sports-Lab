"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/**
 * "carousel · viewport" + "carousel · controls".
 *
 * Native overflow scrolling with snap points — no carousel library. The
 * viewport is the 1240px inner column (not the 1440px frame), so the trailing
 * card is clipped at the content edge. On mobile it bleeds the gutter width to
 * the screen edge, matching the 370-wide viewport at x=20 in the design.
 *
 * Scrolling stays inside this element, so the page never scrolls horizontally.
 */
export function Carousel({
  label,
  children,
  gapClassName = "gap-[14px] lg:gap-[18px]",
  controlsClassName,
}: {
  label: string;
  children: ReactNode;
  gapClassName?: string;
  controlsClassName?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncEdges = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    syncEdges();
    window.addEventListener("resize", syncEdges);
    return () => window.removeEventListener("resize", syncEdges);
  }, [syncEdges]);

  /** One card plus one gap, measured from the rendered items. */
  const scrollByCard = (direction: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLLIElement>("li");
    const step =
      items.length > 1
        ? items[1].offsetLeft - items[0].offsetLeft
        : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <Container>
      <div
        ref={scroller}
        onScroll={syncEdges}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="-mr-5 snap-x snap-mandatory overflow-x-auto scroll-smooth md:-mr-10 lg:mr-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <ul className={cn("flex pr-5 md:pr-10 lg:pr-0", gapClassName)}>
          {children}
        </ul>
      </div>

      <div className={cn("flex justify-center gap-3", controlsClassName)}>
        <CarouselButton
          label="Previous"
          disabled={atStart}
          onClick={() => scrollByCard(-1)}
        >
          <ChevronLeftIcon className="size-4" />
        </CarouselButton>
        <CarouselButton
          label="Next"
          disabled={atEnd}
          onClick={() => scrollByCard(1)}
        >
          <ChevronRightIcon className="size-4" />
        </CarouselButton>
      </div>
    </Container>
  );
}

function CarouselButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid size-11 place-items-center rounded-full border border-hairline-strong bg-white/5 text-paper transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-40"
    >
      {children}
    </button>
  );
}
