import Image from 'next/image';
import Link from 'next/link';
import PhotoCard from '@/components/PhotoCard';
import { featured } from '@/lib/photos';

export default function Home() {
  const feature = featured(6);

  return (
    <div>
      <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src="/images/work/group-05.jpg"
          alt="Raj Photography"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/60" />

        <div className="relative z-10 h-full mx-auto max-w-6xl px-6 sm:px-10 flex flex-col justify-end pb-24">
          <p className="text-xs uppercase tracking-[0.35em] text-brass mb-4">
            Photography Studio
          </p>
          <h1 className="font-display text-5xl sm:text-7xl leading-[1.05] max-w-3xl">
            Light, held still —
            <br />
            Raj Photography.
          </h1>
          <p className="mt-6 max-w-md text-mute text-sm leading-relaxed">
            Portraits, group moments, ceremony, and candid documentary work
            rooted in patience, natural light, and honest moments.
          </p>
          <div className="mt-10 flex gap-6">
            <Link
              href="/work"
              className="inline-flex items-center border border-bone/30 px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-bone hover:text-ink transition-colors"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-xs uppercase tracking-[0.2em] text-mute hover:text-brass transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brass mb-3">
              Selected
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">Featured Work</h2>
          </div>
          <Link
            href="/work"
            className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-mute hover:text-brass transition-colors"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {feature.map((p) => (
            <PhotoCard key={p.src} photo={p} />
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-24 grid sm:grid-cols-3 gap-10">
          {[
            { n: '01', t: 'On location or in studio', d: 'Shoots tailored to the story — natural settings or controlled light, whichever serves the frame.' },
            { n: '02', t: 'Careful, unhurried editing', d: 'Every set is hand-graded for tone and consistency before delivery.' },
            { n: '03', t: 'Full-resolution delivery', d: 'Private online gallery with print-ready files, delivered within two weeks.' },
          ].map((item) => (
            <div key={item.n}>
              <p className="font-display text-brass text-lg mb-3">{item.n}</p>
              <h3 className="text-sm uppercase tracking-[0.15em] mb-3">{item.t}</h3>
              <p className="text-mute text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
