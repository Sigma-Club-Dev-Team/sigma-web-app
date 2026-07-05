import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { hankeen } from "@/fonts";

export const metadata: Metadata = {
  title: "Sigma Club",
  description: "For all that is pure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankeen.className} w-full antialiased`}>
      <body className="min-h-full w-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
