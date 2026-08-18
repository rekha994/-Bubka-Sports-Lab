import Image from "next/image";

import { StarRating } from "@/components/ui/StarRating";
import { Tag } from "@/components/ui/Tag";
import type { Testimonial } from "@/content/types";

/**
 * "slide · ATHLETE / COACH / CLUB" — 1200 x 380 desktop / 330 x 667 mobile.
 *
 * Portrait then quote card: stacked in one column on mobile, side by side
 * (342px portrait + 70px gap) on desktop.
 */
export function TestimonialSlide({ testimonial }: { testimonial: Testimonial }) {
  return (
    <li className="flex w-[330px] shrink-0 snap-start flex-col gap-3.5 md:w-[640px] lg:w-[1200px] lg:flex-row lg:items-center lg:gap-[70px]">
      <div className="relative h-[280px] w-full overflow-hidden rounded-[12px] lg:h-[380px] lg:w-[342px] lg:shrink-0">
        <Image
          src={testimonial.portrait}
          alt={`${testimonial.name}, ${testimonial.role}`}
          fill
          sizes="(max-width: 767px) 330px, (max-width: 1023px) 640px, 342px"
          className="object-cover"
        />
        <Tag className="absolute top-3 left-3">{testimonial.category}</Tag>
      </div>

      <figure className="rounded-[12px] border border-hairline bg-[#0a0a0a] p-5 lg:flex-1 lg:p-8">
        <StarRating rating={testimonial.rating} />

        <blockquote className="mt-3 font-display text-[20px] leading-[24px] uppercase lg:mt-4 lg:text-[36px] lg:leading-[44px]">
          <p>
            {testimonial.quote.map((run, index) => (
              <span key={index} className={run.accent ? "text-accent" : undefined}>
                {run.text}
              </span>
            ))}
          </p>
        </blockquote>

        <hr className="mt-4 border-0 border-t border-hairline lg:mt-6" />

        <figcaption className="mt-4 flex items-center gap-3">
          <Image
            src={testimonial.avatar}
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 rounded-full object-cover"
          />
          <span className="min-w-0">
            <span className="block text-[15px] leading-[24px] font-bold text-paper">
              {testimonial.name}
            </span>
            <span className="block text-[13px] leading-[22px] text-muted">
              {testimonial.role}
            </span>
          </span>
        </figcaption>
      </figure>
    </li>
  );
}
