import type { Metadata } from "next";
import { SITE_NAME } from "./constants";
import { absoluteUrl, getSiteUrl } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path,
}: PageMeta): Metadata {
  const canonical = path ? absoluteUrl(path) : getSiteUrl();
  const ogTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      locale: "en_NZ",
      siteName: SITE_NAME,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
