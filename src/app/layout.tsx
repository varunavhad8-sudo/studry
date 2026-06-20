import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "STUDRY. | Premium Web Design & Next.js Development",
  description: "We build high-converting, lightning-fast digital assets and custom web applications for ambitious brands. Expert React & Next.js development.",
  openGraph: {
    title: "STUDRY. | Premium Web Design & Next.js Development",
    description: "We build high-converting, lightning-fast digital assets and custom web applications for ambitious brands.",
    url: "https://studry.com",
    siteName: "STUDRY.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "AGENCY. Web Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "STUDRY.",
  url: "https://studry.com",
  logo: "https://studry.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "customer service",
    email: "hello@studry.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://twitter.com/studry",
    "https://linkedin.com/company/studry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-white text-gray-950 min-h-screen flex flex-col overflow-x-hidden w-full`}
      >
        <LenisProvider>
          {/* Global Organization JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
          />
          
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
