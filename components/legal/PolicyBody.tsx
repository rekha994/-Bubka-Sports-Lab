import { IconWell } from "@/components/ui/IconWell";
import { CheckIcon } from "@/components/ui/icons";
import type { PolicyBlock, PolicyCard, PolicySection } from "@/content/legal";
import { cn } from "@/lib/cn";

/**
 * Spacing above a block depends on what precedes it: consecutive paragraphs sit
 * closer together than a paragraph following a list, and subheadings get extra
 * room to read as dividers.
 */
function spacingFor(block: PolicyBlock, previous: PolicyBlock | undefined) {
  if (!previous) return "mt-6 lg:mt-8";
  if (block.kind === "subheading") return "mt-8 lg:mt-10";
  if (block.kind === "prose" && previous.kind === "prose") return "mt-4";
  if (previous.kind === "subheading") return "mt-5";
  return "mt-6 lg:mt-8";
}

/**
 * Numbered sections with their prose, checklist and card blocks.
 *
 * Sections whose body is still empty are skipped rather than rendered as a
 * bare heading — but numbering comes from the position in the full list, so
 * the visible numbers stay aligned with the contents menu.
 */
export function PolicyBody({
  sections,
}: {
  sections: readonly PolicySection[];
}) {
  return (
    <div>
      {sections.map((section, index) =>
        section.blocks.length === 0 ? null : (
          <section
            key={section.id}
            id={section.id}
            /* Clears the fixed nav when jumped to from the contents list. */
            className="mt-12 scroll-mt-[81px] first:mt-0 lg:mt-20"
          >
            <h2 className="flex items-baseline gap-4 border-b border-hairline pb-5">
              <span className="shrink-0 font-display text-[16px] leading-none text-accent tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[28px] leading-[30px] tracking-[-0.5px] text-paper uppercase lg:text-[46px] lg:leading-[46px]">
                {section.title}
              </span>
            </h2>

            {section.blocks.map((block, blockIndex) => {
              const spacing = spacingFor(block, section.blocks[blockIndex - 1]);

              switch (block.kind) {
                case "prose":
                  return (
                    <p
                      key={blockIndex}
                      className={cn(
                        "text-[16px] leading-[26px] text-body",
                        spacing,
                      )}
                    >
                      {block.text}
                    </p>
                  );

                case "subheading":
                  return (
                    <h3
                      key={blockIndex}
                      className={cn(
                        "font-display text-[18px] leading-[24px] tracking-[0.02em] text-paper uppercase",
                        spacing,
                      )}
                    >
                      {block.text}
                    </h3>
                  );

                case "checklist":
                  return (
                    <ul key={blockIndex} className={cn("grid gap-8", spacing)}>
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-7">
                          <CheckIcon className="mt-1 size-4 shrink-0 text-accent" />
                          <span className="text-[16px] leading-[24px] text-body">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );

                case "cards":
                  return (
                    <ul
                      key={blockIndex}
                      className={cn(
                        "grid gap-4 sm:grid-cols-2 lg:gap-5",
                        spacing,
                      )}
                    >
                      {block.cards.map((card) => (
                        <PolicyCardItem key={card.title} card={card} />
                      ))}
                    </ul>
                  );
              }
            })}
          </section>
        ),
      )}
    </div>
  );
}

function PolicyCardItem({ card }: { card: PolicyCard }) {
  return (
    <li
      className={cn(
        "rounded-[10px] border border-hairline bg-card p-5",
        card.wide && "sm:col-span-2",
      )}
    >
      <IconWell name={card.icon} size={28} />
      <h3 className="mt-4 text-[14px] leading-[20px] font-bold text-paper">
        {card.title}
      </h3>
      <p className="mt-2 text-[13px] leading-[20px] text-muted">{card.body}</p>
    </li>
  );
}
