export type SocialName = "instagram" | "x" | "linkedin";

export const footer = {
  tagline: "The performance platform for footballers, coaches, and clubs.",
  signOff: "Built for the beautiful game.",
  contact: {
    heading: "Contact & address",
    /** Rendered as separate lines inside an <address>. */
    address: ["Hólagötu 40", "900 Vestmannaeyjar, Iceland"],
    email: "hallgrimurh@bubkasportslab.com",
    phone: "+354 846 2778",
  },
  social: {
    heading: "Follow",
    links: [
      { name: "instagram", label: "Instagram", href: "#" },
      { name: "x", label: "X", href: "#" },
      { name: "linkedin", label: "LinkedIn", href: "#" },
    ] satisfies { name: SocialName; label: string; href: string }[],
  },
  copyright: "© 2026 Bubka Sports Lab. All rights reserved.",
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
} as const;
