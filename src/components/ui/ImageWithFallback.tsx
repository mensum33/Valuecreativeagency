"use client";

import Image from "next/image";
import { useState } from "react";
import { getImageCandidates } from "@/lib/images";

interface ImageWithFallbackProps {
  folder: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export default function ImageWithFallback({
  folder,
  alt,
  className = "",
  fill,
  width = 600,
  height = 400,
  priority,
  sizes,
}: ImageWithFallbackProps) {
  const candidates = getImageCandidates(folder);
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed || index >= candidates.length) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-lightgrey via-offwhite to-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="text-center p-6">
          <div className="mx-auto mb-3 h-12 w-12 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
            <svg className="h-6 w-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-xs text-muted font-medium">Photo coming soon</p>
        </div>
      </div>
    );
  }

  const src = candidates[index];

  const handleError = () => {
    if (index < candidates.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setFailed(true);
    }
  };

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        onError={handleError}
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      sizes={sizes}
    />
  );
}
