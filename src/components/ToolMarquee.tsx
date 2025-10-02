"use client";
import ToolCard from "@/components/ToolCard";
import { motion, Variants } from "framer-motion";
import { tools } from "@/lib/constants/tools";
import Image from "next/image";

const SvgRender = ({ svg }: { svg: string }) => {
  return (
    <div className="w-full h-[420px] rounded-3xl overflow-hidden flex items-center justify-center">
      <div className="p-4">
        <Image
          src={svg}
          alt="tool-icon"
          width={350}
          height={350}
          className="object-contain max-w-[350px] max-h-[350px] rounded-3xl"
        />
      </div>
    </div>
  );
};

const ToolMarquee = () => {

  const containerVariants: Variants = {
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
        {tools.map((tool, index) => (
          <div key={`tool-1-${index}`} className="flex-shrink-0 w-80">
            <ToolCard svg={<SvgRender svg={tool.svgPath} />} />
          </div>
        ))}
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
