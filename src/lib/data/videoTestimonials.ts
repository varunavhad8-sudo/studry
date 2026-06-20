export interface VideoTestimonial {
  id: string;
  videoUrl: string;
  posterImage: string;
  clientName: string;
  businessType: string;
  quote: string;
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "vt1",
    videoUrl: "/videos/testimonial-1.mp4",
    posterImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=1067&auto=format&fit=crop",
    clientName: "Sarah Jenkins",
    businessType: "Boutique Restaurant",
    quote: "Our online reservations increased by 140% in just two months.",
  },
  {
    id: "vt2",
    videoUrl: "/videos/testimonial-2.mp4", 
    posterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=1067&auto=format&fit=crop",
    clientName: "Michael Chen",
    businessType: "High-End Salon",
    quote: "We are fully booked 3 weeks out now. Incredible ROI.",
  },
  {
    id: "vt3",
    videoUrl: "/videos/testimonial-3.mp4", 
    posterImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&h=1067&auto=format&fit=crop",
    clientName: "Elena Rodriguez",
    businessType: "Financial Consultancy",
    quote: "The new site finally reflects the premium nature of our services.",
  },
  {
    id: "vt4",
    videoUrl: "/videos/testimonial-4.mp4", 
    posterImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&h=1067&auto=format&fit=crop",
    clientName: "David Kim",
    businessType: "DTC Retail Brand",
    quote: "Site speed is incredible, AOV jumped 30%.",
  },
  {
    id: "vt5",
    videoUrl: "/videos/testimonial-5.mp4", 
    posterImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&h=1067&auto=format&fit=crop",
    clientName: "Dr. James Carter",
    businessType: "Private Dental Clinic",
    quote: "Local search rankings have skyrocketed. Exceptional work.",
  },
  {
    id: "vt6",
    videoUrl: "/videos/testimonial-6.mp4", 
    posterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&h=1067&auto=format&fit=crop",
    clientName: "Amanda Vance",
    businessType: "Manufacturing Firm",
    quote: "Now our #1 source for high-ticket manufacturing inquiries.",
  },
  {
    id: "vt7",
    videoUrl: "/videos/testimonial-7.mp4", 
    posterImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&h=1067&auto=format&fit=crop",
    clientName: "Robert Hughes",
    businessType: "SaaS Startup",
    quote: "The onboarding flow improvements doubled our trial conversions.",
  },
  {
    id: "vt8",
    videoUrl: "/videos/testimonial-8.mp4", 
    posterImage: "https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?q=80&w=600&h=1067&auto=format&fit=crop",
    clientName: "Lisa Thompson",
    businessType: "Real Estate Agency",
    quote: "Our property listings have never looked better and load instantly.",
  },
];
