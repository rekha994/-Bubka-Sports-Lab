import Image from "next/image";

/**
 * "avatar stack · +24" — 180 x 42. Overlapping 42px faces followed by an
 * overflow count. The faces are decorative; `srLabel` carries the meaning.
 */
export function AvatarStack({
  avatars,
  overflowLabel,
  srLabel,
}: {
  avatars: readonly string[];
  overflowLabel: string;
  srLabel: string;
}) {
  return (
    <div className="flex items-center">
      <ul aria-hidden className="flex">
        {avatars.map((src, index) => (
          <li key={index} className={index > 0 ? "-ml-3" : undefined}>
            <Image
              src={src}
              alt=""
              width={42}
              height={42}
              className="size-[42px] rounded-full border-2 border-ink object-cover"
            />
          </li>
        ))}
      </ul>
      <p className="ml-3 text-[14px] leading-[22px] font-semibold text-body">
        <span aria-hidden>{overflowLabel}</span>
        <span className="sr-only">{srLabel}</span>
      </p>
    </div>
  );
}
