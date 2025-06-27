import type { Metadata } from "next";
import "./globals.css";
import { FontAwesomeScript } from "@/components/FontAwesome";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Arjan den Hartog",
  description: "Website en ICT diensten door Arjan den Hartog",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark scroll-smooth">
      <head>
        <FontAwesomeScript />
      </head>
      <body
        className="antialiased font-sans"
      >
        {children}
        <Toaster position="bottom-right" />
        <Analytics />
      </body>
    </html>
  );
}
