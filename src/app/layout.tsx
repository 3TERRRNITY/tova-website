import type { Metadata } from "next";
import "./globals.scss";
import localFont from "next/font/local";

import Navbar from "../components/Navbar/Navbar";
import Cursor from "../components/Cursor/Cursor";

export const metadata: Metadata = {
  title: "tova — дизайн, разработка, продакшн",
  description:
    "Создаем уникальные концепции и улучшаем существующие подходы, включая дизайн сайтов и приложений, продуктовый дизайн и разработку, дополняя все это качественным видеопродакшном.",
};

const myFont = localFont({ src: "../../public/fonts/Code Next-Trial.woff2" });

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
        <main className={myFont.className}>
          <Cursor />
          <Navbar />

          {children}
        </main>
      </body>
    </html>
  );
}
