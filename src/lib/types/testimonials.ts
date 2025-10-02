export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company?: string;
    quote: string;
    image: string;
    rating?: number;
  }
  
  export interface TestimonialCardProps {
    testimonial: Testimonial;
    priority?: boolean;
  }
  
  export interface TestimonialMarqueeProps {
    testimonials: Testimonial[];
  }
  
  export interface TestimonialsHeaderProps {
    badge: string;
    heading: string;
    description: string;
  }
  