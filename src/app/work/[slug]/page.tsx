import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { Section } from "@/components/ui/Section";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { StatCounter } from "@/components/ui/StatCounter";

interface Props {
  params: { slug: string };
}

// Generate Dynamic Metadata for SEO
export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Premium Web Design Agency`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  // Calculate Next Project
  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <article className="bg-background min-h-screen pt-24 md:pt-32">
      
      {/* Hero Header */}
      <Section className="pb-12 md:pb-20">
        <div className="flex flex-col gap-8 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-textSecondary uppercase tracking-widest font-semibold">
            <span>{project.client}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>{project.category}</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-textPrimary leading-tight">
            {project.title}
          </h1>

          <p className="text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
            {project.description}
          </p>

          <div className="pt-4">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-medium text-lg group border border-primary/30 rounded-full px-8 py-4 hover:bg-primary/10 transition-colors"
            >
              Visit Live Site
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </Section>

      {/* Hero Parallax Image */}
      <div className="w-full h-[60vh] md:h-[80vh]">
        <ParallaxImage src={project.thumbnail} alt={`${project.title} Hero Image`} priority={true} />
      </div>

      {/* Stats Section */}
      {project.stats.length > 0 && (
        <Section className="py-20 md:py-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-b border-white/10 py-16">
            {project.stats.map((stat, idx) => (
              <StatCounter 
                key={idx}
                value={stat.value}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </Section>
      )}

      {/* Additional Storytelling Images (Parallax) */}
      {project.images.length > 0 && (
        <Section className="py-0">
          <div className="flex flex-col gap-12 md:gap-32">
            {project.images.map((img, idx) => (
              <div key={idx} className="w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden">
                <ParallaxImage src={img} alt={`${project.title} detail ${idx + 1}`} />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Next Project Navigation */}
      <section className="mt-32">
        <Link href={`/work/${nextProject.slug}`} className="group block relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParallaxImage src={nextProject.thumbnail} alt={nextProject.title} />
          </div>
          <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500 z-10" />
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
            <span className="text-textSecondary uppercase tracking-widest text-sm font-semibold mb-4 transition-transform duration-500 group-hover:-translate-y-2">
              Next Project
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white transition-transform duration-500 group-hover:scale-105">
              {nextProject.title}
            </h2>
          </div>
        </Link>
      </section>

    </article>
  );
}
