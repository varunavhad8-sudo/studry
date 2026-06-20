"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much does a custom website cost?",
    answer: "Every project is unique, but our custom web design projects typically start at $5,000. This includes comprehensive UX/UI design, Next.js or WordPress development, basic SEO setup, and launch support. We provide a detailed, transparent proposal after our initial discovery call.",
  },
  {
    question: "How long does the web design process take?",
    answer: "A standard custom website takes about 6 to 8 weeks from the kickoff meeting to launch. E-commerce sites or larger platforms may take 10 to 14 weeks. We set clear milestones and keep you updated every step of the way.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: "Yes. We highly recommend our Care Plans, which include premium managed hosting (via Vercel or specialised WordPress servers), daily backups, security updates, and monthly performance reports. This ensures your site remains fast, secure, and up-to-date long after launch.",
  },
  {
    question: "Will my website be mobile-friendly and SEO optimised?",
    answer: "Absolutely. We build with a mobile-first approach, ensuring flawless performance across all devices. Technical SEO is baked into our code architecture from day one, including semantic HTML, optimised images, fast load times, and clean URL structures.",
  },
  {
    question: "What if I need changes after the design is approved?",
    answer: "Our process includes two dedicated rounds of revisions during the design phase to ensure we hit the mark. Once development begins, major structural changes may require a change order, but minor copy or image swaps are easily accommodated.",
  },
  {
    question: "Can I update the website content myself?",
    answer: "Yes! We build on intuitive CMS platforms like Sanity, WordPress, or Shopify. We provide customised training sessions and video tutorials so your team can easily update text, images, and blog posts without writing code.",
  },
];

function AccordionItem({ faq, isOpen, onClick }: { faq: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    /* Divider line — use surface-border instead of white/10 */
    <div className="border-b border-surface-border last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <h3 className="text-xl md:text-2xl font-heading font-semibold text-textPrimary group-hover:text-primary transition-colors">
          {faq.question}
        </h3>
        <div className="ml-4 flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
          <span className={`absolute w-full h-[2px] transition-all duration-300 ${isOpen ? "rotate-180 bg-primary" : "rotate-0 bg-textSecondary"}`} />
          <span className={`absolute w-[2px] h-full transition-all duration-300 ${isOpen ? "rotate-90 scale-0 bg-primary" : "rotate-0 scale-100 bg-textSecondary"}`} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-8 text-textSecondary text-lg leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <Section
      id="faq"
      className="bg-background py-24 md:py-32 relative z-10 border-t border-surface-border"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto w-full max-w-[1000px]">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 inline-block"
          >
            Clear Up The Confusion
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-textPrimary leading-tight"
          >
            Got Questions? We&apos;ve Got Answers
          </motion.h2>
        </div>

        {/*
         * Accordion card — white surface, border + shadow.
         * Replaced dark bg/glass with the light card pattern.
         */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface rounded-3xl border border-surface-border shadow-surface p-6 md:p-10"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
