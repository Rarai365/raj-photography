'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-ink/70 border-b border-line">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg sm:text-xl tracking-[0.15em] text-bone uppercase"
        >
          Raj Photography
        </Link>

        <nav className="hidden sm:flex items-center gap-10">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-xs uppercase tracking-[0.2em] transition-colors ${
                  active ? 'text-brass' : 'text-mute hover:text-bone'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="sm:hidden flex flex-col gap-1.5 w-6"
        >
          <span className="h-px bg-bone w-full" />
          <span className="h-px bg-bone w-full" />
        </button>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-line bg-ink">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block text-sm uppercase tracking-[0.2em] ${
                    pathname === l.href ? 'text-brass' : 'text-mute'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
