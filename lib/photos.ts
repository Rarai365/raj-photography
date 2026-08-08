import manifest from './photo-manifest.json';

export type Category = 'portrait' | 'group' | 'ceremony' | 'candid';

export type Photo = {
  src: string;
  category: Category;
  w: number;
  h: number;
  title: string;
};

export const photos: Photo[] = manifest as Photo[];

export const categories: { slug: Category; label: string }[] = [
  { slug: 'portrait', label: 'Portrait' },
  { slug: 'group', label: 'Group' },
  { slug: 'ceremony', label: 'Ceremony' },
  { slug: 'candid', label: 'Candid' },
];

export function featured(count = 6): Photo[] {
  const step = Math.max(1, Math.floor(photos.length / count));
  const out: Photo[] = [];
  for (let i = 0; i < photos.length && out.length < count; i += step) {
    out.push(photos[i]);
  }
  return out;
}
