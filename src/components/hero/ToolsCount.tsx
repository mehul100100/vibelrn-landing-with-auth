import type { ToolsCountProps } from '@/lib/types/hero';
import { motion } from 'framer-motion';
import { HERO_ANIMATIONS, HERO_STYLES } from '@/lib/constants/hero';

export const ToolsCount: React.FC<ToolsCountProps> = ({ count }) => {
  return (
    <motion.p className={HERO_STYLES.toolsCount} variants={HERO_ANIMATIONS.fadeUp}>
      <span className="font-bold">
        {count}
        + AI Tools
      </span>
      {' '}
      & Learning Series with top
      Tutors
    </motion.p>
  );
};
