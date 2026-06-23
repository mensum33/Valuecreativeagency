const PLACEHOLDER = "/images/placeholder.svg";

/**
 * Build candidate image paths for a folder under /public/images/.
 * Tries the most common filenames first, then falls back to the global placeholder.
 */
export function getImageCandidates(folder: string): string[] {
  const base = `/images/${folder.replace(/^\/+/, "").replace(/\/+$/, "")}`;

  return [
    `${base}/cover.svg`,
    `${base}/cover.jpg`,
    `${base}/cover.jpeg`,
    `${base}/cover.png`,
    `${base}/cover.webp`,
    `${base}/hero.jpg`,
    `${base}/01.jpg`,
    PLACEHOLDER,
  ];
}

export function getCoverImage(folder: string): string {
  return getImageCandidates(folder)[0];
}
