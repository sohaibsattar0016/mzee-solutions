import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Spotlight } from "@/components/ui/Spotlight";
import { PageBackground } from "@/components/ui/PageBackground";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MZee Solutions | Premium AI & Web Agency",
  description:
    "Engineering intelligence for tomorrow. Premium web development, AI solutions, and digital marketing services.",
  keywords: [
    "AI agency",
    "web development",
    "digital marketing",
    "Next.js",
    "machine learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-bg text-white min-h-screen`}
      >
        <PageBackground />
        <Spotlight className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </Spotlight>
      </body>
    </html>
  );
}
