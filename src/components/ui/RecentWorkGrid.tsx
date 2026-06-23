import type { RecentWork } from "@/data/recentWork";
import RecentWorkCard from "./RecentWorkCard";

interface RecentWorkGridProps {
  items: RecentWork[];
}

export default function RecentWorkGrid({ items }: RecentWorkGridProps) {
  return (
    <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((work) => (
        <RecentWorkCard key={work.id} work={work} />
      ))}
    </div>
  );
}
