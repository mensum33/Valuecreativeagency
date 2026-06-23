import Link from "next/link";
import type { RecentWork } from "@/data/recentWork";
import ImageWithFallback from "./ImageWithFallback";

interface RecentWorkCardProps {
  work: RecentWork;
}

export default function RecentWorkCard({ work }: RecentWorkCardProps) {
  return (
    <article className="card-premium group overflow-hidden">
      <Link href={`/recent-work/${work.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <ImageWithFallback folder={work.imageFolder} alt={work.title} fill />
      </Link>
      <div className="p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{work.industry}</p>
        <Link href={`/recent-work/${work.slug}`}>
          <h3 className="mt-2 text-lg font-display font-semibold text-navy group-hover:text-accent transition-colors">
            {work.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">{work.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {work.services.map((s) => (
            <span key={s} className="rounded-full bg-sky/50 px-3 py-1 text-xs font-medium text-navy">
              {s}
            </span>
          ))}
        </div>
        <Link href={`/recent-work/${work.slug}`} className="btn-ghost mt-4 inline-flex">
          View Project
        </Link>
      </div>
    </article>
  );
}
