import ImageWithFallback from "./ImageWithFallback";

interface ImageGalleryProps {
  folder: string;
  alt: string;
  count?: number;
}

export default function ImageGallery({ folder, alt, count = 4 }: ImageGalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border sm:col-span-2 sm:row-span-2 sm:aspect-[16/10]">
        <ImageWithFallback folder={folder} alt={alt} fill />
      </div>
      {Array.from({ length: count - 1 }).map((_, i) => (
        <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
          <ImageWithFallback folder={folder} alt={`${alt} — view ${i + 2}`} fill />
        </div>
      ))}
    </div>
  );
}
