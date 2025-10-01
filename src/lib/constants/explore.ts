import type { Course } from "@/lib/types/explore";

export const EXPLORE_STYLES = {
    wrapper: "w-full py-10 bg-white",
    container: "lg:container mx-auto px-6",
    header: "flex items-center mb-10",
    heading: "text-3xl md:text-4xl text-foreground",
    filterWrapper: "flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-12 pb-2",
    filterScroll: "flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-2 px-2",
    categoryButton: {
      base: "flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 cursor-pointer rounded-full whitespace-nowrap font-medium transition-all duration-300 min-w-max",
      active: "bg-[#DEF2F1] border-2 text-[#2B7A78] border-[#5CC5BD]",
      inactive: "bg-[rgba(205,212,227,0.1)] text-[#677577] border-white border-2 hover:border-[#5CC5BD]",
    },
    seeMore: "hidden md:flex cursor-pointer items-center gap-2 text-[#2B7A78] underline underline-offset-4 hover:gap-3 transition-all duration-300 font-medium whitespace-nowrap",
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
    card: {
      wrapper: "group relative bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer",
      thumbnail: "relative overflow-hidden h-90 md:h-100 lg:h-100 lg:w-full",
      image: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
    },
  } as const;
  
  export const DEFAULT_CATEGORIES = [
    "All",
    "AI Assistant",
    "Image Generation",
    "Video Generation",
    "Voice Generation",
  ] as const;
  
  export const ICON_PATHS = {
    active: "/magic-icon.svg",
    inactive: "/magic-icon-dark.svg",
  } as const;
  

  export const SAMPLE_COURSES: Course[] = [
    {
      id: 1,
      title: "Eleven Labs AI Tool",
      instructor: "Hames John",
      rating: 4.9,
      duration: "14hr",
      thumbnail: "/video-cards/elevenlabs1.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      isPro: true,
      category: "Voice Generation",
    },
    {
      id: 2,
      title: "Eleven Labs AI Tool",
      instructor: "Hames John",
      rating: 4.7,
      duration: "14hr",
      thumbnail: "/video-cards/elevenlabs2.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      isPro: true,
      category: "Voice Generation",
    },
    {
      id: 3,
      title: "Eleven Labs AI Tool",
      instructor: "Hames John",
      rating: 4.7,
      duration: "14hr",
      thumbnail: "/video-cards/elevenlabs3.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      isPro: true,
      category: "Voice Generation",
    },
    {
      id: 4,
      title: "Eleven Labs AI Tool",
      instructor: "Hames John",
      rating: 4.7,
      duration: "14hr",
      thumbnail: "/video-cards/elevenlabs1.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      isPro: true,
      category: "Voice Generation",
    },
  ];