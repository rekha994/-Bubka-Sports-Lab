import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { StatsBar } from "@/components/ui/StatsBar";
import { hero } from "@/content/hero";

/**
 * "section · hero" — 1440 x 900 desktop / 390 x 600 mobile.
 *
 * Vertical rhythm is padding-driven so wrapped text can never overflow the
 * section: nav (57) + 100 top, then 18 / 24 / 80 gaps, then 100 bottom.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-[164px] pb-10 lg:min-h-[900px] lg:pt-[157px] lg:pb-[100px]"
    >
      {/* Anchored right so the athlete stays in frame as the 1440-wide plate
          is cropped; centred on mobile, where the crop is severe and the copy
          needs the darker middle of the image behind it. */}
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center lg:object-right"
      />

      {/* The video is raw footage, so it carries its own gradient scrim. Both
          live in one wrapper that hides together under reduced motion, leaving
          the still — which already has its grading baked in, and so must never
          sit under this gradient as well. */}
      {hero.video ? (
        <div aria-hidden className="absolute inset-0 -z-10 motion-reduce:hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="size-full object-cover object-center lg:object-right"
          >
            <source src={hero.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.62)_0%,rgba(5,5,5,0.28)_36%,rgba(5,5,5,0.48)_72%,rgba(5,5,5,0.98)_100%)]" />
        </div>
      ) : (
        /* Without the video, the still needs the mobile scrim it had before:
           the desktop plate is graded, but the mobile crop is not. */
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.82)_60%,rgba(0,0,0,0.9)_100%)] lg:hidden"
        />
      )}

      <Container>
        <Eyebrow>{hero.eyebrow}</Eyebrow>

        <Headline
          as="h1"
          id="hero-heading"
          lines={hero.headline}
          className="mt-4 text-[48px] leading-[50px] tracking-[-1px] md:text-[88px] md:leading-[80px] lg:mt-[73px] lg:text-[128px] lg:leading-[110.08px]"
        />

        <p className="mt-5 max-w-[350px] text-[16px] leading-[26px] text-body md:max-w-[640px] lg:mt-[79px] lg:max-w-none lg:text-[18px] lg:leading-[28px]">
          {hero.subtitle}
        </p>

        <StatsBar stats={hero.stats} className="mt-10 lg:mt-20 lg:max-w-[1136px]" />
      </Container>
    </section>
  );
}
