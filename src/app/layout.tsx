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
  description: "Utah's Premier Sports Media - Follow us, share your story, and join the movement.",
  keywords: ["sports", "media", "utah", "athlete", "spectator sport", "photography", "podcast"],
  openGraph: {
    title: "Spectator Sport | The World is Watching",
    description: "Utah's Premier Sports Media - Follow us, share your story, and join the movement.",
    images: ["https://static.wixstatic.com/media/d97dfe_cf24532419624a49802826fc25a80c4f~mv2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spectator Sport | The World is Watching",
    description: "Utah's Premier Sports Media",
  },
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
