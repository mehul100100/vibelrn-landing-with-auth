import { Variants } from "framer-motion";
import { NavItem } from "../types/navbar";

export const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const NAVBAR_STYLES = {
  container: "max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8",
  content: "flex items-center justify-between",
  navLink:
    "text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary relative",
  activeIndicator:
    "absolute -bottom-1 left-1/2 w-1/4 h-0.5 bg-primary -translate-x-1/2",
} as const;

export const CLERK_CONFIG = {
  userButtonAppearance: {
    elements: {
      avatarBox: "w-10 h-10",
    },
  },
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "#", active: true },
  { label: "Master Classes", href: "#", active: false },
  { label: "Corporate Training", href: "#", active: false },
  { label: "News Feed", href: "#", active: false },
];
