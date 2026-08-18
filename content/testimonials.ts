import type { Testimonial } from "@/content/types";

const CDN = "https://ik.imagekit.io/t9fldaz6d/Bubka-sports-labs";

/**
 * "bg · stadium" is the scrim layer exported on its own — a 5-colour palette
 * PNG at a uniform 42% alpha, contributing only the faint floodlight bloom
 * over the black page. It is a backdrop, never a portrait.
 */
const stadiumScrim = `${CDN}/bg%20_%20stadium.png`;

const portrait = `${CDN}/Coach%20cards_roJMCqUPe.png?updatedAt=1786973565671`;

export const testimonials = {
  eyebrow: "What they say",
  background: {
    src: stadiumScrim,
    alt: "",
  },
  /**
   * Figma has three slides — ATHLETE, COACH, CLUB. Add the remaining two here
   * once their quotes and portraits are supplied; the carousel picks them up
   * with no component changes.
   */
  slides: [
    {
      slug: "helga-bjornsdottir",
      category: "Coach",
      rating: 5,
      quote: [
        {
          text: "As an independent performance coach, reaching dedicated athletes outside my local club has always been tough. I'm excited to launch my profile on Bubka ",
        },
        { text: "to focus 100% on player development.", accent: true },
      ],
      name: "Helga Björnsdóttir",
      role: "S&C Specialist & Early Access Coach",
      portrait,
      avatar: portrait,
    },
  ] satisfies Testimonial[],
} as const;
