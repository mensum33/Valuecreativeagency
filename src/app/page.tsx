import HomePage from "@/components/home/HomePage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "NZ-Wide Design & Print Packages | Value Design & Print",
  description:
    "Agency-quality design, print and digital media packages for NZ small businesses. Choose a package, get two design options, approve your proof and receive printed products delivered NZ-wide.",
});

export default function Page() {
  return <HomePage />;
}
