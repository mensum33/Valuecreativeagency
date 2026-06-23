import { EXPERIENCE_COPY, EXPERIENCE_COPY_SECOND, EXPERIENCE_HEADING } from "@/lib/constants";

interface ExperienceBlockProps {
  className?: string;
}

export default function ExperienceBlock({ className = "" }: ExperienceBlockProps) {
  return (
    <div className={`border-t border-border pt-8 mt-8 ${className}`}>
      <h3 className="text-xl md:text-2xl font-display font-semibold text-black">
        {EXPERIENCE_HEADING}
      </h3>
      <p className="mt-4 text-muted leading-relaxed">{EXPERIENCE_COPY}</p>
      <p className="mt-4 text-muted leading-relaxed">{EXPERIENCE_COPY_SECOND}</p>
    </div>
  );
}
