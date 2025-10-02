import { TESTIMONIALS_STYLES } from "@/lib/constants/testimonials";
import type { TestimonialsHeaderProps } from "@/lib/types/testimonials";

export const TestimonialsHeader: React.FC<TestimonialsHeaderProps> = ({
  badge,
  heading,
  description,
}) => {
  return (
    <>
      <div className={TESTIMONIALS_STYLES.header.badgeWrapper}>
        <div className={TESTIMONIALS_STYLES.header.badge}>
          <span className={TESTIMONIALS_STYLES.header.badgeText}>{badge}</span>
        </div>
      </div>

      <header className={TESTIMONIALS_STYLES.header.headingWrapper}>
        <h2 className={TESTIMONIALS_STYLES.header.heading}>{heading}</h2>
      </header>

      <p className={TESTIMONIALS_STYLES.header.description}>
        {description.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < description.split('\n').length - 1 && (
              <br className="hidden md:block" />
            )}
          </span>
        ))}
      </p>
    </>
  );
};
