import type React from "react";
import type { Metadata } from "next";
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zprroofing.com"),
  title: {
    default: "ZPR Roofing | Roofer in Rockford, IL & Southern Wisconsin",
    template: "%s | ZPR Roofing",
  },
  description:
    "Family-owned roofing contractor serving Northern Illinois and Southern Wisconsin. Roof repair, replacement, metal, commercial and storm damage. Free estimates.",
  authors: [{ name: "ZPR Roofing" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.zprroofing.com",
    siteName: "ZPR Roofing",
  },
  twitter: {
    card: "summary_large_image",
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
  icons: {
    icon: "/tab-logo.png",
    shortcut: "/tab-logo.png",
    apple: "/tab-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="NiC6IylfCAzclWxmgAPnSclJry1FegpyeW5TNUck2UQ"
        />
        <link
          rel="icon"
          href="/tab-logo.png"
          type="image/svg+xml"
          style={{ width: "100px", height: "100px" }}
        />
        <link
          rel="shortcut icon"
          href="/tab-logo.png"
          style={{ width: "100px", height: "100px" }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
