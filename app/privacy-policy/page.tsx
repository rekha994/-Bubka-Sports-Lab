import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PolicyBody } from "@/components/legal/PolicyBody";
import { PolicyContents } from "@/components/legal/PolicyContents";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { privacyPolicy } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} — ${site.name}`,
  description: `How ${site.name} collects, uses and protects your personal data.`,
};

export default function PrivacyPolicyPage() {
  const entries = privacyPolicy.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <>
      <SiteHeader showLogin />

      <main className="flex-1">
        <PageHero
          id="privacy-policy-heading"
          eyebrow={privacyPolicy.eyebrow}
          headline={privacyPolicy.headline}
          background={privacyPolicy.banner}
        />

        <div className="bg-ink py-10 lg:py-[100px]">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[428px_1fr] lg:items-start lg:gap-x-[52px]">
              {/* Sticky so the contents stay reachable through a long policy. */}
              <div className="lg:sticky lg:top-[81px]">
                <PolicyContents
                  eyebrow={privacyPolicy.contents.eyebrow}
                  headline={privacyPolicy.contents.headline}
                  description={privacyPolicy.contents.description}
                  entries={entries}
                />
              </div>

              <PolicyBody sections={privacyPolicy.sections} />
            </div>
          </Container>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
