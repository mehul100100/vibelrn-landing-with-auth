import { Variants } from "framer-motion";

export interface HeroHeadingProps {
  title: string;
  highlightedWord: string;
  description: string;
}

export interface HeroSearchBarProps {
  placeholder?: string;
}

export interface ToolsCountProps {
  count: number;
}

export type HeroVariants = {
  container: Variants;
  fadeUp: Variants;
  underline: Variants;
  searchBar: Variants;
};
