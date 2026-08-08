export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line mt-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg tracking-[0.15em] uppercase text-bone">
            Raj Photography
          </p>
          <p className="text-xs text-mute mt-1">Photography &amp; visual studies</p>
        </div>

        <div className="flex gap-8 text-xs uppercase tracking-[0.2em] text-mute">
          <a href="mailto:hello@rajphotography.com" className="hover:text-brass transition-colors">
            Email
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brass transition-colors">
            Instagram
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noreferrer" className="hover:text-brass transition-colors">
            Behance
          </a>
        </div>

        <p className="text-xs text-mute">&copy; {year} Raj Photography</p>
      </div>
    </footer>
  );
}
