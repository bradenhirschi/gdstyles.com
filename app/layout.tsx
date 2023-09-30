import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./navbar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "GD Styles",
  description: "GD Styles Chrome developer extension",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      {children}
      <Footer />
    </html>
  );
}
