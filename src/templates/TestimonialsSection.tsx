import { TestimonialsHeader } from "@/components/testimonials/TestimonialsHeader";
import { TestimonialMarquee } from "@/components/testimonials/TestimonialMarquee";
import { SAMPLE_TESTIMONIALS, TESTIMONIALS_STYLES, TESTIMONIALS_CONTENT } from "@/lib/constants/testimonials";
import type { Testimonial } from "@/lib/types/testimonials";

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  badge?: string;
  heading?: string;
  description?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = SAMPLE_TESTIMONIALS,
  badge = TESTIMONIALS_CONTENT.badge,
  heading = TESTIMONIALS_CONTENT.heading,
  description = TESTIMONIALS_CONTENT.description,
}) => {
  return (
    <section
      className={TESTIMONIALS_STYLES.wrapper}
      aria-labelledby="testimonials-heading"
    >
      <div className={TESTIMONIALS_STYLES.container}>
        <TestimonialsHeader
          badge={badge}
          heading={heading}
          description={description}
        />
        <TestimonialMarquee testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
