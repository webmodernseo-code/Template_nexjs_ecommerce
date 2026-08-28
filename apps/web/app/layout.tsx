import type { Metadata } from "next";
import { Public_Sans, Urbanist, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import NewsLetter from "@/components/common/news-letter";
import Navbar from "@/components/layout/navbar";
import ScrollToTop from "@/components/common/scroll-to-top";
import { QuickViewProvider } from "@/context/quick-view-context";
import NextTopLoader from "nextjs-toploader";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sellzy-template.vercel.app"),
  title: {
    default: "Sellzy - Multivendor eCommerce Next.js Template",
    template: "%s | Sellzy",
  },
  description:
    "Sellzy is a premium multivendor eCommerce Next.js template featuring 5+ home demos, vendor dashboards, product pages, and a fully responsive design built for modern online marketplaces.",
  keywords: [
    "ecommerce template",
    "next.js ecommerce",
    "multivendor marketplace",
    "online store template",
    "react ecommerce",
    "themeforest",
    "sellzy",
    "vendor dashboard",
    "shopping cart",
    "product catalog",
  ],
  authors: [{ name: "Createuiux" }],
  creator: "Createuiux",
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
  openGraph: {
    title: "Sellzy - Multivendor eCommerce Next.js Template",
    description:
      "Premium multivendor eCommerce Next.js template with 5+ home demos, vendor dashboards, and a fully responsive design.",
    type: "website",
    locale: "en_US",
    siteName: "Sellzy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sellzy - Multivendor eCommerce Next.js Template",
    description:
      "Premium multivendor eCommerce Next.js template with 5+ home demos, vendor dashboards, and a fully responsive design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/icons/hugeicons/hgi-stroke-rounded.css" />
      </head>
      <body
        className={`${publicSans.variable} ${urbanist.variable} ${dmSans.variable} antialiased`}
      >
        <NextTopLoader color="#ffc107" showSpinner={false} />
        <QuickViewProvider>
          <Navbar />
          {children}
        </QuickViewProvider>
        <NewsLetter />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
