export interface ProjectStat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface Project {
  title: string;
  slug: string;
  client: string;
  category: string;
  thumbnail: string;
  images: string[];
  stats: ProjectStat[];
  description: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Redesign",
    slug: "ecommerce-redesign",
    client: "Lumina Apparel",
    category: "Web Design & Development",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2400&auto=format&fit=crop",
    ],
    stats: [
      { label: "Increase in Conversions", value: 150, suffix: "%" },
      { label: "Page Load Speed", value: 40, suffix: "% faster" },
      { label: "Mobile Traffic", value: 2.5, suffix: "x" },
    ],
    description: "A complete overhaul of Lumina Apparel's digital storefront, focusing on a mobile-first experience, lightning-fast load times, and an intuitive checkout process that drastically improved conversion rates.",
    liveUrl: "https://example.com/lumina",
  },
  {
    title: "SaaS Dashboard UX",
    slug: "saas-dashboard-ux",
    client: "DataSync Pro",
    category: "UI/UX Design",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2400&auto=format&fit=crop",
    ],
    stats: [
      { label: "User Retention", value: 35, suffix: "%" },
      { label: "Time on Task", value: 50, suffix: "% reduced" },
    ],
    description: "Redesigning complex data visualizations into an intuitive, customizable dashboard for enterprise users. The new interface reduced friction and empowered teams to make data-driven decisions faster.",
    liveUrl: "https://example.com/datasync",
  },
  {
    title: "Organic Growth Campaign",
    slug: "organic-growth-campaign",
    client: "EcoLife Foods",
    category: "SEO Optimization",
    thumbnail: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2400&auto=format&fit=crop",
    ],
    stats: [
      { label: "Organic Traffic", value: 300, suffix: "%" },
      { label: "Keyword Rankings", value: 50, prefix: "Top 3: " },
    ],
    description: "Implemented a comprehensive content and technical SEO strategy for EcoLife Foods, dominating search engine results for plant-based nutrition and driving thousands of new organic visitors monthly.",
    liveUrl: "https://example.com/ecolife",
  },
  {
    title: "Fintech App Identity",
    slug: "fintech-app-identity",
    client: "Vault Pay",
    category: "Branding & Identity",
    thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2400&auto=format&fit=crop",
    ],
    stats: [
      { label: "Brand Recall", value: 85, suffix: "%" },
      { label: "App Downloads", value: 100, suffix: "k+" },
    ],
    description: "Built a trustworthy, modern brand identity for a disruptive fintech startup. The project included logo design, color typography systems, and marketing assets that resonated deeply with Gen Z users.",
    liveUrl: "https://example.com/vaultpay",
  },
  {
    title: "Creative Agency Portfolio",
    slug: "creative-agency-portfolio",
    client: "Studio Vertex",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507238692062-5a042396154e?q=80&w=2400&auto=format&fit=crop",
    ],
    stats: [
      { label: "Awards Won", value: 3 },
      { label: "Bounce Rate", value: 15, suffix: "%" },
    ],
    description: "Developed a heavily animated, award-winning portfolio site using Next.js and WebGL. The site pushes the boundaries of web development to showcase Studio Vertex's capabilities.",
    liveUrl: "https://example.com/vertex",
  },
];
