import { Container } from "@/components/ui/Container";
import { FaqItem } from "@/components/ui/FaqItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/content/faq";

/**
 * FAQ — copy column on the left, disclosure list on the right. Not present in
 * the Figma node tree that was available, so proportions come from the
 * supplied screenshot: a 420px copy column, 65px gutter, list fills the rest.
 */
export function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="bg-ink py-10 lg:py-[100px]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[420px_1fr] lg:items-start lg:gap-x-[65px]">
          <SectionHeading
            id="faq-heading"
            eyebrow={faq.eyebrow}
            headline={faq.headline}
            description={faq.description}
          />

          <ul className="grid gap-5">
            {faq.items.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                defaultOpen={item.defaultOpen}
                group="faq"
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
