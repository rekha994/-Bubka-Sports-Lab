import type { Headline, Stat } from "@/content/types";

/** Hero copy, stats and backdrop. */
export const hero = {
  eyebrow: "The performance platform for football",
  headline: [
    [{ text: "Footballers," }],
    [{ text: "and " }, { text: "Coaches.", accent: true }],
  ] satisfies Headline,
  subtitle:
    "One platform. Elite coaching. Real results. Connect with verified performance coaches, track every session, and build the squad you deserve.",
  /**
   * "section · hero" — 1440x900 JPEG. Already the flattened composite of the
   * photo, plate and scrim, so the section adds no desktop overlay of its own.
   */
  image:
    "https://ik.imagekit.io/t9fldaz6d/Bubka-sports-labs/section%20_%20hero.png",
  imageAlt: "",
  /**
   * Background video, layered over the still above — which stays as the
   * fallback for slow loads, unsupported formats and reduced-motion visitors.
   *
   * The `tr` transform is doing real work: the source is 3840x2160 @60fps and
   * 47.8 MB, which would be ruinous for a hero. ImageKit transcodes it to
   * 1920 wide at q-45 for 4.5 MB, still full resolution for a 1440 layout.
   * Raise q- for more sharpness, at a proportional cost in bytes.
   */
  video:
    "https://ik.imagekit.io/t9fldaz6d/Bubka-sports-labs/18234770-uhd_3840_2160_60fps.mp4?tr=w-1920,q-45",
  stats: [
    { value: "5+", label: "Avg. Coach Experience" },
    { value: "180+", label: "Verified coaches" },
    { value: "100%", label: "Protected Payments" },
  ] satisfies Stat[],
} as const;
