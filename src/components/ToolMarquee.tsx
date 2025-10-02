'use client';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ToolCard from '@/components/ToolCard';
import { tools } from '@/lib/constants/tools';

const SvgRender = ({ svg }: { svg: string }) => {
  return (
    <div className="flex h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl">
      <div className="p-4">
        <Image
          src={svg}
          alt="tool-icon"
          width={350}
          height={350}
          className="max-h-[350px] max-w-[350px] rounded-3xl object-contain"
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
      className="relative mt-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="animate-marquee flex pb-[10px]">
        {tools.map((tool, index) => (
          <div key={`tool-1-${index}`} className="w-80 flex-shrink-0">
            <ToolCard svg={<SvgRender svg={tool.svgPath} />} />
          </div>
        ))}
        {tools.map((tool, index) => (
          <div key={`tool-2-${index}`} className="w-80 flex-shrink-0">
            <ToolCard svg={<SvgRender svg={tool.svgPath} />} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ToolMarquee;
