import type { Feature, Headline } from "@/content/types";

const CDN = "https://ik.imagekit.io/t9fldaz6d/Bubka-sports-labs";

export const forCoaches = {
  eyebrow: "For coaches",
  headline: [
    [{ text: "Scale your expertise" }],
    [{ text: "with " }, { text: "Bubka Sports Lab", accent: true }],
    [{ text: "Logic.", accent: true }],
  ] satisfies Headline,
  description:
    "Build your performance brand, deliver hybrid and remote programs, and reach athletes globally — from one dashboard.",
  panel: {
    src: `${CDN}/panel%20_%20coach%20analytics.png`,
    alt: "Two coaches reviewing a live match-analytics dashboard on a tablet",
  },
  features: [
    {
      icon: "target",
      title: "Precision Matching",
      body: "Tailored pairing connects athletes with coaches that fit their exact training needs.",
    },
    {
      icon: "chart",
      title: "Live Performance Analytics",
      body: "Track every session metric, progression curve, and KPI in real time.",
    },
    {
      icon: "network",
      title: "Hybrid Coaching",
      body: "Combine remote strategy with on-ground execution. Your vision, a local coach's hands.",
    },
    {
      icon: "shield",
      title: "Tier-Verified Coaches",
      body: "Every coach is credentialed, rated, and placed in a tier - Grassroots to Marquee.",
    },
  ] satisfies Feature[],
} as const;
