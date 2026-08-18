import type { Coach, Headline } from "@/content/types";

const CDN = "https://ik.imagekit.io/t9fldaz6d/Bubka-sports-labs";
const PORTRAITS = "https://ik.imagekit.io/t9fldaz6d/youglp1-new-home-page";

/**
 * Three 330x330 portraits, in the order supplied. None has the tier chip baked
 * in, so the card renders it. The fourth coach reuses portraitB, which keeps
 * identical faces from landing side by side across the repeated track.
 */
const portraitA = `${CDN}/Coach%20cards_roJMCqUPe.png?updatedAt=1786973565671`;
const portraitB = `${PORTRAITS}/e9621e42-9053-4f04-bcb8-032f4fac6549%201.png`;
const portraitC = `${PORTRAITS}/Coach%20cards.png`;

const coaches: Coach[] = [
  {
    slug: "vilhjalmur-kari",
    name: "Vilhjálmur Kári",
    role: "Elite Training",
    tier: { label: "Marquee", variant: "marquee" },
    image: portraitA,
  },
  {
    slug: "sigurdur-hoskuldsson",
    name: "Sigurður Höskuldsson",
    role: "Coach Of Þór\nPrinciple Of Play",
    tier: { label: "Pro", variant: "pro" },
    image: portraitB,
  },
  {
    slug: "hakon-sverrirsson",
    name: "Hákon Sverrirsson",
    role: "Elite Training - Afreksæfingar",
    tier: { label: "Local", variant: "local" },
    image: portraitC,
  },
  {
    slug: "heimir-hallgrimsson",
    name: "Heimir Hallgrímsson",
    role: "Defensive Tactics",
    tier: { label: "Pro", variant: "pro" },
    image: portraitB,
  },
];

export const forAthletes = {
  eyebrow: "For athletes",
  headline: [
    [{ text: "Find your " }, { text: "Coach.", accent: true }],
  ] satisfies Headline,
  description:
    "Browse verified performance coaches matched to your sport, level, and goals. From local F2F sessions to world-class remote programs.",
  background: {
    src: `${CDN}/bg%20_%20stadium%20plate%20(AI).png`,
    alt: "",
  },
  /** The design repeats the four coaches to fill an eight-card track. */
  coaches: [...coaches, ...coaches],
} as const;
