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
      <Hero />
      <ForAthletes />
      <ForCoaches />
      <Testimonials />
      <ForClubs />
      <Faq />
      <FinalCta />
    </>
  );
}
