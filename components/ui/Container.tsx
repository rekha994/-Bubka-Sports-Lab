import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Page gutter. Figma places section content in a 1240px column inside a
 * 1440px frame (100px gutters) on desktop, and 350px inside 390px (20px
 * gutters) on mobile.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-[100px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
