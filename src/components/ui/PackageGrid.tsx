import type { Package } from "@/data/packages";
import PackageCard from "./PackageCard";

interface PackageGridProps {
  packages: Package[];
  columns?: 2 | 3 | 4;
}

export default function PackageGrid({ packages, columns = 3 }: PackageGridProps) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-6 md:gap-8 ${colClass}`}>
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
}
