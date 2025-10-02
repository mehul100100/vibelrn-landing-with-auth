import type { Variants } from 'framer-motion';
import type { Feature } from '../types/feature';
import { Flag, Pen, Star, Target, Zap } from 'lucide-react';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const fadeUpVariants: Variants = {
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

export const featureContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const featureItemVariants: Variants = {
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

export const imageVariants: Variants = {
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

export const features: Feature[] = [
  {
    id: 'feature-real-use-cases',
    icon: <Pen className="h-5 w-5 text-gray-700" aria-hidden="true" />,
    title: 'Real use cases tailored for business & creative work',
    description:
      'Learn how AI can work for you. Whether managing a business, building a brand, or working on projects, we show real ways to apply AI for immediate value.',
  },
  {
    id: 'feature-step-by-step',
    icon: <Star className="h-5 w-5 text-gray-700" aria-hidden="true" />,
    title: 'Step-by-step lessons anyone can follow',
    description:
      'Learn how AI can work for you. Whether managing a business, building a brand, or working on projects, we show real ways to apply AI for immediate value.',
  },
  {
    id: 'feature-bite-sized',
    icon: <Zap className="h-5 w-5 text-gray-700" aria-hidden="true" />,
    title: 'Bite-sized videos that fit your schedule',
    description:
      'Learn how AI can work for you. Whether managing a business, building a brand, or working on projects, we show real ways to apply AI for immediate value.',
  },
  {
    id: 'feature-curated-tools',
    icon: <Target className="h-5 w-5 text-gray-700" aria-hidden="true" />,
    title: 'Curated tools to boost daily productivity',
    description:
      'Learn how AI can work for you. Whether managing a business, building a brand, or working on projects, we show real ways to apply AI for immediate value.',
  },
  {
    id: 'feature-learn-by-doing',
    icon: <Flag className="h-5 w-5 text-gray-700" aria-hidden="true" />,
    title: 'Learn by doing, not by reading manuals',
    description:
      'Learn how AI can work for you. Whether managing a business, building a brand, or working on projects, we show real ways to apply AI for immediate value.',
  },
];
