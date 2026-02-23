import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitcoin Association Switzerland",
  description: "We form an active community of Bitcoin enthusiasts with regular events, legal support, and public education.",
  keywords: ["Bitcoin", "Switzerland", "Cryptocurrency", "Blockchain", "Community"],
  openGraph: {
    title: "Bitcoin Association Switzerland",
    description: "We form an active community of Bitcoin enthusiasts with regular events, legal support, and public education.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#0D1117] text-white">
        {children}
      </body>
    </html>
  );
}
