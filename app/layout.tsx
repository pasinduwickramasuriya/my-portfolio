

import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  // Updated title to reflect your name
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
      <body className={inter.className}>
        {/* Ensured Navbar and Footer are included for consistent layout */}
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}