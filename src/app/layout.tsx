import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spectator Sport | The World is Watching",
  description:
    "Nominate a hard-working athlete for the First In, Last Out Scholarship, grab your free game day photos, join the podcast, and shop team gear.",
  keywords: ["sports", "media", "utah", "athlete", "scholarship", "spectator sport", "photography", "podcast"],
  openGraph: {
    title: "Spectator Sport | The World is Watching",
    description:
      "Nominate a hard-working athlete for the First In, Last Out Scholarship, grab your free game day photos, join the podcast, and shop team gear.",
    images: ["https://static.wixstatic.com/media/d97dfe_cf24532419624a49802826fc25a80c4f~mv2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spectator Sport | The World is Watching",
    description: "Utah's home for high school sports",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
