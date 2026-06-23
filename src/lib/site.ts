const DEFAULT_SITE_URL = "https://valuedesignprint.co.nz";

/** Canonical site URL — set NEXT_PUBLIC_SITE_URL in Vercel env vars. */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
  return url.replace(/\/$/, "");
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
