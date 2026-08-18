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
} as const;

/**
 * Media behind the Final CTA *and* the footer, to the bottom of the home page.
 *
 * The still is the graded 1440x588 plate, kept as the fallback. The video is
 * raw footage, so ClosingBackdrop pairs it with a MediaScrim; the source is
 * 4096x2160 @24fps and 25 MB, transcoded to 1920 wide at q-45 for 2.7 MB.
 */
export const closingBackdrop = {
  image: {
    src: `${CDN}/section%20_%20Final%20CTA.png`,
    alt: "",
  },
  video: `${CDN}/9440062-uhd_4096_2160_24fps.mp4?tr=w-1920,q-45`,
} as const;
