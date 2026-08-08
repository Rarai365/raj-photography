import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Raj Photography',
  description:
    'Raj Photography — portrait, group, ceremony, and candid documentary photography.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-ink text-bone antialiased">
        <div className="grain" />
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
