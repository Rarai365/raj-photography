import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About — Raj Photography',
};

const equipment = [
  'Full-frame mirrorless bodies',
  '35mm / 50mm / 85mm primes',
  '70-200mm f/2.8 zoom',
  'Off-camera flash & continuous LED kit',
  'Medium format for select event work',
];

const timeline = [
  { year: '2016', event: 'Picked up a first camera, started shooting street and travel.' },
  { year: '2019', event: 'Began taking on portrait and small event commissions.' },
  { year: '2022', event: 'Founded Raj Photography as a full-time studio.' },
  { year: '2026', event: 'Working across portrait, group, ceremony, and candid documentary work.' },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-20 sm:py-28">
      <div className="grid sm:grid-cols-2 gap-12 sm:gap-20 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brass mb-3">
            About
          </p>
          <h1 className="font-display text-4xl sm:text-5xl mb-8">
            Behind Raj Photography
          </h1>
          <div className="space-y-5 text-mute text-sm leading-relaxed">
            <p>
              Raj Photography is a studio built around a simple idea: light
              tells the story, the camera just holds still long enough to
              catch it. Every shoot — whether a quiet portrait session or a
              full day of celebration — starts with watching how light moves
              through a space before a single frame is taken.
            </p>
            <p>
              The work spans portraits, group photography, ceremony, and
              candid documentary moments, but the throughline is the same
              across all of it: patience, natural light where possible, and
              images that hold up over time rather than chase a trend.
            </p>
            <p>
              Based on location, available for travel. Currently booking new
              portrait and event sessions.
            </p>
          </div>
        </div>

        <div className="relative w-full aspect-[1080/1616] bg-panel">
          <Image
            src="/images/work/portrait-04.jpg"
            alt="Raj Photography — festival portrait"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-16 mt-28">
        <div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-brass mb-8">
            Timeline
          </h2>
          <ul className="space-y-6">
            {timeline.map((t) => (
              <li key={t.year} className="flex gap-6 border-b border-line pb-6">
                <span className="font-display text-brass text-lg w-16 shrink-0">
                  {t.year}
                </span>
                <span className="text-sm text-mute leading-relaxed">
                  {t.event}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-brass mb-8">
            Kit
          </h2>
          <ul className="space-y-4">
            {equipment.map((e) => (
              <li
                key={e}
                className="text-sm text-mute border-b border-line pb-4"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
