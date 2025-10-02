import type { HeroHeadingProps } from '@/lib/types/hero';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HERO_ANIMATIONS, HERO_STYLES } from '@/lib/constants/hero';

export const HeroHeading: React.FC<HeroHeadingProps> = ({
  title,
  highlightedWord,
  description,
}) => {
  return (
    <div className="space-y-4">
      <motion.h1 className={HERO_STYLES.heading} variants={HERO_ANIMATIONS.fadeUp}>
        {title}
        {' '}
        <span className="relative inline-block font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          {highlightedWord}
          <motion.span
            className="absolute -bottom-5 left-0 h-5 w-full"
            style={{ transformOrigin: 'left' }}
            variants={HERO_ANIMATIONS.underline}
          >
            <Image
              src="/underline.34eea7c8.svg"
              alt=""
              fill
              className="object-contain"
              style={{
                filter:
                  'drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.25)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15))',
              }}
              aria-hidden="true"
            />
          </motion.span>
        </span>
      </motion.h1>

      <motion.p className={HERO_STYLES.description} variants={HERO_ANIMATIONS.fadeUp}>
        {description}
      </motion.p>
    </div>
  );
};
