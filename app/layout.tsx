

import './globals.css';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  // Updated title to reflect your name (unchanged)
  title: "Pasindu Sadhanjana's Portfolio",
  description: 'A modern portfolio built with Next.js and shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-mono"> {/* Changed: Removed inter.className, added font-mono to use JetBrains Mono */}
        {/* Ensured Navbar and Footer are included for consistent layout */}
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}