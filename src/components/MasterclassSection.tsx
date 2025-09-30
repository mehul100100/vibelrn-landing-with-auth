// app/src/components/MasterclassSection.tsx
"use client";
import { useState } from "react";
import { Pen, Star, Zap, Target, Flag } from "lucide-react";
import { motion } from "framer-motion";

const MasterclassSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const features = [
    {
      icon: <Pen className="w-5 h-5 text-gray-700" />,
      title: "Real use cases tailored for business & creative work",
      description:
        "Learn how AI can work for you. Whether managing a business, building a brand, or working on projects, we show real ways to apply AI for immediate value.",
    },
    {
      icon: <Star className="w-5 h-5 text-gray-700" />,
      title: "Step-by-step lessons anyone can follow",
      description:
        "Learn how AI can work for you. Whether managing a business, building a brand, or working on projects, we show real ways to apply AI for immediate value.",
    },
    {
      icon: <Zap className="w-5 h-5 text-gray-700" />,
      title: "Bite-sized videos that fit your schedule",
      description:
        "Learn how AI can work for you. Whether managing a business, building a brand, or working on projects, we show real ways to apply AI for immediate value.",
    },
    {
      icon: <Target className="w-5 h-5 text-gray-700" />,
      title: "Curated tools to boost daily productivity",
      description:
        "Learn how AI can work for you. Whether managing a business, building a brand, or working on projects, we show real ways to apply AI for immediate value.",
    },
    {
      icon: <Flag className="w-5 h-5 text-gray-700" />,
      title: "Learn by doing, not by reading manuals",
      description:
        "Learn how AI can work for you. Whether managing a business, building a brand, or working on projects, we show real ways to apply AI for immediate value.",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  // Container variants for staggered children
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Fade up animation
  const fadeUpVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Feature items stagger animation
  const featureContainerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const featureItemVariants: any = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Image animation
  const imageVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <div className="w-full py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div className="flex justify-center mb-8" variants={fadeUpVariants}>
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200">
              <span className="text-sm text-gray-700 font-medium">
                Lorem ipsum dolor sit
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div className="text-center mb-6" variants={fadeUpVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Masterclass for the AI-Curious
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed"
            variants={fadeUpVariants}
          >
            Jump into practical, no-fluff AI lessons made for freelancers, small
            <br className="hidden md:block" />
            business owners, and creative minds no coding, just results.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-start">
          {/* Left Column - Dynamic Features */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={featureContainerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureItemVariants}
                onClick={() => toggleExpand(index)}
                className={`cursor-pointer transition-all duration-500 ease-in-out ${
                  expandedIndex === index
                    ? "rounded-[19px] border-2 border-[rgba(121,121,121,0.16)]"
                    : "rounded-3xl border-2 border-transparent"
                }`}
                style={{
                  background:
                    expandedIndex === index
                      ? "linear-gradient(98.41deg, #FFFFFF -317.11%, #CFCFCF 822.24%)"
                      : "transparent",
                  boxShadow:
                    expandedIndex === index
                      ? `-10.6087px 119.348px 47.7391px rgba(28, 55, 58, 0.01),
                         -6.63043px 67.6304px 41.1087px rgba(28, 55, 58, 0.04),
                         -2.65217px 30.5px 30.5px rgba(28, 55, 58, 0.07),
                         -1.32609px 7.95652px 15.913px rgba(28, 55, 58, 0.08),
                         inset 3.97826px -3.97826px 5.30435px rgba(255, 255, 255, 0.25),
                         inset 0px 5.30435px 8.35435px rgba(255, 255, 255, 0.25)`
                      : "none",
                }}
              >
                <div
                  className={`flex items-start gap-4 transition-all duration-500 ease-in-out ${
                    expandedIndex === index ? "p-8" : "p-4 pl-4"
                  }`}
                >
                  <div className="flex-shrink-0 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-medium text-gray-900 transition-all duration-500 ease-in-out ${
                        expandedIndex === index ? "text-xl mb-3" : "text-lg mb-0"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedIndex === index
                          ? "max-h-48 opacity-100 mt-2"
                          : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - WebP Image Only */}
          <motion.div
            className="relative lg:sticky lg:top-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <img
              src="/MasterClass.webp"
              alt="Masterclass"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MasterclassSection;
