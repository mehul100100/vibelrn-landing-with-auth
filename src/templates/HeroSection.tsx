'use client';

import { HeroHeading } from '@/components/hero/HeroHeading';
import { HeroSearchBar } from '@/components/hero/HeroSearchBar';
import { ToolsCount } from '@/components/hero/ToolsCount';
import ToolMarquee from '@/components/ToolMarquee';
import { HERO_CONTENT, HERO_STYLES } from '@/lib/constants/hero';

const HeroSection: React.FC = () => {
  return (
    <section
      className={`${HERO_STYLES.container} ${HERO_STYLES.gradient}`}
      aria-labelledby="hero-heading"
    >
      <div className={HERO_STYLES.content}>
        <HeroHeading
          title="Master AI Tools In"
          highlightedWord="Minutes"
          description="Discover, learn, and apply cutting-edge AI tools without the overwhelm. From automation to creativity, we help you unlock real results, fast."
        />
        <ToolsCount count={HERO_CONTENT.toolsCount} />
        <HeroSearchBar
          placeholder={HERO_CONTENT.defaultPlaceholder}
        />
        <ToolMarquee />
      </div>
    </section>
  );
};

export default HeroSection;
