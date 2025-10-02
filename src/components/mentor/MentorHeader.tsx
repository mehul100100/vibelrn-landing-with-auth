import type { MentorHeaderProps } from '@/lib/types/mentor';
import { MENTOR_STYLES } from '@/lib/constants/mentor';

export const MentorHeader: React.FC<MentorHeaderProps> = ({
  badge,
  heading,
  description,
}) => {
  return (
    <>
      <div className={MENTOR_STYLES.header.badgeWrapper}>
        <div className={MENTOR_STYLES.header.badge}>
          <span className={MENTOR_STYLES.header.badgeText}>{badge}</span>
        </div>
      </div>
      <header className={MENTOR_STYLES.header.headingWrapper}>
        <h2 className={MENTOR_STYLES.header.heading}>{heading}</h2>
      </header>
      <p className={MENTOR_STYLES.header.description}>
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
