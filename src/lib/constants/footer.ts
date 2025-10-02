import type { FooterLink } from "@/lib/types/footer";

export const FOOTER_LINKS: FooterLink[] = [
  { label: "Master Classes", href: "/master-classes" },
  { label: "Corporate Training", href: "/corporate-training" },
  { label: "News Feed", href: "/news" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];


export const FOOTER_STYLES = {
    wrapper: "w-full bg-light",
    container: "lg:container mx-auto px-6 mb-10 pb-10 pt-10 w-full rounded-[24px] bg-[linear-gradient(to_bottom,_#f4f4f4_0%,_#ffffff_60%,_#f4f4f4_100%)]",
    innerContainer: "max-w-6xl mx-auto",
    newsletter: {
      wrapper: "flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16",
      content: {
        wrapper: "max-w-xl",
        heading: "text-3xl md:text-4xl font-semibold text-gray-700 mb-4",
        description: "text-gray-400 leading-relaxed",
      },
      form: {
        wrapper: "w-full lg:w-auto",
        container: "flex flex-col gap-3",
        fieldGroup: "flex flex-col sm:flex-row gap-3",
        input: "px-6 py-3 bg-white border border-gray-300 rounded-4xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent w-full sm:w-80",
        button: "rounded-full px-6 py-6",
        privacy: "flex items-center gap-2 text-sm text-gray-400",
        icon: "w-4 h-4 flex-shrink-0",
        link: "underline hover:text-gray-600 transition-colors",
      },
    },
    divider: "border-t border-gray-300 mb-12",
    navigation: {
      wrapper: "flex flex-col items-center gap-8",
      logoWrapper: "flex justify-center",
      navWrapper: "flex flex-wrap justify-center items-center gap-x-8 gap-y-4",
      link: "text-gray-400 hover:text-gray-600 transition-colors duration-300",
    },
    copyright: {
      wrapper: "mt-12 text-center",
      text: "text-gray-400 text-sm",
    },
  } as const;
  
  export const FOOTER_CONTENT = {
    newsletter: {
      heading: "Silicon Academy News Weekly",
      description:
        "Stay up to date on releases and business tips by joining our newsletter. By subscribing, you agree to our Privacy Policy.",
      submitButton: "Subscribe",
      privacyNotice: "Your email is safe with us.",
      privacyLinkText: "privacy policy",
      privacyLinkUrl: "/privacy-policy",
      emailPlaceholder: "Enter your email",
    },
    logo: {
      src: "/silicon_academy_logo.svg",
      alt: "Silicon Academy",
    },
    copyright: {
      companyName: "Silicon Academy",
    },
  } as const;
  