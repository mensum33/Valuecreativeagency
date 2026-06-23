import HomePage from "@/components/home/HomePage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Value Design & Print — Big-agency style. Small-business pricing.",
  description:
    "Agency-quality design, print and digital media packages for New Zealand small businesses. Fixed prices, two design options, proof before print.",
});

export default function Page() {
  return <HomePage />;
}
