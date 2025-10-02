"use client";
import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { TESTIMONIALS_STYLES } from "@/lib/constants/testimonials";
import type { TestimonialMarqueeProps } from "@/lib/types/testimonials";

export const TestimonialMarquee: React.FC<TestimonialMarqueeProps> = ({
  testimonials,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={TESTIMONIALS_STYLES.marquee.wrapper}
      role="region"
      aria-label="Customer testimonials"
      aria-live="off"
    >
      <div
        className={`${TESTIMONIALS_STYLES.marquee.container} ${
          isPaused ? TESTIMONIALS_STYLES.marquee.paused : ""
        }`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            priority={index < 3}
          />
        ))}

        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={`${testimonial.id}-duplicate`}
            testimonial={testimonial}
            priority={false}
          />
        ))}
      </div>

      <p className="sr-only">
        Hover or focus on the testimonials to pause the animation
      </p>
    </div>
  );
};
