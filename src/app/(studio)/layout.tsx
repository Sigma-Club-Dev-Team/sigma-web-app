import { NextStudioLayout } from "next-sanity/studio";

/**
 * A second root layout, kept deliberately bare: the Studio ships its own styling
 * and must not inherit the site chrome (Navbar/Footer) or Tailwind's preflight.
 */
export default function StudioRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <NextStudioLayout>{children}</NextStudioLayout>
      </body>
    </html>
  );
}
