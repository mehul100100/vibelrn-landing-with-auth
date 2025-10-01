"use client";
import { motion } from "framer-motion";
import ToolMarquee from "@/components/ToolMarquee";
import { HeroHeading } from "@/components/hero/HeroHeading";
import { HeroSearchBar } from "@/components/hero/HeroSearchBar";
import { ToolsCount } from "@/components/hero/ToolsCount";
import { HERO_ANIMATIONS, HERO_STYLES, HERO_CONTENT } from "@/lib/constants/hero";

const HeroSection: React.FC = () => {

  return (
    <section
      className={`${HERO_STYLES.container} ${HERO_STYLES.gradient}`}
      aria-labelledby="hero-heading"
    >
      <motion.div
        className={HERO_STYLES.content}
        variants={HERO_ANIMATIONS.container}
        initial="hidden"
        animate="visible"
      >
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
