export const MASTERCLASS_STYLES = {
  wrapper: 'w-full py-20 bg-background',
  container: 'lg:container mx-auto px-6',
  badge: {
    wrapper: 'flex justify-center mb-8',
    inner: 'inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200',
    text: 'text-sm text-gray-700 font-medium',
  },
  header: {
    wrapper: 'text-center mb-6',
    heading: 'text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight',
    description: 'text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed',
  },
  layout: 'grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-start',
  accordion: {
    wrapper: 'space-y-4',
    item: {
      base: 'cursor-pointer transition-all duration-500 ease-in-out rounded-[19px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
      expanded: 'border-2 border-[rgba(121,121,121,0.16)]',
      collapsed: 'border-2 border-transparent',
    },
    content: {
      wrapper: 'flex items-start gap-4 transition-all duration-500 ease-in-out',
      expanded: 'p-8',
      collapsed: 'p-4 pl-4',
    },
    icon: 'flex-shrink-0 p-2 rounded-lg',
    title: {
      base: 'font-medium text-gray-900 transition-all duration-500 ease-in-out',
      expanded: 'text-xl mb-3',
      collapsed: 'text-lg mb-0',
    },
    description: {
      base: 'overflow-hidden transition-all duration-500 ease-in-out',
      expanded: 'max-h-48 opacity-100 mt-2',
      collapsed: 'max-h-0 opacity-0 mt-0',
    },
  },
  image: {
    wrapper: 'relative lg:sticky lg:top-8',
  },
} as const;

export const MASTERCLASS_CONTENT = {
  badge: 'Smarter, not harder',
  heading: 'Masterclass for the AI-Curious',
  description:
      'Jump into practical, no-fluff AI lessons made for freelancers, small business owners, and creative minds no coding, just results.',
} as const;

export const FEATURE_STYLES = {
  expanded: {
    background: 'linear-gradient(98.41deg, #FFFFFF -317.11%, #CFCFCF 822.24%)',
    boxShadow: `-10.6087px 119.348px 47.7391px rgba(28, 55, 58, 0.01),
                   -6.63043px 67.6304px 41.1087px rgba(28, 55, 58, 0.04),
                   -2.65217px 30.5px 30.5px rgba(28, 55, 58, 0.07),
                   -1.32609px 7.95652px 15.913px rgba(28, 55, 58, 0.08),
                   inset 3.97826px -3.97826px 5.30435px rgba(255, 255, 255, 0.25),
                   inset 0px 5.30435px 8.35435px rgba(255, 255, 255, 0.25)`,
  },
  collapsed: {
    background: 'transparent',
    boxShadow: 'none',
  },
} as const;
