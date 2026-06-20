'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Why Custom React Beats Templates Every Single Time",
    excerpt: "Why spending more upfront on custom-engineered React architectures yields 10x long-term conversions compared to off-the-shelf templates.",
    category: "Development",
    date: "June 18, 2026",
    readTime: "5 min read",
    author: "Varun Avhad",
    slug: "custom-react-vs-templates",
  },
  {
    title: "Next.js App Router: Maximizing Page Speed & Core Web Vitals",
    excerpt: "An engineering-first guide to optimizing server-side rendering, dynamic prefetching, and image loads to hit a 100/100 Lighthouse score.",
    category: "Performance",
    date: "June 12, 2026",
    readTime: "7 min read",
    author: "Technical Team",
    slug: "nextjs-app-router-performance",
  },
  {
    title: "Designing for Conversion: High-End Motion & Micro-interactions",
    excerpt: "How subtle parallax, micro-animations, and magnetic button physics transform passive readers into highly qualified sales leads.",
    category: "Design",
    date: "June 05, 2026",
    readTime: "6 min read",
    author: "Design Lead",
    slug: "designing-for-conversion",
  },
  {
    title: "The SEO Blueprint: Semantic HTML and Edge-Rendered Metadata",
    excerpt: "Demystifying modern SEO. Learn how clean HTML markup structure and lightning-fast edge servers force search engines to rank you higher.",
    category: "SEO",
    date: "May 28, 2026",
    readTime: "4 min read",
    author: "SEO Strategist",
    slug: "seo-semantic-html-blueprint",
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[80px]">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 uppercase tracking-widest text-sm font-semibold mb-4 inline-block"
          >
            Insights & Engineering
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-black mb-6"
          >
            The STUDRY. Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Deep dives into speed optimizations, premium web design psychology, clean architectures, and modern conversion tactics.
          </motion.p>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 bg-muted/30 border border-border rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 items-center justify-between group"
        >
          <div className="flex-1 space-y-6">
            <span className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-full text-xs font-bold uppercase tracking-wider">
              {blogPosts[0].category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
              {blogPosts[0].title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {blogPosts[0].excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> {blogPosts[0].author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {blogPosts[0].date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {blogPosts[0].readTime}
              </span>
            </div>
            <div className="pt-4">
              <button className="flex items-center gap-2 font-bold text-black group-hover:text-blue-600 transition-colors">
                Read Article <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] aspect-[4/3] rounded-[2rem] bg-zinc-200 overflow-hidden relative border border-border">
            {/* Visual Abstract Pattern Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-sky-400/20 to-purple-500/10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground/40 font-mono tracking-widest uppercase text-xs">
              [ STUDRY RESEARCH ]
            </div>
          </div>
        </motion.div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-white border border-border rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all group hover:-translate-y-1 duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-muted text-muted-foreground border border-border rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-black tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-6">
                <span className="text-xs text-muted-foreground font-medium">
                  By {post.author}
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  {post.date}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </main>
  );
}
