import Link from "next/link";
import type { Package } from "@/data/packages";
import { formatPrice } from "@/lib/format";
import ImageWithFallback from "./ImageWithFallback";
import TrustBadges from "./TrustBadges";

interface PackageCardProps {
  pkg: Package;
  variant?: "default" | "compact";
}

export default function PackageCard({ pkg, variant = "default" }: PackageCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/packages/${pkg.slug}`} className="card-premium group block overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden img-bw">
          <ImageWithFallback folder={pkg.imageFolder} alt={pkg.name} fill />
        </div>
        <div className="p-4">
          <p className="font-semibold text-black group-hover:underline transition-colors line-clamp-2">
            {pkg.name}
          </p>
          <p className="mt-1 text-lg font-display text-black">{formatPrice(pkg.price)}</p>
        </div>
      </Link>
    );
  }

  return (
    <article className="card-premium group flex flex-col overflow-hidden">
      <Link href={`/packages/${pkg.slug}`} className="relative aspect-[4/3] overflow-hidden block img-bw">
        <ImageWithFallback folder={pkg.imageFolder} alt={pkg.name} fill />
        <div className="absolute top-3 right-3 rounded-full bg-white px-3 py-1.5 text-sm font-display font-semibold text-black border border-border">
          {formatPrice(pkg.price)}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <Link href={`/packages/${pkg.slug}`}>
          <h3 className="text-lg font-display font-semibold text-black group-hover:underline transition-colors">
            {pkg.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
          {pkg.shortDescription}
        </p>
        <TrustBadges tags={pkg.trustTags} className="mt-4" />
        <div className="mt-auto pt-5 flex flex-col sm:flex-row gap-3">
          <Link href={`/checkout?package=${pkg.slug}`} className="btn-primary text-center flex-1">
            {pkg.buyButtonLabel}
          </Link>
          <Link href={`/packages/${pkg.slug}`} className="btn-ghost text-center">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
