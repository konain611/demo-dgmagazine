import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/menus/Header";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/menus/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DG Magazine",
  description: "DGMAGAZINE powered by DG ACADEMY and R&D Team. Supported by DIGINFO to provide a holistic view of cyber security to drive the cyber security community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
