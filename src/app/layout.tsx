import type { Metadata } from "next";
import "./globals.scss";

import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import Cursor from "../components/Cursor/Cursor";

export const metadata: Metadata = {
  title: "TOVA",
  description: "Про дизайн",
  icons: "/favicons/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body suppressHydrationWarning={true}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
