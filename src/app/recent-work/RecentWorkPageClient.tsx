"use client";

import { useMemo, useState } from "react";
import RecentWorkGrid from "@/components/ui/RecentWorkGrid";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { recentWork, workIndustries, type WorkIndustry } from "@/data/recentWork";

export default function RecentWorkPageClient() {
  const [filter, setFilter] = useState<WorkIndustry | "All">("All");

  const filtered = useMemo(() => {
    if (filter === "All") return recentWork;
    return recentWork.filter((w) => w.industry === filter);
  }, [filter]);

  return (
    <div className="container-site section-padding">
      <Breadcrumbs items={[{ label: "Recent Work" }]} />
      <header className="max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-display font-semibold text-navy">Recent Work</h1>
        <p className="mt-4 text-muted leading-relaxed">
          Real design, print and digital media projects completed for businesses, events and community groups.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-2">
        {(["All", ...workIndustries] as const).map((ind) => (
          <button
            key={ind}
            type="button"
            onClick={() => setFilter(ind)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === ind ? "bg-black text-white" : "bg-white border border-border text-muted hover:text-black"
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <RecentWorkGrid items={filtered} />
      </div>
    </div>
  );
}
