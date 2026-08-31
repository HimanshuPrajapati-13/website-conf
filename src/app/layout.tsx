import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { SplashScreen } from "@/components/SplashScreen";
import { site } from "@/lib/data";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SES-IKS 2026 | Sustainable Environmental Solutions Conference",
  description:
    "International Conference on Sustainable Environmental Solutions: Integrating Modern Science and Indigenous Knowledge Systems. 26-27 November 2026, Central University of Rajasthan.",
  keywords: [
    "SES-IKS 2026",
    "environmental science conference",
    "indigenous knowledge systems",
    "Central University of Rajasthan",
    "Tribhuvan University",
  ],
  openGraph: {
    title: "SES-IKS 2026",
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <body>
        <SplashScreen />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
