export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  image: string;
  rating?: number;
};

export type TestimonialCardProps = {
  testimonial: Testimonial;
  priority?: boolean;
};

export type TestimonialMarqueeProps = {
  testimonials: Testimonial[];
};

export type TestimonialsHeaderProps = {
  badge: string;
  heading: string;
  description: string;
};
