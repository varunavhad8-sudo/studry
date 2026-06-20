import { Hero } from '@/components/sections/Hero';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { BentoFeatures } from '@/components/sections/BentoFeatures';
import { Process as ProcessTimeline } from '@/components/sections/Process';
import { VideoTestimonials } from '@/components/sections/VideoTestimonials';
import { Contact as ContactSection } from '@/components/sections/Contact';
import { About } from '@/components/sections/About';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <ProcessTimeline />
      <BentoFeatures />
      <About />
      <VideoTestimonials />
      <ContactSection />
    </main>
  );
}
