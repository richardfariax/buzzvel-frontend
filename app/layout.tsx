import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buzzvel Frontend",
  description: "Teach students worldwide with a modern web experience.",
  metadataBase: new URL("https://your-site-url.com"),
  openGraph: {
    title: "Buzzvel Frontend",
    description: "Teach students worldwide with a modern web experience.",
    url: "https://your-site-url.com",
    siteName: "Buzzvel Frontend",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzzvel Frontend",
    description: "Teach students worldwide with a modern web experience.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
