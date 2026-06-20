export interface Project {
  title: string;
  slug: string;
  client: string;
  category: string;
  thumbnail: string;
  description: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: "Lumina Apparel Redesign",
    slug: "lumina-apparel",
    client: "Lumina Apparel",
    category: "E-Commerce",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    description: "A complete overhaul of Lumina Apparel's digital storefront, focusing on a mobile-first Next.js experience that drastically improved conversion rates.",
    liveUrl: "https://example.com/lumina",
  },
  {
    title: "EcoLife Organic Campaign",
    slug: "ecolife-organic",
    client: "EcoLife Foods",
    category: "SEO Optimization",
    thumbnail: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2400&auto=format&fit=crop",
    description: "Implemented a comprehensive content and technical SEO strategy, dominating search engine results for plant-based nutrition.",
    liveUrl: "https://example.com/ecolife",
  },
  {
    title: "DataSync SaaS Platform",
    slug: "datasync-saas",
    client: "DataSync Pro",
    category: "Custom React App",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    description: "Redesigning complex data visualizations into an intuitive, customizable React dashboard for enterprise users.",
    liveUrl: "https://example.com/datasync",
  },
  {
    title: "Vault Pay Identity",
    slug: "vault-pay",
    client: "Vault Pay",
    category: "Branding",
    thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2400&auto=format&fit=crop",
    description: "Built a trustworthy, modern brand identity for a disruptive fintech startup that resonated deeply with Gen Z users.",
    liveUrl: "https://example.com/vaultpay",
  },
  {
    title: "Studio Vertex Portfolio",
    slug: "studio-vertex",
    client: "Studio Vertex",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop",
    description: "Developed a heavily animated, award-winning portfolio site using Next.js to showcase their creative capabilities.",
    liveUrl: "https://example.com/vertex",
  },
];
