import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { ChatWidget } from "@/components/ui/ChatWidget";

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

// JSON-LD structured data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Care & Rehab",
  url: "https://careandrehab.com",
  logo: "https://careandrehab.com/images/logo.png",
  description:
    "Family-owned skilled nursing and rehabilitation facilities serving Wisconsin and Minnesota for over 20 years.",
  foundingDate: "2003",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-715-937-5524",
    contactType: "admissions",
    areaServed: ["US-WI", "US-MN"],
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/retirementrehabilation/",
    "https://www.instagram.com/careandrehab/",
    "https://www.linkedin.com/company/care-rehab/",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "WI",
    addressCountry: "US",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://careandrehab.com/#organization",
  name: "Care & Rehab",
  image: "https://careandrehab.com/images/og-image.jpg",
  url: "https://careandrehab.com",
  telephone: "+1-715-937-5524",
  email: "info@careandrehab.org",
  priceRange: "$$",
  medicalSpecialty: [
    "Skilled Nursing",
    "Rehabilitation",
    "Memory Care",
    "Assisted Living",
  ],
  areaServed: [
    { "@type": "State", name: "Wisconsin" },
    { "@type": "State", name: "Minnesota" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-[var(--primary)] focus:text-white focus:rounded-md focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
        <ChatWidget />
      </body>
    </html>
  );
}
