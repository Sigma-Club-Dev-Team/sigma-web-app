import type { Metadata } from "next";
import localFont from "next/font/local";

import {
  Geist,
  Geist_Mono,
  Goudy_Bookletter_1911,
  Hanken_Grotesk,
  Inter,
} from "next/font/google";
import "./globals.css";

export const gouldy = Goudy_Bookletter_1911({
  subsets: ["latin"],
  variable: "--font-gouldy",
  weight: "400",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const hankeen = Hanken_Grotesk({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-hankeen",
});

export const goudyOldStyle = localFont({
  src: "../../public/assets/fonts/GOUDOS.ttf",
  variable: "--font-goudy-old-style",
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sigma Club",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} w-full antialiased`}
    >
      <body className="min-h-full w-full">{children}</body>
    </html>
  );
}
