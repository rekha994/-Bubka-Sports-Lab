/**
 * Social brand marks.
 *
 * APPROXIMATIONS — these are third-party brand logos and could not be
 * exported from Figma (MCP asset quota). Replace with the official SVGs from
 * each brand's press kit before shipping; the call sites and sizing are stable.
 */

type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.5 3h3.2l-7 8 7.3 10h-5.6l-4.4-6-5 6H2.8l7.3-8.6L3 3h5.7l4.1 5.6L17.5 3zm-1.1 16h1.6L7.5 4.7H5.8L16.4 19z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M5.4 8.6h2.9V20H5.4V8.6zM6.85 3.8a1.7 1.7 0 110 3.4 1.7 1.7 0 010-3.4zM10.4 8.6h2.8v1.6a3.1 3.1 0 012.8-1.5c2.3 0 3.6 1.4 3.6 4V20h-2.9v-6c0-1.4-.5-2.2-1.7-2.2-1 0-1.7.7-1.7 2.2v6h-2.9V8.6z" />
    </svg>
  );
}
