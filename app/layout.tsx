import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sark - SEO Agency",
  description:
    "Search engine optimization agency helping businesses improve their online visibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}