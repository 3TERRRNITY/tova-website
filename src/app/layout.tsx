import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

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
    <html lang="en">
      <body>{children}</body>
      <Navbar />
    </html>
  );
}
