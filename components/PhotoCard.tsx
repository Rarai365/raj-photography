import Image from 'next/image';
import type { Photo } from '@/lib/photos';

export default function PhotoCard({
  photo,
  aspectRatio,
}: {
  photo: Photo;
  aspectRatio?: string;
}) {
  return (
    <figure className="group relative overflow-hidden bg-panel">
      <div
        style={{ aspectRatio: aspectRatio ?? `${photo.w} / ${photo.h}` }}
        className="relative w-full"
      >
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <figcaption className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-brass">
            {photo.category}
          </p>
          <p className="font-display text-lg text-bone mt-1">{photo.title}</p>
        </div>
      </figcaption>
    </figure>
  );
}
