import type { FeatureItemProps } from '@/lib/types/feature';
import { motion } from 'framer-motion';
import { featureItemVariants } from '@/lib/constants/features';
import {
  FEATURE_STYLES,
  MASTERCLASS_STYLES,
} from '@/lib/constants/masterclass';

export const FeatureItem: React.FC<FeatureItemProps> = ({
  feature,
  index,
  isExpanded,
  onToggle,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };
  return (
    <motion.div variants={featureItemVariants}>
      <h3 key={index}>
        <button
          onClick={onToggle}
          onKeyDown={handleKeyDown}
          className={`w-full text-left ${
            MASTERCLASS_STYLES.accordion.item.base
          } ${
            isExpanded
              ? MASTERCLASS_STYLES.accordion.item.expanded
              : MASTERCLASS_STYLES.accordion.item.collapsed
          }`}
          style={
            isExpanded ? FEATURE_STYLES.expanded : FEATURE_STYLES.collapsed
          }
          aria-expanded={isExpanded}
          aria-controls={`panel-${feature.id}`}
          id={`accordion-${feature.id}`}
        >
          <div
            className={`${MASTERCLASS_STYLES.accordion.content.wrapper} ${
              isExpanded
                ? MASTERCLASS_STYLES.accordion.content.expanded
                : MASTERCLASS_STYLES.accordion.content.collapsed
            }`}
          >
            <div
              className={MASTERCLASS_STYLES.accordion.icon}
              aria-hidden="true"
            >
              {feature.icon}
            </div>
            <div className="min-w-0 flex-1">
              <span
                className={`${MASTERCLASS_STYLES.accordion.title.base} ${
                  isExpanded
                    ? MASTERCLASS_STYLES.accordion.title.expanded
                    : MASTERCLASS_STYLES.accordion.title.collapsed
                }`}
              >
                {feature.title}
              </span>
              <div
                className={`${MASTERCLASS_STYLES.accordion.description.base} ${
                  isExpanded
                    ? MASTERCLASS_STYLES.accordion.description.expanded
                    : MASTERCLASS_STYLES.accordion.description.collapsed
                }`}
                role="region"
                id={`panel-${feature.id}`}
                aria-labelledby={`accordion-${feature.id}`}
                aria-hidden={!isExpanded}
              >
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        </button>
      </h3>
    </motion.div>
  );
};
