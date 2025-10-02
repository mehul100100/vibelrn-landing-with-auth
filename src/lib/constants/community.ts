export const COMMUNITY_STYLES = {
    wrapper: "w-full py-20 bg-gradient-to-b from-white to-[#E0F7F7]",
    container: "lg:container mx-auto px-6",
    layout: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center",
    content: {
      wrapper: "space-y-8",
      badge: {
        wrapper: "inline-flex items-center px-6 py-3 bg-transparent rounded-full border border-[#DDDDDD]",
        text: "text-sm text-gray-700 font-medium",
      },
      heading: {
        wrapper: "space-y-4",
        text: "text-5xl md:text-6xl text-gray-900 leading-tight",
      },
      description: "text-lg text-gray-600 leading-relaxed max-w-xl",
      cta: "rounded-full px-6 py-6",
    },
    visual: {
      wrapper: "relative flex items-center border-[6px] rounded-[35px] border-white/[0.37] shadow-xl justify-center overflow-hidden bg-white",
      image: "w-full h-auto object-contain",
    },
  } as const;
  
  export const COMMUNITY_CONTENT = {
    badge: "Built for creators, devs & curious minds",
    heading: "Step Into the AI",
    headingBold: "Community",
    description:
      "Connect with people who are actually building cool stuff with AI. Ask questions, share ideas, or just vibe - no gatekeeping.",
    ctaText: "Join the Community",
    ctaLink: "/community",
    imageSrc: "/community-testimonial.svg",
    imageAlt: "Community testimonials showing member feedback and engagement",
  } as const;
  