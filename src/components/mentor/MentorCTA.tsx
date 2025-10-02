import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MENTOR_STYLES } from "@/lib/constants/mentor";
import type { MentorCTAProps } from "@/lib/types/mentor";

export const MentorCTA: React.FC<MentorCTAProps> = ({ ctaText, ctaLink }) => {
  return (
    <div className={MENTOR_STYLES.cta.wrapper}>
      <Button
        variant="dark"
        size="default"
        className={MENTOR_STYLES.cta.button}
        asChild
      >
        <Link
          href={ctaLink}
          aria-label={`${ctaText} - Schedule a 1-on-1 mentorship session`}
        >
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
