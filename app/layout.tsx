import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "inaveen",
  description:
    "Certified frontend developer with 4+ years of experience in React, Next.js, Magento 2, and performance optimization. Explore projects, skills, and career highlights.",
};

export const viewport: Viewport = {
  themeColor: '#00FF66',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
