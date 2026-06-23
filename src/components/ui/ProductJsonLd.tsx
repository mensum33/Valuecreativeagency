import type { Package } from "@/data/packages";
import { absoluteUrl } from "@/lib/site";

interface ProductJsonLdProps {
  pkg: Package;
}

/**
 * Product structured data for package detail pages.
 * Populate image URL when real product photos are uploaded to public/images/.
 */
export default function ProductJsonLd({ pkg }: ProductJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.name,
    description: pkg.seoDescription,
    image: absoluteUrl(`/images/${pkg.imageFolder}/cover.jpg`),
    brand: {
      "@type": "Brand",
      name: "Value Design & Print",
    },
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "NZD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/packages/${pkg.slug}`),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
