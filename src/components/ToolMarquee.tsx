"use client";
import ToolCard from "@/components/ToolCard";
import { motion } from "framer-motion";
import { tools } from "@/lib/constants/tools";

const SvgRender = ({ svg }: { svg: string }) => {
  return (
    <div className="w-full h-85 flex items-center justify-center">
      <img
        src={svg}
        alt="tool-icon"
        className="w-full h-full object-contain w-full"
      />
    </div>
  );
};

const ToolMarquee = () => {

  // Container fade-in animation
  const containerVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className="mt-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="flex animate-marquee pb-[10px]">
        {/* First set of cards */}
        {tools.map((tool, index) => (
          <div key={`tool-1-${index}`} className="flex-shrink-0 w-80">
            <ToolCard svg={<SvgRender svg={tool.svgPath} />} />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {tools.map((tool, index) => (
          <div key={`tool-2-${index}`} className="flex-shrink-0 w-80">
            <ToolCard svg={<SvgRender svg={tool.svgPath} />} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ToolMarquee;
