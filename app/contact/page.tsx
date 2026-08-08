import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Raj Photography',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-20 sm:py-28">
      <div className="grid sm:grid-cols-2 gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brass mb-3">
            Contact
          </p>
          <h1 className="font-display text-4xl sm:text-5xl mb-8">
            Let&rsquo;s make something.
          </h1>
          <p className="text-mute text-sm leading-relaxed max-w-sm mb-12">
            Currently booking portrait and event sessions. Send a few
            details about your project and expect a reply within two
            business days.
          </p>

          <dl className="space-y-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-mute mb-1">
                Email
              </dt>
              <dd>
                <a
                  href="mailto:hello@rajphotography.com"
                  className="hover:text-brass transition-colors"
                >
                  hello@rajphotography.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-mute mb-1">
                Studio
              </dt>
              <dd className="text-mute">Available for travel worldwide</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-mute mb-1">
                Social
              </dt>
              <dd className="flex gap-6 mt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brass transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brass transition-colors"
                >
                  Behance
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
