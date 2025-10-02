import type { CommunityVisualProps } from '@/lib/types/community';
import Image from 'next/image';
import { COMMUNITY_STYLES } from '@/lib/constants/community';

export const CommunityVisual: React.FC<CommunityVisualProps> = ({
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className={COMMUNITY_STYLES.visual.wrapper}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={800}
        height={600}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={COMMUNITY_STYLES.visual.image}
        priority={false}
      />
    </div>
  );
};
