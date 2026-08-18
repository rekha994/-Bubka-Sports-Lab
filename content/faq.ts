import type { FaqEntry, Headline } from "@/content/types";

/**
 * TODO: replace. Only the first answer is present in the supplied design —
 * these five are placeholders, not approved copy.
 */
const PENDING = "Answer copy pending from the design.";

export const faq = {
  eyebrow: "Frequently asked questions",
  headline: [
    [{ text: "Questions," }],
    [{ text: "Answered.", accent: true }],
  ] satisfies Headline,
  description:
    "Everything you need to know about booking sessions, coach verification, and getting started on the platform.",
  items: [
    {
      question: "What is Bubka Sports Lab?",
      answer:
        "Bubka Sports Lab is a dedicated platform connecting footballers with verified performance coaches for 1-on-1, group, and digital training sessions.",
      defaultOpen: true,
    },
    { question: "When is the platform launching?", answer: "We are launching in September 2026. Primarily focusing on performance which gives you access to elite coach booking slots, courses, and exclusive rates." },
    { question: "How are coaches verified on the platform?", answer: "Every coach undergoes a strict 3-step vetting process, including identity checks, UEFA/national coaching license verification, and background checks before their profile goes live." },
    { question: "What training formats are available?", answer: "Coaches offer flexible hybrid options: in-person individual sessions, small squad/group clinics, and remote video analysis or custom training programs." },
    { question: "Who is eligible to coach on Bubka Sports Lab?", answer: "We welcome certified football coaches, strength & conditioning specialists, and positional performance experts holding valid coaching credentials and background clearances." },
    { question: "Are my payment details secure?", answer: "Yes. All financial transactions are encrypted and processed through industry-standard PCI-compliant payment gateways. No hidden booking fees are applied at checkout." },
  ] satisfies FaqEntry[],
} as const;
