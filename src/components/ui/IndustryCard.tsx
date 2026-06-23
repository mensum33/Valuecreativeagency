import Link from "next/link";
import type { Industry } from "@/data/industries";
import { getPackageBySlug } from "@/data/packages";
import ImageWithFallback from "./ImageWithFallback";

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  const packages = industry.packageSlugs
    .slice(0, 3)
    .map((slug) => getPackageBySlug(slug))
    .filter(Boolean);

  return (
    <article className="card-premium group overflow-hidden">
      <Link href={`/industries/${industry.slug}`} className="relative block aspect-[16/10] overflow-hidden img-bw">
        <ImageWithFallback folder={industry.imageFolder} alt={industry.name} fill />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <h3 className="text-xl font-display font-semibold text-white">{industry.name}</h3>
          <p className="mt-1 text-sm text-white/80 line-clamp-2">{industry.shortDescription}</p>
        </div>
      </Link>
      <div className="p-5 md:p-6">
        <ul className="space-y-2">
          {packages.map((pkg) => pkg && (
            <li key={pkg.slug}>
              <Link
                href={`/packages/${pkg.slug}`}
                className="text-sm text-muted hover:text-black hover:underline transition-colors"
              >
                {pkg.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={`/industries/${industry.slug}`} className="btn-secondary mt-4 w-full text-center text-sm py-2.5">
          View Packages
        </Link>
      </div>
    </article>
  );
}
