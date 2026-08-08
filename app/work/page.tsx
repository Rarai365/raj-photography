import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Work — Raj Photography',
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-20 sm:py-28">
      <p className="text-xs uppercase tracking-[0.3em] text-brass mb-3">
        Portfolio
      </p>
      <h1 className="font-display text-4xl sm:text-5xl mb-16 max-w-2xl">
        A collection of work across portrait, group, ceremony, and candid
        moments.
      </h1>

      <Gallery />
    </div>
  );
}
