import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Care & Rehab | Skilled Nursing & Rehabilitation in Wisconsin & Minnesota",
    template: "%s | Care & Rehab",
  },
  description:
    "Family-owned skilled nursing and rehabilitation facilities across Wisconsin and Minnesota. 5-star rated care, memory care, assisted living, and rehabilitation services. Schedule a tour today.",
  keywords: [
    "skilled nursing facility",
    "nursing home",
    "rehabilitation center",
    "memory care",
    "assisted living",
    "Wisconsin nursing home",
    "Minnesota nursing home",
    "Care and Rehab",
  ],
  authors: [{ name: "Care & Rehab" }],
  creator: "VeriSight Analytics",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careandrehab.com",
    siteName: "Care & Rehab",
    title: "Care & Rehab | Skilled Nursing & Rehabilitation",
    description:
      "Family-owned skilled nursing and rehabilitation facilities across Wisconsin and Minnesota. Schedule a tour today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Care & Rehab | Skilled Nursing & Rehabilitation",
    description:
      "Family-owned skilled nursing and rehabilitation facilities across Wisconsin and Minnesota.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
