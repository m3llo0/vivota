import type { Metadata } from "next";
import { Cabin } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/animated_bg";
import Navbar from "@/components/navbar";

const cabin = Cabin({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cabin',
});

export const metadata: Metadata = {
  title: "Vivota Education | Founded by Medical Students in Singapore",
  description: `Vivota Education is a trusted tuition centre in Singapore, founded by medical school students who personally tutor. 
  We offer affordable, high-quality tuition for Junior College students in Chemistry, Physics, Biology, Math, and General Paper to
  help students excel academically.`,
  icons: {
    icon: '/favicons/favicon.ico',
    apple: '/favicons/apple-icon.png',
    other: [
      { rel: 'icon', url: '/favicons/web-app-manifest-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/favicons/web-app-manifest-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/favicons/manifest.json', 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabin.variable} antialiased `}
      >
        <AnimatedBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
