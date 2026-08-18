import { ChevronDownIcon } from "@/components/ui/icons";

/**
 * Accordion row built on native `<details>`/`<summary>` — no client JS and
 * keyboard accessible for free. A shared `name` makes the group exclusive in
 * browsers that support it, degrading to multi-open elsewhere.
 */
export function FaqItem({
  question,
  answer,
  defaultOpen = false,
  group,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  group: string;
}) {
  return (
    <li>
      <details
        name={group}
        open={defaultOpen}
        className="group rounded-[8px] border border-hairline bg-card open:border-accent/30"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-6 [&::-webkit-details-marker]:hidden">
          <span className="font-display text-[15px] leading-[22px] tracking-[0.02em] text-paper uppercase">
            {question}
          </span>
          <span
            aria-hidden
            className="grid size-7 shrink-0 place-items-center rounded-[6px] border border-accent/25 bg-accent/10 text-accent transition-transform duration-200 group-open:rotate-180"
          >
            <ChevronDownIcon className="size-4" />
          </span>
        </summary>
        <p className="px-5 pb-6 text-[14px] leading-[24px] text-muted">{answer}</p>
      </details>
    </li>
  );
}
