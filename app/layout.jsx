import "./globals.css";
import { GeistSans } from "geist/font/sans";
import LenisProvider from "@/providers/lenis-provider";
const font = GeistSans;

export const metadata = {
  title: "Arkhan Ardana Portfolio",
  description: "Explore the portfolio of Arkhan Ardana, showcasing projects, achievements, and skills.",
  openGraph: {
    title: "Arkhan Ardana Portfolio",
    description: "Explore the portfolio of Arkhan Ardana, showcasing projects, achievements, and skills.",
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
