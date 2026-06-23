import { TRUST_TAGS } from "@/lib/constants";

interface TrustBadgesProps {
  tags?: string[];
  variant?: "inline" | "grid";
  className?: string;
}

const icons: Record<string, React.ReactNode> = {
  "2 design options": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  "Proof before print": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "NZ-wide delivery": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
};

export default function TrustBadges({
  tags = [...TRUST_TAGS],
  variant = "inline",
  className = "",
}: TrustBadgesProps) {
  if (variant === "grid") {
    return (
      <ul className={`grid gap-3 sm:grid-cols-3 ${className}`}>
        {tags.map((tag) => (
          <li
            key={tag}
            className="flex items-center gap-2 rounded-xl bg-sky/40 px-4 py-3 text-sm font-medium text-navy"
          >
            <span className="text-trust">{icons[tag] ?? icons["Proof before print"]}</span>
            {tag}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-navy"
        >
          <span className="text-trust">{icons[tag] ?? icons["Proof before print"]}</span>
          {tag}
        </li>
      ))}
    </ul>
  );
}
