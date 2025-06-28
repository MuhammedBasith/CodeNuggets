import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'

import { Arimo } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'

const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeNuggets",
  description: "Join our exclusive community of learners today and elevate your skills to become a part of the top 1% of programmers.",
  openGraph: {
    title: "CodeNuggets - Become a Top 1% Engineer",
    description: "Join our exclusive community of learners today and elevate your skills to become a part of the top 1% of programmers.",
    url: "https://codenuggets.vercel.app",
    siteName: "CodeNuggets",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: 'CodeNuggets - Elevate Your Software Career',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeNuggets - Become a Top 1% Engineer',
    description: 'Join our exclusive community of learners today and elevate your skills to become a part of the top 1% of programmers.',
    images: ['/opengraph.png'],
  },
  metadataBase: new URL('https://codenuggets.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        {children}
      </Providers>
        </body>
    </html>
  );
}
