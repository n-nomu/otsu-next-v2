import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { CurrencyProvider } from "@/lib/currency-context";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "乙 otsu | Bizen Ware from Okayama to London",
  description: "Handcrafted Bizen-yaki ceramics from Okayama, Japan. Each piece is unique, fired in wood-burning kilns for 14 days. Delivered worldwide.",
  keywords: ["Bizen ware", "Bizen-yaki", "Japanese ceramics", "pottery", "Okayama", "London", "handcrafted", "artisan"],
  openGraph: {
    title: "乙 otsu | Bizen Ware from Okayama to London",
    description: "Handcrafted Bizen-yaki ceramics from Okayama, Japan. Each piece is unique, fired in wood-burning kilns for 14 days.",
    url: "https://otsu-next-v2.vercel.app",
    siteName: "乙 otsu",
    images: [
      {
        url: "https://otsu-next-v2.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "乙 otsu - Bizen Ware from Okayama to London",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "乙 otsu | Bizen Ware from Okayama to London",
    description: "Handcrafted Bizen-yaki ceramics from Okayama, Japan. Each piece is unique.",
    images: ["https://otsu-next-v2.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-B7T18E1YDX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B7T18E1YDX');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
        <CookieBanner />
      </body>
    </html>
  );
}