import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Team Transformation Program | Turn Dysfunctional Teams into High-Performing Units",
  description: "In 12 months, transform your team into a motivated, collaborative, and profitable powerhouse. Complete team transformation program with proven results.",
  keywords: "team transformation, team coaching, team building, leadership development, team performance, workplace culture",
  authors: [{ name: "Team Transformation Program" }],
  creator: "Team Transformation Program",
  publisher: "Team Transformation Program",
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
    title: "Team Transformation Program | Turn Dysfunctional Teams into High-Performing Units",
    description: "Team coaching and leadership development program (12 months). In 12 months, transform your team into a motivated, collaborative, and profitable powerhouse.",
    url: "https://teamtransformation.com",
    siteName: "Team Transformation Program",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team Transformation Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Transformation Program | Turn Dysfunctional Teams into High-Performing Units",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
