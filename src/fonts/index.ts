import localFont from "next/font/local";

import { Hanken_Grotesk, Inter } from "next/font/google";

export const hankeen = Hanken_Grotesk({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-hankeen",
});

export const goudyOldStyle = localFont({
  src: "./GoudyOldStyle.ttf",
  variable: "--font-goudy-old-style",
  weight: "400",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});
