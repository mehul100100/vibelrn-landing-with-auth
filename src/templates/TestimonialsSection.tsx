import type { Testimonial } from '@/lib/types/testimonials';
import { TestimonialMarquee } from '@/components/testimonials/TestimonialMarquee';
import { TestimonialsHeader } from '@/components/testimonials/TestimonialsHeader';
import { SAMPLE_TESTIMONIALS, TESTIMONIALS_CONTENT, TESTIMONIALS_STYLES } from '@/lib/constants/testimonials';

type TestimonialsSectionProps = {
  testimonials?: Testimonial[];
  badge?: string;
  heading?: string;
  description?: string;
};

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
