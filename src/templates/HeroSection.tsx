"use client"
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import ToolMarquee from "@/components/ToolMarquee";

const HeroSection = () => {
  // Container animation for staggering children
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  // Fade up animation for text elements
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

  // Underline animation
  const underlineVariants: any = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.5,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Search bar animation with slight scale
  const searchBarVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="lg:container mx-auto px-6 mt-18 mb-10 pb-20 pt-10 w-full rounded-[24px]
        bg-[linear-gradient(to_bottom,_#f4f4f4_0%25,_#ffffff_60%25,_#f4f4f4_100%25)]">
    <motion.div
      className="mx-auto text-center space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Heading with underline */}
      <div className="space-y-4">
        <motion.h1
          className="text-6xl md:text-7xl text-foreground leading-tight"
          variants={fadeUpVariants}
        >
          Master AI Tools In{" "}
          <span className="relative inline-block font-bold">
            Minutes
            <motion.img
              src="/underline.34eea7c8.svg"
              alt=""
              className="absolute -bottom-5 left-0 w-full h-5"
              style={{
                filter:
                  "drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.25)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15))",
                transformOrigin: "left",
              }}
              variants={underlineVariants}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-10"
          variants={fadeUpVariants}
        >
          Discover, learn, and apply cutting-edge AI tools without the overwhelm.
          <br />
          From automation to creativity, we help you unlock real results, fast.
        </motion.p>
      </div>

      {/* Tools Count */}
      <motion.p
        className="text-sm font-medium text-foreground"
        variants={fadeUpVariants}
      >
        <span className="font-bold">999+ AI Tools</span> & Learning Series with top Tutors
      </motion.p>

      {/* Search Bar */}
      <motion.div className="max-w-2xl mx-auto" variants={searchBarVariants}>
        <div className="flex justify-between items-center px-5 py-3 rounded-full w-full border-6 border-[#ffffff5e] backdrop-blur-[7.6px] bg-[linear-gradient(194.34deg,rgba(222,242,241,0.8)_-76.63%,#F0F0F0_50.8%,rgba(222,242,241,0.8)_186.6%)] shadow-[ -137.118px_343.674px_147.666px_rgba(0,0,0,0.01), -77.3487px_193.372px_124.813px_rgba(0,0,0,0.03), -34.2795px_86.1383px_92.2911px_rgba(0,0,0,0.05), -8.78963px_21.0951px_50.9798px_rgba(0,0,0,0.05)]">
          {/* Search Icon */}
          <div className="pl-2 pr-2 flex items-center flex-shrink-0">
            <Search className="w-5 h-5 text-black" />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search Series, Tools..."
            className="flex-1 min-w-0 py-2 md:py-3 bg-transparent placeholder-gray-400 text-gray-600 ml-2 focus:outline-none text-sm md:text-base border-0"
          />

          {/* Search Button */}
          <motion.button
            className="cursor-pointer relative flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-medium text-white shadow-md text-sm md:text-base overflow-hidden border border-gray-300 bg-gradient-to-br from-[#62BEBA] to-[#3F7E7F]"
            style={{
              boxShadow:
                "0 0 8px rgba(98, 190, 186, 0.6), 0 0 4px rgba(63, 126, 127, 0.4)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
      radial-gradient(circle at center, rgba(255,255,255,0.2) 1px, transparent 1px)
    `,
                backgroundSize: "6px 6px",
                maskImage: "linear-gradient(to right, transparent, black)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black)",
                opacity: 1,
              }}
            />

            <span className="relative">Search</span>
            <img src="/right_icon.svg" alt="right-icon" />
          </motion.button>
        </div>
      </motion.div>
      <ToolMarquee />
    </motion.div>
    </div>
  );
};

export default HeroSection;
