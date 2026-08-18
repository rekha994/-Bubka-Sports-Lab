import { ClosingBackdrop } from "@/components/layout/ClosingBackdrop";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { ForAthletes } from "@/components/sections/ForAthletes";
import { ForClubs } from "@/components/sections/ForClubs";
import { ForCoaches } from "@/components/sections/ForCoaches";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <Hero />
        <ForAthletes />
        <ForCoaches />
        <Testimonials />
        <ForClubs />
        <Faq />
      </main>

      {/* One video spans the CTA and the footer, so they share a wrapper. */}
      <ClosingBackdrop>
        <FinalCta />
        <SiteFooter />
      </ClosingBackdrop>
    </>
  );
}
