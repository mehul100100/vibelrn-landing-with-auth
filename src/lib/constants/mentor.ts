export const MENTOR_STYLES = {
    wrapper: "w-full bg-light sm:mt-[-40] relative overflow-hidden",
    container: "lg:container mx-auto px-6 mb-10 pb-0 pt-10 w-full rounded-[24px] bg-[linear-gradient(to_bottom,_#f4f4f4_0%,_#ffffff_60%,_#f4f4f4_100%)]",
    innerContainer: "container mx-auto px-6 relative z-10",
    header: {
      badgeWrapper: "flex justify-center mb-8",
      badge: "inline-flex items-center sm:px-15 px-5 py-3 bg-transparent rounded-full border border-gray-200",
      badgeText: "text-sm text-gray-700 font-medium",
      headingWrapper: "text-center mb-6",
      heading: "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight",
      description: "text-center text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed",
    },
    cta: {
      wrapper: "flex justify-center mb-16",
      button: "rounded-full px-6 py-6",
    },
    visual: {
      wrapper: "max-w-6xl mx-auto flex justify-center items-center",
    },
  } as const;
  
  export const MENTOR_CONTENT = {
    badge: "Learn from people who have done it",
    heading: "Hire a 1:1 Mentor",
    description:
      "Stuck or just getting started? Talk to someone who is already figured it out.\nBook a session, get real answers, skip the guessing.",
    ctaText: "Book Your Mentor Now",
    ctaLink: "/book-mentor",
    imageSrc: "/calandar.svg",
    imageAlt: "Interactive calendar interface showing mentor availability and booking options",
  } as const;
  