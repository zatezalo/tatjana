import type { Metadata } from "next";
import "./globals.css";
import LanguageLayout from "@/components/LanguageLayout";

export const metadata: Metadata = {
  title: "Tatjana Šokčić | Team coaching and development program",
  description: "In 12 months, transform your team into a motivated, collaborative, and profitable powerhouse. Complete Team transformation program with proven results.",
  keywords: "Team transformation, team coaching, team building, leadership development, team performance, workplace culture",
  authors: [{ name: "Tatjana Šokčić" }],
  creator: "Tatjana Šokčić",
  publisher: "Tatjana Šokčić",
  icons: {
    icon: "/logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://teamtransformation.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Team transformation Program | Turn Dysfunctional Teams into High-Performing Units",
    description: "Team coaching and leadership development program (12 months). In 12 months, transform your team into a motivated, collaborative, and profitable powerhouse.",
    url: "https://teamtransformation.com",
    siteName: "Tatjana Šokčić",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tatjana Šokčić",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tatjana Šokčić | Team coaching and development program",
    description: "In 12 months, transform your team into a motivated, collaborative, and profitable powerhouse.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageLayout>{children}</LanguageLayout>
      </body>
    </html>
  );
}
