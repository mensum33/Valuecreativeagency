import AboutPage from "@/components/about/AboutPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Value Design & Print | Design, Print & Digital Media NZ",
  description:
    "Learn about Value Design & Print, a Christchurch-based design, print and digital media studio helping NZ small businesses look professional with fixed-price packages, two design options and proof before print.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
