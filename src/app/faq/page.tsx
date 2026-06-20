import { FAQ } from '@/components/sections/FAQ';

export const metadata = {
  title: "Frequently Asked Questions | STUDRY.",
  description: "Got questions? We have answers. Learn about STUDRY's pricing, timeline, mobile friendliness, SEO practices, and custom Next.js development workflow.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-20">
      <FAQ />
    </main>
  );
}
