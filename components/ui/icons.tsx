/**
 * Inline icons.
 *
 * The chevrons are exact — they're plain geometry. The tier glyphs
 * (bolt / pin) are APPROXIMATIONS of the Figma vector nodes, which could not
 * be exported (MCP asset quota). Replace them with the real exports when
 * available; the call sites and sizing stay the same.
 */

type IconProps = { className?: string };

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M5 9l7 7 7-7" />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 2L4 14h6l-1.5 8L19 9h-6.5l1-7z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  );
}

/* --- Feature-card glyphs (also approximations of Figma vectors) --- */

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function TargetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} aria-hidden className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} aria-hidden className={className}>
      <path d="M4 19h16" />
      <path d="M5 15l4.5-5 3.5 3L20 6" />
      <path d="M20 10.5V6h-4.5" />
    </svg>
  );
}

export function NetworkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} aria-hidden className={className}>
      <circle cx="12" cy="5" r="2.4" />
      <circle cx="5.5" cy="18" r="2.4" />
      <circle cx="18.5" cy="18" r="2.4" />
      <path d="M10.6 7l-3.6 8.8M13.4 7l3.6 8.8M8 18h8" />
    </svg>
  );
}

export function DashboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} aria-hidden className={className}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M7.5 15.5v-3M12 15.5v-6M16.5 15.5v-4" />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} aria-hidden className={className}>
      <path d="M12 3l7 2.8v5.4c0 4.4-2.9 7.8-7 9.8-4.1-2-7-5.4-7-9.8V5.8L12 3z" />
      <path d="M9 12l2.2 2.2L15.2 10" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} aria-hidden className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} aria-hidden className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4.5 7l7.5 5.5L19.5 7" />
    </svg>
  );
}

export function GridIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} aria-hidden className={className}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function CardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} aria-hidden className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3 10h18M6.5 14.5h5" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}
