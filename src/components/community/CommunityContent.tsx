import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { COMMUNITY_STYLES } from "@/lib/constants/community";
import type { CommunityContentProps } from "@/lib/types/community";

export const CommunityContent: React.FC<CommunityContentProps> = ({
  badge,
  heading,
  headingBold,
  description,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className={COMMUNITY_STYLES.content.wrapper}>
      {/* Badge */}
      <div className={COMMUNITY_STYLES.content.badge.wrapper}>
        <span className={COMMUNITY_STYLES.content.badge.text}>{badge}</span>
      </div>

      {/* Heading */}
      <div className={COMMUNITY_STYLES.content.heading.wrapper}>
        <h2 className={COMMUNITY_STYLES.content.heading.text}>
          {heading}
          <br />
          <span className="font-bold">{headingBold}</span>
        </h2>
      </div>

      {/* Description */}
      <p className={COMMUNITY_STYLES.content.description}>{description}</p>

      {/* CTA Button */}
      <Button
        variant="dark"
        size="default"
        className={COMMUNITY_STYLES.content.cta}
        asChild
      >
        <Link href={ctaLink} aria-label={`${ctaText} - Join our AI community`}>
          <span>{ctaText}</span>
          <Image
            src="/right_icon.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
        </Link>
      </Button>
    </div>
  );
};
