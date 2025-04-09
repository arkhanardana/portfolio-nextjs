import "./globals.css";
import { GeistSans } from "geist/font/sans";
import LenisProvider from "@/providers/lenis-provider";
const font = GeistSans;

export const metadata = {
  title: "Arkhan Ardana Portfolio",
  description:
    "Currently attending SMK Negeri 2 Yogyakarta as a 12th-grade student majoring in Sistem Informasi Jaringan dan Aplikasi (SIJA), which focuses on building, managing, and securing computer networks, as well as developing software applications.",
  keywords: "Arkhan Ardana, arkhanardana, arkhan ardana, portfolio arkhan ardana, portfolio next js, portfolio arkhan",
  authors: {
    name: "Arkhan Ardana",
    url: "https://arkhanardana.my.id",
  },
  robots: "index, follow",
  openGraph: {
    title: "Arkhan Ardana Portfolio",
    description:
      "Currently attending SMK Negeri 2 Yogyakarta as a 12th-grade student majoring in Sistem Informasi Jaringan dan Aplikasi (SIJA), which focuses on building, managing, and securing computer networks, as well as developing software applications.",
    url: "https://arkhanardana.my.id",
    siteName: "Arkhan Ardana Portfolio",
    images: [
      {
        url: "/preview-image.png",
        width: 1200,
        height: 630,
        alt: "Preview of Arkhan Ardana's Portfolio Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arkhanardana",
    title: "Arkhan Ardana - Portfolio",
    description:
      "Currently attending SMK Negeri 2 Yogyakarta as a 12th-grade student majoring in Sistem Informasi Jaringan dan Aplikasi (SIJA), which focuses on building, managing, and securing computer networks, as well as developing software applications.",
    images: "/preview-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="selection:bg-slate-800 selection:text-white">
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="google-site-verification" content="vddL4RIMEBuMyzipQ4Rlv-rQrepggxLZ-zDMNEELlHk" />
      <body className={`${font.className}`}>
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
