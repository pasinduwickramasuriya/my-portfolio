

import './globals.css';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import MascotRobot from '@/components/MascotRobot';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';


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
    <html lang="en">
      <body className="font-mono cursor-none"> {/* Added cursor-none to hide default cursor */}
        <CustomCursor />
        <SmoothScroll>
          {/* Ensured Navbar and Footer are included for consistent layout */}
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <MascotRobot />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}