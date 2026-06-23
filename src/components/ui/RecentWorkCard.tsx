import Link from "next/link";
import type { RecentWork } from "@/data/recentWork";
import ImageWithFallback from "./ImageWithFallback";

interface RecentWorkCardProps {
  work: RecentWork;
}

export default function RecentWorkCard({ work }: RecentWorkCardProps) {
  return (
    <article className="card-premium group overflow-hidden flex flex-col">
      <Link
        href={`/recent-work/${work.slug}`}
        className="relative block aspect-[5/4] overflow-hidden"
      >
        <ImageWithFallback
          folder={work.imageFolder}
          alt={work.title}
          fill
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          {work.industry}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <Link href={`/recent-work/${work.slug}`}>
          <h3 className="text-xl font-display font-semibold text-navy group-hover:text-accent transition-colors">
            {work.title}
          </h3>
        </Link>
        <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-2">{work.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {work.services.map((s) => (
            <span key={s} className="rounded-full bg-sky/50 px-3 py-1 text-xs font-medium text-navy">
              {s}
            </span>
          ))}
        </div>
        <Link
          href={`/recent-work/${work.slug}`}
          className="btn-secondary mt-auto pt-5 w-full sm:w-auto text-center text-sm"
        >
          View Project
        </Link>
      </div>
    </article>
  );
}
