import { MentorHeader } from "@/components/mentor/MentorHeader";
import { MentorCTA } from "@/components/mentor/MentorCTA";
import { MentorVisual } from "@/components/mentor/MentorVisual";
import { MENTOR_STYLES, MENTOR_CONTENT } from "@/lib/constants/mentor";
import type { MentorSectionProps } from "@/lib/types/mentor";

const MentorSection: React.FC<MentorSectionProps> = ({
  badge = MENTOR_CONTENT.badge,
  heading = MENTOR_CONTENT.heading,
  description = MENTOR_CONTENT.description,
  ctaText = MENTOR_CONTENT.ctaText,
  ctaLink = MENTOR_CONTENT.ctaLink,
  imageSrc = MENTOR_CONTENT.imageSrc,
  imageAlt = MENTOR_CONTENT.imageAlt,
}) => {
  return (
    <section
      className={MENTOR_STYLES.wrapper}
      aria-labelledby="mentor-heading"
    >
      <div className={MENTOR_STYLES.container}>
        <div className={MENTOR_STYLES.innerContainer}>
          <MentorHeader
            badge={badge}
            heading={heading}
            description={description}
          />
          <MentorCTA ctaText={ctaText} ctaLink={ctaLink} />
          <MentorVisual imageSrc={imageSrc} imageAlt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
