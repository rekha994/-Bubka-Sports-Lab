/** A styled span inside a headline — `accent` paints it lime. */
export type HeadlineRun = { text: string; accent?: boolean };

/** A headline is lines of runs, so the white/lime alternation stays in data. */
export type Headline = readonly (readonly HeadlineRun[])[];

/** Runs that flow as one wrapping paragraph rather than fixed lines. */
export type RichText = readonly HeadlineRun[];

export type Stat = {
  value: string;
  label: string;
};

export type TierVariant = "marquee" | "pro" | "local";

export type IconName =
  | "target"
  | "chart"
  | "network"
  | "shield"
  | "dashboard"
  | "clock"
  | "mail"
  | "grid"
  | "card";

export type Claim = {
  icon: IconName;
  label: string;
};

export type FaqEntry = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export type Feature = {
  icon: IconName;
  title: string;
  body: string;
};

export type Testimonial = {
  slug: string;
  /** Audience pill on the portrait — Athlete / Coach / Club. */
  category: string;
  rating: number;
  quote: RichText;
  name: string;
  role: string;
  portrait: string;
  avatar: string;
};

export type Coach = {
  slug: string;
  name: string;
  role: string;
  tier: { label: string; variant: TierVariant };
  image: string;
};
