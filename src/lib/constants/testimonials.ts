import type { Testimonial } from "@/lib/types/testimonials";

export const TESTIMONIALS_STYLES = {
    wrapper: "w-full py-10 bg-light",
    container: "lg:container mx-auto px-6 mb-10 pb-20 pt-10 w-full rounded-[24px] bg-[linear-gradient(to_bottom,_#f4f4f4_0%,_#ffffff_60%,_#f4f4f4_100%)]",
    header: {
      badgeWrapper: "flex justify-center mb-8",
      badge: "inline-flex items-center sm:px-15 px-5 py-3 bg-transparent rounded-full border border-gray-200",
      badgeText: "text-sm text-gray-700 font-medium",
      headingWrapper: "text-center mb-6",
      heading: "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight",
      description: "text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed",
    },
    marquee: {
      wrapper: "relative overflow-hidden",
      container: "flex animate-marquee",
      paused: "paused",
    },
    card: {
      wrapper: "flex-shrink-0 w-[400px] px-4",
      image: "w-full h-auto shadow-xl rounded-3xl",
    },
  } as const;
  
  export const TESTIMONIALS_CONTENT = {
    badge: "What people are actually saying",
    heading: "This stuff just works",
    description:
      "We're not making this up - real users, real wins. Whether it's saving hours or launching projects, people are getting results.",
  } as const;
  
  export const MARQUEE_CONFIG = {
    animationDuration: "40s",
    pauseOnHover: true,
  } as const;
  


export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    role: "Product Designer",
    company: "TechCorp",
    quote: "This platform saved me 10+ hours per week. The AI tools are incredible!",
    image: "/testimonial1.svg",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    role: "Freelance Developer",
    quote: "Finally, AI tools that actually work. No fluff, just results.",
    image: "/testimonial1.svg",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "GrowthLab",
    quote: "The learning curve was almost zero. Started getting results immediately.",
    image: "/testimonial1.svg",
    rating: 5,
  },
  {
    id: "testimonial-4",
    name: "David Kim",
    role: "Content Creator",
    quote: "Best investment I've made for my business this year.",
    image: "/testimonial1.svg",
    rating: 5,
  },
  {
    id: "testimonial-5",
    name: "Jessica Taylor",
    role: "Small Business Owner",
    quote: "The community support is amazing. Everyone is so helpful!",
    image: "/testimonial1.svg",
    rating: 5,
  },
  {
    id: "testimonial-6",
    name: "Alex Morgan",
    role: "Startup Founder",
    quote: "Launched our MVP 3x faster thanks to these AI tools.",
    image: "/testimonial1.svg",
    rating: 5,
  },
];
