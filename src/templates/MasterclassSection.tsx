"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MasterclassHeader } from "@/components/masterclass/MasterclassHeader";
import { FeatureAccordion } from "@/components/masterclass/FeatureAccordion";
import {
  features,
  containerVariants,
  imageVariants,
} from "@/lib/constants/features";
import { MASTERCLASS_STYLES, MASTERCLASS_CONTENT } from "@/lib/constants/masterclass";

const MasterclassSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section
      className={MASTERCLASS_STYLES.wrapper}
      aria-labelledby="masterclass-heading"
    >
      <div className={MASTERCLASS_STYLES.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <MasterclassHeader
            badge={MASTERCLASS_CONTENT.badge}
            heading={MASTERCLASS_CONTENT.heading}
            description={MASTERCLASS_CONTENT.description}
          />
        </motion.div>

        <div className={MASTERCLASS_STYLES.layout}>
          <FeatureAccordion
            features={features}
            expandedIndex={expandedIndex}
            onToggle={handleToggle}
          />

          <motion.div
            className={MASTERCLASS_STYLES.image.wrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <Image
              src="/MasterClass.webp"
              alt="AI Masterclass illustration showing learning interface"
              width={600}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-contain"
              priority={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;
