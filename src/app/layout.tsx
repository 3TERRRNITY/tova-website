import type { Metadata } from "next";
import "./globals.scss";

import Navbar from "../components/Navbar/Navbar";
import Cursor from "../components/Cursor/Cursor";

export const metadata: Metadata = {
  title: "TOVA",
  description: "Про дизайн",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/favicons/favicon-black.png" />
        <link
          rel="icon"
          media="(prefers-color-scheme: dark)"
          href="/favicons/favicon-white.png"
        ></link>
      </head>
      <body suppressHydrationWarning={true}>
        <Cursor />
        <Navbar />

        {children}
      </body>
    </html>
  );
}
