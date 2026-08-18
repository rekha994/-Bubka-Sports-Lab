import type { Headline, IconName } from "@/content/types";

const CDN = "https://ik.imagekit.io/t9fldaz6d/Bubka-sports-labs";

export type PolicyCard = {
  icon: IconName;
  title: string;
  body: string;
  /** Spans both grid columns on desktop. */
  wide?: boolean;
};

/** A section's body is a sequence of these blocks, in order. */
export type PolicyBlock =
  | { kind: "prose"; text: string }
  | { kind: "cards"; cards: PolicyCard[] }
  /** Small uppercase label dividing a section, e.g. "Legal bases". */
  | { kind: "subheading"; text: string }
  /** Lime-ticked list. */
  | { kind: "checklist"; items: string[] };

export type PolicySection = {
  /** Anchor target, also used by the table of contents. */
  id: string;
  title: string;
  blocks: PolicyBlock[];
};

/**
 * Sections 01 and 02 are transcribed from the design. Titles 03-12 come from
 * the table of contents, but their bodies were not shown — left empty rather
 * than filled with invented legal text. The page skips empty bodies, and the
 * contents list is derived from this array, so it stays in step automatically.
 */
const sections: PolicySection[] = [
  {
    id: "who-this-policy-covers",
    title: "Who this policy covers",
    blocks: [
      {
        kind: "prose",
        text: 'This Privacy Policy explains how Bubka Sports Lab ([Legal Entity Name], "we," "us") collects, uses, and protects personal data when you visit our marketing website or use the Bubka Sports Lab mobile/desktop platform. We process data in accordance with the GDPR as applied across the EEA (Iceland is an EEA member).',
      },
    ],
  },
  {
    id: "data-we-collect",
    title: "Data we collect",
    blocks: [
      {
        kind: "cards",
        cards: [
          {
            icon: "target",
            title: "Account data",
            body: "Name, email, phone number, date of birth, role (coach or player), language and timezone preferences.",
          },
          {
            icon: "clock",
            title: "Booking and session data",
            body: "Bookings, packages, availability, messages between coaches and players, ratings and reviews.",
          },
          {
            icon: "shield",
            title: "Payment data",
            body: "Processed by our payment provider; Bubka Sports Lab does not store full card details. [Provider name to be added once selected.]",
          },
          {
            icon: "grid",
            title: "Profile data",
            body: "Coach qualifications and content uploads; player self-assessment and measurement data, which you control the visibility of.",
          },
          {
            icon: "chart",
            title: "Device and usage data",
            body: "Only collected with your consent (see Cookies below) — no analytics, attribution, or telemetry runs before you actively accept.",
          },
          {
            icon: "mail",
            title: "Support data",
            body: "Information you provide when contacting support.",
          },
          {
            icon: "card",
            title: "Minor accounts",
            body: "Where a player is below the configured minor age threshold, we do not collect any guardian name, relationship, or guardian-specific identifier. The contact details on file are assumed to belong to a guardian and are labelled as such to booking counterparties, but no separate guardian identity is captured.",
            wide: true,
          },
        ],
      },
    ],
  },
  {
    id: "how-we-use-your-data",
    title: "How we use your data",
    blocks: [
      { kind: "prose", text: "We use personal data to:" },
      {
        kind: "checklist",
        items: [
          "Operate your account",
          "Process bookings and payments",
          "Enable communication between coaches and players",
          "Send transactional notifications (bookings, approvals, reminders — these cannot be fully disabled, as they carry money and scheduling consequences)",
          "Improve the Platform (only with analytics consent)",
          "Meet legal and financial record-keeping obligations",
        ],
      },
      { kind: "subheading", text: "Legal bases" },
      {
        kind: "checklist",
        items: [
          "Contract performance — account, bookings, payments",
          "Consent — analytics and marketing cookies, minor account consent gate",
          "Legitimate interest — safety, fraud prevention, service improvement",
          "Legal obligation — financial records, tax",
        ],
      },
    ],
  },
  {
    id: "cookies-and-tracking",
    title: "Cookies and tracking",
    blocks: [
      {
        kind: "prose",
        text: "On your first visit, a cookie banner lets you accept, reject non-essential cookies, or manage preferences — accept and reject are given equal visual weight. No analytics or marketing script runs until you actively accept; dismissing the banner without a choice is treated as a decline.",
      },
      {
        kind: "prose",
        text: "Consent is recorded with a version and timestamp, expires after 365 days, and is re-requested if it expires or if what we collect changes. Rejecting non-essential cookies does not affect core site functionality. See our [Cookie Policy] for the full list of cookies used.",
      },
    ],
  },
  {
    id: "who-we-share-data-with",
    title: "Who we share data with",
    blocks: [
      {
        kind: "checklist",
        items: [
          "Coaches and players you interact with, limited to what's needed for a booking (e.g., a guardian contact label, session details)",
          "Payment processor, to complete transactions",
          "Video session provider, for online and hybrid coaching sessions",
          "Service providers (hosting, messaging, analytics — only where consented) acting on our instructions",
        ],
      },
      {
        kind: "prose",
        text: "A current list of sub-processors is maintained at [sub-processor list URL], kept up to date without requiring a reissue of this policy.",
      },
      { kind: "subheading", text: "We do not sell personal data." },
    ],
  },
  {
    id: "international-data-transfers",
    title: "International data transfers",
    blocks: [
      {
        kind: "prose",
        text: "Where data is processed outside the EEA by a sub-processor, we rely on appropriate safeguards (such as EU Standard Contractual Clauses) as required by GDPR.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data retention",
    blocks: [
      {
        kind: "prose",
        text: "We retain account and booking data for as long as your account is active. Certain financial records are retained beyond account deletion to meet legal and accounting obligations, even after you delete your account — the deletion screen explains exactly what is removed and what is retained.",
      },
      {
        kind: "prose",
        text: "[Retention period for dormant/inactive accounts is still being defined and will be added once finalised with legal counsel.]",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    blocks: [
      { kind: "prose", text: "Subject to applicable law, you can:" },
      {
        kind: "checklist",
        items: [
          "Access a copy of your data — Export My Data in account settings",
          "Request correction of inaccurate data",
          "Request deletion — Delete My Account, blocked while you have upcoming sessions or an unspent wallet balance, until resolved",
          "Object to or restrict certain processing",
          "Request data portability",
          "Withdraw consent at any time — this does not affect processing carried out before withdrawal",
        ],
      },
      {
        kind: "prose",
        text: "To exercise these rights, contact us at [privacy contact email] or use the relevant control in your account settings.",
      },
    ],
  },
  {
    id: "children-and-minors",
    title: "Children and minors",
    blocks: [
      {
        kind: "prose",
        text: "Bubka Sports Lab is not directed at children below the applicable minimum age without the involvement of a responsible adult. Accounts for players below the configured minor threshold trigger a mandatory consent step before registration can be completed, but the Platform does not separately verify or capture guardian identity.",
      },
      {
        kind: "prose",
        text: "[This area is flagged for specific legal counsel review — no guardian identity capture currently exists on the platform.]",
      },
    ],
  },
  {
    id: "data-security",
    title: "Data security",
    blocks: [
      {
        kind: "prose",
        text: "We use technical and organisational measures appropriate to the sensitivity of the data we hold, including access controls and encryption in transit. No system is 100% secure, and we encourage you to use a strong, unique password.",
      },
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to this policy",
    blocks: [
      {
        kind: "prose",
        text: "We may update this Privacy Policy periodically. Material changes will be highlighted, and the current version is always accessible from Legal & Support in your account and from the site footer.",
      },
    ],
  },
  { id: "contact-us", title: "Contact us", blocks: [] },
];

export const privacyPolicy = {
  title: "Privacy Policy",
  eyebrow: "Legal & privacy",
  headline: [
    [{ text: "Privacy" }],
    [{ text: "Policy.", accent: true }],
  ] satisfies Headline,
  banner: {
    /** 1440x560 JPEG, ungraded — the section applies the gradient scrim. */
    src: `${CDN}/bg%20_%20hero%20photo.png`,
    alt: "",
  },
  contents: {
    eyebrow: "On this page",
    headline: [
      [{ text: "Twelve" }],
      [{ text: "Sections.", accent: true }],
    ] satisfies Headline,
    description:
      "How Bubka Sports Lab collects, uses, and protects personal data across the marketing website and the mobile and desktop platform.",
  },
  sections,
} as const;
