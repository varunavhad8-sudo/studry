"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const CLIENTS = [
  { name: "Acme Corp", logo: "https://logo.clearbit.com/acme.com",     stat: "40% revenue increase" },
  { name: "Stripe",    logo: "https://logo.clearbit.com/stripe.com",   stat: "2x conversion rate" },
  { name: "Vercel",    logo: "https://logo.clearbit.com/vercel.com",   stat: "Reduced bounce rate by 30%" },
  { name: "Shopify",   logo: "https://logo.clearbit.com/shopify.com",  stat: "300% ROI in 6 months" },
  { name: "GitHub",    logo: "https://logo.clearbit.com/github.com",   stat: "50% faster load times" },
  { name: "Figma",     logo: "https://logo.clearbit.com/figma.com",    stat: "1.5x user retention" },
];

export function TrustedBy() {
  return (
    <section className="py-24 bg-surface border-y border-surface-border overflow-hidden relative">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-[80px] mb-12">
        <h2 className="text-center font-heading text-2xl md:text-3xl font-bold text-textPrimary">
          Trusted By Growing Businesses
        </h2>
      </div>

      <div className="relative w-full max-w-[1920px] mx-auto">
        {/*
         * Gradient masks — use bg-surface (white) not dark hex.
         * These must match the section background precisely.
         */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <Marquee pauseOnHover speed={40} gradient={false}>
          {CLIENTS.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-12 md:mx-20 group cursor-pointer"
            >
              <div className="relative w-32 h-16 md:w-40 md:h-20 mb-4 grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100">
                <Image src={client.logo} alt={`${client.name} logo`} fill className="object-contain" />
              </div>
              <span className="text-xs md:text-sm text-textSecondary font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-center">
                {client.stat}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
