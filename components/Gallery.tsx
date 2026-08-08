'use client';

import { useState } from 'react';
import PhotoCard from './PhotoCard';
import { categories, photos, type Category } from '@/lib/photos';

export default function Gallery() {
  const [active, setActive] = useState<Category | 'all'>('all');

  const visible =
    active === 'all' ? photos : photos.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12">
        <button
          onClick={() => setActive('all')}
          className={`text-xs uppercase tracking-[0.2em] transition-colors ${
            active === 'all' ? 'text-brass' : 'text-mute hover:text-bone'
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setActive(c.slug)}
            className={`text-xs uppercase tracking-[0.2em] transition-colors ${
              active === c.slug ? 'text-brass' : 'text-mute hover:text-bone'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {visible.map((p) => (
          <PhotoCard key={p.src} photo={p} />
        ))}
      </div>
    </div>
  );
}
