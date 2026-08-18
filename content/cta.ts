import type { Headline } from "@/content/types";

const CDN = "https://ik.imagekit.io/t9fldaz6d/Bubka-sports-labs";

export const finalCta = {
  eyebrow: "Coming soon",
  headline: [
    [{ text: "Begin your" }],
    [{ text: "Journey.", accent: true }],
  ] satisfies Headline,
  subtitle:
    "Join 2,400+ athletes and coaches already on Bubka Sports Lab. Your performance transformation starts with a single session.",
  background: {
    /** 1440x588 JPEG with the grading already baked in — needs no desktop scrim. */
    src: `${CDN}/section%20_%20Final%20CTA.png`,
    alt: "",
  },
} as const;
