"use client";

import { useMemo, useState } from "react";
import PackageGrid from "@/components/ui/PackageGrid";
import TrustBadges from "@/components/ui/TrustBadges";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  packages,
  packageCategories,
  type PackageCategory,
} from "@/data/packages";

type SortOption = "featured" | "price-asc" | "price-desc";

export default function PackagesPageClient() {
  const [category, setCategory] = useState<PackageCategory | "All">("All");
  const [sort, setSort] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    let result = category === "All" ? [...packages] : packages.filter((p) => p.category === category);

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [category, sort]);

  return (
    <div className="container-site section-padding">
      <Breadcrumbs items={[{ label: "Packages" }]} />

      <header className="max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-display font-semibold text-navy">
          Shop Design + Print Packages
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          Fixed-price packages with two design options, proof approval and NZ-wide delivery.
        </p>
      </header>

      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-56 shrink-0">
          <h2 className="text-sm font-semibold text-navy mb-3">Category</h2>
          <ul className="flex flex-wrap lg:flex-col gap-2">
            {(["All", ...packageCategories] as const).map((cat) => (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors w-full text-left ${
                    category === cat
                      ? "bg-black text-white"
                      : "text-muted hover:bg-lightgrey hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 hidden lg:block">
            <h2 className="text-sm font-semibold text-navy mb-3">Every package includes</h2>
            <TrustBadges variant="grid" />
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <p className="text-sm text-muted">{filtered.length} packages</p>
            <label className="flex items-center gap-2 text-sm">
              <span className="text-muted">Sort:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="rounded-lg border border-border bg-white px-3 py-2 text-black focus:outline focus:outline-2 focus:outline-black"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price low to high</option>
                <option value="price-desc">Price high to low</option>
              </select>
            </label>
          </div>

          <PackageGrid packages={filtered} columns={3} />

          <div className="mt-10 lg:hidden">
            <TrustBadges variant="grid" />
          </div>
        </div>
      </div>
    </div>
  );
}
