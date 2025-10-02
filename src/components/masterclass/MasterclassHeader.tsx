import type { MasterclassHeaderProps } from '@/lib/types/feature';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/constants/features';
import { MASTERCLASS_STYLES } from '@/lib/constants/masterclass';

export const MasterclassHeader: React.FC<MasterclassHeaderProps> = ({
  badge,
  heading,
  description,
}) => {
  return (
    <div className="mb-16">
      {/* Badge */}
      <motion.div className={MASTERCLASS_STYLES.badge.wrapper} variants={fadeUpVariants}>
        <div className={MASTERCLASS_STYLES.badge.inner}>
          <span className={MASTERCLASS_STYLES.badge.text}>{badge}</span>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.header className={MASTERCLASS_STYLES.header.wrapper} variants={fadeUpVariants}>
        <h2 className={MASTERCLASS_STYLES.header.heading}>{heading}</h2>
      </motion.header>

      {/* Description */}
      <motion.p className={MASTERCLASS_STYLES.header.description} variants={fadeUpVariants}>
        {description.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < description.split('\n').length - 1 && (
              <br className="hidden md:block" />
            )}
          </span>
        ))}
      </motion.p>
    </div>
  );
};
