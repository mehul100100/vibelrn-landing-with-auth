import type { TestimonialCardProps } from '@/lib/types/testimonials';
import Image from 'next/image';
import { TESTIMONIALS_STYLES } from '@/lib/constants/testimonials';

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  priority = false,
}) => {
  return (
    <article
      className={TESTIMONIALS_STYLES.card.wrapper}
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      <blockquote>
        <Image
          src={testimonial.image}
          alt={`Testimonial from ${testimonial.name}, ${testimonial.role}${
            testimonial.company ? ` at ${testimonial.company}` : ''
          }: "${testimonial.quote}"`}
          width={400}
          height={300}
          sizes="400px"
          className={TESTIMONIALS_STYLES.card.image}
          priority={priority}
        />
        <span className="sr-only">
          {testimonial.quote}
          {' '}
          -
          {testimonial.name}
          ,
          {testimonial.role}
          {testimonial.company && ` at ${testimonial.company}`}
        </span>
      </blockquote>
    </article>
  );
};
