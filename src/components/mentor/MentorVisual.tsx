import Image from "next/image";
import { MENTOR_STYLES } from "@/lib/constants/mentor";
import type { MentorVisualProps } from "@/lib/types/mentor";

export const MentorVisual: React.FC<MentorVisualProps> = ({
  imageSrc,
  imageAlt,
  imageWidth = 800,
  imageHeight = 800,
}) => {
  return (
    <div className={MENTOR_STYLES.visual.wrapper}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        priority={false}
      />
    </div>
  );
};
