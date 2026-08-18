import type { Claim, Headline } from "@/content/types";

const CDN = "https://ik.imagekit.io/t9fldaz6d/Bubka-sports-labs";

export const forClubs = {
  eyebrow: "For clubs & academies",
  badge: "Coming soon",
  headline: [
    [{ text: "Modernise" }],
    [{ text: "your " }, { text: "Squad.", accent: true }],
  ] satisfies Headline,
  description:
    "Give your entire coaching staff access to Bubka Sports Lab. Performance tracking, coach matching, analytics built for modern football clubs.",
  members: {
    /** Faces in the "avatar stack · +24" cluster. */
    avatars: [`${CDN}/pic.png`, `${CDN}/pic_UyLeF26RQg.png`, `${CDN}/pic.png`],
    overflowLabel: "+24",
    /** Announced in place of the decorative faces. */
    srLabel: "Joined by 24 other clubs and academies",
  },
  claims: [
    { icon: "chart", label: "Centralised athlete performance tracking" },
    { icon: "shield", label: "Verified coach hiring through Bubka Sports Lab Tiers" },
    { icon: "network", label: "Hybrid coaching for travelling squads" },
    { icon: "dashboard", label: "Analytics dashboard for all coaches & players" },
  ] satisfies Claim[],
  panel: {
    /**
     * "panel · club dashboard". The 630x630 export already has the
     * "Live analytics" badge and the rounded corners baked in, so the section
     * must not draw its own — it anchors the crop to the top instead.
     */
    src: `${CDN}/panel%20_%20club%20dashboard.png`,
    alt: "Two coaches reviewing live squad analytics on a tablet beside a floodlit pitch",
  },
} as const;
