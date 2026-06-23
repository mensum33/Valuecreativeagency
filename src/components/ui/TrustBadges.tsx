import { TRUST_TAGS } from "@/lib/constants";

interface TrustBadgesProps {
  tags?: string[];
  variant?: "inline" | "grid";
  className?: string;
}

export default function TrustBadges({
  tags = [...TRUST_TAGS],
  variant = "inline",
  className = "",
}: TrustBadgesProps) {
  if (variant === "grid") {
    return (
      <ul className={`grid gap-3 sm:grid-cols-2 ${className}`}>
        {tags.map((tag) => (
          <li
            key={tag}
            className="flex items-center gap-2 rounded-lg border border-border bg-lightgrey px-4 py-3 text-sm font-medium text-black"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0" aria-hidden="true" />
            {tag}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="inline-flex items-center rounded-full border border-border bg-lightgrey px-3 py-1.5 text-xs font-medium text-black"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
