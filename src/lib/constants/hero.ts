import type { HeroVariants } from '@/lib/types/hero';

export const HERO_STYLES = {
  container: 'lg:container mx-auto px-6 mt-18 mb-10 pb-20 pt-10 w-full rounded-[24px]',
  gradient: 'bg-[linear-gradient(to_bottom,_#f4f4f4_0%,_#ffffff_60%,_#f4f4f4_100%)]',
  content: 'mx-auto text-center space-y-8',
  heading: 'text-6xl md:text-7xl text-foreground leading-tight',
  description: 'text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-10',
  toolsCount: 'text-sm font-medium text-foreground',
} as const;

export const HERO_ANIMATIONS: HeroVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  underline: {
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
  },
  searchBar: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
};

export const SEARCH_BAR_STYLES = {
  wrapper: 'max-w-2xl mx-auto',
  container: 'flex justify-between items-center px-5 py-3 rounded-full w-full border-6 border-[#f8f8f8]/[0.35] backdrop-blur-[7.6px] bg-[linear-gradient(194.34deg,rgba(236,241,242,0.8)_-76.63%,#ecf1f2_50.8%,rgba(236,241,242,0.8)_186.6%)]',
  iconWrapper: 'pl-2 pr-2 flex items-center flex-shrink-0',
  input: 'flex-1 min-w-0 py-2 md:py-3 bg-transparent placeholder-gray-400 text-gray-600 ml-2 focus:outline-none text-sm md:text-base border-0',
  button: 'cursor-pointer relative flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-medium text-white shadow-md text-sm md:text-base overflow-hidden border border-gray-300 bg-gradient-to-br from-[#62BEBA] to-[#3F7E7F]',
  buttonPattern: 'absolute inset-0 pointer-events-none opacity-100',
} as const;

export const HERO_CONTENT = {
  toolsCount: 999,
  toolsLabel: 'AI Tools',
  subLabel: '& Learning Series with top Tutors',
  defaultPlaceholder: 'Search Series, Tools...',
} as const;
