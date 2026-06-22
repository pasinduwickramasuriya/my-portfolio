

import './globals.css';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import MascotRobot from '@/components/MascotRobot';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';


export const metadata = {
  title: "Pasindu Wickramasuriya | Software Engineer & B.IT Graduate",
  description: "Official portfolio of Pasindu Wickramasuriya (also searched as Pasindu Wickramasooriya), a Software Engineer and B.IT Graduate from University of Moratuwa. Discover full-stack web applications, UI/UX designs, and software systems.",
  keywords: [
    "Pasindu Wickramasuriya",
    "Pasindu Wickramasooriya",
    "Pasindu",
    "Pasindu Sadanjana",
    "Pasindu Moratuwa",
    "Software Engineer Pasindu",
    "B.IT University of Moratuwa",
    "Sri Lankan Software Engineer",
    "Pasindu Portfolio"
  ],
  authors: [{ name: "Pasindu Wickramasuriya" }],
  creator: "Pasindu Wickramasuriya",
  metadataBase: new URL("https://pasinduwickramasuriya.github.io"), // Replace with actual URL if different
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pasindu Wickramasuriya | Portfolio",
    description: "Explore the portfolio of Pasindu Wickramasuriya (Pasindu Wickramasooriya), featuring modern web applications, C# desktop tools, and interactive designs.",
    url: "https://pasinduwickramasuriya.github.io",
    siteName: "Pasindu Wickramasuriya Portfolio",
    images: [
      {
        url: "/pasi.png",
        width: 1200,
        height: 630,
        alt: "Pasindu Wickramasuriya Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasindu Wickramasuriya | Portfolio",
    description: "Explore the portfolio of Pasindu Wickramasuriya (Pasindu Wickramasooriya), featuring modern web applications and interactive designs.",
    images: ["/pasi.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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