import type { FeatureAccordionProps } from '@/lib/types/feature';
import { motion } from 'framer-motion';
import { featureContainerVariants } from '@/lib/constants/features';
import { MASTERCLASS_STYLES } from '@/lib/constants/masterclass';
import { FeatureItem } from './FeatureItem';

export const FeatureAccordion: React.FC<FeatureAccordionProps> = ({
  features,
  expandedIndex,
  onToggle,
}) => {
  return (
    <motion.div
      className={MASTERCLASS_STYLES.accordion.wrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={featureContainerVariants}
      role="region"
      aria-label="Masterclass features"
    >
      {features.map((feature, index) => (
        <FeatureItem
          key={feature.id}
          feature={feature}
          index={index}
          isExpanded={expandedIndex === index}
          onToggle={() => onToggle(index)}
        />
      ))}
    </motion.div>
  );
};
