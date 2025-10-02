import type { CommunitySectionProps } from '@/lib/types/community';
import { CommunityContent } from '@/components/community/CommunityContent';
import { CommunityVisual } from '@/components/community/CommunityVisual';
import { COMMUNITY_CONTENT, COMMUNITY_STYLES } from '@/lib/constants/community';

const CommunitySection: React.FC<CommunitySectionProps> = ({
  badge = COMMUNITY_CONTENT.badge,
  heading = COMMUNITY_CONTENT.heading,
  headingBold = COMMUNITY_CONTENT.headingBold,
  description = COMMUNITY_CONTENT.description,
  ctaText = COMMUNITY_CONTENT.ctaText,
  ctaLink = COMMUNITY_CONTENT.ctaLink,
  imageSrc = COMMUNITY_CONTENT.imageSrc,
  imageAlt = COMMUNITY_CONTENT.imageAlt,
}) => {
  return (
    <section
      className={COMMUNITY_STYLES.wrapper}
      aria-labelledby="community-heading"
    >
      <div className={COMMUNITY_STYLES.container}>
        <div className={COMMUNITY_STYLES.layout}>
          <CommunityContent
            badge={badge}
            heading={heading}
            headingBold={headingBold}
            description={description}
            ctaText={ctaText}
            ctaLink={ctaLink}
          />
          <CommunityVisual imageSrc={imageSrc} imageAlt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
