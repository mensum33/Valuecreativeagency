import RecentWorkPageClient from "./RecentWorkPageClient";
import CTASection from "@/components/ui/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Recent Work",
  description:
    "Real design, print and digital media projects for New Zealand businesses, events and community groups.",
  path: "/recent-work",
});

export default function RecentWorkPage() {
  return (
    <>
      <RecentWorkPageClient />
      <CTASection />
    </>
  );
}
