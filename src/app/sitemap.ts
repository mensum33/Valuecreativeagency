import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { industries } from "@/data/industries";
import { policies } from "@/data/policies";
import { packages } from "@/data/packages";
import { recentWork } from "@/data/recentWork";
import { absoluteUrl } from "@/lib/site";

const staticRoutes = [
  "",
  "/packages",
  "/services",
  "/industries",
  "/recent-work",
  "/how-it-works",
  "/upload-artwork",
  "/about",
  "/contact",
  "/design-tips",
  "/faq",
  "/checkout",
  "/thank-you",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/packages" ? 0.9 : 0.7,
  }));

  for (const pkg of packages) {
    entries.push({
      url: absoluteUrl(`/packages/${pkg.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }

  for (const work of recentWork) {
    entries.push({
      url: absoluteUrl(`/recent-work/${work.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const industry of industries) {
    entries.push({
      url: absoluteUrl(`/industries/${industry.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  for (const post of blogPosts) {
    entries.push({
      url: absoluteUrl(`/design-tips/${post.slug}`),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }

  for (const policy of policies) {
    entries.push({
      url: absoluteUrl(`/${policy.slug}`),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    });
  }

  return entries;
}
