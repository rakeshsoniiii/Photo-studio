import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Studio Erato Films — Destination Weddings & Bespoke Films",
  description:
    "Studio Erato Films captures destination weddings with documentary emotion and editorial precision. Based in Ranchi, traveling across India. Limited to 30 weddings per year.",
  keywords: [
    "Wedding Photographer",
    "Destination Wedding Photographer",
    "Wedding Films",
    "Wedding Photography Ranchi",
    "Wedding Photographer Jharkhand",
    "Destination Wedding Photography India",
    "Cinematic Wedding Films",
    "Editorial Wedding Photography",
  ],
  openGraph: {
    title: "Studio Erato Films — Destination Weddings & Bespoke Films",
    description:
      "Documentary emotion. Editorial frames. Timeless films. Limited to 30 weddings per year.",
    type: "website",
    locale: "en_IN",
    siteName: "Studio Erato Films",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Erato Films",
    description: "Weddings, Told Like Cinema.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
