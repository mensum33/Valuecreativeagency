import PackagesPageClient from "./PackagesPageClient";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Shop Design + Print Packages",
  description:
    "Fixed-price design and print packages with two design options, proof approval and NZ-wide delivery.",
  path: "/packages",
});

export default function PackagesPage() {
  return <PackagesPageClient />;
}
