import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { geistSans, luxeSerif } from "styles/fonts";
import "styles/globals.css";

export const metadata: Metadata = {
  title: "Sovereign Atelier - World's Most Exquisite Art Collection",
  description:
    "Discover and acquire museum-caliber masterpieces curated for the world's most discerning collectors.",
  keywords:
    "expensive art, luxury art collection, fine art, art investment, masterpiece paintings, art gallery, Leonardo da Vinci, contemporary art",
  authors: [{ name: "Sovereign Atelier" }],
  creator: "Sovereign Atelier",
  publisher: "Sovereign Atelier",
  metadataBase: new URL("https://sovereign-atelier.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Sovereign Atelier - World's Most Exquisite Art Collection",
    description:
      "Discover and acquire the world's most prestigious and expensive artworks.",
    url: "https://sovereign-atelier.com",
    siteName: "Sovereign Atelier",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sovereign Atelier - Luxury Art Collection"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Atelier - World's Most Exquisite Art Collection",
    description:
      "Discover and acquire the world's most prestigious and expensive artworks.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} ${luxeSerif.variable} overscroll-none antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        {children}
        <Toaster position="top-center" richColors closeButton />
        <Analytics debug={false} />
      </body>
    </html>
  );
}
