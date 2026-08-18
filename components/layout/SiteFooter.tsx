import Link from "next/link";
import type { ReactElement } from "react";

import { Logo } from "@/components/ui/Logo";
import {
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/social-icons";
import { footer, type SocialName } from "@/content/footer";

const socialIcons: Record<
  SocialName,
  (props: { className?: string }) => ReactElement
> = {
  instagram: InstagramIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
};

const headingClass =
  "text-[12px] leading-[18px] font-bold tracking-[0.14em] text-paper uppercase";

/**
 * "footer" — 1440 x 348 desktop / 390 x 566 mobile.
 *
 * Uses a 120px gutter, unlike the 100px used by the page sections. Columns sit
 * at x=120 / 560 / 1080, i.e. 440 / 520 / 240 within the 1200px content width.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-ink">
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-10 pb-10 md:px-10 lg:px-[120px] lg:pt-16 lg:pb-14">
        <div className="grid gap-8 lg:grid-cols-[440px_520px_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-[13px] max-w-[260px] text-[14px] leading-[22px] text-body">
              {footer.tagline}
            </p>
            {/* Desktop keeps the sign-off here; mobile moves it below the
                copyright, so it is rendered twice and hidden per breakpoint. */}
            <p className="mt-3 hidden text-[12px] leading-[18px] text-faint lg:block">
              {footer.signOff}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className={headingClass}>{footer.contact.heading}</h2>
            <address className="mt-4 text-[14px] leading-[22px] text-body not-italic">
              {footer.contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a
                href={`mailto:${footer.contact.email}`}
                className="mt-3 block break-all transition-colors hover:text-accent"
              >
                {footer.contact.email}
              </a>
              <a
                href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                className="mt-2 block transition-colors hover:text-accent"
              >
                {footer.contact.phone}
              </a>
            </address>
          </div>

          {/* Social */}
          <div>
            <h2 className={headingClass}>{footer.social.heading}</h2>
            <ul className="mt-3.5 flex gap-3">
              {footer.social.links.map((link) => {
                const Icon = socialIcons[link.name];
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      aria-label={link.label}
                      className="grid size-11 place-items-center rounded-[8px] border border-accent/30 bg-accent/10 text-accent transition-colors hover:border-accent hover:bg-accent/20 lg:size-10"
                    >
                      <Icon className="size-5 lg:size-[18px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <hr className="mt-8 border-0 border-t border-hairline lg:mt-11" />

        <div className="flex flex-col gap-2 pt-6 lg:flex-row-reverse lg:items-center lg:justify-between">
          <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            {footer.legal.map((item, index) => (
              <li key={item.label} className="flex items-center gap-x-2.5">
                {index > 0 && (
                  <span aria-hidden className="text-faint">
                    ·
                  </span>
                )}
                <Link
                  href={item.href}
                  className="text-[12px] leading-[18px] text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-[12px] leading-[18px] text-faint">
            {footer.copyright}
          </p>

          <p className="text-[12px] leading-[18px] text-faint lg:hidden">
            {footer.signOff}
          </p>
        </div>
      </div>
    </footer>
  );
}
