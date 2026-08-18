import Link from "next/link";

import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";

/**
 * "nav · sticky" — 57px tall on desktop, 64px on mobile. Overlays the page's
 * first section.
 *
 * The brand lockup is always shown; `showLogin` adds the Login action, which
 * the design only carries on interior pages. Kept a prop rather than derived
 * from the pathname so the header stays a server component.
 */
export function SiteHeader({ showLogin = false }: { showLogin?: boolean }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/[0.06] bg-ink/60 backdrop-blur-md lg:h-[57px]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="inline-flex items-center rounded-sm"
        >
          <Logo alt="" />
        </Link>

        {showLogin ? (
          <Link
            href={site.nav.login.href}
            className="text-[14px] leading-[22px] text-body transition-colors hover:text-accent"
          >
            {site.nav.login.label}
          </Link>
        ) : null}
      </div>
    </header>
  );
}
