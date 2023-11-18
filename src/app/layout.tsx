import type { Metadata } from "next";
import "./globals.scss";
import Footer from "../components/Footer/Footer";
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
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
